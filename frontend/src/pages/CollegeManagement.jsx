import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AdminLayout } from '../components/layout/AdminLayout';
import { collegesAPI, coursesAPI, filtersAPI } from '../lib/api';
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Search,
  Building2,
  MapPin,
  GraduationCap,
  BookOpen,
  Users,
  Star,
  Check,
  AlertCircle,
  Clock,
  XCircle,
  Loader2,
  Filter,
  X,
  ChevronRight,
} from 'lucide-react';
import { toast } from 'sonner';

// Seat status configuration
const SEAT_STATUSES = [
  { value: 'Available', label: 'Available', color: 'bg-green-100 text-green-700 border-green-200', icon: Check },
  { value: 'Closing', label: 'Closing', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: AlertCircle },
  { value: 'Under Waiting', label: 'Under Waiting', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: Clock },
  { value: 'Closed', label: 'Closed', color: 'bg-red-100 text-red-700 border-red-200', icon: XCircle },
];

const getSeatStatusConfig = (status) => {
  return SEAT_STATUSES.find(s => s.value === status) || SEAT_STATUSES[0];
};

export default function CollegeManagement() {
  const [colleges, setColleges] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({ states: [], cities: [], categories: [], courses: [] });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [courseDialogOpen, setCourseDialogOpen] = useState(false);
  const [updatingCourse, setUpdatingCourse] = useState(null);

  // Fetch all data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [collegesRes, coursesRes, filtersRes] = await Promise.all([
        collegesAPI.getAll({}),
        coursesAPI.getAll(),
        filtersAPI.getAll(),
      ]);
      setColleges(collegesRes.data);
      setCourses(coursesRes.data);
      setFilters(filtersRes.data);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filter colleges
  const filteredColleges = useMemo(() => {
    let result = colleges;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.city.toLowerCase().includes(query) ||
        c.state.toLowerCase().includes(query)
      );
    }

    // State filter
    if (selectedState !== 'all') {
      result = result.filter(c => c.state === selectedState);
    }

    // City filter
    if (selectedCity !== 'all') {
      result = result.filter(c => c.city === selectedCity);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(c => c.category === selectedCategory);
    }

    // Course filter
    if (selectedCourse !== 'all') {
      const collegeIdsWithCourse = courses
        .filter(course => course.name.toLowerCase().includes(selectedCourse.toLowerCase()))
        .map(course => course.college_id);
      result = result.filter(c => collegeIdsWithCourse.includes(c.id));
    }

    return result;
  }, [colleges, courses, searchQuery, selectedState, selectedCity, selectedCategory, selectedCourse]);

  // Group colleges by different criteria
  const collegesByState = useMemo(() => {
    const grouped = {};
    colleges.forEach(c => {
      if (!grouped[c.state]) grouped[c.state] = [];
      grouped[c.state].push(c);
    });
    return grouped;
  }, [colleges]);

  const collegesByCategory = useMemo(() => {
    const grouped = {};
    colleges.forEach(c => {
      if (!grouped[c.category]) grouped[c.category] = [];
      grouped[c.category].push(c);
    });
    return grouped;
  }, [colleges]);

  const collegesByCourse = useMemo(() => {
    const grouped = {};
    courses.forEach(course => {
      const college = colleges.find(c => c.id === course.college_id);
      if (college) {
        const courseName = course.name.split(' - ')[0]; // Get the course type (MBA, B.Tech, etc.)
        if (!grouped[courseName]) grouped[courseName] = new Set();
        grouped[courseName].add(college);
      }
    });
    // Convert sets to arrays
    Object.keys(grouped).forEach(key => {
      grouped[key] = Array.from(grouped[key]);
    });
    return grouped;
  }, [colleges, courses]);

  // Get courses for a college
  const getCollegeCourses = (collegeId) => {
    return courses.filter(c => c.college_id === collegeId);
  };

  // Update seat status
  const handleUpdateSeatStatus = async (courseId, newStatus) => {
    setUpdatingCourse(courseId);
    try {
      await coursesAPI.updateSeatStatus(courseId, newStatus);
      setCourses(prev => prev.map(c =>
        c.id === courseId ? { ...c, seat_status: newStatus } : c
      ));
      toast.success(`Seat status updated to "${newStatus}"`);
    } catch (error) {
      toast.error('Failed to update seat status');
    } finally {
      setUpdatingCourse(null);
    }
  };

  // Open course management dialog
  const handleManageCourses = (college) => {
    setSelectedCollege(college);
    setCourseDialogOpen(true);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedState('all');
    setSelectedCity('all');
    setSelectedCategory('all');
    setSelectedCourse('all');
  };

  const hasActiveFilters = searchQuery || selectedState !== 'all' || selectedCity !== 'all' || selectedCategory !== 'all' || selectedCourse !== 'all';

  // Render college card
  const renderCollegeCard = (college, showCategory = true) => {
    const collegeCourses = getCollegeCourses(college.id);
    const availableCourses = collegeCourses.filter(c => c.seat_status === 'Available').length;
    const closingCourses = collegeCourses.filter(c => c.seat_status === 'Closing').length;

    return (
      <Card key={college.id} className="hover:shadow-md transition-shadow" data-testid={`college-card-${college.id}`}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-heading font-semibold text-[#0F172A]">{college.name}</h3>
                <Badge className="bg-[#FF6B35] text-white text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#475569] font-body">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {college.city}, {college.state}
                </span>
                {showCategory && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" />
                    {college.category}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {collegeCourses.length} courses
                </span>
              </div>
              {/* Quick seat status summary */}
              <div className="flex items-center gap-2 mt-2">
                {availableCourses > 0 && (
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {availableCourses} Available
                  </Badge>
                )}
                {closingCourses > 0 && (
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                    {closingCourses} Closing
                  </Badge>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleManageCourses(college)}
              className="font-body"
              data-testid={`manage-courses-${college.id}`}
            >
              Manage Courses
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0F172A]">
            College Management
          </h1>
          <p className="text-[#475569] font-body mt-1">
            Manage featured colleges and course seat availability
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">{colleges.length}</p>
                  <p className="text-xs text-[#475569] font-body">Total Colleges</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">{courses.length}</p>
                  <p className="text-xs text-[#475569] font-body">Total Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {courses.filter(c => c.seat_status === 'Closing').length}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Closing Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-[#0F172A]">
                    {courses.filter(c => c.seat_status === 'Closed').length}
                  </p>
                  <p className="text-xs text-[#475569] font-body">Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
                <Input
                  placeholder="Search colleges by name, city, or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 font-body"
                  data-testid="college-search"
                />
              </div>

              {/* State Filter */}
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-full lg:w-40 h-10" data-testid="state-filter">
                  <MapPin className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {filters.states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* City Filter */}
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full lg:w-40 h-10" data-testid="city-filter">
                  <Building2 className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {filters.cities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-44 h-10" data-testid="category-filter">
                  <GraduationCap className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {filters.categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Course Filter */}
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-full lg:w-44 h-10" data-testid="course-filter">
                  <BookOpen className="h-4 w-4 mr-2 text-[#94A3B8]" />
                  <SelectValue placeholder="Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  {filters.courses.slice(0, 20).map(course => (
                    <SelectItem key={course} value={course}>
                      {course.length > 30 ? course.substring(0, 30) + '...' : course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} className="h-10">
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different views */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all" className="font-body">
              All Colleges ({filteredColleges.length})
            </TabsTrigger>
            <TabsTrigger value="by-location" className="font-body">
              <MapPin className="h-4 w-4 mr-1" />
              By Location
            </TabsTrigger>
            <TabsTrigger value="by-category" className="font-body">
              <GraduationCap className="h-4 w-4 mr-1" />
              By Category
            </TabsTrigger>
            <TabsTrigger value="by-course" className="font-body">
              <BookOpen className="h-4 w-4 mr-1" />
              By Course
            </TabsTrigger>
          </TabsList>

          {/* All Colleges View */}
          <TabsContent value="all">
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            ) : filteredColleges.length === 0 ? (
              <Card className="p-12 text-center">
                <Building2 className="h-12 w-12 mx-auto text-[#94A3B8] mb-4" />
                <h3 className="text-lg font-heading font-semibold text-[#0F172A]">No colleges found</h3>
                <p className="text-[#475569] font-body mt-1">Try adjusting your filters</p>
              </Card>
            ) : (
              <div className="space-y-3">
                {filteredColleges.map(college => renderCollegeCard(college))}
              </div>
            )}
          </TabsContent>

          {/* By Location View */}
          <TabsContent value="by-location">
            <Accordion type="multiple" className="space-y-2">
              {Object.entries(collegesByState).map(([state, stateColleges]) => (
                <AccordionItem key={state} value={state} className="border rounded-lg px-4">
                  <AccordionTrigger className="font-heading font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#0066CC]" />
                      {state}
                      <Badge variant="secondary" className="ml-2">{stateColleges.length} colleges</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {stateColleges.map(college => renderCollegeCard(college))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* By Category View */}
          <TabsContent value="by-category">
            <Accordion type="multiple" className="space-y-2">
              {Object.entries(collegesByCategory).map(([category, catColleges]) => (
                <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                  <AccordionTrigger className="font-heading font-semibold">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#0066CC]" />
                      {category}
                      <Badge variant="secondary" className="ml-2">{catColleges.length} colleges</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {catColleges.map(college => renderCollegeCard(college, false))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* By Course View */}
          <TabsContent value="by-course">
            <Accordion type="multiple" className="space-y-2">
              {Object.entries(collegesByCourse).map(([courseType, courseColleges]) => (
                <AccordionItem key={courseType} value={courseType} className="border rounded-lg px-4">
                  <AccordionTrigger className="font-heading font-semibold">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-[#0066CC]" />
                      {courseType}
                      <Badge variant="secondary" className="ml-2">{courseColleges.length} colleges</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {courseColleges.map(college => renderCollegeCard(college))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Course Management Dialog */}
        <Dialog open={courseDialogOpen} onOpenChange={setCourseDialogOpen}>
          <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#0066CC]" />
                {selectedCollege?.name}
              </DialogTitle>
              <DialogDescription className="font-body">
                Manage seat availability status for each course
              </DialogDescription>
            </DialogHeader>

            {selectedCollege && (
              <div className="space-y-4">
                {/* College Info */}
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-4 text-sm text-[#475569] font-body">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {selectedCollege.city}, {selectedCollege.state}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      {selectedCollege.category}
                    </span>
                  </div>
                </div>

                {/* Courses Table */}
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-slate-50">
                        <TableHead className="font-heading font-semibold">Course Name</TableHead>
                        <TableHead className="font-heading font-semibold">Duration</TableHead>
                        <TableHead className="font-heading font-semibold">Level</TableHead>
                        <TableHead className="font-heading font-semibold">Seat Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getCollegeCourses(selectedCollege.id).map(course => {
                        const statusConfig = getSeatStatusConfig(course.seat_status);
                        const StatusIcon = statusConfig.icon;

                        return (
                          <TableRow key={course.id}>
                            <TableCell className="font-body font-medium">{course.name}</TableCell>
                            <TableCell className="font-body">{course.duration}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{course.level}</Badge>
                            </TableCell>
                            <TableCell>
                              <Select
                                value={course.seat_status || 'Available'}
                                onValueChange={(value) => handleUpdateSeatStatus(course.id, value)}
                                disabled={updatingCourse === course.id}
                              >
                                <SelectTrigger 
                                  className={`w-40 h-9 ${statusConfig.color}`}
                                  data-testid={`seat-status-${course.id}`}
                                >
                                  {updatingCourse === course.id ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    <>
                                      <StatusIcon className="h-4 w-4 mr-2" />
                                      <SelectValue />
                                    </>
                                  )}
                                </SelectTrigger>
                                <SelectContent>
                                  {SEAT_STATUSES.map(status => {
                                    const Icon = status.icon;
                                    return (
                                      <SelectItem key={status.value} value={status.value}>
                                        <div className="flex items-center gap-2">
                                          <Icon className="h-4 w-4" />
                                          {status.label}
                                        </div>
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>

                {/* Status Legend */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <p className="text-sm text-[#475569] font-body w-full">Status Legend:</p>
                  {SEAT_STATUSES.map(status => {
                    const Icon = status.icon;
                    return (
                      <Badge key={status.value} className={`${status.color} border`}>
                        <Icon className="h-3 w-3 mr-1" />
                        {status.label}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" onClick={() => setCourseDialogOpen(false)} className="font-body">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
