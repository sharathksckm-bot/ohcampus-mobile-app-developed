import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { filtersAPI, collegesAPI, seedAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import { Checkbox } from '../components/ui/checkbox';
import { 
  Search, 
  MapPin, 
  Building2, 
  GraduationCap, 
  Star,
  ArrowRight,
  Filter,
  RefreshCw,
  Sparkles,
  GitCompare,
  BookOpen,
  X
} from 'lucide-react';
import { toast } from 'sonner';

export default function Dashboard() {
  const [filters, setFilters] = useState({ states: [], cities: [], categories: [], courses: [] });
  const [selectedFilters, setSelectedFilters] = useState({ state: '', city: '', category: '', course: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const navigate = useNavigate();

  // Fetch filters
  const fetchFilters = useCallback(async () => {
    try {
      setFiltersLoading(true);
      const response = await filtersAPI.getAll();
      setFilters(response.data);
    } catch (error) {
      console.error('Failed to fetch filters:', error);
    } finally {
      setFiltersLoading(false);
    }
  }, []);

  // Fetch colleges
  const fetchColleges = useCallback(async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedFilters.state) params.state = selectedFilters.state;
      if (selectedFilters.city) params.city = selectedFilters.city;
      if (selectedFilters.category) params.category = selectedFilters.category;
      if (selectedFilters.course) params.course = selectedFilters.course;
      if (searchQuery) params.search = searchQuery;
      
      const response = await collegesAPI.getAll(params);
      setColleges(response.data);
    } catch (error) {
      console.error('Failed to fetch colleges:', error);
      toast.error('Failed to load colleges');
    } finally {
      setLoading(false);
    }
  }, [selectedFilters, searchQuery]);

  // Seed database
  const handleSeed = async () => {
    try {
      setSeeding(true);
      const response = await seedAPI.seed();
      toast.success(response.data.message);
      fetchFilters();
      fetchColleges();
    } catch (error) {
      toast.error('Failed to seed database');
    } finally {
      setSeeding(false);
    }
  };

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  useEffect(() => {
    fetchColleges();
  }, [fetchColleges]);

  // Update cities when state changes
  const handleStateChange = async (state) => {
    setSelectedFilters(prev => ({ ...prev, state, city: '' }));
    if (state) {
      try {
        const response = await filtersAPI.getCitiesByState(state);
        setFilters(prev => ({ ...prev, cities: response.data.cities }));
      } catch (error) {
        console.error('Failed to fetch cities:', error);
      }
    } else {
      const response = await filtersAPI.getAll();
      setFilters(prev => ({ ...prev, cities: response.data.cities }));
    }
  };

  const clearFilters = () => {
    setSelectedFilters({ state: '', city: '', category: '', course: '' });
    setSearchQuery('');
  };

  const toggleCompareSelection = (college) => {
    if (selectedForCompare.find(c => c.id === college.id)) {
      setSelectedForCompare(prev => prev.filter(c => c.id !== college.id));
    } else {
      if (selectedForCompare.length >= 4) {
        toast.error('You can compare maximum 4 colleges');
        return;
      }
      setSelectedForCompare(prev => [...prev, college]);
    }
  };

  const handleCompare = () => {
    if (selectedForCompare.length < 2) {
      toast.error('Select at least 2 colleges to compare');
      return;
    }
    const ids = selectedForCompare.map(c => c.id).join(',');
    navigate(`/compare?colleges=${ids}`);
  };

  const collegeImages = [
    'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    'https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    'https://images.unsplash.com/photo-1670284768187-5cc68eada1b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    'https://images.unsplash.com/photo-1759299615947-bc798076b479?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Find Featured Colleges
          </h1>
          <p className="text-lg text-blue-100 font-body max-w-2xl">
            Explore top-rated colleges across India. Filter by state, city, category, or course to find the perfect institution.
          </p>
        </div>
      </div>

      {/* Compare Mode Banner */}
      {compareMode && (
        <div className="bg-[#FF6B35] text-white py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <GitCompare className="h-5 w-5" />
              <span className="font-body font-medium">
                Comparison Mode: {selectedForCompare.length}/4 colleges selected
              </span>
              {selectedForCompare.length > 0 && (
                <div className="flex items-center gap-2">
                  {selectedForCompare.map(c => (
                    <Badge key={c.id} variant="secondary" className="bg-white/20 text-white">
                      {c.name.split(' ')[0]}
                      <button 
                        onClick={() => toggleCompareSelection(c)}
                        className="ml-1 hover:text-red-200"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleCompare}
                disabled={selectedForCompare.length < 2}
                className="bg-white text-[#FF6B35] hover:bg-blue-50 font-body rounded-full"
                data-testid="compare-btn"
              >
                Compare Now
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setCompareMode(false);
                  setSelectedForCompare([]);
                }}
                className="text-white hover:bg-white/20 font-body"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              {/* First Row - Search and Compare Toggle */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                  <Input
                    placeholder="Search colleges..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 font-body border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]"
                    data-testid="search-input"
                  />
                </div>
                {!compareMode && (
                  <Button
                    onClick={() => setCompareMode(true)}
                    variant="outline"
                    className="h-12 px-6 font-body border-[#0066CC] text-[#0066CC] hover:bg-blue-50"
                    data-testid="enable-compare-btn"
                  >
                    <GitCompare className="h-4 w-4 mr-2" />
                    Compare Colleges
                  </Button>
                )}
              </div>

              {/* Second Row - Filters */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* State Filter */}
                <Select 
                  value={selectedFilters.state} 
                  onValueChange={handleStateChange}
                >
                  <SelectTrigger 
                    className="w-full lg:w-44 h-12 font-body border-slate-300"
                    data-testid="state-filter"
                  >
                    <MapPin className="h-4 w-4 mr-2 text-[#94A3B8]" />
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {filters.states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* City Filter */}
                <Select 
                  value={selectedFilters.city} 
                  onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, city: value === 'all' ? '' : value }))}
                >
                  <SelectTrigger 
                    className="w-full lg:w-44 h-12 font-body border-slate-300"
                    data-testid="city-filter"
                  >
                    <Building2 className="h-4 w-4 mr-2 text-[#94A3B8]" />
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    {filters.cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Category Filter */}
                <Select 
                  value={selectedFilters.category} 
                  onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, category: value === 'all' ? '' : value }))}
                >
                  <SelectTrigger 
                    className="w-full lg:w-44 h-12 font-body border-slate-300"
                    data-testid="category-filter"
                  >
                    <GraduationCap className="h-4 w-4 mr-2 text-[#94A3B8]" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {filters.categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Course Filter */}
                <Select 
                  value={selectedFilters.course} 
                  onValueChange={(value) => setSelectedFilters(prev => ({ ...prev, course: value === 'all' ? '' : value }))}
                >
                  <SelectTrigger 
                    className="w-full lg:w-52 h-12 font-body border-slate-300"
                    data-testid="course-filter"
                  >
                    <BookOpen className="h-4 w-4 mr-2 text-[#94A3B8]" />
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {filters.courses.map((course) => (
                      <SelectItem key={course} value={course}>{course}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="h-12 px-4 font-body border-slate-300 hover:bg-slate-50"
                  data-testid="clear-filters-btn"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-[#0F172A]">
              Featured Colleges
            </h2>
            <p className="text-[#475569] font-body mt-1">
              {loading ? 'Loading...' : `${colleges.length} colleges found`}
            </p>
          </div>
          {colleges.length === 0 && !loading && (
            <Button
              onClick={handleSeed}
              disabled={seeding}
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-body rounded-full"
              data-testid="seed-database-btn"
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

        {/* College Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : colleges.length === 0 ? (
          <Card className="p-12 text-center">
            <GraduationCap className="h-16 w-16 mx-auto text-[#94A3B8] mb-4" />
            <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
              No Colleges Found
            </h3>
            <p className="text-[#475569] font-body mb-6">
              Try adjusting your filters or load sample data to get started.
            </p>
            <Button
              onClick={handleSeed}
              disabled={seeding}
              className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full"
            >
              {seeding ? 'Loading...' : 'Load Sample Data'}
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges.map((college, index) => (
              <Card 
                key={college.id} 
                className={`overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 animate-fade-in ${
                  selectedForCompare.find(c => c.id === college.id) ? 'ring-2 ring-[#FF6B35]' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => compareMode ? toggleCompareSelection(college) : navigate(`/college/${college.id}`)}
                data-testid={`college-card-${college.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={college.image_url || collegeImages[index % collegeImages.length]} 
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge className="bg-[#FF6B35] hover:bg-[#FF6B35] text-white font-body">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>
                  {compareMode && (
                    <div className="absolute top-4 right-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedForCompare.find(c => c.id === college.id) 
                          ? 'bg-[#FF6B35] border-[#FF6B35]' 
                          : 'bg-white/80 border-slate-400'
                      }`}>
                        {selectedForCompare.find(c => c.id === college.id) && (
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-[#0F172A] mb-2 line-clamp-2 group-hover:text-[#0066CC] transition-colors">
                    {college.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#475569] font-body text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{college.city}, {college.state}</span>
                  </div>
                  {college.address && (
                    <p className="text-xs text-[#94A3B8] font-body mb-3 line-clamp-1">
                      {college.address}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="font-body">
                      {college.category}
                    </Badge>
                    <span className="text-xs text-[#94A3B8] font-body">
                      Est. {college.established}
                    </span>
                  </div>
                  {college.accreditation && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <span className="text-xs text-[#0066CC] font-body font-medium">
                        {college.accreditation}
                      </span>
                    </div>
                  )}
                  {!compareMode && (
                    <div className="mt-4 flex items-center text-[#0066CC] font-body text-sm font-semibold group-hover:gap-2 transition-all">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
