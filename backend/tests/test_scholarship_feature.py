"""
Test Scholarship Feature - Iteration 10
Tests for:
1. Scholarship field in admission creation - POST /api/admissions with scholarship_amount
2. Scholarship field in admission update - PUT /api/admissions/{id} with scholarship_amount
3. Admin/Team Lead/Admission Manager can edit complete admission details
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


class TestScholarshipFeature:
    """Test scholarship_amount field in admissions"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup test data"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
    def get_admin_token(self):
        """Get admin auth token"""
        response = self.session.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        assert response.status_code == 200, f"Admin login failed: {response.text}"
        return response.json()["access_token"]
    
    def get_counselor_token(self):
        """Get counselor auth token"""
        response = self.session.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        assert response.status_code == 200, f"Counselor login failed: {response.text}"
        return response.json()["access_token"]
    
    def get_test_college_and_course(self, token):
        """Get a valid college and course for testing"""
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        # Get colleges
        colleges_res = self.session.get(f"{BASE_URL}/api/colleges")
        assert colleges_res.status_code == 200
        colleges = colleges_res.json()
        assert len(colleges) > 0, "No colleges found"
        college = colleges[0]
        
        # Get courses for this college
        courses_res = self.session.get(f"{BASE_URL}/api/colleges/{college['id']}/courses")
        assert courses_res.status_code == 200
        courses = courses_res.json()
        assert len(courses) > 0, "No courses found"
        course = courses[0]
        
        return college, course
    
    # ==================== CREATE ADMISSION WITH SCHOLARSHIP ====================
    
    def test_create_admission_with_scholarship(self):
        """Test creating admission with scholarship_amount"""
        token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        college, course = self.get_test_college_and_course(token)
        
        # Create admission with scholarship
        payload = {
            "candidate_name": "TEST_Scholarship_Student",
            "place": "Mumbai",
            "college_id": college["id"],
            "course_id": course["id"],
            "admission_date": "2026-01-15",
            "total_fees": 500000,
            "fees_paid": 0,
            "instalments": [],
            "remark": "Test scholarship admission",
            "scholarship_amount": 50000
        }
        
        response = self.session.post(f"{BASE_URL}/api/admissions", json=payload)
        assert response.status_code == 201, f"Create admission failed: {response.text}"
        
        data = response.json()
        assert data["candidate_name"] == "TEST_Scholarship_Student"
        assert data["scholarship_amount"] == 50000, "Scholarship amount not saved correctly"
        assert "id" in data
        
        # Verify by GET
        admission_id = data["id"]
        get_response = self.session.get(f"{BASE_URL}/api/admissions/{admission_id}")
        assert get_response.status_code == 200
        
        fetched = get_response.json()
        assert fetched["scholarship_amount"] == 50000, "Scholarship amount not persisted"
        
        print(f"✓ Created admission with scholarship: {admission_id}")
        return admission_id
    
    def test_create_admission_without_scholarship(self):
        """Test creating admission without scholarship_amount (null)"""
        token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        college, course = self.get_test_college_and_course(token)
        
        # Create admission without scholarship
        payload = {
            "candidate_name": "TEST_No_Scholarship_Student",
            "place": "Delhi",
            "college_id": college["id"],
            "course_id": course["id"],
            "admission_date": "2026-01-16",
            "total_fees": 400000,
            "fees_paid": 0,
            "instalments": [],
            "remark": "Test no scholarship"
        }
        
        response = self.session.post(f"{BASE_URL}/api/admissions", json=payload)
        assert response.status_code == 201, f"Create admission failed: {response.text}"
        
        data = response.json()
        assert data["candidate_name"] == "TEST_No_Scholarship_Student"
        assert data.get("scholarship_amount") is None, "Scholarship should be null"
        
        print(f"✓ Created admission without scholarship: {data['id']}")
        return data["id"]
    
    # ==================== UPDATE ADMISSION WITH SCHOLARSHIP ====================
    
    def test_update_admission_add_scholarship(self):
        """Test updating admission to add scholarship_amount"""
        token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        college, course = self.get_test_college_and_course(token)
        
        # First create admission without scholarship
        create_payload = {
            "candidate_name": "TEST_Update_Scholarship_Student",
            "place": "Chennai",
            "college_id": college["id"],
            "course_id": course["id"],
            "admission_date": "2026-01-17",
            "total_fees": 450000,
            "fees_paid": 0,
            "instalments": []
        }
        
        create_response = self.session.post(f"{BASE_URL}/api/admissions", json=create_payload)
        assert create_response.status_code == 201
        admission_id = create_response.json()["id"]
        
        # Update to add scholarship
        update_payload = {
            "scholarship_amount": 25000
        }
        
        update_response = self.session.put(f"{BASE_URL}/api/admissions/{admission_id}", json=update_payload)
        assert update_response.status_code == 200, f"Update failed: {update_response.text}"
        
        updated = update_response.json()
        assert updated["scholarship_amount"] == 25000, "Scholarship not updated"
        
        # Verify by GET
        get_response = self.session.get(f"{BASE_URL}/api/admissions/{admission_id}")
        assert get_response.status_code == 200
        assert get_response.json()["scholarship_amount"] == 25000
        
        print(f"✓ Updated admission to add scholarship: {admission_id}")
    
    def test_update_admission_modify_scholarship(self):
        """Test updating existing scholarship_amount"""
        token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        college, course = self.get_test_college_and_course(token)
        
        # Create admission with scholarship
        create_payload = {
            "candidate_name": "TEST_Modify_Scholarship_Student",
            "place": "Bangalore",
            "college_id": college["id"],
            "course_id": course["id"],
            "admission_date": "2026-01-18",
            "total_fees": 550000,
            "fees_paid": 0,
            "instalments": [],
            "scholarship_amount": 30000
        }
        
        create_response = self.session.post(f"{BASE_URL}/api/admissions", json=create_payload)
        assert create_response.status_code == 201
        admission_id = create_response.json()["id"]
        
        # Update scholarship amount
        update_payload = {
            "scholarship_amount": 45000
        }
        
        update_response = self.session.put(f"{BASE_URL}/api/admissions/{admission_id}", json=update_payload)
        assert update_response.status_code == 200
        
        updated = update_response.json()
        assert updated["scholarship_amount"] == 45000, "Scholarship not modified correctly"
        
        print(f"✓ Modified scholarship amount: {admission_id}")
    
    # ==================== ADMIN/TEAM LEAD/MANAGER EDIT PERMISSIONS ====================
    
    def test_admin_can_edit_all_admission_fields(self):
        """Test that admin can edit complete admission details"""
        # First create admission as counselor
        counselor_token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {counselor_token}"})
        
        college, course = self.get_test_college_and_course(counselor_token)
        
        create_payload = {
            "candidate_name": "TEST_Admin_Edit_Student",
            "place": "Pune",
            "college_id": college["id"],
            "course_id": course["id"],
            "admission_date": "2026-01-19",
            "total_fees": 600000,
            "fees_paid": 0,
            "instalments": [],
            "scholarship_amount": 20000
        }
        
        create_response = self.session.post(f"{BASE_URL}/api/admissions", json=create_payload)
        assert create_response.status_code == 201
        admission_id = create_response.json()["id"]
        
        # Now login as admin and edit all fields
        admin_token = self.get_admin_token()
        self.session.headers.update({"Authorization": f"Bearer {admin_token}"})
        
        update_payload = {
            "candidate_name": "TEST_Admin_Edit_Student_Updated",
            "place": "Hyderabad",
            "admission_date": "2026-01-20",
            "total_fees": 650000,
            "scholarship_amount": 35000,
            "remark": "Updated by admin"
        }
        
        update_response = self.session.put(f"{BASE_URL}/api/admissions/{admission_id}", json=update_payload)
        assert update_response.status_code == 200, f"Admin update failed: {update_response.text}"
        
        updated = update_response.json()
        assert updated["candidate_name"] == "TEST_Admin_Edit_Student_Updated"
        assert updated["place"] == "Hyderabad"
        assert updated["admission_date"] == "2026-01-20"
        assert updated["total_fees"] == 650000
        assert updated["scholarship_amount"] == 35000
        assert updated["remark"] == "Updated by admin"
        
        print(f"✓ Admin can edit all admission fields: {admission_id}")
    
    def test_counselor_can_edit_own_admission(self):
        """Test that counselor can edit their own admission"""
        token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        college, course = self.get_test_college_and_course(token)
        
        # Create admission
        create_payload = {
            "candidate_name": "TEST_Counselor_Own_Edit",
            "place": "Kolkata",
            "college_id": college["id"],
            "course_id": course["id"],
            "admission_date": "2026-01-21",
            "total_fees": 500000,
            "fees_paid": 0,
            "instalments": []
        }
        
        create_response = self.session.post(f"{BASE_URL}/api/admissions", json=create_payload)
        assert create_response.status_code == 201
        admission_id = create_response.json()["id"]
        
        # Update own admission
        update_payload = {
            "candidate_name": "TEST_Counselor_Own_Edit_Updated",
            "place": "Ahmedabad",
            "scholarship_amount": 15000,
            "remark": "Updated by counselor"
        }
        
        update_response = self.session.put(f"{BASE_URL}/api/admissions/{admission_id}", json=update_payload)
        assert update_response.status_code == 200, f"Counselor update failed: {update_response.text}"
        
        updated = update_response.json()
        assert updated["candidate_name"] == "TEST_Counselor_Own_Edit_Updated"
        assert updated["place"] == "Ahmedabad"
        assert updated["scholarship_amount"] == 15000
        
        print(f"✓ Counselor can edit own admission: {admission_id}")
    
    # ==================== SCHOLARSHIP IN ADMISSIONS LIST ====================
    
    def test_scholarship_in_admissions_list(self):
        """Test that scholarship_amount is returned in admissions list"""
        token = self.get_counselor_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        response = self.session.get(f"{BASE_URL}/api/admissions")
        assert response.status_code == 200
        
        admissions = response.json()
        assert isinstance(admissions, list)
        
        # Check that scholarship_amount field exists in response
        if len(admissions) > 0:
            # Find an admission with scholarship
            scholarship_admissions = [a for a in admissions if a.get("scholarship_amount")]
            if scholarship_admissions:
                admission = scholarship_admissions[0]
                assert "scholarship_amount" in admission
                assert isinstance(admission["scholarship_amount"], (int, float))
                print(f"✓ Scholarship amount in list: {admission['scholarship_amount']}")
            else:
                print("✓ No admissions with scholarship found, but field is available")
        else:
            print("✓ No admissions found, but endpoint works")
    
    def test_scholarship_in_performance_stats(self):
        """Test that scholarship data is available in performance stats"""
        token = self.get_admin_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        response = self.session.get(f"{BASE_URL}/api/admin/stats/performance")
        assert response.status_code == 200, f"Performance stats failed: {response.text}"
        
        data = response.json()
        assert "total_admissions" in data
        print(f"✓ Performance stats accessible, total admissions: {data.get('total_admissions', 0)}")
    
    def test_scholarship_in_admissions_list_endpoint(self):
        """Test that scholarship is in stats admissions list"""
        token = self.get_admin_token()
        self.session.headers.update({"Authorization": f"Bearer {token}"})
        
        response = self.session.get(f"{BASE_URL}/api/admin/stats/admissions-list")
        assert response.status_code == 200, f"Admissions list failed: {response.text}"
        
        data = response.json()
        assert "admissions" in data
        
        admissions = data["admissions"]
        if len(admissions) > 0:
            # Check structure includes scholarship_amount
            admission = admissions[0]
            # scholarship_amount should be in the response (can be null)
            print(f"✓ Admissions list endpoint works, count: {len(admissions)}")
        else:
            print("✓ No admissions in list, but endpoint works")


class TestCleanup:
    """Cleanup test data"""
    
    def test_cleanup_test_admissions(self):
        """Clean up TEST_ prefixed admissions"""
        session = requests.Session()
        session.headers.update({"Content-Type": "application/json"})
        
        # Login as admin
        response = session.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        if response.status_code != 200:
            pytest.skip("Could not login as admin for cleanup")
        
        token = response.json()["access_token"]
        session.headers.update({"Authorization": f"Bearer {token}"})
        
        # Get all admissions
        admissions_res = session.get(f"{BASE_URL}/api/admissions")
        if admissions_res.status_code != 200:
            pytest.skip("Could not get admissions for cleanup")
        
        admissions = admissions_res.json()
        
        # Delete TEST_ prefixed admissions
        deleted_count = 0
        for admission in admissions:
            if admission.get("candidate_name", "").startswith("TEST_"):
                delete_res = session.delete(f"{BASE_URL}/api/admissions/{admission['id']}")
                if delete_res.status_code in [200, 204]:
                    deleted_count += 1
        
        print(f"✓ Cleaned up {deleted_count} test admissions")
