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
8. Admin College Management: Search, filter, and manage colleges with seat status

## User Choices
- JWT-based authentication
- Sample data for demonstration
- OhCampus branding (logo and colors)
- Multi-select filters with search functionality
- Seat Status: Available, Closing, Under Waiting, Closed (default: Available)

## Architecture
- **Frontend**: React 19 with Tailwind CSS, Shadcn/UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Authentication**: JWT tokens
- **PDF Generation**: jspdf + jspdf-autotable

## User Personas
1. **Counselors**: Education counselors who guide students to colleges
2. **Admins**: Platform administrators who manage fee structures, FAQs, admission alerts, and seat availability

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
- [x] Admin College Management with search bar
- [x] Admin College Management filters (State, City, Category, Course)
- [x] Admin College Management tabs (All, By Location, By Category, By Course)
- [x] Seat Availability status for courses (Available, Closing, Under Waiting, Closed)
- [x] Seat status displayed on counselor college detail page

## What's Been Implemented

### Latest Updates (Feb 2026)
- **Admin College Management Page**: New `/admin/colleges` page with:
  - Search bar to find colleges by name, city, or state
  - Filters: State, City, Category, Course dropdowns
  - Tabs: All Colleges, By Location, By Category, By Course
  - Stats cards: Total Colleges, Total Courses, Closing Soon, Closed
  - "Manage Courses" button for each college
- **Seat Availability Status**: 
  - 4 predefined statuses: Available (green), Closing (yellow), Under Waiting (blue), Closed (red)
  - Default status: Available
  - Admin can update via dropdown in "Manage Courses" dialog
  - Status displayed on counselor view (college detail Fees tab)

### Backend APIs
- `/api/auth/login` - JWT authentication
- `/api/auth/register` - User registration
- `/api/colleges` - List featured colleges with filters (state, city, category, course, search)
- `/api/colleges/:id` - Get college details with address and admission alerts
- `/api/colleges/:id/admission-alerts` - Update admission alerts for a college (Admin)
- `/api/colleges/compare` - Compare up to 4 colleges
- `/api/colleges/:id/fee-summary` - Get fee totals by course (includes seat_status)
- `/api/fees` - CRUD for fee management (year/semester-wise)
- `/api/fees/bulk` - Create multiple fees at once for a course
- `/api/fees/import-csv` - Import fees from CSV file
- `/api/fees/csv-template` - Download CSV template
- `/api/admission-charges` - CRUD for admission charges
- `/api/faqs` - CRUD for FAQ management
- `/api/filters` - Get filter options (states, cities, categories, courses)
- `/api/courses` - Get all courses with seat_status
- `/api/courses/:id/seat-status` - Update seat status (Admin)

### Frontend Pages
- Landing Page with OhCampus branding
- Login/Register pages
- Counselor Dashboard with multi-select filters + Compare mode
- College Detail page with tabs (Highlights, What's New, Fees with seat status, FAQs) + Admission Alerts
- College Comparison page (side-by-side table layout)
- Admin Dashboard with stats
- **Admin College Management page** (NEW)
  - Search bar for colleges
  - State/City/Category/Course filters
  - Tabs: All Colleges, By Location, By Category, By Course
  - Manage Courses dialog with seat status dropdown
- Fee Management page (Single Fee, Bulk Fee Dialog, CSV Import, Admission Charges)
- FAQ Management page

### Sample Data
- 8 Featured colleges with addresses and admission alerts
- 24 Courses with duration_years/duration_semesters and seat_status
- 24 Fee records (year-wise and semester-wise)
- 4 Admission charge records
- 7 FAQs (Global + College-specific)
- Demo users (admin@ohcampus.com, counselor@ohcampus.com)

## Seat Status Feature
- **Statuses**: Available, Closing, Under Waiting, Closed
- **Default**: Available (when creating new courses)
- **Admin View**: Dropdown in "Manage Courses" dialog with color-coded options
- **Counselor View**: Badge displayed next to course name on college detail Fees tab
- **Color Coding**:
  - Available: Green
  - Closing: Yellow
  - Under Waiting: Blue
  - Closed: Red

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
- [x] Admin College Management with search and filters
- [x] Seat Availability status for courses
- [x] Admin UI for managing admission alerts (CRUD operations)
- [x] Level and Location filters on Courses page
- [x] "By City" and "By State" tabs on Admin College Management

### P1 (High Priority)
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

## Test Files
- `/app/backend/tests/test_seat_status_features.py` - 25 tests for seat status and college management
- `/app/backend/tests/test_new_features.py` - Tests for multi-select filters, CSV import, etc.
- `/app/backend/tests/test_iteration5_features.py` - 18 tests for courses filters, tabs, and alerts UI

## Test Credentials
- **Admin**: admin@ohcampus.com / admin123
- **Counselor**: counselor@ohcampus.com / counselor123

## Latest Updates (Feb 2026)
### Completed Features
1. **Level & Location Filters on Courses Page**: Counselors can now filter courses by Level (UG/PG), State, and City with cascading behavior (city options update based on selected state).
2. **"By City" & "By State" Tabs**: Admin College Management page now has separate tabs to group colleges by City or State instead of the previous single "By Location" tab.
3. **Admission Alerts Management UI**: Admins can now manage admission alerts for each college via a dedicated dialog:
   - Add new alerts with title, message, type (Info/Warning/Important/Deadline), and status
   - Set optional start and end dates
   - View preview of alert styling
   - Delete existing alerts
   - Changes are saved to the backend and reflected immediately

## Next Action Items
1. Add password reset functionality
2. Implement user profile management
3. Add email notifications for admission deadlines
