import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-articlcatlist',
  templateUrl: './articlcatlist.page.html',
  styleUrls: ['./articlcatlist.page.scss'],
})
export class ArticlcatlistPage implements OnInit {
  articllistarry: any[];
  CategoryId: any;
  statename: any;
  Artciledata: any;
  searchCategory: any;
  value: string;
  allArticles: any;

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController
  ) {
    this.statename= JSON.parse(localStorage.getItem('state'))
    this.Artciledata= JSON.parse(localStorage.getItem('catID'))
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.CategoryId = params.get('id');
      console.log(this.CategoryId);

    });
    this.getarticle();

  }


  async getarticle() {

    const loader = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null,
      translucent: true,
      cssClass: 'custom-loading'
    });

    await loader.present();
   this.searchCategory = -2;
    this.value = '';
  
    this.service.article(this.searchCategory, this.value,this.statename ).subscribe(async res => {
      this.allArticles = res.response_data;
      await loader.dismiss(); 
     
      // this.isViewMoreButtonVisible = this.allArticles.length > this.initialArticlesToShow;
    });
  }
  



  async articlesdetails(id){

    this.router.navigate(['/articledetails',id]);
  }
}
