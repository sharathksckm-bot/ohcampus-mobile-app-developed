import { Component,Input,OnInit } from '@angular/core';
import { AlertController,ToastController,} from '@ionic/angular';
import { Platform} from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
// import { NgZone } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  [x: string]: any;

  @Input() title = '';
  @Input() content = '';
  @Input() isAccordion = false;
  isContentVisible: { [key: string]: boolean } = {
    engineering: false,
  };

  statusbar: any;
  splshscreen: any;
coursename: any;
menu: any;
menuArry: any[];
menud: any=[];
  listid: any;
  courseId: any;
  coursesArray: any=[];
  courseCatId: any;
  loginuserId: any;
  username: any;
  email: any;
  phone: any;
  token: any;
Usertype:boolean= false;
  userType: any;
  notificationType: any;
  shortlistedColleges: number[] = []; 
  constructor(
    public fcm: FCM,
    private device: Device,
    public alertController: AlertController,
    private platform: Platform,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private menuController: MenuController,
    public toastController: ToastController,    
   
     ) {
    
      this.platform.ready().then(() => {
        console.log('Device UUID is: ' + this.device.uuid);
        localStorage.setItem('DeviceUUID',this.device.uuid);
        console.log('Device model is: ' + this.device.model);
        localStorage.setItem('DeviceModel',this.device.model);
        console.log('Device manufacturer is: ' + this.device.manufacturer);
        localStorage.setItem('Devicemanufacturer',this.device.manufacturer);
        this.getDeviceToken()
      })
      .catch(e => console.log('ErrorInitFCM', e))
    
      this.getUserData()
      this.getmenudata()
    }

    ngOnInit(): void {
     
 
      const coursedata = localStorage.getItem('courses');
      this.coursesArray=JSON.parse(coursedata);
       this.courseId=this.coursesArray[0].id;
      this.courseCatId = JSON.parse(localStorage.getItem('catID'));
      console.log(this.courseCatId)
      if(this.courseCatId != '' && this.courseCatId != undefined){
      this.getmenudata()
   
       }
      
    }

   
   


    getDeviceToken(){
      this.fcm.getToken()
      .then(token => {
        localStorage.setItem("device_token", token);
        
        this.token=localStorage.getItem("device_token");
        console.log(token) ;
      })
      .catch(error => console.error('Error getting token', error));
      this.fcm.onNotification().subscribe(data => {
      console.log(data.notifictionType)
      this.notifictionType=data.notifictionType;
        if(data.wasTapped){
          console.log("111Received in background");
          console.log(this.notifictionType)
          this.backgroundtype(this.notifictionType)
          // alert(1)
          this.router.navigate(['/notification']);
        }
         else {
                    // alert(2)
                       this.router.navigate(['/notification']);
          console.log("111Received in foreground");
        };
      });
      //  alert(3)
              // this.router.navigate(['/notification']);
      this.fcm.onTokenRefresh().subscribe(token => {
        localStorage.setItem("device_token", token);
            this.token=localStorage.getItem("device_token");
        console.log(  this.token) ;
      });
    }

getUserData() {

  const user = JSON.parse(localStorage.getItem('user'));
  const hasSkipped = localStorage.getItem('hasSkipped');

  if (user) {
    console.log('Regular User information:', user);
    this.loginuserId = user.id;
    this.username = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.token = user.token;
    this.router.navigateByUrl('/tabs/tabs/tab1');
    this.Usertype=true
  } else if (hasSkipped) {
    console.log('User skipped login.');
    // this.router.navigateByUrl('/tabs/tabs/tab1');
  } else {
    this.Usertype=true
    const storedResponseData = localStorage.getItem('response_data');
    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);
      console.log('App page contantant set Google User information:', responseData);
      if (responseData && responseData.length == 0) {
        console.log('App page Google User information:', responseData[0]);
        this.loginuserId = responseData[0].id;
       
        this.username = responseData[0].f_name;
        this.email = responseData[0].email;
        this.phone = responseData[0].phone;
        this.token = responseData[0].token;
        this.router.navigateByUrl('/tabs/tabs/tab1');
        this.userlogindata()
      } else {
        
        console.log('111No user data found in response_data.' );
        // this.router.navigateByUrl('/welcomepage');
        this.router.navigateByUrl('/tabs/tabs/tab1');
        this.userlogindata()
       
      }
    } else {
      this.Usertype=false
      console.log('222No user information found in local storage.');
      this.router.navigateByUrl('/welcomepage');
      this.userlogindata()
      // this.router.navigateByUrl('/tabs/tabs/tab1');
    }
  }
}

userlogin() {
  if(this.loginuserId != '' && this.loginuserId != undefined){
    this.router.navigateByUrl('/tabs/tabs/tab1');
}
}
skipLogin() {
 
  localStorage.setItem('hasSkipped', 'true');


}
userlogindata()
{
  if(  this.Usertype==false)
  {
    this.router.navigateByUrl('/welcomepage');
  }
  else
  {
    this.router.navigateByUrl('/tabs/tabs/tab1');
  }

}

  toggleVisibility(itemKey) {
    console.log(itemKey);
    if (this.isAccordion) {
      this.isContentVisible[itemKey] = !this.isContentVisible[itemKey];
    } else {
      this.isContentVisible[itemKey] = true;
    }
  }


showNotification(title: string,msg: string)
{
    this.alert.create({
      header:title,
      message:msg,
      buttons:[{
        text:'OK'
      }]

    }).then((ele)=>{
      ele.present();
    });
}



closeMenu() {
  this.menuController.close();
}

getmenudata() {

  this.menu = '';
  // alert(this.courseId)
  this.service.getmenults(this.courseCatId,this.courseId).subscribe(res => {
    this.menu =res;
    console.log(this.menu)
   
  });
}




}

