# OhCampus Counselor Platform - PRD

## Original Problem Statement
Create a web-based counseling platform for OhCampus counselors with:
1. Counselor Portal: State/City/Category/Course filters, Featured colleges display, College details (Highlights, What's New)
2. Admin Panel: Fee management (Annual/Semester/Hostel, Admission Charges), Course-wise fee structures
3. FAQ Module: Global and college-specific FAQs
4. College Comparison: Compare up to 4 colleges side by side
5. PDF Export: Export fee structures as PDF
6. CSV Import: Bulk import fees from CSV
7. Admission Alerts: Display important admission-related alerts on college pages

## User Choices
- JWT-based authentication
- Sample data for demonstration
- OhCampus branding (logo and colors)
- Multi-select filters with search functionality

## Architecture
- **Frontend**: React 19 with Tailwind CSS, Shadcn/UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Authentication**: JWT tokens
- **PDF Generation**: jspdf + jspdf-autotable

## User Personas
1. **Counselors**: Education counselors who guide students to colleges
2. **Admins**: Platform administrators who manage fee structures, FAQs, and admission alerts

## Core Requirements
- [x] Counselor can filter colleges by State/City/Category/Course
- [x] Multi-select filters with search functionality
- [x] Only Featured colleges displayed
- [x] College detail page with Highlights, What's New, Fees, FAQs tabs
- [x] College addresses displayed
- [x] Year-wise fees for Annual type (1st Year, 2nd Year, etc.)
- [x] Semester-wise fees for Semester type (1st Sem - 8th Sem)
- [x] Admission Charges section (Registration, Admission Fee, Caution Deposit, etc.)
- [x] Total Fees Summary with Grand Total (excluding hostel)
- [x] College Comparison feature (up to 4 colleges)
- [x] Admin can manage fee structures (Annual/Semester/Hostel)
- [x] Admin can add all year/semester fees at once (Bulk Fee Dialog)
- [x] Admin can manage Admission Charges
- [x] Admin can manage FAQs (Global + College-specific)
- [x] Admin can manage Admission Alerts per college
- [x] PDF export for fee structures
- [x] CSV import for bulk fee upload
- [x] Mobile-friendly interface
- [x] Secure JWT authentication

## What's Been Implemented

### Latest Updates (Feb 2026)
- **Multi-select Filters**: All filters (State, City, Category, Course) now support multiple selection with search
- **Admission Alerts System**: Backend support + Frontend display for admission alerts on college detail pages
- **Bulk Fee Creation**: New dialog to add all year/semester fees at once for a course
- **CSV Import UI**: Complete UI for importing fees from CSV with template download
- **Compare Mode Fix**: Fixed z-index overlap issue with search bar

### Backend APIs
- `/api/auth/login` - JWT authentication
- `/api/auth/register` - User registration
- `/api/colleges` - List featured colleges with filters (state, city, category, course)
- `/api/colleges/:id` - Get college details with address and admission alerts
- `/api/colleges/:id/admission-alerts` - Update admission alerts for a college (Admin)
- `/api/colleges/compare` - Compare up to 4 colleges
- `/api/colleges/:id/fee-summary` - Get fee totals by course
- `/api/fees` - CRUD for fee management (year/semester-wise)
- `/api/fees/bulk` - Create multiple fees at once for a course
- `/api/fees/import-csv` - Import fees from CSV file
- `/api/fees/csv-template` - Download CSV template
- `/api/admission-charges` - CRUD for admission charges
- `/api/faqs` - CRUD for FAQ management
- `/api/filters` - Get filter options (states, cities, categories, courses)

### Frontend Pages
- Landing Page with OhCampus branding
- Login/Register pages
- Counselor Dashboard with multi-select filters + Compare mode
- College Detail page with tabs (Highlights, What's New, Fees, FAQs) + Admission Alerts
- College Comparison page (side-by-side table layout)
- Admin Dashboard with stats
- Fee Management page (Single Fee, Bulk Fee Dialog, CSV Import, Admission Charges)
- FAQ Management page

### Sample Data
- 8 Featured colleges with addresses and admission alerts
- 22 Courses with duration_years/duration_semesters
- 24 Fee records (year-wise and semester-wise)
- 4 Admission charge records
- 7 FAQs (Global + College-specific)
- Demo users (admin@ohcampus.com, counselor@ohcampus.com)

## Admission Alerts Feature
- Colleges can have multiple admission alerts with types: info, warning, important, deadline
- Alerts show only on college detail pages when `admission_alerts` array is non-empty
- Alert types have different colors: blue (info), yellow (warning), red (important), orange (deadline)
- Deadline alerts show the end date as a badge

## Prioritized Backlog

### P0 (Critical) - COMPLETED ✅
- [x] User authentication (login/register)
- [x] Featured colleges display with filters
- [x] Multi-select filter support with search
- [x] Course filter option
- [x] College addresses
- [x] Year-wise/Semester-wise fee structures
- [x] Admission Charges section
- [x] Total Fees Summary (excluding hostel)
- [x] College Comparison feature (up to 4)
- [x] Admin fee management
- [x] Admin bulk fee creation
- [x] Admin FAQ management
- [x] PDF export for fee structures
- [x] CSV import for fees
- [x] Admission Alerts system

### P1 (High Priority)
- [ ] Admin panel for managing admission alerts (UI)
- [ ] Password reset functionality
- [ ] User profile management

### P2 (Medium Priority)
- [ ] Email notifications for admission deadlines
- [ ] Activity logging for admins
- [ ] Advanced analytics dashboard

### P3 (Nice to Have)
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] College ratings/reviews
- [ ] Application tracking for students

## Test Credentials
- **Admin**: admin@ohcampus.com / admin123
- **Counselor**: counselor@ohcampus.com / counselor123

## Next Action Items
1. Create Admin UI for managing admission alerts per college
2. Add more colleges to the database
3. Implement password reset functionality
