import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-coursewisearticles',
  templateUrl: './coursewisearticles.page.html',
  styleUrls: ['./coursewisearticles.page.scss'],
})
export class CoursewisearticlesPage implements OnInit {
  articlarry: any =[];

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {

this.articles();
  }


  async articles() {
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

    this.service.articlesection().subscribe(
      async (res) => {
        console.log(res);
        this.articlarry = res.blogcategory;
        console.log(this.articlarry);
        await loader.dismiss(); // Dismiss the loader once data is received
      },
      async (err) => {
        console.error('Error fetching articles:', err);
        await loader.dismiss(); // Dismiss the loader in case of an error
      }
    );
  }


  async catlist(blogid){
    this.router.navigate(['/articalbycat',blogid]);

  }
}
