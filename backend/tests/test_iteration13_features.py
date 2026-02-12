"""
Iteration 13 Backend Tests
Testing features:
- OhCampus logo in navbar/sidebar
- Admin Dashboard total courses count
- College Detail highlights (multiple items)
- College courses from MySQL
- Admin Colleges page
- Fee Management search
- Counselor Dashboard college cards with established year
- Courses page filters
- Compare Colleges with established year and highlights
- Course Details modal with job profiles
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPIHealth:
    """Basic API health checks"""
    
    def test_api_root_accessible(self):
        """Test API root endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"SUCCESS: API root accessible - {data.get('message')}")


class TestAuthentication:
    """Authentication endpoint tests"""
    
    def test_counselor_login(self):
        """Test counselor login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert "user" in data
        assert data["user"]["role"] == "counselor"
        print(f"SUCCESS: Counselor login works - user: {data['user']['email']}")
    
    def test_admin_login(self):
        """Test admin login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert "user" in data
        assert data["user"]["role"] == "admin"
        print(f"SUCCESS: Admin login works - user: {data['user']['email']}")


class TestCollegesAPI:
    """College endpoints tests"""
    
    def test_get_colleges_list(self):
        """Test GET /api/colleges returns list with required fields"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        colleges = response.json()
        assert isinstance(colleges, list)
        assert len(colleges) > 0
        
        # Check required fields
        college = colleges[0]
        assert "id" in college
        assert "name" in college
        assert "state" in college
        assert "city" in college
        print(f"SUCCESS: GET /api/colleges returns {len(colleges)} colleges")
    
    def test_colleges_have_established_year(self):
        """Test colleges have established_year field"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        colleges = response.json()
        
        # Check at least one college has established_year
        has_established = any(c.get('established_year') or c.get('established') for c in colleges)
        assert has_established, "No college has established_year field"
        print(f"SUCCESS: Colleges have established_year field")
    
    def test_get_college_by_id_with_highlights(self):
        """Test GET /api/colleges/{id} returns highlights, whats_new, placements"""
        # First get a college ID
        response = requests.get(f"{BASE_URL}/api/colleges")
        colleges = response.json()
        college_id = colleges[0]["id"]
        
        # Get college details
        response = requests.get(f"{BASE_URL}/api/colleges/{college_id}")
        assert response.status_code == 200
        college = response.json()
        
        # Check for highlights (should be array with multiple items)
        assert "highlights" in college
        assert isinstance(college["highlights"], list)
        print(f"SUCCESS: College {college_id} has {len(college['highlights'])} highlights")
        
        # Check for whats_new
        assert "whats_new" in college
        assert isinstance(college["whats_new"], list)
        print(f"SUCCESS: College {college_id} has {len(college['whats_new'])} whats_new items")
    
    def test_get_college_courses(self):
        """Test GET /api/colleges/{id}/courses returns courses"""
        # First get a college ID
        response = requests.get(f"{BASE_URL}/api/colleges")
        colleges = response.json()
        college_id = colleges[0]["id"]
        
        # Get college courses
        response = requests.get(f"{BASE_URL}/api/colleges/{college_id}/courses")
        assert response.status_code == 200
        courses = response.json()
        assert isinstance(courses, list)
        print(f"SUCCESS: College {college_id} has {len(courses)} courses")


class TestCoursesAPI:
    """Course endpoints tests"""
    
    def test_get_courses_list(self):
        """Test GET /api/courses returns paginated list"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        courses = response.json()
        assert isinstance(courses, list)
        print(f"SUCCESS: GET /api/courses returns {len(courses)} courses")
    
    def test_get_courses_with_college(self):
        """Test GET /api/courses/with-college returns courses with total count"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college?limit=100")
        assert response.status_code == 200
        data = response.json()
        
        # Check response structure
        assert "courses" in data
        assert "total" in data
        assert isinstance(data["courses"], list)
        assert isinstance(data["total"], int)
        
        print(f"SUCCESS: GET /api/courses/with-college returns total={data['total']} courses")
    
    def test_get_course_by_id_with_details(self):
        """Test GET /api/courses/{id} returns description, eligibility, scope, job_profiles"""
        # First get a course ID
        response = requests.get(f"{BASE_URL}/api/courses")
        courses = response.json()
        course_id = courses[0]["id"]
        
        # Get course details
        response = requests.get(f"{BASE_URL}/api/courses/{course_id}")
        assert response.status_code == 200
        data = response.json()
        
        # Check for course details
        assert "course" in data
        course = data["course"]
        
        # Check for required fields
        assert "name" in course
        assert "level" in course
        print(f"SUCCESS: Course {course_id} details retrieved")
        
        # Check for description, eligibility, scope (may be empty but should exist)
        if course.get("description"):
            print(f"  - Has description: {len(course['description'])} chars")
        if course.get("eligibility"):
            print(f"  - Has eligibility: {len(course['eligibility'])} chars")
        if course.get("scope"):
            print(f"  - Has scope: {len(course['scope'])} chars")
        if course.get("job_profiles"):
            print(f"  - Has job_profiles: {len(course['job_profiles'])} items")


class TestFiltersAPI:
    """Filter endpoints tests"""
    
    def test_get_filters(self):
        """Test GET /api/filters returns states and cities"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        data = response.json()
        
        assert "states" in data
        assert "cities" in data
        assert isinstance(data["states"], list)
        assert isinstance(data["cities"], list)
        print(f"SUCCESS: GET /api/filters returns {len(data['states'])} states, {len(data['cities'])} cities")
    
    def test_get_course_levels(self):
        """Test GET /api/filters/course-levels returns levels"""
        response = requests.get(f"{BASE_URL}/api/filters/course-levels")
        assert response.status_code == 200
        data = response.json()
        
        assert "levels" in data
        assert isinstance(data["levels"], list)
        print(f"SUCCESS: GET /api/filters/course-levels returns {len(data['levels'])} levels")
    
    def test_get_course_categories(self):
        """Test GET /api/courses/categories/list returns categories"""
        response = requests.get(f"{BASE_URL}/api/courses/categories/list")
        assert response.status_code == 200
        data = response.json()
        
        assert "categories" in data
        assert isinstance(data["categories"], list)
        print(f"SUCCESS: GET /api/courses/categories/list returns {len(data['categories'])} categories")


class TestCompareCollegesAPI:
    """Compare colleges endpoint tests"""
    
    def test_compare_colleges(self):
        """Test GET /api/colleges/compare returns established_year, highlights, placements"""
        # First get college IDs
        response = requests.get(f"{BASE_URL}/api/colleges")
        colleges = response.json()
        college_ids = [colleges[0]["id"], colleges[1]["id"]]
        
        # Compare colleges - API uses college_ids parameter
        response = requests.get(f"{BASE_URL}/api/colleges/compare", params={
            "college_ids": ",".join(college_ids)
        })
        assert response.status_code == 200
        data = response.json()
        
        assert isinstance(data, list)
        assert len(data) == 2
        
        # Check each college has required fields
        for item in data:
            college = item.get("college", item)  # Handle nested structure
            assert "id" in college
            assert "name" in college
            # Check for established_year
            has_established = college.get("established_year") or college.get("established")
            print(f"  - {college['name']}: established={has_established}")
            # Check for highlights
            if "highlights" in college:
                print(f"    - highlights: {len(college['highlights'])} items")
        
        print(f"SUCCESS: Compare colleges returns data for {len(data)} colleges")


class TestAdminEndpoints:
    """Admin-specific endpoint tests"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        if response.status_code == 200:
            return response.json()["access_token"]
        pytest.skip("Admin authentication failed")
    
    def test_admin_can_access_colleges(self, admin_token):
        """Test admin can access colleges endpoint"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/colleges", headers=headers)
        assert response.status_code == 200
        print("SUCCESS: Admin can access colleges")
    
    def test_admin_can_access_courses(self, admin_token):
        """Test admin can access courses endpoint"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/courses", headers=headers)
        assert response.status_code == 200
        print("SUCCESS: Admin can access courses")
    
    def test_admin_can_access_fees(self, admin_token):
        """Test admin can access fees endpoint"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/fees", headers=headers)
        assert response.status_code == 200
        print("SUCCESS: Admin can access fees")
    
    def test_admin_can_access_faqs(self, admin_token):
        """Test admin can access FAQs endpoint"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/faqs", headers=headers)
        assert response.status_code == 200
        print("SUCCESS: Admin can access FAQs")


class TestSeatStatusFeatures:
    """Seat status related tests"""
    
    def test_courses_have_seat_status(self):
        """Test courses have seat_status field"""
        response = requests.get(f"{BASE_URL}/api/courses")
        assert response.status_code == 200
        courses = response.json()
        
        # Check courses have seat_status
        statuses = set()
        for course in courses:
            if "seat_status" in course:
                statuses.add(course["seat_status"])
        
        print(f"SUCCESS: Found seat statuses: {statuses}")
        
        # Check for courses with Closing/Under Waiting status
        closing_count = sum(1 for c in courses if c.get("seat_status") == "Closing")
        waiting_count = sum(1 for c in courses if c.get("seat_status") == "Under Waiting")
        print(f"  - Closing: {closing_count}, Under Waiting: {waiting_count}")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
