import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scolarship',
  templateUrl: './scolarship.page.html',
  styleUrls: ['./scolarship.page.scss'],
})
export class ScolarshipPage implements OnInit {

  slideOptspage={
    initialSlide: 0,
    slidesPerView: 1.1,
  };
  selectedSegment = 'Latest';
  details: string;
  collegeId: any;
  clgdetailArry: any[] = [];
  clgimgArry: any[] = [];
  cityidArry: any;
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
  reviewvotearray: any;
  value: any;
  collegename: any;
  currentYear: number;
  totalRateCount: 0;
  suitclgarry: any;
  popularclgarry: any;
  categories: any;
  infrareviewarry: any;
  infratotalrate: any;
  scolshipdataarry: any[];
  scholarshipdata: any;
  latenpopArr: any[];
  popularArr: any[];
  responseData: any;
  loginuserId: any;
  totalReview: any;
  courseId: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  isThumbsUpClicked: boolean = false; // Initially not clicked
  isThumbsDownClicked: boolean = false; // Initially not clicked
  selectedCourseName:string | null = null;
  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
   
    this.selectedCourseName = localStorage.getItem('selectedCourseName');

    this.getResponseDataFromLocalStorage();
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      console.log(this.collegeId );
      this.getclgdetail();
      this.scolshipdata();
      this.review();
      this. scolshipdata();
      this.  getlatestnpop();
      this.  infrarating();

    });
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

  voteReview(reviewId, userId, ishelpful) {
  
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
     
    });
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  getclgdetail() {

    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = (new Date()).getFullYear();
      this.clgimgArry = res.college_images;
      console.log(this.clgimgArry);
      this.cityidArry = res.college_detail[0].cityid;
      console.log(this.cityidArry);
      this.courseId = res.college_detail[0].coursesandfees[0].sub_category;
      console.log('Sub Category:', this.courseId);
     
      this.categories = res.college_detail[0].categoryId;
      console.log(this.categories);
      
    });
  }


  

  async review() {
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
  
    this.service.getclgreview(this.collegeId).subscribe(
      res => {
        if (res && res.data) {
          this.reviewsArry = res.data;
          this.reviewsArr = res.data.reviews;
  
          this.overallrating = res.data.reviews?.[0]?.totalRatingCount || 0;
          this.totalRateCount = res.data.totalRateCount || 0;
          this.totalPlacementRateCount = res.data.totalPlacementRateCount || 0;
          this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount || 0;
          this.totalFacultyRateCount = res.data.totalFacultyRateCount || 0;
          this.totalHostelRateCount = res.data.totalHostelRateCount || 0;
          this.totalCampusRateCount = res.data.totalCampusRateCount || 0;
          this.totalMoneyRateCount = res.data.totalMoneyRateCount || 0;
          this.one2twoRate = res.data.one2twoRate || 0;
          this.two2threeRate = res.data.two2threeRate || 0;
          this.three2fourRate = res.data.three2fourRate || 0;
          this.four2fiveRate = res.data.four2fiveRate || 0;
          this.totalReview = res.data.totalReview || 0;
        } else {
          console.warn('Data is empty or null');
        }
        
        loading.dismiss();  
      },
      error => {
        console.error('Error fetching reviews:', error);
        loading.dismiss();
      }
    );
  }
  




  infrarating() {
    this.service.getinfrarating(this.collegeId).subscribe(res => {
      console.log(res);
      this.infrareviewarry = res.data;
      this.infratotalrate = res.data.totalInfrastructureRate;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
      this.reviewsArry = res.data.infraReviews;
      console.log(this.reviewsArry);
    });
  }
  scolshipdata() {

    this.service.getscolershipinfo(this.collegeId).subscribe(res => {
      console.log(res);
      this.scolshipdataarry = res.scholarship_data;
      this.scholarshipdata = res.scholarship_data[0].scholarship;

    });
  }

  getlatestnpop() {

    this.service.getlatestnpop().subscribe(res => {
      console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  getStarIcons() {
    const fullStars = Math.floor(this.totalRateCount);  
    const halfStars = this.totalRateCount % 1 >= 0.5 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStars;  

    return {
      full: new Array(fullStars),    
      half: new Array(halfStars),   
      empty: new Array(emptyStars)  
    };
  }
}
