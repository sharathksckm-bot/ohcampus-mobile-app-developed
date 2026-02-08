import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { collegesAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Calendar,
  IndianRupee,
  BookOpen,
  Receipt,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';

export default function CompareColleges() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [compareData, setCompareData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mobile carousel navigation
  const nextCollege = () => {
    setActiveIndex((prev) => (prev + 1) % compareData.length);
  };

  const prevCollege = () => {
    setActiveIndex((prev) => (prev - 1 + compareData.length) % compareData.length);
  };

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

      {/* Mobile Navigation */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 mb-4">
        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
          <Button variant="ghost" size="icon" onClick={prevCollege}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {compareData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-[#0066CC]' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={nextCollege}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Comparison Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* College Headers Row */}
              <thead>
                <tr>
                  <th className="w-40 p-4 text-left font-heading font-semibold text-[#0F172A] bg-slate-100 border border-slate-200 sticky left-0 z-10">
                    Attribute
                  </th>
                  {compareData.map(({ college }) => (
                    <th key={college.id} className="p-4 text-left border border-slate-200 bg-white min-w-[280px]">
                      <Badge className="bg-[#FF6B35] hover:bg-[#FF6B35] text-white mb-2">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Featured
                      </Badge>
                      <h3 className="text-base font-heading font-semibold text-[#0F172A] mb-1">
                        {college.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[#475569] font-body text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>{college.city}, {college.state}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Address Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10">
                    Address
                  </td>
                  {compareData.map(({ college }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white">
                      <p className="text-sm text-[#475569] font-body">
                        {college.address || '—'}
                      </p>
                    </td>
                  ))}
                </tr>

                {/* Category & Accreditation Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10">
                    Category
                  </td>
                  {compareData.map(({ college }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white">
                      <Badge variant="secondary" className="mb-1">{college.category}</Badge>
                      {college.accreditation && (
                        <p className="text-xs text-[#0066CC] font-body font-medium mt-1">
                          {college.accreditation}
                        </p>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Established Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10">
                    Established
                  </td>
                  {compareData.map(({ college }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white">
                      <div className="flex items-center gap-2 text-sm text-[#475569]">
                        <Calendar className="h-4 w-4" />
                        <span>{college.established}</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Highlights Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10 align-top">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-[#FF6B35]" />
                      Highlights
                    </div>
                  </td>
                  {compareData.map(({ college }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white align-top">
                      {college.highlights && college.highlights.length > 0 ? (
                        <ul className="space-y-2">
                          {college.highlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm font-body text-[#475569]">
                              <span className="w-5 h-5 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="line-clamp-2">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-[#94A3B8]">—</p>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Courses Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10 align-top">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-[#0066CC]" />
                      Courses
                    </div>
                  </td>
                  {compareData.map(({ college, courses }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white align-top">
                      {courses && courses.length > 0 ? (
                        <ul className="space-y-2">
                          {courses.slice(0, 5).map((course) => (
                            <li key={course.id} className="flex items-center justify-between text-sm font-body">
                              <span className="text-[#0F172A] truncate mr-2">{course.name}</span>
                              <Badge variant="outline" className="text-xs flex-shrink-0">
                                {course.duration}
                              </Badge>
                            </li>
                          ))}
                          {courses.length > 5 && (
                            <li className="text-xs text-[#94A3B8]">+{courses.length - 5} more courses</li>
                          )}
                        </ul>
                      ) : (
                        <p className="text-sm text-[#94A3B8]">—</p>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Fee Summary Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10 align-top">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-green-600" />
                      Fee Range
                    </div>
                  </td>
                  {compareData.map(({ college, fees_by_course, courses, admission_charges }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white align-top">
                      {Object.keys(fees_by_course).length > 0 ? (
                        <div className="space-y-3">
                          {Object.entries(fees_by_course).slice(0, 3).map(([courseId, data]) => {
                            const course = courses.find(c => c.id === courseId);
                            const admissionCharge = admission_charges.find(ac => ac.course_id === courseId);
                            const admissionTotal = getAdmissionTotal(admissionCharge);
                            
                            return (
                              <div key={courseId} className="p-2 bg-slate-50 rounded text-xs">
                                <p className="font-medium text-[#0F172A] mb-1 truncate">
                                  {course?.name || 'Course'}
                                </p>
                                <div className="flex justify-between">
                                  <span className="text-[#475569]">Tuition Total:</span>
                                  <span className="font-semibold">{formatCurrency(data.total_tuition)}</span>
                                </div>
                                {admissionTotal > 0 && (
                                  <div className="flex justify-between">
                                    <span className="text-[#475569]">Admission:</span>
                                    <span className="text-[#FF6B35]">{formatCurrency(admissionTotal)}</span>
                                  </div>
                                )}
                                <div className="flex justify-between pt-1 border-t border-slate-200 mt-1">
                                  <span className="text-[#475569] font-medium">Total:</span>
                                  <span className="font-bold text-[#0066CC]">
                                    {formatCurrency(data.total_tuition + admissionTotal)}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-sm text-[#94A3B8]">No fee info</p>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Admission Charges Row */}
                <tr>
                  <td className="p-4 font-body font-medium text-[#475569] bg-slate-50 border border-slate-200 sticky left-0 z-10 align-top">
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-purple-600" />
                      Admission Charges
                    </div>
                  </td>
                  {compareData.map(({ college, admission_charges, courses }) => (
                    <td key={college.id} className="p-4 border border-slate-200 bg-white align-top">
                      {admission_charges && admission_charges.length > 0 ? (
                        <div className="space-y-2">
                          {admission_charges.slice(0, 2).map((charge) => {
                            const course = courses.find(c => c.id === charge.course_id);
                            const total = getAdmissionTotal(charge);
                            return (
                              <div key={charge.id} className="p-2 bg-purple-50 rounded text-xs">
                                <p className="font-medium text-[#0F172A] mb-1 truncate">
                                  {course?.name || 'Course'}
                                </p>
                                <div className="flex justify-between">
                                  <span className="text-[#475569]">Total Charges:</span>
                                  <span className="font-bold text-purple-700">{formatCurrency(total)}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-sm text-[#94A3B8]">—</p>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden">
          {compareData.length > 0 && (
            <div className="space-y-4">
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <Badge className="bg-[#FF6B35] hover:bg-[#FF6B35] text-white mb-3">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                  <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
                    {compareData[activeIndex].college.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#475569] font-body text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{compareData[activeIndex].college.city}, {compareData[activeIndex].college.state}</span>
                  </div>
                  {compareData[activeIndex].college.address && (
                    <p className="text-sm text-[#94A3B8] font-body mb-3">
                      {compareData[activeIndex].college.address}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{compareData[activeIndex].college.category}</Badge>
                    {compareData[activeIndex].college.accreditation && (
                      <span className="text-xs text-[#0066CC] font-body font-medium">
                        {compareData[activeIndex].college.accreditation}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#475569]">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {compareData[activeIndex].college.established}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card className="border-slate-200">
                <CardHeader className="bg-slate-50 border-b border-slate-200 py-3">
                  <CardTitle className="text-base font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                    <Star className="h-4 w-4 text-[#FF6B35]" />
                    Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {compareData[activeIndex].college.highlights?.length > 0 ? (
                    <ul className="space-y-2">
                      {compareData[activeIndex].college.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm font-body text-[#475569]">
                          <span className="w-5 h-5 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center text-xs flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-[#94A3B8]">No highlights available</p>
                  )}
                </CardContent>
              </Card>

              {/* Courses */}
              <Card className="border-slate-200">
                <CardHeader className="bg-slate-50 border-b border-slate-200 py-3">
                  <CardTitle className="text-base font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#0066CC]" />
                    Courses ({compareData[activeIndex].courses.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {compareData[activeIndex].courses.length > 0 ? (
                    <ul className="space-y-2">
                      {compareData[activeIndex].courses.map((course) => (
                        <li key={course.id} className="flex items-center justify-between text-sm font-body">
                          <span className="text-[#0F172A]">{course.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {course.duration}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-[#94A3B8]">No courses listed</p>
                  )}
                </CardContent>
              </Card>

              {/* Fee Summary */}
              <Card className="border-slate-200">
                <CardHeader className="bg-slate-50 border-b border-slate-200 py-3">
                  <CardTitle className="text-base font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-green-600" />
                    Fee Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {Object.keys(compareData[activeIndex].fees_by_course).length > 0 ? (
                    <div className="space-y-3">
                      {Object.entries(compareData[activeIndex].fees_by_course).map(([courseId, data]) => {
                        const course = compareData[activeIndex].courses.find(c => c.id === courseId);
                        const admissionCharge = compareData[activeIndex].admission_charges.find(ac => ac.course_id === courseId);
                        const admissionTotal = getAdmissionTotal(admissionCharge);
                        
                        return (
                          <div key={courseId} className="p-3 bg-slate-50 rounded-lg">
                            <p className="font-body font-medium text-[#0F172A] text-sm mb-2">
                              {course?.name || 'Course'}
                            </p>
                            <div className="space-y-1 text-xs font-body">
                              <div className="flex justify-between">
                                <span className="text-[#475569]">Total Tuition:</span>
                                <span className="font-semibold">{formatCurrency(data.total_tuition)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#475569]">Total Hostel:</span>
                                <span className="text-[#0066CC]">{formatCurrency(data.total_hostel)}</span>
                              </div>
                              {admissionTotal > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-[#475569]">Admission:</span>
                                  <span className="text-[#FF6B35]">{formatCurrency(admissionTotal)}</span>
                                </div>
                              )}
                              <div className="flex justify-between pt-2 border-t border-slate-200 mt-2">
                                <span className="text-[#475569] font-medium">Total (excl. Hostel):</span>
                                <span className="font-bold text-[#0066CC]">
                                  {formatCurrency(data.total_tuition + admissionTotal)}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-[#94A3B8]">No fee information available</p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
