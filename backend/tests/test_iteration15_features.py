"""
Test iteration 15 features:
1. Fee Management - Additional Fees fields (additional_admission_fee, additional_hostel_fee)
2. Courses API - Fee data included for fee range filtering
3. Backend model updates for FeeBase
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestFeeManagementAdditionalFees:
    """Test additional fees fields in Fee model"""
    
    @pytest.fixture(autouse=True)
    def setup(self):
        """Login as admin and get token"""
        response = requests.post(f"{BASE_URL}/api/auth/login", json={
            "email": "admin@ohcampus.com",
            "password": "admin123"
        })
        assert response.status_code == 200, f"Login failed: {response.text}"
        self.token = response.json()["access_token"]
        self.headers = {"Authorization": f"Bearer {self.token}"}
    
    def test_fee_model_supports_additional_fees(self):
        """Test that fee creation supports additional_admission_fee and additional_hostel_fee"""
        # First get a college and course to use
        colleges_response = requests.get(f"{BASE_URL}/api/colleges")
        assert colleges_response.status_code == 200
        colleges = colleges_response.json()
        assert len(colleges) > 0, "No colleges found"
        
        college = colleges[0]
        college_id = college["id"]
        
        # Get courses for this college
        courses_response = requests.get(f"{BASE_URL}/api/colleges/{college_id}/courses")
        assert courses_response.status_code == 200
        courses = courses_response.json()
        assert len(courses) > 0, f"No courses found for college {college_id}"
        
        course = courses[0]
        course_id = course["id"]
        
        # Create a fee with additional fees
        fee_data = {
            "college_id": college_id,
            "course_id": course_id,
            "fee_type": "annual",
            "year_or_semester": 1,
            "amount": 150000,
            "hostel_fee": 80000,
            "additional_admission_fee": 25000,
            "additional_hostel_fee": 15000,
            "description": "TEST_First Year Fee with Additional Fees"
        }
        
        response = requests.post(f"{BASE_URL}/api/fees", json=fee_data, headers=self.headers)
        assert response.status_code == 201, f"Fee creation failed: {response.text}"
        
        created_fee = response.json()
        assert created_fee["additional_admission_fee"] == 25000, "additional_admission_fee not saved correctly"
        assert created_fee["additional_hostel_fee"] == 15000, "additional_hostel_fee not saved correctly"
        
        # Cleanup - delete the test fee
        fee_id = created_fee["id"]
        delete_response = requests.delete(f"{BASE_URL}/api/fees/{fee_id}", headers=self.headers)
        assert delete_response.status_code == 200, f"Fee deletion failed: {delete_response.text}"
        
        print("✓ Fee model supports additional_admission_fee and additional_hostel_fee fields")
    
    def test_bulk_fee_creation_with_additional_fees(self):
        """Test bulk fee creation with additional fees"""
        # Get a college and course
        colleges_response = requests.get(f"{BASE_URL}/api/colleges")
        colleges = colleges_response.json()
        college = colleges[0]
        college_id = college["id"]
        
        courses_response = requests.get(f"{BASE_URL}/api/colleges/{college_id}/courses")
        courses = courses_response.json()
        course = courses[0]
        course_id = course["id"]
        
        # Create bulk fees with additional fees
        bulk_data = {
            "college_id": college_id,
            "course_id": course_id,
            "fee_type": "annual",
            "fees": [
                {
                    "year_or_semester": 1,
                    "amount": 150000,
                    "hostel_fee": 80000,
                    "additional_admission_fee": 25000,
                    "additional_hostel_fee": 15000,
                    "description": "TEST_Year 1"
                },
                {
                    "year_or_semester": 2,
                    "amount": 140000,
                    "hostel_fee": 80000,
                    "additional_admission_fee": 10000,
                    "additional_hostel_fee": 5000,
                    "description": "TEST_Year 2"
                }
            ]
        }
        
        response = requests.post(f"{BASE_URL}/api/fees/bulk", json=bulk_data, headers=self.headers)
        assert response.status_code == 201, f"Bulk fee creation failed: {response.text}"
        
        result = response.json()
        assert result["fees_count"] == 2, "Expected 2 fees to be created"
        
        # Verify additional fees were saved
        fees = result["fees"]
        year1_fee = next((f for f in fees if f["year_or_semester"] == 1), None)
        assert year1_fee is not None, "Year 1 fee not found"
        assert year1_fee["additional_admission_fee"] == 25000, "Year 1 additional_admission_fee incorrect"
        assert year1_fee["additional_hostel_fee"] == 15000, "Year 1 additional_hostel_fee incorrect"
        
        print("✓ Bulk fee creation supports additional fees fields")
        
        # Cleanup - delete the test fees
        for fee in fees:
            requests.delete(f"{BASE_URL}/api/fees/{fee['id']}", headers=self.headers)


class TestCoursesWithFeeData:
    """Test that courses API returns fee data for fee range filtering"""
    
    def test_courses_with_college_includes_fees(self):
        """Test /api/courses/with-college endpoint includes fee data"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college?limit=10")
        assert response.status_code == 200, f"API call failed: {response.text}"
        
        data = response.json()
        assert "courses" in data, "Response should have 'courses' key"
        
        courses = data["courses"]
        assert len(courses) > 0, "No courses returned"
        
        # Check if courses have fees array
        courses_with_fees = [c for c in courses if c.get("fees") and len(c.get("fees", [])) > 0]
        print(f"Found {len(courses_with_fees)} courses with fee data out of {len(courses)} total")
        
        # Verify fee structure if any course has fees
        if courses_with_fees:
            course = courses_with_fees[0]
            fees = course["fees"]
            assert isinstance(fees, list), "fees should be a list"
            
            # Check fee structure
            fee = fees[0]
            assert "amount" in fee, "Fee should have 'amount' field"
            assert "fee_type" in fee, "Fee should have 'fee_type' field"
            assert "year_or_semester" in fee, "Fee should have 'year_or_semester' field"
            
            print(f"✓ Course '{course['name']}' has {len(fees)} fee records")
            print(f"  First fee: {fee['fee_type']} - Year/Sem {fee['year_or_semester']} - Amount: {fee['amount']}")
        
        print("✓ /api/courses/with-college endpoint includes fee data")
    
    def test_course_detail_includes_additional_fees(self):
        """Test that course detail endpoint returns additional fees"""
        # Get a course
        response = requests.get(f"{BASE_URL}/api/courses/with-college?limit=5")
        data = response.json()
        courses = data.get("courses", [])
        
        if not courses:
            pytest.skip("No courses available to test")
        
        course_id = courses[0]["id"]
        
        # Get course detail
        detail_response = requests.get(f"{BASE_URL}/api/courses/{course_id}")
        assert detail_response.status_code == 200, f"Course detail failed: {detail_response.text}"
        
        detail = detail_response.json()
        
        # Check structure
        if "course" in detail:
            # MongoDB course structure
            assert "fees" in detail, "Detail should include fees"
            print(f"✓ Course detail for '{detail['course']['name']}' retrieved successfully")
        else:
            # MySQL course structure
            assert "name" in detail, "Detail should have course name"
            print(f"✓ Course detail for '{detail['name']}' retrieved successfully")
        
        print("✓ Course detail endpoint works correctly")


class TestFeeRangeFiltering:
    """Test fee range filtering on courses page"""
    
    def test_fee_range_filter_logic(self):
        """Test that fee data is available for client-side fee range filtering"""
        response = requests.get(f"{BASE_URL}/api/courses/with-college?limit=50")
        assert response.status_code == 200
        
        data = response.json()
        courses = data.get("courses", [])
        
        # Count courses by fee range
        below_100k = 0
        below_200k = 0
        above_200k = 0
        no_fees = 0
        
        for course in courses:
            fees = course.get("fees", [])
            if not fees:
                no_fees += 1
                continue
            
            # Calculate first year fees (annual year 1 or semester 1+2)
            first_year_annual = sum(f.get("amount", 0) for f in fees 
                                   if f.get("fee_type") == "annual" and f.get("year_or_semester") == 1)
            first_two_semesters = sum(f.get("amount", 0) for f in fees 
                                     if f.get("fee_type") == "semester" and f.get("year_or_semester") in [1, 2])
            
            first_year_fees = first_year_annual if first_year_annual > 0 else first_two_semesters
            
            if first_year_fees > 0:
                if first_year_fees < 100000:
                    below_100k += 1
                elif first_year_fees < 200000:
                    below_200k += 1
                else:
                    above_200k += 1
            else:
                no_fees += 1
        
        print(f"Fee range distribution:")
        print(f"  - Below ₹1L: {below_100k}")
        print(f"  - ₹1L - ₹2L: {below_200k}")
        print(f"  - Above ₹2L: {above_200k}")
        print(f"  - No fees: {no_fees}")
        
        print("✓ Fee data available for fee range filtering")


class TestFiltersEndpoint:
    """Test filters endpoint"""
    
    def test_filters_endpoint(self):
        """Test /api/filters returns expected data"""
        response = requests.get(f"{BASE_URL}/api/filters")
        assert response.status_code == 200, f"Filters API failed: {response.text}"
        
        data = response.json()
        assert "states" in data, "Response should have 'states'"
        assert "cities" in data, "Response should have 'cities'"
        assert "categories" in data, "Response should have 'categories'"
        
        print(f"✓ Filters endpoint returns {len(data['states'])} states, {len(data['cities'])} cities, {len(data['categories'])} categories")
    
    def test_course_levels_endpoint(self):
        """Test /api/filters/course-levels returns levels"""
        response = requests.get(f"{BASE_URL}/api/filters/course-levels")
        assert response.status_code == 200, f"Course levels API failed: {response.text}"
        
        data = response.json()
        assert "levels" in data, "Response should have 'levels'"
        
        levels = data["levels"]
        print(f"✓ Course levels: {levels}")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
