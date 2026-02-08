import React, { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { statsAPI, collegesAPI, usersAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
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
  const [stats, setStats] = useState(null);
  const [admissionsList, setAdmissionsList] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCollege, setFilterCollege] = useState('all');
  const [filterCounselor, setFilterCounselor] = useState('all');

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
      
      // Try to get counselors list (admin only)
      try {
        const counselorsRes = await usersAPI.getAll();
        setCounselors(counselorsRes.data);
      } catch {
        // Not admin, skip
      }
    } catch (error) {
      toast.error('Failed to load performance data');
    } finally {
      setLoading(false);
    }
  }, []);

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
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
            Performance Dashboard
          </h1>
          <p className="text-[#475569] font-body mt-1">
            Comprehensive overview of admissions and fee collection
          </p>
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

        {/* Tabs for different views */}
        <Tabs defaultValue="overview">
          <TabsList>
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

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Courses */}
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
                            <span className="font-body text-sm truncate max-w-[200px]">
                              {item.course_name}
                            </span>
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

              {/* Monthly Trends */}
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
                            <p className="text-xs text-green-600">
                              {formatCurrency(item.fees_collected)}
                            </p>
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
                          <TableCell className="font-body font-medium">
                            {item.counselor_name || 'Unknown'}
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge variant="secondary">{item.count}</Badge>
                          </TableCell>
                          <TableCell className="text-right font-body text-green-600 font-medium">
                            {formatCurrency(item.total_fees_collected)}
                          </TableCell>
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
                          <TableCell className="text-right">
                            <Badge variant="secondary">{item.count}</Badge>
                          </TableCell>
                          <TableCell className="text-right font-body text-green-600 font-medium">
                            {formatCurrency(item.total_fees_collected)}
                          </TableCell>
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
                  <CardTitle className="font-heading text-lg">
                    All Admitted Students ({admissionsList.length})
                  </CardTitle>
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
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-heading">Candidate</TableHead>
                          <TableHead className="font-heading">College / Course</TableHead>
                          <TableHead className="font-heading">Counselor</TableHead>
                          <TableHead className="font-heading">Date</TableHead>
                          <TableHead className="font-heading text-right">Total</TableHead>
                          <TableHead className="font-heading text-right">Paid</TableHead>
                          <TableHead className="font-heading text-right">Balance</TableHead>
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
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {admission.course_name}
                                </Badge>
                              </div>
                            </TableCell>
                            <TableCell className="font-body text-[#475569]">
                              {admission.counselor_name}
                            </TableCell>
                            <TableCell className="font-body text-[#475569]">
                              {admission.admission_date}
                            </TableCell>
                            <TableCell className="text-right font-body">
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
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
    </AdminLayout>
  );
}
