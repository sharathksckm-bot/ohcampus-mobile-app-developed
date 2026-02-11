import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {
  eventid: any;
  eventdetailarry: any[];

  constructor(
    public router: Router,
    public service: ServiceService,
    private route: ActivatedRoute,
    public loadingController: LoadingController

) { }

  ngOnInit() {
    this.eventid = this.route.snapshot.paramMap.get('event_id');
    this.  eventdetail();
  }



  async eventdetail() {
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

    this.service.geteventsdetails(this.eventid).subscribe(
      async res => {
        console.log(res);
        this.eventdetailarry = res.event_details;
        await loader.dismiss(); // Dismiss the loader when data is received
      },
      async err => {
        console.error('Error fetching event details:', err);
        await loader.dismiss(); // Dismiss the loader in case of an error
      }
    );
  }

}
