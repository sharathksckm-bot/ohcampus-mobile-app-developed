import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, config, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { AlertController, ModalController } from '@ionic/angular';

export class User {
  _id!: number;
  name!: string;
  email!: string;
  username!: string;
  password!: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  baseUrl: string;
  accesstoken: any;


  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };




  userData: any;
  data: any;
  getCollegeListByCourse: any;

  constructor(public httpClient: HttpClient, public alertCtrl: AlertController,private modalController: ModalController) {
    //  this.baseUrl = 'https://win.k2key.in/ohcampus/apps/';

       this.baseUrl = 'https://campusapi.ohcampus.com/apps/';

    // https://win.k2key.in/ohcampus/web/Authentication/validateUser,{"username":"ohcampusinfo@gmail.com","password":"Admin@123"},login api
    //  https://win.k2key.in/ohcampus/web/user/createUser, {"email":"testuser1@gmail.com","password":"123456","name":""} signup api
    // // https://win.k2key.in/ohcampus/apps/User/UpdateNewPass {"email":"ohcampusinfo@gmail.com","newPass":"admin","confirmPass":"admin"}
    // https://win.k2key.in/ohcampus/apps/category/getCategory
    // https://win.k2key.in/ohcampus/apps/category/getAcadamicCategory
    // https://win.k2key.in/ohcampus/apps/course/getCoursesByAcat_CCat {"CouCat":"91","AcaCat":"3"}
    // https://win.k2key.in/ohcampus/apps/User/verifyOTP {"email":"testuser3@gmail.com","Otp":"1234"}
   
}





  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  // log
    public saveSearchLog(data): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'User/saveSearchLog', data, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  // login api
  public loginuser(data): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Authentication/validateUser', data, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  // public loginuser(username: any,password: any): Observable<any> {
  //   return this.httpClient.post<any>(this.baseUrl + 'Authentication/validateUser', {username,password}, this.httpOptions)
  //     .pipe(retry(0), catchError(this.handleError)
  //     );
  // }

  // signup api
  public signup(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'User/createUser', data, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  // state list 
  
  public kcetcutoff(college_id): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Cutoff/getCutOffRoundWise', {college_id}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public komedecutoff(college_id): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Cutoff/getCOMEDKCutOffRoundWise', {college_id}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public comedkcutoff(college_id): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'User/getCollegeByCity', {college_id}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

// public googleusercreat(type: string, Otp: string, agreements: string, confirmpassword: string,
//   email: string, mobile_no: string, name: string, password: string): Observable<any> {
// const payload = { type, Otp, agreements, confirmpassword, email, mobile_no, name, password };
// return this.httpClient.post<any>(this.baseUrl + 'User/createUser', payload, this.httpOptions)
// .pipe(retry(0), catchError(this.handleError));
// }
public googleusercreat(data): Observable<any> {

return this.httpClient.post<any>(this.baseUrl + 'User/signUpwithGoogle', data, this.httpOptions)
.pipe(retry(0), catchError(this.handleError));
}


//  api otp verify
public verifyotp(email: string, Otp: string): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + '/User/verifyOTP ', {email,Otp}, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}

public preferdclglist(cityId,subcategoryId): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'User/getCollegeByCity', {cityId,subcategoryId}, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}


// corse&fees  tab api,
public statelist(): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'User/getState', { }, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}

public citylist(stateId: any): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'User/getCityByState', { stateId}, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}

public managementForm(StudentName,State,City,Category,CourseLevel,interestedcourses,PreferredLocation,PreferredCollege,mobileNumber): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'User/saveManagementSeat', { StudentName,State,City,CourseLevel,Category,interestedcourses,PreferredLocation,PreferredCollege,mobileNumber }, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}

public ConsellingForm(StudentName,State,City,passingstatus,Passingyear,CourseInterest,mobileNumber): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'User/saveCounselingDetails', { StudentName,State,City,passingstatus,Passingyear,CourseInterest,mobileNumber }, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}


public postqns(student_name, email, mobile_no, category, college, course, entrance_exam, rank, score): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'Course/getCoursesInfo', { student_name, email, mobile_no, category, college, course, entrance_exam, rank, score }, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}


public getcoursiformation( collegeId,subcategory,  collegeTypeId, categoryId): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'course/getCoursesBySubcategory', {  collegeId,subcategory,collegeTypeId, categoryId }, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}

public popclgcmpre( categoryid): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'college/getPopularCollegeListForCompare', { categoryid }, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
}

  public userqnspost(collegeid,courselevel, course,  user_id,questionInput): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/postQuestion',
      { collegeid,courselevel, course, user_id,questionInput}, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    // Course info tabs Api

    public contactmail(name,email,contactno,subject,message): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Common/sendContactMail', { name,email,contactno,subject,message },
    this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public cmpclgdetails(collegeId,subcategory,courselevels): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Compare_College/getCollegeDetailsByID', { collegeId,subcategory,courselevels },
         this.httpOptions).pipe(retry(0), catchError(this.handleError)
        );
    }

   
    public getexamlist(params: any): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Exam/getExamList', { params }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public saveapplication(student_name, email, mobile_no, category, college, course, entrance_exam, rank, score): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'common/savCourseApplication', { student_name, email, mobile_no, category, college, course, entrance_exam, rank, score }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }
    public getcourcatogorybyclg(categoryId, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Course/getCourseByCategoryClg', { categoryId, collegeId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public getcoursesinfo(courseid, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Course/getCoursesInfo', { courseid, collegeId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public getCoursesAdmissionProcess(courseid, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Course/getCoursesAdmissionProcess', { courseid, collegeId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public getQueAnsAboutCourse(courseid, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/getQueAnsAboutCourses', { courseid, collegeId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }


    public getEntranceExamsForCourse(courseid, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Course/getEntranceExamsForCourse', { courseid, collegeId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public clgofferingsamecity(courseid,cityid, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'College/collegesOffereingSameCourseAtSameCity', {courseid,cityid, collegeId},this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
        );
    }

    public getCoursesFeeStructure(courseid, collegeId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Course/getCoursesFeeStructure', { courseid, collegeId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }

    public getCoursescategory(): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'Course/getCourseCategory', { }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }
     

  public forgotpass(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'User/UpdateNewPass', data, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public resetpasslink(email){
    return this.httpClient.post<any>(this.baseUrl + 'User/ResetPass', {email}, this.httpOptions)
    .pipe(retry(0), catchError(this.handleError)
    );
  }
  public getCategory(): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Category/getCategory', {}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getlevel(): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Category/getAcadamicCategory', {}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getsubclist(CouCat, AcaCat): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'course/getCoursesByAcat_CCat', { CouCat, AcaCat }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  
  public getmenults(courseCatId,courseId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getNavList', { courseCatId,courseId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public popularclg(data): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getPopColleges', data, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public gettoprankclg(id: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'campus_app/getCollegeListByRank', { id }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getspecificclg(ccId: any, acId: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'campus_app/getListBySpecification', { ccId, acId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getcoursebyarticle(CategoryId: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Blogs/getArticles', {CategoryId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getqnans(course_categoryId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/getQuestionAns', {course_categoryId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public articlesection(): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Blogs/getBlogCategory', {}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public articlbycategory(CategoryId: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Blogs/getBlogsbyCategory', {CategoryId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public examlistbycategory(courseCatId,courseId,statename): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getCourseWiseExamList ', {courseCatId,courseId,statename}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public examdetailsbycorce(examId ): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Exam/getExamDetails ', {examId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public specicourselist(value: any,subcategory): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + 'course/getCourseList', {value,subcategory}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public specoursebyclglist(courseid): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeList', {courseid}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public getclgtopclg(course,startLimit,endLimit): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeListByCourse', {course,startLimit,endLimit}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public getctylist(subcategory,startlimit,endlimit,statename): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'city/getCityByCourse', { subcategory,startlimit,endlimit,statename }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public getctyclglt(startlimit,endlimit,locId, subcategory): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getClgListByLoc_Copy', {startlimit,endlimit, locId, subcategory }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public getLocation(search_term): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'city/getCity', { search_term }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public getclgfees(min_fees, max_fees, courseId,statename): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return this.httpClient.post<any>(this.baseUrl + 'college/getClgListByFees', { min_fees, max_fees, courseId,statename }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getexams(courseCatId,statename,ac_id): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getExamsByCategory', { courseCatId,statename,ac_id}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getarticles(searchCategory: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getArticleList', { searchCategory }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getevents(value): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Event/getEventList', {value}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public geteventss(value,startlimit,endlimit): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Event/getEventList', {value,startlimit,endlimit}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public geteventsdetails(eventid): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Event/getEventDetails', {eventid}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public addclgshortlist(userId,collegeId,active,event): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/addUpdateSpecificList', {userId,collegeId,active,event}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getusrshortlistclg(userId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getListOfShortListedColleges', {userId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public predictaddmission(student_name, email, mobile_no, category, college, course, entrance_exam, rank, score): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/savPredictAdmission',
      {student_name, email, mobile_no, category, college, course, entrance_exam, rank, score},this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getcareer(courseCatId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getCareerByCategory', {courseCatId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public careerdetails(careerId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getCareerDetails', {careerId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public trendincorses(categoryId,academic_categories): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'course/getTrendingCoursesList', {categoryId,academic_categories}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public trndcrsdetail(courseId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'course/getTrendingCoursesDetailsById', {courseId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public placementdetails(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getPlacementDataOfClg', {collegeId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public tableofcontent(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getTableOfConent', {collegeId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  // home page bottom tabs api
  public getsearchbar(text): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getDataBySearch', { text }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }



  // compare clg api

  public getcomprbtechclg(): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'compare_College/getPopularCompOfBTech ', {}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getcomprMbaclg(): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'compare_College/getPopularCompOfMBA ', {}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  public getcomprclgsrch(searchTerm, limit, start): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}compare_College/getCollegeList`, {
      searchTerm, limit, start
    }, this.httpOptions);
  }

  public getCourselevel(Id): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Common/getLevelById', { Id }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getcourselts(Id,level,subcategory): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Compare_College/getCoursesById ', { Id, level,subcategory}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public clglistforcompr(categoryid): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getPopularCollegeListForCompare ', { categoryid }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }





  //  college details pages api's
  // college info tab
  public getclgdetails(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeDetailsByID ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getpopprogrammes(collegeId, subcategory,collegeTypeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeProgrammesByID', { collegeId, subcategory,collegeTypeId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getotherprogrmes(collegeId, subcategory): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeOtherProgrammesByID ', { collegeId, subcategory}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public gethighlightqan(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeHighlightByID ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getAdmissionprosess(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeAdmissionProcess ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
 

  public getplacement(searchYear, searchCategory, collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getPlacementDataOfClg ',
      {searchYear, searchCategory, collegeId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getplacementdtil(collegeId,searchYear, searchCategory, ): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getPlacementDataOfClg ',
      { collegeId,searchYear, searchCategory, }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getplacecategory(collegeId,): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'category/getPlacementCategory ',
      {collegeId,}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getplacecategoryyear(collegeId,categoryId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'category/getYearByCategory ',
      {collegeId,categoryId}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getlatestnpop(): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getLatestBlogs',
      {}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getclgranking(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getRanktDataOfClg ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getcoursfeesnfees(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCoursesAndFeesOfClg ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getscholarship(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getScholarShipOfClg  ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getFaqs(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getFAQsOfClg ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getclgreview(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getReviewDetails', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getpopularclg(cityid): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getPopularClgByLocation', { cityid }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getsuitclg(collegeId, categories): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegesAccordingCategory ', { collegeId, categories }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  //  courses&fees tab api

  public getfeeswiseclg(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'course/getCoursesOfCollege ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getcityotherclg(cityId,collegeId,subcat): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Course/getOtherCollegesOfferingSameCourseInSameCity',
      { cityId,collegeId,subcat }, this.httpOptions).pipe(retry(0), catchError(this.handleError)
      );
  }
  public getnotification(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getExamNotificationForClg ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getsubcatlist(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'category/getSubCategoryList ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getcourselevel(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'course/getCourseLevel ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getFeesDataOfCollege(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getFeesDataOfCollege ', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getExamAccepted(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getExamAccepted', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }


  // tab-3 reviews section

  public latestblog(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getLatestBlogs', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public reviewDetails(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getReviewDetails', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public reviewvote(user_id, reviewid, ishelpful): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + 'Review/voteReview', { user_id, reviewid, ishelpful }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  //  tab-4 admission section
  public admissionprocess(collegeId): Observable<any> {

    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeAdmissionProcess', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public clgbylocation(cityid): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getPopularClgByLocation', { cityid }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public contactdetails(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegeContactDetails', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public addmissionqueans(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/getQueAnsAboutAdmissions', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getreview(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'common/getReviewDetails', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  // tab-5- placement api section

  public placementdata(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getLastThreeYearsPlacementData', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public placementreview(collegeId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Review/getPlacementRating', { collegeId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
        // 6 Q&A Tabs Api

        public qnsandans(collegeId,length,draw): Observable<any> {
          return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/getQAofCollege', { collegeId,length,draw }, this.httpOptions)
            .pipe(retry(0), catchError(this.handleError)
            );
        }


public voteAnswere(action,answer_id,user_id): Observable<any> {
  return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/voteAnswere', { action,answer_id,user_id}, this.httpOptions)
           .pipe(retry(0), catchError(this.handleError)
           );
       }
       public followQuestion(action,user_id,question_id): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/followQuestion ', { action,user_id,question_id}, this.httpOptions)
                 .pipe(retry(0), catchError(this.handleError)
                 );
             }

   public unanser(collegeId,length,draw): Observable<any> {
   return this.httpClient.post<any>(this.baseUrl + 'QuestionsAns/getUnAnsweredQueofCollege', { collegeId,length,draw }, this.httpOptions)
            .pipe(retry(0), catchError(this.handleError)
            );
        }


  // searching tabs Api
  public getexamsearch(searchexam): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getExamSearch ', { searchexam }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public getcollegesrch(searchcollege): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'college/getCollegesearch', { searchcollege }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public getarticlesrch(searcharticle): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getArticleSearch', { searcharticle }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public examdetails(examId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'exam/getExamDetails', { examId }, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }
  public articledetail(blogId,type=0): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Blogs/getBlogsDetails', { blogId, type}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

  public relatedArt(blogId): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + 'Blogs/getBlogsDetails', { blogId, type: 0}, this.httpOptions)
      .pipe(retry(0), catchError(this.handleError)
      );
  }

    // brochure Api

    public getbrochure(collegeId,userId): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'common/downloadBrochure', {collegeId, userId }, this.httpOptions)
        .pipe(retry(0), catchError(this.handleError)
        );
    }


        //  article&events
        public article(searchCategory,value,statename): Observable<any> {
          return this.httpClient.post<any>(this.baseUrl + 'Blogs/getBlogs', { searchCategory,value,statename }, this.httpOptions)
            .pipe(retry(0), catchError(this.handleError)
            );
        }
      //  recommanded tabs api
      public getfeatureclg(categoryId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'College/getFeaturedColleges', { categoryId }, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }
      public clgpopular(courseId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/getPopColleges', { courseId }, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }


      public placementclg(categoryId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/getCollegePlacement', { categoryId}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
        );
      }


      public clgbylocatio(loc,course): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/getClgListByLoc', { loc,course }, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }
      public clgbyrating(courseId,maxRate,minRate): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/getRatingColleges', { courseId,maxRate,minRate }, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }

      public feesbyclg(courseId,min_fees,max_fees): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/getClgListByFees', {courseId,min_fees,max_fees}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }

      public getinfrarating(collegeId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'Review/getInfrastructureRating', {collegeId}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }
      public getscolershipinfo(collegeId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/getScholarShipOfClg', {collegeId}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }

          public generateLink_req(data): Observable<any> {
        return this.httpClient.post<any>('https://campusapi.ohcampus.com/web/Common/generateLink_req', data, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }

      
          public getfooterNotification(): Observable<any> {
        return this.httpClient.post<any>('https://campusapi.ohcampus.com/web/Common/getfooterNotification', this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }
      public getcertification(courseCatId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'Certification/getlistofCertificate', {courseCatId}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }
      public certificatedtls(certificateId): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'Certification/getCertificationDatabyId', {certificateId}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }

      public specilization(): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'common/getTrendingSpecilization', {}, this.httpOptions)
          .pipe(retry(0), catchError(this.handleError)
          );
      }

      public addmisiondatepdf(collegeId,sub_category): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'college/AdmissionProcessImportantDatesPDF',
           {collegeId,sub_category}, this.httpOptions).pipe(retry(0), catchError(this.handleError)
          );
      }

      public getQue_PaperByExamId(data): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'exam/getQue_PaperByExamId',
          data, this.httpOptions).pipe(retry(0), catchError(this.handleError)
          );
      }
      public getTrendingSpecilizationBySubCatId(data): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'common/getTrendingSpecilizationBySubCatId',
          data, this.httpOptions).pipe(retry(0), catchError(this.handleError)
          );
      }
      public getCollegeAdmissionProcess(data): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'College/getCollegeAdmissionProcess',
          data, this.httpOptions).pipe(retry(0), catchError(this.handleError)
          );
      }
      public getCollegeFacilitiesByID(data): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'College/getCollegeFacilitiesByID',
          data, this.httpOptions).pipe(retry(0), catchError(this.handleError)
          );
      }
      public getNotificationData(data): Observable<any> {
        return this.httpClient.post<any>(this.baseUrl + 'Common/getNotificationData',
          data, this.httpOptions).pipe(retry(0), catchError(this.handleError)
          );
      }


}













