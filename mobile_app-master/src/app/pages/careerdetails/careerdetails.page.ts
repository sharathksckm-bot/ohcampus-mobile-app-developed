import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController,ModalController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-careerdetails',
  templateUrl: './careerdetails.page.html',
  styleUrls: ['./careerdetails.page.scss'],
})
export class CareerdetailsPage implements OnInit {
  careerId: string;
  cdetailarray: any;
  description: any;

  constructor(
    public router: Router,
    public service: ServiceService,
    private route: ActivatedRoute,
    public loadingController: LoadingController,
) { }
  ngOnInit() {
    this.careerId = this.route.snapshot.paramMap.get('id') as string;
    console.log( this.careerId);
    this.getcareerdtls();
  }


  async getcareerdtls() {
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

    this.service.careerdetails(this.careerId).subscribe(
        res => {
            this.cdetailarray = res.response_data;  // Assign response data to cdetailarray
            this.description = res.response_data[0].description;  // Get the description
            console.log(this.description);  // Log the description
            loading.dismiss();  // Dismiss the loader once data is fetched
        },
        error => {
            console.error('Error fetching career details:', error);
            loading.dismiss();  // Dismiss the loader in case of an error
        }
    );
}

}
