import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../../popuplogsign/popuplogsign.page';
import { ShortlistService } from '../../../services/shortlist.service';

@Component({
  selector: 'app-cutoffs',
  templateUrl: './cutoffs.page.html',
  styleUrls: ['./cutoffs.page.scss'],
})
export class CutoffsPage implements OnInit {
  slideOpts1={
    initialSlide: 0,
    slidesPerView: 1.1,
  };
  slideOptspage={
    initialSlide: 0,
    slidesPerView: 1.1,
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
  public segmentStud = 'tabs1';
  selectedSegment = 'Latest';
  filtersegment = 'tabsA';
  totalRateCount = 0;
  // selectedSegment = 'Latest';
  // public segmentStud = 'tabs1';
  public segmentStudClgLife = 'tabsseg1';
  collegeId: any;
  details: string;
  clgdetailArry: any;
  collegename: any;
  blogsArry: any[]=[];

  notificationarry: any[]=[];

  latenpopArr: any[];
  popularArr: any[];

  // totalRateCount: any;
  reviewsArry: any[]=[];
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
// slideOptspage: any;
reviewvotearray: any;
  value: any;
  infra: any;
  faculty: any;
  placement: any;
  categories: any;
  suitclgarry: any;
  clgimgArry: any;
  whatnew: any;
  tableOfContent: any[] = [];
  // collegename: any;
  currentYear: any;
  clghightlight: any[] = [];
  cityidArry: any;
  popularclgarry: any[];
  courseId: any;
  coursesArray: any[];
  loginuserId: any;
  active: string;
  event: string;
  isBookmarked = false;
  shortlistedColleges: Set<string> = new Set();
  description: any;
  userId: string;
  cityid: any;
  reviewsssArr: any = [];
  responseData: any;
  totalReview: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  college_id: any;
  courseid:any;

  kcetarry: any[] = [];
  round1: any[];
  round2: any[];
  round3: any[];

  komedearry: any[] = [];
  comedround1: any[];
  comedround2: any[];
  selectedCourseName:string | null = null;

  isThumbsUpClicked: boolean = false; // Initially not clicked
  isThumbsDownClicked: boolean = false; // Initially not clicked

  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    private shortlistService: ShortlistService

  ) { }

  ngOnInit() {
this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }

    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    if (this.selectedCourseName) {
      console.log('Selected Course Name exists:', this.selectedCourseName);
    } else {
      console.log('Selected Course Name is null or undefined.');
    }



    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.notifications();
      this.blogs();
      this.reviews();
      this. getlatestnpop();
      this. kcetcutoff();
      this. komedecutoff();

      this.coursesArray =JSON.parse(localStorage.getItem('courses'));
      // console.log(this.coursesArray);
      this.courseId=this.coursesArray[0].id;

    });
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

  kcetcutoff() {
    this.college_id = this.collegeId;
    this.service.kcetcutoff(this.college_id).subscribe(res => {
      this.kcetarry = res.CoutOffRoundWise;
      console.log(this.kcetarry);
  
      // Assigning the round data
      this.round1 = res.CoutOffRoundWise.round1;
      this.round2 = res.CoutOffRoundWise.round2;
      this.round3 = res.CoutOffRoundWise.round3;
  
      console.log('Round 1:', this.comedround1);
    });
  }

  hasRoundData(): boolean {
    return (this.round1 && this.round1.length > 0) || 
           (this.round2 && this.round2.length > 0) || 
           (this.round3 && this.round3.length > 0);
  }

  komedecutoff() {
    this.college_id = this.collegeId;
    this.service.komedecutoff(this.college_id).subscribe(res => {
      this.komedearry = res.CoutOffRoundWise;
      console.log(this.kcetarry);
  
      // Assigning the round data
      this.comedround1 = res.CoutOffRoundWise.round1;
      this.comedround2 = res.CoutOffRoundWise.round2;
     
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

  voteReview(reviewId, userId,ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId,userId,ishelpful).subscribe(res => {
      console.log(res);

    });
  }


  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
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

  getclgdetail() {

    this.service.getclgdetails(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.collegename = res.college_detail[0].title;
      this.currentYear = (new Date()).getFullYear();
      this.description = res.college_detail[0].description;
      this.whatnew = res.college_detail[0].what_new;
      this.tableOfContent = res.table_of_content;
      this.clghightlight = res.college_detail[0].CollegeHighlight;
       this.clgimgArry = res.college_images;
      // console.log(this.clgimgArry);
      this.cityidArry = res.college_detail[0].cityid;
      this.courseid = res.college_detail[0].coursesandfees[0].sub_category;

      this.popularclg();
      this.categories = res.college_detail[0].categoryid;
      // console.log(this.categories);
      this.suitedclg();
    });
  }

  popularclg() {
    this.service.clgpopular(this.courseid).subscribe(res => {
      this.popularclgarry = res.response_data;
    });
  }


  suitedclg() {
    
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);

    });
  }

  notifications(){
   
    this.service.getnotification(this.collegeId).subscribe(res => {
      // console.log(res);
      this.notificationarry = res.response_data;
      // console.log(this.notificationarry);
    });
  }


  blogs() {
    
    this.service.latestblog(this.collegeId).subscribe(res => {
      this.blogsArry = res.latest_blogs;


    });
  }

 

  async reviews() {
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
  
    this.service.reviewDetails(this.collegeId).subscribe(
      res => {
        if (res && res.data) {
          this.reviewsArry = res.data;
          this.reviewsArr = res.data.reviews;
          this.placement = res.data.reviews[0]?.placement_desc || 'No description available';
          this.infra = res.data.reviews[0]?.infrastructure_desc || 'No description available';
          this.faculty = res.data.reviews[0]?.faculty_desc || 'No description available';
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
          this.totalReview = res.data.totalReview;
          this.reviewsssArr = res.data.reviews;
        } else {
         
        }
        loading.dismiss();  // Dismiss the loader after data is fetched or if empty
      },
      error => {
        console.error('Error fetching reviews:', error);
        // this.showErrorToast('Failed to load reviews. Please try again later.');
        loading.dismiss();  // Dismiss the loader in case of an error
      }
    );
  }

  getStarArray(): string[] {
    const filledStars = Math.floor(this.totalRateCount); // Number of filled stars
    const hasHalfStar = this.totalRateCount - filledStars >= 0.5; // Check for half star

    const starArray: string[] = [];

    // Fill array with appropriate star names
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        starArray.push('star');
      } else if (i === filledStars && hasHalfStar) {
        starArray.push('star-half');
      } else {
        starArray.push('star-outline');
      }
    }

    return starArray;
  }

  getlatestnpop(){
  
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr  = res.popular_blogs;
    });
  }



  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
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
