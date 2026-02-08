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
} from 'lucide-react';
import { toast } from 'sonner';

export default function FeeManagement() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [courses, setCourses] = useState([]);
  const [fees, setFees] = useState([]);
  const [admissionCharges, setAdmissionCharges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [admissionDialogOpen, setAdmissionDialogOpen] = useState(false);
  const [csvDialogOpen, setCsvDialogOpen] = useState(false);
  const [editingFee, setEditingFee] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState(null);
  const fileInputRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({
    course_id: '',
    fee_type: 'annual',
    year_or_semester: 1,
    amount: '',
    hostel_fee: '',
    admission_fee: '',
    description: '',
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
  const getPeriodOptions = () => {
    const course = getCourse(formData.course_id);
    if (!course) return [1, 2, 3, 4, 5, 6, 7, 8];
    
    if (formData.fee_type === 'annual') {
      return Array.from({ length: course.duration_years || 4 }, (_, i) => i + 1);
    } else {
      return Array.from({ length: course.duration_semesters || 8 }, (_, i) => i + 1);
    }
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
          </CardContent>
        </Card>

        {/* Fee Management Section */}
        {selectedCollege && (
          <>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full"
                    onClick={() => handleOpenDialog()}
                    data-testid="add-fee-btn"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Tuition/Hostel Fee
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="font-heading">
                      {editingFee ? 'Edit Fee' : 'Add New Fee'}
                    </DialogTitle>
                    <DialogDescription className="font-body">
                      {editingFee ? 'Update the fee details below' : 'Add fee structure for a course'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label className="font-body">Course *</Label>
                      <Select
                        value={formData.course_id}
                        onValueChange={(value) => setFormData({ ...formData, course_id: value })}
                      >
                        <SelectTrigger data-testid="fee-course-select">
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name} ({course.level} - {course.duration})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                                {formData.fee_type === 'annual' ? `${num}${num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th'} Year` : `${num}${num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th'} Semester`}
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
                      <Select
                        value={admissionFormData.course_id}
                        onValueChange={(value) => setAdmissionFormData({ ...admissionFormData, course_id: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                            No fee records found. Click "Add Tuition/Hostel Fee" to create one.
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
                          <h4 className="font-heading font-semibold text-[#0F172A] mb-3">
                            {course?.name || 'Unknown Course'}
                          </h4>
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
