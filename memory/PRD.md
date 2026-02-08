# OhCampus Counselor Platform - PRD

## Original Problem Statement
Create a web-based counseling platform for OhCampus counselors with:
1. Counselor Portal: State/City/Category filters, Featured colleges display, College details (Highlights, What's New)
2. Admin Panel: Fee management (Annual/Semester/Hostel), Course-wise fee structures
3. FAQ Module: Global and college-specific FAQs

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
- [x] Counselor can filter colleges by State/City/Category
- [x] Only Featured colleges displayed
- [x] College detail page with Highlights, What's New, Fees, FAQs tabs
- [x] Admin can manage fee structures (Annual/Semester/Hostel)
- [x] Admin can manage FAQs (Global + College-specific)
- [x] Mobile-friendly interface
- [x] Secure JWT authentication

## What's Been Implemented (Jan 2026)

### Backend APIs
- `/api/auth/login` - JWT authentication
- `/api/auth/register` - User registration
- `/api/auth/me` - Get current user
- `/api/colleges` - List featured colleges with filters
- `/api/colleges/:id` - Get college details
- `/api/colleges/:id/courses` - Get courses for a college
- `/api/colleges/:id/fees` - Get fees for a college
- `/api/fees` - CRUD for fee management
- `/api/faqs` - CRUD for FAQ management
- `/api/filters` - Get filter options (states, cities, categories)
- `/api/seed` - Seed sample data

### Frontend Pages
- Landing Page with OhCampus branding
- Login/Register pages
- Counselor Dashboard with filters and college grid
- College Detail page with tabs (Highlights, What's New, Fees, FAQs)
- Admin Dashboard with stats
- Fee Management page
- FAQ Management page

### Sample Data
- 8 Featured colleges
- 22 Courses
- 13+ Fee records
- 7+ FAQs (Global + College-specific)
- Demo users (admin@ohcampus.com, counselor@ohcampus.com)

## Prioritized Backlog

### P0 (Critical) - COMPLETED
- [x] User authentication (login/register)
- [x] Featured colleges display with filters
- [x] College detail page with all tabs
- [x] Admin fee management
- [x] Admin FAQ management

### P1 (High Priority)
- [ ] Export fee structures to PDF
- [ ] Bulk fee import from CSV
- [ ] Password reset functionality
- [ ] User profile management

### P2 (Medium Priority)
- [ ] Advanced search with multiple criteria
- [ ] College comparison feature
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
4. Consider adding college comparison feature
