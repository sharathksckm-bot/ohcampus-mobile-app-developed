import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-coursewiseqna',
  templateUrl: './coursewiseqna.page.html',
  styleUrls: ['./coursewiseqna.page.scss'],
})
export class CoursewiseqnaPage implements OnInit {
  qansarry: any[];
  course_categoryId: any;
   answerarry: any[];
 

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
    this.course_categoryId = localStorage.getItem('catID');
    console.log(this.course_categoryId);
this.qunnans();
  }


  
  async qunnans() {
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

    this.service.getqnans(this.course_categoryId).subscribe(
      async (res) => {
        this.qansarry = res.QueAnsAboutCourses;
        this.answerarry = res.QueAnsAboutCourses?.Answeres || [];
console.log( this.answerarry)
        await loader.dismiss(); // Dismiss the loader once data is received
      },
      async (err) => {
        console.error('Error fetching questions and answers:', err);
        await loader.dismiss(); // Dismiss the loader in case of an error
      }
    );
  }

}
