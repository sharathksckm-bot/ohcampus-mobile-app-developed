(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 90392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 64374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 17110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 90392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 64374);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);












let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 64374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 71979);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ 69233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);











let SignupPage = class SignupPage {
  constructor(formBuilder, router, service, loadingController, toastController, alertController, modalController) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.service = service;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.modalController = modalController;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.otp = ['', '', '', '', '', ''];
    this.timeLeft = 300; // 5 minutes in seconds

    this.showOtpSection = false;
    this.signForm = this.formBuilder.group({
      agreements: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]
    });
    localStorage.getItem('device_token');
  }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \'-]+$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)]],
      confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.passwordMatchValidator(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)]],
      mobilenum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{10}$')]],
      agreements: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue],
      Otp: ['']
    });
  }

  togglePasswordVisibility(field) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmpassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  sign() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.signForm.valid) {
        try {
          _this.service.signup(_this.signForm.value).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
              _this.showOtpSection = true;

              const email = _this.signForm.get('email').value;

              const password = _this.signForm.get('password').value;

              const mobile = _this.signForm.get('mobilenum').value;

              const Otp = _this.signForm.get('Otp').value;

              _this.Otp = _this.signForm.value.Otp;
              _this.email = _this.signForm.value.email;
              localStorage.setItem('email', email);
              localStorage.setItem('password', password);
              localStorage.setItem('mobilenum', mobile);
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        } catch (error) {
          console.error('Error occurred during registration:', error);
        }
      } else {
        _this.signForm.markAllAsTouched();
      }
    })();
  }

  passwordMatchValidator() {
    return control => {
      const password = control.root.get('password');
      return password && control.value !== password.value ? {
        passwordMismatch: true
      } : null;
    };
  }

  checkValidInputData(event, field) {
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
      dismissed: true
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
    let selectpara = {
      "form": this.signForm.value,
      "deviceID": localStorage.getItem('device_token'),
      // localStorage.getItem('device_token'),
      "platform": "android"
    }; // Call the signup service

    this.service.signup(selectpara).subscribe(res => {
      if (res.response_code === "200") {
        console.log('Response:', res); // Set OTP validator and show OTP section

        this.signForm.get('Otp').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        this.signForm.get('Otp').updateValueAndValidity();
        this.showOtpSection = true; // Store data in localStorage

        const email = this.signForm.get('email').value;
        const password = this.signForm.get('password').value;
        const mobile = this.signForm.get('mobilenum').value;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('mobilenum', mobile);
        console.log('OTP Section enabled:', this.showOtpSection);
      } else if (res.response_code == "300") {
        // Show alert if user already exists
        this.alertController.create({
          header: 'Signup Error',
          message: 'User already exists. Please log in or use another email ID.',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });
      }
    }, error => {
      console.error('Error in signup:', error); // Show generic error message

      this.alertController.create({
        header: 'Signup Error',
        message: 'An unexpected error occurred. Please try again later.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
    });
  } // submitOtp() {
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
    this.Otp = this.signForm.get('Otp').value; // Check if the OTP field is empty

    if (!this.Otp || this.Otp.trim() === '') {
      this.alertController.create({
        header: 'OTP Missing',
        message: 'Please enter the OTP.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
      return;
    } // Proceed with OTP verification if the field is not empty


    this.service.verifyotp(this.email, this.Otp).subscribe(res => {
      console.log(res); // Show OTP success message and wait for user acknowledgment

      if (res.response_code === "200") {
        this.alertController.create({
          header: 'Success',
          message: 'OTP verified successfully!',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });
        this.router.navigateByUrl('/login');
      } else if (res.response_code == "400") {
        // Show alert if user already exists
        this.alertController.create({
          header: 'Error',
          message: 'Invalid OTP. Please try again.',
          buttons: ['OK']
        }).then(alert => {
          alert.present();
        });
      }
    }, error => {
      console.error('Error occurred during OTP verification:', error); // Show error message if OTP verification fails

      this.alertController.create({
        header: 'Verification Failed',
        message: 'Invalid OTP. Please try again.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
    });
  }

};

SignupPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

SignupPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal]
  }]
};
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-signup',
  template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SignupPage);


/***/ }),

/***/ 69233:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  --border-radius: 50px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-left: 40%;\n  color: gray;\n  margin-top: -13px;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.setimg2 {\n  position: fixed;\n  bottom: 0%;\n  left: 0%;\n  z-index: -1;\n}\n\n.otp-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.otp-input {\n  text-align: center;\n  margin: 0 5px;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n}\n\npage-otp-verification ion-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\npage-otp-verification ion-grid {\n  max-width: 400px;\n  width: 100%;\n}\n\npage-otp-verification ion-item {\n  margin-bottom: 20px;\n}\n\n::ng-deep .mat-checkbox.termscon {\n  margin: 0px 20px 10px;\n}\n\n::ng-deep .mat-checkbox.termscon .mat-checkbox-inner-container {\n  display: inline-block;\n  height: 16px;\n  line-height: 0;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  white-space: nowrap;\n  width: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n::ng-deep .mat-checkbox.termscon .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 20px;\n}\n\n.termstext {\n  font-size: 14px;\n  text-wrap: wrap;\n  display: block;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVDO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0ksbURBQUE7QUFFSjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsaUJBQUE7QUFLSjs7QUFIRTs7RUFFRSxhQUFBO0FBTUo7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0FBU0Y7O0FBUEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFUQTtFQUNFLFVBQUE7QUFZRjs7QUFQQTtFQUNFLHNDQUFBO0FBVUY7O0FBUkE7RUFBMEMsV0FBQTtBQVkxQzs7QUFWQTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFWQTtFQUNFLGVBQUE7RUFDRCxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFhRDs7QUFOQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFTRjs7QUFIRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkU7RUFDRSxtQkFBQTtBQUlKOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFNRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuIC5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgIFxyXG59IFxyXG4ubG9naW57XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4OyAgIFxyXG59XHJcblxyXG4ubWFpbi1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcclxufVxyXG4uc2V0aW1ne1xyXG4gIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkICsgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfSBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcclxufVxyXG4uYnRue1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggMTZweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwYW57XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuLnAxe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzcHhcclxuICB9XHJcbi5tYXRmaWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnctNzV7XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcclxuICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcblxyXG4uc2V0aW1nMntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiBib3R0b206IDAlO1xyXG4gbGVmdDogMCU7XHJcbiB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcblxyXG4vL2lvbiBtb2RlbCBvdHAgc2VjdGlvbiBjc3NcclxuXHJcbi5vdHAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ub3RwLWlucHV0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbnBhZ2Utb3RwLXZlcmlmaWNhdGlvbiB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1ncmlkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC50ZXJtc2NvbntcclxuICBtYXJnaW46IDBweCAyMHB4IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gudGVybXNjb24gLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgb3JkZXI6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LnRlcm1zY29uIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi50ZXJtc3RleHR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtd3JhcDogd3JhcDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */");

/***/ }),

/***/ 71979:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-div\">\n    <form [formGroup]=\"signForm\" class=\"form_login\">\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"login\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n      </div>\n      <div class=\"matfield\">\n        <div *ngIf=\"!showOtpSection\">\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Name</mat-label>\n            <input matInput placeholder=\"Enter your name\" formControlName=\"name\" (input)=\"checkValidInputData($event, 'name')\">\n            <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n            <mat-error *ngIf=\"signForm.get('name').errors?.required && signForm.get('name').touched\">\n              Name is required\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('name').errors?.pattern && signForm.get('name').touched\">\n              Only alphabets are allowed\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Enter your email address\" formControlName=\"email\">\n            <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n            <mat-error *ngIf=\"signForm.get('email').errors?.required && signForm.get('email').touched\">\n              Email address is required\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('email').errors?.email && signForm.get('email').touched\">\n              Please enter a valid email address\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput formControlName=\"password\" [type]=\"showPassword ? 'text' : 'password'\"\n              placeholder=\"Enter your password\">\n            <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off-outline' : 'eye-outline'\"\n              (click)=\"togglePasswordVisibility('password')\"></ion-icon>\n            <mat-error *ngIf=\"signForm.get('password').errors?.required && signForm.get('password').touched\">\n              Password is required\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('password').errors?.minlength && signForm.get('password').touched\">\n              Password must be at least 6 characters long\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('password').errors?.maxlength && signForm.get('password').touched\">\n              Password cannot be more than 10 characters long\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Confirm Password</mat-label>\n            <input matInput formControlName=\"confirmpassword\" [type]=\"showConfirmPassword ? 'text' : 'password'\"\n              placeholder=\"Confirm your password\">\n            <ion-icon class=\"icon\" matSuffix [name]=\"showConfirmPassword ? 'eye-off-outline' : 'eye-outline'\"\n              (click)=\"togglePasswordVisibility('confirmpassword')\"></ion-icon>\n            <mat-error *ngIf=\"signForm.get('confirmpassword').errors?.required && signForm.get('confirmpassword').touched\">\n              Confirm Password is required\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('confirmpassword').errors?.passwordMismatch && signForm.get('confirmpassword').touched\">\n              Passwords do not match\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('confirmpassword').errors?.maxlength && signForm.get('confirmpassword').touched\">\n              Password cannot be more than 10 characters long\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Mobile Number</mat-label>\n            <input matInput placeholder=\"Enter your mobile number\" formControlName=\"mobilenum\"\n              (input)=\"checkValidInputData($event, 'mobilenum')\">\n            <ion-icon name=\"call-outline\" class=\"icon\" matSuffix></ion-icon>\n            <mat-error *ngIf=\"signForm.get('mobilenum').errors?.required && signForm.get('mobilenum').touched\">\n              Mobile number is required\n            </mat-error>\n            <mat-error *ngIf=\"signForm.get('mobilenum').errors?.pattern && signForm.get('mobilenum').touched\">\n              Only numeric values are allowed and it should be exactly 10 digits long\n            </mat-error>\n          </mat-form-field>\n\n          <mat-checkbox formControlName=\"agreements\" class=\"termscon\" color=\"primary\">\n            <span class=\"termstext\">\n              I agree to the OhCampus Terms and Conditions and privacy policy and  provide consent to be \n              contacted for promotion via whatsapp, sms,mail etc. \n            </span>\n          </mat-checkbox>\n\n        </div>\n\n        <div *ngIf=\"showOtpSection\">\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Email OTP</mat-label>\n            <input matInput formControlName=\"Otp\" placeholder=\"Enter OTP\">\n            <ion-icon class=\"icon\" matSuffix name=\"key-outline\"></ion-icon>\n            <mat-error *ngIf=\"signForm.get('Otp').errors?.required && signForm.get('Otp').touched\">\n              OTP is required\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n       \n        <!-- <ion-button class=\"submit-btn btn\" (click)=\"!showOtpSection ? submit() : submitOtp()\">\n          <span *ngIf=\"!showOtpSection\">Sign Up</span>\n          <span *ngIf=\"showOtpSection\">Submit OTP</span>\n        </ion-button> -->\n\n        <div  (click)=\"!showOtpSection ? submit() : submitOtp()\">\n          <ion-button *ngIf=\"!showOtpSection\" class=\"submit-btn btn\"  (click)=\"submit()\">\n            <span >Sign Up</span>\n          </ion-button>\n\n          <ion-button *ngIf=\"showOtpSection\" class=\"submit-btn btn\" (click)=\"submitOtp()\">\n            <span >Submit OTP</span>\n          </ion-button>\n\n        </div>\n\n\n        <div class=\"already-account\">\n          <p>Already have an account? <span class=\"primary-color\" routerLink=\"/login\">Login here</span></p>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map