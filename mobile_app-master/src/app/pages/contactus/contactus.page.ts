
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  @ViewChild('contactUsNgForm') contactUsNgForm: NgForm;
  contactUsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private alertController: AlertController,
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initializing the form with validation rules
    this.contactUsForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], // Only alphabets and spaces allowed
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10-digit number validation
      email: ['', [Validators.required, Validators.email]], // Valid email
      subject: ['', Validators.required], // Required subject field
      message: ['', Validators.required] // Required message field
    });
  }

  checkValidInputDat(event: any, field: string) {
    if (field === 'name') {
      const pattern = /^[a-zA-Z \'-]+$/; // Only allows letters, spaces, and specific characters
      if (!pattern.test(event.target.value)) {
        this.contactUsForm.get(field)?.setValue(event.target.value.replace(/[^a-zA-Z \'-]/g, ''));
      }
    } else if (field === 'contactNumber') {
      this.checkValidInputData(event, field);
    }
  }

  checkValidInputData(event: any, controlName: string) {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, ''); // Remove non-digit characters

    
    this.contactUsForm.get(controlName)?.setValue(numericValue);

    if (numericValue.length > 10) {
      this.contactUsForm.get(controlName)?.setValue(numericValue.substring(0, 10));
    }
  }

 
  contactusApplication() {
    
    if (this.contactUsForm.invalid) {
      this.contactUsForm.markAllAsTouched();
      return;
    }

    if (this.contactUsForm.valid) {
      this.service.contactmail(
        this.contactUsForm.value.name,
        this.contactUsForm.value.contactNumber,
        this.contactUsForm.value.email,
        this.contactUsForm.value.subject,
        this.contactUsForm.value.message
      ).subscribe({
        next: async (res) => {
          await this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');
          this.resetForm();
        },
        error: async (err) => {
         
          await this.showAlert('Error', 'There was an issue submitting your details. Please try again.');
        }
      });
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  resetForm() {
    this.contactUsForm.reset(); 
    this.contactUsNgForm.resetForm(); 
  }

 
  notification() {
    this.router.navigateByUrl('/notification');
  }
}
