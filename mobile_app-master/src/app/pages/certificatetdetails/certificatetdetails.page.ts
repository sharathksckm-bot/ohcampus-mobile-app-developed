

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-certificatetdetails',
  templateUrl: './certificatetdetails.page.html',
  styleUrls: ['./certificatetdetails.page.scss'],
})
export class CertificatetdetailsPage implements OnInit {
  certificateId: string;
  certidetailarry: any[];
  latestartiarry: any[];
  searchCategory: string;
  value: string;
  blogId: any;
  relateddetails: any[];
  name: any;
  descritpion: any;
  image: any;
  articldetailarry: any;
  statename: any;

  constructor(
    public router: Router,
    public service: ServiceService,
    private route: ActivatedRoute,
    public loadingController: LoadingController // Inject LoadingController
  ) {
    this.statename= JSON.parse(localStorage.getItem('state'))
  }

  ngOnInit() {
    this.certificateId = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.certificateId);
    this.certifdetail();
    this.getlatestArticle();
  }




  async certifdetail() {
    const loader = await this.loadingController.create({
        message: ` 
          <div class="custom-spinner-container">
            <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
            <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
          </div>
          <span style="margin-top: 10px;"></span>`,
        spinner: null, // Custom spinner with logo
        translucent: true,
        cssClass: 'custom-loading'
    });
    await loader.present(); // Show the loader

    this.service.certificatedtls(this.certificateId).subscribe(
        (res) => {
            console.log(res);
            this.certidetailarry = res.certificateDetails; // Store certificate details
            this.image = res.certificateDetails.image; // Get image
            this.name = res.certificateDetails.name; // Get name
            this.descritpion = res.certificateDetails.descritpion; // Corrected typo here
            console.log(this.descritpion );
            loader.dismiss(); // Dismiss the loader when data is received
        },
        (err) => {
            console.error(err);
            loader.dismiss(); // Dismiss the loader in case of an error
        }
    );
}


  async getlatestArticle() {

    this.searchCategory = '';
    this.value = '';
    this.service.article(this.searchCategory, this.value,this.statename).subscribe(
      (res) => {
        console.log(res);
        this.latestartiarry = res.response_data;
        this.blogId = res.response_data[0]?.id;
        console.log(this.blogId);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getarticledetails(id) {
    this.router.navigate(['/articledetails', id]);
  }
}
