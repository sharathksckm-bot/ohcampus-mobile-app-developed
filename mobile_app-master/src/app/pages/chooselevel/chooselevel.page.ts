import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chooselevel',
  templateUrl: './chooselevel.page.html',
  styleUrls: ['./chooselevel.page.scss'],
})
export class ChooselevelPage implements OnInit {
  clevel: any;
  catid: any;

  constructor(public router: Router, public service: ServiceService, public activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.getlevel();
    const routeParam = this.activatedRoute.snapshot.params;
    this.catid=routeParam.id;
     console.log(routeParam);
  }

  // getlevel() {
  //   this.service.getlevel().subscribe(res => {
  //     this.clevel = res.response_data;
  //   });
  // }


  async getlevel() {
    const loading = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
         <span style="margin-top: 10px;"> </span>`,

      spinner: null, // Disable the default spinner
      translucent: true,
      cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
    });

    // Present the loading
     await loading.present();
    this.service.getlevel().subscribe(async res => {
      this.clevel = res.response_data;
      await loading.dismiss();
    });
  }

  selectLevel(level: any) {

  }
  getCourses(idd){
    this.router.navigate(['/choosecourse',+this.catid,+idd]);
  }
}
