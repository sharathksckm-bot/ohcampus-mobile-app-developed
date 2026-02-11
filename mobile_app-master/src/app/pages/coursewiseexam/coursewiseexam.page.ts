import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-coursewiseexam',
  templateUrl: './coursewiseexam.page.html',
  styleUrls: ['./coursewiseexam.page.scss'],
})
export class CoursewiseexamPage implements OnInit {

  selectedSegment = 'Criteria';
  itemsToShow = 10; // Initial number of items to display
  increment = 50; // Number of items to add when clicking "View More"

  showDetails = false;
  courseId: any;
  coursesArray: any[];
  courseCatId: any;
  details: any[];
  criteria: any[];
  pattern: any[];
  process: any[];
  coursename: any;
  statename: any;
  nodata:boolean=false;
  academic_category: string;
  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController
  ) { 
    this.statename= JSON.parse(localStorage.getItem('state'))
  }

  ngOnInit() {
    const coursedata = localStorage.getItem('courses');
    this.coursesArray=JSON.parse(coursedata);
    this.coursename=this.coursesArray[0]?.name;
     this.courseId=this.coursesArray[0]?.id;
    this.courseCatId = JSON.parse(localStorage.getItem('catID'));
    this.academic_category=localStorage.getItem("academic_category")
    this. getexamlist();
  }

  viewMore() {
    this.itemsToShow += this.increment;
  }
  onViewDetails() {
    this.showDetails = true;
  }
  hideDetails() {
    this.showDetails = false;
  }


  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  async getexamlist() {
    const loader = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null, // Disable the default spinner to use custom
      translucent: true,
      cssClass: 'custom-loading'
    });
    await loader.present(); // Show the loader
    this.service.getexams(this.courseCatId,this.statename, this.academic_category).subscribe(
    // this.service.examlistbycategory(this.courseCatId, this.courseId,this.statename).subscribe(
      async (res) => {
      
        if(res.response_code==200)
        {
      
          this.coursesArray = res.examslist;
          console.log(  this.coursesArray);
          this.nodata=false;
          await loader.dismiss();
      
        }
        if(res.response_code==400)
        {
      
          this.nodata=true
          await loader.dismiss();
        }
        // Dismiss the loader once data is received
      },
      async (err) => {
        console.error('Error fetching exam list:', err);
        await loader.dismiss(); // Dismiss the loader in case of an error
      }
    );
  }

  async  exmdetail(id){
    this.router.navigate(['/coursewiseexamdetails',id]);
  }
}
