(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);










let LoginPage = class LoginPage {
  constructor(formBuilder, router, http, service, loadingController, toastController) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.http = http;
    this.service = service;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.showPassword = false;
    this.deviceid = localStorage.getItem('device_token');
    console.log('Device ID:', localStorage.getItem('device_token'));
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]]
    }); // this.deviceid=
    // localStorage.getItem('device_token');
    // console.log('Device ID:',  localStorage.getItem('device_token'));
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  } // async presentLoading() {
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


  login() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.regForm.invalid) {
        _this.regForm.markAllAsTouched();

        return;
      }

      let selectpara = {
        username: _this.regForm.get('email').value,
        password: _this.regForm.get('password').value,
        deviceid: localStorage.getItem('device_token'),
        platform: "android"
      };
      const loading = yield _this.presentLoading();

      _this.service.loginuser(selectpara).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          yield loading.dismiss();

          if (res.response_status === 'Success') {
            console.log('Login successful:', res);
            localStorage.setItem('user', JSON.stringify(res.response_message.user));
            localStorage.setItem('simpleauthToken', res.response_message.token); // Store token if provided

            yield _this.presentToast('Login successfully!', 'success');

            _this.router.navigateByUrl('/preferedcourses');
          } else {
            console.error('Unexpected response:', res);
            yield _this.presentToast('Your email or password is invalid', 'danger');
          }

          _this.resetForm();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (error) {
          yield loading.dismiss();
          console.error('Error occurred during login:', error);
          yield _this.presentToast('Please enter valid email & password.', 'danger');

          _this.resetForm();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  presentLoading() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
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
      yield loading.present();
      return loading;
    })();
  }

  presentToast(message, color) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const toast = yield _this3.toastController.create({
        message,
        duration: 2000,
        color,
        cssClass: 'custom-toast' // Apply custom CSS class

      });
      toast.present();
    })();
  }

  resetForm() {
    this.regForm.reset();
    this.showPassword = false;
  } // eslint-disable-next-line @typescript-eslint/member-ordering


  get errorControl() {
    return this.regForm.controls;
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-login',
  template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], LoginPage);


/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -15px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.span {\n  color: #0081dc;\n}\n\n.p1 {\n  padding-right: 20px;\n  color: #0081dc;\n  margin-top: 0px !important;\n  text-align: right;\n  margin-bottom: 12px;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n  margin: 0 10px;\n}\n\n.setimg2 {\n  position: fixed;\n  bottom: 0%;\n  left: 0%;\n  z-index: -1;\n}\n\n.form_login {\n  z-index: 111 !important;\n  background-color: #ffffff !important;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.custom-loading {\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.custom-spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.custom-spinner-icon {\n  width: 50px;\n  height: 50px;\n}\n\n.custom-toast {\n  --background: #3880ff;\n  --color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0ksbURBQUE7QUFHSjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7QUFNSjs7QUFKRTs7RUFFRSxhQUFBO0FBT0o7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0csZUFBQTtFQUNELFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7RUFFQSxvQ0FBQTtBQUdGOztBQUFBO0VBQ0Usc0NBQUE7QUFHRjs7QUFEQTtFQUEwQyxXQUFBO0FBSzFDOztBQUhBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtBQU1KOztBQURBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUlGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taW5wdXR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5lcnJvcntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxyXG59IFxyXG4ubG9naW57XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1haW4tZGl2e1xyXG4gICAgYmFja2dyb3VuZDogKCcvLi4vLi4vc3JjL2Fzc2V0cy9pY29uL3NpbXBsZS1pbWcucG5nJyk7XHJcbn1cclxuLnNldGltZ3tcclxuICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfSBcclxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4uaWNvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBjb2xvcjpyZ2IoOTksIDkyLCA5Mik7XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuLy8gICBoZWlnaHQ6IDQ0cHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZkYyAhaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbjogMHB4IDE2cHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuLy8gICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyB9XHJcbi5zcGFue1xyXG4gIGNvbG9yOiAjMDA4MWRjO1xyXG59XHJcbi5wMXtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA4MWRjO1xyXG4gIG1hcmdpbi10b3A6IDBweCFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4ubWF0ZmllbGR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53LTc1e1xyXG4gIHdpZHRoOjkwJTtcclxuICBtYXJnaW46IDAgMTBweDsgXHJcbn1cclxuLnNldGltZzJ7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uZm9ybV9sb2dpbntcclxuICB6LWluZGV4OiAxMTEhaW1wb3J0YW50O1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTMzLjMzMzMzJTtcclxufVxyXG5cclxuXHJcblxyXG4uY3VzdG9tLWxvYWRpbmcge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyAvLyBPcHRpb25hbDogYmx1ciBlZmZlY3QgZm9yIHRoZSBiYWNrZHJvcFxyXG59XHJcblxyXG4uY3VzdG9tLXNwaW5uZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmN1c3RvbS1zcGlubmVyLWljb24ge1xyXG4gIHdpZHRoOiA1MHB4OyAvLyBDdXN0b21pemUgdGhlIGxvZ28gc2l6ZVxyXG4gIGhlaWdodDogNTBweDsgLy8gQ3VzdG9taXplIHRoZSBsb2dvIHNpemVcclxufVxyXG5cclxuLmN1c3RvbS10b2FzdCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmOyAvLyBDdXN0b21pemUgdG9hc3QgYmFja2dyb3VuZCBjb2xvclxyXG4gIC0tY29sb3I6ICNmZmY7IC8vIEN1c3RvbWl6ZSB0b2FzdCB0ZXh0IGNvbG9yXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- \n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-div\">\n    <form [formGroup]=\"regForm\" class=\"form_login\" >\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"login\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n\n      </div>\n      \n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>email</mat-label>\n          <input matInput type=\"email\" id=\"email\" formControlName=\"email\" >\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n            Email address is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" type=\"{{ showPassword ? 'text' : 'password' }}\"[(ngModel)]=\"password\" required>\n          <ion-icon class=\"icon\" matSuffix name=\"eye-off-outline\" name=\"{{ showPassword ? 'eye-off' : 'eye' }}\"\n          (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n            Please enter Password at least 1 digit 1 capital and small letter and 1 special character. \n          </mat-error>\n        </mat-form-field>\n\n        <p class=\"p1\" routerLink=\"/forgot\">Forgot Password?</p>\n        <div style=\"position:relative; z-index:11\">\n          <button (click)=\"login()\" class=\"btn\" mat-raised-button color=\"primary\" >Login</button>\n        </div>\n        <p>Create an account -<span class=\"span\" routerLink=\"/signup\"> Signup Now</span></p>\n      </div>\n    </form>\n  </div>\n</ion-content> -->\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-div\">\n    <form [formGroup]=\"regForm\" class=\"form_login\" (ngSubmit)=\"login()\">\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"login\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n      </div>\n      \n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput type=\"email\" id=\"email\" formControlName=\"email\">\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n            Email address is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" [type]=\"showPassword ? 'text' : 'password'\" required>\n          <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off' : 'eye'\" (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n            Please enter a password with at least one digit, one uppercase letter, one lowercase letter, and one special character.\n          </mat-error>\n        </mat-form-field>\n\n        <p class=\"p1\" routerLink=\"/forgot\">Forgot Password?</p>\n        <div style=\"position:relative; z-index:11\">\n          <ion-button type=\"submit\" class=\"btn\" mat-raised-button color=\"primary\">Login</ion-button>\n        </div>\n        <p>Create an account - <span class=\"span\" routerLink=\"/signup\">Signup Now</span></p>\n      </div>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map