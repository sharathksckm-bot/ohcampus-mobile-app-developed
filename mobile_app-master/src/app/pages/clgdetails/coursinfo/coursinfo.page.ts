import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../../popuplogsign/popuplogsign.page';
import { IonModal } from '@ionic/angular';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-coursinfo',
  templateUrl: './coursinfo.page.html',
  styleUrls: ['./coursinfo.page.scss'],
})
export class CoursinfoPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  slideOptspage={
    initialSlide: 0,
    slidesPerView: 1.1,
  };
  slidepic = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };
  aplicationForm: FormGroup;
  selectedSegment = 'Latest';
  loginuserId: string | null = null;
  courseId: any;
  catid: any;
  studentForum: FormGroup;
  active: string;
  event: string;
  isBookmarked = false;
  shortlistedColleges: Set<string> = new Set();
  description: any;
  userId: string;
  cityId: any;
  cityname: any;
  value: any;

  collegeId: any;
  clgdetailArry: any;
  collegename: any;
  categories: any;
  cityid: any;
  courseid: any;
  courseinfoArr: any = [];
   eligibilityArr: any;
  crsubcategory: string;
  crsfeesstuctreArry: any[];
  courseexamArry: any=[];
  admisionprocesArry: any[];
  coursqnsansArry: any[];
  corsesfessarr: any[];
  coursename: any;
  commanlyaskedqaeArr: any = [];
  qunanswer: any[] = [];
  popprogrmmArry: any[] = [];
  segment: string;
  user_id: string;
  courselevel: any;
  course: any;
  coursesArray: any[];
  popularclgarry: any[];
  latenpopArr: any[];
  popularArr: any[];
  clgimgArry: any[] = [];
  CourseCategoryArr: any = [];
  courseLoader: boolean;
  examListArr: any = [];
  CoursesByCatArr: any = [];
  categoryId: any;
  sameclgArry: any =[];
item: any;
  responseData: any;
  userData: any;
  email: any;
  username: any;
  subcategory: any;
  phone: any;
  token: any;
  filteredExams: Observable<any[]>;
   entranceExamControl = new FormControl();
  clgcategory: any;
  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {


    this.aplicationForm = this.formBuilder.group({
      student_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \'-]+$')]],
      mobile_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      category: ['', Validators.required],
      course: ['', Validators.required],
      college: ['', Validators.required],
      entrence_exam: ['',],
      rank: ['',],
      score: ['',]
    });
    this.studentForum = this.formBuilder.group({
      studentque: ['', Validators.required]
    });


    this.coursesArray = JSON.parse(localStorage.getItem('courses'));
    this.courseId = this.coursesArray[0].id;
    this.crsubcategory = localStorage.getItem('selectedCourseIdB');
  //  alert(this.crsubcategory);

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      console.log(this.collegeId);
      this. getcourseinfo();
      this. coursesAdmissionProcess();
      this.entranceExamsForCourse()
      this.coursesfeesstucture();
      this.getCollegeProgrammesByID();
      this. clgbylocation();
      this.getclgdetail();
      this. getlatestnpop();
      this.getcourscategory();
      this.setupAutocomplete();
      this. getexamlist();
      this.getCourseByCategoryClg();
      this. populateUserData();
    });
  }


  populateUserData() {
    this.simpleuserdata();
    this.getResponseDataFromLocalStorage();

    // Populate form fields if user data exists
    if (this.loginuserId) {
      this.aplicationForm.patchValue({
        student_name: this.username,
        email: this.email,
        mobile_no: this.phone,
      });
    }
  }


  simpleuserdata() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      this.email = user.email; // Correctly assign the email
      this.username = user.name; // Correctly assign the username
      this.phone = user.phone; // Assuming the phone is stored in user object
    } else {
      console.log('No user information found in local storage.');
    }
  }


  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');
    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);
      // Ensure that responseData is not empty and has at least one entry
      if (responseData && responseData.length > 0) {
        this.loginuserId = responseData[0].id;
        this.username = responseData[0].f_name;
        this.email = responseData[0].email;
        this.phone = responseData[0].phone;
        this.token = responseData[0].token;
      } else {
        console.log('No user data found in response_data.');
      }
    } else {
      console.log('No response_data found in local storage.');
    }
  }


  openModal(modalId: string): void {

    const modal = document.getElementById(modalId);

  }

  savCourseApplication() {
    if (this.aplicationForm.invalid) {
      this.aplicationForm.markAllAsTouched();
      return;
    }
    if (this.aplicationForm.valid) {
      this.service.saveapplication(
        this.aplicationForm.controls.student_name.value,
        this.aplicationForm.controls.email.value,
        this.aplicationForm.controls.mobile_no.value,
        this.aplicationForm.controls.category.value,

        this.aplicationForm.controls.college.value,

        this.aplicationForm.controls.course.value,
        this.aplicationForm.controls.entrence_exam.value,
        this.aplicationForm.controls.rank.value,
        this.aplicationForm.controls.score.value,
      ).subscribe(res => {
        this.showAlert ('Submitted !', 'Thanks for submitting the details.Our counsellor will contact you shortly to provide details.');
        this.aplicationForm.reset();
        this.close();
      });
    }
  }


  cancel() {
     this.modal.dismiss('/tabM');
    this.modalController.dismiss({
      dismissed: true,
    }).then(() => {
      // this.resetSelections();
    });
  }

  numberOnly(event): boolean {
    console.log(event.target.value);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  async close() {
    await this.modalController.dismiss();
  }



  async  exmdetail(id){
    this.router.navigate(['/coursewiseexamdetails',id]);

  }

  getcourscategory(){

    this.service.getCoursescategory().subscribe(res => {
      console.log(res);
      this.CourseCategoryArr = res.data;

    });
  }

  //   getexamlist(){
  //     this.service.getexamlist('').subscribe(res => {
  //       console.log(res);
  //       this.examListArr = res.response_data;
  //     });
  // }



  getexamlist() {
   
    this.service.getexamlist('').subscribe(res => {
      this.examListArr = res.response_data; 
      console.log(this.examListArr);
    });
  }



  setupAutocomplete() {
    this.filteredExams = this.entranceExamControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterExams(value))
    );

    
    this.entranceExamControl.valueChanges.subscribe(value => {
     
      this.aplicationForm.patchValue({ entrence_exam: value });
    });
  }


  filterExams(searchTerm: string): any[] {
    if (!searchTerm) {
      return this.examListArr;
    }
    return this.examListArr.filter(exam =>
      exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }




  getCourseByCategoryClg() {
    this.service.getcourcatogorybyclg(this.aplicationForm.value.category, this.collegeId).subscribe(res => {
      this.courseLoader = false;
      this.CoursesByCatArr = res.data;

    });
  }




  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  getlatestnpop(){

    this.service.getlatestnpop().subscribe(res => {
      console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr  = res.popular_blogs;
    });
  }
  async postQuestion() {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }

    if (
      this.studentForum.controls['studentque'].invalid
    ) {
      this.studentForum.markAllAsTouched();
    } else {
this.user_id = this.loginuserId ;
      this.service.userqnspost(this.collegeId,this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe(
        async res => {
          await this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
          this.studentForum.reset();
        },
      );
    }
  }



  clgbylocation() {
    //  this.cityid =this.cityId;
    this.service.clgbylocation( this.cityid).subscribe(res => {
      console.log(res);
      this.popularclgarry = res.popularColleges;
      console.log(this.popularclgarry);

    });
  }
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      console.log(this.clgdetailArry);
      this.collegename = res.college_detail[0].title;
        this.clgimgArry = res.college_images;
 this.clgcategory = res.college_detail[0].Collage_category;
      this.cityid = res.college_detail[0].cityid; // Bind cityid here
      this.clgofferingsamesity();
      this.cityname = res.college_detail[0].city;
      this.categories = res.college_detail[0].categoryId;
      console.log(this.categories);

    });
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  clgdetls(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }


  

  async getcourseinfo() {
    const loading = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null,  // Custom spinner with logo
      translucent: true,
      cssClass: 'custom-loading'
    });
  
    await loading.present(); // Show the loader
  
    this.courseid = this.crsubcategory;
    this.service.getcoursesinfo(this.courseid, this.collegeId).subscribe( 
      res => {
        if (res.response_code === "200") {
           loading.dismiss();
          // Data is available
          this.courseinfoArr = res.courseinfo;
          this.coursename = res.courseinfo[0].name;
          this.corsesfessarr = res.coursefees;
          this.eligibilityArr = res.eligibility;
          console.log(this.eligibilityArr);
        } else if (res.response_code === "400") {
          console.error('Error: Data not found or invalid request');
        } else {
          console.error('Unexpected response code:', res.response_code);
        }
  
        // Dismiss the loader after processing
       
      },
      error => {
        console.error('Error fetching course info:', error);
        // Dismiss the loader in case of an error
        loading.dismiss();
      }
    );
  }
  



  coursesfeesstucture(){
    this.service.getCoursesFeeStructure(this.courseid,this.collegeId).subscribe(res => {
    console.log(res);
    this.crsfeesstuctreArry = res.coursefees;
  });
}

  coursesAdmissionProcess(){
    this.service.getCoursesAdmissionProcess(this.courseid,this.collegeId).subscribe(res => {
    console.log(res);
    this.admisionprocesArry = res.coursefees;
    this.commanlyaskedqaeArr = res.Commonaly_Asked_Questions;
  });
}



entranceExamsForCourse(){
  this.courseid = this.crsubcategory;
  this.service.getEntranceExamsForCourse(this.courseid,this.collegeId).subscribe(res => {
  console.log(res);
  this.courseexamArry = res.EntranceExams;
});
}

clgofferingsamesity(){
  this.courseid =    this.crsubcategory;
  this.service.clgofferingsamecity(this.courseid,this.cityid,this.collegeId).subscribe(res => {
  console.log(res);
   this.sameclgArry = res.colleges_Offereing_SameCourse;
  //  console.log(this.sameclgArry);
});
}

getCollegeProgrammesByID() {
  let collegeTypeId=this.clgcategory;
  this.service.getpopprogrammes(this.collegeId,this.subcategory,collegeTypeId).subscribe(res => {
    // console.log(res);
    this.popprogrmmArry = res.popular_programmes;
    // console.log(this.popprogrmmArry);
    this.qunanswer = res.Commonaly_Asked_Questions;

  });
}

toggleIconColor(collegeId: number): void {
  // Toggle the state of the icon
  this.isBookmarked = !this.isBookmarked;

 
}

async predictadmission(id: string, CatId: string, subCatName: string) {
  const modal = await this.modalController.create({
    component: PredictadmissionPage,
    componentProps: {
      id,
      CatId,
      subCatName
    }
  });
  return await modal.present();
}

async dismissModal() {
  await this.modalController.dismiss();
}
async presentSignInModal() {
  const modal = await this.modalController.create({
    component: PopuplogsignPage,
  });
  return await modal.present();
}



async addclgshortlist(collegeId: string) {
  if (!this.loginuserId) {
    this.presentSignInModal();
    return;
  }

  try {

        this.collegeId = collegeId;
        this.userId = this.loginuserId;
        this.active = '1';
        this.event = 'insert';

    const res = await this.service.addclgshortlist( this.userId,this.collegeId,  this.active, this.event).toPromise();

    if (res.response_code === '200') {
      this.shortlistedColleges.add(collegeId);
      this.isBookmarked = true; // Mark as bookmarked
      await this.Alert('Success', 'College added to shortlist successfully');
    } else if (res.response_code === '100') {
      await this.Alert('', 'College already added to shortlist');
    } else {
      await this.Alert('Error', 'An unexpected error occurred');
    }
  } catch (error) {
    await this.Alert('', 'An unexpected error occurred');
  }
}

async Alert(header: string, message: string) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']
  });

  await alert.present();
}



async brochure(collegeId: string) {
  
  if (!this.loginuserId) {
    // Token is not present, so present sign-in modal
    this.presentSignInModal();
    return; // Exit function if token is missing
  }

  try {
    this.collegeId = collegeId;
    this.userId = this.loginuserId;
    // Call your service method to get the brochure
    const res = await this.service.getbrochure(this.collegeId, this.userId).toPromise();
    console.log(this.collegeId);
    console.log(this.userId);


    // Handle different response codes
    if (res.response_code === '200') {
      await this.showAlert('Success', 'Brochure sent successfully by mail');
    } else if (res.response_code === '500') {
      await this.showAlert('Error', 'Brochure not available');
    } else {
      await this.showAlert('Error', 'An unexpected error occurred');
    }
  } catch (error) {
    // Handle errors from API call or any unexpected errors
    await this.showAlert('Error', 'An unexpected error occurred');
  }
}

async showAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']
  });

  await alert.present();
}



async clgpredict(id: string, CatId: string, subCatName: string) {
  // this.token = localStorage.getItem('token');
  if (!this.loginuserId) {
    this.presentSignInModal();
    return;
  } else {
    await this.predictadmission(id, CatId, subCatName);
  }
}

 // Additional input validation for other fields
 checkValidInputDat(event: any, field: string) {
  if (field === 'student_name') {
    const pattern = /^[a-zA-Z \'-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
    }
  } else if (field === 'mobile_no') {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
      // Limit to 10 digits
      if (event.target.value.length > 10) {
        event.target.value = event.target.value.slice(0, 10);
      }
  }
}

  }




