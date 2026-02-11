import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-termsncondition',
  templateUrl: './termsncondition.page.html',
  styleUrls: ['./termsncondition.page.scss'],
})
export class TermsnconditionPage implements OnInit {

  constructor(public router: Router,    public loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loader = await this.loadingController.create({
      message: 'Loading...',
     duration: 500, // Set timing for the loader (in milliseconds)
      spinner: 'crescent' // You can choose a different spinner style
    });
       await loader.present(); // Show the loader
  }
  notification() {

    this.router.navigateByUrl('/notification');
  }
}
