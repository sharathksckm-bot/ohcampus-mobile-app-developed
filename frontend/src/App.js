import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "./components/ui/sonner";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CollegeDetail from "./pages/CollegeDetail";
import AdminDashboard from "./pages/AdminDashboard";
import FeeManagement from "./pages/FeeManagement";
import FAQManagement from "./pages/FAQManagement";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Auth redirect component
const AuthRedirect = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) return null;
  
  if (isAuthenticated) {
    return <Navigate to={user?.role === 'admin' ? '/admin' : '/dashboard'} replace />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route 
        path="/login" 
        element={
          <AuthRedirect>
            <Login />
          </AuthRedirect>
        } 
      />
      <Route 
        path="/register" 
        element={
          <AuthRedirect>
            <Register />
          </AuthRedirect>
        } 
      />

      {/* Counselor Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/college/:collegeId" 
        element={
          <ProtectedRoute>
            <CollegeDetail />
          </ProtectedRoute>
        } 
      />

      {/* Admin Routes */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/fees" 
        element={
          <ProtectedRoute requiredRole="admin">
            <FeeManagement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/faqs" 
        element={
          <ProtectedRoute requiredRole="admin">
            <FAQManagement />
          </ProtectedRoute>
        } 
      />

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
