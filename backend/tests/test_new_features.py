#!/usr/bin/env python3
"""
OhCampus Counselor Platform - New Features Backend API Testing
Tests: Multi-select filters, Bulk fee creation, Admission alerts, CSV import
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


class TestFiltersEndpoint:
    """Test filters endpoint with courses list"""
    
    def test_filters_returns_courses(self):
        """Test that /api/filters returns courses list for multi-select"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert "states" in data
        assert "cities" in data
        assert "categories" in data
        assert "courses" in data  # NEW: courses should be in filters
        
        # Verify courses list is populated
        assert isinstance(data["courses"], list)
        assert len(data["courses"]) > 0
        print(f"Found {len(data['courses'])} courses in filters")
    
    def test_filters_states_populated(self):
        """Test states are populated for multi-select"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["states"]) >= 2  # Karnataka, Tamil Nadu
        assert "Karnataka" in data["states"]
    
    def test_filters_cities_populated(self):
        """Test cities are populated for multi-select"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["cities"]) >= 2
        assert "Bangalore" in data["cities"]
    
    def test_filters_categories_populated(self):
        """Test categories are populated for multi-select"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["categories"]) >= 2
        assert "Engineering" in data["categories"] or "Management" in data["categories"]


class TestCollegesFiltering:
    """Test colleges endpoint with various filters"""
    
    def test_filter_by_state(self):
        """Test filtering colleges by state"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"state": "Karnataka"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert isinstance(colleges, list)
        # All returned colleges should be in Karnataka
        for college in colleges:
            assert college["state"] == "Karnataka"
    
    def test_filter_by_city(self):
        """Test filtering colleges by city"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"city": "Bangalore"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert isinstance(colleges, list)
        for college in colleges:
            assert college["city"] == "Bangalore"
    
    def test_filter_by_category(self):
        """Test filtering colleges by category"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"category": "Engineering"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert isinstance(colleges, list)
        for college in colleges:
            assert college["category"] == "Engineering"
    
    def test_filter_by_course(self):
        """Test filtering colleges by course name"""
        response = requests.get(f"{BASE_URL}/api/colleges", params={"course": "MBA"})
        assert response.status_code == 200
        
        colleges = response.json()
        assert isinstance(colleges, list)
        # Should return colleges that offer MBA courses
        print(f"Found {len(colleges)} colleges offering MBA courses")


class TestAdmissionAlerts:
    """Test admission alerts functionality"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        return response.json()["access_token"]
    
    def test_college_with_alerts_has_alerts_data(self):
        """Test that colleges with alerts (col-1, col-2, col-4, col-5, col-8) have admission_alerts"""
        colleges_with_alerts = ["col-1", "col-2", "col-4", "col-5", "col-8"]
        
        for college_id in colleges_with_alerts:
            response = requests.get(f"{BASE_URL}/api/colleges/{college_id}")
            assert response.status_code == 200, f"Failed to get college {college_id}"
            
            college = response.json()
            assert "admission_alerts" in college, f"College {college_id} missing admission_alerts field"
            assert isinstance(college["admission_alerts"], list)
            assert len(college["admission_alerts"]) > 0, f"College {college_id} should have alerts but has empty array"
            
            # Verify alert structure
            alert = college["admission_alerts"][0]
            assert "title" in alert
            assert "message" in alert
            assert "alert_type" in alert
            print(f"College {college_id} has {len(college['admission_alerts'])} alerts")
    
    def test_college_without_alerts_has_empty_array(self):
        """Test that colleges without alerts (col-3, col-6, col-7) have empty admission_alerts"""
        colleges_without_alerts = ["col-3", "col-6", "col-7"]
        
        for college_id in colleges_without_alerts:
            response = requests.get(f"{BASE_URL}/api/colleges/{college_id}")
            assert response.status_code == 200, f"Failed to get college {college_id}"
            
            college = response.json()
            assert "admission_alerts" in college, f"College {college_id} missing admission_alerts field"
            assert isinstance(college["admission_alerts"], list)
            assert len(college["admission_alerts"]) == 0, f"College {college_id} should have NO alerts but has {len(college['admission_alerts'])}"
            print(f"College {college_id} correctly has 0 alerts")
    
    def test_update_admission_alerts_endpoint(self, admin_token):
        """Test PUT /api/colleges/{id}/admission-alerts endpoint"""
        college_id = "col-3"  # College without alerts
        
        new_alerts = [
            {
                "title": "TEST_New Admission Alert",
                "message": "This is a test alert created during testing",
                "alert_type": "info",
                "start_date": "2025-01-01",
                "end_date": "2025-12-31",
                "is_active": True
            }
        ]
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/colleges/{college_id}/admission-alerts",
            json=new_alerts,
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed to update alerts: {response.text}"
        
        data = response.json()
        assert "admission_alerts" in data
        assert len(data["admission_alerts"]) == 1
        assert data["admission_alerts"][0]["title"] == "TEST_New Admission Alert"
        
        # Verify by GET
        get_response = requests.get(f"{BASE_URL}/api/colleges/{college_id}")
        assert get_response.status_code == 200
        college = get_response.json()
        assert len(college["admission_alerts"]) == 1
        
        # Cleanup - restore empty alerts
        cleanup_response = requests.put(
            f"{BASE_URL}/api/colleges/{college_id}/admission-alerts",
            json=[],
            headers=headers
        )
        assert cleanup_response.status_code == 200
        print("Successfully tested admission alerts update endpoint")
    
    def test_update_alerts_requires_admin(self):
        """Test that updating alerts requires admin authentication"""
        college_id = "col-1"
        
        # Without token
        response = requests.put(
            f"{BASE_URL}/api/colleges/{college_id}/admission-alerts",
            json=[]
        )
        assert response.status_code in [401, 403], "Should require authentication"
    
    def test_update_alerts_invalid_college(self, admin_token):
        """Test updating alerts for non-existent college"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(
            f"{BASE_URL}/api/colleges/invalid-college-id/admission-alerts",
            json=[],
            headers=headers
        )
        assert response.status_code == 404


class TestBulkFeeCreation:
    """Test bulk fee creation endpoint /api/fees/bulk"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        return response.json()["access_token"]
    
    def test_bulk_fee_creation_success(self, admin_token):
        """Test creating multiple fees at once"""
        bulk_data = {
            "college_id": "col-1",
            "course_id": "course-1",
            "fee_type": "annual",
            "fees": [
                {"year_or_semester": 1, "amount": 150000, "hostel_fee": 80000, "description": "TEST_Year 1"},
                {"year_or_semester": 2, "amount": 160000, "hostel_fee": 85000, "description": "TEST_Year 2"}
            ]
        }
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(
            f"{BASE_URL}/api/fees/bulk",
            json=bulk_data,
            headers=headers
        )
        
        assert response.status_code == 201, f"Bulk fee creation failed: {response.text}"
        
        data = response.json()
        assert "fees_count" in data
        assert data["fees_count"] == 2
        assert "fees" in data
        assert len(data["fees"]) == 2
        print(f"Successfully created {data['fees_count']} fee records in bulk")
    
    def test_bulk_fee_requires_admin(self):
        """Test that bulk fee creation requires admin authentication"""
        bulk_data = {
            "college_id": "col-1",
            "course_id": "course-1",
            "fee_type": "annual",
            "fees": [{"year_or_semester": 1, "amount": 100000}]
        }
        
        response = requests.post(f"{BASE_URL}/api/fees/bulk", json=bulk_data)
        assert response.status_code in [401, 403], "Should require authentication"
    
    def test_bulk_fee_invalid_college(self, admin_token):
        """Test bulk fee creation with invalid college ID"""
        bulk_data = {
            "college_id": "invalid-college",
            "course_id": "course-1",
            "fee_type": "annual",
            "fees": [{"year_or_semester": 1, "amount": 100000}]
        }
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(
            f"{BASE_URL}/api/fees/bulk",
            json=bulk_data,
            headers=headers
        )
        
        assert response.status_code == 404
    
    def test_bulk_fee_invalid_course(self, admin_token):
        """Test bulk fee creation with invalid course ID"""
        bulk_data = {
            "college_id": "col-1",
            "course_id": "invalid-course",
            "fee_type": "annual",
            "fees": [{"year_or_semester": 1, "amount": 100000}]
        }
        
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.post(
            f"{BASE_URL}/api/fees/bulk",
            json=bulk_data,
            headers=headers
        )
        
        assert response.status_code == 404


class TestCSVImport:
    """Test CSV import functionality"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        return response.json()["access_token"]
    
    def test_csv_template_endpoint(self):
        """Test GET /api/fees/csv-template returns template info"""
        response = requests.get(f"{BASE_URL}/api/fees/csv-template")
        assert response.status_code == 200
        
        data = response.json()
        assert "columns" in data
        assert "example_row" in data
        assert "notes" in data
        
        # Verify required columns
        required_columns = ["college_id", "course_id", "fee_type", "year_or_semester", "amount"]
        for col in required_columns:
            assert col in data["columns"], f"Missing required column: {col}"
        
        print(f"CSV template has {len(data['columns'])} columns")
    
    def test_csv_import_requires_auth(self):
        """Test that CSV import requires authentication"""
        # Create a simple CSV file
        csv_content = "college_id,course_id,fee_type,year_or_semester,amount\ncol-1,course-1,annual,1,100000"
        files = {"file": ("test.csv", csv_content, "text/csv")}
        
        response = requests.post(f"{BASE_URL}/api/fees/import-csv", files=files)
        assert response.status_code in [401, 403], "Should require authentication"
    
    def test_csv_import_rejects_non_csv(self, admin_token):
        """Test that CSV import rejects non-CSV files"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        files = {"file": ("test.txt", "some text content", "text/plain")}
        
        response = requests.post(
            f"{BASE_URL}/api/fees/import-csv",
            files=files,
            headers=headers
        )
        
        assert response.status_code == 400


class TestCompareColleges:
    """Test college comparison endpoint"""
    
    def test_compare_two_colleges(self):
        """Test comparing 2 colleges"""
        response = requests.get(
            f"{BASE_URL}/api/colleges/compare",
            params={"college_ids": "col-1,col-2"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        assert len(data) == 2
        
        for item in data:
            assert "college" in item
            assert "courses" in item
            assert "fees" in item
    
    def test_compare_four_colleges(self):
        """Test comparing 4 colleges (maximum)"""
        response = requests.get(
            f"{BASE_URL}/api/colleges/compare",
            params={"college_ids": "col-1,col-2,col-3,col-4"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert len(data) == 4
    
    def test_compare_requires_minimum_two(self):
        """Test that comparison requires at least 2 colleges"""
        response = requests.get(
            f"{BASE_URL}/api/colleges/compare",
            params={"college_ids": "col-1"}
        )
        
        assert response.status_code == 400
    
    def test_compare_maximum_four(self):
        """Test that comparison allows maximum 4 colleges"""
        response = requests.get(
            f"{BASE_URL}/api/colleges/compare",
            params={"college_ids": "col-1,col-2,col-3,col-4,col-5"}
        )
        
        assert response.status_code == 400


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
