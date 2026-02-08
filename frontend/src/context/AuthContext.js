import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../lib/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('ohcampus_token');
    const savedUser = localStorage.getItem('ohcampus_user');
    
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('ohcampus_token');
        localStorage.removeItem('ohcampus_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const response = await authAPI.login(email, password);
      const { access_token, user: userData } = response.data;
      
      localStorage.setItem('ohcampus_token', access_token);
      localStorage.setItem('ohcampus_user', JSON.stringify(userData));
      setUser(userData);
      
      return userData;
    } catch (err) {
      const message = err.response?.data?.detail || 'Login failed';
      setError(message);
      throw new Error(message);
    }
  };

  const register = async (data) => {
    try {
      setError(null);
      const response = await authAPI.register(data);
      const { access_token, user: userData } = response.data;
      
      localStorage.setItem('ohcampus_token', access_token);
      localStorage.setItem('ohcampus_user', JSON.stringify(userData));
      setUser(userData);
      
      return userData;
    } catch (err) {
      const message = err.response?.data?.detail || 'Registration failed';
      setError(message);
      throw new Error(message);
    }
  };

  const logout = () => {
    localStorage.removeItem('ohcampus_token');
    localStorage.removeItem('ohcampus_user');
    setUser(null);
  };

  const isAdmin = () => user?.role === 'admin';
  const isCounselor = () => user?.role === 'counselor';

  const value = {
    user,
    setUser,
    loading,
    error,
    login,
    register,
    logout,
    isAdmin,
    isCounselor,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
