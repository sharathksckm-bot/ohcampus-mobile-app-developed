(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_enquiry_enquiry_module_ts"],{

/***/ 12563:
/*!*********************************************************!*\
  !*** ./src/app/pages/enquiry/enquiry-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryPageRoutingModule": () => (/* binding */ EnquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _enquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enquiry.page */ 18977);




const routes = [
    {
        path: '',
        component: _enquiry_page__WEBPACK_IMPORTED_MODULE_0__.EnquiryPage
    }
];
let EnquiryPageRoutingModule = class EnquiryPageRoutingModule {
};
EnquiryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnquiryPageRoutingModule);



/***/ }),

/***/ 63664:
/*!*************************************************!*\
  !*** ./src/app/pages/enquiry/enquiry.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryPageModule": () => (/* binding */ EnquiryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _enquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enquiry-routing.module */ 12563);
/* harmony import */ var _enquiry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enquiry.page */ 18977);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 65939);












let EnquiryPageModule = class EnquiryPageModule {
};
EnquiryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _enquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnquiryPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule
        ],
        declarations: [_enquiry_page__WEBPACK_IMPORTED_MODULE_1__.EnquiryPage]
    })
], EnquiryPageModule);



/***/ }),

/***/ 18977:
/*!***********************************************!*\
  !*** ./src/app/pages/enquiry/enquiry.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryPage": () => (/* binding */ EnquiryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_enquiry_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./enquiry.page.html */ 34915);
/* harmony import */ var _enquiry_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enquiry.page.scss */ 74270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);







let EnquiryPage = class EnquiryPage {
    constructor(router, service, activatedRoute, formBuilder) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.hidePassword = true;
        this.hideConfirmPassword = true;
    }
    ngOnInit() {
        this.enquiryForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z ]+$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, this.validateMobile]],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    checkValidInputData(event) {
        const pattern = /^[A-Za-z]+$/; // Regular expression for alphabets only
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault(); // Prevent character from being entered
        }
    }
    checkValidInputDatas(event) {
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
    numberOnly(event) {
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
};
EnquiryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
EnquiryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-enquiry',
        template: _raw_loader_enquiry_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_enquiry_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnquiryPage);



/***/ }),

/***/ 74270:
/*!*************************************************!*\
  !*** ./src/app/pages/enquiry/enquiry.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".w-100 {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n::ng-deep .mat-form-field-outline {\n  background: #fff;\n}\n\n.main-div {\n  width: 100%;\n}\n\n.w-75 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVucXVpcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsV0FBQTtBQUxGOztBQVFBO0VBQ0Usc0NBQUE7QUFMRjs7QUFPQTtFQUEwQyxXQUFBO0FBSDFDOztBQUtBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFLQTtFQUNBLFdBQUE7QUFGQTs7QUFNQTtFQUNFLFdBQUE7QUFIRiIsImZpbGUiOiJlbnF1aXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBlbnF1aXJ5Rm9ybSAgY3NzXHJcblxyXG5cclxuICBcclxuICBcclxuLnctMTAwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTMzLjMzMzMzJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1kaXYge1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi53LTc1e1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 34915:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/enquiry/enquiry.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon name=\"arrow-back\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:aliceblue\">\n  <div class=\"main-div ion-padding\">\n    <form [formGroup]=\"enquiryForm\" (ngSubmit)=\"submitForm()\">\n      <div class=\"matfield\">\n        <h5 class=\"mt0\">Enquiry Form</h5>\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Name</mat-label>\n          <input matInput formControlName=\"name\" placeholder=\"Enter your name\">\n          <ion-icon class=\"icon\" matSuffix name=\"person-outline\"></ion-icon>\n        \n          <mat-error *ngIf=\"enquiryForm.get('name').hasError('required') \">Name is required</mat-error>\n          <mat-error *ngIf=\"enquiryForm.get('name').hasError('pattern')\">only alphabets are allowed is required</mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" placeholder=\"Enter your email address\">\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"enquiryForm.get('email').hasError('required') && enquiryForm.get('email').touched\">Email is required</mat-error>\n          <mat-error *ngIf=\"enquiryForm.get('email').hasError('email') && enquiryForm.get('email').touched\">Please enter a valid email address</mat-error>\n        </mat-form-field>\n        <div class=\"matfield\">\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Mobile</mat-label>\n            <input matInput formControlName=\"mobile\" placeholder=\"Enter your mobile number\" (keypress)=\"numberOnly($event)\" maxlength=\"10\" minlength=\"10\">\n            <ion-icon class=\"icon\" matSuffix name=\"call-outline\"></ion-icon>\n          \n          </mat-form-field>\n        </div>\n        <div class=\"matfield\">\n          <mat-form-field class=\"w-75\" appearance=\"outline\">\n            <mat-label>Course</mat-label>\n            <input matInput formControlName=\"course\" placeholder=\"Enter the course\">\n            <ion-icon class=\"icon\" matSuffix name=\"school-outline\"></ion-icon>\n\n          \n          </mat-form-field>\n        </div>\n\n      </div>\n      <ion-button expand=\"block\" color=\"primary\" type=\"submit\">Submit</ion-button>\n\n    </form>\n  </div>   \n</ion-content>\n\n\n\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_enquiry_enquiry_module_ts.js.map