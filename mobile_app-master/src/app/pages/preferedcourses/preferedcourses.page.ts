/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';


@Component({
  selector: 'app-preferedcourses',
  templateUrl: './preferedcourses.page.html',
  styleUrls: ['./preferedcourses.page.scss'],
})
export class PreferedcoursesPage implements OnInit {

  // icons: string[] = [ 'flask-outline','settings-outline',  'bag-outline', 'medkit-outline','medkit-outline', 'fitness-outline', '/assets/icon/tooth.png'];
  // image: any = [];
 
  Category: any ;
  totalCourses: any = [];
item: any;
userData: any;

  constructor(public router: Router, public service: ServiceService,  private googlePlus: GooglePlus,) { }

  ngOnInit() {
    this.loadUserData();
    this.getCategory();
  }

  loadUserData() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  }
  // logout_gmail() {
  //   this.googlePlus.logout()
  //     .then(res => {
  //       console.log(res);
  //       localStorage.removeItem('userData');
  //       this.router.navigateByUrl('/welcomepage');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }



  getCategory() {
    this.Category ='';
    // this.image ='';
    // console.log(this.Category);
    this.service.getCategory().subscribe(res => {
      this.Category = res.response_data;
      console.log(this.Category);
      // console.log(this.Category);
    });
  }
  getLevels(id){
    this.router.navigate(['/chooselevel',+id]);
  }

}
