"""
Test suite for OhCampus Counselor Portal - New Features (Iteration 5)
Tests:
1. Admin Dashboard - Courses Needing Attention widget
2. Admin Dashboard - Seat Availability Overview
3. Counselor Courses page - search and category filter
4. College detail page - Courses and Placements tabs
5. Course detail dialog - Description, Eligibility, Scope, Job Profiles, Fees
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAuthentication:
    """Test authentication for admin and counselor"""
    
    def test_admin_login(self):
        """Test admin login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "admin"
        
    def test_counselor_login(self):
        """Test counselor login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "counselor"


class TestCoursesAPI:
    """Test courses API endpoints"""
    
    def test_get_all_courses(self):
        """Test GET /api/courses returns all courses"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        assert len(data) >= 20  # Should have 22 courses
        
    def test_courses_have_required_fields(self):
        """Test courses have description, eligibility, scope, job_profiles"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        courses = response.json()
        
        # Check first course has all required fields
        course = courses[0]
        assert "description" in course
        assert "eligibility" in course
        assert "scope" in course
        assert "job_profiles" in course
        assert "seat_status" in course
        assert "category" in course
        
    def test_courses_with_closing_status(self):
        """Test courses with Closing/Under Waiting status exist"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        courses = response.json()
        
        closing_courses = [c for c in courses if c.get("seat_status") in ["Closing", "Under Waiting"]]
        assert len(closing_courses) >= 4  # Should have at least 4 courses needing attention
        
    def test_get_courses_with_college(self):
        """Test GET /api/courses/with-college returns courses with college info"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college")
        assert response.status_code == 200
        courses = response.json()
        
        assert len(courses) > 0
        # Check first course has college info
        course = courses[0]
        assert "college" in course
        assert "name" in course["college"]
        assert "city" in course["college"]
        assert "state" in course["college"]
        
    def test_get_course_categories(self):
        """Test GET /api/courses/categories/list returns categories"""
        response = requests.get(f"{BASE_URL}/api/courses/categories/list")
        assert response.status_code == 200
        data = response.json()
        
        assert "categories" in data
        categories = data["categories"]
        assert len(categories) >= 3  # Engineering, Management, Medicine, etc.
        assert "Engineering" in categories
        assert "Management" in categories
        
    def test_filter_courses_by_category(self):
        """Test filtering courses by category"""
        response = requests.get(f"{BASE_URL}/api/courses", params={"category": "Engineering"})
        assert response.status_code == 200
        courses = response.json()
        
        assert len(courses) > 0
        for course in courses:
            assert course["category"] == "Engineering"
            
    def test_search_courses_by_name(self):
        """Test searching courses by name"""
        response = requests.get(f"{BASE_URL}/api/courses", params={"search": "MBA"})
        assert response.status_code == 200
        courses = response.json()
        
        assert len(courses) > 0
        for course in courses:
            assert "MBA" in course["name"].upper() or "mba" in course["name"].lower()


class TestCourseDetailAPI:
    """Test course detail API endpoint"""
    
    def test_get_course_detail(self):
        """Test GET /api/courses/{id} returns course with college and fees"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        # Check structure
        assert "course" in data
        assert "college" in data
        assert "fees" in data
        
    def test_course_detail_has_description(self):
        """Test course detail includes description"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        course = data["course"]
        assert "description" in course
        assert course["description"] is not None
        assert len(course["description"]) > 50  # Should have meaningful description
        
    def test_course_detail_has_eligibility(self):
        """Test course detail includes eligibility"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        course = data["course"]
        assert "eligibility" in course
        assert course["eligibility"] is not None
        
    def test_course_detail_has_scope(self):
        """Test course detail includes scope"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        course = data["course"]
        assert "scope" in course
        assert course["scope"] is not None
        
    def test_course_detail_has_job_profiles(self):
        """Test course detail includes job_profiles"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        course = data["course"]
        assert "job_profiles" in course
        assert isinstance(course["job_profiles"], list)
        assert len(course["job_profiles"]) > 0
        
    def test_course_detail_has_fees(self):
        """Test course detail includes fee structure"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        fees = data["fees"]
        assert isinstance(fees, list)
        assert len(fees) > 0
        
        # Check fee structure
        fee = fees[0]
        assert "amount" in fee
        assert "fee_type" in fee
        assert "year_or_semester" in fee
        
    def test_course_detail_has_admission_charges(self):
        """Test course detail includes admission charges"""
        response = requests.get(f"{BASE_URL}/api/courses/course-1")
        assert response.status_code == 200
        data = response.json()
        
        # admission_charges may be None for some courses
        if data["admission_charges"]:
            charges = data["admission_charges"]
            assert "registration_fee" in charges or "admission_fee" in charges


class TestPlacementsAPI:
    """Test placements API endpoints"""
    
    def test_get_college_placements(self):
        """Test GET /api/colleges/{id}/placements returns placement data"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/placements")
        assert response.status_code == 200
        data = response.json()
        
        assert "college_id" in data
        assert "stats" in data
        
    def test_placements_have_stats(self):
        """Test placements include yearly stats"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/placements")
        assert response.status_code == 200
        data = response.json()
        
        stats = data["stats"]
        assert isinstance(stats, list)
        assert len(stats) > 0
        
        # Check stat structure
        stat = stats[0]
        assert "year" in stat
        assert "highest_package" in stat
        assert "average_package" in stat
        assert "placement_rate" in stat
        assert "total_offers" in stat
        
    def test_placements_have_top_recruiters(self):
        """Test placements include top recruiters"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/placements")
        assert response.status_code == 200
        data = response.json()
        
        stats = data["stats"]
        if len(stats) > 0:
            stat = stats[0]
            assert "top_recruiters" in stat
            assert isinstance(stat["top_recruiters"], list)
            
    def test_placements_for_multiple_colleges(self):
        """Test placements exist for multiple colleges"""
        colleges_with_placements = 0
        for i in range(1, 9):
            response = requests.get(f"{BASE_URL}/api/colleges/col-{i}/placements")
            if response.status_code == 200:
                data = response.json()
                if data.get("stats") and len(data["stats"]) > 0:
                    colleges_with_placements += 1
                    
        assert colleges_with_placements >= 4  # At least 4 colleges should have placement data


class TestCollegeCoursesAPI:
    """Test college courses API"""
    
    def test_get_college_courses(self):
        """Test GET /api/colleges/{id}/courses returns courses"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/courses")
        assert response.status_code == 200
        courses = response.json()
        
        assert isinstance(courses, list)
        assert len(courses) > 0
        
    def test_college_courses_have_seat_status(self):
        """Test college courses include seat_status"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/courses")
        assert response.status_code == 200
        courses = response.json()
        
        for course in courses:
            assert "seat_status" in course
            assert course["seat_status"] in ["Available", "Closing", "Under Waiting", "Closed"]


class TestAdminDashboardData:
    """Test data needed for Admin Dashboard widgets"""
    
    def test_courses_for_attention_widget(self):
        """Test that courses with Closing/Under Waiting status exist for attention widget"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        courses = response.json()
        
        attention_courses = [c for c in courses if c.get("seat_status") in ["Closing", "Under Waiting"]]
        assert len(attention_courses) >= 4  # Should have courses needing attention
        
        # Verify these courses have college_id for enrichment
        for course in attention_courses:
            assert "college_id" in course
            
    def test_seat_availability_counts(self):
        """Test seat availability counts for overview widget"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        courses = response.json()
        
        # Count by status
        available = len([c for c in courses if c.get("seat_status") == "Available"])
        closing = len([c for c in courses if c.get("seat_status") == "Closing"])
        waiting = len([c for c in courses if c.get("seat_status") == "Under Waiting"])
        closed = len([c for c in courses if c.get("seat_status") == "Closed"])
        
        # Verify counts
        assert available > 0
        assert closing > 0
        assert waiting > 0
        # closed may be 0 or more
        
        # Total should match
        total = available + closing + waiting + closed
        assert total == len(courses)


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
