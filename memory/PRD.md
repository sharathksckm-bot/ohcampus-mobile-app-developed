# OhCampus Counselor Platform - PRD

## Original Problem Statement
Create a web-based counseling platform for OhCampus counselors with:
1. Counselor Portal: State/City/Category/Course filters, Featured colleges display, College details (Highlights, What's New)
2. Admin Panel: Fee management (Annual/Semester/Hostel, Admission Charges), Course-wise fee structures
3. FAQ Module: Global and college-specific FAQs
4. College Comparison: Compare up to 4 colleges side by side

## User Choices
- JWT-based authentication
- Sample data for demonstration
- OhCampus branding (logo and colors)

## Architecture
- **Frontend**: React 19 with Tailwind CSS, Shadcn/UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Authentication**: JWT tokens

## User Personas
1. **Counselors**: Education counselors who guide students to colleges
2. **Admins**: Platform administrators who manage fee structures and FAQs

## Core Requirements
- [x] Counselor can filter colleges by State/City/Category/Course
- [x] Only Featured colleges displayed
- [x] College detail page with Highlights, What's New, Fees, FAQs tabs
- [x] College addresses displayed
- [x] Year-wise fees for Annual type (1st Year, 2nd Year, etc.)
- [x] Semester-wise fees for Semester type (1st Sem - 8th Sem)
- [x] Admission Charges section (Registration, Admission Fee, Caution Deposit, etc.)
- [x] Total Fees Summary with Grand Total (excluding hostel)
- [x] College Comparison feature (up to 4 colleges)
- [x] Admin can manage fee structures (Annual/Semester/Hostel)
- [x] Admin can manage Admission Charges
- [x] Admin can manage FAQs (Global + College-specific)
- [x] Mobile-friendly interface
- [x] Secure JWT authentication

## What's Been Implemented (Jan 2026)

### Backend APIs
- `/api/auth/login` - JWT authentication
- `/api/auth/register` - User registration
- `/api/colleges` - List featured colleges with filters (state, city, category, course)
- `/api/colleges/:id` - Get college details with address
- `/api/colleges/compare` - Compare up to 4 colleges
- `/api/colleges/:id/fee-summary` - Get fee totals by course
- `/api/fees` - CRUD for fee management (year/semester-wise)
- `/api/admission-charges` - CRUD for admission charges
- `/api/faqs` - CRUD for FAQ management
- `/api/filters` - Get filter options (states, cities, categories, courses)

### Frontend Pages
- Landing Page with OhCampus branding
- Login/Register pages
- Counselor Dashboard with filters (State, City, Category, Course) + Compare button
- College Detail page with tabs (Highlights, What's New, Fees with totals, FAQs)
- College Comparison page (side-by-side)
- Admin Dashboard with stats
- Fee Management page (Tuition/Hostel + Admission Charges)
- FAQ Management page

### Sample Data
- 8 Featured colleges with addresses
- 22 Courses with duration_years/duration_semesters
- 24 Fee records (year-wise and semester-wise)
- 4 Admission charge records
- 7 FAQs (Global + College-specific)
- Demo users (admin@ohcampus.com, counselor@ohcampus.com)

## Prioritized Backlog

### P0 (Critical) - COMPLETED
- [x] User authentication (login/register)
- [x] Featured colleges display with filters
- [x] Course filter option
- [x] College addresses
- [x] Year-wise/Semester-wise fee structures
- [x] Admission Charges section
- [x] Total Fees Summary (excluding hostel)
- [x] College Comparison feature (up to 4)
- [x] Admin fee management
- [x] Admin FAQ management

### P1 (High Priority)
- [ ] Export fee structures to PDF
- [ ] Bulk fee import from CSV
- [ ] Password reset functionality
- [ ] User profile management

### P2 (Medium Priority)
- [ ] Advanced search with multiple criteria
- [ ] Email notifications
- [ ] Activity logging for admins

### P3 (Nice to Have)
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] College ratings/reviews
- [ ] Application tracking for students

## Next Action Items
1. Add more colleges to the database
2. Implement PDF export for fee structures
3. Add bulk import functionality for fees
