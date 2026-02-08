"""
Test file for Iteration 9 features:
1. Profile page - GET /api/profile, PUT /api/profile, PUT /api/profile/password
2. Activity Log page - GET /api/admin/activity-logs, GET /api/admin/activity-logs/actions
3. Password Reset - PUT /api/admin/users/{id}/reset-password
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
    
    def test_admin_login(self):
        """Test admin login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        assert response.status_code == 200, f"Admin login failed: {response.text}"
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "admin"
        print(f"✓ Admin login successful")
    
    def test_counselor_login(self):
        """Test counselor login"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        assert response.status_code == 200, f"Counselor login failed: {response.text}"
        data = response.json()
        assert "access_token" in data
        assert data["user"]["role"] == "counselor"
        print(f"✓ Counselor login successful")


class TestProfileEndpoints:
    """Profile API tests"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    @pytest.fixture
    def counselor_token(self):
        """Get counselor auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_get_profile_admin(self, admin_token):
        """Test GET /api/profile for admin"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/profile", headers=headers)
        assert response.status_code == 200, f"Get profile failed: {response.text}"
        data = response.json()
        assert "id" in data
        assert "email" in data
        assert data["email"] == ADMIN_EMAIL
        assert "password_hash" not in data  # Should not expose password hash
        print(f"✓ GET /api/profile returns admin data correctly")
    
    def test_get_profile_counselor(self, counselor_token):
        """Test GET /api/profile for counselor"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        response = requests.get(f"{BASE_URL}/api/profile", headers=headers)
        assert response.status_code == 200, f"Get profile failed: {response.text}"
        data = response.json()
        assert "id" in data
        assert "email" in data
        assert data["email"] == COUNSELOR_EMAIL
        print(f"✓ GET /api/profile returns counselor data correctly")
    
    def test_update_profile_name_and_phone(self, counselor_token):
        """Test PUT /api/profile updates name and phone"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        
        # First get current profile
        response = requests.get(f"{BASE_URL}/api/profile", headers=headers)
        original_data = response.json()
        
        # Update profile
        update_data = {
            "name": "Updated Counselor Name",
            "phone": "9876543210"
        }
        response = requests.put(f"{BASE_URL}/api/profile", headers=headers, json=update_data)
        assert response.status_code == 200, f"Update profile failed: {response.text}"
        data = response.json()
        assert data["name"] == "Updated Counselor Name"
        assert data["phone"] == "9876543210"
        print(f"✓ PUT /api/profile updates name and phone correctly")
        
        # Restore original data
        restore_data = {
            "name": original_data.get("name", "Demo Counselor"),
            "phone": original_data.get("phone", "")
        }
        requests.put(f"{BASE_URL}/api/profile", headers=headers, json=restore_data)
    
    def test_update_profile_partial(self, counselor_token):
        """Test PUT /api/profile with partial update (only name)"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        
        # Get current profile
        response = requests.get(f"{BASE_URL}/api/profile", headers=headers)
        original_data = response.json()
        
        # Update only name
        update_data = {"name": "Partial Update Test"}
        response = requests.put(f"{BASE_URL}/api/profile", headers=headers, json=update_data)
        assert response.status_code == 200, f"Partial update failed: {response.text}"
        data = response.json()
        assert data["name"] == "Partial Update Test"
        print(f"✓ PUT /api/profile partial update works correctly")
        
        # Restore original
        requests.put(f"{BASE_URL}/api/profile", headers=headers, json={"name": original_data.get("name", "Demo Counselor")})
    
    def test_get_profile_unauthorized(self):
        """Test GET /api/profile without auth returns 401"""
        response = requests.get(f"{BASE_URL}/api/profile")
        assert response.status_code == 401, f"Expected 401, got {response.status_code}"
        print(f"✓ GET /api/profile returns 401 without auth")


class TestPasswordChange:
    """Password change tests"""
    
    @pytest.fixture
    def test_user_token(self):
        """Create a test user and get token"""
        # Login as admin to create test user
        admin_response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        admin_token = admin_response.json()["access_token"]
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Create test user
        test_user_data = {
            "name": "Password Test User",
            "email": "pwdtest@test.com",
            "password": "oldpass123",
            "designation": "Admission Counselor"
        }
        
        # Try to create, if exists, delete first
        users_response = requests.get(f"{BASE_URL}/api/admin/users", headers=headers)
        users = users_response.json()
        for user in users:
            if user["email"] == "pwdtest@test.com":
                requests.delete(f"{BASE_URL}/api/admin/users/{user['id']}", headers=headers)
        
        create_response = requests.post(f"{BASE_URL}/api/admin/users", headers=headers, json=test_user_data)
        
        # Login as test user
        login_response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "pwdtest@test.com",
            "password": "oldpass123"
        })
        
        if login_response.status_code != 200:
            pytest.skip("Could not create test user for password change test")
        
        return login_response.json()["access_token"]
    
    def test_change_password_success(self, test_user_token):
        """Test PUT /api/profile/password changes password"""
        headers = {"Authorization": f"Bearer {test_user_token}"}
        
        # Change password
        password_data = {
            "current_password": "oldpass123",
            "new_password": "newpass456"
        }
        response = requests.put(f"{BASE_URL}/api/profile/password", headers=headers, json=password_data)
        assert response.status_code == 200, f"Password change failed: {response.text}"
        data = response.json()
        assert "message" in data
        print(f"✓ PUT /api/profile/password changes password successfully")
        
        # Verify new password works
        login_response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "pwdtest@test.com",
            "password": "newpass456"
        })
        assert login_response.status_code == 200, "Login with new password failed"
        print(f"✓ Login with new password works")
    
    def test_change_password_wrong_current(self, test_user_token):
        """Test PUT /api/profile/password with wrong current password"""
        headers = {"Authorization": f"Bearer {test_user_token}"}
        
        password_data = {
            "current_password": "wrongpassword",
            "new_password": "newpass456"
        }
        response = requests.put(f"{BASE_URL}/api/profile/password", headers=headers, json=password_data)
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        print(f"✓ PUT /api/profile/password rejects wrong current password")
    
    def test_change_password_too_short(self, test_user_token):
        """Test PUT /api/profile/password with short new password"""
        headers = {"Authorization": f"Bearer {test_user_token}"}
        
        password_data = {
            "current_password": "oldpass123",
            "new_password": "short"
        }
        response = requests.put(f"{BASE_URL}/api/profile/password", headers=headers, json=password_data)
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        print(f"✓ PUT /api/profile/password rejects short password")


class TestActivityLogEndpoints:
    """Activity Log API tests"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    @pytest.fixture
    def counselor_token(self):
        """Get counselor auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_get_activity_logs_admin(self, admin_token):
        """Test GET /api/admin/activity-logs for admin"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs", headers=headers)
        assert response.status_code == 200, f"Get activity logs failed: {response.text}"
        data = response.json()
        assert "logs" in data
        assert "total" in data
        assert isinstance(data["logs"], list)
        print(f"✓ GET /api/admin/activity-logs returns logs for admin (total: {data['total']})")
    
    def test_get_activity_logs_with_pagination(self, admin_token):
        """Test GET /api/admin/activity-logs with pagination"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs", headers=headers, params={
            "skip": 0,
            "limit": 10
        })
        assert response.status_code == 200, f"Get activity logs failed: {response.text}"
        data = response.json()
        assert "skip" in data
        assert "limit" in data
        assert data["skip"] == 0
        assert data["limit"] == 10
        print(f"✓ GET /api/admin/activity-logs pagination works correctly")
    
    def test_get_activity_logs_with_action_filter(self, admin_token):
        """Test GET /api/admin/activity-logs with action filter"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs", headers=headers, params={
            "action": "login"
        })
        assert response.status_code == 200, f"Get activity logs failed: {response.text}"
        data = response.json()
        # All logs should have action = login
        for log in data["logs"]:
            assert log["action"] == "login", f"Expected action 'login', got '{log['action']}'"
        print(f"✓ GET /api/admin/activity-logs action filter works correctly")
    
    def test_get_activity_logs_counselor_denied(self, counselor_token):
        """Test GET /api/admin/activity-logs denied for counselor"""
        headers = {"Authorization": f"Bearer {counselor_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs", headers=headers)
        assert response.status_code == 403, f"Expected 403, got {response.status_code}"
        print(f"✓ GET /api/admin/activity-logs returns 403 for counselor")
    
    def test_get_activity_actions(self, admin_token):
        """Test GET /api/admin/activity-logs/actions"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs/actions", headers=headers)
        assert response.status_code == 200, f"Get actions failed: {response.text}"
        data = response.json()
        assert "actions" in data
        assert isinstance(data["actions"], list)
        assert len(data["actions"]) > 0
        # Check some expected actions
        expected_actions = ["login", "create_admission", "update_profile", "change_password"]
        for action in expected_actions:
            assert action in data["actions"], f"Expected action '{action}' not found"
        print(f"✓ GET /api/admin/activity-logs/actions returns action types ({len(data['actions'])} actions)")


class TestPasswordReset:
    """Admin password reset tests"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    @pytest.fixture
    def counselor_token(self):
        """Get counselor auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": COUNSELOR_EMAIL,
            "password": COUNSELOR_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_reset_password_admin(self, admin_token):
        """Test PUT /api/admin/users/{id}/reset-password by admin"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get users list
        users_response = requests.get(f"{BASE_URL}/api/admin/users", headers=headers)
        users = users_response.json()
        
        # Find a non-admin user to reset password
        target_user = None
        for user in users:
            if user["role"] != "admin" and user["email"] != COUNSELOR_EMAIL:
                target_user = user
                break
        
        if not target_user:
            # Create a test user
            test_user_data = {
                "name": "Reset Test User",
                "email": "resettest@test.com",
                "password": "testpass123",
                "designation": "Admission Counselor"
            }
            create_response = requests.post(f"{BASE_URL}/api/admin/users", headers=headers, json=test_user_data)
            if create_response.status_code == 201:
                target_user = create_response.json()
            else:
                pytest.skip("Could not find or create test user for password reset")
        
        # Reset password
        response = requests.put(f"{BASE_URL}/api/admin/users/{target_user['id']}/reset-password", headers=headers)
        assert response.status_code == 200, f"Password reset failed: {response.text}"
        data = response.json()
        assert "message" in data
        assert "new_password" in data
        print(f"✓ PUT /api/admin/users/{{id}}/reset-password works for admin (new password: {data['new_password']})")
    
    def test_reset_password_counselor_denied(self, counselor_token, admin_token):
        """Test PUT /api/admin/users/{id}/reset-password denied for counselor"""
        # Get a user ID
        admin_headers = {"Authorization": f"Bearer {admin_token}"}
        users_response = requests.get(f"{BASE_URL}/api/admin/users", headers=admin_headers)
        users = users_response.json()
        
        if not users:
            pytest.skip("No users found")
        
        target_user = users[0]
        
        # Try to reset as counselor
        counselor_headers = {"Authorization": f"Bearer {counselor_token}"}
        response = requests.put(f"{BASE_URL}/api/admin/users/{target_user['id']}/reset-password", headers=counselor_headers)
        assert response.status_code == 403, f"Expected 403, got {response.status_code}"
        print(f"✓ PUT /api/admin/users/{{id}}/reset-password returns 403 for counselor")
    
    def test_reset_password_nonexistent_user(self, admin_token):
        """Test PUT /api/admin/users/{id}/reset-password for non-existent user"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        response = requests.put(f"{BASE_URL}/api/admin/users/nonexistent-user-id/reset-password", headers=headers)
        assert response.status_code == 404, f"Expected 404, got {response.status_code}"
        print(f"✓ PUT /api/admin/users/{{id}}/reset-password returns 404 for non-existent user")
    
    def test_set_password_admin(self, admin_token):
        """Test PUT /api/admin/users/{id}/set-password by admin"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get users list
        users_response = requests.get(f"{BASE_URL}/api/admin/users", headers=headers)
        users = users_response.json()
        
        # Find a non-admin user
        target_user = None
        for user in users:
            if user["role"] != "admin" and user["email"] != COUNSELOR_EMAIL:
                target_user = user
                break
        
        if not target_user:
            pytest.skip("No suitable user found for set-password test")
        
        # Set specific password
        response = requests.put(f"{BASE_URL}/api/admin/users/{target_user['id']}/set-password", headers=headers, json={
            "user_id": target_user['id'],
            "new_password": "newsetpass123"
        })
        assert response.status_code == 200, f"Set password failed: {response.text}"
        data = response.json()
        assert "message" in data
        print(f"✓ PUT /api/admin/users/{{id}}/set-password works for admin")


class TestActivityLogging:
    """Test that activities are being logged"""
    
    @pytest.fixture
    def admin_token(self):
        """Get admin auth token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": ADMIN_EMAIL,
            "password": ADMIN_PASSWORD
        })
        return response.json()["access_token"]
    
    def test_login_creates_activity_log(self, admin_token):
        """Test that login creates an activity log entry"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Get activity logs filtered by login action
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs", headers=headers, params={
            "action": "login",
            "limit": 5
        })
        assert response.status_code == 200
        data = response.json()
        
        # Should have at least one login log
        assert len(data["logs"]) > 0, "No login activity logs found"
        
        # Check log structure
        log = data["logs"][0]
        assert "user_id" in log
        assert "user_name" in log
        assert "user_email" in log
        assert "action" in log
        assert "created_at" in log
        print(f"✓ Login activity is being logged correctly")
    
    def test_profile_update_creates_activity_log(self, admin_token):
        """Test that profile update creates an activity log entry"""
        headers = {"Authorization": f"Bearer {admin_token}"}
        
        # Update profile
        requests.put(f"{BASE_URL}/api/profile", headers=headers, json={"name": "Admin User"})
        
        # Get activity logs filtered by update_profile action
        response = requests.get(f"{BASE_URL}/api/admin/activity-logs", headers=headers, params={
            "action": "update_profile",
            "limit": 5
        })
        assert response.status_code == 200
        data = response.json()
        
        # Should have at least one update_profile log
        assert len(data["logs"]) > 0, "No update_profile activity logs found"
        print(f"✓ Profile update activity is being logged correctly")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
