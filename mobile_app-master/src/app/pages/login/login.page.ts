
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  regForm!: FormGroup;
  showPassword = false;
  username: any;
  password: any;
  deviceid: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: ServiceService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.deviceid=localStorage.getItem('device_token');
    console.log('Device ID:',  localStorage.getItem('device_token'));
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'),
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
    // this.deviceid=
    // localStorage.getItem('device_token');
    // console.log('Device ID:',  localStorage.getItem('device_token'));
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait...',
  //   });
  //   await loading.present();
  //   return loading;
  // }

  // async presentToast(message: string, color: string) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration: 2000,
  //     color,
  //   });
  //   toast.present();
  // }

  // async login() {
  //   if (this.regForm.invalid) {
  //     this.regForm.markAllAsTouched();
  //     return;
  //   }

  //   this.username = this.regForm.get('email').value;
  //   this.password = this.regForm.get('password').value;

  //   const loading = await this.presentLoading();

  //   this.service.loginuser(this.username, this.password).subscribe(
  //     async (res) => {
  //       await loading.dismiss();
  //       if (res.response_status === 'Success') {
  //         console.log('Login successful:', res);
  //         localStorage.setItem('user', JSON.stringify(res.response_message.user));

  //         await this.presentToast('Login successfully!', 'success');

  //         this.router.navigateByUrl('/preferedcourses');
  //       } else {
  //         console.error('Unexpected response:', res);
  //         await this.presentToast('Your email or password is invalid', 'danger');
  //       }
  //       this.resetForm();
  //     },
  //     async (error) => {
  //       await loading.dismiss();
  //       console.error('Error occurred during login:', error);
  //       await this.presentToast('Please enter valid email & password.', 'danger');
  //       this.resetForm();
  //     }
  //   );
  // }


  async login() {
    if (this.regForm.invalid) {
      this.regForm.markAllAsTouched();
      return;
    }

    
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
          console.log('Login successful:', res);
          localStorage.setItem('user', JSON.stringify(res.response_message.user));
          localStorage.setItem('simpleauthToken', res.response_message.token); // Store token if provided

          await this.presentToast('Login successfully!', 'success');

          this.router.navigateByUrl('/preferedcourses');
        } else {
          console.error('Unexpected response:', res);
          await this.presentToast('Your email or password is invalid', 'danger');
        }
        this.resetForm();
      },
      async (error) => {
        await loading.dismiss();
        console.error('Error occurred during login:', error);
        await this.presentToast('Please enter valid email & password.', 'danger');
        this.resetForm();
      }
    );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
      spinner: null,  // Custom spinner with logo
      translucent: true,
      cssClass: 'custom-loading'
    });
    await loading.present();
    return loading;
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'custom-toast' // Apply custom CSS class
    });
    toast.present();
  }




  private resetForm() {
    this.regForm.reset();
    this.showPassword = false;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.regForm.controls;
  }
}
