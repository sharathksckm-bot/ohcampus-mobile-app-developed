(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_forgot_forgot_module_ts"],{

/***/ 36493:
/*!*******************************************************!*\
  !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageRoutingModule": () => (/* binding */ ForgotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 85792);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ 93647:
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-routing.module */ 36493);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 85792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);











let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage]
    })
], ForgotPageModule);



/***/ }),

/***/ 85792:
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./forgot.page.html */ 19381);
/* harmony import */ var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.page.scss */ 77380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);









let ForgotPage = class ForgotPage {
  constructor(formBuilder, router, service, alertController) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.service = service;
    this.alertController = alertController;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
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

  submitForm() {
    var _this = this;

    this.markFormGroupTouched(this.forgotForm);

    if (this.forgotForm.valid) {
      const email = this.forgotForm.get('email')?.value;
      const newPass = this.forgotForm.get('password')?.value;
      const confirmPass = this.forgotForm.get('confirmPassword')?.value;
      this.service.forgotpass(this.forgotForm.value).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          if (res.response_code === "200") {
            // Show success alert and navigate on OK
            const alert = yield _this.alertController.create({
              header: 'Success',
              message: res.response_message,
              buttons: [{
                text: 'OK',
                handler: () => {
                  _this.router.navigateByUrl('/login');
                }
              }]
            });
            yield alert.present();
          } else {
            // Handle other response codes if necessary
            alert('Unexpected response code');
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), err => {
        console.error('Form submission failed', err);
        alert('Form submission failed');
      });
    }
  }

  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

};

ForgotPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-forgot',
  template: _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ForgotPage);


/***/ }),

/***/ 77380:
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.forgot {\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n::ng-deep .mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #007fdc;\n  width: -webkit-fill-available;\n  height: 44px;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-left: 40%;\n  color: gray;\n  margin-top: -13px;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVDO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0ksbURBQUE7QUFFSjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsaUJBQUE7QUFLSjs7QUFIRTs7RUFFRSxhQUFBO0FBTUo7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQVFGOztBQU5BO0VBQ0cseUJBQUE7RUFDRCw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7QUFVRjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDRSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtBQWFGOztBQVBBO0VBQ0Usc0NBQUE7QUFVRjs7QUFSQTtFQUEwQyxXQUFBO0FBWTFDOztBQVZBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtBQWFKIiwiZmlsZSI6ImZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4gLmVycm9ye1xyXG4gIGNvbG9yOnJlZDtcclxuICBsaXN0LXN0eWxlOiBub25lOyAgXHJcbn0gXHJcbi5mb3Jnb3R7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4OyAgIFxyXG59XHJcblxyXG4ubWFpbi1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcclxufVxyXG4uc2V0aW1ne1xyXG4gIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkICsgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfSBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcclxufVxyXG4uYnRue1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmZGM7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1hcmdpbjogMHB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwYW57XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuLnAxe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzcHhcclxuICB9XHJcbi5tYXRmaWVsZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnctNzV7XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTMzLjMzMzMzJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 19381:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n  <div class=\"main-div\">\n    <form [formGroup]=\"forgotForm\" (ngSubmit)=\"submitForm()\">\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"forgot\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n      </div>\n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" placeholder=\"Enter your email address\">\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"forgotForm.get('email').hasError('required') && forgotForm.get('email').touched\">\n            Email is required\n          </mat-error>\n          <mat-error *ngIf=\"forgotForm.get('email').hasError('email') && forgotForm.get('email').touched\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" placeholder=\"Please enter your password\">\n          <ion-icon class=\"icon\" matSuffix [name]=\"hidePassword ? 'eye-off-outline' : 'eye-outline'\" (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"forgotForm.get('password').hasError('required') && forgotForm.get('password').touched\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"forgotForm.get('password').hasError('minlength') && forgotForm.get('password').touched\">\n            Password must be at least 6 characters long\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Confirm Password</mat-label>\n          <input matInput formControlName=\"confirmPassword\" [type]=\"hideConfirmPassword ? 'password' : 'text'\" placeholder=\"Confirm your password\">\n          <ion-icon class=\"icon\" matSuffix [name]=\"hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'\" (click)=\"toggleConfirmPasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"forgotForm.get('confirmPassword').hasError('required') && forgotForm.get('confirmPassword').touched\">\n            Confirm Password is required\n          </mat-error>\n          <mat-error *ngIf=\"forgotForm.hasError('passwordMismatch') && forgotForm.get('confirmPassword').touched\">\n            Passwords do not match\n          </mat-error>\n        </mat-form-field>\n\n        <ion-button type=\"submit\" class=\"btn\" color=\"primary\">Submit</ion-button>\n        <p>Already have an account - <span class=\"span\" routerLink=\"/login\">Sign in</span></p>\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot_forgot_module_ts.js.map