import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Loader2, GraduationCap, AlertCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const user = await login(email, password);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center">
            <img 
              src="https://ohcampus.com/assets/images/logo/logo.png" 
              alt="OhCampus" 
              className="h-14"
              data-testid="login-logo"
            />
          </Link>
          <p className="text-[#475569] mt-2 font-body">Counselor Platform</p>
        </div>

        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-heading font-bold text-[#0F172A]">
              Welcome Back
            </CardTitle>
            <CardDescription className="font-body text-[#475569]">
              Sign in to access your counselor dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive" className="animate-fade-in">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="font-body font-medium text-[#0F172A]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 font-body border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]"
                  data-testid="login-email-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-body font-medium text-[#0F172A]">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 font-body border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]"
                  data-testid="login-password-input"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg font-body"
                disabled={isLoading}
                data-testid="login-submit-btn"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#94A3B8] font-body">
                Contact your administrator for account access
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
