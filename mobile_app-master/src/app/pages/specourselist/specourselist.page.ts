// import { Component, OnInit } from '@angular/core';
// import { ServiceService } from 'src/app/service.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { LoadingController } from '@ionic/angular';

// @Component({
//   selector: 'app-specourselist',
//   templateUrl: './specourselist.page.html',
//   styleUrls: ['./specourselist.page.scss'],
// })
// export class SpecourselistPage implements OnInit {
//   keyword: string;courseltsArry: any[];value: any;
//   search: string;searchCourseForm: any;subcategory: any;
//   activeTabId: any;courseId: string;coursename: string;
//   constructor(
//     public service: ServiceService,
//     public activatedRoute: ActivatedRoute,
//     public router: Router,
//     public loadingController: LoadingController
//   ) { }


//   ngOnInit() {
//     const storedCourseId = localStorage.getItem('selectedCourseId');
//     const storedCourseName = localStorage.getItem('selectedCourseName');
//     if (storedCourseId && storedCourseName) {
//       this.courseId = storedCourseId;
//       this.coursename = storedCourseName;
//       console.log('Retrieved courseId:', this.courseId);
//       console.log('Retrieved courseName:', this.coursename);
//     }
//     this.value = localStorage.getItem('selectedKeyword');
//     console.log('Retrieved keyword from localStorage:', this.keyword);
//     this. getcourselts();
//   }

 
//  getcourselts() {
//     this.subcategory = this.courseId;
//     this.service.specicourselist(this.value, this.subcategory).subscribe(res => {
//       this.courseltsArry = res.data;
//     });
//   }


//   async clglts(id) {
//     this.router.navigate(['/specoursebyclglts', id]);
// }
// }


 

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-specourselist',
  templateUrl: './specourselist.page.html',
  styleUrls: ['./specourselist.page.scss'],
})
export class SpecourselistPage implements OnInit {
  keyword: string;
  courseltsArry: any[] = []; // Initialize with an empty array
  value: any;
  search: string;
  searchCourseForm: any;
  subcategory: any;
  activeTabId: any;
  courseId: string;
  coursename: string;
  isLoading: boolean = false; // Controls the loading state

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    const storedCourseId = localStorage.getItem('selectedCourseId');
    const storedCourseName = localStorage.getItem('selectedCourseName');
    if (storedCourseId && storedCourseName) {
      this.courseId = storedCourseId;
      this.coursename = storedCourseName;
      console.log('Retrieved courseId:', this.courseId);
      console.log('Retrieved courseName:', this.coursename);
    }
    this.value = localStorage.getItem('selectedKeyword');
    console.log('Retrieved keyword from localStorage:', this.keyword);
    this.getcourselts();
  }

  async getcourselts() {
    this.isLoading = true; // Set loading state to true

    const loader = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
         <span style="margin-top: 10px;"></span>`,
      spinner: null,
      translucent: true,
      cssClass: 'custom-loading',
    });

    await loader.present(); // Show the loader

    this.subcategory = this.courseId;

    this.service.specicourselist(this.value, this.subcategory).subscribe(
      (res) => {
        this.courseltsArry = res.data || []; // Handle null/undefined response safely
        this.isLoading = false; // Stop loading
        loader.dismiss(); // Hide the loader
      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.courseltsArry = []; // Set empty array on error
        this.isLoading = false; // Stop loading
        loader.dismiss(); // Hide the loader
      }
    );
  }

  clglts(id) {
    this.router.navigate(['/specoursebyclglts', id]);
  }
}

