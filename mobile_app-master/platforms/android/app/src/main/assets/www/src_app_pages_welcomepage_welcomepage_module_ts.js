(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_welcomepage_welcomepage_module_ts"],{

/***/ 71935:
/*!*****************************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomepagePageRoutingModule": () => (/* binding */ WelcomepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcomepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage.page */ 96581);




const routes = [
    {
        path: '',
        component: _welcomepage_page__WEBPACK_IMPORTED_MODULE_0__.WelcomepagePage
    }
];
let WelcomepagePageRoutingModule = class WelcomepagePageRoutingModule {
};
WelcomepagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomepagePageRoutingModule);



/***/ }),

/***/ 6141:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomepagePageModule": () => (/* binding */ WelcomepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _welcomepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage-routing.module */ 71935);
/* harmony import */ var _welcomepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomepage.page */ 96581);







//  import { AngularFireAuth } from '@angular/fire/auth';
let WelcomepagePageModule = class WelcomepagePageModule {
};
WelcomepagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcomepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomepagePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_welcomepage_page__WEBPACK_IMPORTED_MODULE_1__.WelcomepagePage]
    })
], WelcomepagePageModule);



/***/ }),

/***/ 96581:
/*!*******************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomepagePage": () => (/* binding */ WelcomepagePage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_welcomepage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./welcomepage.page.html */ 68668);
/* harmony import */ var _welcomepage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomepage.page.scss */ 93619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service.service */ 59353);










let WelcomepagePage = class WelcomepagePage {
  constructor(platform, googlePlus, router, loadingController, service, toastController) {
    this.platform = platform;
    this.googlePlus = googlePlus;
    this.router = router;
    this.loadingController = loadingController;
    this.service = service;
    this.toastController = toastController;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.loading = yield _this.loadingController.create({
        message: 'Connecting ...'
      });
    })();
  }

  go() {
    this.router.navigateByUrl('/login');
  }

  skipLogin() {
    localStorage.setItem('hasSkipped', 'true');
    this.router.navigateByUrl('/preferedcourses');
  }

  googleSignIn() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this2.platform.is('android')) {
        const loading = yield _this2.loadingController.create({
          message: `
              <div class="custom-spinner-container">
                <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
                <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
              </div>
               <span style="margin-top: 10px;"></span>`,
          spinner: null,
          translucent: true,
          cssClass: 'custom-loading' // Optional: custom CSS class for additional styling

        });

        try {
          yield loading.present(); // Show the loading spinner

          const fingerprint = yield _this2.googlePlus.getSigningCertificateFingerprint();
          console.log(fingerprint);
          const result = yield _this2.googlePlus.login({
            offline: true // Ensures account selection each time

          });
          _this2.response_data = result;
          console.log(_this2.response_data);
          const selectPara = {
            fname: _this2.response_data.displayName,
            email: _this2.response_data.email,
            device_id: localStorage.getItem('device_token'),
            platform: 'android',
            type: "loginwithgoogle",
            otp: "",
            password: "",
            mobile_no: ""
          }; // localStorage.setItem('111response_data', JSON.stringify(this.response_data));

          _this2.service.googleusercreat(selectPara).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (response) {
              console.log('User creation response:', response);

              if (response && response.response_data) {
                localStorage.setItem('response_data', JSON.stringify(response.response_data));
              }

              yield loading.dismiss(); // Dismiss loading spinner

              yield _this2.presentToast('Login successful!', 'success');

              _this2.router.navigateByUrl('/preferedcourses'); // Redirect to edit profile page

            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (error) {
              console.error('API error:', error);
              yield loading.dismiss(); // Dismiss loading spinner

              yield _this2.presentToast('Google login failed. Please try again.', 'danger');
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        } catch (err) {
          console.error('Google Login Error:', JSON.stringify(err));
          yield loading.dismiss();
          yield _this2.presentToast(`Error: ${JSON.stringify(err)}`, 'danger');

          _this2.googlePlus.logout().then(res => {
            console.log(res);
          }, err => {
            console.log(err);
          });
        }
      }
    })();
  }

  presentToast(message, color) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const toast = yield _this3.toastController.create({
        message,
        duration: 2000,
        color,
        position: 'bottom'
      });
      toast.present();
    })();
  }

};

WelcomepagePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}, {
  type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_4__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

WelcomepagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-welcomepage',
  template: _raw_loader_welcomepage_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_welcomepage_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], WelcomepagePage);


/***/ }),

/***/ 93619:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".welcomeslides h1 {\n  color: var(--ion-color-primary);\n  margin: 1rem;\n}\n\n.welcome h1 {\n  font-weight: 600;\n  margin: 3rem 0 0;\n  text-align: center;\n}\n\n.welcome p {\n  margin-top: 10px;\n  margin: 0;\n  font-size: 16px;\n  color: #424242;\n}\n\n.welcome ion-icon {\n  width: 20px;\n  height: 20px;\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n\n.welcome .red {\n  color: red;\n  fill: red;\n  background: #fff5e7;\n}\n\n.welcome .green {\n  color: #45cb45;\n  background: #e5ffc6;\n}\n\n.welcome .yellow {\n  color: #FFC107;\n  background: #fffaca;\n}\n\n.welcomeFooter {\n  text-align: center;\n  background: whitesmoke;\n  height: 38vh;\n  width: 100%;\n  padding-top: 16px;\n}\n\n.welcomeFooter p {\n  color: gray;\n  margin-bottom: 1.5rem;\n}\n\n.welcomeFooter span {\n  color: var(--ion-color-primary);\n}\n\n.welcomeFooter ion-button {\n  --border-color: #d5d5d5;\n  color: gray;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n\n.welcomeFooter ion-button ion-icon.e {\n  color: var(--ion-color-primary);\n}\n\n.welcomeFooter ion-button img {\n  width: 16px;\n  height: 16px;\n  margin-right: 8px;\n}\n\n.wel-section {\n  margin-top: 1rem;\n  font-size: 16px;\n  color: #424242;\n}\n\n.wel-section b {\n  color: #000;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px;\n}\n\n.wel-section img {\n  width: 22px;\n  height: 22px;\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBSUk7RUFJUSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxaOztBQVFJO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUFI7O0FBU0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBUFI7O0FBU0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFQUjs7QUFTSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQVBSOztBQVdBO0VBU0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFoQko7O0FBa0JJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBaEJSOztBQWtCSTtFQUNJLCtCQUFBO0FBaEJSOztBQWtCSTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFoQlI7O0FBa0JRO0VBQ0ksK0JBQUE7QUFoQlo7O0FBa0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWhCWjs7QUF1QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcEJKOztBQXFCSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBbkJSOztBQXFCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQW5CUiIsImZpbGUiOiJ3ZWxjb21lcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndlbGNvbWVzbGlkZXN7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxufVxyXG4ud2VsY29tZXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIDAgMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICBcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucmVke1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZmlsbDogcmVkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY1ZTc7XHJcbiAgICB9XHJcbiAgICAuZ3JlZW57XHJcbiAgICAgICAgY29sb3I6ICM0NWNiNDU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZmZjNjtcclxuICAgIH1cclxuICAgIC55ZWxsb3d7XHJcbiAgICAgICAgY29sb3I6ICNGRkMxMDc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmFjYTtcclxuICAgIH1cclxuXHJcbn1cclxuLndlbGNvbWVGb290ZXJ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIC8vIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE2cHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIGhlaWdodDogMzh2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBcclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q1ZDVkNTtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pY29uLmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi53ZWwtc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgYntcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 68668:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcomepage/welcomepage.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <div style=\"    margin: 0;\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 100%;\">\n    <!-- <div class=\"welcomeslides\">\n    </div> -->\n\n    <div class=\"welcome ion-padding\" style=\"text-align:center;\">\n      <img src=\"./../../../assets/icon/logo_15.png\">\n      <p>Hello</p>\n      <p>Welcome To <span style=\"color: var(--ion-color-primary);\">OhCampus.com</span></p>\n\n      <div class=\"wel-section\">\n        <ion-icon name=\"school\"></ion-icon>\n        <ion-label> <b>Explore 10,000+ Colleges & 6,000+ Courses </b>- Find the perfect college and program for you. </ion-label>\n        <div style=\"margin-top:6px\">\n          <img src=\"../../../assets/icon/notebook.png\">\n          <ion-label> <b>250+ Exams Insights</b> - Get details on entrance exams, eligibility, and tips.  </ion-label>\n        </div>\n        <div style=\"margin-top:6px\">\n          <img src=\"../../../assets/icon/speaking.png\">\n          <ion-label> <b>Student Reviews</b> - Read real student experiences and ask any questions for guidance. </ion-label>\n        </div>\n        <div style=\"margin-top:6px\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-right: 10px;\n          fill: #ad9187;\"  width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-briefcase-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5\"/>\n            <path d=\"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z\"/>\n          </svg>\n          <ion-label> <b>Personalized Admission Guidance</b> - Simplify your admission process with expert advice. </ion-label>\n        </div>\n      </div>\n      </div>\n\n    <div class=\"welcomeFooter\">\n\n      \n      <p>Sign up using</p>\n    \n       <ion-button fill=\"outline\" shape=\"round\" *ngIf=\"!isGoogleLogin\" (click)=\"googleSignIn()\" >\n        <img src=\"../../../assets/icon/search.png\">Google\n        </ion-button> \n \n\n      <ion-button fill=\"outline\"  shape=\"round\" routerLink=\"/gmailform\">\n        <ion-icon name=\"mail\" slot=\"start\" class=\"e\" ></ion-icon>Email\n      </ion-button>\n      <p>Already have an account? <span routerLink=\"/login\">Login</span></p>\n\n      <span  (click)=\"skipLogin()\">Skip and start the search</span>\n    </div>\n\n  \n  <div *ngIf=\"isGoogleLogin\">\n    <ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\"><b>{{user.displayName}}</b></ion-card-title>\n   \n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-img [src]=\"user.photoURL\" style=\"border-radius: 1px;\"></ion-img>\n    <ion-item>\n      <ion-label>email:</ion-label>\n      <span>{{user.email}}</span>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n</div>\n\n</div>\n</ion-content>\n\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcomepage_welcomepage_module_ts.js.map