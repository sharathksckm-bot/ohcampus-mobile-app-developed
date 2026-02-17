import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { collegesAPI, coursesAPI, feesAPI, admissionChargesAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../components/ui/command';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  Plus,
  Pencil,
  Trash2,
  IndianRupee,
  Building2,
  GraduationCap,
  Calendar,
  Home,
  Loader2,
  Receipt,
  Calculator,
  Upload,
  Download,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
  X,
  Search,
  ChevronsUpDown,
  Check,
} from 'lucide-react';
import { toast } from 'sonner';

export default function FeeManagement() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [collegeSearchQuery, setCollegeSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [fees, setFees] = useState([]);
  const [admissionCharges, setAdmissionCharges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [bulkFeeDialogOpen, setBulkFeeDialogOpen] = useState(false);
  const [admissionDialogOpen, setAdmissionDialogOpen] = useState(false);
  const [csvDialogOpen, setCsvDialogOpen] = useState(false);
  const [editingFee, setEditingFee] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState(null);
  const fileInputRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [singleCourseSearch, setSingleCourseSearch] = useState('');
  const [bulkCourseSearch, setBulkCourseSearch] = useState('');
  const [admissionCourseSearch, setAdmissionCourseSearch] = useState('');
  const [singleCourseOpen, setSingleCourseOpen] = useState(false);
  const [bulkCourseOpen, setBulkCourseOpen] = useState(false);
  const [admissionCourseOpen, setAdmissionCourseOpen] = useState(false);
  const [formData, setFormData] = useState({
    course_id: '',
    fee_type: 'annual',
    year_or_semester: 1,
    amount: '',
    hostel_fee: '',
    admission_fee: '',
    description: '',
  });
  
  // Bulk fee form state
  const [bulkFormData, setBulkFormData] = useState({
    course_id: '',
    fee_type: 'annual',
    fees: []
  });
  
  const [admissionFormData, setAdmissionFormData] = useState({
    course_id: '',
    registration_fee: '',
    admission_fee: '',
    caution_deposit: '',
    uniform_fee: '',
    library_fee: '',
    lab_fee: '',
    other_charges: '',
    other_charges_description: '',
  });

  const fetchColleges = useCallback(async () => {
    try {
      setLoading(true);
      const response = await collegesAPI.getAll({});
      setColleges(response.data);
    } catch (error) {
      toast.error('Failed to load colleges');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchColleges();
  }, [fetchColleges]);

  const fetchCollegeData = useCallback(async (collegeId) => {
    try {
      setCoursesLoading(true);
      const [coursesRes, feesRes, chargesRes] = await Promise.all([
        coursesAPI.getByCollege(collegeId),
        feesAPI.getByCollege(collegeId),
        admissionChargesAPI.getByCollege(collegeId),
      ]);
      setCourses(coursesRes.data);
      setFees(feesRes.data);
      setAdmissionCharges(chargesRes.data);
    } catch (error) {
      toast.error('Failed to load college data');
    } finally {
      setCoursesLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedCollege) {
      fetchCollegeData(selectedCollege.id);
    }
  }, [selectedCollege, fetchCollegeData]);

  const handleCollegeSelect = (collegeId) => {
    const college = colleges.find(c => c.id === collegeId);
    setSelectedCollege(college);
  };

  const resetForm = () => {
    setFormData({
      course_id: '',
      fee_type: 'annual',
      year_or_semester: 1,
      amount: '',
      hostel_fee: '',
      admission_fee: '',
      description: '',
    });
    setEditingFee(null);
    setSingleCourseSearch('');
  };

  const resetAdmissionForm = () => {
    setAdmissionFormData({
      course_id: '',
      registration_fee: '',
      admission_fee: '',
      caution_deposit: '',
      uniform_fee: '',
      library_fee: '',
      lab_fee: '',
      other_charges: '',
      other_charges_description: '',
    });
    setAdmissionCourseSearch('');
  };

  const handleOpenDialog = (fee = null) => {
    if (fee) {
      setEditingFee(fee);
      setFormData({
        course_id: fee.course_id,
        fee_type: fee.fee_type,
        year_or_semester: fee.year_or_semester,
        amount: fee.amount.toString(),
        hostel_fee: fee.hostel_fee?.toString() || '',
        admission_fee: fee.admission_fee?.toString() || '',
        description: fee.description || '',
      });
    } else {
      resetForm();
    }
    setDialogOpen(true);
  };

  const handleOpenAdmissionDialog = (charge = null) => {
    if (charge) {
      setAdmissionFormData({
        course_id: charge.course_id,
        registration_fee: charge.registration_fee?.toString() || '',
        admission_fee: charge.admission_fee?.toString() || '',
        caution_deposit: charge.caution_deposit?.toString() || '',
        uniform_fee: charge.uniform_fee?.toString() || '',
        library_fee: charge.library_fee?.toString() || '',
        lab_fee: charge.lab_fee?.toString() || '',
        other_charges: charge.other_charges?.toString() || '',
        other_charges_description: charge.other_charges_description || '',
      });
    } else {
      resetAdmissionForm();
    }
    setAdmissionDialogOpen(true);
  };

  // Initialize bulk fee form when opening dialog
  const handleOpenBulkFeeDialog = (courseId = null, feeType = 'annual') => {
    const course = courseId ? courses.find(c => c.id === courseId) : null;
    const existingFees = courseId ? fees.filter(f => f.course_id === courseId && f.fee_type === feeType) : [];
    
    // Determine number of periods based on course duration
    // Extended to support up to 10 years and 20 semesters for longer courses
    let numPeriods = feeType === 'annual' 
      ? Math.max(course?.duration_years || 4, 6)  // Default at least 6 years for Pharm.D etc
      : Math.max(course?.duration_semesters || 8, 12);  // Default at least 12 semesters
    
    // If there are existing fees beyond the default periods, include those too
    const maxExistingPeriod = existingFees.length > 0 
      ? Math.max(...existingFees.map(f => f.year_or_semester))
      : 0;
    numPeriods = Math.max(numPeriods, maxExistingPeriod);
    
    // Pre-populate with existing fees or empty entries
    const feeEntries = Array.from({ length: numPeriods }, (_, i) => {
      const existing = existingFees.find(f => f.year_or_semester === i + 1);
      return {
        year_or_semester: i + 1,
        amount: existing?.amount?.toString() || '',
        hostel_fee: existing?.hostel_fee?.toString() || '',
        description: existing?.description || ''
      };
    });
    
    setBulkFormData({
      course_id: courseId || '',
      fee_type: feeType,
      fees: feeEntries
    });
    setBulkFeeDialogOpen(true);
  };

  // Update bulk fee entry
  const updateBulkFeeEntry = (index, field, value) => {
    setBulkFormData(prev => {
      const newFees = [...prev.fees];
      newFees[index] = { ...newFees[index], [field]: value };
      return { ...prev, fees: newFees };
    });
  };

  // Handle bulk fee course change
  const handleBulkFeeCourseChange = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    const existingFees = fees.filter(f => f.course_id === courseId && f.fee_type === bulkFormData.fee_type);
    
    // Extended to support longer courses
    let numPeriods = bulkFormData.fee_type === 'annual' 
      ? Math.max(course?.duration_years || 4, 6)
      : Math.max(course?.duration_semesters || 8, 12);
    
    // Include any existing fees beyond the default periods
    const maxExistingPeriod = existingFees.length > 0 
      ? Math.max(...existingFees.map(f => f.year_or_semester))
      : 0;
    numPeriods = Math.max(numPeriods, maxExistingPeriod);
    
    const feeEntries = Array.from({ length: numPeriods }, (_, i) => {
      const existing = existingFees.find(f => f.year_or_semester === i + 1);
      return {
        year_or_semester: i + 1,
        amount: existing?.amount?.toString() || '',
        hostel_fee: existing?.hostel_fee?.toString() || '',
        description: existing?.description || ''
      };
    });
    
    setBulkFormData(prev => ({
      ...prev,
      course_id: courseId,
      fees: feeEntries
    }));
  };

  // Handle bulk fee type change
  const handleBulkFeeTypeChange = (feeType) => {
    const course = courses.find(c => c.id === bulkFormData.course_id);
    const existingFees = bulkFormData.course_id ? fees.filter(f => f.course_id === bulkFormData.course_id && f.fee_type === feeType) : [];
    
    // Extended to support longer courses
    let numPeriods = feeType === 'annual' 
      ? Math.max(course?.duration_years || 4, 6)
      : Math.max(course?.duration_semesters || 8, 12);
    
    // Include any existing fees beyond the default periods
    const maxExistingPeriod = existingFees.length > 0 
      ? Math.max(...existingFees.map(f => f.year_or_semester))
      : 0;
    numPeriods = Math.max(numPeriods, maxExistingPeriod);
    
    const feeEntries = Array.from({ length: numPeriods }, (_, i) => {
      const existing = existingFees.find(f => f.year_or_semester === i + 1);
      return {
        year_or_semester: i + 1,
        amount: existing?.amount?.toString() || '',
        hostel_fee: existing?.hostel_fee?.toString() || '',
        description: existing?.description || ''
      };
    });
    
    setBulkFormData(prev => ({
      ...prev,
      fee_type: feeType,
      fees: feeEntries
    }));
  };

  // Submit bulk fees
  const handleBulkFeeSubmit = async (e) => {
    e.preventDefault();
    
    if (!bulkFormData.course_id) {
      toast.error('Please select a course');
      return;
    }
    
    // Filter out empty entries
    const validFees = bulkFormData.fees.filter(f => f.amount && parseFloat(f.amount) > 0);
    
    if (validFees.length === 0) {
      toast.error('Please enter at least one fee amount');
      return;
    }
    
    setSubmitting(true);
    try {
      const payload = {
        college_id: selectedCollege.id,
        course_id: bulkFormData.course_id,
        fee_type: bulkFormData.fee_type,
        fees: validFees.map(f => ({
          year_or_semester: f.year_or_semester,
          amount: parseFloat(f.amount),
          hostel_fee: f.hostel_fee ? parseFloat(f.hostel_fee) : null,
          description: f.description || null
        }))
      };
      
      await feesAPI.createBulk(payload);
      toast.success(`Successfully saved ${validFees.length} fee records`);
      setBulkFeeDialogOpen(false);
      fetchCollegeData(selectedCollege.id);
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save fees');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.course_id || !formData.amount) {
      toast.error('Please fill all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        college_id: selectedCollege.id,
        course_id: formData.course_id,
        fee_type: formData.fee_type,
        year_or_semester: parseInt(formData.year_or_semester),
        amount: parseFloat(formData.amount),
        hostel_fee: formData.hostel_fee ? parseFloat(formData.hostel_fee) : null,
        admission_fee: formData.admission_fee ? parseFloat(formData.admission_fee) : null,
        description: formData.description || null,
      };

      if (editingFee) {
        await feesAPI.update(editingFee.id, payload);
        toast.success('Fee updated successfully');
      } else {
        await feesAPI.create(payload);
        toast.success('Fee added successfully');
      }

      setDialogOpen(false);
      resetForm();
      fetchCollegeData(selectedCollege.id);
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save fee');
    } finally {
      setSubmitting(false);
    }
  };

  const handleAdmissionSubmit = async (e) => {
    e.preventDefault();
    
    if (!admissionFormData.course_id) {
      toast.error('Please select a course');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        college_id: selectedCollege.id,
        course_id: admissionFormData.course_id,
        registration_fee: admissionFormData.registration_fee ? parseFloat(admissionFormData.registration_fee) : null,
        admission_fee: admissionFormData.admission_fee ? parseFloat(admissionFormData.admission_fee) : null,
        caution_deposit: admissionFormData.caution_deposit ? parseFloat(admissionFormData.caution_deposit) : null,
        uniform_fee: admissionFormData.uniform_fee ? parseFloat(admissionFormData.uniform_fee) : null,
        library_fee: admissionFormData.library_fee ? parseFloat(admissionFormData.library_fee) : null,
        lab_fee: admissionFormData.lab_fee ? parseFloat(admissionFormData.lab_fee) : null,
        other_charges: admissionFormData.other_charges ? parseFloat(admissionFormData.other_charges) : null,
        other_charges_description: admissionFormData.other_charges_description || null,
      };

      await admissionChargesAPI.create(payload);
      toast.success('Admission charges saved successfully');

      setAdmissionDialogOpen(false);
      resetAdmissionForm();
      fetchCollegeData(selectedCollege.id);
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save admission charges');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (feeId) => {
    if (!window.confirm('Are you sure you want to delete this fee record?')) {
      return;
    }

    try {
      await feesAPI.delete(feeId);
      toast.success('Fee deleted successfully');
      fetchCollegeData(selectedCollege.id);
    } catch (error) {
      toast.error('Failed to delete fee');
    }
  };

  const handleDeleteAdmissionCharge = async (chargeId) => {
    if (!window.confirm('Are you sure you want to delete these admission charges?')) {
      return;
    }

    try {
      await admissionChargesAPI.delete(chargeId);
      toast.success('Admission charges deleted successfully');
      fetchCollegeData(selectedCollege.id);
    } catch (error) {
      toast.error('Failed to delete admission charges');
    }
  };

  // CSV Import handlers
  const handleCSVImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.name.endsWith('.csv')) {
      toast.error('Please select a CSV file');
      return;
    }
    
    setImporting(true);
    setImportResult(null);
    
    try {
      const response = await feesAPI.importCSV(file);
      setImportResult(response.data);
      
      if (response.data.imported_count > 0) {
        toast.success(`Successfully imported ${response.data.imported_count} fee records`);
        if (selectedCollege) {
          fetchCollegeData(selectedCollege.id);
        }
      }
      
      if (response.data.total_errors > 0) {
        toast.warning(`${response.data.total_errors} rows had errors`);
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to import CSV');
      setImportResult({
        imported_count: 0,
        errors: [error.response?.data?.detail || 'Unknown error'],
        total_errors: 1
      });
    } finally {
      setImporting(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const downloadCSVTemplate = async () => {
    try {
      const response = await feesAPI.getCSVTemplate();
      const template = response.data;
      
      // Create CSV content
      const headers = template.columns.join(',');
      const exampleRow = template.columns.map(col => template.example_row[col] || '').join(',');
      const csvContent = `${headers}\n${exampleRow}`;
      
      // Download
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'fees_template.csv';
      a.click();
      window.URL.revokeObjectURL(url);
      
      toast.success('Template downloaded');
    } catch (error) {
      toast.error('Failed to download template');
    }
  };

  const formatCurrency = (amount) => {
    if (!amount) return '—';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCourseName = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    return course?.name || 'Unknown Course';
  };

  const getCourse = (courseId) => {
    return courses.find(c => c.id === courseId);
  };

  const filteredFees = fees.filter(fee => 
    activeTab === 'all' || fee.fee_type === activeTab || (activeTab === 'hostel' && fee.hostel_fee)
  );

  // Group fees by course
  const feesByCourse = fees.reduce((acc, fee) => {
    if (!acc[fee.course_id]) {
      acc[fee.course_id] = [];
    }
    acc[fee.course_id].push(fee);
    return acc;
  }, {});

  // Get period options based on selected course and fee type
  // Extended to support up to 10 years and 20 semesters for longer courses like Pharm.D (6 years)
  const getPeriodOptions = () => {
    const course = getCourse(formData.course_id);
    if (!course) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    if (formData.fee_type === 'annual') {
      // Use course duration or default to 10 years max for longer courses
      const maxYears = Math.max(course.duration_years || 4, 10);
      return Array.from({ length: maxYears }, (_, i) => i + 1);
    } else {
      // Use course duration or default to 20 semesters max for longer courses
      const maxSemesters = Math.max(course.duration_semesters || 8, 20);
      return Array.from({ length: maxSemesters }, (_, i) => i + 1);
    }
  };

  const getPeriodLabel = (num, type) => {
    const suffix = num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th';
    return type === 'annual' ? `${num}${suffix} Year` : `${num}${suffix} Semester`;
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
            Fee Management
          </h1>
          <p className="text-[#475569] font-body mt-1">
            Add and manage admission fee structures for featured colleges
          </p>
        </div>

        {/* College Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#0066CC]" />
              Select College
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-12 w-full" />
            ) : (
              <div className="space-y-3">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
                  <Input
                    placeholder="Search colleges by name..."
                    value={collegeSearchQuery}
                    onChange={(e) => setCollegeSearchQuery(e.target.value)}
                    className="pl-10 h-10 font-body"
                    data-testid="college-search-input"
                  />
                </div>

                {/* Filtered Colleges List - Shows when searching */}
                {collegeSearchQuery && (
                  <div className="border rounded-lg max-h-64 overflow-y-auto">
                    {colleges
                      .filter(college => 
                        college.name.toLowerCase().includes(collegeSearchQuery.toLowerCase()) ||
                        college.city?.toLowerCase().includes(collegeSearchQuery.toLowerCase()) ||
                        college.category?.toLowerCase().includes(collegeSearchQuery.toLowerCase())
                      )
                      .map((college) => (
                        <div
                          key={college.id}
                          onClick={() => {
                            handleCollegeSelect(college.id);
                            setCollegeSearchQuery('');
                          }}
                          className={`flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer border-b last:border-b-0 transition-colors ${
                            selectedCollege?.id === college.id ? 'bg-blue-50 border-l-4 border-l-[#0066CC]' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#0052A3] flex items-center justify-center flex-shrink-0">
                              <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-body font-medium text-[#0F172A]">{college.name}</p>
                              <p className="text-xs text-[#94A3B8] font-body">{college.city}, {college.state}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {college.category}
                          </Badge>
                        </div>
                      ))}
                    {colleges.filter(college => 
                      college.name.toLowerCase().includes(collegeSearchQuery.toLowerCase()) ||
                      college.city?.toLowerCase().includes(collegeSearchQuery.toLowerCase()) ||
                      college.category?.toLowerCase().includes(collegeSearchQuery.toLowerCase())
                    ).length === 0 && (
                      <div className="p-4 text-center text-[#94A3B8] font-body">
                        No colleges found matching "{collegeSearchQuery}"
                      </div>
                    )}
                  </div>
                )}

                {/* College Dropdown - Shows when not searching */}
                {!collegeSearchQuery && (
                  <Select 
                    value={selectedCollege?.id || ''} 
                    onValueChange={handleCollegeSelect}
                  >
                    <SelectTrigger 
                      className="w-full h-12 font-body"
                      data-testid="college-select"
                    >
                      <SelectValue placeholder="Choose a featured college" />
                    </SelectTrigger>
                    <SelectContent>
                      {colleges.map((college) => (
                        <SelectItem key={college.id} value={college.id}>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-[#0066CC]" />
                            <span>{college.name}</span>
                            <Badge variant="secondary" className="ml-2">
                              {college.category}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                
                {/* Results count */}
                {collegeSearchQuery && (
                  <p className="text-xs text-[#94A3B8] font-body">
                    {colleges.filter(c => 
                      c.name.toLowerCase().includes(collegeSearchQuery.toLowerCase()) ||
                      c.city?.toLowerCase().includes(collegeSearchQuery.toLowerCase())
                    ).length} colleges found
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Fee Management Section */}
        {selectedCollege && (
          <>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Add Single Fee Button */}
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-body rounded-full"
                    onClick={() => handleOpenDialog()}
                    data-testid="add-fee-btn"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Single Fee
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading">
                      {editingFee ? 'Edit Fee' : 'Add New Fee'}
                    </DialogTitle>
                    <DialogDescription className="font-body">
                      {editingFee ? 'Update the fee details below' : 'Add fee structure for a single period'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label className="font-body">Course *</Label>
                      <Popover open={singleCourseOpen} onOpenChange={setSingleCourseOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={singleCourseOpen}
                            className="w-full justify-between font-body h-10"
                            data-testid="fee-course-select"
                          >
                            {formData.course_id
                              ? courses.find(c => c.id === formData.course_id)?.name || "Select course..."
                              : "Select course..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px] p-0" align="start">
                          <Command>
                            <CommandInput 
                              placeholder="Search course..." 
                              value={singleCourseSearch}
                              onValueChange={setSingleCourseSearch}
                            />
                            <CommandList>
                              <CommandEmpty>No course found.</CommandEmpty>
                              <CommandGroup>
                                {courses
                                  .filter(course => 
                                    !singleCourseSearch || 
                                    course.name.toLowerCase().includes(singleCourseSearch.toLowerCase())
                                  )
                                  .map((course) => (
                                    <CommandItem
                                      key={course.id}
                                      value={course.name}
                                      onSelect={() => {
                                        setFormData({ ...formData, course_id: course.id });
                                        setSingleCourseOpen(false);
                                        setSingleCourseSearch('');
                                      }}
                                    >
                                      <Check
                                        className={`mr-2 h-4 w-4 ${formData.course_id === course.id ? "opacity-100" : "opacity-0"}`}
                                      />
                                      {course.name} ({course.level} - {course.duration})
                                    </CommandItem>
                                  ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Fee Type *</Label>
                        <Select
                          value={formData.fee_type}
                          onValueChange={(value) => setFormData({ ...formData, fee_type: value, year_or_semester: 1 })}
                        >
                          <SelectTrigger data-testid="fee-type-select">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="annual">Annual (Year-wise)</SelectItem>
                            <SelectItem value="semester">Semester-wise</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">
                          {formData.fee_type === 'annual' ? 'Year' : 'Semester'} *
                        </Label>
                        <Select
                          value={formData.year_or_semester.toString()}
                          onValueChange={(value) => setFormData({ ...formData, year_or_semester: parseInt(value) })}
                        >
                          <SelectTrigger data-testid="fee-period-select">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {getPeriodOptions().map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {getPeriodLabel(num, formData.fee_type)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Tuition Fee (₹) *</Label>
                        <Input
                          type="number"
                          value={formData.amount}
                          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                          placeholder="e.g., 150000"
                          className="font-body"
                          required
                          data-testid="fee-amount-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Hostel Fee (₹)</Label>
                        <Input
                          type="number"
                          value={formData.hostel_fee}
                          onChange={(e) => setFormData({ ...formData, hostel_fee: e.target.value })}
                          placeholder="e.g., 80000"
                          className="font-body"
                          data-testid="hostel-fee-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-body">Description</Label>
                      <Input
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="e.g., First Year Annual Fee"
                        className="font-body"
                        data-testid="fee-description-input"
                      />
                    </div>

                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setDialogOpen(false)}
                        className="font-body"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body"
                        data-testid="save-fee-btn"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : editingFee ? (
                          'Update Fee'
                        ) : (
                          'Add Fee'
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Bulk Fee Dialog - Add All Years/Semesters */}
              <Dialog open={bulkFeeDialogOpen} onOpenChange={setBulkFeeDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full"
                    onClick={() => handleOpenBulkFeeDialog()}
                    data-testid="bulk-fee-btn"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add All Year/Semester Fees
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-heading">
                      Add Complete Fee Structure
                    </DialogTitle>
                    <DialogDescription className="font-body">
                      Add fees for all years or semesters at once. Leave empty fields for periods with no fees.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBulkFeeSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Course *</Label>
                        <Popover open={bulkCourseOpen} onOpenChange={setBulkCourseOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={bulkCourseOpen}
                              className="w-full justify-between font-body h-10"
                              data-testid="bulk-fee-course-select"
                            >
                              {bulkFormData.course_id
                                ? courses.find(c => c.id === bulkFormData.course_id)?.name || "Select course..."
                                : "Select course..."}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[350px] p-0" align="start">
                            <Command>
                              <CommandInput 
                                placeholder="Search course..." 
                                value={bulkCourseSearch}
                                onValueChange={setBulkCourseSearch}
                              />
                              <CommandList>
                                <CommandEmpty>No course found.</CommandEmpty>
                                <CommandGroup>
                                  {courses
                                    .filter(course => 
                                      !bulkCourseSearch || 
                                      course.name.toLowerCase().includes(bulkCourseSearch.toLowerCase())
                                    )
                                    .map((course) => (
                                      <CommandItem
                                        key={course.id}
                                        value={course.name}
                                        onSelect={() => {
                                          handleBulkFeeCourseChange(course.id);
                                          setBulkCourseOpen(false);
                                          setBulkCourseSearch('');
                                        }}
                                      >
                                        <Check
                                          className={`mr-2 h-4 w-4 ${bulkFormData.course_id === course.id ? "opacity-100" : "opacity-0"}`}
                                        />
                                        {course.name} ({course.duration})
                                      </CommandItem>
                                    ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Fee Type *</Label>
                        <Select
                          value={bulkFormData.fee_type}
                          onValueChange={handleBulkFeeTypeChange}
                        >
                          <SelectTrigger data-testid="bulk-fee-type-select">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="annual">Annual (Year-wise)</SelectItem>
                            <SelectItem value="semester">Semester-wise</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {bulkFormData.fees.length > 0 && (
                      <div className="space-y-3 mt-4">
                        <div className="grid grid-cols-12 gap-2 px-2 text-sm font-semibold text-[#475569]">
                          <div className="col-span-3">Period</div>
                          <div className="col-span-3">Tuition Fee (₹) *</div>
                          <div className="col-span-3">Hostel Fee (₹)</div>
                          <div className="col-span-3">Description</div>
                        </div>
                        {bulkFormData.fees.map((fee, index) => (
                          <div key={index} className="grid grid-cols-12 gap-2 items-center p-2 bg-slate-50 rounded-lg">
                            <div className="col-span-3 font-medium text-[#0F172A]">
                              {getPeriodLabel(fee.year_or_semester, bulkFormData.fee_type)}
                            </div>
                            <div className="col-span-3">
                              <Input
                                type="number"
                                value={fee.amount}
                                onChange={(e) => updateBulkFeeEntry(index, 'amount', e.target.value)}
                                placeholder="150000"
                                className="font-body h-9"
                                data-testid={`bulk-fee-amount-${index}`}
                              />
                            </div>
                            <div className="col-span-3">
                              <Input
                                type="number"
                                value={fee.hostel_fee}
                                onChange={(e) => updateBulkFeeEntry(index, 'hostel_fee', e.target.value)}
                                placeholder="80000"
                                className="font-body h-9"
                                data-testid={`bulk-hostel-fee-${index}`}
                              />
                            </div>
                            <div className="col-span-3">
                              <Input
                                value={fee.description}
                                onChange={(e) => updateBulkFeeEntry(index, 'description', e.target.value)}
                                placeholder="Optional"
                                className="font-body h-9"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {!bulkFormData.course_id && (
                      <Alert className="bg-blue-50 border-blue-200">
                        <AlertCircle className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="font-body text-blue-700">
                          Select a course to see the fee entry fields for all years/semesters.
                        </AlertDescription>
                      </Alert>
                    )}

                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setBulkFeeDialogOpen(false)}
                        className="font-body"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={submitting || !bulkFormData.course_id}
                        className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body"
                        data-testid="save-bulk-fees-btn"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save All Fees'
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Admission Charges Dialog */}
              <Dialog open={admissionDialogOpen} onOpenChange={setAdmissionDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-body rounded-full border-purple-500 text-purple-600 hover:bg-purple-50"
                    onClick={() => handleOpenAdmissionDialog()}
                    data-testid="add-admission-charges-btn"
                  >
                    <Receipt className="h-4 w-4 mr-2" />
                    Add Admission Charges
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading">
                      Admission Charges (One-time)
                    </DialogTitle>
                    <DialogDescription className="font-body">
                      Add one-time admission charges for a course
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAdmissionSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label className="font-body">Course *</Label>
                      <Popover open={admissionCourseOpen} onOpenChange={setAdmissionCourseOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={admissionCourseOpen}
                            className="w-full justify-between font-body h-10"
                            data-testid="admission-course-select"
                          >
                            {admissionFormData.course_id
                              ? courses.find(c => c.id === admissionFormData.course_id)?.name || "Select course..."
                              : "Select course..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px] p-0" align="start">
                          <Command>
                            <CommandInput 
                              placeholder="Search course..." 
                              value={admissionCourseSearch}
                              onValueChange={setAdmissionCourseSearch}
                            />
                            <CommandList>
                              <CommandEmpty>No course found.</CommandEmpty>
                              <CommandGroup>
                                {courses
                                  .filter(course => 
                                    !admissionCourseSearch || 
                                    course.name.toLowerCase().includes(admissionCourseSearch.toLowerCase())
                                  )
                                  .map((course) => (
                                    <CommandItem
                                      key={course.id}
                                      value={course.name}
                                      onSelect={() => {
                                        setAdmissionFormData({ ...admissionFormData, course_id: course.id });
                                        setAdmissionCourseOpen(false);
                                        setAdmissionCourseSearch('');
                                      }}
                                    >
                                      <Check
                                        className={`mr-2 h-4 w-4 ${admissionFormData.course_id === course.id ? "opacity-100" : "opacity-0"}`}
                                      />
                                      {course.name}
                                    </CommandItem>
                                  ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Registration Fee (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.registration_fee}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, registration_fee: e.target.value })}
                          placeholder="e.g., 5000"
                          className="font-body"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Admission Fee (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.admission_fee}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, admission_fee: e.target.value })}
                          placeholder="e.g., 25000"
                          className="font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Caution Deposit (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.caution_deposit}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, caution_deposit: e.target.value })}
                          placeholder="e.g., 10000"
                          className="font-body"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Uniform Fee (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.uniform_fee}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, uniform_fee: e.target.value })}
                          placeholder="e.g., 5000"
                          className="font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Library Fee (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.library_fee}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, library_fee: e.target.value })}
                          placeholder="e.g., 5000"
                          className="font-body"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Lab Fee (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.lab_fee}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, lab_fee: e.target.value })}
                          placeholder="e.g., 10000"
                          className="font-body"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-body">Other Charges (₹)</Label>
                        <Input
                          type="number"
                          value={admissionFormData.other_charges}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, other_charges: e.target.value })}
                          placeholder="e.g., 2000"
                          className="font-body"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-body">Other Charges Description</Label>
                        <Input
                          value={admissionFormData.other_charges_description}
                          onChange={(e) => setAdmissionFormData({ ...admissionFormData, other_charges_description: e.target.value })}
                          placeholder="e.g., ID Card"
                          className="font-body"
                        />
                      </div>
                    </div>

                    <DialogFooter>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setAdmissionDialogOpen(false)}
                        className="font-body"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-body"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save Charges'
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* CSV Import Dialog */}
              <Dialog open={csvDialogOpen} onOpenChange={setCsvDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="font-body rounded-full border-green-500 text-green-600 hover:bg-green-50"
                    data-testid="csv-import-btn"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Import CSV
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading flex items-center gap-2">
                      <FileSpreadsheet className="h-5 w-5 text-green-600" />
                      Import Fees from CSV
                    </DialogTitle>
                    <DialogDescription className="font-body">
                      Upload a CSV file to bulk import fee records. Download the template first.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    {/* Download Template */}
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-sm text-[#475569] font-body mb-3">
                        First, download the template to see the required format:
                      </p>
                      <Button
                        variant="outline"
                        onClick={downloadCSVTemplate}
                        className="font-body"
                        data-testid="download-template-btn"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Template
                      </Button>
                    </div>

                    {/* File Upload */}
                    <div className="p-4 border-2 border-dashed border-slate-200 rounded-lg">
                      <div className="text-center">
                        <Upload className="h-8 w-8 mx-auto text-slate-400 mb-2" />
                        <p className="text-sm text-[#475569] font-body mb-3">
                          Select a CSV file to import
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".csv"
                          onChange={handleCSVImport}
                          className="hidden"
                          id="csv-file-input"
                          data-testid="csv-file-input"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={importing}
                          className="font-body"
                        >
                          {importing ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Importing...
                            </>
                          ) : (
                            <>
                              <FileSpreadsheet className="mr-2 h-4 w-4" />
                              Choose File
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Import Result */}
                    {importResult && (
                      <div className="space-y-3">
                        {importResult.imported_count > 0 && (
                          <Alert className="bg-green-50 border-green-200">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="font-body text-green-700">
                              Successfully imported {importResult.imported_count} fee records.
                            </AlertDescription>
                          </Alert>
                        )}
                        
                        {importResult.total_errors > 0 && (
                          <Alert className="bg-red-50 border-red-200">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <AlertDescription className="font-body text-red-700">
                              <p className="font-semibold mb-1">{importResult.total_errors} errors found:</p>
                              <ul className="text-xs list-disc list-inside max-h-32 overflow-y-auto">
                                {importResult.errors.map((error, i) => (
                                  <li key={i}>{error}</li>
                                ))}
                              </ul>
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    )}

                    {/* Instructions */}
                    <div className="text-xs text-[#475569] font-body space-y-1 p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-700">CSV Format Notes:</p>
                      <ul className="list-disc list-inside space-y-1 text-blue-600">
                        <li><code>fee_type</code>: "annual" or "semester"</li>
                        <li><code>year_or_semester</code>: 1, 2, 3, etc.</li>
                        <li><code>college_id</code> and <code>course_id</code> must exist in database</li>
                        <li>hostel_fee and admission_fee are optional</li>
                      </ul>
                    </div>
                  </div>

                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setCsvDialogOpen(false);
                        setImportResult(null);
                      }}
                      className="font-body"
                    >
                      Close
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Fee Structure by Course */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-heading font-semibold text-[#0F172A]">
                    {selectedCollege.name}
                  </CardTitle>
                  <p className="text-sm text-[#475569] font-body mt-1">
                    {courses.length} courses • {fees.length} fee records • {admissionCharges.length} admission charge records
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                {coursesLoading ? (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : (
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="all" className="font-body">
                        All Fees
                      </TabsTrigger>
                      <TabsTrigger value="annual" className="font-body">
                        <Calendar className="h-4 w-4 mr-2" />
                        Annual
                      </TabsTrigger>
                      <TabsTrigger value="semester" className="font-body">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Semester
                      </TabsTrigger>
                      <TabsTrigger value="admission" className="font-body">
                        <Receipt className="h-4 w-4 mr-2" />
                        Admission Charges
                      </TabsTrigger>
                    </TabsList>

                    {/* Admission Charges Tab */}
                    <TabsContent value="admission">
                      {admissionCharges.length > 0 ? (
                        <div className="space-y-4">
                          {admissionCharges.map((charge) => {
                            const course = getCourse(charge.course_id);
                            const total = (charge.registration_fee || 0) + 
                                          (charge.admission_fee || 0) + 
                                          (charge.caution_deposit || 0) + 
                                          (charge.uniform_fee || 0) + 
                                          (charge.library_fee || 0) + 
                                          (charge.lab_fee || 0) + 
                                          (charge.other_charges || 0);
                            
                            return (
                              <Card key={charge.id} className="border-purple-200 bg-purple-50/50">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-heading font-semibold text-[#0F172A]">
                                      {course?.name || 'Unknown Course'}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleOpenAdmissionDialog(charge)}
                                        className="text-[#475569] hover:text-[#0066CC]"
                                      >
                                        <Pencil className="h-4 w-4" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDeleteAdmissionCharge(charge.id)}
                                        className="text-[#475569] hover:text-red-600"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {charge.registration_fee > 0 && (
                                      <div>
                                        <p className="text-xs text-[#475569] font-body">Registration</p>
                                        <p className="font-semibold font-body">{formatCurrency(charge.registration_fee)}</p>
                                      </div>
                                    )}
                                    {charge.admission_fee > 0 && (
                                      <div>
                                        <p className="text-xs text-[#475569] font-body">Admission</p>
                                        <p className="font-semibold font-body">{formatCurrency(charge.admission_fee)}</p>
                                      </div>
                                    )}
                                    {charge.caution_deposit > 0 && (
                                      <div>
                                        <p className="text-xs text-[#475569] font-body">Caution Deposit</p>
                                        <p className="font-semibold font-body">{formatCurrency(charge.caution_deposit)}</p>
                                      </div>
                                    )}
                                    {charge.library_fee > 0 && (
                                      <div>
                                        <p className="text-xs text-[#475569] font-body">Library</p>
                                        <p className="font-semibold font-body">{formatCurrency(charge.library_fee)}</p>
                                      </div>
                                    )}
                                    {charge.lab_fee > 0 && (
                                      <div>
                                        <p className="text-xs text-[#475569] font-body">Lab Fee</p>
                                        <p className="font-semibold font-body">{formatCurrency(charge.lab_fee)}</p>
                                      </div>
                                    )}
                                  </div>
                                  <div className="mt-4 pt-4 border-t border-purple-200 flex justify-between items-center">
                                    <span className="font-body text-[#475569]">Total Admission Charges:</span>
                                    <span className="font-heading font-bold text-purple-700 text-lg">{formatCurrency(total)}</span>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Receipt className="h-12 w-12 mx-auto text-[#94A3B8] mb-3" />
                          <p className="text-[#475569] font-body">
                            No admission charges found. Click "Add Admission Charges" to create one.
                          </p>
                        </div>
                      )}
                    </TabsContent>

                    {/* Fee Records Tab */}
                    <TabsContent value={activeTab !== 'admission' ? activeTab : 'all'}>
                      {filteredFees.length > 0 && activeTab !== 'admission' ? (
                        <div className="rounded-lg border border-slate-200 overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-slate-50">
                                <TableHead className="font-heading font-semibold">Course</TableHead>
                                <TableHead className="font-heading font-semibold">Type</TableHead>
                                <TableHead className="font-heading font-semibold">Period</TableHead>
                                <TableHead className="font-heading font-semibold">
                                  <div className="flex items-center gap-1">
                                    <IndianRupee className="h-4 w-4" />
                                    Tuition
                                  </div>
                                </TableHead>
                                <TableHead className="font-heading font-semibold">
                                  <div className="flex items-center gap-1">
                                    <Home className="h-4 w-4" />
                                    Hostel
                                  </div>
                                </TableHead>
                                <TableHead className="font-heading font-semibold text-right">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredFees.map((fee) => (
                                <TableRow key={fee.id} className="hover:bg-slate-50">
                                  <TableCell className="font-body font-medium">
                                    {getCourseName(fee.course_id)}
                                  </TableCell>
                                  <TableCell>
                                    <Badge
                                      variant="secondary"
                                      className={fee.fee_type === 'annual' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                                    >
                                      {fee.fee_type}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="font-body">
                                    {fee.fee_type === 'annual' ? `Year ${fee.year_or_semester}` : `Sem ${fee.year_or_semester}`}
                                  </TableCell>
                                  <TableCell className="font-body font-semibold">
                                    {formatCurrency(fee.amount)}
                                  </TableCell>
                                  <TableCell className="font-body">
                                    {fee.hostel_fee ? (
                                      <span className="text-[#0066CC] font-semibold">
                                        {formatCurrency(fee.hostel_fee)}
                                      </span>
                                    ) : (
                                      <span className="text-[#94A3B8]">—</span>
                                    )}
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleOpenDialog(fee)}
                                        className="text-[#475569] hover:text-[#0066CC]"
                                        data-testid={`edit-fee-${fee.id}`}
                                      >
                                        <Pencil className="h-4 w-4" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDelete(fee.id)}
                                        className="text-[#475569] hover:text-red-600"
                                        data-testid={`delete-fee-${fee.id}`}
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : activeTab !== 'admission' ? (
                        <div className="text-center py-12">
                          <IndianRupee className="h-12 w-12 mx-auto text-[#94A3B8] mb-3" />
                          <p className="text-[#475569] font-body">
                            No fee records found. Click "Add All Year/Semester Fees" to create a complete fee structure.
                          </p>
                        </div>
                      ) : null}
                    </TabsContent>
                  </Tabs>
                )}
              </CardContent>
            </Card>

            {/* Fee Summary by Course */}
            {Object.keys(feesByCourse).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-[#0066CC]" />
                    Fee Summary by Course
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(feesByCourse).map(([courseId, courseFees]) => {
                      const course = getCourse(courseId);
                      const totalTuition = courseFees.reduce((sum, f) => sum + (f.amount || 0), 0);
                      const totalHostel = courseFees.reduce((sum, f) => sum + (f.hostel_fee || 0), 0);
                      const admissionCharge = admissionCharges.find(ac => ac.course_id === courseId);
                      const admissionTotal = admissionCharge ? 
                        (admissionCharge.registration_fee || 0) + 
                        (admissionCharge.admission_fee || 0) + 
                        (admissionCharge.caution_deposit || 0) + 
                        (admissionCharge.uniform_fee || 0) + 
                        (admissionCharge.library_fee || 0) + 
                        (admissionCharge.lab_fee || 0) + 
                        (admissionCharge.other_charges || 0) : 0;
                      
                      return (
                        <div key={courseId} className="p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-heading font-semibold text-[#0F172A]">
                              {course?.name || 'Unknown Course'}
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleOpenBulkFeeDialog(courseId, courseFees[0]?.fee_type || 'annual')}
                              className="text-[#0066CC] hover:text-[#0052A3]"
                            >
                              <Pencil className="h-3 w-3 mr-1" />
                              Edit All Fees
                            </Button>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-[#475569] font-body">Total Tuition</p>
                              <p className="text-lg font-bold text-[#0F172A] font-heading">
                                {formatCurrency(totalTuition)}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-[#475569] font-body">Total Hostel</p>
                              <p className="text-lg font-bold text-[#0066CC] font-heading">
                                {formatCurrency(totalHostel)}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-[#475569] font-body">Admission Charges</p>
                              <p className="text-lg font-bold text-purple-600 font-heading">
                                {formatCurrency(admissionTotal)}
                              </p>
                            </div>
                            <div className="p-3 bg-[#0066CC] rounded-lg text-white">
                              <p className="text-xs text-blue-100 font-body">Grand Total (excl. Hostel)</p>
                              <p className="text-lg font-bold font-heading">
                                {formatCurrency(totalTuition + admissionTotal)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* No College Selected */}
        {!selectedCollege && !loading && (
          <Card className="p-12 text-center">
            <Building2 className="h-16 w-16 mx-auto text-[#94A3B8] mb-4" />
            <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
              Select a College
            </h3>
            <p className="text-[#475569] font-body">
              Choose a featured college from the dropdown above to manage its fee structure.
            </p>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
