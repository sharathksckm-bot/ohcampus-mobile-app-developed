

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  signForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  otp: string[] = ['', '', '', '', '', ''];
  Otp: string;
  email: string;
  timeLeft: number = 300; // 5 minutes in seconds
  timerSubscription: Subscription;

  showOtpSection: boolean = false;
  constructor(
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
    localStorage.getItem('device_token')
  }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \'-]+$')]], // Allow only alphabets, spaces, hyphens, and apostrophes
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmpassword: ['', [Validators.required, this.passwordMatchValidator(), Validators.maxLength(10)]], // Add password match validator
      mobilenum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Only numeric, exactly 10 digits
      agreements: ['', Validators.requiredTrue],
      Otp: ['',],
    });
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmpassword') {
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
            const mobile = this.signForm.get('mobilenum').value;
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
      let selectpara={
        "form":this.signForm.value,
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
          this.signForm.get('Otp').setValidators(Validators.required);
          this.signForm.get('Otp').updateValueAndValidity();
          this.showOtpSection = true;
  
          // Store data in localStorage
          const email = this.signForm.get('email').value;
          const password = this.signForm.get('password').value;
          const mobile = this.signForm.get('mobilenum').value;
  
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('mobilenum', mobile);
  
          console.log('OTP Section enabled:', this.showOtpSection);
        } 
        else if (res.response_code== "300") {
         
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
  //   this.email = this.signForm.get('email').value;
  //   this.Otp = this.signForm.get('Otp').value;
  
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
  //               // Navigate to the login page after the user acknowledges the message
  //               this.showOtpSection = false;
  //               this.router.navigateByUrl('/login');
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
    this.email = this.signForm.get('email').value;
    this.Otp = this.signForm.get('Otp').value;
  
    // Check if the OTP field is empty
    if (!this.Otp || this.Otp.trim() === '') {
      this.alertController.create({
        header: 'OTP Missing',
        message: 'Please enter the OTP.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
      return; 
    }
  
    // Proceed with OTP verification if the field is not empty
    this.service.verifyotp(this.email, this.Otp).subscribe(
      (res: any) => {
        console.log(res);
  
        // Show OTP success message and wait for user acknowledgment
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
  

}
