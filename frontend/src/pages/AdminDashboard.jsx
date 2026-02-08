import React, { useState, useEffect, useCallback } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { collegesAPI, feesAPI, faqsAPI, coursesAPI, seedAPI } from '../lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import {
  Building2,
  IndianRupee,
  HelpCircle,
  GraduationCap,
  ArrowRight,
  Sparkles,
  RefreshCw,
  AlertTriangle,
  Clock,
  XCircle,
  Check,
  ChevronRight,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Seat status configuration
const SEAT_STATUS_CONFIG = {
  'Available': { color: 'bg-green-100 text-green-700', icon: Check },
  'Closing': { color: 'bg-yellow-100 text-yellow-700', icon: AlertTriangle },
  'Under Waiting': { color: 'bg-blue-100 text-blue-700', icon: Clock },
  'Closed': { color: 'bg-red-100 text-red-700', icon: XCircle },
};

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentColleges, setRecentColleges] = useState([]);
  const [coursesNeedingAttention, setCoursesNeedingAttention] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allColleges, setAllColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [collegesRes, feesRes, faqsRes, coursesRes] = await Promise.all([
        collegesAPI.getAll({}),
        feesAPI.getAll({}),
        faqsAPI.getAll({}),
        coursesAPI.getAll({}),
      ]);
      
      const courses = coursesRes.data;
      const colleges = collegesRes.data;
      
      setAllCourses(courses);
      setAllColleges(colleges);
      
      // Filter courses needing attention (Closing, Under Waiting)
      const attentionCourses = courses.filter(c => 
        c.seat_status === 'Closing' || c.seat_status === 'Under Waiting'
      );
      
      // Enrich with college info
      const enrichedCourses = attentionCourses.map(course => {
        const college = colleges.find(col => col.id === course.college_id);
        return { ...course, college };
      });
      
      setCoursesNeedingAttention(enrichedCourses);
      
      // Count by status
      const closingCount = courses.filter(c => c.seat_status === 'Closing').length;
      const waitingCount = courses.filter(c => c.seat_status === 'Under Waiting').length;
      const closedCount = courses.filter(c => c.seat_status === 'Closed').length;
      
      setStats({
        colleges: collegesRes.data.length,
        fees: feesRes.data.length,
        faqs: faqsRes.data.length,
        courses: courses.length,
        closingCourses: closingCount,
        waitingCourses: waitingCount,
        closedCourses: closedCount,
      });
      setRecentColleges(collegesRes.data.slice(0, 5));
    } catch (error) {
      console.error('Failed to fetch data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSeed = async () => {
    try {
      setSeeding(true);
      const response = await seedAPI.seed();
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.error('Failed to seed database');
    } finally {
      setSeeding(false);
    }
  };

  const statCards = [
    {
      title: 'Featured Colleges',
      value: stats?.colleges || 0,
      icon: Building2,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      link: '/admin/colleges',
    },
    {
      title: 'Total Courses',
      value: stats?.courses || 0,
      icon: GraduationCap,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      link: '/admin/colleges',
    },
    {
      title: 'Fee Records',
      value: stats?.fees || 0,
      icon: IndianRupee,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      link: '/admin/fees',
    },
    {
      title: 'FAQs',
      value: stats?.faqs || 0,
      icon: HelpCircle,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      link: '/admin/faqs',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
              Dashboard
            </h1>
            <p className="text-[#475569] font-body mt-1">
              Manage colleges, fee structures, and seat availability
            </p>
          </div>
          {stats && stats.colleges === 0 && (
            <Button
              onClick={handleSeed}
              disabled={seeding}
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-body rounded-full"
              data-testid="seed-btn"
            >
              {seeding ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Seeding...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Load Sample Data
                </>
              )}
            </Button>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                  <Skeleton className="h-8 w-20 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))
          ) : (
            statCards.map((stat, index) => (
              <Link key={stat.title} to={stat.link}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center mb-4`}>
                      <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-[#0F172A]">
                      {stat.value}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm font-body text-[#475569]">
                        {stat.title}
                      </p>
                      <ArrowRight className="h-4 w-4 text-[#94A3B8] group-hover:text-[#0066CC] group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>

        {/* Courses Needing Attention Widget */}
        {!loading && coursesNeedingAttention.length > 0 && (
          <Card className="border-yellow-200 bg-yellow-50/50" data-testid="attention-widget">
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Courses Needing Attention
                  <Badge className="bg-yellow-600 text-white ml-2">{coursesNeedingAttention.length}</Badge>
                </div>
                <Link to="/admin/colleges">
                  <Button variant="outline" size="sm" className="font-body">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {coursesNeedingAttention.slice(0, 5).map((course, index) => {
                  const statusConfig = SEAT_STATUS_CONFIG[course.seat_status] || SEAT_STATUS_CONFIG['Available'];
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <div 
                      key={course.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 hover:shadow-sm transition-shadow animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-body font-medium text-[#0F172A] truncate">
                          {course.name}
                        </h4>
                        <p className="text-sm font-body text-[#475569]">
                          {course.college?.name || 'Unknown College'}
                        </p>
                      </div>
                      <Badge className={`${statusConfig.color} font-body ml-4`}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {course.seat_status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
              {coursesNeedingAttention.length > 5 && (
                <p className="text-sm text-center text-[#475569] font-body mt-4">
                  +{coursesNeedingAttention.length - 5} more courses need attention
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#0066CC]" />
                College Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#475569] font-body mb-4">
                Manage colleges, view by location/category, and update seat availability status.
              </p>
              <Link to="/admin/colleges">
                <Button className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full">
                  Manage Colleges
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-green-600" />
                Fee Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#475569] font-body mb-4">
                Add and manage admission fee structures for featured colleges. Configure annual, semester, and hostel fees.
              </p>
              <Link to="/admin/fees">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-body rounded-full">
                  Manage Fees
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#FF6B35]" />
                FAQ Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#475569] font-body mb-4">
                Create and manage FAQs. Add global FAQs or college-specific questions for better counselor support.
              </p>
              <Link to="/admin/faqs">
                <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-body rounded-full">
                  Manage FAQs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Seat Status Summary */}
        {!loading && stats && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#0066CC]" />
                Seat Availability Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-body text-sm text-green-700">Available</span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-green-700">
                    {(stats.courses || 0) - (stats.closingCourses || 0) - (stats.waitingCourses || 0) - (stats.closedCourses || 0)}
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span className="font-body text-sm text-yellow-700">Closing</span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-yellow-700">
                    {stats.closingCourses || 0}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-body text-sm text-blue-700">Under Waiting</span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-blue-700">
                    {stats.waitingCourses || 0}
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="font-body text-sm text-red-700">Closed</span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-red-700">
                    {stats.closedCourses || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Colleges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#0066CC]" />
              Featured Colleges
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-48 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            ) : recentColleges.length > 0 ? (
              <div className="space-y-4">
                {recentColleges.map((college, index) => (
                  <div 
                    key={college.id} 
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0066CC]/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-[#0066CC]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body font-medium text-[#0F172A] truncate">
                        {college.name}
                      </h4>
                      <p className="text-sm font-body text-[#475569]">
                        {college.city}, {college.state}
                      </p>
                    </div>
                    <Badge variant="secondary" className="font-body">
                      {college.category}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Building2 className="h-12 w-12 mx-auto text-[#94A3B8] mb-3" />
                <p className="text-[#475569] font-body">
                  No colleges found. Load sample data to get started.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
