import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-placemntdetails',
  templateUrl: './placemntdetails.page.html',
  styleUrls: ['./placemntdetails.page.scss'],
})
export class PlacemntdetailsPage implements OnInit {
  collegeId: string;
  placementdetailarry: any[];
  searchYear: any;
  searchCategory: any;
  clgdetailArry: any[] = [];
  clgimgArry: any[] = [];
  clglogo: any;
  collegename: any;
  description: any;
  constructor(
    public router: Router,
    public service: ServiceService,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
) { }


  ngOnInit() {
    this.collegeId = this.route.snapshot.paramMap.get('id') as string;
    this. placementdetail();
    this. getclgdetail();
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
            this.clgdetailArry = res.college_detail;  // Assign college detail array
            this.clglogo = res.college_detail[0].logo;  // Get college logo
            this.collegename = res.college_detail[0].title;  // Get college name
            this.description = res.college_detail[0].description;  // Get description
            this.clgimgArry = res.college_images;  // Get college images

            // Log data for debugging
            console.log(this.clgdetailArry);
            console.log(this.collegename);

            loading.dismiss();  // Dismiss the loader once data is fetched
        },
        error => {
            console.error('Error fetching college details:', error);
            loading.dismiss();  // Dismiss the loader in case of an error
        }
    );
}


  placementdetail() {
    this.searchYear = '';
    this.searchCategory = '';
    this.service.getplacementdtil(this.collegeId,this.searchYear, this.searchCategory, ).subscribe(res => {
      console.log(res);
      this.placementdetailarry = res.placementlist;
      console.log(this.placementdetailarry);
});
}

}
