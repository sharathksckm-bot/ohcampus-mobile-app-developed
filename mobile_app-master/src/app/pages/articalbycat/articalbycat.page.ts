import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-articalbycat',
  templateUrl: './articalbycat.page.html',
  styleUrls: ['./articalbycat.page.scss'],
})
export class ArticalbycatPage implements OnInit {

   blogId: string;
  articldetailarry: any[];
  relateddetails: any[];
  searchCategory: any;
  value: any;
  latestartiarry: any;
  statename: any;
  sharelink: any;

  constructor(
    private socialSharing: SocialSharing,
    public router: Router,
    public service: ServiceService,
    private route: ActivatedRoute,
    public loadingController: LoadingController
  ) {
    this.statename= JSON.parse(localStorage.getItem('state'))
  }

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('blogId') as string;

    this.articledetail();
    this.getlatestArticle();
    this.asyncrelatedArt();
  }



  async asyncrelatedArt () {
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

    this.service.relatedArt(this.blogId).subscribe(
      async (res) => {
        console.log(res);
        // this.articldetailarry = res.blogdetails;
        this.relateddetails = res.relatedblog;
        await loader.dismiss(); // Dismiss the loader when data is received
      },
      async (err) => {
        console.error(err);
        await loader.dismiss(); // Dismiss the loader even if there is an error
      }
    );
  }
  async articledetail() {
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

    this.service.articledetail(this.blogId,1).subscribe(
      async (res) => {
        console.log(res);
        this.articldetailarry = res.blogdetails;
        // this.relateddetails = res.relatedblog;
        await loader.dismiss(); // Dismiss the loader when data is received
      },
      async (err) => {
        console.error(err);
        await loader.dismiss(); // Dismiss the loader even if there is an error
      }
    );
  }

  shareBlog(item:any)
  {
 
    let id=item.blog_id
  
    let selectpara=
    {
      "id":id,
      "type":"article"
   
    }
    this.service.generateLink_req(selectpara).subscribe((res:any)=>
    {
     this.sharelink =res.data.share_link
  
      this.socialSharing.share(this.sharelink).then(() => {
        console.log("Shared successfully");
      })

    })
  }

//   shareBlog(blog: any) {
//   const title = blog.title;
//   const subtitle = blog.subtitle || '';
//   const description = this.removeHtml(blog.short_desc);
//   const truncatedDesc = description.length > 10 ? description.substring(0, 10) + "..." : description;
//   const blogUrl = `https://ohcampus.com/articledetails/${blog.blog_id}`;
//   const imageUrl = blog.image;


//   const message =
//     `${title}\n\n${subtitle}\n\n${truncatedDesc}\n\nRead more: ${blogUrl}\n\n${imageUrl}`;

//   const options = {
//     message: message,   
//     subject: title,

//   };
 
  
//   this.socialSharing.shareWithOptions(options)
//     .then(() => console.log("Shared successfully"))
//     .catch(err => console.error("Share error:", err));
// }

// Remove HTML tags
//

  async getlatestArticle() {

    this.searchCategory = this.blogId;
    this.value = '';
    this.service.article(this.searchCategory, this.value,this.statename).subscribe(
      (res) => {
        console.log(res);
        this.latestartiarry = res.response_data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }
}
