import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  GraduationCap, 
  ArrowRight, 
  Building2, 
  Users, 
  IndianRupee,
  Star
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://ohcampus.com/assets/images/logo/logo.png" 
                alt="OhCampus" 
                className="h-10"
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button 
                  className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full px-6"
                  data-testid="landing-login-btn"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                OhCampus<br />
                <span className="text-[#FF6B35]">Counselor Platform</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 font-body mb-8 max-w-2xl">
                Your comprehensive tool for guiding students to the right colleges. 
                Access featured colleges, fee structures, and FAQs all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button 
                    size="lg"
                    className="bg-white text-[#0066CC] hover:bg-blue-50 font-body rounded-full px-8 py-6 text-lg"
                    data-testid="hero-login-btn"
                  >
                    Sign In as Counselor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full translate-y-1/2" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-[#475569] font-body max-w-2xl mx-auto">
              Powerful tools designed specifically for education counselors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="h-7 w-7 text-[#0066CC]" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
                Featured Colleges
              </h3>
              <p className="text-[#475569] font-body">
                Access only the best featured colleges with detailed information and highlights.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <IndianRupee className="h-7 w-7 text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
                Fee Structures
              </h3>
              <p className="text-[#475569] font-body">
                Complete fee details including annual, semester, and hostel fees by course.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
                College Highlights
              </h3>
              <p className="text-[#475569] font-body">
                Key highlights and latest updates from each featured college.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-[#0F172A] mb-2">
                Smart Filters
              </h3>
              <p className="text-[#475569] font-body">
                Filter colleges by state, city, and category for quick access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto text-[#0066CC] mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#475569] font-body max-w-xl mx-auto mb-8">
            Join thousands of counselors using OhCampus to guide students to their dream colleges.
          </p>
          <Link to="/register">
            <Button 
              size="lg"
              className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body rounded-full px-10 py-6 text-lg"
              data-testid="cta-register-btn"
            >
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://ohcampus.com/assets/images/logo/logo.png" 
                alt="OhCampus" 
                className="h-10 brightness-0 invert"
              />
              <span className="text-sm text-slate-400 font-body">
                Counselor Platform
              </span>
            </div>
            <p className="text-sm text-slate-400 font-body">
              © {new Date().getFullYear()} OhCampus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
