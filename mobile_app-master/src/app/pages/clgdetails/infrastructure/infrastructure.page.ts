import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { ShortlistService } from '../../../services/shortlist.service';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.page.html',
  styleUrls: ['./infrastructure.page.scss'],
})
export class InfrastructurePage implements OnInit {
  slideOpts1={
    initialSlide: 0,
    slidesPerView: 1.3,
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

  public segmentStud = 'tabs1';
  selectedSegment = 'Latest';
  filtersegment = 'tabsA';
  public segmentStudClgLife = 'tabsseg1';
  collegeId: any;
  details: string;
  categories: any;
  cityidArry: any;
  clgdetailArry: any[] = [];
  clgimgArry: any[] = [];
  whatnew: any;
  tableOfContent: any[] = [];
  collegename: any;
  currentYear: any;
  clghightlight: any[] = [];
  latenpopArr: any[];
  popularArr: any[];
  popularclgarry: any;
  infrareviewarry: any;
  infratotalrate: any;
  one2twoRate: any;
  two2threeRate: any;
  three2fourRate: any;
  four2fiveRate: any;
  reviewsArry: any[];
  facultydesc: any;
  facultyrate: any;
  campusrate: any;
  campusdesc: any;
  infrasdesc: any;
  infrasrate: any;
  moneydesc: any;
  moneyrate: any;
  placementdesc: any;
  placementrate: any;
  username: any;
  reviewsssArr: any = [];
  responseData: any;
  loginuserId: any;
  totalInfrastructureRate: 0;
  totalReview: any;
  facilitiesarr: any=[];
  userData: any;
  email: any;
  phone: any;
  token: any;
  courseid: any;

  isThumbsUpClicked: boolean = false; // Initially not clicked
  isThumbsDownClicked: boolean = false; // Initially not clicked
                                                                 

  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private modalController: ModalController,
    private alertController: AlertController,
    private shortlistService: ShortlistService
  ) { }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.getlatestnpop();
      this.infrarating();
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


  getclgid(collegeid: string) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  voteReview(reviewId, userId, ishelpful) {
    
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
     

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
  clgLife(ev: any) {
    this.segmentStudClgLife = ev.detail.value;
  }
  

  async getclgdetail() {
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

    this.service.getclgdetails(this.collegeId).subscribe(
      res => {
        this.clgdetailArry = res.college_detail;
        this.collegename = res.college_detail[0].title;
        this.currentYear = (new Date()).getFullYear();
        this.whatnew = res.college_detail[0].what_new;
        this.tableOfContent = res.table_of_content;
        this.clghightlight = res.college_detail[0].CollegeHighlight;
        this.facilitiesarr = res.college_detail[0].facilities;
        this.clgimgArry = res.college_images;
        this.cityidArry = res.college_detail[0].cityid;
        this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
    
        this.categories = res.college_detail[0].categoryid;
        
        loading.dismiss();  // Dismiss the loader after data is fetched
      },
      error => {
        console.error('Error fetching college details:', error);
        loading.dismiss();  // Dismiss the loader in case of an error
      }
    );
  }



  getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  


  infrarating() {
    this.service.getinfrarating(this.collegeId).subscribe(res => {
      // console.log(res);
      this.infrareviewarry = res.data;
      this.infratotalrate = res.data.totalInfrastructureRate;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
      this.reviewsArry = res.data.infraReviews;
      this.reviewsssArr = res.data.infraReviews;
       this.totalReview = res.data.totalReview;
      this.totalInfrastructureRate = res.data.totalInfrastructureRate;
    });
  }

  getStarArray(): string[] {
    const filledStars = Math.floor(this.totalInfrastructureRate); // Number of filled stars
    const hasHalfStar = this.totalInfrastructureRate - filledStars >= 0.5; // Check for half star

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
}



