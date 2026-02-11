import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import OneSignal from 'onesignal-cordova-plugin';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  data: any;
  loginuserId: any;


  constructor(public router: Router, private service: ServiceService) {
    this.loginuserId = JSON.parse(localStorage.getItem('user')).id;
   
  }

  ngOnInit() {
      this.getNotification()
    // this.OneSignalInit();
  }
  


  bck(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  getNotification(){
    let selectpara=
    {
     
      "userid":this.loginuserId
    }
    this.service.getNotificationData(selectpara).subscribe((res: any) => {
      console.log(res);
      this.data=res.response_data;
    });
  }


  
  
}
