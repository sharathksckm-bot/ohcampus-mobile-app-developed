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
  TrendingUp,
  ArrowRight,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentColleges, setRecentColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [collegesRes, feesRes, faqsRes, coursesRes] = await Promise.all([
        collegesAPI.getAll({}),
        feesAPI.getAll({}),
        faqsAPI.getAll({}),
        coursesAPI.getAll(),
      ]);
      
      setStats({
        colleges: collegesRes.data.length,
        fees: feesRes.data.length,
        faqs: faqsRes.data.length,
        courses: coursesRes.data.length,
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
      link: '/admin/fees',
    },
    {
      title: 'Total Courses',
      value: stats?.courses || 0,
      icon: GraduationCap,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      link: '/admin/fees',
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
              Manage fee structures and FAQs for featured colleges
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

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-[#0066CC]" />
                Fee Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#475569] font-body mb-4">
                Add and manage admission fee structures for featured colleges. Configure annual, semester, and hostel fees.
              </p>
              <Link to="/admin/fees">
                <Button className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full">
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
