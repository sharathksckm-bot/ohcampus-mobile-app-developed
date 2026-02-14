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
9. User/Counselor Management: Admin creates counselors with designations and team lead assignment
10. Admissions Module: Counselors can add/edit admitted candidates with fee instalments
11. Performance Dashboard: Admin and Admission Manager see stats, trends, and admitted students list

## User Choices
- JWT-based authentication
- Sample data for demonstration
- OhCampus branding (logo and colors)
- Multi-select filters with search functionality
- Seat Status: Available, Closing, Under Waiting, Closed (default: Available)
- Designations: Admission Counselor, Senior Admission Counselor, Team Lead, Admission Manager
- Team Lead sees only their team's admissions
- Admission Manager sees all admissions

## Architecture
- **Frontend**: React 19 with Tailwind CSS, Shadcn/UI components
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Authentication**: JWT tokens
- **PDF Generation**: jspdf + jspdf-autotable

## User Personas
1. **Counselors**: Education counselors who guide students to colleges and record admissions
2. **Team Leads**: Senior counselors who manage a team and see their team's admissions
3. **Admission Managers**: See all admissions and performance stats
4. **Admins**: Platform administrators who manage fee structures, FAQs, users, and view performance

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
- [x] Admin College Management tabs (All, By City, By State, By Category, By Course)
- [x] Seat Availability status for courses (Available, Closing, Under Waiting, Closed)
- [x] Seat status displayed on counselor college detail page
- [x] Admin can create/edit/deactivate counselor users
- [x] Counselor designations: Admission Counselor, Senior Admission Counselor, Team Lead, Admission Manager
- [x] Assign team lead to counselors
- [x] Counselors can add/edit admissions (candidate details, college/course, fees, instalments)
- [x] Dynamic fee instalments with paid dates
- [x] Performance Dashboard with stats (by counselor, college, course, trends)
- [x] College search bar in Fee Management page
- [x] Level and Location filters on Courses page
- [x] Admission target tracking (monthly/quarterly targets with progress)
- [x] Remarks displayed in admitted candidates list (both Admin and Counselor panels)
- [x] Admin/Team Lead/Admission Manager can edit fee payments of admitted candidates
- [x] Performance tab for Team Leads (see team members stats only)
- [x] Performance tab for Admission Managers (see complete team stats)
- [x] Filters: By Counselor, By Month, By College in Performance tab

## What's Been Implemented

### Latest Updates (Feb 2026)
- **Performance Tab for Team Leads & Admission Managers**:
  - Team Leads: "My Team Performance" page showing only their team members' stats
  - Admission Managers: "Team Performance" page showing all counselors' stats
  - Filters: By Counselor, By Month (YYYY-MM), By College
  - Target assignment capability for team members
  - Progress tracking with visual progress bars

- **Admission Target Tracking**:
  - Admin, Team Lead, Admission Manager can assign monthly/quarterly targets
  - Target includes admission count and optional fees target
  - Progress bars show actual vs target (admissions and fees collected)
  - Edit and delete targets

- **Remarks in Admitted Candidates List**:
  - Remarks column visible in Counselor's Admissions page
  - Remarks column visible in Admin Performance Dashboard
  - Tooltip shows full remark on hover

- **Fee Payment Editing**:
  - Admin, Team Lead, Admission Manager can edit fee instalments
  - Edit dialog allows adding/removing instalments with paid dates
  - Remark can be updated

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
- `/api/admin/users` - CRUD for counselor users (Admin only)
- `/api/admin/users/team-leads` - Get Team Leads and Managers for dropdown
- `/api/admin/designations` - Get list of designations
- `/api/admissions` - CRUD for admissions (filtered by user role/team)
- `/api/admin/stats/performance` - Performance stats (Admin/Manager)
- `/api/admin/stats/admissions-list` - Full admissions list with filters

### Frontend Pages
- Landing Page with OhCampus branding
- Login/Register pages
- Counselor Dashboard with multi-select filters + Compare mode
- College Detail page with tabs (Highlights, What's New, Fees with seat status, FAQs) + Admission Alerts
- College Comparison page (side-by-side table layout)
- Courses page with Level/Location filters
- **Admissions page** (NEW for Counselors)
  - Add/Edit admitted candidates
  - Dynamic fee instalments with paid dates
  - Stats: Total Admissions, Fees Collected, Pending Balance
- Admin Dashboard with stats
- **User Management page** (NEW for Admin)
  - Create/Edit/Deactivate counselors
  - Designations: Admission Counselor, Senior Admission Counselor, Team Lead, Admission Manager
  - Assign Team Lead to counselors
- **Performance Dashboard** (NEW for Admin/Manager)
  - Total Admissions, Fees Collected, Fees Pending, Collection Rate
  - By Counselor, By College, By Course stats
  - Monthly trends, All Admissions list with filters
- Admin College Management page
  - Search bar for colleges
  - State/City/Category/Course filters
  - Tabs: All Colleges, By City, By State, By Category, By Course
  - Manage Courses dialog with seat status dropdown
  - Manage Alerts dialog (CRUD for admission alerts)
- Fee Management page (with College search, Single Fee, Bulk Fee Dialog, CSV Import, Admission Charges)
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
- [x] Password reset functionality
- [x] User profile management
- [x] Activity logging for admins

### P2 (Medium Priority)
- [ ] Email notifications for admission deadlines
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
- `/app/backend/tests/test_iteration9_features.py` - 21 tests for profile, activity log, and password reset

## Test Credentials
- **Admin**: admin@ohcampus.com / admin123
- **Counselor**: counselor@ohcampus.com / counselor123

## Latest Updates (Feb 2026)
### Iteration 16 - UI Reverts & Filter Improvements (Feb 13, 2026)
**User Request**: Add search bars to all course dropdowns and deploy to production.

**Changes Applied**:
1. **Fee Management - All Dialogs with Searchable Course Dropdowns**:
   - Single Fee Dialog: Added "Search course..." input that filters dropdown as you type
   - Bulk Fee Dialog (Add All Year/Semester Fees): Search input filters dropdown as you type
   - Admission Charges Dialog: Search input filters dropdown as you type

2. **Courses Page - Search and Filters**:
   - Single search bar with placeholder "Search courses by name, college, or location..."
   - Course filter dropdown with built-in search ("Search courses..." input inside dropdown)
   - Typing in search filters the dropdown list in real-time

3. **Fee Range Filter**:
   - Options: "All Fee Ranges", "1st Year < ₹1L", "1st Year < ₹2L", "1st Year > ₹2L"
   - Filters based on First Year fees only:
     - For Annual fee type: Year 1 tuition fee
     - For Semester fee type: Sum of Semester 1 + Semester 2 tuition fees

4. **Production Deployment**:
   - Frontend deployed to: /var/www/counselor.ohcampus.com/
   - Backend deployed to: /var/www/counselor.ohcampus.com/backend/
   - Backend service restarted: ohcampus-backend.service

### Iteration 15 - Critical Production Bug Fix (Feb 12, 2026)
**Root Cause Identified**: Frontend was built with preview environment URL (`college-counsel.preview.emergentagent.com`) and deployed to production, causing all API calls to hit the wrong server (preview with demo data).

**Fixes Applied**:
1. **Fixed Frontend Deployment Process**:
   - Rebuilt frontend with correct production URL (`https://counselor.ohcampus.com`)
   - Deployed correct build to production server
   - All 141 colleges and 2082 courses now loading from MySQL database

2. **Fixed "Manage Courses" Dialog**:
   - Added API call to `/api/colleges/{college_id}/courses` when dialog opens
   - Added loading spinner and empty state message
   - Courses now correctly fetched for each college

3. **Fixed Duplicate Symbols in Seat Status Dropdown**:
   - Removed extra icon from SelectTrigger, now only shows via SelectValue

4. **Fixed Seat Status Saving for MySQL Courses**:
   - Created `course_seat_status` MongoDB collection for MySQL courses
   - Backend stores/retrieves seat status for `cc-` prefixed courses
   - UI updates immediately after save with success toast

5. **Fixed HTTP Status Codes (REST API Best Practices)**:
   - Updated all POST endpoints to return HTTP 201 Created

### Iteration 14 - URL Cleanup & Production Deployment (Feb 13, 2026)
1. **Removed "mysql" from URLs**: Changed ID prefixes from `mysql-` to cleaner `c-` for colleges and `cc-` for courses
2. **Production Deployment Complete**: Deployed all fixes to counselor.ohcampus.com
3. **Fixed MySQL Schema Differences**: Updated queries to handle production database column names (`text` instead of `highlights` in college_highlights table)
4. **Backward Compatibility**: Added support for legacy `mysql-` prefix IDs to avoid breaking existing bookmarks

### Iteration 13 - UI Size Fixes & Logo Updates (Feb 12, 2026)
1. **Compare Courses Layout Fixed**: Clean, compact dialog with proper layout
2. **College Cards Reduced Size**: Now shows 4 cards per row on large screens (xl:grid-cols-4)
3. **Course Cards Reduced Size**: Now shows 4 cards per row on large screens (xl:grid-cols-4)
4. **Admin Panel OhCampus Logo**: Updated sidebar to show official OhCampus logo
5. **Fee Management Search**: Verified working - filters colleges by name and shows results with count

### Iteration 12 - Bug Fixes & UI Improvements (Feb 12, 2026)
1. **OhCampus Logo Updated**: Changed to official logo from https://ohcampus.com/assets/images/logo/ohCampusLogo.png
   - Login page displays logo correctly
   - Navbar displays logo with "Counselor Portal" text
   - Favicon updated to OhCampus logo
2. **College Display Fixes**:
   - Established Year now shows correctly on Dashboard, College Detail, and Compare Colleges pages
   - Highlights tab shows numbered list of college highlights
   - What's New tab shows recent updates
   - Placements tab shows statistics table (Year, Highest Package, Average Package, Placement Rate, Total Offers, Top Recruiters)
3. **Course Details Modal Redesign**:
   - Description section with blue gradient background
   - Eligibility section with green gradient background
   - Scope & Career section with purple gradient background
   - Job Profiles displayed as colorful orange badges
   - HTML content properly rendered (no raw HTML visible)
4. **Courses Page Filters Fixed**:
   - State filter populated with all available states
   - City filter populated with all available cities
   - Filters work correctly with server-side pagination
5. **Compare Colleges Enhanced**:
   - Established Year row shows correctly for all colleges
   - Highlights row shows numbered highlights for each college
   - Placements row shows placement statistics (or "—" if no data)
6. **Admin Dashboard Working**:
   - Statistics cards showing: 8 Featured Colleges, 22 Total Courses, 24 Fee Records, 7 FAQs
   - Courses Needing Attention section showing courses with Closing/Under Waiting status
   - Seat Availability Overview showing counts by status
7. **Multi-Category Filter Support**:
   - Colleges with multiple categories (e.g., "Engineering, Management") now appear in both category filters
   - Uses FIND_IN_SET for proper MySQL filtering
8. **Backend MySQL Improvements**:
   - get_college_by_id now fetches highlights from college_highlights table
   - get_college_by_id now fetches placement statistics from college_placement_statistics table
   - get_course_by_id now returns job_profiles as parsed array
   - All HTML content sanitized before rendering

### Iteration 11 - UI Redesign, Scholarship Report & Target Alerts (Feb 8, 2026)
1. **Dashboard College Cards Redesign**: Removed images, made cards attractive with:
   - Gradient blue icon with GraduationCap instead of images
   - Featured badge and alert indicators inline
   - Category and Established year in clean grid
   - Accreditation highlighted in blue card
   - Courses count and View Details link
2. **Scholarship Summary Report** (Admin/Manager only):
   - Stats cards: Recipients, Total Awarded, Average, % With Scholarship
   - Monthly or College-wise breakdown table
   - Recent Scholarship Recipients list
   - API: `/api/admin/scholarship-summary?view_by=month|college`
3. **Target Alerts** (Admin/Manager only):
   - Shows counselors falling behind on targets
   - Critical (red) and Warning (orange) severity levels
   - Progress bars for admission and fees targets
   - Days remaining indicator
   - API: `/api/admin/target-alerts`

### Iteration 10 - Scholarship Feature (Feb 8, 2026)
1. **Scholarship Amount Field**: Added one-time scholarship field to admissions
   - Shows in Admitted Candidates table with purple badge and Gift icon
   - Available on Admissions page, Performance Dashboard, and Counselor Performance page
   - Optional field - shows "—" if no scholarship offered
2. **Full Edit Capability**: Admin, Team Lead, and Admission Manager can edit ALL admission details:
   - Candidate name, place, admission date
   - Total fees and scholarship amount
   - Fee instalments and remarks
3. **Backend Updates**: `scholarship_amount` field added to AdmissionBase, AdmissionCreate, AdmissionUpdate models

### Iteration 9 - Completed Features (Feb 8, 2026)
1. **Password Reset**: Admins can reset any user's password via User Management page (Key icon button in Actions column).
2. **User Profile Page**: Users can access their profile from the navbar dropdown to:
   - View and update their name and phone number
   - Change their password with validation
3. **Activity Log Page**: Admins can view all system activities at `/admin/activity-log`:
   - Stats cards showing Total Events, Logins Today, Active Users, Admissions count
   - Searchable and filterable activity history table
   - Filter by User or Action type
   - Pagination for large activity sets
4. **Navigation Updates**:
   - Profile link added to user dropdown menu in Navbar
   - Activity Log link added to Admin sidebar

### Previous Updates
1. **Level & Location Filters on Courses Page**: Counselors can now filter courses by Level (UG/PG), State, and City with cascading behavior (city options update based on selected state).
2. **"By City" & "By State" Tabs**: Admin College Management page now has separate tabs to group colleges by City or State instead of the previous single "By Location" tab.
3. **Admission Alerts Management UI**: Admins can now manage admission alerts for each college via a dedicated dialog:
   - Add new alerts with title, message, type (Info/Warning/Important/Deadline), and status
   - Set optional start and end dates
   - View preview of alert styling
   - Delete existing alerts
   - Changes are saved to the backend and reflected immediately

## Next Action Items
1. Add email notifications for admission deadlines
2. Implement advanced analytics dashboard
3. Fix `webmail.ohcampus.com` "not secure" browser warning

## Recent Bug Fixes (Feb 14, 2026)

### Admin Panel - Question Paper Upload Fix ✅
**Issue**: Unable to upload Question Papers in the admin panel (admin.ohcampus.com) exam update page.

**Root Cause Analysis**:
1. PHP `upload_max_filesize` was only 2M
2. PHP `post_max_size` was only 8M
3. CodeIgniter code had hardcoded `$maxsize = 6 * 1024 * 1024` (6MB limit)
4. PHP-FPM socket permissions (0660) caused 502 errors after restart

**Fixes Applied on Production Server**:
| Component | Before | After |
|-----------|--------|-------|
| PHP `upload_max_filesize` | 2M | **100M** |
| PHP `post_max_size` | 8M | **128M** |
| PHP `max_execution_time` | 30 | **300** |
| PHP `max_input_time` | 60 | **300** |
| PHP-FPM `listen.mode` | 0660 | **0666** |
| CodeIgniter `$maxsize` | 6MB | **100MB** |
| Nginx `client_max_body_size` | 100M (already set) | ✅ |

**Files Modified**:
- `/opt/cpanel/ea-php81/root/etc/php.ini`
- `/opt/cpanel/ea-php81/root/etc/php-fpm.d/campusapi.ohcampus.com.conf`
- `/home/ohcampus/public_html/campusapi.ohcampus.com/application/controllers/admin/Exam.php`

**Testing**: Successfully tested uploads up to 50MB with HTTP 200 response.
