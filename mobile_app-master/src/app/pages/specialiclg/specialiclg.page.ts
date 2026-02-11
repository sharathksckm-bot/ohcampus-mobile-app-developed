import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-specialiclg',
  templateUrl: './specialiclg.page.html',
  styleUrls: ['./specialiclg.page.scss'],
})
export class SpecialiclgPage implements OnInit {
  trnkclgArry: any[] = [];
  trnkclg: any;
  id: any;
  ccId: any;
  acId: any;
  trespecialiArry: any[];
  courseId: string;
  coursename: string;
  statename: any;
  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.statename= JSON.parse(localStorage.getItem('state'))
    const storedCourseId = localStorage.getItem('selectedCourseId');
    const storedCourseName = localStorage.getItem('selectedCourseName');
    if (storedCourseId && storedCourseName) {
      this.courseId = storedCourseId;
      this.coursename = storedCourseName;

      console.log('Retrieved courseId:', this.courseId);
      console.log('Retrieved courseName:', this.coursename);
    }


    this.trespeciali();

  }


 

  async trespeciali() {
    const loader = await this.loadingController.create({
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

    await loader.present(); // Show the loader
    let selctpara={
      "subcat_Id":this.courseId,
      "statename": this.statename
    }
    this.service.getTrendingSpecilizationBySubCatId(selctpara).subscribe(
      async (res) => {
        console.log(res);
      
        this.trespecialiArry = res.data;
        await loader.dismiss(); // Dismiss the loader once data is received
      },
      async (err) => {
        console.error('Error fetching specializations:', err);
        await loader.dismiss(); // Dismiss the loader in case of an error
      }
    );
  }




async specourselist(keyword: string) {
  localStorage.setItem('selectedKeyword', keyword);
  const loader = await this.loadingController.create({
    message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
      <span style="margin-top: 10px;">Loading course list...</span>`,
    spinner: null,
    translucent: true,
    cssClass: 'custom-loading'
  });

  await loader.present(); // Show the loader

  this.router.navigate(['/specourselist', keyword]).then(async () => {
    await loader.dismiss(); // Dismiss the loader after navigation
  }).catch(async () => {
    await loader.dismiss(); // Dismiss the loader in case of an error
  });

  console.log(keyword);
}
}
