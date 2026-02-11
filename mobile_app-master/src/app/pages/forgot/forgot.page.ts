

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { LoadingController, ToastController,AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServiceService,
    private alertController: AlertController,
  ) {}

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
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

 
  submitForm() {
    this.markFormGroupTouched(this.forgotForm);

    if (this.forgotForm.valid) {
      const email = this.forgotForm.get('email')?.value;
      const newPass = this.forgotForm.get('password')?.value;
      const confirmPass = this.forgotForm.get('confirmPassword')?.value;

      this.service.forgotpass(this.forgotForm.value).subscribe(
        async (res) => {
          if (res.response_code === "200") {
            // Show success alert and navigate on OK
            const alert = await this.alertController.create({
              header: 'Success',
              message: res.response_message, // "Password updated successfully."
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.router.navigateByUrl('/login');
                  }
                }
              ]
            });

            await alert.present();
          } else {

             const alert = await this.alertController.create({
              header: 'Error',
              message: 'Unexpected response code', // "Password updated successfully."
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.router.navigateByUrl('/login');
                  }
                }
              ]
            });

            await alert.present();
            // Handle other response codes if necessary
            // alert('Unexpected response code');
          }
        },
        async (err) => {

             const alert = await this.alertController.create({
              header: 'Error',
              message: 'Something went wrong. Please try again later.', // "Password updated successfully."
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.router.navigateByUrl('/login');
                  }
                }
              ]
            });

            await alert.present();
          console.error('Form submission failed', err);
     
        }
      );
    }
  }



  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }


}
