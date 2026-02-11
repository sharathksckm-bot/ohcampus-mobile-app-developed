import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../../popuplogsign/popuplogsign.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortlistService } from '../../../services/shortlist.service';


@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.page.html',
  styleUrls: ['./admissions.page.scss'],
})
export class AdmissionsPage implements OnInit {
  slidepic = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };
  public segmentStud='tabs1';
  selectedSegment = 'Latest';
  filtersegment = 'tabsA';


  clgdetailArry: any[]=[];
  details: any;
  collegeId: any;
  college: any;
  clgid: any;
  data: any;
item: any;
whatnew: any;
tableOfContent: any[] = [];
collegename: any[];
currentYear: any;
faqsarray: any[]=[];
notificationarry: any[]=[];
clghightlight: any[]=[];
admiprocessarry: any=[];
examedateArr: any[]=[];
entranceExamsArr: any = [];
admissionProcessFAQArr: any = [];
popularclgarry: any;
cityid: any;
latenpopArr: any[];
  popularArr: any[];
  ansquesArr: any=[];
  clgdataArry: any[];
  clgimgArry: any[] = [];
  slideOpts1={
    initialSlide: 0,
    slidesPerView: 1.3,
  };

  slideOptsnew =
  {
    initialSlide: 0,
    slidesPerView: 1.1,
  };

  slideOptssuited =
  {
    initialSlide: 0,
    slidesPerView: 1.1,
  };


// review
reviewsArry: any;
overallrating: any;
reviewsArr: any = [];
totalPlacementRateCount: any;
totalInfrastructureRateCount: any;
totalFacultyRateCount: any;
totalHostelRateCount: any;
totalCampusRateCount: any;
totalMoneyRateCount: any;
one2twoRate: any;
two2threeRate: any;
three2fourRate: any;
four2fiveRate: any;
  totalRateCount: any;
  suitclgarry: any;
  categories: any;
  
  isThumbsUpClicked: boolean = false; // Initially not clicked
  isThumbsDownClicked: boolean = false; // Initially not clicked

  loginuserId: string | null = null;
  courseId: any;
  catid: any;
  active: string;
  event: string;
  isBookmarked = false;
  shortlistedColleges: Set<string> = new Set();
  description: any;
  userId: string;
  cityId: any;
  cityname: any;
  viewPDF: any;
  studentForum: FormGroup;
  coursesArray: any[];
  user_id: string;
  courselevel: any;
  course: any;
  responseData: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  courseid: any;
  selectedCourseName:string | null = null;


  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    public formBuilder: FormBuilder,
    private shortlistService: ShortlistService
  ) { }


  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.loginuserId = user.id;
    } else {
  
    }
    this.studentForum = this.formBuilder.group({
      studentque: ['']
    });

    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    if (this.selectedCourseName) {
      console.log('Selected Course Name exists:', this.selectedCourseName);
    } else {
      console.log('Selected Course Name is null or undefined.');
    }


    this.coursesArray = JSON.parse(localStorage.getItem('courses'));
  
    this.courseId = this.coursesArray[0].id;

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
    
      this.getclgdetail();
     this.faqs();
     this.notifications();
     this. admissionproces();
     this. getlatestnpop();
     this. ansques();
     this.review();

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

  async postQuestion() {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }

    if (this.studentForum.invalid) {
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
  voteReview(reviewId, userId, ishelpful) {
    // console.log(this.value);
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
      // console.log(res);

    });
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }


  toggleAccordion(item) {
    item.isOpen = !item.isOpen;
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

  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  getclgdetail() {

    this.service.getclgdetails(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = (new Date()).getFullYear();
 this.whatnew=res.college_detail[0].what_new;
 this.tableOfContent = res.table_of_content;
 this.clghightlight = res.college_detail[0].CollegeHighlight;
//  console.log(this.clghightlight);
 this.cityid = res.college_detail[0].cityid;
 this.clgimgArry = res.college_images;
 // console.log(this.cityid)
 this.bylocpopclg();
 this.categories = res.college_detail[0].categoryid;
      console.log(this.categories);
 this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
//  console.log(this.categories);
 this.suitedclg();
    });
  }

  faqs(){
        this.service.getFaqs(this.collegeId).subscribe(res => {
      // console.log(res);
      this.faqsarray = res.FAQs;
      // console.log(this.faqsarray);

    });
  }

  addmissiondatepdf(sub_category) {
    this.service.addmisiondatepdf(this.collegeId, sub_category).subscribe(res => {
      this.viewPDF = res;
      window.open(this.viewPDF.PDF, '_blank');
    });
  }



 notifications(){
        this.service.getnotification(this.collegeId).subscribe(res => {
      this.notificationarry = res.response_data;

    });
  }
 

  async admissionproces() {
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

    await loading.present();  // Display the loader

    this.service.admissionprocess(this.collegeId).subscribe(
      res => {
        this.admiprocessarry = res.AdmissionProcess;
        this.entranceExamsArr = res.AdmissionProcess.entrance_exams;
        this.admissionProcessFAQArr = res.Commonaly_Asked_Questions;
        loading.dismiss();  // Dismiss the loader once data is fetched
      },
      error => {
        console.error('Error fetching admission process:', error);
        loading.dismiss();  // Dismiss the loader in case of an error
      }
    );
  }


  bylocpopclg(){
        this.service.clgpopular(this.courseid).subscribe(res => {
          this.popularclgarry = res.response_data;
      
    });
  }
  getlatestnpop(){
        this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr  = res.popular_blogs;
    });
  }

  ansques(){
        this.service.addmissionqueans(this.collegeId).subscribe(res => {
      // console.log(res);
      this.ansquesArr = res.QueAnsAboutAdmissions;
    });
  }

  review() {

    this.service.getclgreview(this.collegeId).subscribe(res => {
      // console.log(res);
      this.reviewsArry = res.data;
      //  console.log(this.reviewsArry);
      this.reviewsArr = res.data.reviews;
      this.overallrating = res.data.reviews[0].totalRatingCount;
      // console.log(this.overallrating);
      this.totalRateCount = res.data.totalRateCount;
      this.totalPlacementRateCount = res.data.totalPlacementRateCount;
      this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
      this.totalFacultyRateCount = res.data.totalFacultyRateCount;
      this.totalHostelRateCount = res.data.totalHostelRateCount;
      this.totalCampusRateCount = res.data.totalCampusRateCount;
      this.totalMoneyRateCount = res.data.totalMoneyRateCount;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
    });
  }
  suitedclg() {

  
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);
    });
  }




  compclg(collegeId) {
    this.router.navigate(['/clgcompare',collegeId ]);
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
    this.isBookmarked = !this.isBookmarked;
  }

 
  async toggleShortlist(collegeId: string) {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }
  
    try {
      if (this.shortlistService.isShortlisted(collegeId)) {
        await this.removeclgshortlist(collegeId);
      } else {
        await this.addclgshortlist(collegeId);
      }
    } catch (error) {
      console.error('Error toggling shortlist:', error);
    }
  }
  
  async addclgshortlist(collegeId: string) {
    const loading = await this.loadingController.create({
          message: `
            <div class="custom-spinner-container">
              <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
              <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
            </div>
            <span style="margin-top: 10px;"></span>`,
          spinner: null,
          translucent: true,
          cssClass: 'custom-loading'
        });
    await loading.present();
  
    try {
      const res = await this.service.addclgshortlist(this.loginuserId, collegeId, '1', 'insert').toPromise();
      if (res.response_code === '200') {
        this.shortlistService.addToShortlist(collegeId);
        await this.showAlert('Success', 'College added to shortlist successfully');
      } else {
        await this.showAlert('Error', 'Failed to add college to shortlist');
      }
    } catch (error) {
      console.error(error);
      await this.showAlert('Error', 'An error occurred while adding to shortlist');
    } finally {
      await loading.dismiss();
    }
  }
  
  async removeclgshortlist(collegeId: string) {
    const loading = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null,
      translucent: true,
      cssClass: 'custom-loading'
    });
    await loading.present();
  
    try {
      const res = await this.service.addclgshortlist(this.loginuserId, collegeId, '0', 'update').toPromise();
      if (res.response_code === '200') {
        this.shortlistService.removeFromShortlist(collegeId);
        await this.showAlert('Success', 'College removed from shortlist successfully');
      } else {
        await this.showAlert('Error', 'Failed to remove college from shortlist');
      }
    } catch (error) {
      console.error(error);
      await this.showAlert('Error', 'An error occurred while removing from shortlist');
    } finally {
      await loading.dismiss();
    }
  }
  
  isShortlisted(collegeId: string): boolean {
    return this.shortlistService.isShortlisted(collegeId);
  }


  async Alert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }



  async brochuresuit(collegeId: any)
  {
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    }
// alert(collegeId)
    try {
  
      // this.collegeId = collegeId;
      this.userId = this.loginuserId;
  
      const res = await this.service.getbrochure(collegeId, this.userId).toPromise();
      console.log(this.collegeId);
      console.log(this.userId);
      if (res.response_code === '200') {
        await this.showAlert('Success', 'Brochure sent successfully by mail');

      } else if (res.response_code === '500') {
        await this.showAlert('Error', 'Brochure not available');
      } else {
        await this.showAlert('Error', 'An unexpected error occurred');
      }
    } catch (error) {
      await this.showAlert('Error', 'An unexpected error occurred');
    }
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

}
