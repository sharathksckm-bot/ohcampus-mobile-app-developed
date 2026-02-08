import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { collegesAPI, coursesAPI, feesAPI, faqsAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Skeleton } from '../components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
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
  Sparkles, 
  Bell,
  IndianRupee,
  GraduationCap,
  Building2,
  HelpCircle,
  Calendar,
  Home,
  BookOpen
} from 'lucide-react';
import { toast } from 'sonner';

export default function CollegeDetail() {
  const { collegeId } = useParams();
  const navigate = useNavigate();
  const [college, setCollege] = useState(null);
  const [courses, setCourses] = useState([]);
  const [fees, setFees] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('highlights');

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [collegeRes, coursesRes, feesRes, faqsRes] = await Promise.all([
        collegesAPI.getById(collegeId),
        coursesAPI.getByCollege(collegeId),
        feesAPI.getByCollege(collegeId),
        faqsAPI.getAll({ college_id: collegeId, include_global: true }),
      ]);
      
      setCollege(collegeRes.data);
      setCourses(coursesRes.data);
      setFees(feesRes.data);
      setFaqs(faqsRes.data);
    } catch (error) {
      console.error('Failed to fetch college details:', error);
      toast.error('Failed to load college details');
    } finally {
      setLoading(false);
    }
  }, [collegeId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Group fees by course
  const feesByCourse = fees.reduce((acc, fee) => {
    const course = courses.find(c => c.id === fee.course_id);
    if (course) {
      if (!acc[fee.course_id]) {
        acc[fee.course_id] = {
          course,
          fees: []
        };
      }
      acc[fee.course_id].fees.push(fee);
    }
    return acc;
  }, {});

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-64 w-full rounded-xl mb-6" />
              <Skeleton className="h-48 w-full rounded-xl" />
            </div>
            <div>
              <Skeleton className="h-96 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-heading font-semibold text-[#0F172A] mb-4">
            College not found
          </h2>
          <Button
            onClick={() => navigate('/dashboard')}
            className="bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-full"
          >
            Back to Dashboard
          </Button>
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0066CC] to-[#0052A3] p-8 lg:p-12">
          <div className="relative z-10">
            <Badge className="bg-[#FF6B35] hover:bg-[#FF6B35] text-white mb-4">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Featured College
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4" data-testid="college-name">
              {college.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-100 font-body">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{college.city}, {college.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Est. {college.established}</span>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                {college.category}
              </Badge>
            </div>
            {college.accreditation && (
              <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-body text-sm">
                <Star className="h-4 w-4 mr-2 fill-current text-yellow-300" />
                {college.accreditation}
              </div>
            )}
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-white border border-slate-200 p-1 rounded-xl mb-8 w-full lg:w-auto inline-flex">
            <TabsTrigger 
              value="highlights" 
              className="rounded-lg font-body data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
              data-testid="highlights-tab"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Highlights
            </TabsTrigger>
            <TabsTrigger 
              value="whats-new" 
              className="rounded-lg font-body data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
              data-testid="whats-new-tab"
            >
              <Bell className="h-4 w-4 mr-2" />
              What's New
            </TabsTrigger>
            <TabsTrigger 
              value="fees" 
              className="rounded-lg font-body data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
              data-testid="fees-tab"
            >
              <IndianRupee className="h-4 w-4 mr-2" />
              Fees
            </TabsTrigger>
            <TabsTrigger 
              value="faqs" 
              className="rounded-lg font-body data-[state=active]:bg-[#0066CC] data-[state=active]:text-white"
              data-testid="faqs-tab"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQs
            </TabsTrigger>
          </TabsList>

          {/* Highlights Tab */}
          <TabsContent value="highlights" className="animate-fade-in">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#FF6B35]" />
                  College Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                {college.highlights && college.highlights.length > 0 ? (
                  <ul className="space-y-4">
                    {college.highlights.map((highlight, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#0066CC] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-semibold">{index + 1}</span>
                        </div>
                        <p className="font-body text-[#0F172A] pt-1">{highlight}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#475569] font-body text-center py-8">
                    No highlights available for this college.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* What's New Tab */}
          <TabsContent value="whats-new" className="animate-fade-in">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                  <Bell className="h-5 w-5 text-[#0066CC]" />
                  What's New
                </CardTitle>
              </CardHeader>
              <CardContent>
                {college.whats_new && college.whats_new.length > 0 ? (
                  <ul className="space-y-4">
                    {college.whats_new.map((news, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-[#0066CC] animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Bell className="h-5 w-5 text-[#0066CC] flex-shrink-0 mt-0.5" />
                        <p className="font-body text-[#0F172A]">{news}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#475569] font-body text-center py-8">
                    No recent updates available.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fees Tab */}
          <TabsContent value="fees" className="animate-fade-in">
            <div className="space-y-6">
              {Object.keys(feesByCourse).length > 0 ? (
                Object.values(feesByCourse).map(({ course, fees: courseFees }) => (
                  <Card key={course.id} className="border-slate-200 overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-200">
                      <CardTitle className="text-lg font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-[#0066CC]" />
                        {course.name}
                        <Badge variant="outline" className="ml-2 font-body">
                          {course.level} • {course.duration}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-slate-50">
                            <TableHead className="font-heading font-semibold text-[#0F172A]">
                              Fee Type
                            </TableHead>
                            <TableHead className="font-heading font-semibold text-[#0F172A]">
                              Year/Semester
                            </TableHead>
                            <TableHead className="font-heading font-semibold text-[#0F172A]">
                              <div className="flex items-center gap-1">
                                <IndianRupee className="h-4 w-4" />
                                Tuition Fee
                              </div>
                            </TableHead>
                            <TableHead className="font-heading font-semibold text-[#0F172A]">
                              <div className="flex items-center gap-1">
                                <Home className="h-4 w-4" />
                                Hostel Fee
                              </div>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courseFees
                            .sort((a, b) => a.year_or_semester - b.year_or_semester)
                            .map((fee) => (
                            <TableRow key={fee.id} className="hover:bg-slate-50">
                              <TableCell className="font-body capitalize">
                                <Badge 
                                  variant="secondary" 
                                  className={fee.fee_type === 'annual' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                                >
                                  {fee.fee_type}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-body">
                                {fee.fee_type === 'annual' ? `Year ${fee.year_or_semester}` : `Semester ${fee.year_or_semester}`}
                              </TableCell>
                              <TableCell className="font-body font-semibold text-[#0F172A]">
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
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="p-12 text-center border-slate-200">
                  <IndianRupee className="h-16 w-16 mx-auto text-[#94A3B8] mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
                    No Fee Information Available
                  </h3>
                  <p className="text-[#475569] font-body">
                    Fee details for this college haven't been added yet.
                  </p>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="animate-fade-in">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-heading font-semibold text-[#0F172A] flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#0066CC]" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {faqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border-slate-200">
                        <AccordionTrigger className="font-body font-medium text-[#0F172A] hover:text-[#0066CC] text-left">
                          <div className="flex items-start gap-3">
                            <span className="text-[#0066CC] font-semibold">{index + 1}.</span>
                            <span>{faq.question}</span>
                          </div>
                          {faq.is_global && (
                            <Badge variant="outline" className="ml-2 text-xs">Global</Badge>
                          )}
                        </AccordionTrigger>
                        <AccordionContent className="font-body text-[#475569] pl-8">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <p className="text-[#475569] font-body text-center py-8">
                    No FAQs available for this college.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
