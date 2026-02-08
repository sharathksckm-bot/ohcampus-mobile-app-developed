"""
Test Suite for Iteration 11 - New Features Testing
Features:
1. Dashboard college cards WITHOUT images (icon-based design)
2. Scholarship Summary API (GET /api/admin/scholarship-summary)
3. Target Alerts API (GET /api/admin/target-alerts)
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Test credentials
ADMIN_EMAIL = "admin@ohcampus.com"
ADMIN_PASSWORD = "admin123"
COUNSELOR_EMAIL = "counselor@ohcampus.com"
COUNSELOR_PASSWORD = "counselor123"


class TestAuth:
    """Authentication tests"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        assert response.status_code == 200, f"Admin login failed: {response.text}"
        return response.json()["access_token"]
    
    @pytest.fixture(scope="class")
    def counselor_token(self):
        """Get counselor authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        assert response.status_code == 200, f"Counselor login failed: {response.text}"
        return response.json()["access_token"]
    
    def test_admin_login(self):
        """Test admin login works"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "admin"
        print("SUCCESS: Admin login works")


class TestScholarshipSummaryAPI:
    """Test Scholarship Summary Report API"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_scholarship_summary_by_month(self, admin_token):
        """Test GET /api/admin/scholarship-summary?view_by=month"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/scholarship-summary",
            params={"view_by": "month"},
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        # Verify response structure
        assert "summary" in data, "Missing 'summary' in response"
        assert "view_by" in data, "Missing 'view_by' in response"
        assert "breakdown" in data, "Missing 'breakdown' in response"
        assert "recent_scholarships" in data, "Missing 'recent_scholarships' in response"
        
        # Verify summary fields
        summary = data["summary"]
        assert "total_scholarships" in summary
        assert "total_amount" in summary
        assert "avg_amount" in summary
        assert "percentage_with_scholarship" in summary
        
        # Verify view_by is correct
        assert data["view_by"] == "month"
        
        print(f"SUCCESS: Scholarship summary by month - {summary['total_scholarships']} recipients, total: {summary['total_amount']}")
    
    def test_scholarship_summary_by_college(self, admin_token):
        """Test GET /api/admin/scholarship-summary?view_by=college"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/scholarship-summary",
            params={"view_by": "college"},
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        # Verify response structure
        assert "summary" in data
        assert "view_by" in data
        assert "breakdown" in data
        assert "recent_scholarships" in data
        
        # Verify view_by is correct
        assert data["view_by"] == "college"
        
        # If there are breakdowns, verify structure
        if data["breakdown"]:
            item = data["breakdown"][0]
            assert "label" in item, "Missing 'label' in breakdown item"
            assert "count" in item, "Missing 'count' in breakdown item"
            assert "total_amount" in item, "Missing 'total_amount' in breakdown item"
            assert "avg_amount" in item, "Missing 'avg_amount' in breakdown item"
        
        print(f"SUCCESS: Scholarship summary by college - {len(data['breakdown'])} colleges with scholarships")
    
    def test_scholarship_summary_default_view(self, admin_token):
        """Test GET /api/admin/scholarship-summary without view_by param (defaults to month)"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/scholarship-summary",
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        # Default should be month
        assert data["view_by"] == "month"
        print("SUCCESS: Default view_by is 'month'")
    
    def test_scholarship_summary_requires_auth(self):
        """Test that scholarship summary requires authentication"""
        response = requests.get(f"{BASE_URL}/api/admin/scholarship-summary")
        assert response.status_code in [401, 403], "Should require authentication"
        print("SUCCESS: Scholarship summary requires authentication")
    
    def test_scholarship_summary_counselor_access(self):
        """Test that regular counselor cannot access scholarship summary"""
        # Login as counselor
        login_response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        
        if login_response.status_code == 200:
            counselor_token = login_response.json()["access_token"]
            headers = {"Authorization": f"Bearer {counselor_token}"}
            
            response = requests.get(
                f"{BASE_URL}/api/admin/scholarship-summary",
                headers=headers
            )
            
            # Should be forbidden for regular counselor
            assert response.status_code == 403, f"Expected 403, got {response.status_code}"
            print("SUCCESS: Regular counselor cannot access scholarship summary (403)")
        else:
            pytest.skip("Counselor login failed")


class TestTargetAlertsAPI:
    """Test Target Alerts API"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_target_alerts_endpoint(self, admin_token):
        """Test GET /api/admin/target-alerts"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/target-alerts",
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        # Verify response structure
        assert "current_month" in data, "Missing 'current_month' in response"
        assert "day_of_month" in data, "Missing 'day_of_month' in response"
        assert "total_alerts" in data, "Missing 'total_alerts' in response"
        assert "critical_count" in data, "Missing 'critical_count' in response"
        assert "warning_count" in data, "Missing 'warning_count' in response"
        assert "alerts" in data, "Missing 'alerts' in response"
        
        # Verify data types
        assert isinstance(data["alerts"], list)
        assert isinstance(data["total_alerts"], int)
        assert isinstance(data["critical_count"], int)
        assert isinstance(data["warning_count"], int)
        
        print(f"SUCCESS: Target alerts - {data['total_alerts']} alerts ({data['critical_count']} critical, {data['warning_count']} warning)")
    
    def test_target_alerts_structure(self, admin_token):
        """Test target alerts response structure when alerts exist"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/target-alerts",
            headers=headers
        )
        
        assert response.status_code == 200
        data = response.json()
        
        # If there are alerts, verify their structure
        if data["alerts"]:
            alert = data["alerts"][0]
            expected_fields = [
                "counselor_id", "counselor_name", "target_count",
                "current_admissions", "admission_progress", "expected_progress",
                "days_remaining", "alert_severity"
            ]
            for field in expected_fields:
                assert field in alert, f"Missing '{field}' in alert"
            
            # Verify severity is valid
            assert alert["alert_severity"] in ["critical", "warning"]
            print(f"SUCCESS: Alert structure verified - {alert['counselor_name']} ({alert['alert_severity']})")
        else:
            print("SUCCESS: No alerts (all counselors on track)")
    
    def test_target_alerts_requires_auth(self):
        """Test that target alerts requires authentication"""
        response = requests.get(f"{BASE_URL}/api/admin/target-alerts")
        assert response.status_code in [401, 403], "Should require authentication"
        print("SUCCESS: Target alerts requires authentication")
    
    def test_target_alerts_counselor_access(self):
        """Test that regular counselor cannot access target alerts"""
        # Login as counselor
        login_response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        
        if login_response.status_code == 200:
            counselor_token = login_response.json()["access_token"]
            headers = {"Authorization": f"Bearer {counselor_token}"}
            
            response = requests.get(
                f"{BASE_URL}/api/admin/target-alerts",
                headers=headers
            )
            
            # Should be forbidden for regular counselor
            assert response.status_code == 403, f"Expected 403, got {response.status_code}"
            print("SUCCESS: Regular counselor cannot access target alerts (403)")
        else:
            pytest.skip("Counselor login failed")


class TestCollegesAPI:
    """Test Colleges API - verify no image_url in response or cards work without images"""
    
    def test_get_colleges_list(self):
        """Test GET /api/colleges returns colleges"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        assert isinstance(data, list), "Response should be a list"
        
        if data:
            college = data[0]
            # Verify college has required fields for card display
            assert "id" in college
            assert "name" in college
            assert "city" in college
            assert "state" in college
            assert "category" in college
            
            # Note: image_url may still exist in DB but frontend doesn't use it
            print(f"SUCCESS: Colleges API returns {len(data)} colleges")
            print(f"  First college: {college['name']} ({college['city']}, {college['state']})")
        else:
            print("SUCCESS: Colleges API works (no colleges in DB)")
    
    def test_college_has_required_card_fields(self):
        """Test that colleges have all fields needed for icon-based card design"""
        response = requests.get(f"{BASE_URL}/api/colleges")
        
        assert response.status_code == 200
        data = response.json()
        
        if data:
            college = data[0]
            # Fields needed for new card design (without images)
            required_fields = ["id", "name", "city", "state", "category", "established", "accreditation"]
            
            for field in required_fields:
                assert field in college, f"Missing required field: {field}"
            
            print(f"SUCCESS: College has all required fields for icon-based card design")
            print(f"  Category: {college.get('category')}")
            print(f"  Established: {college.get('established')}")
            print(f"  Accreditation: {college.get('accreditation')}")
        else:
            pytest.skip("No colleges in database")


class TestPerformanceStatsAPI:
    """Test Performance Stats API"""
    
    @pytest.fixture(scope="class")
    def admin_token(self):
        """Get admin authentication token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_performance_stats(self, admin_token):
        """Test GET /api/admin/stats/performance"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/stats/performance",
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        # Verify response structure
        assert "total_admissions" in data
        assert "fees_stats" in data
        
        print(f"SUCCESS: Performance stats - {data['total_admissions']} total admissions")
    
    def test_admissions_list(self, admin_token):
        """Test GET /api/admin/stats/admissions-list"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(
            f"{BASE_URL}/api/admin/stats/admissions-list",
            headers=headers
        )
        
        assert response.status_code == 200, f"Failed: {response.text}"
        data = response.json()
        
        assert "admissions" in data
        print(f"SUCCESS: Admissions list - {len(data['admissions'])} admissions")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
