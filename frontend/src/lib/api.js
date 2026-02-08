import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ohcampus_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('ohcampus_token');
      localStorage.removeItem('ohcampus_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (data) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
};

// Filters API
export const filtersAPI = {
  getAll: () => api.get('/filters'),
  getCitiesByState: (state) => api.get('/filters/cities', { params: { state } }),
};

// Colleges API
export const collegesAPI = {
  getAll: (params) => api.get('/colleges', { params }),
  getById: (id) => api.get(`/colleges/${id}`),
  compare: (collegeIds) => api.get(`/colleges/compare`, { params: { college_ids: collegeIds } }),
  create: (data) => api.post('/colleges', data),
  update: (id, data) => api.put(`/colleges/${id}`, data),
  getFeeSummary: (collegeId) => api.get(`/colleges/${collegeId}/fee-summary`),
  updateAdmissionAlerts: (id, alerts) => api.put(`/colleges/${id}/admission-alerts`, alerts),
};

// Courses API
export const coursesAPI = {
  getByCollege: (collegeId) => api.get(`/colleges/${collegeId}/courses`),
  getAll: (params) => api.get('/courses', { params }),
  getAllWithCollege: (params) => api.get('/courses/with-college', { params }),
  getById: (courseId) => api.get(`/courses/${courseId}`),
  getCategories: () => api.get('/courses/categories/list'),
  create: (data) => api.post('/courses', data),
  update: (id, data) => api.put(`/courses/${id}`, data),
  updateSeatStatus: (id, seatStatus) => api.put(`/courses/${id}/seat-status`, { seat_status: seatStatus }),
};

// Placements API
export const placementsAPI = {
  getByCollege: (collegeId) => api.get(`/colleges/${collegeId}/placements`),
  update: (collegeId, data) => api.put(`/colleges/${collegeId}/placements`, data),
};

// Fees API
export const feesAPI = {
  getAll: (params) => api.get('/fees', { params }),
  getByCollege: (collegeId) => api.get(`/colleges/${collegeId}/fees`),
  create: (data) => api.post('/fees', data),
  createBulk: (data) => api.post('/fees/bulk', data),
  update: (id, data) => api.put(`/fees/${id}`, data),
  delete: (id) => api.delete(`/fees/${id}`),
  importCSV: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/fees/import-csv', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  getCSVTemplate: () => api.get('/fees/csv-template'),
};

// Admission Charges API
export const admissionChargesAPI = {
  getAll: (params) => api.get('/admission-charges', { params }),
  getByCollege: (collegeId) => api.get(`/colleges/${collegeId}/admission-charges`),
  create: (data) => api.post('/admission-charges', data),
  update: (id, data) => api.put(`/admission-charges/${id}`, data),
  delete: (id) => api.delete(`/admission-charges/${id}`),
};

// FAQs API
export const faqsAPI = {
  getAll: (params) => api.get('/faqs', { params }),
  create: (data) => api.post('/faqs', data),
  update: (id, data) => api.put(`/faqs/${id}`, data),
  delete: (id) => api.delete(`/faqs/${id}`),
};

// Seed API
export const seedAPI = {
  seed: () => api.post('/seed'),
};

export default api;
