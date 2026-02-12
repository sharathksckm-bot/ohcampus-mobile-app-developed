import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  GraduationCap, 
  ArrowRight, 
  Building2, 
  Users, 
  IndianRupee,
  Star,
  BookOpen,
  TrendingUp,
  Shield,
  CheckCircle2,
  BarChart3,
  FileText
} from 'lucide-react';

export default function LandingPage() {
  const stats = [
    { value: '500+', label: 'Partner Colleges' },
    { value: '10K+', label: 'Students Placed' },
    { value: '200+', label: 'Counselors' },
    { value: '98%', label: 'Satisfaction Rate' },
  ];

  const features = [
    {
      icon: Building2,
      title: 'Featured Colleges',
      description: 'Access curated list of top colleges with detailed profiles, rankings, and accreditation info.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
    },
    {
      icon: IndianRupee,
      title: 'Fee Structures',
      description: 'Complete fee breakdown including tuition, hostel, and admission charges by course.',
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
    },
    {
      icon: BookOpen,
      title: 'Course Comparison',
      description: 'Compare multiple courses side-by-side with eligibility, scope, and career prospects.',
      color: 'bg-violet-500',
      lightColor: 'bg-violet-50',
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Monitor admissions targets, track revenue, and analyze scholarship distributions.',
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
    },
    {
      icon: FileText,
      title: 'Admission Management',
      description: 'Manage student admissions with installment tracking and scholarship records.',
      color: 'bg-rose-500',
      lightColor: 'bg-rose-50',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Role-based access control ensures data security for counselors and administrators.',
      color: 'bg-cyan-500',
      lightColor: 'bg-cyan-50',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://ohcampus.com/assets/images/logo/logo.png" 
                alt="OhCampus" 
                className="h-10"
              />
              <span className="text-white/60 text-sm font-body hidden sm:block">Counselor Platform</span>
            </Link>
            <Link to="/login">
              <Button 
                className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white font-body rounded-full px-6 shadow-lg shadow-orange-500/20"
                data-testid="landing-login-btn"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066CC]/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF6B35]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjkzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/70 font-body">Trusted by 200+ counselors</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Empower Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] via-[#3b82f6] to-[#FF6B35]">
                  College Counseling
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 font-body max-w-xl leading-relaxed">
                The complete platform for education counselors. Access featured colleges, 
                manage admissions, track performance, and guide students to their dream institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#0066CC] to-[#3b82f6] hover:opacity-90 text-white font-body rounded-full px-8 py-6 text-lg shadow-xl shadow-blue-500/25 w-full sm:w-auto"
                    data-testid="hero-login-btn"
                  >
                    Access Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-heading font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-500 font-body">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-heading font-semibold">Admissions Up</p>
                      <p className="text-emerald-400 text-sm font-body">+24% this month</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-heading font-semibold">Active Students</p>
                      <p className="text-orange-400 text-sm font-body">1,234 enrolled</p>
                    </div>
                  </div>
                </div>

                {/* Main Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#3b82f6] rounded-2xl flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">Counselor Dashboard</h3>
                      <p className="text-slate-400 font-body">All-in-one platform</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {['Browse Featured Colleges', 'Compare Course Fees', 'Track Admissions', 'View Performance'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        <span className="text-white font-body">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Everything You Need to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#FF6B35]"> Succeed</span>
            </h2>
            <p className="text-lg text-slate-400 font-body max-w-2xl mx-auto">
              Powerful tools designed specifically for education counselors to streamline workflows and maximize results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0066CC]/20 to-[#FF6B35]/20 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-heading text-white mb-4 leading-relaxed">
                  "OhCampus has transformed how we counsel students. The fee comparison and college 
                  filtering features save us hours every week."
                </blockquote>
                <p className="text-slate-400 font-body">
                  — Senior Education Counselor, Bangalore
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/login">
                  <Button 
                    size="lg"
                    className="bg-white text-[#0F172A] hover:bg-slate-100 font-body rounded-full px-8 py-6 text-lg shadow-xl"
                  >
                    Start Counseling
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://ohcampus.com/assets/images/logo/logo.png" 
                alt="OhCampus" 
                className="h-10"
              />
              <span className="text-sm text-slate-500 font-body">
                Counselor Platform
              </span>
            </div>
            <p className="text-sm text-slate-500 font-body">
              © {new Date().getFullYear()} OhCampus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
