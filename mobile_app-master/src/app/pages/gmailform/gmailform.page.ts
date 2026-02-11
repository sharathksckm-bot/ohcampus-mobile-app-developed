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

@Component({
  selector: 'app-gmailform',
  templateUrl: './gmailform.page.html',
  styleUrls: ['./gmailform.page.scss'],
})
export class GmailformPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  myForm: FormGroup;
  userData: any;
  public loading: any;
  signForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  otp: string[] = ['', '', '', '', '', ''];
  Otp: string;
  email: string;
 

  showOtpSection = false;
  response_data: any;
  constructor(
    private platform: Platform,
    private googlePlus: GooglePlus,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServiceService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {
    this.signForm = this.formBuilder.group({
      agreements: [false, Validators.requiredTrue]
    });
   }

   ngOnInit() {
    this.signForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \'-]+$')]], // Allow only alphabets, spaces, hyphens, and apostrophes
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, this.passwordMatchValidator()]], // Add password match validator
      mobilenum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Only numeric, exactly 10 digits

      agreements: ['', Validators.requiredTrue],
    
      Otp: [''],
    });
}

glogin() {
  this.router.navigateByUrl('/gloginform');
}

    go() {
      this.router.navigateByUrl('/welcomepage');
    }

// async googleSignIn() {
//   if (this.platform.is('android')) {
//     const loading = await this.loadingController.create({
//       message: 'Please wait...',
//       duration: 5000 // Set a timeout for 5 seconds
//     });
//     await loading.present();

//     try {
//       const fingerprint = await this.googlePlus.getSigningCertificateFingerprint();
     

//       const result = await this.googlePlus.login({});
//       this.userData = result;
    
//       const selectPara = {
//         fname: this.userData.displayName,
//         device_id: localStorage.getItem('device_token'),
//         platform: 'android',
//         login_with: 'gmail',
//         email: this.userData.email
//       };

//       localStorage.setItem('userData', JSON.stringify(this.userData));

//       this.router.navigateByUrl('/preferedcourses').then(() => {
//         loading.dismiss(); 
//         window.location.reload(); 
//       });

//     } catch (err) {
//       loading.dismiss(); 
//       console.error('Google login error:', err);
     
//       try {
//         await this.googlePlus.logout();
//       } catch (logoutError) {
       
//       }
//     }
//   }
// }
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
togglePasswordVisibility(field: string) {
  if (field === 'password') {
    this.showPassword = !this.showPassword;
  } else if (field === 'cpassword') {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}

async sign() {

  if (this.signForm.valid) {
    try {
      this.service.signup(this.signForm.value).subscribe(
        async (res) => {
          this.showOtpSection = true;
          const email = this.signForm.get('email').value;
          const password = this.signForm.get('password').value;
          const mobile = this.signForm.get('mobile').value;
          const Otp = this.signForm.get('Otp').value;
          this.Otp = this.signForm.value.Otp;
          this.email = this.signForm.value.email;
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('mobilenum', mobile);
        },
      );
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  } else {
    this.signForm.markAllAsTouched();
  }
}


passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.root.get('password');
    return password && control.value !== password.value ? { passwordMismatch: true } : null;
  };
}
checkValidInputData(event: any) {
  const pattern = /^[A-Za-z]+$/; 
  const inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
    event.preventDefault();
  }
}
cancel() {
  this.modal.dismiss('/signup');
  this.modalController.dismiss({
    dismissed: true,
  });
}





submit() {
  if (this.signForm.invalid) {
    this.alertController.create({
      header: 'Form Validation Error',
      message: 'Please fill in all required fields correctly before submitting.',
      buttons: ['OK']
    }).then(alert => {
      alert.present();
    });

    return;
  }

  console.log('form.values', this.signForm.value);
  console.log('form.values', this.signForm.value);
      let selectpara={
        "form":this.signForm.value,
        "deviceID":localStorage.getItem('device_token'),
        // localStorage.getItem('device_token'),
        "platform":"android"
      }
  this.service.signup(selectpara).subscribe(
    res => {
      if (res.response_code === '300') {
        // Handle the specific response code
        this.alertController.create({
          header: '',
          message: 'This user already exists! Please try another or log in.',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });

        return;
      }

      console.log(res);
      console.log(this.signForm.value);

      
      this.signForm.get('Otp').setValidators(Validators.required);
      this.showOtpSection = true;
      const email = this.signForm.get('email').value;
      const password = this.signForm.get('password').value;
      const mobile = this.signForm.get('mobile').value;
      const Otp = this.signForm.get('Otp').value;
      this.Otp = this.signForm.value.Otp;
      this.email = this.signForm.value.email;
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('mobilenum', mobile);
      // this.startTimer();
    },
    error => {
      // Handle any errors from the service call
      this.alertController.create({
        header: 'Error',
        message: 'An error occurred while submitting the form. Please try again.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
    }
  );
}




submitOtp() {
  this.email = this.signForm.get('email').value;
  this.Otp = this.signForm.get('Otp').value;
  this.service.verifyotp(this.email, this.Otp).subscribe(
    (res) => {
      if (res.response_code === "200") 
      {
        this.alertController.create({
          header: 'Success',
          message: 'OTP verified successfully!',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });
        this.router.navigateByUrl('/login');
      }
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
    }
  );
}


}



