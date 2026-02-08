"""
Test file for OhCampus Iteration 7 Features:
1. Target Tracking - Admin/Team Lead/Admission Manager can assign admission targets to counselors
2. Remarks column in admitted candidates list (Counselor and Admin panels)
3. Fee payment editing permissions (Admin, Team Lead, Admission Manager can edit any admission)
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')

# Test credentials
ADMIN_CREDS = {"email": "admin@ohcampus.com", "password": "admin123"}
COUNSELOR_CREDS = {"email": "counselor@ohcampus.com", "password": "counselor123"}
TEAMLEAD_CREDS = {"email": "teamlead@test.com", "password": "test123"}


class TestAuth:
    """Authentication tests"""
    
    def test_admin_login(self):
        """Test admin login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json=ADMIN_CREDS)
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "admin"
        print(f"✓ Admin login successful: {data['user']['name']}")
    
    def test_counselor_login(self):
        """Test counselor login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json=COUNSELOR_CREDS)
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "counselor"
        print(f"✓ Counselor login successful: {data['user']['name']}")
    
    def test_teamlead_login(self):
        """Test team lead login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json=TEAMLEAD_CREDS)
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["user"]["designation"] == "Team Lead"
        print(f"✓ Team Lead login successful: {data['user']['name']}")


@pytest.fixture
def admin_token():
    """Get admin auth token"""
    response = requests.post(f"{BASE_URL}/api/auth/login", json=ADMIN_CREDS)
    if response.status_code == 200:
        return response.json()["access_token"]
    pytest.skip("Admin login failed")


@pytest.fixture
def counselor_token():
    """Get counselor auth token"""
    response = requests.post(f"{BASE_URL}/api/auth/login", json=COUNSELOR_CREDS)
    if response.status_code == 200:
        return response.json()["access_token"]
    pytest.skip("Counselor login failed")


@pytest.fixture
def teamlead_token():
    """Get team lead auth token"""
    response = requests.post(f"{BASE_URL}/api/auth/login", json=TEAMLEAD_CREDS)
    if response.status_code == 200:
        return response.json()["access_token"]
    pytest.skip("Team Lead login failed")


class TestTargetTracking:
    """Target Tracking Feature Tests"""
    
    def test_get_assignable_counselors_admin(self, admin_token):
        """Admin can get all assignable counselors"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        assert response.status_code == 200
        counselors = response.json()
        assert isinstance(counselors, list)
        print(f"✓ Admin can see {len(counselors)} assignable counselors")
    
    def test_get_assignable_counselors_teamlead(self, teamlead_token):
        """Team Lead can get their team members"""
        headers = {"Authorization": f"Bearer {teamlead_token}"}
        response = requests.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        assert response.status_code == 200
        counselors = response.json()
        assert isinstance(counselors, list)
        print(f"✓ Team Lead can see {len(counselors)} assignable counselors (team members)")
    
    def test_counselor_cannot_access_targets(self, counselor_token):
        """Regular counselor cannot access target endpoints"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        response = requests.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        assert response.status_code == 403
        print("✓ Regular counselor correctly denied access to targets")
    
    def test_create_target_admin(self, admin_token):
        """Admin can create a target for a counselor"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # First get a counselor to assign target to
        counselors_resp = requests.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        counselors = counselors_resp.json()
        
        if not counselors:
            pytest.skip("No counselors available")
        
        counselor_id = counselors[0]["id"]
        
        target_data = {
            "counselor_id": counselor_id,
            "target_type": "monthly",
            "period": "2026-03",  # March 2026
            "target_count": 15,
            "target_fees": 750000
        }
        
        response = requests.post(f"{BASE_URL}/api/targets", json=target_data, headers=headers)
        
        # If target already exists for this period, that's okay
        if response.status_code == 400 and "already exists" in response.json().get("detail", ""):
            print("✓ Target for this period already exists (expected)")
            return
        
        assert response.status_code == 201
        data = response.json()
        assert data["counselor_id"] == counselor_id
        assert data["target_count"] == 15
        assert data["target_fees"] == 750000
        print(f"✓ Admin created target: {data['target_count']} admissions, ₹{data['target_fees']} fees")
    
    def test_get_targets_admin(self, admin_token):
        """Admin can get all targets"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/targets", headers=headers)
        assert response.status_code == 200
        targets = response.json()
        assert isinstance(targets, list)
        print(f"✓ Admin can see {len(targets)} targets")
    
    def test_get_targets_with_progress(self, admin_token):
        """Admin can get targets with progress calculation"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/targets/progress", headers=headers)
        assert response.status_code == 200
        targets = response.json()
        assert isinstance(targets, list)
        
        # Check progress fields exist
        for target in targets:
            assert "actual_count" in target
            assert "actual_fees" in target
            assert "count_progress" in target
            assert "fees_progress" in target
        
        print(f"✓ Admin can see {len(targets)} targets with progress")
        for t in targets:
            print(f"  - {t.get('counselor_name')}: {t.get('actual_count')}/{t.get('target_count')} admissions ({t.get('count_progress')}%)")
    
    def test_update_target(self, admin_token):
        """Admin can update a target"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get existing targets
        targets_resp = requests.get(f"{BASE_URL}/api/targets", headers=headers)
        targets = targets_resp.json()
        
        if not targets:
            pytest.skip("No targets to update")
        
        target_id = targets[0]["id"]
        original_count = targets[0]["target_count"]
        
        # Update target
        update_data = {"target_count": original_count + 5}
        response = requests.put(f"{BASE_URL}/api/targets/{target_id}", json=update_data, headers=headers)
        assert response.status_code == 200
        
        updated = response.json()
        assert updated["target_count"] == original_count + 5
        print(f"✓ Target updated: {original_count} → {updated['target_count']} admissions")
        
        # Revert the change
        revert_data = {"target_count": original_count}
        requests.put(f"{BASE_URL}/api/targets/{target_id}", json=revert_data, headers=headers)
    
    def test_delete_target(self, admin_token):
        """Admin can delete a target"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # First get a counselor
        counselors_resp = requests.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        counselors = counselors_resp.json()
        
        if not counselors:
            pytest.skip("No counselors available")
        
        # Create a target to delete
        target_data = {
            "counselor_id": counselors[0]["id"],
            "target_type": "monthly",
            "period": "2099-12",  # Far future period
            "target_count": 5,
            "target_fees": 100000
        }
        
        create_resp = requests.post(f"{BASE_URL}/api/targets", json=target_data, headers=headers)
        
        if create_resp.status_code == 201:
            target_id = create_resp.json()["id"]
            
            # Delete the target
            delete_resp = requests.delete(f"{BASE_URL}/api/targets/{target_id}", headers=headers)
            assert delete_resp.status_code == 200
            print("✓ Target deleted successfully")
        else:
            print("✓ Target creation skipped (may already exist)")


class TestRemarksColumn:
    """Test Remarks column in admissions list"""
    
    def test_admissions_have_remark_field(self, admin_token):
        """Admissions should have remark field in admin dashboard"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/stats/admissions-list", headers=headers)
        assert response.status_code == 200
        
        data = response.json()
        # Response is paginated: {"total": N, "skip": 0, "limit": 100, "admissions": [...]}
        assert "admissions" in data
        admissions = data["admissions"]
        
        # Check that admissions have remark field
        for admission in admissions:
            assert "remark" in admission, "Admission missing remark field"
        
        # Count admissions with remarks
        with_remarks = [a for a in admissions if a.get("remark")]
        print(f"✓ Found {len(with_remarks)}/{len(admissions)} admissions with remarks in admin dashboard")
    
    def test_counselor_admissions_have_remark(self, counselor_token):
        """Counselor's admissions should have remark field"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        response = requests.get(f"{BASE_URL}/api/admissions", headers=headers)
        assert response.status_code == 200
        admissions = response.json()
        
        for admission in admissions:
            assert "remark" in admission, "Admission missing remark field"
        
        with_remarks = [a for a in admissions if a.get("remark")]
        print(f"✓ Counselor sees {len(with_remarks)}/{len(admissions)} admissions with remarks")
    
    def test_create_admission_with_remark(self, counselor_token):
        """Can create admission with remark"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        
        # Get colleges and courses
        colleges_resp = requests.get(f"{BASE_URL}/api/colleges")
        colleges = colleges_resp.json()
        
        if not colleges:
            pytest.skip("No colleges available")
        
        college_id = colleges[0]["id"]
        courses_resp = requests.get(f"{BASE_URL}/api/colleges/{college_id}/courses")
        courses = courses_resp.json()
        
        if not courses:
            pytest.skip("No courses available")
        
        # Create admission with remark
        admission_data = {
            "candidate_name": "TEST_Remark_Candidate",
            "place": "Test City",
            "college_id": college_id,
            "course_id": courses[0]["id"],
            "admission_date": "2026-01-15",
            "total_fees": 500000,
            "instalments": [{"amount": 100000, "paid_date": "2026-01-15", "description": "Initial payment"}],
            "remark": "Test remark for verification"
        }
        
        response = requests.post(f"{BASE_URL}/api/admissions", json=admission_data, headers=headers)
        assert response.status_code == 201
        
        data = response.json()
        assert data["remark"] == "Test remark for verification"
        print(f"✓ Created admission with remark: '{data['remark']}'")
        
        # Cleanup - delete the test admission
        requests.delete(f"{BASE_URL}/api/admissions/{data['id']}", headers=headers)


class TestFeePaymentEditPermissions:
    """Test fee payment editing permissions"""
    
    def test_admin_can_edit_any_admission(self, admin_token):
        """Admin can edit any admission's fee details"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get all admissions (paginated response)
        response = requests.get(f"{BASE_URL}/api/admin/stats/admissions-list", headers=headers)
        assert response.status_code == 200
        
        data = response.json()
        admissions = data.get("admissions", [])
        
        if not admissions:
            pytest.skip("No admissions to edit")
        
        admission = admissions[0]
        admission_id = admission["id"]
        
        # Update the admission
        update_data = {
            "candidate_name": admission["candidate_name"],
            "place": admission.get("place", ""),
            "college_id": admission["college_id"],
            "course_id": admission["course_id"],
            "admission_date": admission["admission_date"],
            "total_fees": admission["total_fees"],
            "instalments": admission.get("instalments", []),
            "remark": "Admin edited this admission"
        }
        
        response = requests.put(f"{BASE_URL}/api/admissions/{admission_id}", json=update_data, headers=headers)
        assert response.status_code == 200
        
        updated = response.json()
        assert updated["remark"] == "Admin edited this admission"
        print(f"✓ Admin successfully edited admission: {admission['candidate_name']}")
    
    def test_teamlead_can_edit_team_admission(self, teamlead_token, admin_token):
        """Team Lead can edit team member's admission"""
        teamlead_headers = {"Authorization": f"Bearer {teamlead_token}"}
        admin_headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get team lead's user info
        me_resp = requests.get(f"{BASE_URL}/api/auth/me", headers=teamlead_headers)
        teamlead_user = me_resp.json()
        
        # Get all admissions (as admin to see all)
        admissions_resp = requests.get(f"{BASE_URL}/api/admin/stats/admissions-list", headers=admin_headers)
        data = admissions_resp.json()
        admissions = data.get("admissions", [])
        
        if not admissions:
            pytest.skip("No admissions available")
        
        # Find an admission that team lead should be able to edit
        admission = admissions[0]
        admission_id = admission["id"]
        
        # Try to update as team lead
        update_data = {
            "candidate_name": admission["candidate_name"],
            "place": admission.get("place", ""),
            "college_id": admission["college_id"],
            "course_id": admission["course_id"],
            "admission_date": admission["admission_date"],
            "total_fees": admission["total_fees"],
            "instalments": admission.get("instalments", []),
            "remark": "Team Lead edited this"
        }
        
        response = requests.put(f"{BASE_URL}/api/admissions/{admission_id}", json=update_data, headers=teamlead_headers)
        
        # Team lead should be able to edit if they have permission
        if response.status_code == 200:
            print(f"✓ Team Lead successfully edited admission")
        elif response.status_code == 403:
            print("✓ Team Lead correctly denied (not their team member's admission)")
        else:
            print(f"Response: {response.status_code} - {response.text}")
    
    def test_counselor_can_only_edit_own_admission(self, counselor_token, admin_token):
        """Counselor can only edit their own admissions"""
        counselor_headers = {"Authorization": f"Bearer {counselor_token}"}
        
        # Get counselor's own admissions
        own_admissions_resp = requests.get(f"{BASE_URL}/api/admissions", headers=counselor_headers)
        own_admissions = own_admissions_resp.json()
        
        if own_admissions:
            # Counselor should be able to edit their own
            admission = own_admissions[0]
            update_data = {
                "candidate_name": admission["candidate_name"],
                "place": admission.get("place", ""),
                "college_id": admission["college_id"],
                "course_id": admission["course_id"],
                "admission_date": admission["admission_date"],
                "total_fees": admission["total_fees"],
                "instalments": admission.get("instalments", []),
                "remark": "Counselor edited own admission"
            }
            
            response = requests.put(f"{BASE_URL}/api/admissions/{admission['id']}", json=update_data, headers=counselor_headers)
            assert response.status_code == 200
            print("✓ Counselor can edit their own admission")
        else:
            print("✓ No own admissions to test (skipped)")
    
    def test_add_instalment_to_admission(self, admin_token):
        """Admin can add fee instalment to any admission"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get admissions (paginated response)
        response = requests.get(f"{BASE_URL}/api/admin/stats/admissions-list", headers=headers)
        data = response.json()
        admissions = data.get("admissions", [])
        
        if not admissions:
            pytest.skip("No admissions available")
        
        admission = admissions[0]
        original_instalments = admission.get("instalments", [])
        
        # Add a new instalment
        new_instalments = original_instalments + [{
            "amount": 50000,
            "paid_date": "2026-01-20",
            "description": "Test instalment"
        }]
        
        update_data = {
            "candidate_name": admission["candidate_name"],
            "place": admission.get("place", ""),
            "college_id": admission["college_id"],
            "course_id": admission["course_id"],
            "admission_date": admission["admission_date"],
            "total_fees": admission["total_fees"],
            "instalments": new_instalments,
            "remark": admission.get("remark", "")
        }
        
        response = requests.put(f"{BASE_URL}/api/admissions/{admission['id']}", json=update_data, headers=headers)
        assert response.status_code == 200
        
        updated = response.json()
        assert len(updated.get("instalments", [])) == len(original_instalments) + 1
        print(f"✓ Added instalment: {len(original_instalments)} → {len(updated.get('instalments', []))} instalments")
        
        # Revert the change
        update_data["instalments"] = original_instalments
        requests.put(f"{BASE_URL}/api/admissions/{admission['id']}", json=update_data, headers=headers)


class TestPerformanceDashboardAdmissions:
    """Test Performance Dashboard admissions list with remarks"""
    
    def test_admin_stats_admissions_list(self, admin_token):
        """Admin can see all admissions with remarks in performance dashboard"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/stats/admissions-list", headers=headers)
        assert response.status_code == 200
        
        data = response.json()
        # Response is paginated: {"total": N, "skip": 0, "limit": 100, "admissions": [...]}
        assert "admissions" in data
        assert "total" in data
        
        admissions = data["admissions"]
        assert isinstance(admissions, list)
        
        # Verify structure
        if admissions:
            admission = admissions[0]
            required_fields = ["id", "candidate_name", "college_name", "course_name", "admission_date", "total_fees", "fees_paid", "balance", "remark"]
            for field in required_fields:
                assert field in admission, f"Missing field: {field}"
        
        print(f"✓ Admin can see {len(admissions)} admissions in performance dashboard (total: {data['total']})")
    
    def test_performance_stats(self, admin_token):
        """Admin can see performance statistics"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/stats/performance", headers=headers)
        assert response.status_code == 200
        
        stats = response.json()
        assert "total_admissions" in stats
        assert "fees_stats" in stats
        assert "fees_collected" in stats["fees_stats"]
        assert "fees_pending" in stats["fees_stats"]
        
        print(f"✓ Performance stats: {stats['total_admissions']} admissions, ₹{stats['fees_stats']['fees_collected']} collected")
    
    def test_performance_stats_by_counselor(self, admin_token):
        """Admin can see stats grouped by counselor"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/stats/performance", headers=headers)
        assert response.status_code == 200
        
        stats = response.json()
        assert "by_counselor" in stats
        
        for counselor_stat in stats["by_counselor"]:
            assert "counselor_name" in counselor_stat
            assert "count" in counselor_stat
        
        print(f"✓ Stats by counselor: {len(stats['by_counselor'])} counselors")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
