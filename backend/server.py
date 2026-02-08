from fastapi import FastAPI, APIRouter, HTTPException, Depends, status, UploadFile, File
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import hashlib
import jwt
import csv
import io

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# JWT Configuration
JWT_SECRET = os.environ.get('JWT_SECRET', 'ohcampus-secret-key-2024')
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_HOURS = 24

# Create the main app
app = FastAPI(title="OhCampus Counselor Platform API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()

# ===================== MODELS =====================

class UserBase(BaseModel):
    email: str
    name: str
    role: str = "counselor"  # counselor or admin

class UserCreate(UserBase):
    password: str

class User(UserBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict

class CollegeBase(BaseModel):
    name: str
    state: str
    city: str
    category: str
    address: Optional[str] = None
    image_url: Optional[str] = None
    highlights: List[str] = []
    whats_new: List[str] = []
    is_featured: bool = True
    established: Optional[str] = None
    accreditation: Optional[str] = None

class College(CollegeBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class CourseBase(BaseModel):
    name: str
    college_id: str
    duration: str
    level: str  # UG, PG, Doctoral
    duration_years: Optional[int] = None  # For calculating fee periods
    duration_semesters: Optional[int] = None  # For calculating fee periods

class Course(CourseBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))

class FeeBase(BaseModel):
    college_id: str
    course_id: str
    fee_type: str  # annual, semester
    year_or_semester: int  # 1, 2, 3, etc.
    amount: float
    hostel_fee: Optional[float] = None
    admission_fee: Optional[float] = None  # One-time admission charges
    description: Optional[str] = None

class Fee(FeeBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class AdmissionChargesBase(BaseModel):
    college_id: str
    course_id: str
    registration_fee: Optional[float] = None
    admission_fee: Optional[float] = None
    caution_deposit: Optional[float] = None
    uniform_fee: Optional[float] = None
    library_fee: Optional[float] = None
    lab_fee: Optional[float] = None
    other_charges: Optional[float] = None
    other_charges_description: Optional[str] = None

class AdmissionCharges(AdmissionChargesBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class FAQBase(BaseModel):
    question: str
    answer: str
    college_id: Optional[str] = None  # None means global FAQ
    is_global: bool = True
    order: int = 0

class FAQ(FAQBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class FiltersResponse(BaseModel):
    states: List[str]
    cities: List[str]
    categories: List[str]
    courses: List[str] = []

# ===================== HELPERS =====================

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(password: str, hashed: str) -> bool:
    return hash_password(password) == hashed

def create_token(user_id: str, email: str, role: str) -> str:
    payload = {
        "user_id": user_id,
        "email": email,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRATION_HOURS)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        token = credentials.credentials
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

async def require_admin(current_user: dict = Depends(get_current_user)):
    if current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return current_user

# ===================== AUTH ENDPOINTS =====================

@api_router.post("/auth/register", response_model=TokenResponse)
async def register(user_data: UserCreate):
    # Check if user exists
    existing = await db.users.find_one({"email": user_data.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user = User(
        email=user_data.email,
        name=user_data.name,
        role=user_data.role
    )
    user_dict = user.model_dump()
    user_dict["password_hash"] = hash_password(user_data.password)
    
    await db.users.insert_one(user_dict)
    
    token = create_token(user.id, user.email, user.role)
    return TokenResponse(
        access_token=token,
        user={"id": user.id, "email": user.email, "name": user.name, "role": user.role}
    )

@api_router.post("/auth/login", response_model=TokenResponse)
async def login(login_data: LoginRequest):
    user = await db.users.find_one({"email": login_data.email}, {"_id": 0})
    if not user or not verify_password(login_data.password, user.get("password_hash", "")):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_token(user["id"], user["email"], user["role"])
    return TokenResponse(
        access_token=token,
        user={"id": user["id"], "email": user["email"], "name": user["name"], "role": user["role"]}
    )

@api_router.get("/auth/me")
async def get_me(current_user: dict = Depends(get_current_user)):
    user = await db.users.find_one({"id": current_user["user_id"]}, {"_id": 0, "password_hash": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# ===================== FILTERS ENDPOINT =====================

@api_router.get("/filters", response_model=FiltersResponse)
async def get_filters():
    states = await db.colleges.distinct("state", {"is_featured": True})
    cities = await db.colleges.distinct("city", {"is_featured": True})
    categories = await db.colleges.distinct("category", {"is_featured": True})
    courses = await db.courses.distinct("name")
    return FiltersResponse(states=sorted(states), cities=sorted(cities), categories=sorted(categories), courses=sorted(courses))

@api_router.get("/filters/cities")
async def get_cities_by_state(state: Optional[str] = None):
    query = {"is_featured": True}
    if state:
        query["state"] = state
    cities = await db.colleges.distinct("city", query)
    return {"cities": sorted(cities)}

# ===================== COLLEGES ENDPOINTS =====================

@api_router.get("/colleges", response_model=List[College])
async def get_colleges(
    state: Optional[str] = None,
    city: Optional[str] = None,
    category: Optional[str] = None,
    course: Optional[str] = None,
    search: Optional[str] = None
):
    query = {"is_featured": True}
    if state:
        query["state"] = state
    if city:
        query["city"] = city
    if category:
        query["category"] = category
    if search:
        query["name"] = {"$regex": search, "$options": "i"}
    
    # If course filter is applied, get college IDs that have this course
    if course:
        course_docs = await db.courses.find({"name": {"$regex": course, "$options": "i"}}, {"college_id": 1}).to_list(500)
        college_ids = list(set([c["college_id"] for c in course_docs]))
        if college_ids:
            query["id"] = {"$in": college_ids}
        else:
            return []
    
    colleges = await db.colleges.find(query, {"_id": 0}).to_list(100)
    return colleges

@api_router.get("/colleges/compare")
async def compare_colleges(college_ids: str):
    """Compare multiple colleges - pass comma-separated IDs"""
    ids = [id.strip() for id in college_ids.split(",")]
    if len(ids) < 2:
        raise HTTPException(status_code=400, detail="Please provide at least 2 college IDs to compare")
    if len(ids) > 4:
        raise HTTPException(status_code=400, detail="Maximum 4 colleges can be compared at once")
    
    result = []
    for college_id in ids:
        college = await db.colleges.find_one({"id": college_id}, {"_id": 0})
        if college:
            # Get courses for this college
            courses = await db.courses.find({"college_id": college_id}, {"_id": 0}).to_list(100)
            # Get fees for this college
            fees = await db.fees.find({"college_id": college_id}, {"_id": 0}).to_list(100)
            # Get admission charges
            admission_charges = await db.admission_charges.find({"college_id": college_id}, {"_id": 0}).to_list(100)
            
            # Calculate total fees per course (excluding hostel)
            fees_by_course = {}
            for fee in fees:
                course_id = fee["course_id"]
                if course_id not in fees_by_course:
                    fees_by_course[course_id] = {
                        "total_tuition": 0,
                        "total_hostel": 0,
                        "fees": []
                    }
                fees_by_course[course_id]["total_tuition"] += fee.get("amount", 0)
                fees_by_course[course_id]["total_hostel"] += fee.get("hostel_fee", 0) or 0
                fees_by_course[course_id]["fees"].append(fee)
            
            result.append({
                "college": college,
                "courses": courses,
                "fees": fees,
                "fees_by_course": fees_by_course,
                "admission_charges": admission_charges
            })
    
    return result

@api_router.get("/colleges/{college_id}", response_model=College)
async def get_college(college_id: str):
    college = await db.colleges.find_one({"id": college_id}, {"_id": 0})
    if not college:
        raise HTTPException(status_code=404, detail="College not found")
    return college

@api_router.post("/colleges", response_model=College)
async def create_college(college_data: CollegeBase, current_user: dict = Depends(require_admin)):
    college = College(**college_data.model_dump())
    await db.colleges.insert_one(college.model_dump())
    return college

@api_router.put("/colleges/{college_id}", response_model=College)
async def update_college(college_id: str, college_data: CollegeBase, current_user: dict = Depends(require_admin)):
    existing = await db.colleges.find_one({"id": college_id})
    if not existing:
        raise HTTPException(status_code=404, detail="College not found")
    
    update_data = college_data.model_dump()
    await db.colleges.update_one({"id": college_id}, {"$set": update_data})
    
    updated = await db.colleges.find_one({"id": college_id}, {"_id": 0})
    return updated

# ===================== COURSES ENDPOINTS =====================

@api_router.get("/colleges/{college_id}/courses", response_model=List[Course])
async def get_courses(college_id: str):
    courses = await db.courses.find({"college_id": college_id}, {"_id": 0}).to_list(100)
    return courses

@api_router.post("/courses", response_model=Course)
async def create_course(course_data: CourseBase, current_user: dict = Depends(require_admin)):
    course = Course(**course_data.model_dump())
    await db.courses.insert_one(course.model_dump())
    return course

@api_router.get("/courses", response_model=List[Course])
async def get_all_courses():
    courses = await db.courses.find({}, {"_id": 0}).to_list(500)
    return courses

# ===================== FEES ENDPOINTS =====================

@api_router.get("/fees", response_model=List[Fee])
async def get_all_fees(college_id: Optional[str] = None, course_id: Optional[str] = None):
    query = {}
    if college_id:
        query["college_id"] = college_id
    if course_id:
        query["course_id"] = course_id
    fees = await db.fees.find(query, {"_id": 0}).to_list(500)
    return fees

@api_router.get("/colleges/{college_id}/fees", response_model=List[Fee])
async def get_college_fees(college_id: str):
    fees = await db.fees.find({"college_id": college_id}, {"_id": 0}).to_list(100)
    return fees

@api_router.post("/fees", response_model=Fee)
async def create_fee(fee_data: FeeBase, current_user: dict = Depends(require_admin)):
    fee = Fee(**fee_data.model_dump())
    await db.fees.insert_one(fee.model_dump())
    return fee

# Bulk fee creation model
class BulkFeeItem(BaseModel):
    year_or_semester: int
    amount: float
    hostel_fee: Optional[float] = None
    description: Optional[str] = None

class BulkFeeCreate(BaseModel):
    college_id: str
    course_id: str
    fee_type: str  # annual or semester
    fees: List[BulkFeeItem]

@api_router.post("/fees/bulk", status_code=status.HTTP_201_CREATED)
async def create_bulk_fees(bulk_data: BulkFeeCreate, current_user: dict = Depends(require_admin)):
    """Create multiple fees at once for a course (all years or all semesters)"""
    # Validate college exists
    college = await db.colleges.find_one({"id": bulk_data.college_id})
    if not college:
        raise HTTPException(status_code=404, detail="College not found")
    
    # Validate course exists
    course = await db.courses.find_one({"id": bulk_data.course_id})
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    
    # Delete existing fees for this college-course-fee_type combination
    await db.fees.delete_many({
        "college_id": bulk_data.college_id,
        "course_id": bulk_data.course_id,
        "fee_type": bulk_data.fee_type
    })
    
    # Create new fee records
    created_fees = []
    for fee_item in bulk_data.fees:
        fee_data = {
            "id": str(uuid.uuid4()),
            "college_id": bulk_data.college_id,
            "course_id": bulk_data.course_id,
            "fee_type": bulk_data.fee_type,
            "year_or_semester": fee_item.year_or_semester,
            "amount": fee_item.amount,
            "hostel_fee": fee_item.hostel_fee,
            "admission_fee": None,
            "description": fee_item.description,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        }
        await db.fees.insert_one(fee_data)
        created_fees.append(fee_data)
    
    return {
        "message": f"Successfully created {len(created_fees)} fee records",
        "fees_count": len(created_fees),
        "fees": [{k: v for k, v in f.items() if k != '_id'} for f in created_fees]
    }

@api_router.put("/fees/{fee_id}", response_model=Fee)
async def update_fee(fee_id: str, fee_data: FeeBase, current_user: dict = Depends(require_admin)):
    existing = await db.fees.find_one({"id": fee_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Fee not found")
    
    update_data = fee_data.model_dump()
    update_data["updated_at"] = datetime.now(timezone.utc).isoformat()
    await db.fees.update_one({"id": fee_id}, {"$set": update_data})
    
    updated = await db.fees.find_one({"id": fee_id}, {"_id": 0})
    return updated

@api_router.delete("/fees/{fee_id}")
async def delete_fee(fee_id: str, current_user: dict = Depends(require_admin)):
    result = await db.fees.delete_one({"id": fee_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Fee not found")
    return {"message": "Fee deleted successfully"}

# ===================== BULK CSV IMPORT ENDPOINT =====================

@api_router.post("/fees/import-csv")
async def import_fees_csv(file: UploadFile = File(...), current_user: dict = Depends(require_admin)):
    """
    Import fees from CSV file.
    Expected CSV columns: college_id, course_id, fee_type, year_or_semester, amount, hostel_fee, description
    """
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="File must be a CSV")
    
    try:
        content = await file.read()
        decoded = content.decode('utf-8')
        reader = csv.DictReader(io.StringIO(decoded))
        
        imported = 0
        errors = []
        
        for row_num, row in enumerate(reader, start=2):
            try:
                # Validate required fields
                if not row.get('college_id') or not row.get('course_id') or not row.get('amount'):
                    errors.append(f"Row {row_num}: Missing required fields (college_id, course_id, amount)")
                    continue
                
                # Check if college exists
                college = await db.colleges.find_one({"id": row['college_id']})
                if not college:
                    errors.append(f"Row {row_num}: College '{row['college_id']}' not found")
                    continue
                
                # Check if course exists
                course = await db.courses.find_one({"id": row['course_id']})
                if not course:
                    errors.append(f"Row {row_num}: Course '{row['course_id']}' not found")
                    continue
                
                fee_data = {
                    "id": str(uuid.uuid4()),
                    "college_id": row['college_id'],
                    "course_id": row['course_id'],
                    "fee_type": row.get('fee_type', 'annual'),
                    "year_or_semester": int(row.get('year_or_semester', 1)),
                    "amount": float(row['amount']),
                    "hostel_fee": float(row['hostel_fee']) if row.get('hostel_fee') else None,
                    "admission_fee": float(row['admission_fee']) if row.get('admission_fee') else None,
                    "description": row.get('description', ''),
                    "created_at": datetime.now(timezone.utc).isoformat(),
                    "updated_at": datetime.now(timezone.utc).isoformat()
                }
                
                await db.fees.insert_one(fee_data)
                imported += 1
                
            except ValueError as e:
                errors.append(f"Row {row_num}: Invalid number format - {str(e)}")
            except Exception as e:
                errors.append(f"Row {row_num}: {str(e)}")
        
        return {
            "message": f"Import completed. {imported} fees imported successfully.",
            "imported_count": imported,
            "errors": errors[:10] if errors else [],  # Return first 10 errors
            "total_errors": len(errors)
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process CSV: {str(e)}")

@api_router.get("/fees/csv-template")
async def get_csv_template():
    """Get CSV template for fee import"""
    return {
        "columns": ["college_id", "course_id", "fee_type", "year_or_semester", "amount", "hostel_fee", "admission_fee", "description"],
        "example_row": {
            "college_id": "col-1",
            "course_id": "course-1",
            "fee_type": "annual",
            "year_or_semester": "1",
            "amount": "450000",
            "hostel_fee": "120000",
            "admission_fee": "25000",
            "description": "First Year Annual Fee"
        },
        "notes": [
            "fee_type can be 'annual' or 'semester'",
            "year_or_semester should be 1, 2, 3, etc.",
            "hostel_fee and admission_fee are optional",
            "Use college and course IDs from the database"
        ]
    }

# ===================== ADMISSION CHARGES ENDPOINTS =====================

@api_router.get("/admission-charges")
async def get_all_admission_charges(college_id: Optional[str] = None, course_id: Optional[str] = None):
    query = {}
    if college_id:
        query["college_id"] = college_id
    if course_id:
        query["course_id"] = course_id
    charges = await db.admission_charges.find(query, {"_id": 0}).to_list(500)
    return charges

@api_router.get("/colleges/{college_id}/admission-charges")
async def get_college_admission_charges(college_id: str):
    charges = await db.admission_charges.find({"college_id": college_id}, {"_id": 0}).to_list(100)
    return charges

@api_router.post("/admission-charges", response_model=AdmissionCharges)
async def create_admission_charges(data: AdmissionChargesBase, current_user: dict = Depends(require_admin)):
    # Check if already exists for this college-course combo
    existing = await db.admission_charges.find_one({
        "college_id": data.college_id,
        "course_id": data.course_id
    })
    if existing:
        # Update existing
        update_data = data.model_dump()
        update_data["updated_at"] = datetime.now(timezone.utc).isoformat()
        await db.admission_charges.update_one(
            {"college_id": data.college_id, "course_id": data.course_id},
            {"$set": update_data}
        )
        updated = await db.admission_charges.find_one(
            {"college_id": data.college_id, "course_id": data.course_id},
            {"_id": 0}
        )
        return updated
    
    charges = AdmissionCharges(**data.model_dump())
    await db.admission_charges.insert_one(charges.model_dump())
    return charges

@api_router.put("/admission-charges/{charge_id}", response_model=AdmissionCharges)
async def update_admission_charges(charge_id: str, data: AdmissionChargesBase, current_user: dict = Depends(require_admin)):
    existing = await db.admission_charges.find_one({"id": charge_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Admission charges not found")
    
    update_data = data.model_dump()
    update_data["updated_at"] = datetime.now(timezone.utc).isoformat()
    await db.admission_charges.update_one({"id": charge_id}, {"$set": update_data})
    
    updated = await db.admission_charges.find_one({"id": charge_id}, {"_id": 0})
    return updated

@api_router.delete("/admission-charges/{charge_id}")
async def delete_admission_charges(charge_id: str, current_user: dict = Depends(require_admin)):
    result = await db.admission_charges.delete_one({"id": charge_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Admission charges not found")
    return {"message": "Admission charges deleted successfully"}

# ===================== FEE SUMMARY ENDPOINT =====================

@api_router.get("/colleges/{college_id}/fee-summary")
async def get_fee_summary(college_id: str):
    """Get complete fee summary with totals for a college"""
    courses = await db.courses.find({"college_id": college_id}, {"_id": 0}).to_list(100)
    fees = await db.fees.find({"college_id": college_id}, {"_id": 0}).to_list(500)
    admission_charges = await db.admission_charges.find({"college_id": college_id}, {"_id": 0}).to_list(100)
    
    # Build summary by course
    summary = []
    for course in courses:
        course_fees = [f for f in fees if f["course_id"] == course["id"]]
        course_admission = next((a for a in admission_charges if a["course_id"] == course["id"]), None)
        
        # Calculate totals
        total_tuition = sum(f.get("amount", 0) for f in course_fees)
        total_hostel = sum(f.get("hostel_fee", 0) or 0 for f in course_fees)
        
        # Get admission charges total
        admission_total = 0
        if course_admission:
            admission_total = sum([
                course_admission.get("registration_fee", 0) or 0,
                course_admission.get("admission_fee", 0) or 0,
                course_admission.get("caution_deposit", 0) or 0,
                course_admission.get("uniform_fee", 0) or 0,
                course_admission.get("library_fee", 0) or 0,
                course_admission.get("lab_fee", 0) or 0,
                course_admission.get("other_charges", 0) or 0
            ])
        
        # Determine fee type and sort fees
        fee_type = course_fees[0]["fee_type"] if course_fees else "annual"
        sorted_fees = sorted(course_fees, key=lambda x: x["year_or_semester"])
        
        summary.append({
            "course": course,
            "fee_type": fee_type,
            "fees": sorted_fees,
            "admission_charges": course_admission,
            "totals": {
                "tuition_total": total_tuition,
                "hostel_total": total_hostel,
                "admission_total": admission_total,
                "grand_total_without_hostel": total_tuition + admission_total,
                "grand_total_with_hostel": total_tuition + total_hostel + admission_total
            }
        })
    
    return summary

# ===================== FAQ ENDPOINTS =====================

@api_router.get("/faqs", response_model=List[FAQ])
async def get_faqs(college_id: Optional[str] = None, include_global: bool = True):
    if college_id:
        if include_global:
            query = {"$or": [{"college_id": college_id}, {"is_global": True}]}
        else:
            query = {"college_id": college_id}
    else:
        query = {}
    
    faqs = await db.faqs.find(query, {"_id": 0}).sort("order", 1).to_list(100)
    return faqs

@api_router.post("/faqs", response_model=FAQ)
async def create_faq(faq_data: FAQBase, current_user: dict = Depends(require_admin)):
    faq = FAQ(**faq_data.model_dump())
    if faq.college_id:
        faq.is_global = False
    await db.faqs.insert_one(faq.model_dump())
    return faq

@api_router.put("/faqs/{faq_id}", response_model=FAQ)
async def update_faq(faq_id: str, faq_data: FAQBase, current_user: dict = Depends(require_admin)):
    existing = await db.faqs.find_one({"id": faq_id})
    if not existing:
        raise HTTPException(status_code=404, detail="FAQ not found")
    
    update_data = faq_data.model_dump()
    update_data["updated_at"] = datetime.now(timezone.utc).isoformat()
    if update_data.get("college_id"):
        update_data["is_global"] = False
    await db.faqs.update_one({"id": faq_id}, {"$set": update_data})
    
    updated = await db.faqs.find_one({"id": faq_id}, {"_id": 0})
    return updated

@api_router.delete("/faqs/{faq_id}")
async def delete_faq(faq_id: str, current_user: dict = Depends(require_admin)):
    result = await db.faqs.delete_one({"id": faq_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return {"message": "FAQ deleted successfully"}

# ===================== SEED DATA ENDPOINT =====================

@api_router.post("/seed")
async def seed_database():
    """Seed the database with sample data for demonstration"""
    
    # Check if already seeded
    existing_colleges = await db.colleges.count_documents({})
    if existing_colleges > 0:
        return {"message": "Database already seeded", "colleges_count": existing_colleges}
    
    # Sample colleges data
    colleges_data = [
        {
            "id": "col-1",
            "name": "Acharya Institute of Management Studies (AIMS)",
            "state": "Karnataka",
            "city": "Bangalore",
            "category": "Management",
            "address": "Soldevanahalli, Hesaraghatta Main Road, Bangalore - 560107, Karnataka",
            "image_url": "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A' Grade Accreditation",
                "Industry-aligned curriculum with 100+ corporate partnerships",
                "State-of-the-art campus with modern amenities",
                "Dedicated placement cell with 95% placement record"
            ],
            "whats_new": [
                "New AI & Data Analytics specialization launched for 2024-25",
                "Partnership with Microsoft for student certifications",
                "International exchange program with 5 universities"
            ],
            "is_featured": True,
            "established": "1994",
            "accreditation": "NAAC 'A' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-2",
            "name": "PES University (PESU)",
            "state": "Karnataka",
            "city": "Bangalore",
            "category": "Engineering",
            "address": "100 Feet Ring Road, BSK III Stage, Bangalore - 560085, Karnataka",
            "image_url": "https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A+' Grade Accreditation",
                "Top 50 Engineering Colleges in India",
                "Research-focused curriculum with 200+ publications annually",
                "Strong alumni network in Fortune 500 companies"
            ],
            "whats_new": [
                "New Robotics Lab inaugurated with ₹10 Cr investment",
                "MOU signed with IIT Madras for joint research",
                "Startup incubation center launched"
            ],
            "is_featured": True,
            "established": "1973",
            "accreditation": "NAAC 'A+' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-3",
            "name": "Alliance University (AU)",
            "state": "Karnataka",
            "city": "Bangalore",
            "category": "Management",
            "address": "Chandapura - Anekal Main Road, Anekal, Bangalore - 562106, Karnataka",
            "image_url": "https://images.unsplash.com/photo-1670284768187-5cc68eada1b3?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A+' Grade Accreditation",
                "Global MBA programs with dual degree options",
                "150-acre smart campus with world-class infrastructure",
                "International faculty with diverse expertise"
            ],
            "whats_new": [
                "New 5-year Integrated MBA program launched",
                "Collaboration with Harvard Business School for case studies",
                "Virtual reality learning lab established"
            ],
            "is_featured": True,
            "established": "2010",
            "accreditation": "NAAC 'A+' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-4",
            "name": "SRM Institute of Science and Technology",
            "state": "Tamil Nadu",
            "city": "Chennai",
            "category": "Engineering",
            "address": "SRM Nagar, Kattankulathur - 603203, Chengalpattu District, Tamil Nadu",
            "image_url": "https://images.unsplash.com/photo-1759299615947-bc798076b479?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A++' Grade Accreditation",
                "250+ acre campus with 52,000+ students",
                "2500+ faculty members from top institutions",
                "Ranked among top 10 private universities in India"
            ],
            "whats_new": [
                "SRM Medical College expansion completed",
                "New School of Artificial Intelligence established",
                "International research grants worth ₹50 Cr received"
            ],
            "is_featured": True,
            "established": "1985",
            "accreditation": "NAAC 'A++' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-5",
            "name": "Manipal Academy of Higher Education",
            "state": "Karnataka",
            "city": "Mangalore",
            "category": "Medicine & Health Sciences",
            "address": "Manipal - 576104, Udupi District, Karnataka",
            "image_url": "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "Institution of Eminence status by Government of India",
                "1200+ bed teaching hospital",
                "Research collaboration with Mayo Clinic and Johns Hopkins",
                "100% placement for medical graduates"
            ],
            "whats_new": [
                "New Cancer Research Center inaugurated",
                "Telemedicine program expanded to 50 villages",
                "AI-based diagnostic tools introduced in curriculum"
            ],
            "is_featured": True,
            "established": "1953",
            "accreditation": "NAAC 'A++' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-6",
            "name": "REVA University",
            "state": "Karnataka",
            "city": "Bangalore",
            "category": "Engineering",
            "address": "Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bangalore - 560064, Karnataka",
            "image_url": "https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A' Grade Accreditation",
                "45-acre green campus with modern infrastructure",
                "Strong industry connect with 300+ companies",
                "Focus on innovation and entrepreneurship"
            ],
            "whats_new": [
                "New School of Computing launched",
                "₹5 Cr research grant for renewable energy project",
                "Student startup fund of ₹1 Cr announced"
            ],
            "is_featured": True,
            "established": "2012",
            "accreditation": "NAAC 'A' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-7",
            "name": "Christ University",
            "state": "Karnataka",
            "city": "Bangalore",
            "category": "Management",
            "address": "Hosur Road, Bangalore - 560029, Karnataka",
            "image_url": "https://images.unsplash.com/photo-1670284768187-5cc68eada1b3?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A++' Grade Accreditation",
                "Ranked #1 in Karnataka for Arts and Commerce",
                "Vibrant campus life with 100+ student clubs",
                "International collaborations with 50+ universities"
            ],
            "whats_new": [
                "New campus in Delhi NCR announced",
                "Online MBA program launched with global access",
                "New sports complex with Olympic-standard facilities"
            ],
            "is_featured": True,
            "established": "1969",
            "accreditation": "NAAC 'A++' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "col-8",
            "name": "VIT University",
            "state": "Tamil Nadu",
            "city": "Chennai",
            "category": "Engineering",
            "address": "Vandalur-Kelambakkam Road, Chennai - 600127, Tamil Nadu",
            "image_url": "https://images.unsplash.com/photo-1759299615947-bc798076b479?crop=entropy&cs=srgb&fm=jpg&q=85",
            "highlights": [
                "NAAC 'A++' Grade Accreditation",
                "Institution of Eminence status",
                "Highest number of patents among private universities",
                "Global rankings in QS World University Rankings"
            ],
            "whats_new": [
                "New campus in Andhra Pradesh operational",
                "Space technology program launched with ISRO",
                "₹100 Cr corpus for student scholarships"
            ],
            "is_featured": True,
            "established": "1984",
            "accreditation": "NAAC 'A++' Grade",
            "created_at": datetime.now(timezone.utc).isoformat()
        }
    ]
    
    # Sample courses data
    courses_data = [
        # AIMS Courses
        {"id": "course-1", "name": "MBA - Master of Business Administration", "college_id": "col-1", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        {"id": "course-2", "name": "BBA - Bachelor of Business Administration", "college_id": "col-1", "duration": "3 Years", "level": "UG", "duration_years": 3, "duration_semesters": 6},
        {"id": "course-3", "name": "PGDM - Post Graduate Diploma in Management", "college_id": "col-1", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        
        # PESU Courses
        {"id": "course-4", "name": "B.Tech - Computer Science Engineering", "college_id": "col-2", "duration": "4 Years", "level": "UG", "duration_years": 4, "duration_semesters": 8},
        {"id": "course-5", "name": "B.Tech - Electronics & Communication", "college_id": "col-2", "duration": "4 Years", "level": "UG", "duration_years": 4, "duration_semesters": 8},
        {"id": "course-6", "name": "M.Tech - Computer Science", "college_id": "col-2", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        {"id": "course-7", "name": "MCA - Master of Computer Applications", "college_id": "col-2", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        
        # Alliance University Courses
        {"id": "course-8", "name": "MBA - Global Business", "college_id": "col-3", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        {"id": "course-9", "name": "BBA - Finance & Marketing", "college_id": "col-3", "duration": "3 Years", "level": "UG", "duration_years": 3, "duration_semesters": 6},
        {"id": "course-10", "name": "MBA - Healthcare Management", "college_id": "col-3", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        
        # SRM Courses
        {"id": "course-11", "name": "B.Tech - Artificial Intelligence", "college_id": "col-4", "duration": "4 Years", "level": "UG", "duration_years": 4, "duration_semesters": 8},
        {"id": "course-12", "name": "B.Tech - Mechanical Engineering", "college_id": "col-4", "duration": "4 Years", "level": "UG", "duration_years": 4, "duration_semesters": 8},
        {"id": "course-13", "name": "M.Tech - Data Science", "college_id": "col-4", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        
        # Manipal Courses
        {"id": "course-14", "name": "MBBS - Bachelor of Medicine", "college_id": "col-5", "duration": "5.5 Years", "level": "UG", "duration_years": 5, "duration_semesters": 10},
        {"id": "course-15", "name": "BDS - Bachelor of Dental Surgery", "college_id": "col-5", "duration": "5 Years", "level": "UG", "duration_years": 5, "duration_semesters": 10},
        {"id": "course-16", "name": "MD - General Medicine", "college_id": "col-5", "duration": "3 Years", "level": "PG", "duration_years": 3, "duration_semesters": 6},
        
        # REVA Courses
        {"id": "course-17", "name": "B.Tech - Information Technology", "college_id": "col-6", "duration": "4 Years", "level": "UG", "duration_years": 4, "duration_semesters": 8},
        {"id": "course-18", "name": "BCA - Bachelor of Computer Applications", "college_id": "col-6", "duration": "3 Years", "level": "UG", "duration_years": 3, "duration_semesters": 6},
        
        # Christ University Courses
        {"id": "course-19", "name": "MBA - Marketing", "college_id": "col-7", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
        {"id": "course-20", "name": "B.Com - Honours", "college_id": "col-7", "duration": "3 Years", "level": "UG", "duration_years": 3, "duration_semesters": 6},
        
        # VIT Courses
        {"id": "course-21", "name": "B.Tech - Biotechnology", "college_id": "col-8", "duration": "4 Years", "level": "UG", "duration_years": 4, "duration_semesters": 8},
        {"id": "course-22", "name": "M.Tech - VLSI Design", "college_id": "col-8", "duration": "2 Years", "level": "PG", "duration_years": 2, "duration_semesters": 4},
    ]
    
    # Sample fees data - comprehensive year/semester wise
    fees_data = [
        # AIMS MBA Fees (Annual - 2 years)
        {"id": "fee-1", "college_id": "col-1", "course_id": "course-1", "fee_type": "annual", "year_or_semester": 1, "amount": 450000, "hostel_fee": 120000, "admission_fee": 25000, "description": "First Year Annual Fee"},
        {"id": "fee-2", "college_id": "col-1", "course_id": "course-1", "fee_type": "annual", "year_or_semester": 2, "amount": 450000, "hostel_fee": 120000, "admission_fee": 0, "description": "Second Year Annual Fee"},
        
        # AIMS BBA Fees (Annual - 3 years)
        {"id": "fee-3", "college_id": "col-1", "course_id": "course-2", "fee_type": "annual", "year_or_semester": 1, "amount": 180000, "hostel_fee": 100000, "admission_fee": 15000, "description": "First Year Annual Fee"},
        {"id": "fee-3b", "college_id": "col-1", "course_id": "course-2", "fee_type": "annual", "year_or_semester": 2, "amount": 180000, "hostel_fee": 100000, "admission_fee": 0, "description": "Second Year Annual Fee"},
        {"id": "fee-3c", "college_id": "col-1", "course_id": "course-2", "fee_type": "annual", "year_or_semester": 3, "amount": 180000, "hostel_fee": 100000, "admission_fee": 0, "description": "Third Year Annual Fee"},
        
        # PESU B.Tech CSE Fees (Semester - 8 semesters)
        {"id": "fee-4", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 1, "amount": 175000, "hostel_fee": 60000, "admission_fee": 20000, "description": "Semester 1 Fee"},
        {"id": "fee-5", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 2, "amount": 175000, "hostel_fee": 60000, "admission_fee": 0, "description": "Semester 2 Fee"},
        {"id": "fee-6", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 3, "amount": 185000, "hostel_fee": 65000, "admission_fee": 0, "description": "Semester 3 Fee"},
        {"id": "fee-7", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 4, "amount": 185000, "hostel_fee": 65000, "admission_fee": 0, "description": "Semester 4 Fee"},
        {"id": "fee-7a", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 5, "amount": 195000, "hostel_fee": 70000, "admission_fee": 0, "description": "Semester 5 Fee"},
        {"id": "fee-7b", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 6, "amount": 195000, "hostel_fee": 70000, "admission_fee": 0, "description": "Semester 6 Fee"},
        {"id": "fee-7c", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 7, "amount": 200000, "hostel_fee": 75000, "admission_fee": 0, "description": "Semester 7 Fee"},
        {"id": "fee-7d", "college_id": "col-2", "course_id": "course-4", "fee_type": "semester", "year_or_semester": 8, "amount": 200000, "hostel_fee": 75000, "admission_fee": 0, "description": "Semester 8 Fee"},
        
        # Alliance MBA Fees (Annual - 2 years)
        {"id": "fee-8", "college_id": "col-3", "course_id": "course-8", "fee_type": "annual", "year_or_semester": 1, "amount": 650000, "hostel_fee": 150000, "admission_fee": 50000, "description": "First Year Annual Fee"},
        {"id": "fee-9", "college_id": "col-3", "course_id": "course-8", "fee_type": "annual", "year_or_semester": 2, "amount": 650000, "hostel_fee": 150000, "admission_fee": 0, "description": "Second Year Annual Fee"},
        
        # SRM B.Tech AI Fees (Annual - 4 years)
        {"id": "fee-10", "college_id": "col-4", "course_id": "course-11", "fee_type": "annual", "year_or_semester": 1, "amount": 350000, "hostel_fee": 110000, "admission_fee": 30000, "description": "First Year Annual Fee"},
        {"id": "fee-11", "college_id": "col-4", "course_id": "course-11", "fee_type": "annual", "year_or_semester": 2, "amount": 350000, "hostel_fee": 110000, "admission_fee": 0, "description": "Second Year Annual Fee"},
        {"id": "fee-11a", "college_id": "col-4", "course_id": "course-11", "fee_type": "annual", "year_or_semester": 3, "amount": 375000, "hostel_fee": 115000, "admission_fee": 0, "description": "Third Year Annual Fee"},
        {"id": "fee-11b", "college_id": "col-4", "course_id": "course-11", "fee_type": "annual", "year_or_semester": 4, "amount": 375000, "hostel_fee": 115000, "admission_fee": 0, "description": "Fourth Year Annual Fee"},
        
        # Manipal MBBS Fees (Annual - 5 years)
        {"id": "fee-12", "college_id": "col-5", "course_id": "course-14", "fee_type": "annual", "year_or_semester": 1, "amount": 2500000, "hostel_fee": 200000, "admission_fee": 100000, "description": "First Year Annual Fee"},
        {"id": "fee-13", "college_id": "col-5", "course_id": "course-14", "fee_type": "annual", "year_or_semester": 2, "amount": 2500000, "hostel_fee": 200000, "admission_fee": 0, "description": "Second Year Annual Fee"},
        {"id": "fee-13a", "college_id": "col-5", "course_id": "course-14", "fee_type": "annual", "year_or_semester": 3, "amount": 2600000, "hostel_fee": 210000, "admission_fee": 0, "description": "Third Year Annual Fee"},
        {"id": "fee-13b", "college_id": "col-5", "course_id": "course-14", "fee_type": "annual", "year_or_semester": 4, "amount": 2600000, "hostel_fee": 210000, "admission_fee": 0, "description": "Fourth Year Annual Fee"},
        {"id": "fee-13c", "college_id": "col-5", "course_id": "course-14", "fee_type": "annual", "year_or_semester": 5, "amount": 2700000, "hostel_fee": 220000, "admission_fee": 0, "description": "Fifth Year Annual Fee"},
    ]
    
    # Admission charges data
    admission_charges_data = [
        {
            "id": "ac-1",
            "college_id": "col-1",
            "course_id": "course-1",
            "registration_fee": 5000,
            "admission_fee": 25000,
            "caution_deposit": 10000,
            "uniform_fee": 8000,
            "library_fee": 5000,
            "lab_fee": 0,
            "other_charges": 2000,
            "other_charges_description": "ID Card & Documentation",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "ac-2",
            "college_id": "col-2",
            "course_id": "course-4",
            "registration_fee": 3000,
            "admission_fee": 20000,
            "caution_deposit": 15000,
            "uniform_fee": 5000,
            "library_fee": 8000,
            "lab_fee": 12000,
            "other_charges": 5000,
            "other_charges_description": "Workshop & Equipment",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "ac-3",
            "college_id": "col-3",
            "course_id": "course-8",
            "registration_fee": 10000,
            "admission_fee": 50000,
            "caution_deposit": 25000,
            "uniform_fee": 15000,
            "library_fee": 10000,
            "lab_fee": 0,
            "other_charges": 10000,
            "other_charges_description": "International Immersion Program",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": "ac-4",
            "college_id": "col-5",
            "course_id": "course-14",
            "registration_fee": 25000,
            "admission_fee": 100000,
            "caution_deposit": 50000,
            "uniform_fee": 20000,
            "library_fee": 15000,
            "lab_fee": 30000,
            "other_charges": 10000,
            "other_charges_description": "Clinical Training Equipment",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        }
    ]
    
    # Sample FAQs
    faqs_data = [
        # Global FAQs
        {"id": "faq-1", "question": "What is the admission process?", "answer": "The admission process involves submitting an online application, followed by entrance test scores (if applicable), document verification, and counseling for seat allotment. Each college may have specific requirements.", "college_id": None, "is_global": True, "order": 1, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
        {"id": "faq-2", "question": "Are scholarships available?", "answer": "Yes, most featured colleges offer merit-based and need-based scholarships. Eligibility criteria vary by institution. Contact the admissions office for specific scholarship programs.", "college_id": None, "is_global": True, "order": 2, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
        {"id": "faq-3", "question": "What are the hostel facilities like?", "answer": "Featured colleges provide well-equipped hostels with amenities including Wi-Fi, mess facilities, gym, recreational areas, and 24/7 security. Room options include single, double, and triple occupancy.", "college_id": None, "is_global": True, "order": 3, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
        {"id": "faq-4", "question": "What is the fee payment schedule?", "answer": "Fee payment is typically required at the beginning of each academic year or semester. Most colleges offer EMI options through banking partners. Late payment may incur additional charges.", "college_id": None, "is_global": True, "order": 4, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
        
        # College-specific FAQs
        {"id": "faq-5", "question": "What specializations are available in MBA at AIMS?", "answer": "AIMS offers specializations in Finance, Marketing, HR, Operations, Business Analytics, and International Business. Dual specialization options are also available.", "college_id": "col-1", "is_global": False, "order": 1, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
        {"id": "faq-6", "question": "Does PESU accept COMEDK scores?", "answer": "Yes, PES University accepts both PESSAT and COMEDK scores for B.Tech admissions. Management quota seats are also available through direct admission.", "college_id": "col-2", "is_global": False, "order": 1, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
        {"id": "faq-7", "question": "What is the placement record at Alliance University?", "answer": "Alliance University has a 98% placement rate with average package of 8.5 LPA. Top recruiters include Deloitte, KPMG, Amazon, and McKinsey.", "college_id": "col-3", "is_global": False, "order": 1, "created_at": datetime.now(timezone.utc).isoformat(), "updated_at": datetime.now(timezone.utc).isoformat()},
    ]
    
    # Create default admin user
    admin_user = {
        "id": "admin-1",
        "email": "admin@ohcampus.com",
        "name": "Admin User",
        "role": "admin",
        "password_hash": hash_password("admin123"),
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    
    # Create default counselor user
    counselor_user = {
        "id": "counselor-1",
        "email": "counselor@ohcampus.com",
        "name": "Demo Counselor",
        "role": "counselor",
        "password_hash": hash_password("counselor123"),
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    
    # Insert data
    await db.colleges.insert_many(colleges_data)
    await db.courses.insert_many(courses_data)
    await db.fees.insert_many(fees_data)
    await db.admission_charges.insert_many(admission_charges_data)
    await db.faqs.insert_many(faqs_data)
    await db.users.insert_many([admin_user, counselor_user])
    
    return {
        "message": "Database seeded successfully",
        "colleges_count": len(colleges_data),
        "courses_count": len(courses_data),
        "fees_count": len(fees_data),
        "admission_charges_count": len(admission_charges_data),
        "faqs_count": len(faqs_data),
        "users_created": ["admin@ohcampus.com (password: admin123)", "counselor@ohcampus.com (password: counselor123)"]
    }

# ===================== ROOT ENDPOINT =====================

@api_router.get("/")
async def root():
    return {"message": "OhCampus Counselor Platform API", "version": "1.0.0"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
