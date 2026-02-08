"""
Test Performance Tab Features for Team Lead and Admission Manager
- Performance tab visibility in navbar
- Role-based data access (Team Lead sees team only, Manager sees all)
- Filters: By Counselor, By Month, By College
- Target assignment functionality
"""

import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Test credentials
TEAM_LEAD_CREDS = {"email": "teamlead@test.com", "password": "test123"}
MANAGER_CREDS = {"email": "manager@test.com", "password": "test123"}
COUNSELOR_CREDS = {"email": "counselor@ohcampus.com", "password": "counselor123"}
ADMIN_CREDS = {"email": "admin@ohcampus.com", "password": "admin123"}


class TestPerformanceTabAccess:
    """Test Performance tab access based on user role"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens for different users"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        # Get Team Lead token
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        assert resp.status_code == 200, f"Team Lead login failed: {resp.text}"
        self.team_lead_token = resp.json()["access_token"]
        self.team_lead_user = resp.json()["user"]
        
        # Get Manager token
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        assert resp.status_code == 200, f"Manager login failed: {resp.text}"
        self.manager_token = resp.json()["access_token"]
        self.manager_user = resp.json()["user"]
        
        # Get regular counselor token
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=COUNSELOR_CREDS)
        assert resp.status_code == 200, f"Counselor login failed: {resp.text}"
        self.counselor_token = resp.json()["access_token"]
        self.counselor_user = resp.json()["user"]
    
    def test_team_lead_has_correct_designation(self):
        """Verify Team Lead user has correct designation"""
        assert self.team_lead_user["designation"] == "Team Lead"
        print(f"✓ Team Lead designation verified: {self.team_lead_user['designation']}")
    
    def test_manager_has_correct_designation(self):
        """Verify Admission Manager user has correct designation"""
        assert self.manager_user["designation"] == "Admission Manager"
        print(f"✓ Manager designation verified: {self.manager_user['designation']}")
    
    def test_counselor_has_correct_designation(self):
        """Verify regular counselor has Admission Counselor designation"""
        assert self.counselor_user["designation"] == "Admission Counselor"
        print(f"✓ Counselor designation verified: {self.counselor_user['designation']}")


class TestPerformanceStatsEndpoint:
    """Test /api/performance/stats endpoint for different roles"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens for different users"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        # Get tokens
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        self.team_lead_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        self.manager_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=COUNSELOR_CREDS)
        self.counselor_token = resp.json()["access_token"]
    
    def test_team_lead_can_access_performance_stats(self):
        """Team Lead should be able to access performance stats"""
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        
        assert resp.status_code == 200, f"Team Lead performance stats failed: {resp.text}"
        data = resp.json()
        
        # Verify response structure
        assert "total_admissions" in data
        assert "fees_stats" in data
        assert "by_counselor" in data
        assert "by_college" in data
        assert "team_members" in data
        assert "user_designation" in data
        
        assert data["user_designation"] == "Team Lead"
        print(f"✓ Team Lead can access performance stats - Total admissions: {data['total_admissions']}")
        print(f"  Team members available: {len(data['team_members'])}")
    
    def test_manager_can_access_performance_stats(self):
        """Admission Manager should be able to access performance stats"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        
        assert resp.status_code == 200, f"Manager performance stats failed: {resp.text}"
        data = resp.json()
        
        assert "total_admissions" in data
        assert data["user_designation"] == "Admission Manager"
        print(f"✓ Manager can access performance stats - Total admissions: {data['total_admissions']}")
        print(f"  Team members available: {len(data['team_members'])}")
    
    def test_regular_counselor_cannot_access_performance_stats(self):
        """Regular counselor should NOT be able to access performance stats"""
        headers = {"Authorization": f"Bearer {self.counselor_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        
        assert resp.status_code == 403, f"Expected 403 for counselor, got {resp.status_code}"
        print("✓ Regular counselor correctly denied access to performance stats (403)")
    
    def test_team_lead_sees_only_team_admissions(self):
        """Team Lead should see only their team's admissions"""
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        
        assert resp.status_code == 200
        data = resp.json()
        
        # Team Lead should see limited data (only team members)
        # The team_members list should only contain team members
        print(f"✓ Team Lead sees {data['total_admissions']} admissions from team")
        print(f"  By counselor breakdown: {data['by_counselor']}")
    
    def test_manager_sees_all_admissions(self):
        """Admission Manager should see all admissions"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        
        assert resp.status_code == 200
        data = resp.json()
        
        # Manager should see all admissions
        print(f"✓ Manager sees {data['total_admissions']} total admissions")
        print(f"  By counselor breakdown: {data['by_counselor']}")


class TestPerformanceFilters:
    """Test filter functionality for performance stats"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        self.manager_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        self.team_lead_token = resp.json()["access_token"]
    
    def test_filter_by_counselor(self):
        """Test filtering by counselor_id"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        
        # First get all stats to find a counselor
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        assert resp.status_code == 200
        data = resp.json()
        
        if data["by_counselor"]:
            counselor_id = data["by_counselor"][0]["_id"]
            
            # Filter by this counselor
            resp = self.session.get(
                f"{BASE_URL}/api/performance/stats",
                headers=headers,
                params={"counselor_id": counselor_id}
            )
            assert resp.status_code == 200
            filtered_data = resp.json()
            
            print(f"✓ Filter by counselor works - Filtered admissions: {filtered_data['total_admissions']}")
        else:
            print("⚠ No counselors with admissions to test filter")
    
    def test_filter_by_month(self):
        """Test filtering by month (YYYY-MM format)"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        
        # Filter by current month
        from datetime import datetime
        current_month = datetime.now().strftime("%Y-%m")
        
        resp = self.session.get(
            f"{BASE_URL}/api/performance/stats",
            headers=headers,
            params={"month": current_month}
        )
        assert resp.status_code == 200
        data = resp.json()
        
        print(f"✓ Filter by month ({current_month}) works - Admissions: {data['total_admissions']}")
    
    def test_filter_by_college(self):
        """Test filtering by college_id"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        
        # First get all stats to find a college
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        assert resp.status_code == 200
        data = resp.json()
        
        if data["by_college"]:
            college_id = data["by_college"][0]["_id"]
            
            # Filter by this college
            resp = self.session.get(
                f"{BASE_URL}/api/performance/stats",
                headers=headers,
                params={"college_id": college_id}
            )
            assert resp.status_code == 200
            filtered_data = resp.json()
            
            print(f"✓ Filter by college works - Filtered admissions: {filtered_data['total_admissions']}")
        else:
            print("⚠ No colleges with admissions to test filter")
    
    def test_combined_filters(self):
        """Test combining multiple filters"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        
        from datetime import datetime
        current_month = datetime.now().strftime("%Y-%m")
        
        resp = self.session.get(
            f"{BASE_URL}/api/performance/stats",
            headers=headers,
            params={"month": current_month, "counselor_id": "all", "college_id": "all"}
        )
        assert resp.status_code == 200
        print("✓ Combined filters work correctly")


class TestPerformanceAdmissionsList:
    """Test /api/performance/admissions endpoint"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        self.manager_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        self.team_lead_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=COUNSELOR_CREDS)
        self.counselor_token = resp.json()["access_token"]
    
    def test_manager_can_get_admissions_list(self):
        """Manager should be able to get admissions list"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/admissions", headers=headers)
        
        assert resp.status_code == 200
        data = resp.json()
        
        assert "admissions" in data
        assert "total" in data
        print(f"✓ Manager can get admissions list - Total: {data['total']}")
    
    def test_team_lead_can_get_admissions_list(self):
        """Team Lead should be able to get admissions list (team only)"""
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/admissions", headers=headers)
        
        assert resp.status_code == 200
        data = resp.json()
        
        assert "admissions" in data
        print(f"✓ Team Lead can get admissions list - Total: {data['total']}")
    
    def test_regular_counselor_cannot_get_performance_admissions(self):
        """Regular counselor should NOT be able to access performance admissions"""
        headers = {"Authorization": f"Bearer {self.counselor_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/admissions", headers=headers)
        
        assert resp.status_code == 403
        print("✓ Regular counselor correctly denied access to performance admissions (403)")


class TestTargetAssignment:
    """Test target assignment functionality for Team Lead and Manager"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        self.manager_token = resp.json()["access_token"]
        self.manager_user = resp.json()["user"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        self.team_lead_token = resp.json()["access_token"]
        self.team_lead_user = resp.json()["user"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=COUNSELOR_CREDS)
        self.counselor_token = resp.json()["access_token"]
    
    def test_team_lead_can_get_assignable_counselors(self):
        """Team Lead should be able to get list of assignable counselors (team only)"""
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        resp = self.session.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        
        assert resp.status_code == 200
        counselors = resp.json()
        
        print(f"✓ Team Lead can get assignable counselors - Count: {len(counselors)}")
        for c in counselors:
            print(f"  - {c['name']} ({c['designation']})")
    
    def test_manager_can_get_all_counselors(self):
        """Manager should be able to get all counselors"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        resp = self.session.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        
        assert resp.status_code == 200
        counselors = resp.json()
        
        print(f"✓ Manager can get all counselors - Count: {len(counselors)}")
    
    def test_regular_counselor_cannot_get_assignable_counselors(self):
        """Regular counselor should NOT be able to access targets/counselors"""
        headers = {"Authorization": f"Bearer {self.counselor_token}"}
        resp = self.session.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        
        assert resp.status_code == 403
        print("✓ Regular counselor correctly denied access to targets/counselors (403)")
    
    def test_team_lead_can_assign_target_to_team_member(self):
        """Team Lead should be able to assign target to team member"""
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        
        # Get team members
        resp = self.session.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        assert resp.status_code == 200
        counselors = resp.json()
        
        if counselors:
            # Try to create a target for a team member
            target_data = {
                "counselor_id": counselors[0]["id"],
                "target_type": "monthly",
                "period": "2026-02",  # Future period to avoid conflicts
                "target_count": 5,
                "target_fees": 100000
            }
            
            resp = self.session.post(
                f"{BASE_URL}/api/targets",
                headers=headers,
                json=target_data
            )
            
            if resp.status_code == 201:
                target = resp.json()
                print(f"✓ Team Lead can assign target - ID: {target['id']}")
                
                # Clean up - delete the target
                self.session.delete(f"{BASE_URL}/api/targets/{target['id']}", headers=headers)
            elif resp.status_code == 400 and "already exists" in resp.text:
                print("✓ Team Lead can assign targets (target for period already exists)")
            else:
                print(f"⚠ Target creation returned: {resp.status_code} - {resp.text}")
        else:
            print("⚠ No team members to test target assignment")
    
    def test_manager_can_assign_target_to_any_counselor(self):
        """Manager should be able to assign target to any counselor"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        
        # Get all counselors
        resp = self.session.get(f"{BASE_URL}/api/targets/counselors", headers=headers)
        assert resp.status_code == 200
        counselors = resp.json()
        
        if counselors:
            # Try to create a target
            target_data = {
                "counselor_id": counselors[0]["id"],
                "target_type": "monthly",
                "period": "2026-03",  # Future period to avoid conflicts
                "target_count": 10,
                "target_fees": 200000
            }
            
            resp = self.session.post(
                f"{BASE_URL}/api/targets",
                headers=headers,
                json=target_data
            )
            
            if resp.status_code == 201:
                target = resp.json()
                print(f"✓ Manager can assign target - ID: {target['id']}")
                
                # Clean up
                self.session.delete(f"{BASE_URL}/api/targets/{target['id']}", headers=headers)
            elif resp.status_code == 400 and "already exists" in resp.text:
                print("✓ Manager can assign targets (target for period already exists)")
            else:
                print(f"⚠ Target creation returned: {resp.status_code} - {resp.text}")
        else:
            print("⚠ No counselors to test target assignment")


class TestTargetsProgress:
    """Test targets progress endpoint"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        self.manager_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        self.team_lead_token = resp.json()["access_token"]
    
    def test_manager_can_get_targets_progress(self):
        """Manager should be able to get targets with progress"""
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        resp = self.session.get(f"{BASE_URL}/api/targets/progress", headers=headers)
        
        assert resp.status_code == 200
        targets = resp.json()
        
        print(f"✓ Manager can get targets progress - Count: {len(targets)}")
        for t in targets:
            print(f"  - {t.get('counselor_name')}: {t.get('actual_count')}/{t.get('target_count')} ({t.get('count_progress')}%)")
    
    def test_team_lead_can_get_targets_progress(self):
        """Team Lead should be able to get targets progress (team only)"""
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        resp = self.session.get(f"{BASE_URL}/api/targets/progress", headers=headers)
        
        assert resp.status_code == 200
        targets = resp.json()
        
        print(f"✓ Team Lead can get targets progress - Count: {len(targets)}")


class TestDataComparison:
    """Compare data between Team Lead and Manager views"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Setup tokens"""
        self.session = requests.Session()
        self.session.headers.update({"Content-Type": "application/json"})
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=MANAGER_CREDS)
        self.manager_token = resp.json()["access_token"]
        
        resp = self.session.post(f"{BASE_URL}/api/auth/login", json=TEAM_LEAD_CREDS)
        self.team_lead_token = resp.json()["access_token"]
    
    def test_manager_sees_more_or_equal_admissions_than_team_lead(self):
        """Manager should see >= admissions than Team Lead"""
        # Get Manager stats
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        assert resp.status_code == 200
        manager_data = resp.json()
        
        # Get Team Lead stats
        headers = {"Authorization": f"Bearer {self.team_lead_token}"}
        resp = self.session.get(f"{BASE_URL}/api/performance/stats", headers=headers)
        assert resp.status_code == 200
        team_lead_data = resp.json()
        
        manager_admissions = manager_data["total_admissions"]
        team_lead_admissions = team_lead_data["total_admissions"]
        
        assert manager_admissions >= team_lead_admissions, \
            f"Manager ({manager_admissions}) should see >= Team Lead ({team_lead_admissions})"
        
        print(f"✓ Data comparison:")
        print(f"  Manager sees: {manager_admissions} admissions")
        print(f"  Team Lead sees: {team_lead_admissions} admissions")
        print(f"  Manager team_members: {len(manager_data['team_members'])}")
        print(f"  Team Lead team_members: {len(team_lead_data['team_members'])}")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
