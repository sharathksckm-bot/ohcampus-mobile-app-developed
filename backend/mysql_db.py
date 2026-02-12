"""
MySQL Database Integration for OhCampus
Connects to the main ohcampus_beta database to fetch real data
"""
import aiomysql
import os
from typing import List, Dict, Any, Optional

# MySQL Configuration
MYSQL_CONFIG = {
    'host': os.environ.get('MYSQL_HOST', 'localhost'),
    'port': int(os.environ.get('MYSQL_PORT', 3306)),
    'user': os.environ.get('MYSQL_USER', 'root'),
    'password': os.environ.get('MYSQL_PASSWORD', ''),
    'db': os.environ.get('MYSQL_DB', 'ohcampus_beta'),
    'charset': 'utf8mb4',
    'autocommit': True
}

_pool = None

async def get_mysql_pool():
    """Get or create MySQL connection pool"""
    global _pool
    if _pool is None:
        _pool = await aiomysql.create_pool(**MYSQL_CONFIG, maxsize=10)
    return _pool

async def execute_query(query: str, params: tuple = None) -> List[Dict[str, Any]]:
    """Execute a SELECT query and return results as list of dicts"""
    pool = await get_mysql_pool()
    async with pool.acquire() as conn:
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute(query, params)
            result = await cursor.fetchall()
            return result

async def get_featured_colleges(
    state: Optional[str] = None,
    city: Optional[str] = None,
    category: Optional[str] = None,
    search: Optional[str] = None,
    limit: int = 200
) -> List[Dict[str, Any]]:
    """Fetch featured colleges from MySQL with course counts in single query"""
    query = """
        SELECT 
            c.id,
            c.title as name,
            c.slug,
            c.address,
            c.phone,
            c.email,
            c.web as website,
            c.accreditation,
            c.estd as established_year,
            c.logo,
            c.package_type,
            s.statename as state,
            ct.city as city,
            cat.catname as category,
            (SELECT COUNT(*) FROM college_course cc WHERE cc.collegeid = c.id AND cc.is_deleted = 0) as course_count
        FROM college c
        LEFT JOIN state s ON c.stateid = s.id
        LEFT JOIN city ct ON c.cityid = ct.id
        LEFT JOIN category cat ON cat.id = SUBSTRING_INDEX(c.categoryid, ',', 1)
        WHERE (c.package_type = 'feature_listing' OR c.package_type = 'featured_listing')
        AND c.status = 1 
        AND c.is_deleted = 0
    """
    params = []
    
    if state:
        query += " AND s.statename = %s"
        params.append(state)
    
    if city:
        query += " AND ct.city = %s"
        params.append(city)
    
    if category:
        query += " AND cat.catname = %s"
        params.append(category)
    
    if search:
        query += " AND (c.title LIKE %s OR c.address LIKE %s)"
        params.extend([f"%{search}%", f"%{search}%"])
    
    query += f" ORDER BY c.title LIMIT {limit}"
    
    results = await execute_query(query, tuple(params) if params else None)
    
    # Convert to expected format (simplified - no heavy fields)
    colleges = []
    for row in results:
        college = {
            "id": f"mysql-{row['id']}",
            "mysql_id": row['id'],
            "name": row['name'] or '',
            "slug": row['slug'] or '',
            "address": row['address'] or '',
            "phone": row['phone'] or '',
            "email": row['email'] or '',
            "website": row['website'] or '',
            "accreditation": row['accreditation'] or '',
            "established_year": row['established_year'] or 0,
            "logo": f"https://ohcampus.com/assets/images/colleges/{row['logo']}" if row['logo'] else None,
            "state": row['state'] or '',
            "city": row['city'] or '',
            "category": row['category'] or '',
            "is_featured": True,
            "package_type": row['package_type'],
            "course_count": row['course_count'] or 0
        }
        colleges.append(college)
    
    return colleges

async def get_college_by_id(college_id: str) -> Optional[Dict[str, Any]]:
    """Fetch a single college by ID"""
    # Handle mysql- prefix
    mysql_id = college_id.replace('mysql-', '') if college_id.startswith('mysql-') else college_id
    
    query = """
        SELECT 
            c.id,
            c.title as name,
            c.slug,
            c.description,
            c.address,
            c.phone,
            c.email,
            c.web as website,
            c.accreditation,
            c.estd as established_year,
            c.logo,
            c.banner,
            c.package_type,
            c.map_location,
            c.scholarship,
            c.terms,
            c.what_new,
            c.notification,
            s.statename as state,
            ct.city as city,
            cat.catname as category
        FROM college c
        LEFT JOIN state s ON c.stateid = s.id
        LEFT JOIN city ct ON c.cityid = ct.id
        LEFT JOIN category cat ON cat.id = SUBSTRING_INDEX(c.categoryid, ',', 1)
        WHERE c.id = %s
    """
    
    results = await execute_query(query, (mysql_id,))
    if not results:
        return None
    
    row = results[0]
    return {
        "id": f"mysql-{row['id']}",
        "mysql_id": row['id'],
        "name": row['name'] or '',
        "slug": row['slug'] or '',
        "description": row['description'] or '',
        "address": row['address'] or '',
        "phone": row['phone'] or '',
        "email": row['email'] or '',
        "website": row['website'] or '',
        "accreditation": row['accreditation'] or '',
        "established_year": row['established_year'] or 0,
        "logo": f"https://ohcampus.com/assets/images/colleges/{row['logo']}" if row['logo'] else None,
        "banner": f"https://ohcampus.com/assets/images/colleges/{row['banner']}" if row['banner'] else None,
        "state": row['state'] or '',
        "city": row['city'] or '',
        "category": row['category'] or '',
        "is_featured": True,
        "package_type": row['package_type'],
        "map_location": row['map_location'] or '',
        "scholarship": row['scholarship'] or '',
        "terms": row['terms'] or '',
        "what_new": row['what_new'] or '',
        "notification": row['notification'] or ''
    }

async def get_courses_for_college(college_id: str) -> List[Dict[str, Any]]:
    """Fetch courses for a specific college"""
    mysql_id = college_id.replace('mysql-', '') if college_id.startswith('mysql-') else college_id
    
    query = """
        SELECT 
            cc.id as college_course_id,
            cc.collegeid,
            cc.courseid,
            cc.total_fees,
            cc.total_intake,
            cc.duration,
            cc.level,
            cc.eligibility as course_eligibility,
            cc.description as course_description,
            cc.entrance_exams,
            c.name as course_name,
            c.slug,
            c.eligibility,
            c.scope,
            c.job_profile,
            c.course_description as master_description,
            ac.name as academic_level
        FROM college_course cc
        JOIN courses c ON cc.courseid = c.id
        LEFT JOIN academic_categories ac ON c.academic_category = ac.category_id
        WHERE cc.collegeid = %s
        AND cc.is_deleted = 0
        ORDER BY c.name
    """
    
    results = await execute_query(query, (mysql_id,))
    
    courses = []
    for row in results:
        course = {
            "id": f"mysql-cc-{row['college_course_id']}",
            "mysql_id": row['college_course_id'],
            "college_id": f"mysql-{row['collegeid']}",
            "course_id": row['courseid'],
            "name": row['course_name'] or '',
            "slug": row['slug'] or '',
            "level": row['level'] or row['academic_level'] or 'UG',
            "duration": row['duration'] or '4 Years',
            "eligibility": row['course_eligibility'] or row['eligibility'] or '',
            "description": row['course_description'] or row['master_description'] or '',
            "scope": row['scope'] or '',
            "job_profile": row['job_profile'] or '',
            "entrance_exams": row['entrance_exams'] or '',
            "total_fees": row['total_fees'] or '',
            "total_intake": row['total_intake'] or 0
        }
        courses.append(course)
    
    return courses

async def get_all_courses_with_colleges(
    search: Optional[str] = None,
    level: Optional[str] = None,
    category: Optional[str] = None,
    limit: int = 500
) -> List[Dict[str, Any]]:
    """Fetch all courses from featured colleges with their college info"""
    query = """
        SELECT 
            cc.id as college_course_id,
            cc.collegeid,
            cc.courseid,
            cc.total_fees,
            cc.total_intake,
            cc.duration,
            cc.level,
            cc.eligibility as course_eligibility,
            cc.description as course_description,
            cc.entrance_exams,
            c.name as course_name,
            c.slug,
            c.eligibility,
            c.scope,
            c.job_profile,
            c.course_description as master_description,
            ac.name as academic_level,
            col.title as college_name,
            col.accreditation,
            s.statename as state,
            ct.city as city,
            cat.catname as category
        FROM college_course cc
        JOIN courses c ON cc.courseid = c.id
        JOIN college col ON cc.collegeid = col.id
        LEFT JOIN academic_categories ac ON c.academic_category = ac.category_id
        LEFT JOIN state s ON col.stateid = s.id
        LEFT JOIN city ct ON col.cityid = ct.id
        LEFT JOIN category cat ON cat.id = SUBSTRING_INDEX(col.categoryid, ',', 1)
        WHERE (col.package_type = 'feature_listing' OR col.package_type = 'featured_listing')
        AND col.status = 1 
        AND col.is_deleted = 0
        AND cc.is_deleted = 0
    """
    params = []
    
    if search:
        query += " AND (c.name LIKE %s OR col.title LIKE %s)"
        params.extend([f"%{search}%", f"%{search}%"])
    
    if level:
        query += " AND (cc.level = %s OR ac.name = %s)"
        params.extend([level, level])
    
    if category:
        query += " AND cat.catname = %s"
        params.append(category)
    
    query += f" ORDER BY c.name LIMIT {limit}"
    
    results = await execute_query(query, tuple(params) if params else None)
    
    courses = []
    for row in results:
        course = {
            "id": f"mysql-cc-{row['college_course_id']}",
            "mysql_id": row['college_course_id'],
            "college_id": f"mysql-{row['collegeid']}",
            "course_id": row['courseid'],
            "name": row['course_name'] or '',
            "slug": row['slug'] or '',
            "level": row['level'] or row['academic_level'] or 'UG',
            "duration": row['duration'] or '4 Years',
            "eligibility": row['course_eligibility'] or row['eligibility'] or '',
            "description": row['course_description'] or row['master_description'] or '',
            "scope": row['scope'] or '',
            "job_profile": row['job_profile'] or '',
            "entrance_exams": row['entrance_exams'] or '',
            "total_fees": row['total_fees'] or '',
            "total_intake": row['total_intake'] or 0,
            "college": {
                "id": f"mysql-{row['collegeid']}",
                "name": row['college_name'] or '',
                "accreditation": row['accreditation'] or '',
                "state": row['state'] or '',
                "city": row['city'] or '',
                "category": row['category'] or ''
            }
        }
        courses.append(course)
    
    return courses

async def get_states() -> List[str]:
    """Get all states with featured colleges"""
    query = """
        SELECT DISTINCT s.statename
        FROM college c
        JOIN state s ON c.stateid = s.id
        WHERE (c.package_type = 'feature_listing' OR c.package_type = 'featured_listing')
        AND c.status = 1 AND c.is_deleted = 0
        ORDER BY s.statename
    """
    results = await execute_query(query)
    return [r['statename'] for r in results if r['statename']]

async def get_cities(state: Optional[str] = None) -> List[str]:
    """Get all cities with featured colleges"""
    query = """
        SELECT DISTINCT ct.city
        FROM college c
        JOIN city ct ON c.cityid = ct.id
        LEFT JOIN state s ON c.stateid = s.id
        WHERE (c.package_type = 'feature_listing' OR c.package_type = 'featured_listing')
        AND c.status = 1 AND c.is_deleted = 0
    """
    params = []
    
    if state:
        query += " AND s.statename = %s"
        params.append(state)
    
    query += " ORDER BY ct.city"
    
    results = await execute_query(query, tuple(params) if params else None)
    return [r['city'] for r in results if r['city']]

async def get_categories() -> List[str]:
    """Get all categories with featured colleges"""
    query = """
        SELECT DISTINCT cat.catname
        FROM college c
        JOIN category cat ON cat.id = SUBSTRING_INDEX(c.categoryid, ',', 1)
        WHERE (c.package_type = 'feature_listing' OR c.package_type = 'featured_listing')
        AND c.status = 1 AND c.is_deleted = 0
        AND cat.catname IS NOT NULL AND cat.catname != ''
        ORDER BY cat.catname
    """
    results = await execute_query(query)
    return [r['catname'] for r in results if r['catname']]

async def get_fee_structure(college_id: str, course_id: Optional[str] = None) -> List[Dict[str, Any]]:
    """Get fee structure for a college/course from MySQL"""
    mysql_college_id = college_id.replace('mysql-', '') if college_id.startswith('mysql-') else college_id
    
    query = """
        SELECT 
            fs.id,
            fs.college_id,
            fs.course_id,
            fs.details,
            fs.amount,
            c.name as course_name
        FROM fee_structure fs
        LEFT JOIN courses c ON fs.course_id = c.id
        WHERE fs.college_id = %s
    """
    params = [mysql_college_id]
    
    if course_id:
        mysql_course_id = course_id.replace('mysql-cc-', '').replace('mysql-', '') if course_id.startswith('mysql') else course_id
        query += " AND fs.course_id = %s"
        params.append(mysql_course_id)
    
    results = await execute_query(query, tuple(params))
    
    fees = []
    for row in results:
        fees.append({
            "id": f"mysql-fee-{row['id']}",
            "college_id": f"mysql-{row['college_id']}",
            "course_id": row['course_id'],
            "course_name": row['course_name'] or '',
            "details": row['details'] or '',
            "amount": float(row['amount']) if row['amount'] else 0
        })
    
    return fees

async def close_mysql_pool():
    """Close the MySQL connection pool"""
    global _pool
    if _pool:
        _pool.close()
        await _pool.wait_closed()
        _pool = None
