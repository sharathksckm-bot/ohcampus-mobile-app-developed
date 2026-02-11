import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
 import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, ToastController,AlertController  } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gloginform',
  templateUrl: './gloginform.page.html',
  styleUrls: ['./gloginform.page.scss'],
})
export class GloginformPage implements OnInit {
  regForm!: FormGroup;
  showPassword = false;
  formvalue: any;
  logindata: any;
  token: any;
  password: any;
  username: string;
  userData: any;
  public loading: any;
  constructor(
    private platform: Platform,
    private googlePlus: GooglePlus,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: ServiceService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {

    localStorage.getItem('device_token')

    
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
    });
    localStorage.getItem('device_token')
  }

  go() {
    this.router.navigateByUrl('/welcomepage');
  }

  signup(){
    this.router.navigateByUrl('/gmailform');
  }

  get errorControl() {
    return this.regForm.controls;}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    return loading;
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
    });
    toast.present();
  }
  async login() {
    // this.username = this.regForm.get('email').value;
    // this.password = this.regForm.get('password').value;
    let selectpara={
      username:this.regForm.get('email').value,
      password:this.regForm.get('password').value,
      deviceid:localStorage.getItem('device_token'),
      platform:"android"
    }
    const loading = await this.presentLoading();

    this.service.loginuser(selectpara).subscribe(
      async (res) => {
        await loading.dismiss();
        if (res.response_status === 'Success') {
          console.log(res.response_status);
          console.log(res.response_message);
          console.log('Login successful:', res);
          // localStorage.setItem('token',res.response_message.token);
          localStorage.setItem('user', JSON.stringify(res.response_message.user));

          // Display success message
          this.presentToast('Login successfully!', 'success');

          // Navigate to preferred courses page
          this.router.navigateByUrl('/preferedcourses');

          // Reset the form
          this.regForm.reset();
        } else {
          console.error('Unexpected response:', res);
          this.presentToast('Your email or password is invalid', 'danger');

          // Reset the form
          this.regForm.reset();
        }
      },


      async (error) => {
        await loading.dismiss();
        console.error('Error occurred during login:', error);
        // this.presentToast('An error occurred during the login process. Please try again.', 'danger');
      }
    );
  }
  async googleSignIn() {
    if (this.platform.is('android')) {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 5000 // Set a timeout for 5 seconds
      });
      await loading.present();

      try {
        const fingerprint = await this.googlePlus.getSigningCertificateFingerprint();
        // alert(fingerprint);
        // console.log(fingerprint);

        const result = await this.googlePlus.login({});
        this.userData = result;
        // alert(this.userData);
        // console.log(this.userData);

        const selectPara = {
          fname: this.userData.displayName,
          device_id: localStorage.getItem('device_token'),
          platform: 'android',
          login_with: 'gmail',
          email: this.userData.email
        };

        // Save login data to local storage
        localStorage.setItem('userData', JSON.stringify(this.userData));

        // Navigate to the preferred courses page
        this.router.navigateByUrl('/preferedcourses').then(() => {
          loading.dismiss(); // Dismiss the loading indicator after navigation
          window.location.reload(); // Reload the page after navigation
        });

      } catch (err) {
        loading.dismiss(); // Dismiss the loading indicator on error
        console.error('Google login error:', err);
        // If logout fails, catch and log the error, but don't do anything else
        try {
          await this.googlePlus.logout();
        } catch (logoutError) {
          // console.error('Google logout error:', logoutError);
        }
      }
    }
  }
}
