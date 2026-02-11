

/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, LoadingController, ModalController,AlertController } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { NavParams } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-popuplogsign',
  templateUrl: './popuplogsign.page.html',
  styleUrls: ['./popuplogsign.page.scss'],
})
export class PopuplogsignPage implements OnInit {
  currentForm = 'login';
  isPopupVisible = true;
  regForm!: FormGroup;
  signupForm!: FormGroup;
  forgotForm!: FormGroup;
  showPassword = false;
  password: any;
  username: string;
  fromTab: string;
  userData: any;
  showConfirmPassword = false;
  showOtpSection: boolean = false;
  Otp: string;
  email: string;
  hidePassword = true;
  hideConfirmPassword = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: ServiceService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private modalController: ModalController,
    private navParams: NavParams,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private alertController: AlertController,

  ) {
    localStorage.getItem('device_token')
  }

  ngOnInit() {
    this.fromTab = this.navParams.get('fromTab');
    this.initializeForms();
    localStorage.getItem('device_token')
  }

  initializeForms() {
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

   
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \'-]+$')]], // Allow only alphabets, spaces, hyphens, and apostrophes
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmpassword: ['', [Validators.required, this.passwordMatchValidatora(), Validators.maxLength(10)]], // Add password match validator
      mobilenum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Only numeric, exactly 10 digits
      agreements: ['', Validators.requiredTrue],
      Otp: ['',],
    });



    this.forgotForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  get regErrorControl() {
    return this.regForm.controls;
  }

  get signupErrorControl() {
    return this.signupForm.controls;
  }

  get forgotErrorControl() {
    return this.forgotForm.controls;
  }

  // togglePasswordVisibility(field: string) {
  //   if (field === 'password') {
  //     this.showPassword = !this.showPassword;
  //   } else if (field === 'confirmpassword') {
  //     this.showConfirmPassword = !this.showConfirmPassword;
  //   }
  // }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }

 passwordMatchValidatora(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.root.get('password');
      return password && control.value !== password.value ? { passwordMismatch: true } : null;
    };
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    return loading;
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
          console.log('Login successful:', res);
          localStorage.setItem('token', res.response_message.token);
          localStorage.setItem('user', JSON.stringify(res.response_message.user));

          this.presentToast('Login successfully!', 'success');

          this.isPopupVisible = false;
          this.router.navigate(['/tabs/tabs/tab1']).then(() => {
            window.location.reload();
          });

          this.regForm.reset();
        } else {
          console.error('Unexpected response:', res);
          this.presentToast('Your email or password is invalid', 'danger');
          this.regForm.reset();
        }
      },
      async (error) => {
        await loading.dismiss();
        console.error('Error occurred during login:', error);
        this.presentToast('An error occurred during the login process. Please try again.', 'danger');
      }
    );
  }

  
  submit() {
    if (this.signupForm.invalid) {
      this.alertController.create({
        header: 'Form Validation Error',
        message: 'Please fill in all required fields correctly before submitting.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
      return;
    }
  
    console.log('form.values', this.signupForm.value);
    let selectpara={
      "form":this.signupForm.value,
      "deviceID":localStorage.getItem('device_token'),
      // localStorage.getItem('device_token'),
      "platform":"android"
    }
    // Call the signup service
    this.service.signup(selectpara).subscribe(
      (res: any) => {
        if (res.response_code === "200") {
          console.log('Response:', res);
  
          // Set OTP validator and show OTP section
          this.signupForm.get('Otp').setValidators(Validators.required);
          this.signupForm.get('Otp').updateValueAndValidity();
          this.showOtpSection = true;
  
          // Store data in localStorage
          const email = this.signupForm.get('email').value;
          const password = this.signupForm.get('password').value;
          const mobile = this.signupForm.get('mobilenum').value;
  
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('mobilenum', mobile);
  
          console.log('OTP Section enabled:', this.showOtpSection);
        } else if (res.response_code === "300") {
          // Show alert if user already exists
          this.alertController.create({
            header: 'Signup Error',
            message: 'User already exists. Please log in or use another email ID.',
            buttons: ['OK']
          }).then(alert => {
            alert.present();
          });
        }
      },
      (error) => {
        console.error('Error in signup:', error);
  
        // Show generic error message
        this.alertController.create({
          header: 'Signup Error',
          message: 'An unexpected error occurred. Please try again later.',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });
      }
    );
  }



  


  // submitOtp() {
  //   this.email = this.signupForm.get('email').value;
  //   this.Otp = this.signupForm.get('Otp').value;
  
  //   // Check if the OTP field is empty
  //   if (!this.Otp || this.Otp.trim() === '') {
  //     this.alertController.create({
  //       header: 'OTP Missing',
  //       message: 'Please enter the OTP.',
  //       buttons: ['OK']
  //     }).then(alert => {
  //       alert.present();
  //     });
  //     return; // Exit the function if OTP is not entered
  //   }
  
  //   // Proceed with OTP verification if the field is not empty
  //   this.service.verifyotp(this.email, this.Otp).subscribe(
  //     (res: any) => {
  //       console.log(res);
  
  //       // Show OTP success message
  //       this.alertController.create({
  //         header: 'Verification Successful',
  //         message: 'Your OTP has been verified successfully.',
  //         buttons: [
  //           {
  //             text: 'OK',
  //             handler: () => {
               
  //               this.showOtpSection = false;
                
  //             }
  //           }
  //         ]
  //       }).then(alert => {
  //         alert.present();
  //       });
  //     },
  //     (error) => {
  //       console.error('Error occurred during OTP verification:', error);
  
  //       // Show error message if OTP verification fails
  //       this.alertController.create({
  //         header: 'Verification Failed',
  //         message: 'Invalid OTP. Please try again.',
  //         buttons: ['OK']
  //       }).then(alert => {
  //         alert.present();
  //       });
  //     }
  //   );
  // }
  


  submitOtp() {
    this.email = this.signupForm.get('email').value;
    this.Otp = this.signupForm.get('Otp').value;
  
    // Check if the OTP field is empty
    if (!this.Otp || this.Otp.trim() === '') {
      this.alertController.create({
        header: 'OTP Missing',
        message: 'Please enter the OTP.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
      return; // Exit the function if OTP is not entered
    }
  
    // Proceed with OTP verification if the field is not empty
    this.service.verifyotp(this.email, this.Otp).subscribe(
      (res: any) => {
        console.log(res);
 if(res.response_code === "200") 
 {
  this.alertController.create({
    header: 'Verification Successful',
    message: 'Your OTP has been verified successfully.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          // Reset the form and hide the OTP section after the user acknowledges
          this.signupForm.reset();
          this.showOtpSection = false;

         
          this.router.navigateByUrl('/popuplogsign');
        }
      }
    ]
  }).then(alert => {
    alert.present();
  });
 }
        // Show OTP success message and wait for user acknowledgment
        else if (res.response_code== "400") {
         
          // Show alert if user already exists
          this.alertController.create({
            header: 'Error',
            message: 'Invalid OTP. Please try again.',
            buttons: ['OK']
          }).then(alert => {
            alert.present();
          });
        }
      },
      (error) => {
        console.error('Error occurred during OTP verification:', error);
  
        // Show error message if OTP verification fails
        this.alertController.create({
          header: 'Verification Failed',
          message: 'Invalid OTP. Please try again.',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });
      }
    );
  }
  






  

  async forgotPassword() {
    const loading = await this.presentLoading();
  
    // Check if passwords match
    if (this.forgotForm.get('password').value !== this.forgotForm.get('confirmPassword').value) {
      await loading.dismiss();
      await this.presentToast('Passwords do not match', 'danger');
      return;
    }
  
    // Call the forgot password service
    this.service.forgotpass(this.forgotForm.value).subscribe(
      async (res) => {
        await loading.dismiss();
  
        if (res.response_code === '200') {
          // Show success toast before navigating or reloading
          await this.presentToast('Password reset successful!', 'success');
  
          // Proceed with navigation and form reset
          this.isPopupVisible = false;
          this.router.navigate(['/tabs/tabs/tab1']).then(() => {
            window.location.reload();
          });
          this.forgotForm.reset();
        } else {
          // Show failure toast for non-200 response
          await this.presentToast('Password reset failed', 'danger');
        }
      },
      async (error) => {
        await loading.dismiss();
        console.error('Error occurred during password reset:', error);
  
        // Show error toast for network or server errors
        await this.presentToast('An error occurred during the password reset process. Please try again.', 'danger');
      }
    );
  }
  

  showForm(form: string) {
    this.currentForm = form;
  }

  checkValidInputData(event: any, field: string) {
    if (field === 'name') {
      const pattern = /^[a-zA-Z \'-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
      }
    } else if (field === 'mobilenum') {
      const pattern = /^[0-9]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }
    }
  }

  async close() {

    await this.modalController.dismiss();
    // Check if the popup was opened from tab3 or tab4, and redirect to tab1
    if (this.fromTab === 'tab3' || this.fromTab === 'tab4') {
      this.router.navigate(['/tabs/tabs/tab1']);
      // this.router.navigateByUrl('/tabs/tabs/tab2')
    }
 
  }

 

  async googleSignIn(event: Event) {
    event.stopPropagation();

    // Show loading spinner before the Google login process starts
    const loading = await this.loadingController.create({
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

    await loading.present(); // Show the loading spinner immediately

    if (this.platform.is('android')) {
      try {
        const fingerprint = await this.googlePlus.getSigningCertificateFingerprint();
        console.log(fingerprint);

        const result = await this.googlePlus.login({});
        this.userData = result;
        console.log(this.userData);

       
        const selectPara = {
          fname:this.userData.displayName,
          email: this.userData.email,
        device_id: localStorage.getItem('device_token'),
          platform: 'android',
          type:"loginwithgoogle",
          otp:"",
         password:"",
          mobile_no:"",
        
        };
        // Save login data to local storage
        // localStorage.setItem('userData', JSON.stringify(this.userData));

        // Call your API to create the user
        this.service.googleusercreat(
          selectPara
        ).subscribe(
          async (response) => {
   
            console.log('User creation response:', response);
            if (response && response.response_data) {
              localStorage.setItem('response_data', JSON.stringify(response.response_data));
            }

            await loading.dismiss(); // Dismiss loading spinner
            await this.presentToast('Login successfully!', 'success');
            await this.modalController.dismiss(); // Close the popup on successful login
            this.router.navigateByUrl('/tabs/tabs/tab1');  // Redirect to the home page
          },
          async (error) => {
            console.error('API error:', error);
            await loading.dismiss(); // Dismiss loading spinner
            await this.presentToast('Google login failed. Please try again.', 'danger');
          }
        );
      } catch (err) {
        console.error('Google login error:', err);
        await loading.dismiss(); // Dismiss loading spinner in case of error
        await this.presentToast('Google login failed. Please try again.', 'danger');

        try {
          await this.googlePlus.logout(); // Ensure logout if login fails
        } catch (logoutError) {
          console.error('Google logout error:', logoutError);
        }
      }
    }
  }


  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 200,
      color,
      position: 'middle'
    });
    toast.present();
  }
}
