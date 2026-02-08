import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { collegesAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Calendar,
  IndianRupee,
  GraduationCap,
  Building2,
  BookOpen,
  Home,
  Receipt
} from 'lucide-react';
import { toast } from 'sonner';

export default function CompareColleges() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [compareData, setCompareData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCompareData = useCallback(async () => {
    const collegeIds = searchParams.get('colleges');
    if (!collegeIds) {
      toast.error('No colleges selected for comparison');
      navigate('/dashboard');
      return;
    }

    try {
      setLoading(true);
      const response = await collegesAPI.compare(collegeIds);
      setCompareData(response.data);
    } catch (error) {
      console.error('Failed to fetch comparison data:', error);
      toast.error('Failed to load comparison data');
    } finally {
      setLoading(false);
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    fetchCompareData();
  }, [fetchCompareData]);

  const formatCurrency = (amount) => {
    if (!amount) return '—';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateTotalFees = (fees) => {
    return fees.reduce((sum, fee) => sum + (fee.amount || 0), 0);
  };

  const calculateTotalHostel = (fees) => {
    return fees.reduce((sum, fee) => sum + (fee.hostel_fee || 0), 0);
  };

  const getAdmissionTotal = (charges) => {
    if (!charges) return 0;
    return (charges.registration_fee || 0) + 
           (charges.admission_fee || 0) + 
           (charges.caution_deposit || 0) + 
           (charges.uniform_fee || 0) + 
           (charges.library_fee || 0) + 
           (charges.lab_fee || 0) + 
           (charges.other_charges || 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="font-body text-[#475569] hover:text-[#0066CC] -ml-2"
          data-testid="back-btn"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Colleges
        </Button>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#0F172A] mb-2">
          College Comparison
        </h1>
        <p className="text-[#475569] font-body">
          Compare {compareData.length} colleges side by side
        </p>
      </div>

      {/* Comparison Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="overflow-x-auto">
          {/* College Headers */}
          <div className={`grid gap-4 mb-6`} style={{ gridTemplateColumns: `repeat(${compareData.length}, minmax(280px, 1fr))` }}>
            {compareData.map(({ college }) => (
              <Card key={college.id} className="border-slate-200">
                <CardContent className="p-6">
                  <Badge className="bg-[#FF6B35] hover:bg-[#FF6B35] text-white mb-3">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                  <h3 className="text-lg font-heading font-semibold text-[#0F172A] mb-2">
                    {college.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#475569] font-body text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{college.city}, {college.state}</span>
                  </div>
                  {college.address && (
                    <p className="text-xs text-[#94A3B8] font-body mb-2">
                      {college.address}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="secondary">{college.category}</Badge>
                    {college.accreditation && (
                      <span className="text-xs text-[#0066CC] font-body font-medium">
                        {college.accreditation}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-sm text-[#475569]">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {college.established}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlights Comparison */}
          <Card className="mb-6 border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <Star className="h-5 w-5 text-[#FF6B35]" />
                Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className={`grid`} style={{ gridTemplateColumns: `repeat(${compareData.length}, minmax(280px, 1fr))` }}>
                {compareData.map(({ college }) => (
                  <div key={college.id} className="p-4 border-r border-slate-200 last:border-r-0">
                    {college.highlights && college.highlights.length > 0 ? (
                      <ul className="space-y-2">
                        {college.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm font-body text-[#475569]">
                            <span className="w-5 h-5 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#94A3B8] font-body">No highlights available</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Courses Comparison */}
          <Card className="mb-6 border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#0066CC]" />
                Courses Offered
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className={`grid`} style={{ gridTemplateColumns: `repeat(${compareData.length}, minmax(280px, 1fr))` }}>
                {compareData.map(({ college, courses }) => (
                  <div key={college.id} className="p-4 border-r border-slate-200 last:border-r-0">
                    {courses && courses.length > 0 ? (
                      <ul className="space-y-2">
                        {courses.map((course) => (
                          <li key={course.id} className="flex items-center justify-between text-sm font-body">
                            <span className="text-[#0F172A]">{course.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {course.duration}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#94A3B8] font-body">No courses listed</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fee Comparison */}
          <Card className="mb-6 border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-green-600" />
                Fee Structure Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className={`grid`} style={{ gridTemplateColumns: `repeat(${compareData.length}, minmax(280px, 1fr))` }}>
                {compareData.map(({ college, fees, fees_by_course, courses, admission_charges }) => (
                  <div key={college.id} className="p-4 border-r border-slate-200 last:border-r-0">
                    {Object.keys(fees_by_course).length > 0 ? (
                      <div className="space-y-4">
                        {Object.entries(fees_by_course).map(([courseId, data]) => {
                          const course = courses.find(c => c.id === courseId);
                          const admissionCharge = admission_charges.find(ac => ac.course_id === courseId);
                          const admissionTotal = getAdmissionTotal(admissionCharge);
                          
                          return (
                            <div key={courseId} className="p-3 bg-slate-50 rounded-lg">
                              <h4 className="font-body font-medium text-[#0F172A] text-sm mb-2">
                                {course?.name || 'Unknown Course'}
                              </h4>
                              <div className="space-y-1 text-xs font-body">
                                <div className="flex justify-between">
                                  <span className="text-[#475569]">Total Tuition:</span>
                                  <span className="font-semibold text-[#0F172A]">
                                    {formatCurrency(data.total_tuition)}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-[#475569]">Total Hostel:</span>
                                  <span className="text-[#0066CC]">
                                    {formatCurrency(data.total_hostel)}
                                  </span>
                                </div>
                                {admissionTotal > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Admission Charges:</span>
                                    <span className="text-[#FF6B35]">
                                      {formatCurrency(admissionTotal)}
                                    </span>
                                  </div>
                                )}
                                <div className="flex justify-between pt-2 border-t border-slate-200 mt-2">
                                  <span className="text-[#475569] font-medium">Total (excl. Hostel):</span>
                                  <span className="font-bold text-[#0F172A]">
                                    {formatCurrency(data.total_tuition + admissionTotal)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-[#94A3B8] font-body">No fee information available</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Admission Charges Comparison */}
          <Card className="border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                <Receipt className="h-5 w-5 text-purple-600" />
                Admission Charges
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className={`grid`} style={{ gridTemplateColumns: `repeat(${compareData.length}, minmax(280px, 1fr))` }}>
                {compareData.map(({ college, admission_charges, courses }) => (
                  <div key={college.id} className="p-4 border-r border-slate-200 last:border-r-0">
                    {admission_charges && admission_charges.length > 0 ? (
                      <div className="space-y-4">
                        {admission_charges.map((charge) => {
                          const course = courses.find(c => c.id === charge.course_id);
                          return (
                            <div key={charge.id} className="p-3 bg-purple-50 rounded-lg">
                              <h4 className="font-body font-medium text-[#0F172A] text-sm mb-2">
                                {course?.name || 'Unknown Course'}
                              </h4>
                              <div className="space-y-1 text-xs font-body">
                                {charge.registration_fee > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Registration:</span>
                                    <span>{formatCurrency(charge.registration_fee)}</span>
                                  </div>
                                )}
                                {charge.admission_fee > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Admission:</span>
                                    <span>{formatCurrency(charge.admission_fee)}</span>
                                  </div>
                                )}
                                {charge.caution_deposit > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Caution Deposit:</span>
                                    <span>{formatCurrency(charge.caution_deposit)}</span>
                                  </div>
                                )}
                                {charge.library_fee > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Library Fee:</span>
                                    <span>{formatCurrency(charge.library_fee)}</span>
                                  </div>
                                )}
                                {charge.lab_fee > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Lab Fee:</span>
                                    <span>{formatCurrency(charge.lab_fee)}</span>
                                  </div>
                                )}
                                <div className="flex justify-between pt-2 border-t border-purple-200 mt-2">
                                  <span className="text-[#475569] font-medium">Total:</span>
                                  <span className="font-bold text-purple-700">
                                    {formatCurrency(getAdmissionTotal(charge))}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-[#94A3B8] font-body">No admission charges listed</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
