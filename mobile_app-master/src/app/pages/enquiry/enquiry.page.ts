import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.page.html',
  styleUrls: ['./enquiry.page.scss'],
})
export class EnquiryPage implements OnInit {
  enquiryForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    public router: Router,
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, this.validateMobile]],
      course: ['', Validators.required]
    });

  }
  checkValidInputData(event: any) {
    const pattern = /^[A-Za-z]+$/; // Regular expression for alphabets only
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault(); // Prevent character from being entered
    }
  }
  checkValidInputDatas(event: any) {
    const pattern = /^[0-9]+$/; // Regular expression for numbers only
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault(); // Prevent character from being entered
    }
  }
  validateMobile(control) {
    const mobileNumber = control.value;
    const pattern = /^[0-9]*$/; // Regular expression to allow only numbers
    if (!pattern.test(mobileNumber)) {
      return { invalidMobile: true };
    }
    return null;
  }
  numberOnly(event): boolean {
    console.log(event.target.value);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }



  submitForm() {
    if (this.enquiryForm.valid) {
      // Handle form submission here
    }
  }

}

