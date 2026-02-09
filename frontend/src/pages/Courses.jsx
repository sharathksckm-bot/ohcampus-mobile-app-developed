import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { coursesAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Search,
  BookOpen,
  Building2,
  MapPin,
  GraduationCap,
  Clock,
  Check,
  AlertTriangle,
  XCircle,
  Users,
  Briefcase,
  Target,
  FileText,
  ChevronRight,
  IndianRupee,
  X,
} from 'lucide-react';
import { toast } from 'sonner';

// Seat status configuration
const SEAT_STATUS_CONFIG = {
  'Available': { color: 'bg-green-100 text-green-700 border-green-200', icon: Check },
  'Closing': { color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: AlertTriangle },
  'Under Waiting': { color: 'bg-blue-100 text-blue-700 border-blue-200', icon: Clock },
  'Closed': { color: 'bg-red-100 text-red-700 border-red-200', icon: XCircle },
};

const getSeatStatusBadge = (status) => {
  const config = SEAT_STATUS_CONFIG[status] || SEAT_STATUS_CONFIG['Available'];
  const Icon = config.icon;
  return (
    <Badge className={`${config.color} border font-body`}>
      <Icon className="h-3 w-3 mr-1" />
      {status}
    </Badge>
  );
};

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedFeeRange, setSelectedFeeRange] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseDetail, setCourseDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Fee range options (First Year fees only)
  const feeRangeOptions = [
    { value: 'all', label: 'All Fee Ranges' },
    { value: 'below_100000', label: '1st Year < ₹1L' },
    { value: '100000_to_200000', label: '1st Year ₹1L-₹2L' },
    { value: 'above_200000', label: '1st Year > ₹2L' }
  ];

  // Calculate first year fees only (1st year annual OR 1st+2nd semester)
  const getFirstYearFees = (fees) => {
    if (!fees || fees.length === 0) return 0;
    
    // Get first year annual fees
    const firstYearAnnual = fees
      .filter(f => f.fee_type === 'annual' && f.year_or_semester === 1)
      .reduce((sum, f) => sum + (f.amount || 0), 0);
    
    // Get 1st and 2nd semester fees
    const firstTwoSemesters = fees
      .filter(f => f.fee_type === 'semester' && (f.year_or_semester === 1 || f.year_or_semester === 2))
      .reduce((sum, f) => sum + (f.amount || 0), 0);
    
    // Return whichever is available (prefer annual if both exist)
    return firstYearAnnual > 0 ? firstYearAnnual : firstTwoSemesters;
  };

  // Fetch courses and categories
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [coursesRes, categoriesRes] = await Promise.all([
        coursesAPI.getAllWithCollege({}),
        coursesAPI.getCategories(),
      ]);
      const coursesData = coursesRes.data;
      setCourses(coursesData);
      setCategories(categoriesRes.data.categories || []);
      
      // Extract unique levels
      const uniqueLevels = [...new Set(coursesData.map(c => c.level).filter(Boolean))];
      setLevels(uniqueLevels);
      
      // Extract unique states and cities from college info
      const uniqueStates = [...new Set(coursesData.map(c => c.college?.state).filter(Boolean))];
      const uniqueCities = [...new Set(coursesData.map(c => c.college?.city).filter(Boolean))];
      setStates(uniqueStates);
      setCities(uniqueCities);
    } catch (error) {
      toast.error('Failed to load courses');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filter courses
  const filteredCourses = useMemo(() => {
    let result = courses;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(query) ||
        (c.college?.name && c.college.name.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(c => c.category === selectedCategory);
    }
    
    if (selectedLevel !== 'all') {
      result = result.filter(c => c.level === selectedLevel);
    }
    
    if (selectedState !== 'all') {
      result = result.filter(c => c.college?.state === selectedState);
    }
    
    if (selectedCity !== 'all') {
      result = result.filter(c => c.college?.city === selectedCity);
    }

    // Fee range filter - considers only First Year fees
    if (selectedFeeRange !== 'all') {
      result = result.filter(c => {
        const firstYearFees = getFirstYearFees(c.fees);
        if (selectedFeeRange === 'below_100000') {
          return firstYearFees > 0 && firstYearFees < 100000;
        } else if (selectedFeeRange === '100000_to_200000') {
          return firstYearFees >= 100000 && firstYearFees <= 200000;
        } else if (selectedFeeRange === 'above_200000') {
          return firstYearFees > 200000;
        }
        return true;
      });
    }

    return result;
  }, [courses, searchQuery, selectedCategory, selectedLevel, selectedState, selectedCity, selectedFeeRange]);

  // Get filtered cities based on selected state
  const filteredCities = useMemo(() => {
    if (selectedState === 'all') return cities;
    return [...new Set(courses.filter(c => c.college?.state === selectedState).map(c => c.college?.city).filter(Boolean))];
  }, [courses, cities, selectedState]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedState('all');
    setSelectedCity('all');
    setSelectedFeeRange('all');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all' || selectedState !== 'all' || selectedCity !== 'all' || selectedFeeRange !== 'all';

  // Fetch course detail
  const handleViewCourse = async (course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
    setDetailLoading(true);
    
    try {
      const response = await coursesAPI.getById(course.id);
      setCourseDetail(response.data);
    } catch (error) {
      toast.error('Failed to load course details');
    } finally {
      setDetailLoading(false);
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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Explore Courses
          </h1>
          <p className="text-lg text-blue-100 font-body max-w-2xl">
            Browse all courses offered by featured colleges. Find detailed information about eligibility, scope, and career opportunities.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                <Input
                  placeholder="Search courses or colleges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 font-body border-slate-300"
                  data-testid="course-search"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-12" data-testid="category-filter">
                  <GraduationCap className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Level Filter */}
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full lg:w-36 h-12" data-testid="level-filter">
                  <BookOpen className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* State Filter */}
              <Select value={selectedState} onValueChange={(value) => {
                setSelectedState(value);
                setSelectedCity('all'); // Reset city when state changes
              }}>
                <SelectTrigger className="w-full lg:w-40 h-12" data-testid="state-filter">
                  <MapPin className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* City Filter */}
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full lg:w-40 h-12" data-testid="city-filter">
                  <Building2 className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {filteredCities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Fee Range Filter */}
              <Select value={selectedFeeRange} onValueChange={setSelectedFeeRange}>
                <SelectTrigger className="w-full lg:w-44 h-12" data-testid="fee-range-filter">
                  <IndianRupee className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Fee Range" />
                </SelectTrigger>
                <SelectContent>
                  {feeRangeOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Clear */}
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="h-12"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-[#0F172A]">
              Available Courses
            </h2>
            <p className="text-[#475569] font-body mt-1">
              {loading ? 'Loading...' : `${filteredCourses.length} courses found`}
            </p>
          </div>
        </div>

        {/* Course Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          <Card className="p-12 text-center">
            <BookOpen className="h-16 w-16 mx-auto text-[#94A3B8] mb-4" />
            <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
              No Courses Found
            </h3>
            <p className="text-[#475569] font-body">
              Try adjusting your search or filter criteria.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 30}ms` }}
                onClick={() => handleViewCourse(course)}
                data-testid={`course-card-${course.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="font-body">
                      {course.category || course.level}
                    </Badge>
                    {getSeatStatusBadge(course.seat_status || 'Available')}
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-[#0F172A] mb-2 line-clamp-2 group-hover:text-[#0066CC] transition-colors">
                    {course.name}
                  </h3>

                  {course.college && (
                    <div className="flex items-center gap-2 text-sm text-[#475569] font-body mb-2">
                      <Building2 className="h-4 w-4 flex-shrink-0" />
                      <span className="line-clamp-1">{course.college.name}</span>
                    </div>
                  )}

                  {course.college && (
                    <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-body mb-3">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{course.college.city}, {course.college.state}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-sm text-[#475569] font-body">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>

                  <div className="mt-4 flex items-center text-[#0066CC] font-body text-sm font-semibold group-hover:gap-2 transition-all">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Course Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-[#0066CC]" />
              {selectedCourse?.name}
            </DialogTitle>
            <DialogDescription className="font-body">
              {selectedCourse?.college?.name} • {selectedCourse?.college?.city}
            </DialogDescription>
          </DialogHeader>

          {detailLoading ? (
            <div className="space-y-4 py-4">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ) : courseDetail ? (
            <div className="space-y-6 py-4">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="font-body text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  {courseDetail.course.duration}
                </Badge>
                <Badge variant="secondary" className="font-body text-sm">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  {courseDetail.course.level}
                </Badge>
                {courseDetail.course.category && (
                  <Badge variant="outline" className="font-body text-sm">
                    {courseDetail.course.category}
                  </Badge>
                )}
                {getSeatStatusBadge(courseDetail.course.seat_status || 'Available')}
              </div>

              {/* Description */}
              {courseDetail.course.description && (
                <div>
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#0066CC]" />
                    Description
                  </h4>
                  <p className="text-[#475569] font-body text-sm leading-relaxed">
                    {courseDetail.course.description}
                  </p>
                </div>
              )}

              {/* Eligibility */}
              {courseDetail.course.eligibility && (
                <div>
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#0066CC]" />
                    Course Eligibility
                  </h4>
                  <p className="text-[#475569] font-body text-sm leading-relaxed bg-slate-50 p-3 rounded-lg">
                    {courseDetail.course.eligibility}
                  </p>
                </div>
              )}

              {/* Scope */}
              {courseDetail.course.scope && (
                <div>
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-[#0066CC]" />
                    Scope & Career Opportunities
                  </h4>
                  <p className="text-[#475569] font-body text-sm leading-relaxed">
                    {courseDetail.course.scope}
                  </p>
                </div>
              )}

              {/* Job Profiles */}
              {courseDetail.course.job_profiles && courseDetail.course.job_profiles.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#0066CC]" />
                    Job Profiles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {courseDetail.course.job_profiles.map((job, i) => (
                      <Badge key={i} variant="secondary" className="font-body">
                        {job}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Fee Structure */}
              {courseDetail.fees && courseDetail.fees.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-[#0066CC]" />
                    Fee Structure
                  </h4>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-slate-50">
                          <TableHead className="font-heading">Period</TableHead>
                          <TableHead className="font-heading">Tuition Fee</TableHead>
                          <TableHead className="font-heading">Hostel Fee</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {courseDetail.fees.map((fee, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-body">
                              {fee.fee_type === 'annual' ? `Year ${fee.year_or_semester}` : `Semester ${fee.year_or_semester}`}
                            </TableCell>
                            <TableCell className="font-body font-semibold">
                              {formatCurrency(fee.amount)}
                            </TableCell>
                            <TableCell className="font-body text-[#475569]">
                              {formatCurrency(fee.hostel_fee)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="p-3 bg-[#0066CC] text-white flex justify-between items-center">
                      <span className="font-body">Total Tuition Fees</span>
                      <span className="font-heading font-bold text-lg">
                        {formatCurrency(getTotalFees(courseDetail.fees))}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Admission Charges */}
              {courseDetail.admission_charges && (
                <div>
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2">
                    One-time Admission Charges
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {courseDetail.admission_charges.registration_fee > 0 && (
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-xs text-[#94A3B8] font-body">Registration</p>
                        <p className="font-semibold font-body">{formatCurrency(courseDetail.admission_charges.registration_fee)}</p>
                      </div>
                    )}
                    {courseDetail.admission_charges.admission_fee > 0 && (
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-xs text-[#94A3B8] font-body">Admission</p>
                        <p className="font-semibold font-body">{formatCurrency(courseDetail.admission_charges.admission_fee)}</p>
                      </div>
                    )}
                    {courseDetail.admission_charges.caution_deposit > 0 && (
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-xs text-[#94A3B8] font-body">Caution Deposit</p>
                        <p className="font-semibold font-body">{formatCurrency(courseDetail.admission_charges.caution_deposit)}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* College Info */}
              {courseDetail.college && (
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-heading font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#0066CC]" />
                    About the College
                  </h4>
                  <p className="text-sm font-body text-[#475569] mb-2">{courseDetail.college.name}</p>
                  <p className="text-xs font-body text-[#94A3B8]">{courseDetail.college.address}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <Badge variant="secondary">{courseDetail.college.category}</Badge>
                    {courseDetail.college.accreditation && (
                      <Badge variant="outline">{courseDetail.college.accreditation}</Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
