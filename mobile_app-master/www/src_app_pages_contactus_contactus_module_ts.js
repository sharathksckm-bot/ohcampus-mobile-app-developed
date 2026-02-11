(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_contactus_contactus_module_ts"],{

/***/ 26203:
/*!*************************************************************!*\
  !*** ./src/app/pages/contactus/contactus-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageRoutingModule": () => (/* binding */ ContactusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus.page */ 16986);




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_0__.ContactusPage
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactusPageRoutingModule);



/***/ }),

/***/ 21550:
/*!*****************************************************!*\
  !*** ./src/app/pages/contactus/contactus.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPageModule": () => (/* binding */ ContactusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus-routing.module */ 26203);
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.page */ 16986);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);














let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactusPageRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_1__.ContactusPage]
    })
], ContactusPageModule);



/***/ }),

/***/ 16986:
/*!***************************************************!*\
  !*** ./src/app/pages/contactus/contactus.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactusPage": () => (/* binding */ ContactusPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contactus_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./contactus.page.html */ 51873);
/* harmony import */ var _contactus_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactus.page.scss */ 1810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);









let ContactusPage = class ContactusPage {
  constructor(fb, service, alertController, modalController, router) {
    this.fb = fb;
    this.service = service;
    this.alertController = alertController;
    this.modalController = modalController;
    this.router = router;
  }

  ngOnInit() {
    // Initializing the form with validation rules
    this.contactUsForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z ]*$')]],
      contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{10}$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] // Required message field

    });
  }

  checkValidInputDat(event, field) {
    if (field === 'name') {
      const pattern = /^[a-zA-Z \'-]+$/; // Only allows letters, spaces, and specific characters

      if (!pattern.test(event.target.value)) {
        this.contactUsForm.get(field)?.setValue(event.target.value.replace(/[^a-zA-Z \'-]/g, ''));
      }
    } else if (field === 'contactNumber') {
      this.checkValidInputData(event, field);
    }
  }

  checkValidInputData(event, controlName) {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, ''); // Remove non-digit characters

    this.contactUsForm.get(controlName)?.setValue(numericValue);

    if (numericValue.length > 10) {
      this.contactUsForm.get(controlName)?.setValue(numericValue.substring(0, 10));
    }
  }

  contactusApplication() {
    var _this = this;

    if (this.contactUsForm.invalid) {
      this.contactUsForm.markAllAsTouched();
      return;
    }

    if (this.contactUsForm.valid) {
      this.service.contactmail(this.contactUsForm.value.name, this.contactUsForm.value.contactNumber, this.contactUsForm.value.email, this.contactUsForm.value.subject, this.contactUsForm.value.message).subscribe({
        next: function () {
          var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
            yield _this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');

            _this.resetForm();
          });

          return function next(_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
            yield _this.showAlert('Error', 'There was an issue submitting your details. Please try again.');
          });

          return function error(_x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    }
  }

  showAlert(header, message) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this2.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  resetForm() {
    this.contactUsForm.reset();
    this.contactUsNgForm.resetForm();
  }

  notification() {
    this.router.navigateByUrl('/notification');
  }

};

ContactusPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

ContactusPage.propDecorators = {
  contactUsNgForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['contactUsNgForm']
  }]
};
ContactusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-contactus',
  template: _raw_loader_contactus_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_contactus_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ContactusPage);


/***/ }),

/***/ 1810:
/*!*****************************************************!*\
  !*** ./src/app/pages/contactus/contactus.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".setfbox {\n  border-radius: 10px;\n  border: 1px solid #b0cfe7;\n  padding: 12px;\n  background: aliceblue;\n  margin: 10px;\n  line-height: 1.4;\n}\n\n.setform {\n  margin: 10px;\n}\n\n.setform .w-75 {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.contactitle {\n  padding-left: 16px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.seticon {\n  color: #98dc09;\n  top: 3px;\n  position: relative;\n  font-size: 16px;\n}\n\n.setaddress {\n  font-weight: 500;\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBRUo7O0FBR0E7RUFDSSxzQ0FBQTtBQUFKOztBQUVFO0VBQTBDLFdBQUE7QUFFNUM7O0FBQUU7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0FBR047O0FBREU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFNSiIsImZpbGUiOiJjb250YWN0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldGZib3h7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjBjZmU3O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcbi5zZXRmb3Jte1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgXHJcbi53LTc1e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG4gIH1cclxuICAuY29udGFjdGl0bGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuc2V0aWNvbntcclxuICAgIGNvbG9yOiAjOThkYzA5O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5zZXRhZGRyZXNze1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ 51873:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"> <ion-icon name=\"chevron-back-outline\" style=\"margin-top: 5px;\" routerLink=\"/tabs/tabs/tab1\"></ion-icon></ion-col>\n\n        <ion-col size=\"8\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n         \n          <!-- <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div style=\"padding: 10px;background: aliceblue;margin-bottom: 16px;\">\n<ion-icon class=\"seticon\" name=\"call\"></ion-icon>\n<span class=\"contactitle\">Contact Us</span></div>\n\n  <div class=\"setfbox\">\n  <div class=\"setaddress\">Address Details :</div>\n  <p class=\"text-lg text-secondary mt-6\">\n      2nd Floor, SMG Plaza,<br>\n      Opp. Sangeetha Mobiles,<br>\n      M G Road, Chickmagalur, Pincode– 577101,<br>\n      Karnataka, India<br>\n      Enquiry : enquiry@ohcampus.com<br>\n      Telephone :  <a href=\"tel: +91 - 7019924014\" style=\"color: blue;\"> +91 - 7019924014</a><br>\n      Helpline No : <a href=\"tel: +91 - 8884560456\" style=\"color: blue;\"> +91 - 8884560456</a>\n  </p>\n \n</div>\n<div>\n</div>\n\n\n\n\n\n\n\n\n\n<div style=\"background: white;\">\n  <form [formGroup]=\"contactUsForm\" #contactUsNgForm=\"ngForm\" novalidate>\n    <div class=\"setform\">\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Enter your name\" formControlName=\"name\" (input)=\"checkValidInputDat($event, 'name')\" type=\"text\" >\n        <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n        <mat-error *ngIf=\"contactUsForm.get('name').hasError('required') && contactUsForm.get('name').touched\">\n          Name is required\n        </mat-error>\n        <mat-error *ngIf=\"contactUsForm.get('name').hasError('pattern') && contactUsForm.get('name').touched\">\n          Only alphabets are allowed\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Contact No</mat-label>\n        <input matInput placeholder=\"Enter your Contact Number\" formControlName=\"contactNumber\" (input)=\"checkValidInputDat($event, 'contactNumber')\" type=\"text\" >\n        <ion-icon class=\"icon\" matSuffix name=\"call-outline\"></ion-icon>\n        <mat-error *ngIf=\"contactUsForm.get('contactNumber').hasError('required') && contactUsForm.get('contactNumber').touched\">\n          Contact number is required\n        </mat-error>\n        <mat-error *ngIf=\"contactUsForm.get('contactNumber').hasError('pattern') && contactUsForm.get('contactNumber').touched\">\n          Only 10-digit numbers are allowed\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Email ID</mat-label>\n        <input matInput placeholder=\"Enter your email address\" formControlName=\"email\" type=\"email\" required>\n        <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n        <mat-error *ngIf=\"contactUsForm.get('email').hasError('required') && contactUsForm.get('email').touched\">\n          Email address is required\n        </mat-error>\n        <mat-error *ngIf=\"contactUsForm.get('email').hasError('email') && contactUsForm.get('email').touched\">\n          Please enter a valid email address\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Subject</mat-label>\n        <input matInput placeholder=\"Enter your email subject\" formControlName=\"subject\" required>\n        <ion-icon class=\"icon\" matSuffix name=\"book-outline\"></ion-icon>\n        <mat-error *ngIf=\"contactUsForm.get('subject').hasError('required') && contactUsForm.get('subject').touched\">\n          Subject is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Message</mat-label>\n        <input matInput placeholder=\"Enter your email message\" formControlName=\"message\" required>\n        <ion-icon class=\"icon\" matSuffix name=\"chatbox-outline\"></ion-icon>\n        <mat-error *ngIf=\"contactUsForm.get('message').hasError('required') && contactUsForm.get('message').touched\">\n          Message is required\n        </mat-error>\n      </mat-form-field>\n\n      <ion-button expand=\"block\" type=\"submit\" shape=\"round\" (click)=\"contactusApplication()\">Submit</ion-button>\n    </div>\n  </form>\n</div>\n\n\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contactus_contactus_module_ts.js.map