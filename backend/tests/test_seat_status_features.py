#!/usr/bin/env python3
"""
OhCampus Counselor Platform - Seat Status & College Management Features Testing
Tests: Admin College Management, Seat Status API, Filters, Tabs functionality
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAuthentication:
    """Authentication tests for getting tokens"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200, f"Admin login failed: {response.text}"
        data = response.json()
        assert "access_token" in data
        return data["access_token"]
    
    @pytest.fixture(scope="class")
    def counselor_token(self):
        """Get counselor authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        assert response.status_code == 200, f"Counselor login failed: {response.text}"
        data = response.json()
        assert "access_token" in data
        return data["access_token"]
    
    def test_admin_login(self, admin_token):
        """Test admin login returns valid token"""
        assert admin_token is not None
        assert len(admin_token) > 0
    
    def test_counselor_login(self, counselor_token):
        """Test counselor login returns valid token"""
        assert counselor_token is not None
        assert len(counselor_token) > 0


class TestCoursesWithSeatStatus:
    """Test courses endpoint returns seat_status field"""
    
    def test_get_all_courses_has_seat_status(self):
        """Test GET /api/courses returns courses with seat_status field"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        
        courses = response.json()
        assert isinstance(courses, list)
        assert len(courses) > 0
        
        # Verify all courses have seat_status field
        for course in courses:
            assert "seat_status" in course, f"Course {course.get('id')} missing seat_status"
            assert course["seat_status"] in ["Available", "Closing", "Under Waiting", "Closed"], \
                f"Invalid seat_status: {course['seat_status']}"
        
        print(f"All {len(courses)} courses have valid seat_status field")
    
    def test_courses_have_variety_of_statuses(self):
        """Test that seed data has variety of seat statuses"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        
        courses = response.json()
        statuses = set(c["seat_status"] for c in courses)
        
        # Should have at least 2 different statuses in seed data
        assert len(statuses) >= 2, f"Expected variety of statuses, got: {statuses}"
        print(f"Found seat statuses: {statuses}")
    
    def test_get_courses_by_college_has_seat_status(self):
        """Test GET /api/colleges/{id}/courses returns courses with seat_status"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/courses")
        assert response.status_code == 200
        
        courses = response.json()
        assert isinstance(courses, list)
        
        for course in courses:
            assert "seat_status" in course
            assert course["seat_status"] in ["Available", "Closing", "Under Waiting", "Closed"]


class TestSeatStatusUpdateEndpoint:
    """Test PUT /api/courses/{course_id}/seat-status endpoint"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        return response.json()["access_token"]
    
    def test_update_seat_status_to_closing(self, admin_token):
        """Test updating seat status to 'Closing'"""
        course_id = "course-3"  # PGDM course
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/courses/{course_id}/seat-status",
            json={"seat_status": "Closing"},
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed to update seat status: {response.text}"
        
        data = response.json()
        assert data["seat_status"] == "Closing"
        
        # Verify by GET
        get_response = requests.get(f"{BASE_URL}/api/courses")
        courses = get_response.json()
        course = next((c for c in courses if c["id"] == course_id), None)
        assert course is not None
        assert course["seat_status"] == "Closing"
        
        print(f"Successfully updated course {course_id} to 'Closing'")
    
    def test_update_seat_status_to_under_waiting(self, admin_token):
        """Test updating seat status to 'Under Waiting'"""
        course_id = "course-3"
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/courses/{course_id}/seat-status",
            json={"seat_status": "Under Waiting"},
            headers=headers
        )
        
        assert response.status_code == 200
        assert response.json()["seat_status"] == "Under Waiting"
    
    def test_update_seat_status_to_closed(self, admin_token):
        """Test updating seat status to 'Closed'"""
        course_id = "course-3"
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/courses/{course_id}/seat-status",
            json={"seat_status": "Closed"},
            headers=headers
        )
        
        assert response.status_code == 200
        assert response.json()["seat_status"] == "Closed"
    
    def test_update_seat_status_to_available(self, admin_token):
        """Test updating seat status back to 'Available'"""
        course_id = "course-3"
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/courses/{course_id}/seat-status",
            json={"seat_status": "Available"},
            headers=headers
        )
        
        assert response.status_code == 200
        assert response.json()["seat_status"] == "Available"
        print(f"Successfully restored course {course_id} to 'Available'")
    
    def test_update_seat_status_invalid_status(self, admin_token):
        """Test that invalid seat status is rejected"""
        course_id = "course-3"
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/courses/{course_id}/seat-status",
            json={"seat_status": "InvalidStatus"},
            headers=headers
        )
        
        assert response.status_code == 400, "Should reject invalid seat status"
    
    def test_update_seat_status_requires_admin(self):
        """Test that updating seat status requires admin authentication"""
        course_id = "course-3"
        
        # Without token
        response = requests.put(
            f"{BASE_URL}/api/courses/{course_id}/seat-status",
            json={"seat_status": "Closing"}
        )
        assert response.status_code in [401, 403], "Should require authentication"
    
    def test_update_seat_status_invalid_course(self, admin_token):
        """Test updating seat status for non-existent course"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/courses/invalid-course-id/seat-status",
            json={"seat_status": "Closing"},
            headers=headers
        )
        
        assert response.status_code == 404


class TestFiltersForCollegeManagement:
    """Test filters endpoint for admin college management"""
    
    def test_filters_returns_all_required_fields(self):
        """Test /api/filters returns states, cities, categories, courses"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert "states" in data
        assert "cities" in data
        assert "categories" in data
        assert "courses" in data
        
        # Verify all are lists
        assert isinstance(data["states"], list)
        assert isinstance(data["cities"], list)
        assert isinstance(data["categories"], list)
        assert isinstance(data["courses"], list)
        
        print(f"Filters: {len(data['states'])} states, {len(data['cities'])} cities, "
              f"{len(data['categories'])} categories, {len(data['courses'])} courses")
    
    def test_filters_states_for_location_tab(self):
        """Test states are available for 'By Location' tab"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["states"]) >= 2
        assert "Karnataka" in data["states"]
        assert "Tamil Nadu" in data["states"]
    
    def test_filters_categories_for_category_tab(self):
        """Test categories are available for 'By Category' tab"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["categories"]) >= 2
        # Check for expected categories
        expected_categories = ["Engineering", "Management", "Medicine & Health Sciences"]
        found = [c for c in expected_categories if c in data["categories"]]
        assert len(found) >= 2, f"Expected categories not found. Got: {data['categories']}"
    
    def test_filters_courses_for_course_tab(self):
        """Test courses are available for 'By Course' tab"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["courses"]) >= 5
        # Check for expected course types
        course_names = data["courses"]
        has_mba = any("MBA" in c for c in course_names)
        has_btech = any("B.Tech" in c for c in course_names)
        assert has_mba or has_btech, "Expected MBA or B.Tech courses in filters"


class TestCollegesSearchAndFilter:
    """Test colleges endpoint with search and filter functionality"""
    
    def test_search_colleges_by_name(self):
        """Test searching colleges by name"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"search": "AIMS"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert isinstance(colleges, list)
        # Should find AIMS college
        assert len(colleges) >= 1
        assert any("AIMS" in c["name"] for c in colleges)
    
    def test_search_colleges_case_insensitive(self):
        """Test search is case insensitive"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"search": "aims"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert len(colleges) >= 1
    
    def test_filter_by_state(self):
        """Test filtering colleges by state"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"state": "Karnataka"})
        assert response.status_code == 200
        
        colleges = response.json()
        for college in colleges:
            assert college["state"] == "Karnataka"
    
    def test_filter_by_city(self):
        """Test filtering colleges by city"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"city": "Bangalore"})
        assert response.status_code == 200
        
        colleges = response.json()
        for college in colleges:
            assert college["city"] == "Bangalore"
    
    def test_filter_by_category(self):
        """Test filtering colleges by category"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"category": "Engineering"})
        assert response.status_code == 200
        
        colleges = response.json()
        for college in colleges:
            assert college["category"] == "Engineering"
    
    def test_filter_by_course(self):
        """Test filtering colleges by course"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"course": "MBA"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert isinstance(colleges, list)
        # Should return colleges that offer MBA courses
        print(f"Found {len(colleges)} colleges offering MBA courses")
    
    def test_combined_filters(self):
        """Test combining multiple filters"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={
            "state": "Karnataka",
            "city": "Bangalore"
        })
        assert response.status_code == 200
        
        colleges = response.json()
        for college in colleges:
            assert college["state"] == "Karnataka"
            assert college["city"] == "Bangalore"


class TestFeeSummaryWithSeatStatus:
    """Test fee summary endpoint includes seat status"""
    
    def test_fee_summary_includes_course_seat_status(self):
        """Test GET /api/colleges/{id}/fee-summary includes seat_status in course"""
        response = requests.get(f"{BASE_URL}/api/colleges/col-1/fee-summary")
        assert response.status_code == 200
        
        summary = response.json()
        assert isinstance(summary, list)
        
        for item in summary:
            assert "course" in item
            course = item["course"]
            assert "seat_status" in course, f"Course {course.get('id')} missing seat_status in fee summary"
            assert course["seat_status"] in ["Available", "Closing", "Under Waiting", "Closed"]
        
        print(f"Fee summary for col-1 has {len(summary)} courses with seat_status")


class TestDefaultSeatStatus:
    """Test that new courses have default seat status of 'Available'"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        return response.json()["access_token"]
    
    def test_new_course_has_default_available_status(self, admin_token):
        """Test creating a new course defaults to 'Available' seat status"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        new_course = {
            "name": "TEST_New Course for Seat Status",
            "college_id": "col-1",
            "duration": "2 Years",
            "level": "PG"
            # Note: NOT providing seat_status - should default to 'Available'
        }
        
        response = requests.post(
            f"{BASE_URL}/api/courses",
            json=new_course,
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed to create course: {response.text}"
        
        created_course = response.json()
        assert "seat_status" in created_course
        assert created_course["seat_status"] == "Available", \
            f"Expected default 'Available', got '{created_course['seat_status']}'"
        
        print(f"New course created with default seat_status: {created_course['seat_status']}")
        
        # Note: We don't have a delete endpoint, so this test course will remain


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
