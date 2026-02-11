import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  slideOptspage={
    initialSlide: 0,
    slidesPerView: 1.1,
  };
  slidepic = {
    initialSlide: 0,
    slidesPerView: 1.3,
  };
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
  placement: any;
  categories: any;
  suitclgarry: any;
  clgimgArry: any[] = [];
  totalRateCount: any;
  responseData: any;
  loginuserId: any;
  userData: any;
  email: any;
  username: any;
  phone: any;
  token: any;
  selectedCourseName:string | null = null;

  isThumbsUpClicked: boolean = false; // Initially not clicked
  isThumbsDownClicked: boolean = false; // Initially not clicked

  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.selectedCourseName = localStorage.getItem('selectedCourseName');
   
    this.getResponseDataFromLocalStorage();
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      // console.log(this.collegeId);
      this.getclgdetail();
      this.notifications();
      this.blogs();
      this.reviews();
      this. getlatestnpop();
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
    this.details = '';
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.collegename = res.college_detail[0].title;
        this.clgimgArry = res.college_images;
      this.categories = res.college_detail[0].categoryId;
      this.suitedclg();
    });
  }

  suitedclg() {

    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      

    });
  }

  notifications(){

    this.service.getnotification(this.collegeId).subscribe(res => {
  
      this.notificationarry = res.response_data;
      
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
      spinner: null, // Custom spinner with logo
      translucent: true,
      cssClass: 'custom-loading'
    });
  
    await loading.present(); // Show the loader
  
    this.service.reviewDetails(this.collegeId).subscribe(
      res => {
        // Check if data is present
        if (res && res.data && res.data.reviews) {
          this.reviewsArry = res.data;
          this.reviewsArr = res.data.reviews;
          this.placement = res.data.reviews[0]?.placement_desc || '';
          this.infra = res.data.reviews[0]?.infrastructure_desc || '';
          this.faculty = res.data.reviews[0]?.faculty_desc || '';
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
        } else {
          console.warn('No data found for reviews.');
        }
        loading.dismiss(); // Dismiss the loader after successfully processing the data
      },
      error => {
        console.error('Error fetching reviews:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
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

  voteReview(reviewId, userId,ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId,userId,ishelpful).subscribe(res => {
      // console.log(res);

    });
  }
}
