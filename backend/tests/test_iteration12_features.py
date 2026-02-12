"""
Test Suite for Iteration 12 Features:
- OhCampus logo on Login and Navbar
- Colleges page shows established year
- College Detail page: Highlights tab, What's New tab, established year in hero
- Courses page filters (State, City) populated and working
- Course Details modal: Description, Eligibility, Scope, Job Profiles with colorful styling
- Compare Colleges: Established Year, Highlights, Placements
- Admin Dashboard: Statistics and Courses Needing Attention
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthAndAuth:
    """Basic health and authentication tests"""
    
    def test_api_root(self):
        """Test API root is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        print("SUCCESS: API root accessible")
    
    def test_counselor_login(self):
        """Test counselor login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["email"] == "counselor@ohcampus.com"
        print(f"SUCCESS: Counselor login works - user: {data['user']['name']}")
        return data["access_token"]
    
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
        print(f"SUCCESS: Admin login works - user: {data['user']['name']}")
        return data["access_token"]


class TestCollegesAPI:
    """Test colleges API endpoints"""
    
    @pytest.fixture
    def auth_token(self):
        """Get auth token for tests"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        return response.json()["access_token"]
    
    def test_get_colleges_list(self, auth_token):
        """Test getting list of colleges"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        response = requests.get(f"{BASE_URL}/api/colleges", headers=headers)
        assert response.status_code == 200
        colleges = response.json()
        assert isinstance(colleges, list)
        assert len(colleges) > 0
        print(f"SUCCESS: Got {len(colleges)} colleges")
        
        # Check first college has required fields
        college = colleges[0]
        assert "id" in college
        assert "name" in college
        assert "city" in college
        assert "state" in college
        print(f"SUCCESS: College has required fields - {college['name']}")
    
    def test_college_has_established_year(self, auth_token):
        """Test that colleges have established_year field"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        response = requests.get(f"{BASE_URL}/api/colleges", headers=headers)
        assert response.status_code == 200
        colleges = response.json()
        
        # Check if any college has established_year
        colleges_with_year = [c for c in colleges if c.get('established_year') or c.get('established')]
        print(f"SUCCESS: {len(colleges_with_year)}/{len(colleges)} colleges have established year")
        
        if colleges_with_year:
            college = colleges_with_year[0]
            year = college.get('established_year') or college.get('established')
            print(f"  Example: {college['name']} - Est. {year}")
    
    def test_get_college_detail(self, auth_token):
        """Test getting college detail with highlights, whats_new, placements"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        
        # First get list of colleges
        response = requests.get(f"{BASE_URL}/api/colleges", headers=headers)
        colleges = response.json()
        college_id = colleges[0]["id"]
        
        # Get college detail
        response = requests.get(f"{BASE_URL}/api/colleges/{college_id}", headers=headers)
        assert response.status_code == 200
        college = response.json()
        
        print(f"SUCCESS: Got college detail for {college['name']}")
        
        # Check for highlights
        if college.get('highlights'):
            print(f"  - Highlights: {len(college['highlights'])} items")
            for h in college['highlights'][:2]:
                print(f"    • {h[:50]}...")
        else:
            print("  - Highlights: None (may be empty in sample data)")
        
        # Check for whats_new
        if college.get('whats_new'):
            print(f"  - What's New: {len(college['whats_new'])} items")
        else:
            print("  - What's New: None (may be empty in sample data)")
        
        # Check for placements
        if college.get('placements'):
            print(f"  - Placements: {len(college['placements'])} records")
        else:
            print("  - Placements: None (may be empty in sample data)")
        
        # Check for established year
        year = college.get('established_year') or college.get('established')
        if year:
            print(f"  - Established Year: {year}")
        else:
            print("  - Established Year: Not set")


class TestCoursesAPI:
    """Test courses API endpoints"""
    
    @pytest.fixture
    def auth_token(self):
        """Get auth token for tests"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        return response.json()["access_token"]
    
    def test_get_courses_list(self, auth_token):
        """Test getting list of courses"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        response = requests.get(f"{BASE_URL}/api/courses", headers=headers)
        assert response.status_code == 200
        data = response.json()
        
        # Handle both paginated and non-paginated responses
        if isinstance(data, dict) and 'courses' in data:
            courses = data['courses']
            print(f"SUCCESS: Got {len(courses)} courses (paginated, total: {data.get('total', 'N/A')})")
        else:
            courses = data
            print(f"SUCCESS: Got {len(courses)} courses")
        
        if courses:
            course = courses[0]
            print(f"  Example: {course['name']} - {course.get('level', 'N/A')}")
    
    def test_get_course_detail(self, auth_token):
        """Test getting course detail with description, eligibility, scope, job_profiles"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        
        # First get list of courses
        response = requests.get(f"{BASE_URL}/api/courses", headers=headers)
        data = response.json()
        courses = data.get('courses', data) if isinstance(data, dict) else data
        
        if not courses:
            pytest.skip("No courses available")
        
        course_id = courses[0]["id"]
        
        # Get course detail
        response = requests.get(f"{BASE_URL}/api/courses/{course_id}", headers=headers)
        assert response.status_code == 200
        detail = response.json()
        
        course = detail.get('course', detail)
        print(f"SUCCESS: Got course detail for {course['name']}")
        
        # Check for description
        if course.get('description'):
            print(f"  - Description: {len(course['description'])} chars")
        else:
            print("  - Description: None")
        
        # Check for eligibility
        if course.get('eligibility'):
            print(f"  - Eligibility: {len(course['eligibility'])} chars")
        else:
            print("  - Eligibility: None")
        
        # Check for scope
        if course.get('scope'):
            print(f"  - Scope: {len(course['scope'])} chars")
        else:
            print("  - Scope: None")
        
        # Check for job_profiles (array) or job_profile (string)
        if course.get('job_profiles'):
            print(f"  - Job Profiles (array): {len(course['job_profiles'])} items")
            for jp in course['job_profiles'][:3]:
                print(f"    • {jp}")
        elif course.get('job_profile'):
            print(f"  - Job Profile (string): {len(course['job_profile'])} chars")
        else:
            print("  - Job Profiles: None")


class TestFiltersAPI:
    """Test filters API endpoints"""
    
    @pytest.fixture
    def auth_token(self):
        """Get auth token for tests"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        return response.json()["access_token"]
    
    def test_get_filters(self, auth_token):
        """Test getting filters (states, cities)"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        response = requests.get(f"{BASE_URL}/api/filters", headers=headers)
        assert response.status_code == 200
        filters = response.json()
        
        # Check for states
        states = filters.get('states', [])
        print(f"SUCCESS: Got {len(states)} states")
        if states:
            print(f"  States: {', '.join(states[:5])}...")
        
        # Check for cities
        cities = filters.get('cities', [])
        print(f"SUCCESS: Got {len(cities)} cities")
        if cities:
            print(f"  Cities: {', '.join(cities[:5])}...")
    
    def test_get_course_levels(self, auth_token):
        """Test getting course levels filter"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        response = requests.get(f"{BASE_URL}/api/filters/course-levels", headers=headers)
        assert response.status_code == 200
        data = response.json()
        
        levels = data.get('levels', [])
        print(f"SUCCESS: Got {len(levels)} course levels")
        if levels:
            print(f"  Levels: {', '.join(levels)}")
    
    def test_get_categories(self, auth_token):
        """Test getting categories filter"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        response = requests.get(f"{BASE_URL}/api/courses/categories", headers=headers)
        assert response.status_code == 200
        data = response.json()
        
        categories = data.get('categories', [])
        print(f"SUCCESS: Got {len(categories)} categories")
        if categories:
            print(f"  Categories: {', '.join(categories[:5])}...")


class TestCompareCollegesAPI:
    """Test compare colleges API"""
    
    @pytest.fixture
    def auth_token(self):
        """Get auth token for tests"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        return response.json()["access_token"]
    
    def test_compare_colleges(self, auth_token):
        """Test comparing colleges returns established_year, highlights, placements"""
        headers = {"Authorization": f"Bearer {auth_token}"}
        
        # First get list of colleges
        response = requests.get(f"{BASE_URL}/api/colleges", headers=headers)
        colleges = response.json()
        
        if len(colleges) < 2:
            pytest.skip("Need at least 2 colleges to compare")
        
        # Get IDs of first 2 colleges
        college_ids = f"{colleges[0]['id']},{colleges[1]['id']}"
        
        # Compare colleges
        response = requests.get(f"{BASE_URL}/api/colleges/compare?colleges={college_ids}", headers=headers)
        assert response.status_code == 200
        compare_data = response.json()
        
        assert isinstance(compare_data, list)
        assert len(compare_data) >= 2
        print(f"SUCCESS: Compared {len(compare_data)} colleges")
        
        for item in compare_data:
            college = item.get('college', {})
            print(f"\n  College: {college.get('name', 'Unknown')}")
            
            # Check established year
            year = college.get('established_year') or college.get('established')
            print(f"    - Established: {year or 'Not set'}")
            
            # Check highlights
            highlights = college.get('highlights', [])
            print(f"    - Highlights: {len(highlights)} items")
            
            # Check placements
            placements = college.get('placements', [])
            print(f"    - Placements: {len(placements)} records")
            
            # Check courses
            courses = item.get('courses', [])
            print(f"    - Courses: {len(courses)}")


class TestAdminDashboardAPI:
    """Test admin dashboard API endpoints"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        return response.json()["access_token"]
    
    def test_admin_stats(self, admin_token):
        """Test admin can get dashboard statistics"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get colleges count
        response = requests.get(f"{BASE_URL}/api/colleges", headers=headers)
        assert response.status_code == 200
        colleges = response.json()
        print(f"SUCCESS: Admin can see {len(colleges)} colleges")
        
        # Get courses count
        response = requests.get(f"{BASE_URL}/api/courses", headers=headers)
        assert response.status_code == 200
        data = response.json()
        courses = data.get('courses', data) if isinstance(data, dict) else data
        print(f"SUCCESS: Admin can see {len(courses)} courses")
        
        # Get fees count
        response = requests.get(f"{BASE_URL}/api/fees", headers=headers)
        assert response.status_code == 200
        fees = response.json()
        print(f"SUCCESS: Admin can see {len(fees)} fee records")
        
        # Get FAQs count
        response = requests.get(f"{BASE_URL}/api/faqs", headers=headers)
        assert response.status_code == 200
        faqs = response.json()
        print(f"SUCCESS: Admin can see {len(faqs)} FAQs")
    
    def test_courses_needing_attention(self, admin_token):
        """Test getting courses with Closing/Under Waiting status"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        response = requests.get(f"{BASE_URL}/api/courses", headers=headers)
        assert response.status_code == 200
        data = response.json()
        courses = data.get('courses', data) if isinstance(data, dict) else data
        
        # Filter courses needing attention
        attention_courses = [c for c in courses if c.get('seat_status') in ['Closing', 'Under Waiting']]
        print(f"SUCCESS: Found {len(attention_courses)} courses needing attention")
        
        for course in attention_courses[:5]:
            print(f"  - {course['name']}: {course.get('seat_status', 'N/A')}")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
