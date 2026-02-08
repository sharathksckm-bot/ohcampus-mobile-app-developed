import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { useAuth } from '../context/AuthContext';
import { profileAPI } from '../lib/api';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Skeleton } from '../components/ui/skeleton';
import {
  User,
  Mail,
  Phone,
  Shield,
  Key,
  Save,
  Loader2,
  Check,
  Eye,
  EyeOff,
} from 'lucide-react';
import { toast } from 'sonner';

export default function Profile() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
  });
  
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await profileAPI.get();
        setProfileData({
          name: res.data.name || '',
          phone: res.data.phone || '',
        });
      } catch (error) {
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    if (!profileData.name.trim()) {
      toast.error('Name is required');
      return;
    }

    setSaving(true);
    try {
      const res = await profileAPI.update(profileData);
      // Update local user context
      const updatedUser = { ...user, name: profileData.name, phone: profileData.phone };
      setUser(updatedUser);
      localStorage.setItem('ohcampus_user', JSON.stringify(updatedUser));
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async () => {
    if (!passwordData.current_password || !passwordData.new_password) {
      toast.error('Please fill in all password fields');
      return;
    }
    
    if (passwordData.new_password !== passwordData.confirm_password) {
      toast.error('New passwords do not match');
      return;
    }
    
    if (passwordData.new_password.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    setSavingPassword(true);
    try {
      await profileAPI.changePassword(passwordData.current_password, passwordData.new_password);
      toast.success('Password changed successfully');
      setPasswordData({ current_password: '', new_password: '', confirm_password: '' });
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Failed to change password');
    } finally {
      setSavingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-10 w-48 mb-6" />
          <Skeleton className="h-64 w-full mb-6" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#0F172A]">
            My Profile
          </h1>
          <p className="text-[#475569] font-body mt-1">
            Manage your account information and password
          </p>
        </div>

        {/* User Info Card */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-[#0066CC] text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div>
                <CardTitle className="font-heading text-xl">{user?.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 border">
                    {user?.role === 'admin' ? 'Administrator' : user?.designation || 'Counselor'}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-[#475569] font-body">
              <Mail className="h-4 w-4" />
              <span>{user?.email}</span>
            </div>
          </CardContent>
        </Card>

        {/* Profile Form */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-heading text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-[#0066CC]" />
              Profile Information
            </CardTitle>
            <CardDescription className="font-body">
              Update your personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="font-body">Full Name *</Label>
              <Input
                value={profileData.name}
                onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                className="mt-1"
                data-testid="profile-name-input"
              />
            </div>
            <div>
              <Label className="font-body">Phone Number</Label>
              <Input
                value={profileData.phone}
                onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
                className="mt-1"
                data-testid="profile-phone-input"
              />
            </div>
            <Button 
              onClick={handleSaveProfile}
              disabled={saving}
              className="bg-[#0066CC] hover:bg-[#0052A3] font-body"
              data-testid="save-profile-btn"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Password Change Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg flex items-center gap-2">
              <Key className="h-5 w-5 text-[#0066CC]" />
              Change Password
            </CardTitle>
            <CardDescription className="font-body">
              Update your password for security
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="font-body">Current Password *</Label>
              <div className="relative mt-1">
                <Input
                  type={showPasswords ? 'text' : 'password'}
                  value={passwordData.current_password}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, current_password: e.target.value }))}
                  placeholder="Enter current password"
                  data-testid="current-password-input"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPasswords(!showPasswords)}
                >
                  {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-body">New Password *</Label>
                <Input
                  type={showPasswords ? 'text' : 'password'}
                  value={passwordData.new_password}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, new_password: e.target.value }))}
                  placeholder="Enter new password"
                  className="mt-1"
                  data-testid="new-password-input"
                />
              </div>
              <div>
                <Label className="font-body">Confirm New Password *</Label>
                <Input
                  type={showPasswords ? 'text' : 'password'}
                  value={passwordData.confirm_password}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirm_password: e.target.value }))}
                  placeholder="Confirm new password"
                  className="mt-1"
                  data-testid="confirm-password-input"
                />
              </div>
            </div>
            <Button 
              onClick={handleChangePassword}
              disabled={savingPassword}
              variant="outline"
              className="font-body"
              data-testid="change-password-btn"
            >
              {savingPassword ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Changing...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Change Password
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
