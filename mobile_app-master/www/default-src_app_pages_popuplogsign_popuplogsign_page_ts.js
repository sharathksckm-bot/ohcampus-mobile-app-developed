(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["default-src_app_pages_popuplogsign_popuplogsign_page_ts"],{

/***/ 74303:
/*!*********************************************************!*\
  !*** ./src/app/pages/popuplogsign/popuplogsign.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopuplogsignPage": () => (/* binding */ PopuplogsignPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_popuplogsign_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./popuplogsign.page.html */ 75589);
/* harmony import */ var _popuplogsign_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popuplogsign.page.scss */ 53943);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);




/* eslint-disable @typescript-eslint/member-ordering */










let PopuplogsignPage = class PopuplogsignPage {
  constructor(formBuilder, router, http, service, loadingController, toastController, modalController, navParams, platform, googlePlus, alertController) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.http = http;
    this.service = service;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.modalController = modalController;
    this.navParams = navParams;
    this.platform = platform;
    this.googlePlus = googlePlus;
    this.alertController = alertController;
    this.currentForm = 'login';
    this.isPopupVisible = true;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.showOtpSection = false;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    localStorage.getItem('device_token');
  }

  ngOnInit() {
    this.fromTab = this.navParams.get('fromTab');
    this.initializeForms();
    localStorage.getItem('device_token');
  }

  initializeForms() {
    this.regForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(15)]]
    });
    this.signupForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z \'-]+$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)]],
      confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.passwordMatchValidatora(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)]],
      mobilenum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]{10}$')]],
      agreements: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue],
      Otp: ['']
    });
    this.forgotForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  get regErrorControl() {
    return this.regForm.controls;
  }

  get signupErrorControl() {
    return this.signupForm.controls;
  }

  get forgotErrorControl() {
    return this.forgotForm.controls;
  } // togglePasswordVisibility(field: string) {
  //   if (field === 'password') {
  //     this.showPassword = !this.showPassword;
  //   } else if (field === 'confirmpassword') {
  //     this.showConfirmPassword = !this.showConfirmPassword;
  //   }
  // }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  passwordMatchValidator(control) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }

    return null;
  }

  passwordMatchValidatora() {
    return control => {
      const password = control.root.get('password');
      return password && control.value !== password.value ? {
        passwordMismatch: true
      } : null;
    };
  }

  presentLoading() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait...'
      });
      yield loading.present();
      return loading;
    })();
  }

  login() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.username = this.regForm.get('email').value;
      // this.password = this.regForm.get('password').value;
      let selectpara = {
        username: _this2.regForm.get('email').value,
        password: _this2.regForm.get('password').value,
        deviceid: localStorage.getItem('device_token'),
        platform: "android"
      };
      const loading = yield _this2.presentLoading();

      _this2.service.loginuser(selectpara).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          yield loading.dismiss();

          if (res.response_status === 'Success') {
            console.log('Login successful:', res);
            localStorage.setItem('token', res.response_message.token);
            localStorage.setItem('user', JSON.stringify(res.response_message.user));

            _this2.presentToast('Login successfully!', 'success');

            _this2.isPopupVisible = false;

            _this2.router.navigate(['/tabs/tabs/tab1']).then(() => {
              window.location.reload();
            });

            _this2.regForm.reset();
          } else {
            console.error('Unexpected response:', res);

            _this2.presentToast('Your email or password is invalid', 'danger');

            _this2.regForm.reset();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (error) {
          yield loading.dismiss();
          console.error('Error occurred during login:', error);

          _this2.presentToast('An error occurred during the login process. Please try again.', 'danger');
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
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
    let selectpara = {
      "form": this.signupForm.value,
      "deviceID": localStorage.getItem('device_token'),
      // localStorage.getItem('device_token'),
      "platform": "android"
    }; // Call the signup service

    this.service.signup(selectpara).subscribe(res => {
      if (res.response_code === "200") {
        console.log('Response:', res); // Set OTP validator and show OTP section

        this.signupForm.get('Otp').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.signupForm.get('Otp').updateValueAndValidity();
        this.showOtpSection = true; // Store data in localStorage

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
    this.Otp = this.signupForm.get('Otp').value; // Check if the OTP field is empty

    if (!this.Otp || this.Otp.trim() === '') {
      this.alertController.create({
        header: 'OTP Missing',
        message: 'Please enter the OTP.',
        buttons: ['OK']
      }).then(alert => {
        alert.present();
      });
      return; // Exit the function if OTP is not entered
    } // Proceed with OTP verification if the field is not empty


    this.service.verifyotp(this.email, this.Otp).subscribe(res => {
      console.log(res);

      if (res.response_code === "200") {
        this.alertController.create({
          header: 'Verification Successful',
          message: 'Your OTP has been verified successfully.',
          buttons: [{
            text: 'OK',
            handler: () => {
              // Reset the form and hide the OTP section after the user acknowledges
              this.signupForm.reset();
              this.showOtpSection = false;
              this.router.navigateByUrl('/popuplogsign');
            }
          }]
        }).then(alert => {
          alert.present();
        });
      } // Show OTP success message and wait for user acknowledgment
      else if (res.response_code == "400") {
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

  forgotPassword() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this3.presentLoading(); // Check if passwords match

      if (_this3.forgotForm.get('password').value !== _this3.forgotForm.get('confirmPassword').value) {
        yield loading.dismiss();
        yield _this3.presentToast('Passwords do not match', 'danger');
        return;
      } // Call the forgot password service


      _this3.service.forgotpass(_this3.forgotForm.value).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          yield loading.dismiss();

          if (res.response_code === '200') {
            // Show success toast before navigating or reloading
            yield _this3.presentToast('Password reset successful!', 'success'); // Proceed with navigation and form reset

            _this3.isPopupVisible = false;

            _this3.router.navigate(['/tabs/tabs/tab1']).then(() => {
              window.location.reload();
            });

            _this3.forgotForm.reset();
          } else {
            // Show failure toast for non-200 response
            yield _this3.presentToast('Password reset failed', 'danger');
          }
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (error) {
          yield loading.dismiss();
          console.error('Error occurred during password reset:', error); // Show error toast for network or server errors

          yield _this3.presentToast('An error occurred during the password reset process. Please try again.', 'danger');
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

  showForm(form) {
    this.currentForm = form;
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

  close() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss(); // Check if the popup was opened from tab3 or tab4, and redirect to tab1

      if (_this4.fromTab === 'tab3' || _this4.fromTab === 'tab4') {
        _this4.router.navigate(['/tabs/tabs/tab1']); // this.router.navigateByUrl('/tabs/tabs/tab2')

      }
    })();
  }

  googleSignIn(event) {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      event.stopPropagation(); // Show loading spinner before the Google login process starts

      const loading = yield _this5.loadingController.create({
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
      yield loading.present(); // Show the loading spinner immediately

      if (_this5.platform.is('android')) {
        try {
          const fingerprint = yield _this5.googlePlus.getSigningCertificateFingerprint();
          console.log(fingerprint);
          const result = yield _this5.googlePlus.login({});
          _this5.userData = result;
          console.log(_this5.userData);
          const selectPara = {
            fname: _this5.userData.displayName,
            email: _this5.userData.email,
            device_id: localStorage.getItem('device_token'),
            platform: 'android',
            type: "loginwithgoogle",
            otp: "",
            password: "",
            mobile_no: ""
          }; // Save login data to local storage
          // localStorage.setItem('userData', JSON.stringify(this.userData));
          // Call your API to create the user

          _this5.service.googleusercreat(selectPara).subscribe( /*#__PURE__*/function () {
            var _ref5 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (response) {
              console.log('User creation response:', response);

              if (response && response.response_data) {
                localStorage.setItem('response_data', JSON.stringify(response.response_data));
              }

              yield loading.dismiss(); // Dismiss loading spinner

              yield _this5.presentToast('Login successfully!', 'success');
              yield _this5.modalController.dismiss(); // Close the popup on successful login

              _this5.router.navigateByUrl('/tabs/tabs/tab1'); // Redirect to the home page

            });

            return function (_x5) {
              return _ref5.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref6 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (error) {
              console.error('API error:', error);
              yield loading.dismiss(); // Dismiss loading spinner

              yield _this5.presentToast('Google login failed. Please try again.', 'danger');
            });

            return function (_x6) {
              return _ref6.apply(this, arguments);
            };
          }());
        } catch (err) {
          console.error('Google login error:', err);
          yield loading.dismiss(); // Dismiss loading spinner in case of error

          yield _this5.presentToast('Google login failed. Please try again.', 'danger');

          try {
            yield _this5.googlePlus.logout(); // Ensure logout if login fails
          } catch (logoutError) {
            console.error('Google logout error:', logoutError);
          }
        }
      }
    })();
  }

  presentToast(message, color) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const toast = yield _this6.toastController.create({
        message,
        duration: 200,
        color,
        position: 'middle'
      });
      toast.present();
    })();
  }

};

PopuplogsignPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

PopuplogsignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-popuplogsign',
  template: _raw_loader_popuplogsign_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_popuplogsign_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], PopuplogsignPage);


/***/ }),

/***/ 53943:
/*!***********************************************************!*\
  !*** ./src/app/pages/popuplogsign/popuplogsign.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".setimg {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.closeicon {\n  font-size: 26px;\n  color: red;\n  margin-left: auto;\n  text-align: right;\n  display: block;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\n.w-75 {\n  width: 90%;\n  margin: 0 10px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -15px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: 90%;\n  margin: auto;\n  border-radius: 50px;\n  background-color: #007fdc !important;\n}\n\n.span {\n  color: #0081dc;\n}\n\n.p1 {\n  padding-right: 20px;\n  color: #0081dc;\n  margin-top: -16px !important;\n  text-align: right;\n}\n\nion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -15px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.p1 {\n  padding-right: 20px;\n  color: #0081dc;\n  margin-top: 1px !important;\n  text-align: right;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n  margin: 0 10px;\n}\n\n.setimg2 {\n  position: fixed;\n  bottom: 0%;\n  left: 0%;\n  z-index: -1;\n}\n\n.form_login {\n  z-index: 111 !important;\n  border: 1px solid lightgray;\n  position: absolute;\n  top: 50%;\n  max-width: 100%;\n  width: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  background-color: #ffffff !important;\n}\n\n.form_login input {\n  color: black !important;\n}\n\n.form_signup {\n  z-index: 111 !important;\n  border: 1px solid lightgray;\n  position: absolute;\n  top: 50%;\n  max-width: 100%;\n  width: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  background-color: #ffffff !important;\n}\n\n.form_signup input {\n  color: black !important;\n}\n\n.form_signup .setimgsignup {\n  text-align: center;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\nh4 {\n  text-align: center;\n  top: -57px;\n  font-size: 26px;\n  color: blue;\n  font-style: italic;\n}\n\n.googldiv {\n  display: flex;\n  border: 1px solid gray;\n  border-radius: 50px;\n  margin: auto;\n  width: 80%;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n  color: black !important;\n}\n\n.googlelogo {\n  width: 24px;\n  position: relative;\n  right: 15px;\n}\n\n.or-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000;\n  /* Change the color as needed */\n  font-size: 16px;\n  /* Adjust the font size as needed */\n  margin: 20px 35px;\n}\n\n.or-divider::before,\n.or-divider::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid lightgray;\n  /* Change the line color as needed */\n  margin: 0 10px;\n}\n\n.mx-16 {\n  margin: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwbG9nc2lnbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFBRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7O0VBRUUsYUFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSEE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBTUY7O0FBTEU7RUFDRSx1QkFBQTtBQU9KOztBQUhDO0VBQ0MsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQU1GOztBQUxFO0VBQ0UsdUJBQUE7QUFPSjs7QUFMRTtFQUNFLGtCQUFBO0FBT0o7O0FBYUE7RUFDRSxzQ0FBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQWFBO0VBQ0UseUNBQUE7RUFDQSxpQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFYRjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSwrQkFBQTtFQUNiLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsaUJBQUE7QUFYRjs7QUFjQTs7RUFFRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQW9DLG9DQUFBO0VBQ3BDLGNBQUE7QUFWRjs7QUFZQTtFQUNFLGNBQUE7QUFURiIsImZpbGUiOiJwb3B1cGxvZ3NpZ24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGxvZ2luIGZvcm0gY3NzXHJcbi5zZXRpbWd7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jbG9zZWljb257XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnctNzUge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgbWF0LWZvcm0tZmllbGQgKyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYig5OSwgOTIsIDkyKTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwYW4ge1xyXG4gIGNvbG9yOiAjMDA4MWRjO1xyXG59XHJcbi5wMSB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBjb2xvcjogIzAwODFkYztcclxuICBtYXJnaW4tdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgbWF0LWZvcm0tZmllbGQgKyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYig5OSwgOTIsIDkyKTtcclxufVxyXG4ucDEge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDgxZGM7XHJcbiAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXRmaWVsZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53LTc1IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5zZXRpbWcyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZvcm1fbG9naW4ge1xyXG4gIHotaW5kZXg6IDExMSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiA5NCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBpbnB1dHtcclxuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4gLmZvcm1fc2lnbnVwIHtcclxuICB6LWluZGV4OiAxMTEgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogOTQlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgaW5wdXR7XHJcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2V0aW1nc2lnbnVwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiB9XHJcblxyXG4vLyAuZm9ybV9mb3Jnb3Qge1xyXG4vLyAgIHotaW5kZXg6IDExMSAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiA1MCU7XHJcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgIHdpZHRoOiA5NCU7XHJcbi8vICAgbGVmdDogNTAlO1xyXG4vLyAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcclxuICB0b3A6IC0xLjVlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbmg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiAtNTdweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuLmdvb2dsZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ29vZ2xlbG9nb3tcclxuICB3aWR0aDogMjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm9yLWRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7IC8qIENoYW5nZSB0aGUgY29sb3IgYXMgbmVlZGVkICovXHJcbiAgZm9udC1zaXplOiAxNnB4OyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICBtYXJnaW46IDIwcHggMzVweDtcclxufVxyXG5cclxuLm9yLWRpdmlkZXI6OmJlZm9yZSxcclxuLm9yLWRpdmlkZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7IC8qIENoYW5nZSB0aGUgbGluZSBjb2xvciBhcyBuZWVkZWQgKi9cclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4ubXgtMTZ7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 75589:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popuplogsign/popuplogsign.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"main-div\" *ngIf=\"isPopupVisible === true\" >\n \n  <div *ngIf=\"currentForm === 'login'\" >\n    <form [formGroup]=\"regForm\" class=\"form_login\">\n        <ion-icon class=\"closeicon\" name=\"close-outline\" (click)=\"close()\" slot=\"end\"></ion-icon>\n        <div class=\"setimg\">\n            <img src=\"../../../assets/icon/logo_15.png\">\n        </div>\n        <div class=\"matfield\">\n          <!-- <div  (click)=\"googleSignIn($event)\" style=\"color: black;\">google</div> -->\n\n          <div class=\"googldiv\"  (click)=\"googleSignIn($event)\">\n            <img class=\"googlelogo\" src=\"../../../assets/icon/search.png\">Login with Google</div> \n        \n            <p class=\"or-divider\">OR</p>\n        \n\n\n            <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Email </mat-label>\n                <input matInput type=\"email\" id=\"email\" formControlName=\"email\">\n                <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n                <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n                    Email address is required\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n                    Please enter a valid email address\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"w-75\" appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input matInput formControlName=\"password\" [type]=\"showPassword ? 'text' : 'password'\" required>\n                <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off' : 'eye'\" (click)=\"togglePasswordVisibility()\"></ion-icon>\n                <!-- <input matInput formControlName=\"password\" type=\"{{ showPassword ? 'text' : 'password' }}\" [(ngModel)]=\"password\" required> -->\n                <!-- <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off' : 'eye'\" (click)=\"togglePasswordVisibility()\"></ion-icon> -->\n                <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n                    Password is required\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n                    Please enter Password at least 1 digit, 1 capital letter, 1 small letter, and 1 special character.\n                </mat-error>\n            </mat-form-field>\n            <p class=\"p1 \" style=\"margin-bottom: 10px;\" (click)=\"showForm('forgot')\">Forgot Password?</p>\n            <div class=\"button-container\">\n                <ion-button (click)=\"login()\" class=\"btn\" mat-raised-button color=\"primary\">Login</ion-button>\n            </div>\n            <p style=\"color:black !important\">Create an account -<span class=\"span\" (click)=\"showForm('signup')\"> Signup Now</span></p>\n        </div>\n    </form>\n</div>\n\n\n\n  <div *ngIf=\"currentForm === 'signup'\">\n   \n  \n    <form [formGroup]=\"signupForm\" class=\"form_signup\">\n     \n      <ion-icon class=\"closeicon\" slot=\"end\"  name=\"close-outline\" (click)=\"close()\"></ion-icon>\n      <div class=\"setimgsignup\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n    </div>\n    \n      <div class=\"matfield\">\n        <div *ngIf=\"!showOtpSection\">\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Name</mat-label>\n            <input matInput placeholder=\"Enter your name\" formControlName=\"name\" (input)=\"checkValidInputData($event, 'name')\">\n            <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n            <mat-error *ngIf=\"signupForm.get('name').errors?.required && signupForm.get('name').touched\">\n              Name is required\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('name').errors?.pattern && signupForm.get('name').touched\">\n              Only alphabets are allowed\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Enter your email address\" formControlName=\"email\">\n            <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n            <mat-error *ngIf=\"signupForm.get('email').errors?.required && signupForm.get('email').touched\">\n              Email address is required\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('email').errors?.email && signupForm.get('email').touched\">\n              Please enter a valid email address\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput formControlName=\"password\" [type]=\"showPassword ? 'text' : 'password'\"\n              placeholder=\"Enter your password\">\n            <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off-outline' : 'eye-outline'\"\n              (click)=\"togglePasswordVisibility('password')\"></ion-icon>\n            <mat-error *ngIf=\"signupForm.get('password').errors?.required && signupForm.get('password').touched\">\n              Password is required\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('password').errors?.minlength && signupForm.get('password').touched\">\n              Password must be at least 6 characters long\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('password').errors?.maxlength && signupForm.get('password').touched\">\n              Password cannot be more than 10 characters long\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Confirm Password</mat-label>\n            <input matInput formControlName=\"confirmpassword\" [type]=\"showConfirmPassword ? 'text' : 'password'\"\n              placeholder=\"Confirm your password\">\n            <ion-icon class=\"icon\" matSuffix [name]=\"showConfirmPassword ? 'eye-off-outline' : 'eye-outline'\"\n              (click)=\"togglePasswordVisibility('confirmpassword')\"></ion-icon>\n            <mat-error *ngIf=\"signupForm.get('confirmpassword').errors?.required && signupForm.get('confirmpassword').touched\">\n              Confirm Password is required\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('confirmpassword').errors?.passwordMismatch && signupForm.get('confirmpassword').touched\">\n              Passwords do not match\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('confirmpassword').errors?.maxlength && signupForm.get('confirmpassword').touched\">\n              Password cannot be more than 10 characters long\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Mobile Number</mat-label>\n            <input matInput placeholder=\"Enter your mobile number\" formControlName=\"mobilenum\"\n              (input)=\"checkValidInputData($event, 'mobilenum')\">\n            <ion-icon name=\"call-outline\" class=\"icon\" matSuffix></ion-icon>\n            <mat-error *ngIf=\"signupForm.get('mobilenum').errors?.required && signupForm.get('mobilenum').touched\">\n              Mobile number is required\n            </mat-error>\n            <mat-error *ngIf=\"signupForm.get('mobilenum').errors?.pattern && signupForm.get('mobilenum').touched\">\n              Only numeric values are allowed and it should be exactly 10 digits long\n            </mat-error>\n          </mat-form-field>\n\n          \n          <ion-row style=\"padding: 0 16px 10px;\">\n            <ion-col size=\"1\">\n <mat-checkbox formControlName=\"agreements\" class=\"termscon\" color=\"primary\">\n           \n          </mat-checkbox>\n            </ion-col>\n\n            <ion-col size=\"11\">\n              <span class=\"termstext\" style=\"color: black;\">\n                I agree to the OhCampus Terms and Conditions and privacy policy and  provide consent to be \n                contacted for promotion via whatsapp, sms,mail etc. \n              </span>\n            </ion-col>\n\n\n          </ion-row>\n\n        </div>\n\n        <div *ngIf=\"showOtpSection\">\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>OTP</mat-label>\n            <input matInput formControlName=\"Otp\" placeholder=\"Enter OTP\">\n            <ion-icon class=\"icon\" matSuffix name=\"key-outline\"></ion-icon>\n            <mat-error *ngIf=\"signupForm.get('Otp').errors?.required && signupForm.get('Otp').touched\">\n              OTP is required\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <!-- <ion-button class=\"submit-btn btn\" (click)=\"!showOtpSection ? submit() : submitOtp()\">\n          <span *ngIf=\"!showOtpSection\">Sign Up</span>\n          <span *ngIf=\"showOtpSection\" (click)=\"showForm('login')\">Submit OTP</span>\n        </ion-button> -->\n\n\n        <div  (click)=\"!showOtpSection ? submit() : submitOtp()\">\n          <ion-button *ngIf=\"!showOtpSection\" class=\"submit-btn btn\"  (click)=\"submit()\">\n            <span >Sign Up</span>\n          </ion-button>\n\n          <ion-button *ngIf=\"showOtpSection\" class=\"submit-btn btn\" (click)=\"submitOtp()\">\n            <span >Submit OTP</span>\n          </ion-button>\n\n        </div>\n\n      \n        <div class=\"already-account\">\n          <p>Already have an account? <span class=\"primary-color\" (click)=\"showForm('login')\">Login here</span></p>\n        </div>\n      </div>\n    </form>\n\n  </div>\n\n\n\n\n\n\n  <div *ngIf=\"currentForm === 'forgot'\">\n   \n    <form [formGroup]=\"forgotForm\" class=\"form_login\" >\n      <ion-icon class=\"closeicon\" slot=\"end\"  name=\"close-outline\" (click)=\"close()\"></ion-icon>\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n    </div>\n    <div class=\"matfield\">\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>email</mat-label>\n        <input matInput type=\"email\" id=\"email\" formControlName=\"email\" >\n        <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n        <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n          Email address is required\n        </mat-error>\n        <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n          Please enter a valid email address\n        </mat-error>\n      </mat-form-field>\n      \n      <!-- <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>New Password</mat-label>\n        <input matInput formControlName=\"password\" type=\"{{ showPassword ? 'text' : 'password' }}\"[(ngModel)]=\"password\" required>\n        <ion-icon class=\"icon\" matSuffix name=\"eye-off-outline\" name=\"{{ showPassword ? 'eye-off' : 'eye' }}\"\n        (click)=\"togglePasswordVisibility()\"></ion-icon>\n        <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n          Password is required\n        </mat-error>\n        <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n          Please enter Password at least 1 digit 1 capital and small letter and 1 special character. \n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Confirm Password</mat-label>\n        <input matInput formControlName=\"confirmPassword\" type=\"{{ showPassword ? 'text' : 'password' }}\"[(ngModel)]=\"password\" required>\n        <ion-icon class=\"icon\" matSuffix name=\"eye-off-outline\" name=\"{{ showPassword ? 'eye-off' : 'eye' }}\"\n        (click)=\"toggleConfirmPasswordVisibility()\"></ion-icon>\n        <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n          Password is required\n        </mat-error>\n        <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n          Please enter Password at least 1 digit 1 capital and small letter and 1 special character. \n        </mat-error>\n      </mat-form-field> -->\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Password</mat-label>\n        <input matInput formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" placeholder=\"Please enter your password\">\n        <ion-icon class=\"icon\" matSuffix [name]=\"hidePassword ? 'eye-off-outline' : 'eye-outline'\" (click)=\"togglePasswordVisibility()\"></ion-icon>\n        <mat-error *ngIf=\"forgotForm.get('password').hasError('required') && forgotForm.get('password').touched\">\n          Password is required\n        </mat-error>\n        <mat-error *ngIf=\"forgotForm.get('password').hasError('minlength') && forgotForm.get('password').touched\">\n          Password must be at least 6 characters long\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Confirm Password</mat-label>\n        <input matInput formControlName=\"confirmPassword\" [type]=\"hideConfirmPassword ? 'password' : 'text'\" placeholder=\"Confirm your password\">\n        <ion-icon class=\"icon\" matSuffix [name]=\"hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'\" (click)=\"toggleConfirmPasswordVisibility()\"></ion-icon>\n        <mat-error *ngIf=\"forgotForm.get('confirmPassword').hasError('required') && forgotForm.get('confirmPassword').touched\">\n          Confirm Password is required\n        </mat-error>\n        <mat-error *ngIf=\"forgotForm.hasError('passwordMismatch') && forgotForm.get('confirmPassword').touched\">\n          Passwords do not match\n        </mat-error>\n      </mat-form-field>\n\n       <!-- <p class=\"p1\" (click)=\"showForm('forgot')\">Forgot Password?</p>  -->\n      <div style=\"position:relative; z-index:11\">\n        <ion-button (click)=\"forgotPassword()\" class=\"btn\" color=\"primary\" >Submit</ion-button>\n      </div>\n      <p> <span class=\"span\" (click)=\"showForm('login')\"> Back to login</span></p>\n    </div>\n    </form>  \n  </div>\n</div>\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_popuplogsign_popuplogsign_page_ts.js.map