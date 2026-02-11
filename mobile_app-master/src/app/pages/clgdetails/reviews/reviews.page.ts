import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { PredictadmissionPage } from '../../predictadmission/predictadmission.page';
import { PopuplogsignPage } from '../../popuplogsign/popuplogsign.page';
import { ShortlistService } from '../../../services/shortlist.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  totalRateCount = 0;
  selectedSegment = 'Latest';
  public segmentStud = 'tabs1';
  public segmentStudClgLife = 'tabsseg1';
  collegeId: any;
  details: string;
  clgdetailArry: any;
  collegename: any;
  blogsArry: any[]=[];
  notificationarry: any[]=[];

  latenpopArr: any[];
  popularArr: any[];
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

reviewvotearray: any;
  value: any;
  infra: any;
  faculty: any;
  placement: any[];
  categories: any;
  suitclgarry: any;
  clgimgArry: any;
  campus: any;
  money: any;
  hostel: any;

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
  popularclgarry: any;

  slideOptsnew =
  {
    initialSlide: 0,
    slidesPerView: 1.1,
  };

  isThumbsUpClicked: boolean = false; 
  isThumbsDownClicked: boolean = false; 

  
  slideOptssuited =
  {
    initialSlide: 0,
    slidesPerView: 1.1,
  };

  courseid: any;
  reviewsssArr: any = [];
  responseData: any;
  totalReview: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  selectedCourseName:string | null = null;

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
    this.selectedCourseName = localStorage.getItem('selectedCourseName');


this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      console.log(this.collegeId);
      this.getclgdetail();
      this.notifications();
      this.blogs();
      this.reviews();
      this. getlatestnpop();
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
  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');
    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);
     
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

  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  studentSay(ev: any) {
    this.segmentStud = ev.detail.value;
  }
  clgLife(ev: any) {
    this.segmentStudClgLife = ev.detail.value;
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
      this.collegename = res.college_detail[0].title;
       this.cityId = res.college_detail[0].cityid;
      this.categories = res.college_detail[0].categoryid;
      console.log(this.categories);
      this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
      this.suitedclg();
      this.popularclg();
    });
  }

  suitedclg() {

    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);

    });
  }

 

  popularclg() {
    this.service.clgpopular(this.courseid).subscribe(res => {
      
      this.popularclgarry = res.response_data;
      
    });
  }



  notifications(){

    this.service.getnotification(this.collegeId).subscribe(res => {
      console.log(res);
      this.notificationarry = res.response_data;
      console.log(this.notificationarry);
    });
  }


  blogs() {

    this.service.latestblog(this.collegeId).subscribe(res => {
      console.log(res);
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

    await loading.present(); 

    const timeoutId = setTimeout(() => {
      if (loading) {
        loading.dismiss();
      }
    }, 5000); 

    this.service.reviewDetails(this.collegeId).subscribe(
      res => {
        clearTimeout(timeoutId);  
        if (res && res.data && res.data.reviews && res.data.reviews.length > 0) {
          this.reviewsArry = res.data;
          this.reviewsArr = res.data.reviews;
          console.log(this.reviewsArr);
          this.placement = res.data.reviews.placement_desc;
          this.infra = res.data.reviews[0].infrastructure_desc;
          this.faculty = res.data.reviews[0].faculty_desc;
          this.campus = res.data.reviews[0].campus_desc;
          this.money = res.data.reviews[0].money_desc;
          this.hostel = res.data.reviews[0].hostel_desc;
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
        } else {
          console.warn('No reviews available.');
          
        }

        loading.dismiss();  
      },
      error => {
        clearTimeout(timeoutId);  
        console.error('Error fetching reviews:', error);
        loading.dismiss();  
      }
    );
  }




  getStarArray(rating: number): string[] {
    const starArray: string[] = [];
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 !== 0; // Half star check
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Empty stars

   
    for (let i = 0; i < fullStars; i++) {
      starArray.push('star'); 
    }

    
    if (halfStar) {
      starArray.push('star-half'); // Half star
    }

    for (let i = 0; i < emptyStars; i++) {
      starArray.push('star-outline'); // Empty star
    }

    return starArray;
  }

  getlatestnpop(){

    this.service.getlatestnpop().subscribe(res => {
      console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr  = res.popular_blogs;
    });
  }

  voteReview(reviewId, userId,ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId,userId,ishelpful).subscribe(res => {
      console.log(res);

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



  async brochure(collegeId: string) {
   
    if (!this.loginuserId) {
      
      this.presentSignInModal();
      return; 
    }

    try {
      this.collegeId = collegeId;
      this.userId = this.loginuserId;
      
      const res = await this.service.getbrochure(this.collegeId, this.userId).toPromise();
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

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }



  async clgpredict(id: string, CatId: string, subCatName: string) {
   
    if (!this.loginuserId) {
      this.presentSignInModal();
      return;
    } else {
      await this.predictadmission(id, CatId, subCatName);
    }
  }
}
