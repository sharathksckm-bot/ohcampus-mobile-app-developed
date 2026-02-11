

import { Component,OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { LoadingController,ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-welcomepage',
   templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {
  [x: string]: any;
  response_data: any;
  public loading: any;
  user: any;
  constructor(
    private platform: Platform,
    private googlePlus: GooglePlus,
    private router: Router,
    public loadingController: LoadingController,
    public service: ServiceService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
        this.loading = await this.loadingController.create({
          message: 'Connecting ...'
        });
      }

      go() {
        this.router.navigateByUrl('/login');
      }

      skipLogin() {
        
        localStorage.setItem('hasSkipped', 'true');
        this.router.navigateByUrl('/preferedcourses');
      }


      async googleSignIn() {
        if (this.platform.is('android')) {
          const loading = await this.loadingController.create({
            message: `
              <div class="custom-spinner-container">
                <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
                <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
              </div>
               <span style="margin-top: 10px;"></span>`,
            spinner: null, // Disable the default spinner
            translucent: true,
            cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
          });

          try {
            await loading.present(); // Show the loading spinner

            const fingerprint = await this.googlePlus.getSigningCertificateFingerprint();
            console.log(fingerprint);

            const result = await this.googlePlus.login({
              offline: true  // Ensures account selection each time
            });
            this.response_data = result;
            console.log(this.response_data);

            const selectPara = {
              fname: this.response_data.displayName,
              email: this.response_data.email,
             device_id: localStorage.getItem('device_token'),
              platform: 'android',
              type:"loginwithgoogle",
              otp:"",
             password:"",
              mobile_no:"",
            
            };
           

            // localStorage.setItem('111response_data', JSON.stringify(this.response_data));
            this.service.googleusercreat( selectPara ).subscribe(
              async (response) => {
                console.log('User creation response:', response);
                if (response && response.response_data) {
                   localStorage.setItem('response_data', JSON.stringify(response.response_data));
                }
              
                await loading.dismiss(); // Dismiss loading spinner
                await this.presentToast('Login successful!', 'success');
                this.router.navigateByUrl('/preferedcourses');  // Redirect to edit profile page
              },
              async (error) => {
                console.error('API error:', error);
                await loading.dismiss(); // Dismiss loading spinner
                await this.presentToast('Google login failed. Please try again.', 'danger');
              }
            );
          } catch (err) {
          
            console.error('Google Login Error:', JSON.stringify(err));
            await loading.dismiss();
            await this.presentToast(`Error: ${JSON.stringify(err)}`, 'danger');

            this.googlePlus.logout()
            .then(res => {
              console.log(res);
            }, err => {
              console.log(err);
            
            })
          }
        }
      }


    

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    toast.present();
  }


}



