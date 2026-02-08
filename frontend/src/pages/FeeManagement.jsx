import React, { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { collegesAPI, coursesAPI, feesAPI } from '../lib/api';
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
} from 'lucide-react';
import { toast } from 'sonner';

export default function FeeManagement() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [courses, setCourses] = useState([]);
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingFee, setEditingFee] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('annual');
  const [formData, setFormData] = useState({
    course_id: '',
    fee_type: 'annual',
    year_or_semester: 1,
    amount: '',
    hostel_fee: '',
    description: '',
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
      const [coursesRes, feesRes] = await Promise.all([
        coursesAPI.getByCollege(collegeId),
        feesAPI.getByCollege(collegeId),
      ]);
      setCourses(coursesRes.data);
      setFees(feesRes.data);
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
      description: '',
    });
    setEditingFee(null);
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
        description: fee.description || '',
      });
    } else {
      resetForm();
    }
    setDialogOpen(true);
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

  const formatCurrency = (amount) => {
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

  const filteredFees = fees.filter(fee => 
    activeTab === 'all' || fee.fee_type === activeTab || (activeTab === 'hostel' && fee.hostel_fee)
  );

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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-heading font-semibold text-[#0F172A]">
                  {selectedCollege.name}
                </CardTitle>
                <p className="text-sm text-[#475569] font-body mt-1">
                  {courses.length} courses • {fees.length} fee records
                </p>
              </div>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full"
                    onClick={() => handleOpenDialog()}
                    data-testid="add-fee-btn"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Fee
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
                              {course.name} ({course.level})
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
                          onValueChange={(value) => setFormData({ ...formData, fee_type: value })}
                        >
                          <SelectTrigger data-testid="fee-type-select">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="annual">Annual</SelectItem>
                            <SelectItem value="semester">Semester</SelectItem>
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
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {formData.fee_type === 'annual' ? `Year ${num}` : `Semester ${num}`}
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
                    <TabsTrigger value="hostel" className="font-body">
                      <Home className="h-4 w-4 mr-2" />
                      Hostel
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value={activeTab}>
                    {filteredFees.length > 0 ? (
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
                    ) : (
                      <div className="text-center py-12">
                        <IndianRupee className="h-12 w-12 mx-auto text-[#94A3B8] mb-3" />
                        <p className="text-[#475569] font-body">
                          No fee records found. Click "Add Fee" to create one.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
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
