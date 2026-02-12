import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  GraduationCap, 
  ArrowRight, 
  Building2, 
  Users, 
  IndianRupee,
  BookOpen,
  TrendingUp,
  Shield,
  CheckCircle2,
  BarChart3,
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function LandingPage() {
  const stats = [
    { value: '500+', label: 'Partner Colleges', icon: Building2 },
    { value: '10K+', label: 'Students Placed', icon: GraduationCap },
    { value: '200+', label: 'Counselors', icon: Users },
    { value: '98%', label: 'Satisfaction', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Building2,
      title: 'Featured Colleges',
      description: 'Access curated list of top colleges with detailed profiles, rankings, and NAAC accreditation information.',
    },
    {
      icon: IndianRupee,
      title: 'Fee Structures',
      description: 'Complete fee breakdown including tuition, hostel, and admission charges by course and year.',
    },
    {
      icon: BookOpen,
      title: 'Course Comparison',
      description: 'Compare multiple courses side-by-side with eligibility, scope, and career prospects.',
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Monitor admissions targets, track revenue, and analyze scholarship distributions.',
    },
    {
      icon: FileText,
      title: 'Admission Management',
      description: 'Manage student admissions with installment tracking and scholarship records.',
    },
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Role-based access control ensures data security for counselors and administrators.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://ohcampus.com/assets/images/logo/logo.png" 
                alt="OhCampus" 
                className="h-10"
              />
              <div className="hidden sm:block border-l border-slate-300 pl-3">
                <span className="text-[#0066CC] font-semibold text-sm">Counselor Platform</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <a href="tel:08884560456" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-[#0066CC] text-sm">
                <Phone className="h-4 w-4" />
                <span>08884560456</span>
              </a>
              <Link to="/login">
                <Button 
                  className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-body px-6"
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
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC] via-[#0077DD] to-[#0052A3]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-body">Powered by OhCampus.com</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Counselor
                <span className="block text-[#FFD700]">Platform</span>
              </h1>
              
              <p className="text-lg text-white/90 font-body max-w-xl leading-relaxed">
                Your comprehensive tool for guiding students to the right colleges. 
                Access featured colleges, fee structures, course details, and manage admissions - all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/login">
                  <Button 
                    size="lg"
                    className="bg-white text-[#0066CC] hover:bg-slate-100 font-body px-8 py-6 text-lg shadow-xl w-full sm:w-auto"
                    data-testid="hero-login-btn"
                  >
                    Access Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-14 h-14 bg-[#0066CC] rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-800">Counselor Dashboard</h3>
                    <p className="text-slate-500 font-body text-sm">Everything you need in one place</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { text: 'Browse Featured Colleges', icon: Building2 },
                    { text: 'Compare Course Fees', icon: IndianRupee },
                    { text: 'Track Admissions', icon: Users },
                    { text: 'View Performance Reports', icon: BarChart3 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="w-10 h-10 bg-[#0066CC]/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-[#0066CC]" />
                      </div>
                      <span className="text-slate-700 font-body font-medium">{item.text}</span>
                      <CheckCircle2 className="h-5 w-5 text-green-500 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#0066CC]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-[#0066CC]" />
                </div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-[#0066CC]">{stat.value}</p>
                <p className="text-sm text-slate-600 font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Everything You Need to <span className="text-[#0066CC]">Succeed</span>
            </h2>
            <p className="text-lg text-slate-600 font-body max-w-2xl mx-auto">
              Powerful tools designed specifically for OhCampus education counselors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-[#0066CC]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#0066CC] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                Ready to Guide Students to Success?
              </h2>
              <p className="text-white/80 font-body">
                Sign in to access your counselor dashboard and start helping students today.
              </p>
            </div>
            <Link to="/login">
              <Button 
                size="lg"
                className="bg-white text-[#0066CC] hover:bg-slate-100 font-body px-8 py-6 text-lg shadow-xl whitespace-nowrap"
              >
                Sign In Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://ohcampus.com/assets/images/logo/logo.png" 
                alt="OhCampus" 
                className="h-10 mb-4"
              />
              <p className="text-slate-400 font-body text-sm">
                Counselor Platform - Your comprehensive tool for college counseling excellence.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400 font-body">
                <li><a href="https://ohcampus.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OhCampus.com</a></li>
                <li><a href="https://ohcampus.com/whoweare" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="https://ohcampus.com/contactus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3 text-sm text-slate-400 font-body">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#0066CC]" />
                  <a href="tel:08884560456" className="hover:text-white transition-colors">08884560456</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#0066CC]" />
                  <a href="mailto:enquiry@ohcampus.com" className="hover:text-white transition-colors">enquiry@ohcampus.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#0066CC] mt-0.5" />
                  <span>Chikkamagaluru, Karnataka</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 font-body">
              © {new Date().getFullYear()} OhCampus.com | All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/OhCampus/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/OhCampus/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/ohcampus-com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/user/ohcampus" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
