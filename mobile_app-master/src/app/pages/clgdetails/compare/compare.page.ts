import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.scss'],
})
export class ComparePage implements OnInit {
  slideOptspage={
    initialSlide: 0,
    slidesPerView: 1.1,
  };
  selectedSegment = 'Latest';
  collegeId: any;
  clgdetailArry: any[];
  collegename: any;
  currentYear: number;
  whatnew: any;
  tableOfContent: any;
  clghightlight: any;
  clgimgArry: any;
  cityidArry: any;
  categories: any;
  latenpopArr: any[];
  popularArr: any[];
  clgtotlrating: any;
item: any;
  clglistforcomp: any[];
  categoryid: any;
  coursesArray: any=[];
  clglogo: any;
  cityname: any;
  secclglogo: any;
  secclgname: any;

  collegeId2: any;
  suitclgarry: any;
  popularclgarry: any;
  responseData: any;
  loginuserId: any;
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
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private modalController: ModalController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
this.getResponseDataFromLocalStorage();

this.selectedCourseName = localStorage.getItem('selectedCourseName');
if (this.selectedCourseName) {
 
} else {
 
}


    // Get collegeid from route parameters
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.getlatestnpop();


  const coursedata = localStorage.getItem('courses');
     this.coursesArray=JSON.parse(coursedata);
     this.categoryid=this.coursesArray[0].parent_category;
       this.clglistforcompr();


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
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }


    getclgdetail(){
      this.service.getclgdetails(this.collegeId).subscribe(res => {
        this.clgdetailArry = res.college_detail;
        this.clglogo = res.college_detail[0].logo;
      this.collegename = res.college_detail[0].title;
      this.cityname = res.college_detail[0].city;
        this.clgtotlrating =res.college_detail[0].Rating.totalRateCount;
        this.collegename = res.college_detail[0].title;
        this.currentYear = (new Date()).getFullYear();
        this.whatnew = res.college_detail[0].what_new;
        this.tableOfContent = res.table_of_content;
        this.clghightlight = res.college_detail[0].CollegeHighlight;
        this.clgimgArry = res.college_images;
        this.cityidArry = res.college_detail[0].cityid;
        this.categories = res.college_detail[0].categoryId;
      });
    }


    async clglistforcompr() {
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

      this.service.clglistforcompr(this.categoryid).subscribe(
        res => {
          this.clglistforcomp = res.CollegeListForCompare;
          this.secclglogo = res.CollegeListForCompare[0].logo;
          this.secclgname = res.CollegeListForCompare[0].title;
          this.collegeId2 = res.CollegeListForCompare[0].id;

          loading.dismiss();  // Dismiss the loader once data is fetched
        },
        error => {
          console.error('Error fetching college list for comparison:', error);
          loading.dismiss();  // Dismiss the loader in case of an error
        }
      );
    }



    getlatestnpop() {

      this.service.getlatestnpop().subscribe(res => {
        this.latenpopArr = res.latest_blogs;
        this.popularArr = res.popular_blogs;
      });
    }

compclg(collegeId) {
  this.router.navigate(['/clgcompare',collegeId ]);
}
twoclgcompar(collegeId,collegeId2){
  this.router.navigate(['/clgcompare',collegeId,collegeId2 ]);
}

popularclg() {
   this.service.getpopularclg(this.cityidArry).subscribe(res => {
    // console.log(res);
    this.popularclgarry = res.popularColleges;
    // console.log(this.popularclgarry);
  });
}

suitedclg() {
   this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
    // console.log(res);
    this.suitclgarry = res.bestSuitedColleges;
    // console.log(this.suitclgarry);

  });
}


}







