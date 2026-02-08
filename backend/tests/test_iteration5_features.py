"""
Test file for OhCampus new features (iteration 5):
- Level filter on Courses page
- State filter on Courses page  
- City filter on Courses page
- By City tab on Admin College Management page
- By State tab on Admin College Management page
- Admission Alerts CRUD operations
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAuthentication:
    """Authentication tests for admin and counselor"""
    
    def test_admin_login(self):
        """Test admin login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200, f"Admin login failed: {response.text}"
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "admin"
        print(f"Admin login successful, token received")
    
    def test_counselor_login(self):
        """Test counselor login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "counselor@ohcampus.com",
            "password": "counselor123"
        })
        assert response.status_code == 200, f"Counselor login failed: {response.text}"
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "counselor"
        print(f"Counselor login successful")


class TestCoursesFilters:
    """Test courses endpoint for Level, State, City filters"""
    
    def test_get_all_courses_with_college_info(self):
        """Test GET /api/courses/with-college returns courses with college info"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college")
        assert response.status_code == 200, f"Failed to get courses: {response.text}"
        data = response.json()
        assert isinstance(data, list)
        assert len(data) > 0, "No courses returned"
        
        # Check that courses have college info
        course = data[0]
        assert "college" in course, "Course missing college info"
        assert "level" in course, "Course missing level field"
        print(f"Got {len(data)} courses with college info")
    
    def test_courses_have_level_field(self):
        """Test that courses have level field (UG/PG)"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college")
        assert response.status_code == 200
        data = response.json()
        
        levels = set()
        for course in data:
            if course.get("level"):
                levels.add(course["level"])
        
        assert "UG" in levels or "PG" in levels, f"Expected UG or PG levels, got: {levels}"
        print(f"Found levels: {levels}")
    
    def test_courses_have_college_state_city(self):
        """Test that courses have college state and city for filtering"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college")
        assert response.status_code == 200
        data = response.json()
        
        states = set()
        cities = set()
        for course in data:
            if course.get("college"):
                if course["college"].get("state"):
                    states.add(course["college"]["state"])
                if course["college"].get("city"):
                    cities.add(course["college"]["city"])
        
        assert len(states) > 0, "No states found in courses"
        assert len(cities) > 0, "No cities found in courses"
        print(f"Found states: {states}")
        print(f"Found cities: {cities}")
    
    def test_courses_categories(self):
        """Test GET /api/courses/categories returns categories"""
        response = requests.get(f"{BASE_URL}/api/courses/categories")
        assert response.status_code == 200, f"Failed to get categories: {response.text}"
        data = response.json()
        assert "categories" in data
        assert len(data["categories"]) > 0, "No categories returned"
        print(f"Found categories: {data['categories']}")


class TestCollegesGrouping:
    """Test colleges endpoint for By City and By State grouping"""
    
    def test_get_all_colleges(self):
        """Test GET /api/colleges returns all colleges"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200, f"Failed to get colleges: {response.text}"
        data = response.json()
        assert isinstance(data, list)
        assert len(data) > 0, "No colleges returned"
        print(f"Got {len(data)} colleges")
    
    def test_colleges_have_city_field(self):
        """Test that colleges have city field for By City grouping"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        data = response.json()
        
        cities = {}
        for college in data:
            city = college.get("city")
            assert city, f"College {college.get('name')} missing city field"
            if city not in cities:
                cities[city] = []
            cities[city].append(college["name"])
        
        print(f"Colleges by city: {dict((k, len(v)) for k, v in cities.items())}")
        assert len(cities) > 0, "No cities found"
    
    def test_colleges_have_state_field(self):
        """Test that colleges have state field for By State grouping"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        data = response.json()
        
        states = {}
        for college in data:
            state = college.get("state")
            assert state, f"College {college.get('name')} missing state field"
            if state not in states:
                states[state] = []
            states[state].append(college["name"])
        
        print(f"Colleges by state: {dict((k, len(v)) for k, v in states.items())}")
        assert len(states) > 0, "No states found"
    
    def test_filters_endpoint_returns_cities_and_states(self):
        """Test GET /api/filters returns cities and states for filtering"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200, f"Failed to get filters: {response.text}"
        data = response.json()
        
        assert "cities" in data, "Filters missing cities"
        assert "states" in data, "Filters missing states"
        assert len(data["cities"]) > 0, "No cities in filters"
        assert len(data["states"]) > 0, "No states in filters"
        print(f"Filter cities: {data['cities']}")
        print(f"Filter states: {data['states']}")


class TestAdmissionAlerts:
    """Test admission alerts CRUD operations"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200
        return response.json()["access_token"]
    
    def test_colleges_have_admission_alerts_field(self):
        """Test that colleges have admission_alerts field"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        data = response.json()
        
        colleges_with_alerts = 0
        for college in data:
            assert "admission_alerts" in college, f"College {college.get('name')} missing admission_alerts field"
            if college["admission_alerts"] and len(college["admission_alerts"]) > 0:
                colleges_with_alerts += 1
        
        print(f"Colleges with alerts: {colleges_with_alerts}/{len(data)}")
    
    def test_admission_alert_structure(self):
        """Test that admission alerts have correct structure"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        data = response.json()
        
        # Find a college with alerts
        college_with_alerts = None
        for college in data:
            if college.get("admission_alerts") and len(college["admission_alerts"]) > 0:
                college_with_alerts = college
                break
        
        assert college_with_alerts, "No college with alerts found"
        
        alert = college_with_alerts["admission_alerts"][0]
        assert "title" in alert, "Alert missing title"
        assert "message" in alert, "Alert missing message"
        assert "alert_type" in alert, "Alert missing alert_type"
        assert "is_active" in alert, "Alert missing is_active"
        print(f"Alert structure valid: {alert}")
    
    def test_update_admission_alerts_requires_auth(self):
        """Test that updating alerts requires authentication"""
        response = requests.put(f"{BASE_URL}/api/colleges/col-1/admission-alerts", json=[])
        assert response.status_code == 401, f"Expected 401, got {response.status_code}"
        print("Update alerts correctly requires authentication")
    
    def test_update_admission_alerts_success(self, admin_token):
        """Test updating admission alerts for a college"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # First get current alerts
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        colleges = response.json()
        test_college = next((c for c in colleges if c["id"] == "col-3"), None)
        assert test_college, "Test college col-3 not found"
        
        original_alerts = test_college.get("admission_alerts", [])
        
        # Add a new alert
        new_alerts = [
            {
                "title": "TEST_Alert Title",
                "message": "TEST_Alert message for testing",
                "alert_type": "info",
                "start_date": "2025-01-01",
                "end_date": "2025-12-31",
                "is_active": True
            }
        ]
        
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-3/admission-alerts",
            json=new_alerts,
            headers=headers
        )
        assert response.status_code == 200, f"Failed to update alerts: {response.text}"
        data = response.json()
        assert "admission_alerts" in data
        assert len(data["admission_alerts"]) == 1
        print(f"Successfully added alert: {data['admission_alerts']}")
        
        # Verify the alert was saved
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        colleges = response.json()
        updated_college = next((c for c in colleges if c["id"] == "col-3"), None)
        assert updated_college
        assert len(updated_college["admission_alerts"]) == 1
        assert updated_college["admission_alerts"][0]["title"] == "TEST_Alert Title"
        print("Alert verified in database")
        
        # Cleanup - restore original alerts
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-3/admission-alerts",
            json=original_alerts,
            headers=headers
        )
        assert response.status_code == 200
        print("Cleanup completed")
    
    def test_update_admission_alerts_multiple(self, admin_token):
        """Test adding multiple alerts"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get original alerts for col-6 (should be empty)
        response = requests.get(f"{BASE_URL}/api/colleges")
        assert response.status_code == 200
        colleges = response.json()
        test_college = next((c for c in colleges if c["id"] == "col-6"), None)
        original_alerts = test_college.get("admission_alerts", []) if test_college else []
        
        # Add multiple alerts
        new_alerts = [
            {
                "title": "TEST_Info Alert",
                "message": "This is an info alert",
                "alert_type": "info",
                "is_active": True
            },
            {
                "title": "TEST_Warning Alert",
                "message": "This is a warning alert",
                "alert_type": "warning",
                "is_active": True
            },
            {
                "title": "TEST_Deadline Alert",
                "message": "This is a deadline alert",
                "alert_type": "deadline",
                "is_active": False
            }
        ]
        
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-6/admission-alerts",
            json=new_alerts,
            headers=headers
        )
        assert response.status_code == 200, f"Failed to update alerts: {response.text}"
        data = response.json()
        assert len(data["admission_alerts"]) == 3
        print(f"Successfully added 3 alerts")
        
        # Verify alert types
        alert_types = [a["alert_type"] for a in data["admission_alerts"]]
        assert "info" in alert_types
        assert "warning" in alert_types
        assert "deadline" in alert_types
        print(f"Alert types verified: {alert_types}")
        
        # Cleanup
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-6/admission-alerts",
            json=original_alerts,
            headers=headers
        )
        assert response.status_code == 200
        print("Cleanup completed")
    
    def test_remove_all_alerts(self, admin_token):
        """Test removing all alerts from a college"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # First add an alert to col-7
        test_alert = [{
            "title": "TEST_Temporary Alert",
            "message": "This will be removed",
            "alert_type": "info",
            "is_active": True
        }]
        
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-7/admission-alerts",
            json=test_alert,
            headers=headers
        )
        assert response.status_code == 200
        
        # Now remove all alerts
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-7/admission-alerts",
            json=[],
            headers=headers
        )
        assert response.status_code == 200, f"Failed to remove alerts: {response.text}"
        data = response.json()
        assert len(data["admission_alerts"]) == 0
        print("Successfully removed all alerts")
    
    def test_alert_type_values(self, admin_token):
        """Test all valid alert type values"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        valid_types = ["info", "warning", "important", "deadline"]
        
        for alert_type in valid_types:
            alerts = [{
                "title": f"TEST_{alert_type.upper()} Alert",
                "message": f"Testing {alert_type} type",
                "alert_type": alert_type,
                "is_active": True
            }]
            
            response = requests.put(
                f"{BASE_URL}/api/colleges/col-7/admission-alerts",
                json=alerts,
                headers=headers
            )
            assert response.status_code == 200, f"Failed for alert_type={alert_type}: {response.text}"
            print(f"Alert type '{alert_type}' accepted")
        
        # Cleanup
        response = requests.put(
            f"{BASE_URL}/api/colleges/col-7/admission-alerts",
            json=[],
            headers=headers
        )
        assert response.status_code == 200
        print("All alert types validated and cleaned up")


class TestCollegeNotFound:
    """Test error handling for non-existent colleges"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200
        return response.json()["access_token"]
    
    def test_update_alerts_nonexistent_college(self, admin_token):
        """Test updating alerts for non-existent college returns 404"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        response = requests.put(
            f"{BASE_URL}/api/colleges/nonexistent-college/admission-alerts",
            json=[],
            headers=headers
        )
        assert response.status_code == 404, f"Expected 404, got {response.status_code}"
        print("Correctly returns 404 for non-existent college")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
