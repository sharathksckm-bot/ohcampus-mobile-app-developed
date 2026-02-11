import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {
  eventlistarry: any = [];
  value: any;
  startlimit: any;
  endlimit: any;


  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.eventlist();
  }

  async eventlist() {
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

    this.startlimit = '0';
    this.endlimit  = '100';
    this.service.geteventss(this.value,this.startlimit, this.endlimit).subscribe(
      async (res) => {
        console.log(res);
        this.eventlistarry = res.response_data;
        console.log(this.eventlistarry);
        await loader.dismiss(); // Dismiss the loader once data is received
      },
      async (err) => {
        console.error('Error fetching article list:', err);
        await loader.dismiss(); // Dismiss the loader in case of an error
      }
    );
  }



  eventdetails(event_id) {
    this.router.navigate(['/eventdetails', event_id]);
  }
}



