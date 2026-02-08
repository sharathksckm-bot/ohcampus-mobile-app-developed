import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { useAuth } from '../context/AuthContext';
import { admissionsAPI, collegesAPI, coursesAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';
import {
  Search,
  UserPlus,
  Edit,
  Trash2,
  GraduationCap,
  Building2,
  MapPin,
  Calendar,
  IndianRupee,
  Plus,
  Check,
  Loader2,
  FileText,
  Receipt,
  X,
  MessageSquare,
  Gift,
} from 'lucide-react';
import { toast } from 'sonner';

const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function Admissions() {
  const { user } = useAuth();
  const [admissions, setAdmissions] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCollege, setFilterCollege] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAdmission, setEditingAdmission] = useState(null);
  const [saving, setSaving] = useState(false);
  
  // Check if user can edit any admission (Admin, Team Lead, Admission Manager)
  const canEditAll = user?.role === 'admin' || 
    ['Team Lead', 'Admission Manager'].includes(user?.designation);
  
  // Form state
  const [formData, setFormData] = useState({
    candidate_name: '',
    place: '',
    college_id: '',
    course_id: '',
    admission_date: '',
    total_fees: '',
    instalments: [],
    remark: '',
    scholarship_amount: ''
  });

  const [filteredCourses, setFilteredCourses] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [admissionsRes, collegesRes, coursesRes] = await Promise.all([
        admissionsAPI.getAll(),
        collegesAPI.getAll({}),
        coursesAPI.getAll()
      ]);
      setAdmissions(admissionsRes.data);
      setColleges(collegesRes.data);
      setCourses(coursesRes.data);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filter courses when college changes
  useEffect(() => {
    if (formData.college_id) {
      const collegeCourses = courses.filter(c => c.college_id === formData.college_id);
      setFilteredCourses(collegeCourses);
    } else {
      setFilteredCourses([]);
    }
  }, [formData.college_id, courses]);

  const filteredAdmissions = admissions.filter(admission => {
    const matchesSearch = admission.candidate_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admission.place.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCollege = filterCollege === 'all' || admission.college_id === filterCollege;
    return matchesSearch && matchesCollege;
  });

  const handleOpenDialog = (admission = null) => {
    if (admission) {
      setEditingAdmission(admission);
      setFormData({
        candidate_name: admission.candidate_name || '',
        place: admission.place || '',
        college_id: admission.college_id || '',
        course_id: admission.course_id || '',
        admission_date: admission.admission_date || '',
        total_fees: admission.total_fees?.toString() || '',
        instalments: admission.instalments || [],
        remark: admission.remark || '',
        scholarship_amount: admission.scholarship_amount?.toString() || ''
      });
    } else {
      setEditingAdmission(null);
      setFormData({
        candidate_name: '',
        place: '',
        college_id: '',
        course_id: '',
        admission_date: new Date().toISOString().split('T')[0],
        total_fees: '',
        instalments: [],
        remark: '',
        scholarship_amount: ''
      });
    }
    setDialogOpen(true);
  };

  const handleAddInstalment = () => {
    setFormData(prev => ({
      ...prev,
      instalments: [...prev.instalments, { amount: '', paid_date: '', description: '' }]
    }));
  };

  const handleUpdateInstalment = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      instalments: prev.instalments.map((inst, i) => 
        i === index ? { ...inst, [field]: value } : inst
      )
    }));
  };

  const handleRemoveInstalment = (index) => {
    setFormData(prev => ({
      ...prev,
      instalments: prev.instalments.filter((_, i) => i !== index)
    }));
  };

  const calculateTotalPaid = () => {
    return formData.instalments.reduce((sum, inst) => sum + (parseFloat(inst.amount) || 0), 0);
  };

  const calculateBalance = () => {
    const totalFees = parseFloat(formData.total_fees) || 0;
    return totalFees - calculateTotalPaid();
  };

  const handleSave = async () => {
    if (!formData.candidate_name || !formData.college_id || !formData.course_id || !formData.total_fees) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSaving(true);
    try {
      const payload = {
        candidate_name: formData.candidate_name,
        place: formData.place,
        college_id: formData.college_id,
        course_id: formData.course_id,
        admission_date: formData.admission_date,
        total_fees: parseFloat(formData.total_fees),
        instalments: formData.instalments.map(inst => ({
          amount: parseFloat(inst.amount) || 0,
          paid_date: inst.paid_date,
          description: inst.description
        })).filter(inst => inst.amount > 0),
        remark: formData.remark,
        scholarship_amount: formData.scholarship_amount ? parseFloat(formData.scholarship_amount) : null
      };

      if (editingAdmission) {
        await admissionsAPI.update(editingAdmission.id, payload);
        toast.success('Admission updated successfully');
      } else {
        await admissionsAPI.create(payload);
        toast.success('Admission created successfully');
      }
      setDialogOpen(false);
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save admission');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (admissionId) => {
    if (!window.confirm('Are you sure you want to delete this admission record?')) return;
    
    try {
      await admissionsAPI.delete(admissionId);
      toast.success('Admission deleted');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete admission');
    }
  };

  // Stats
  const totalAdmissions = admissions.length;
  const totalFeesCollected = admissions.reduce((sum, a) => sum + (a.fees_paid || 0), 0);
  const totalPending = admissions.reduce((sum, a) => sum + (a.balance || 0), 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#0F172A]">
              Admissions
            </h1>
            <p className="text-[#475569] font-body mt-1">
              Manage admitted candidates and fee payments
            </p>
          </div>
          <Button 
            onClick={() => handleOpenDialog()}
            className="mt-4 md:mt-0 bg-[#0066CC] hover:bg-[#0052A3] font-body"
            data-testid="add-admission-btn"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Add Admission
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">{totalAdmissions}</p>
                  <p className="text-xs text-[#475569] font-body">Total Admissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <IndianRupee className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {formatCurrency(totalFeesCollected)}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Fees Collected</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Receipt className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {formatCurrency(totalPending)}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Pending Balance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
                <Input
                  placeholder="Search by candidate name or place..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 font-body"
                  data-testid="admission-search"
                />
              </div>
              <Select value={filterCollege} onValueChange={setFilterCollege}>
                <SelectTrigger className="w-full md:w-64 h-10" data-testid="college-filter">
                  <Building2 className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Filter by College" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Colleges</SelectItem>
                  {colleges.map(c => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Admissions Table */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg">
              Admitted Candidates ({filteredAdmissions.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            ) : filteredAdmissions.length === 0 ? (
              <div className="text-center py-12">
                <GraduationCap className="h-12 w-12 mx-auto text-[#94A3B8] mb-4" />
                <p className="text-[#475569] font-body">No admissions found</p>
                <Button 
                  onClick={() => handleOpenDialog()}
                  variant="outline"
                  className="mt-4"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add First Admission
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <TooltipProvider>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-heading">Candidate</TableHead>
                      <TableHead className="font-heading">College / Course</TableHead>
                      <TableHead className="font-heading">Date</TableHead>
                      <TableHead className="font-heading text-right">Total Fees</TableHead>
                      <TableHead className="font-heading text-right">Scholarship</TableHead>
                      <TableHead className="font-heading text-right">Paid</TableHead>
                      <TableHead className="font-heading text-right">Balance</TableHead>
                      <TableHead className="font-heading">Remarks</TableHead>
                      <TableHead className="font-heading text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAdmissions.map(admission => {
                      const canEdit = canEditAll || admission.counselor_id === user?.id;
                      return (
                      <TableRow key={admission.id} data-testid={`admission-row-${admission.id}`}>
                        <TableCell>
                          <div>
                            <p className="font-body font-medium">{admission.candidate_name}</p>
                            <p className="text-xs text-[#94A3B8] flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {admission.place}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-body text-sm">{admission.college_name}</p>
                            <Badge variant="secondary" className="text-xs mt-1">
                              {admission.course_name}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="font-body text-[#475569]">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {admission.admission_date}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-body font-medium">
                          {formatCurrency(admission.total_fees)}
                        </TableCell>
                        <TableCell className="text-right font-body text-green-600">
                          {formatCurrency(admission.fees_paid)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className={admission.balance > 0 
                            ? 'bg-orange-100 text-orange-700' 
                            : 'bg-green-100 text-green-700'
                          }>
                            {formatCurrency(admission.balance)}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[150px]">
                          {admission.remark ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-1 text-[#475569] cursor-help">
                                  <MessageSquare className="h-3 w-3 flex-shrink-0" />
                                  <span className="text-xs truncate">{admission.remark}</span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-[300px]">
                                <p className="text-sm">{admission.remark}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <span className="text-xs text-[#94A3B8]">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {canEdit && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleOpenDialog(admission)}
                                data-testid={`edit-admission-${admission.id}`}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            {(user?.role === 'admin' || admission.counselor_id === user?.id) && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-500"
                                onClick={() => handleDelete(admission.id)}
                                data-testid={`delete-admission-${admission.id}`}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    )})}
                  </TableBody>
                </Table>
                </TooltipProvider>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading flex items-center gap-2">
              {editingAdmission ? (
                <>
                  <Edit className="h-5 w-5 text-[#0066CC]" />
                  Edit Admission
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5 text-[#0066CC]" />
                  Add New Admission
                </>
              )}
            </DialogTitle>
            <DialogDescription className="font-body">
              Enter candidate details and fee payment information
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Candidate Info */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-[#0066CC]" />
                Candidate Information
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-body">Candidate Name *</Label>
                  <Input
                    value={formData.candidate_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, candidate_name: e.target.value }))}
                    placeholder="Enter full name"
                    className="mt-1"
                    data-testid="candidate-name-input"
                  />
                </div>
                <div>
                  <Label className="font-body">Place</Label>
                  <Input
                    value={formData.place}
                    onChange={(e) => setFormData(prev => ({ ...prev, place: e.target.value }))}
                    placeholder="City/Town"
                    className="mt-1"
                    data-testid="candidate-place-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-body">College *</Label>
                  <Select 
                    value={formData.college_id} 
                    onValueChange={(value) => setFormData(prev => ({ 
                      ...prev, 
                      college_id: value,
                      course_id: '' // Reset course when college changes
                    }))}
                  >
                    <SelectTrigger className="mt-1" data-testid="college-select">
                      <SelectValue placeholder="Select college" />
                    </SelectTrigger>
                    <SelectContent>
                      {colleges.map(c => (
                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-body">Course *</Label>
                  <Select 
                    value={formData.course_id} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, course_id: value }))}
                    disabled={!formData.college_id}
                  >
                    <SelectTrigger className="mt-1" data-testid="course-select">
                      <SelectValue placeholder={formData.college_id ? "Select course" : "Select college first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredCourses.map(c => (
                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-body">Admission Date</Label>
                  <Input
                    type="date"
                    value={formData.admission_date}
                    onChange={(e) => setFormData(prev => ({ ...prev, admission_date: e.target.value }))}
                    className="mt-1"
                    data-testid="admission-date-input"
                  />
                </div>
                <div>
                  <Label className="font-body">Total Fees *</Label>
                  <Input
                    type="number"
                    value={formData.total_fees}
                    onChange={(e) => setFormData(prev => ({ ...prev, total_fees: e.target.value }))}
                    placeholder="Enter total fees"
                    className="mt-1"
                    data-testid="total-fees-input"
                  />
                </div>
              </div>
            </div>

            {/* Fee Instalments */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-[#0066CC]" />
                  Fee Instalments
                </h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddInstalment}
                  data-testid="add-instalment-btn"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Instalment
                </Button>
              </div>

              {formData.instalments.length === 0 ? (
                <div className="text-center py-6 bg-slate-50 rounded-lg">
                  <Receipt className="h-8 w-8 mx-auto text-[#94A3B8] mb-2" />
                  <p className="text-sm text-[#475569] font-body">No instalments added</p>
                  <p className="text-xs text-[#94A3B8]">Click "Add Instalment" to record fee payments</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {formData.instalments.map((inst, index) => (
                    <Card key={index} className="bg-slate-50">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-1 grid grid-cols-3 gap-3">
                            <div>
                              <Label className="text-xs">Amount *</Label>
                              <Input
                                type="number"
                                value={inst.amount}
                                onChange={(e) => handleUpdateInstalment(index, 'amount', e.target.value)}
                                placeholder="Amount"
                                className="mt-1 h-9"
                                data-testid={`instalment-amount-${index}`}
                              />
                            </div>
                            <div>
                              <Label className="text-xs">Paid Date</Label>
                              <Input
                                type="date"
                                value={inst.paid_date}
                                onChange={(e) => handleUpdateInstalment(index, 'paid_date', e.target.value)}
                                className="mt-1 h-9"
                                data-testid={`instalment-date-${index}`}
                              />
                            </div>
                            <div>
                              <Label className="text-xs">Description</Label>
                              <Input
                                value={inst.description}
                                onChange={(e) => handleUpdateInstalment(index, 'description', e.target.value)}
                                placeholder="e.g., 1st Instalment"
                                className="mt-1 h-9"
                                data-testid={`instalment-desc-${index}`}
                              />
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-red-500 h-9 w-9 mt-5"
                            onClick={() => handleRemoveInstalment(index)}
                            data-testid={`remove-instalment-${index}`}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Summary */}
              <div className="p-4 bg-[#0066CC] text-white rounded-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-blue-200">Total Fees</p>
                    <p className="font-heading font-bold text-lg">
                      {formatCurrency(parseFloat(formData.total_fees) || 0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">Fees Paid</p>
                    <p className="font-heading font-bold text-lg text-green-300">
                      {formatCurrency(calculateTotalPaid())}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">Balance</p>
                    <p className="font-heading font-bold text-lg text-orange-300">
                      {formatCurrency(calculateBalance())}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Remarks */}
            <div>
              <Label className="font-body flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#0066CC]" />
                Remarks
              </Label>
              <Textarea
                value={formData.remark}
                onChange={(e) => setFormData(prev => ({ ...prev, remark: e.target.value }))}
                placeholder="Any additional notes..."
                className="mt-1 min-h-[80px]"
                data-testid="remark-input"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)} className="font-body">
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              disabled={saving}
              className="font-body bg-[#0066CC] hover:bg-[#0052A3]"
              data-testid="save-admission-btn"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  {editingAdmission ? 'Update' : 'Save'} Admission
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
