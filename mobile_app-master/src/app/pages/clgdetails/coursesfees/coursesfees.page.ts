import { Component, EventEmitter, OnInit, Output,ViewChild, ElementRef,AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../../popuplogsign/popuplogsign.page';
import { Injectable, } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-coursesfees',
  templateUrl: './coursesfees.page.html',
  styleUrls: ['./coursesfees.page.scss'],
})
export class CoursesfeesPage implements OnInit   {
  [x: string]: any;
 
  @Output() courseClicked = new EventEmitter<string>();
  slidepic = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };


    segment: string;
  activeSegment = 'tabsA'; // Default active segment
  showCourseInfoTab = false;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public segmentStud: string = 'tabs1';
  selectedSegment = 'Latest';
  filtersegment = 'tabsA';
  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };
  slideOptspage = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };
  collegeId: any;
  details: string;
  clgdetailArry: any;
  collegename: any;
  feesbclgarray: any[];
  cityotherclg: any[];
  // programmeQarray: any[]=[];
  clgimgArry: any[] = []; notificationarry: any[] = []; latenpopArr: any[]; popularArr: any[]; seachform: FormGroup; subcatltsArr: any[];
  courselevelArr: any[]; dataofclgArr: any[]; examAcceptedArr: any[]; loginuserId: string | null = null; courseId: any; catid: any;
  active: string; event: string; isBookmarked = false; shortlistedColleges: Set<string> = new Set(); description: any;
  userId: string; cityId: any; cityname: any; segmentIndex: number;
  subcategory: any;

  // selectedCourseId: string | null = null;
  selectedclgArr: any[];
  crsubcategory: string;
  responseData: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  subcat: any;
  tabsM: any;
categoryId: any;
  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
  ) { }

  // ngOnInit() {
  //   localStorage.setItem('selectedCourseIdB', '');

  //           this.course_categoryvalue=localStorage.getItem('course_category')
  //           alert('Course Category'+this.course_categoryvalue);
  //   this.crsubcategory = localStorage.getItem('selectedCourseId');
  //   console.log(this.crsubcategory);
  //   this.getResponseDataFromLocalStorage();
  //       this.categoryId=  this.categoryId = localStorage.getItem('catID')?.replace(/"/g, '');

   
  //   console.log('Selected Course ID:', this.crsubcategory);
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     console.log('User information:', user);
  //     this.loginuserId = user.id;
  //     console.log(this.loginuserId);
  //   } else {
  //     console.log('No user information found in local storage.');
  //   }

  //   this.activatedRoute.params.subscribe(params => {
  //     this.collegeId = params.collegeid;

  //     this.getclgdetail();
    

  //     this.notifications();
  //     this.getlatestnpop();
  //     this.subcatlts();
  //     this.courselevel();
  //     this.dataofclg();
  //     this.examAccepted();
  //     this.courseinfo();

  //   });

  // }

  ngOnInit() {

  localStorage.setItem('selectedCourseIdB', '');

  // Get course_category first
  this.course_categoryvalue = localStorage.getItem('course_category');
  console.log('Course Category:', this.course_categoryvalue);

  // Get selected course
  this.crsubcategory = localStorage.getItem('selectedCourseId');
  console.log('Selected Course ID:', this.crsubcategory);

  // Get catID
  let catIdFromStorage = localStorage.getItem('catID');

  if(this.course_categoryvalue===null || this.course_categoryvalue===''){
    this.categoryId = catIdFromStorage.replace(/"/g, '');
  }
  else
  {
    this.categoryId = this.course_categoryvalue;
  }

  // if (catIdFromStorage && catIdFromStorage !== '') {
  //   // If catID exists → use it
  //   this.categoryId = catIdFromStorage.replace(/"/g, '');
  // } else {
  //   // If catID NOT found → use course_category
  //   this.categoryId = this.course_categoryvalue;
  // }

  console.log('Final Category ID:', this.categoryId);
  // alert('Final Category ID: ' + this.categoryId);

  // User info
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    this.loginuserId = user.id;
    console.log('User ID:', this.loginuserId);
  } else {
    console.log('No user information found in local storage.');
  }

  // Route params
  this.activatedRoute.params.subscribe(params => {
    this.collegeId = params.collegeid;

    this.getclgdetail();
    this.notifications();
    this.getlatestnpop();
    this.subcatlts();
    this.courselevel();
    this.dataofclg();
    this.examAccepted();
    this.courseinfo();
  });

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

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  ngAfterViewInit() {
    
  }

  onCourseClicked(courseid: string, tabName: string) {
    // alert('course id'+courseid);
    this.segment = tabName;
    localStorage.setItem('selectedCourseIdB', courseid);
    this.segment = tabName;
     this.courseClicked.emit(tabName);
     this.TabselectedIndex =11; // Set the selected index for the "Course Info" tab
     console.log('Selected Tab:', tabName, 'Selected Index:', this.selectedIndex);
   
  
  }

  
 

  courseinfo() {

    this.service.getotherprogrmes(this.collegeId, this.crsubcategory).subscribe(res => {
      // console.log(res);
      this.selectedclgArr = res.popular_programmes;
      console.log(this.selectedclgArr);
      ;
    });
  }

  clgdetls(collegeid: string) {

    this.router.navigate(['/clgdetails', collegeid]);
  }

  studentSay(ev: any) {
    this.segmentStud = ev.detail.value;

  }
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;

  }
  filterTabs(ev: any) {
    this.filtersegment = ev.detail.value;
  }




  async feesbaseclg() {
    // alert('college type id'+this.collegeTypeId);
console.log(this.collegeTypeId);

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

    await loading.present();

    this.service.getcoursiformation(this.collegeId, this.crsubcategory,this.collegeTypeId,  this.categoryId).subscribe(
      res => {
        this.feesbclgarray = res.courses_list;
        loading.dismiss();  // Dismiss the loader after data is fetched
      },
      error => {
        console.error('Error fetching fees-based colleges:', error);
        loading.dismiss();  // Dismiss the loader in case of an error
      }
    );
  }


  otherclgincity() {
    this.cityId = this.cityId;
    this.service.getcityotherclg(this.cityId, this.collegeId,this.crsubcategory).subscribe(res => {
      console.log(res);
      this.cityotherclg = res.courses_list;
      console.log(this.cityotherclg);

    });
  }



  notifications() {

    this.service.getnotification(this.collegeId).subscribe(res => {
      // console.log(res);
      this.notificationarry = res.response_data;
      // console.log(this.notificationarry);
    });
  }
  getlatestnpop() {

    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  getclgdetail() {

    this.service.getclgdetails(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clgdetailArry = res.college_detail;
      console.log( this.clgdetailArry );
      this.collegename = res.college_detail[0].title;
      this.clgimgArry = res.college_images;
      this.cityId = res.college_detail[0].cityid;
          this.collegeTypeId = res.college_detail[0].Collage_category;
            this.feesbaseclg();
      console.log( this.collegeTypeId);
      
      this.otherclgincity();

      this.cityname = res.college_detail[0].city;
    });
  }



  subcatlts() {

    this.service.getsubcatlist(this.collegeId).subscribe(res => {
      // console.log(res);
      this.subcatltsArr = res.SubCategory;
    });
  }

  courselevel() {
    this.service.getcourselevel(this.collegeId).subscribe(res => {
      // console.log(res);
      this.courselevelArr = res.SubCategory;
    });
  }





  dataofclg() {
    this.service.getFeesDataOfCollege(this.collegeId).subscribe(res => {
      // console.log(res);
      this.dataofclgArr = res.fees_list;
    });
  }
  examAccepted() {
    this.service.getExamAccepted(this.collegeId).subscribe(res => {
      // console.log(res);
      this.examAcceptedArr = res.SubCategory;
    });
  }

  async openModal(modalId: string) {
    let modal;
    switch (modalId) {
      case 'filter-modal':
        modal = await this.modalController.create({
          component: CoursesfeesPage, // replace with your filter modal component
          // Add any necessary data to pass to the modal here
        });
        break;
      case 'course-modal':
        modal = await this.modalController.create({
          component: CoursesfeesPage, // replace with your course modal component
          // Add any necessary data to pass to the modal here
        });
        break;
      // Add other cases for additional modals
      default:
        break;
    }
    return await modal.present();
  }



  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
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

  toggleIconColor(collegeId: number): void {
    // Toggle the state of the icon
    this.isBookmarked = !this.isBookmarked;

    // Your logic to handle the click event, such as calling addclgshortlist
    // this.addclgshortlist();
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

      const res = await this.service.addclgshortlist(this.userId, this.collegeId, this.active, this.event).toPromise();

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
    // Check if token exists in local storage
    // this.token = localStorage.getItem('token');

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


  ionViewWillLeave() {
  localStorage.removeItem('course_category');
}
}
