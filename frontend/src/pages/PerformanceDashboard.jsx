import React, { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { statsAPI, collegesAPI, usersAPI, targetsAPI, admissionsAPI } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { Progress } from '../components/ui/progress';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
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
  GraduationCap,
  IndianRupee,
  TrendingUp,
  Building2,
  Users,
  Calendar,
  MapPin,
  BarChart3,
  Receipt,
  Target,
  Award,
  Plus,
  Edit,
  Trash2,
  Check,
  Loader2,
  MessageSquare,
  Gift,
} from 'lucide-react';
import { toast } from 'sonner';

const formatCurrency = (amount) => {
  if (!amount && amount !== 0) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function PerformanceDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [admissionsList, setAdmissionsList] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [counselors, setCounselors] = useState([]);
  const [assignableCounselors, setAssignableCounselors] = useState([]);
  const [targets, setTargets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCollege, setFilterCollege] = useState('all');
  const [filterCounselor, setFilterCounselor] = useState('all');
  
  // Target dialog state
  const [targetDialogOpen, setTargetDialogOpen] = useState(false);
  const [editingTarget, setEditingTarget] = useState(null);
  const [savingTarget, setSavingTarget] = useState(false);
  const [targetForm, setTargetForm] = useState({
    counselor_id: '',
    target_type: 'monthly',
    period: new Date().toISOString().slice(0, 7),
    target_count: '',
    target_fees: ''
  });
  
  // Edit admission dialog
  const [editAdmissionOpen, setEditAdmissionOpen] = useState(false);
  const [editingAdmission, setEditingAdmission] = useState(null);
  const [admissionForm, setAdmissionForm] = useState({ 
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
  const [savingAdmission, setSavingAdmission] = useState(false);

  const canAssignTargets = user?.role === 'admin' || 
    ['Team Lead', 'Admission Manager'].includes(user?.designation);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [statsRes, admissionsRes, collegesRes] = await Promise.all([
        statsAPI.getPerformance(),
        statsAPI.getAdmissionsList({}),
        collegesAPI.getAll({})
      ]);
      setStats(statsRes.data);
      setAdmissionsList(admissionsRes.data.admissions || []);
      setColleges(collegesRes.data);
      
      // Get counselors list
      try {
        const counselorsRes = await usersAPI.getAll();
        setCounselors(counselorsRes.data);
      } catch { /* Not admin, skip */ }
      
      // Get assignable counselors for target assignment
      if (canAssignTargets) {
        try {
          const assignableRes = await targetsAPI.getCounselors();
          setAssignableCounselors(assignableRes.data);
          
          const targetsRes = await targetsAPI.getProgress();
          setTargets(targetsRes.data);
        } catch { /* Skip */ }
      }
    } catch (error) {
      toast.error('Failed to load performance data');
    } finally {
      setLoading(false);
    }
  }, [canAssignTargets]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchFilteredAdmissions = async () => {
    try {
      const params = {};
      if (filterCollege !== 'all') params.college_id = filterCollege;
      if (filterCounselor !== 'all') params.counselor_id = filterCounselor;
      
      const res = await statsAPI.getAdmissionsList(params);
      setAdmissionsList(res.data.admissions || []);
    } catch (error) {
      toast.error('Failed to filter admissions');
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchFilteredAdmissions();
    }
  }, [filterCollege, filterCounselor]);

  // Target handlers
  const handleOpenTargetDialog = (target = null) => {
    if (target) {
      setEditingTarget(target);
      setTargetForm({
        counselor_id: target.counselor_id,
        target_type: target.target_type,
        period: target.period,
        target_count: target.target_count.toString(),
        target_fees: target.target_fees?.toString() || ''
      });
    } else {
      setEditingTarget(null);
      setTargetForm({
        counselor_id: '',
        target_type: 'monthly',
        period: new Date().toISOString().slice(0, 7),
        target_count: '',
        target_fees: ''
      });
    }
    setTargetDialogOpen(true);
  };

  const handleSaveTarget = async () => {
    if (!targetForm.counselor_id || !targetForm.target_count) {
      toast.error('Please fill required fields');
      return;
    }

    setSavingTarget(true);
    try {
      const payload = {
        counselor_id: targetForm.counselor_id,
        target_type: targetForm.target_type,
        period: targetForm.period,
        target_count: parseInt(targetForm.target_count),
        target_fees: targetForm.target_fees ? parseFloat(targetForm.target_fees) : null
      };

      if (editingTarget) {
        await targetsAPI.update(editingTarget.id, {
          target_count: payload.target_count,
          target_fees: payload.target_fees
        });
        toast.success('Target updated');
      } else {
        await targetsAPI.create(payload);
        toast.success('Target created');
      }
      
      setTargetDialogOpen(false);
      const targetsRes = await targetsAPI.getProgress();
      setTargets(targetsRes.data);
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to save target');
    } finally {
      setSavingTarget(false);
    }
  };

  const handleDeleteTarget = async (targetId) => {
    if (!window.confirm('Delete this target?')) return;
    try {
      await targetsAPI.delete(targetId);
      toast.success('Target deleted');
      const targetsRes = await targetsAPI.getProgress();
      setTargets(targetsRes.data);
    } catch {
      toast.error('Failed to delete target');
    }
  };

  // Edit admission handlers
  const handleOpenEditAdmission = (admission) => {
    setEditingAdmission(admission);
    setAdmissionForm({
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
    setEditAdmissionOpen(true);
  };

  const handleAddInstalment = () => {
    setAdmissionForm(prev => ({
      ...prev,
      instalments: [...prev.instalments, { amount: '', paid_date: '', description: '' }]
    }));
  };

  const handleUpdateInstalment = (index, field, value) => {
    setAdmissionForm(prev => ({
      ...prev,
      instalments: prev.instalments.map((inst, i) => 
        i === index ? { ...inst, [field]: value } : inst
      )
    }));
  };

  const handleRemoveInstalment = (index) => {
    setAdmissionForm(prev => ({
      ...prev,
      instalments: prev.instalments.filter((_, i) => i !== index)
    }));
  };

  const handleSaveAdmission = async () => {
    if (!admissionForm.candidate_name || !admissionForm.college_id || !admissionForm.course_id) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSavingAdmission(true);
    try {
      await admissionsAPI.update(editingAdmission.id, {
        candidate_name: admissionForm.candidate_name,
        place: admissionForm.place,
        college_id: admissionForm.college_id,
        course_id: admissionForm.course_id,
        admission_date: admissionForm.admission_date,
        total_fees: parseFloat(admissionForm.total_fees) || editingAdmission.total_fees,
        instalments: admissionForm.instalments.map(inst => ({
          amount: parseFloat(inst.amount) || 0,
          paid_date: inst.paid_date,
          description: inst.description
        })).filter(inst => inst.amount > 0),
        remark: admissionForm.remark,
        scholarship_amount: admissionForm.scholarship_amount ? parseFloat(admissionForm.scholarship_amount) : null
      });
      toast.success('Admission updated');
      setEditAdmissionOpen(false);
      fetchFilteredAdmissions();
    } catch (error) {
      toast.error('Failed to update admission');
    } finally {
      setSavingAdmission(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <Skeleton className="h-10 w-64" />
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
          <Skeleton className="h-96" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
              Performance Dashboard
            </h1>
            <p className="text-[#475569] font-body mt-1">
              Comprehensive overview of admissions and fee collection
            </p>
          </div>
          {canAssignTargets && (
            <Button 
              onClick={() => handleOpenTargetDialog()}
              className="bg-[#0066CC] hover:bg-[#0052A3] font-body"
              data-testid="assign-target-btn"
            >
              <Target className="h-4 w-4 mr-2" />
              Assign Target
            </Button>
          )}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-body">Total Admissions</p>
                  <p className="text-3xl font-heading font-bold mt-1">
                    {stats?.total_admissions || 0}
                  </p>
                </div>
                <GraduationCap className="h-10 w-10 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-body">Fees Collected</p>
                  <p className="text-2xl font-heading font-bold mt-1">
                    {formatCurrency(stats?.fees_stats?.fees_collected)}
                  </p>
                </div>
                <IndianRupee className="h-10 w-10 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-body">Fees Pending</p>
                  <p className="text-2xl font-heading font-bold mt-1">
                    {formatCurrency(stats?.fees_stats?.fees_pending)}
                  </p>
                </div>
                <Receipt className="h-10 w-10 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-body">Collection Rate</p>
                  <p className="text-3xl font-heading font-bold mt-1">
                    {stats?.fees_stats?.total_fees > 0 
                      ? Math.round((stats.fees_stats.fees_collected / stats.fees_stats.total_fees) * 100)
                      : 0}%
                  </p>
                </div>
                <Target className="h-10 w-10 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="targets">
          <TabsList>
            <TabsTrigger value="targets" className="font-body">
              <Target className="h-4 w-4 mr-2" />
              Targets
            </TabsTrigger>
            <TabsTrigger value="overview" className="font-body">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="by-counselor" className="font-body">
              <Users className="h-4 w-4 mr-2" />
              By Counselor
            </TabsTrigger>
            <TabsTrigger value="by-college" className="font-body">
              <Building2 className="h-4 w-4 mr-2" />
              By College
            </TabsTrigger>
            <TabsTrigger value="admissions" className="font-body">
              <GraduationCap className="h-4 w-4 mr-2" />
              All Admissions
            </TabsTrigger>
          </TabsList>

          {/* Targets Tab */}
          <TabsContent value="targets" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#0066CC]" />
                    Target Progress - {new Date().toISOString().slice(0, 7)}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {targets.length > 0 ? (
                  <div className="space-y-4">
                    {targets.map(target => (
                      <Card key={target.id} className="bg-slate-50">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-body font-semibold">{target.counselor_name}</p>
                              <p className="text-xs text-[#94A3B8]">
                                Target: {target.target_count} admissions
                                {target.target_fees && ` • ${formatCurrency(target.target_fees)} fees`}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon" onClick={() => handleOpenTargetDialog(target)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDeleteTarget(target.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-[#475569]">Admissions</span>
                                <span className="font-medium">{target.actual_count} / {target.target_count}</span>
                              </div>
                              <Progress value={Math.min(target.count_progress, 100)} className="h-2" />
                              <p className="text-xs text-right mt-1 text-[#94A3B8]">{target.count_progress}%</p>
                            </div>
                            {target.target_fees && (
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-[#475569]">Fees Collected</span>
                                  <span className="font-medium">{formatCurrency(target.actual_fees)} / {formatCurrency(target.target_fees)}</span>
                                </div>
                                <Progress value={Math.min(target.fees_progress, 100)} className="h-2 bg-green-100 [&>div]:bg-green-500" />
                                <p className="text-xs text-right mt-1 text-[#94A3B8]">{target.fees_progress}%</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Target className="h-12 w-12 mx-auto text-[#94A3B8] mb-4" />
                    <p className="text-[#475569] font-body">No targets set for this period</p>
                    {canAssignTargets && (
                      <Button onClick={() => handleOpenTargetDialog()} variant="outline" className="mt-4">
                        <Plus className="h-4 w-4 mr-2" />
                        Assign First Target
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#0066CC]" />
                    Top Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stats?.by_course?.length > 0 ? (
                    <div className="space-y-3">
                      {stats.by_course.slice(0, 5).map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm
                              ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-400' : 'bg-blue-400'}`}>
                              {index + 1}
                            </div>
                            <span className="font-body text-sm truncate max-w-[200px]">{item.course_name}</span>
                          </div>
                          <Badge variant="secondary">{item.count} admissions</Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-[#94A3B8] py-8">No data available</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#0066CC]" />
                    Monthly Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stats?.monthly_trends?.length > 0 ? (
                    <div className="space-y-3">
                      {stats.monthly_trends.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-[#94A3B8]" />
                            <span className="font-body text-sm">{item._id}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-body font-medium">{item.count} admissions</p>
                            <p className="text-xs text-green-600">{formatCurrency(item.fees_collected)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-[#94A3B8] py-8">No data available</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* By Counselor Tab */}
          <TabsContent value="by-counselor">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Performance by Counselor</CardTitle>
              </CardHeader>
              <CardContent>
                {stats?.by_counselor?.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-heading">Rank</TableHead>
                        <TableHead className="font-heading">Counselor</TableHead>
                        <TableHead className="font-heading text-right">Admissions</TableHead>
                        <TableHead className="font-heading text-right">Fees Collected</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stats.by_counselor.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm
                              ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-400' : 'bg-slate-300'}`}>
                              {index + 1}
                            </div>
                          </TableCell>
                          <TableCell className="font-body font-medium">{item.counselor_name || 'Unknown'}</TableCell>
                          <TableCell className="text-right"><Badge variant="secondary">{item.count}</Badge></TableCell>
                          <TableCell className="text-right font-body text-green-600 font-medium">{formatCurrency(item.total_fees_collected)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-center text-[#94A3B8] py-12">No data available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* By College Tab */}
          <TabsContent value="by-college">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Performance by College</CardTitle>
              </CardHeader>
              <CardContent>
                {stats?.by_college?.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-heading">College</TableHead>
                        <TableHead className="font-heading text-right">Admissions</TableHead>
                        <TableHead className="font-heading text-right">Fees Collected</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stats.by_college.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-[#94A3B8]" />
                              <span className="font-body">{item.college_name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right"><Badge variant="secondary">{item.count}</Badge></TableCell>
                          <TableCell className="text-right font-body text-green-600 font-medium">{formatCurrency(item.total_fees_collected)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-center text-[#94A3B8] py-12">No data available</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* All Admissions Tab */}
          <TabsContent value="admissions">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <CardTitle className="font-heading text-lg">All Admitted Students ({admissionsList.length})</CardTitle>
                  <div className="flex gap-2">
                    <Select value={filterCollege} onValueChange={setFilterCollege}>
                      <SelectTrigger className="w-48">
                        <Building2 className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filter by College" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Colleges</SelectItem>
                        {colleges.map(c => (
                          <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {counselors.length > 0 && (
                      <Select value={filterCounselor} onValueChange={setFilterCounselor}>
                        <SelectTrigger className="w-48">
                          <Users className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Filter by Counselor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Counselors</SelectItem>
                          {counselors.map(c => (
                            <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {admissionsList.length > 0 ? (
                  <div className="overflow-x-auto">
                    <TooltipProvider>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-heading">Candidate</TableHead>
                          <TableHead className="font-heading">College / Course</TableHead>
                          <TableHead className="font-heading">Counselor</TableHead>
                          <TableHead className="font-heading">Date</TableHead>
                          <TableHead className="font-heading text-right">Total</TableHead>
                          <TableHead className="font-heading text-right">Scholarship</TableHead>
                          <TableHead className="font-heading text-right">Paid</TableHead>
                          <TableHead className="font-heading text-right">Balance</TableHead>
                          <TableHead className="font-heading">Remarks</TableHead>
                          <TableHead className="font-heading text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {admissionsList.map(admission => (
                          <TableRow key={admission.id}>
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
                                <Badge variant="secondary" className="text-xs mt-1">{admission.course_name}</Badge>
                              </div>
                            </TableCell>
                            <TableCell className="font-body text-[#475569]">{admission.counselor_name}</TableCell>
                            <TableCell className="font-body text-[#475569]">{admission.admission_date}</TableCell>
                            <TableCell className="text-right font-body">{formatCurrency(admission.total_fees)}</TableCell>
                            <TableCell className="text-right">
                              {admission.scholarship_amount ? (
                                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                                  <Gift className="h-3 w-3 mr-1" />
                                  {formatCurrency(admission.scholarship_amount)}
                                </Badge>
                              ) : (
                                <span className="text-xs text-[#94A3B8]">—</span>
                              )}
                            </TableCell>
                            <TableCell className="text-right font-body text-green-600">{formatCurrency(admission.fees_paid)}</TableCell>
                            <TableCell className="text-right">
                              <Badge className={admission.balance > 0 ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}>
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
                              <Button variant="ghost" size="icon" onClick={() => handleOpenEditAdmission(admission)} data-testid={`edit-admission-${admission.id}`}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </TooltipProvider>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <GraduationCap className="h-12 w-12 mx-auto text-[#94A3B8] mb-4" />
                    <p className="text-[#475569] font-body">No admissions found</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Target Assignment Dialog */}
      <Dialog open={targetDialogOpen} onOpenChange={setTargetDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-heading flex items-center gap-2">
              <Target className="h-5 w-5 text-[#0066CC]" />
              {editingTarget ? 'Edit Target' : 'Assign Target'}
            </DialogTitle>
            <DialogDescription className="font-body">
              Set admission and fee collection targets for counselors
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label className="font-body">Counselor *</Label>
              <Select value={targetForm.counselor_id} onValueChange={v => setTargetForm(p => ({ ...p, counselor_id: v }))} disabled={!!editingTarget}>
                <SelectTrigger className="mt-1" data-testid="target-counselor-select">
                  <SelectValue placeholder="Select counselor" />
                </SelectTrigger>
                <SelectContent>
                  {assignableCounselors.map(c => (
                    <SelectItem key={c.id} value={c.id}>{c.name} ({c.designation})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="font-body">Period Type</Label>
                <Select value={targetForm.target_type} onValueChange={v => setTargetForm(p => ({ ...p, target_type: v }))} disabled={!!editingTarget}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="font-body">Period *</Label>
                <Input type="month" value={targetForm.period} onChange={e => setTargetForm(p => ({ ...p, period: e.target.value }))} className="mt-1" disabled={!!editingTarget} data-testid="target-period-input" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="font-body">Admissions Target *</Label>
                <Input type="number" value={targetForm.target_count} onChange={e => setTargetForm(p => ({ ...p, target_count: e.target.value }))} placeholder="e.g., 10" className="mt-1" data-testid="target-count-input" />
              </div>
              <div>
                <Label className="font-body">Fees Target (Optional)</Label>
                <Input type="number" value={targetForm.target_fees} onChange={e => setTargetForm(p => ({ ...p, target_fees: e.target.value }))} placeholder="e.g., 500000" className="mt-1" data-testid="target-fees-input" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTargetDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveTarget} disabled={savingTarget} className="bg-[#0066CC] hover:bg-[#0052A3]" data-testid="save-target-btn">
              {savingTarget ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Check className="h-4 w-4 mr-2" />}
              {editingTarget ? 'Update' : 'Create'} Target
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Admission Dialog */}
      <Dialog open={editAdmissionOpen} onOpenChange={setEditAdmissionOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading flex items-center gap-2">
              <Edit className="h-5 w-5 text-[#0066CC]" />
              Edit Fee Payment - {editingAdmission?.candidate_name}
            </DialogTitle>
            <DialogDescription className="font-body">
              Update fee instalments and remarks for this admission
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Instalments */}
            <div className="flex items-center justify-between">
              <Label className="font-body font-semibold">Fee Instalments</Label>
              <Button type="button" variant="outline" size="sm" onClick={handleAddInstalment} data-testid="add-instalment-btn">
                <Plus className="h-4 w-4 mr-1" /> Add Instalment
              </Button>
            </div>
            {admissionForm.instalments.length === 0 ? (
              <div className="text-center py-6 bg-slate-50 rounded-lg">
                <Receipt className="h-8 w-8 mx-auto text-[#94A3B8] mb-2" />
                <p className="text-sm text-[#475569]">No instalments recorded</p>
              </div>
            ) : (
              <div className="space-y-3">
                {admissionForm.instalments.map((inst, index) => (
                  <Card key={index} className="bg-slate-50">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-1 grid grid-cols-3 gap-3">
                          <div>
                            <Label className="text-xs">Amount *</Label>
                            <Input type="number" value={inst.amount} onChange={e => handleUpdateInstalment(index, 'amount', e.target.value)} placeholder="Amount" className="mt-1 h-9" />
                          </div>
                          <div>
                            <Label className="text-xs">Paid Date</Label>
                            <Input type="date" value={inst.paid_date} onChange={e => handleUpdateInstalment(index, 'paid_date', e.target.value)} className="mt-1 h-9" />
                          </div>
                          <div>
                            <Label className="text-xs">Description</Label>
                            <Input value={inst.description} onChange={e => handleUpdateInstalment(index, 'description', e.target.value)} placeholder="e.g., 1st Instalment" className="mt-1 h-9" />
                          </div>
                        </div>
                        <Button type="button" variant="ghost" size="icon" className="text-red-500 h-9 w-9 mt-5" onClick={() => handleRemoveInstalment(index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            {/* Remark */}
            <div>
              <Label className="font-body">Remarks</Label>
              <Input value={admissionForm.remark} onChange={e => setAdmissionForm(p => ({ ...p, remark: e.target.value }))} placeholder="Any notes..." className="mt-1" data-testid="admission-remark-input" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditAdmissionOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveAdmission} disabled={savingAdmission} className="bg-[#0066CC] hover:bg-[#0052A3]" data-testid="save-admission-edit-btn">
              {savingAdmission ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Check className="h-4 w-4 mr-2" />}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
