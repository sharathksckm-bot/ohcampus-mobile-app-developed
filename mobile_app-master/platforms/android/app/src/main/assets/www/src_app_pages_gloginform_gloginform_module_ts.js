(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_gloginform_gloginform_module_ts"],{

/***/ 99515:
/*!***************************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GloginformPageRoutingModule": () => (/* binding */ GloginformPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gloginform_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gloginform.page */ 6813);




const routes = [
    {
        path: '',
        component: _gloginform_page__WEBPACK_IMPORTED_MODULE_0__.GloginformPage
    }
];
let GloginformPageRoutingModule = class GloginformPageRoutingModule {
};
GloginformPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GloginformPageRoutingModule);



/***/ }),

/***/ 98021:
/*!*******************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GloginformPageModule": () => (/* binding */ GloginformPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _gloginform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gloginform-routing.module */ 99515);
/* harmony import */ var _gloginform_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gloginform.page */ 6813);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 27817);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);















let GloginformPageModule = class GloginformPageModule {
};
GloginformPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gloginform_routing_module__WEBPACK_IMPORTED_MODULE_0__.GloginformPageRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule
        ],
        declarations: [_gloginform_page__WEBPACK_IMPORTED_MODULE_1__.GloginformPage]
    })
], GloginformPageModule);



/***/ }),

/***/ 6813:
/*!*****************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GloginformPage": () => (/* binding */ GloginformPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gloginform_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./gloginform.page.html */ 72909);
/* harmony import */ var _gloginform_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gloginform.page.scss */ 32035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);












let GloginformPage = class GloginformPage {
  constructor(platform, googlePlus, formBuilder, router, http, service, loadingController, toastController) {
    this.platform = platform;
    this.googlePlus = googlePlus;
    this.formBuilder = formBuilder;
    this.router = router;
    this.http = http;
    this.service = service;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.showPassword = false;
    localStorage.getItem('device_token');
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(15)]]
    });
    localStorage.getItem('device_token');
  }

  go() {
    this.router.navigateByUrl('/welcomepage');
  }

  signup() {
    this.router.navigateByUrl('/gmailform');
  }

  get errorControl() {
    return this.regForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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

  presentToast(message, color) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const toast = yield _this2.toastController.create({
        message: message,
        duration: 2000,
        color: color
      });
      toast.present();
    })();
  }

  login() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.username = this.regForm.get('email').value;
      // this.password = this.regForm.get('password').value;
      let selectpara = {
        username: _this3.regForm.get('email').value,
        password: _this3.regForm.get('password').value,
        deviceid: localStorage.getItem('device_token'),
        platform: "android"
      };
      const loading = yield _this3.presentLoading();

      _this3.service.loginuser(selectpara).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          yield loading.dismiss();

          if (res.response_status === 'Success') {
            console.log(res.response_status);
            console.log(res.response_message);
            console.log('Login successful:', res); // localStorage.setItem('token',res.response_message.token);

            localStorage.setItem('user', JSON.stringify(res.response_message.user)); // Display success message

            _this3.presentToast('Login successfully!', 'success'); // Navigate to preferred courses page


            _this3.router.navigateByUrl('/preferedcourses'); // Reset the form


            _this3.regForm.reset();
          } else {
            console.error('Unexpected response:', res);

            _this3.presentToast('Your email or password is invalid', 'danger'); // Reset the form


            _this3.regForm.reset();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (error) {
          yield loading.dismiss();
          console.error('Error occurred during login:', error); // this.presentToast('An error occurred during the login process. Please try again.', 'danger');
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  googleSignIn() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4.platform.is('android')) {
        const loading = yield _this4.loadingController.create({
          message: 'Please wait...',
          duration: 5000 // Set a timeout for 5 seconds

        });
        yield loading.present();

        try {
          const fingerprint = yield _this4.googlePlus.getSigningCertificateFingerprint(); // alert(fingerprint);
          // console.log(fingerprint);

          const result = yield _this4.googlePlus.login({});
          _this4.userData = result; // alert(this.userData);
          // console.log(this.userData);

          const selectPara = {
            fname: _this4.userData.displayName,
            device_id: localStorage.getItem('device_token'),
            platform: 'android',
            login_with: 'gmail',
            email: _this4.userData.email
          }; // Save login data to local storage

          localStorage.setItem('userData', JSON.stringify(_this4.userData)); // Navigate to the preferred courses page

          _this4.router.navigateByUrl('/preferedcourses').then(() => {
            loading.dismiss(); // Dismiss the loading indicator after navigation

            window.location.reload(); // Reload the page after navigation
          });
        } catch (err) {
          loading.dismiss(); // Dismiss the loading indicator on error

          console.error('Google login error:', err); // If logout fails, catch and log the error, but don't do anything else

          try {
            yield _this4.googlePlus.logout();
          } catch (logoutError) {// console.error('Google logout error:', logoutError);
          }
        }
      }
    })();
  }

};

GloginformPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}, {
  type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}];

GloginformPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-gloginform',
  template: _raw_loader_gloginform_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_gloginform_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], GloginformPage);


/***/ }),

/***/ 32035:
/*!*******************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".googldiv {\n  display: flex;\n  border: 1px solid gray;\n  border-radius: 50px;\n  margin: auto;\n  width: 80%;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n}\n\n.googlelogo {\n  width: 24px;\n  position: relative;\n  right: 15px;\n}\n\n.loginh5 {\n  color: #1388de;\n  text-align: center;\n  margin: 0px;\n}\n\n.or-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000;\n  /* Change the color as needed */\n  font-size: 16px;\n  /* Adjust the font size as needed */\n  margin: 20px 35px;\n}\n\n.or-divider::before,\n.or-divider::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid lightgray;\n  /* Change the line color as needed */\n  margin: 0 10px;\n}\n\n.mx-16 {\n  margin: 0 16px;\n}\n\n.seticon {\n  text-align: center;\n}\n\n.setlets {\n  margin: 28px;\n}\n\n.setlets h5 {\n  font-weight: 500;\n  font-size: 23px;\n}\n\n.closeicon {\n  font-size: 26px;\n}\n\n.gmailform {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\nion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -15px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: 30%;\n  height: 37px;\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-right: 20px;\n  color: #0081dc;\n  margin-top: 0px !important;\n  text-align: right;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n  margin: 0 10px;\n}\n\n.setimg2 {\n  position: fixed;\n  bottom: 0%;\n  left: 0%;\n  z-index: -1;\n}\n\n.form_login {\n  z-index: 111 !important;\n  background-color: #ffffff !important;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.iconsize {\n  position: relative;\n  top: 6px;\n  height: 44px;\n  left: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2dpbmZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSwrQkFBQTtFQUNiLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsaUJBQUE7QUFHRjs7QUFBQTs7RUFFRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQW9DLG9DQUFBO0VBQ3BDLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7QUFLRjs7QUFGQTtFQUVFLGtCQUFBO0FBSUY7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBREk7RUFDSSxnQkFBQTtFQUNKLGVBQUE7QUFHSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0U7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdFO0VBQ0ksbURBQUE7QUFBTjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDSSxnQkFBQTtBQUVOOztBQUFJO0VBQ0UsaUJBQUE7QUFHTjs7QUFESTs7RUFFRSxhQUFBO0FBSU47O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBTUo7O0FBSkU7RUFDRSxXQUFBO0FBT0o7O0FBTEU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkU7RUFDRSxrQkFBQTtBQVNKOztBQVBFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSRTtFQUNHLGVBQUE7RUFDRCxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFXSjs7QUFSRTtFQUNFLHVCQUFBO0VBRUEsb0NBQUE7QUFVSjs7QUFQRTtFQUNFLHNDQUFBO0FBVUo7O0FBUkU7RUFBMEMsV0FBQTtBQVk1Qzs7QUFWRTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7QUFhTjs7QUFWRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0FBWUoiLCJmaWxlIjoiZ2xvZ2luZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZ2xkaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuXHJcbi5nb29nbGVsb2dve1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTVweDtcclxufVxyXG5cclxuLmxvZ2luaDV7XHJcbiAgY29sb3I6ICMxMzg4ZGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ub3ItZGl2aWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDsgLyogQ2hhbmdlIHRoZSBjb2xvciBhcyBuZWVkZWQgKi9cclxuICBmb250LXNpemU6IDE2cHg7IC8qIEFkanVzdCB0aGUgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xyXG4gIG1hcmdpbjogMjBweCAzNXB4O1xyXG59XHJcblxyXG4ub3ItZGl2aWRlcjo6YmVmb3JlLFxyXG4ub3ItZGl2aWRlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgLyogQ2hhbmdlIHRoZSBsaW5lIGNvbG9yIGFzIG5lZWRlZCAqL1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5teC0xNntcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG4gIFxyXG4uc2V0aWNvbntcclxuICAgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4gIC5zZXRsZXRze1xyXG4gICAgbWFyZ2luOiAyOHB4O1xyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuY2xvc2VpY29ue1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuZ21haWxmb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIC5lcnJvcntcclxuICAgICAgY29sb3I6cmVkO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lOyBcclxuICB9IFxyXG4gIC5sb2dpbntcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm1haW4tZGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcclxuICB9XHJcbiAgLnNldGltZ3tcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH0gXHJcbiAgICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICAgIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIC5pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmZGMgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc3BhbntcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuICAucDF7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHghaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5tYXRmaWVsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnctNzV7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46IDAgMTBweDsgXHJcbiAgfVxyXG4gIC5zZXRpbWcye1xyXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAuZm9ybV9sb2dpbntcclxuICAgIHotaW5kZXg6IDExMSFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG4gIH1cclxuICBcclxuICAuaWNvbnNpemV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgXHJcbiAgICBsZWZ0OiAxNHB4O1xyXG59XHJcbiAgXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 72909:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gloginform/gloginform.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n \n\n   <ion-row class=\"ion-align-items-center ion-padding-top\">\n    <ion-col size=\"2\" class=\"text-center\">\n      <ion-icon class=\"closeicon\" name=\"close-outline\" (click)=\"go()\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"7\">\n      <div class=\"seticon\">\n        <!-- <img class=\"iconsize\" src=\"../assets/icon/logo_15.png\"> -->\n        <img class=\"iconsize\" src=\"../../../assets/icon/logo_15.png\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\">\n      <h5 class=\"loginh5\" (click)=\"signup()\">Signup</h5>\n    </ion-col>\n   </ion-row>\n\n<div class=\"setlets\">\n  <h5>Let's get you started!</h5>\n  <p>Sign up to discover insights on colleges, exams, courses, and more, tailored just for you</p>\n</div>\n\n  <div class=\"googldiv\" *ngIf=\"!isGoogleLogin\" (click)=\"googleSignIn()\">\n    <img class=\"googlelogo\" src=\"../../../assets/icon/search.png\">Login with Google</div> \n\n    <p class=\"or-divider\">OR</p>\n\n\n    <form [formGroup]=\"regForm\" class=\"form_login\" >\n      \n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>email</mat-label>\n          <input matInput type=\"email\" id=\"email\" formControlName=\"email\" >\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n            Email address is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" type=\"{{ showPassword ? 'text' : 'password' }}\"[(ngModel)]=\"password\" required>\n          <ion-icon class=\"icon\" matSuffix name=\"eye-off-outline\" name=\"{{ showPassword ? 'eye-off' : 'eye' }}\"\n          (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n            Please enter Password at least 1 digit 1 capital and small letter and 1 special character. \n          </mat-error>\n        </mat-form-field>\n\n        <p class=\"p1\" routerLink=\"/forgot\">Forgot Password?</p>\n        <div class=\"mt1rem\">\n          <ion-button expand=\"block\" (click)=\"login()\" class=\"dsa mx-16\" color=\"primary\" >Login</ion-button>\n        </div>\n      \n      </div>\n     \n    </form>\n\n    <div *ngIf=\"isGoogleLogin\">\n      <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\"><b>{{user.displayName}}</b></ion-card-title>\n     \n    </ion-card-header>\n    \n    <ion-card-content>\n      <ion-img [src]=\"user.photoURL\" style=\"border-radius: 1px;\"></ion-img>\n      <ion-item>\n        <ion-label>email:</ion-label>\n        <span>{{user.email}}</span>\n      </ion-item>\n    </ion-card-content>\n    </ion-card>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gloginform_gloginform_module_ts.js.map