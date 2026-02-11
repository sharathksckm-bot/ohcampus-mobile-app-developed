import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-trendcrsdetails',
  templateUrl: './trendcrsdetails.page.html',
  styleUrls: ['./trendcrsdetails.page.scss'],
})
export class TrendcrsdetailsPage implements OnInit {
  courseId: string;
  crsdetailarry: any[];
  image: any;

  constructor(
    public router: Router,
    public service: ServiceService,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    private sanitizer: DomSanitizer
) { }


  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id') as string;
    this. placementdetail();
  }

  sanitizeHtml(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text.replace(/\n/g, '<br>'));
  }
async placementdetail() {
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

  this.service.trndcrsdetail(this.courseId).subscribe(
      res => {
          console.log(res);
          this.crsdetailarry = res.data;  // Assign response data to crsdetailarry
          console.log(this.crsdetailarry);
          loading.dismiss();  // Dismiss the loader once data is fetched
      },
      error => {
          console.error('Error fetching course details:', error);
          loading.dismiss();  // Dismiss the loader in case of an error
      }
  );
}



}
