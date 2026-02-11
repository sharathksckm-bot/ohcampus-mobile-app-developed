(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_applyform_applyform_module_ts"],{

/***/ 10023:
/*!*************************************************************!*\
  !*** ./src/app/pages/applyform/applyform-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyformPageRoutingModule": () => (/* binding */ ApplyformPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _applyform_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyform.page */ 7466);




const routes = [
    {
        path: '',
        component: _applyform_page__WEBPACK_IMPORTED_MODULE_0__.ApplyformPage
    }
];
let ApplyformPageRoutingModule = class ApplyformPageRoutingModule {
};
ApplyformPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplyformPageRoutingModule);



/***/ }),

/***/ 30337:
/*!*****************************************************!*\
  !*** ./src/app/pages/applyform/applyform.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyformPageModule": () => (/* binding */ ApplyformPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _applyform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyform-routing.module */ 10023);
/* harmony import */ var _applyform_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyform.page */ 7466);














let ApplyformPageModule = class ApplyformPageModule {
};
ApplyformPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _applyform_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplyformPageRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        ],
        declarations: [_applyform_page__WEBPACK_IMPORTED_MODULE_1__.ApplyformPage]
    })
], ApplyformPageModule);



/***/ }),

/***/ 7466:
/*!***************************************************!*\
  !*** ./src/app/pages/applyform/applyform.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyformPage": () => (/* binding */ ApplyformPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_applyform_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./applyform.page.html */ 27521);
/* harmony import */ var _applyform_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyform.page.scss */ 45787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ApplyformPage = class ApplyformPage {
    constructor() { }
    ngOnInit() {
    }
};
ApplyformPage.ctorParameters = () => [];
ApplyformPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-applyform',
        template: _raw_loader_applyform_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_applyform_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApplyformPage);



/***/ }),

/***/ 45787:
/*!*****************************************************!*\
  !*** ./src/app/pages/applyform/applyform.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #9E9E9E !important;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.matfield {\n  text-align: center;\n  margin: 12px;\n  border: 1px solid gray;\n  padding: 10px 4px;\n  border-radius: 12px;\n  background: white;\n}\n\n.btn {\n  max-width: 100%;\n  background-color: #007fdc !important;\n  color: #fff;\n  margin: 0 12px 10px;\n  font-size: 16px;\n}\n\n.w-75 {\n  width: 92%;\n}\n\n.iconclose {\n  font-size: 24px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5Zm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0FBR0o7O0FBREE7O0VBRUksYUFBQTtBQUlKOztBQUZBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUZBO0VBQ0ksb0JBQUE7QUFLSjs7QUFIQTtFQUNJLHNDQUFBO0FBTUo7O0FBSkE7RUFBMEMsV0FBQTtBQVExQzs7QUFOQTtFQUNNLHlDQUFBO0VBQ0EsaUJBQUE7QUFTTjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxVQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQWFKIiwiZmlsZSI6ImFwcGx5Zm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzlFOUU5RSAhaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0gXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG4gIFxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcbi5tYXRmaWVsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjoxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5idG57XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwIDEycHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbi53LTc1e1xyXG4gICAgd2lkdGg6OTIlO1xyXG59XHJcbi5pY29uY2xvc2V7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 27521:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applyform/applyform.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"matfield\">\n    <ion-row>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <h5 style=\"margin:10px;\">Apply Now</h5>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon class=\"iconclose\" name=\"close-outline\" ></ion-icon>\n      </ion-col>\n    </ion-row>\n    \n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Student Name</mat-label>\n        <input matInput placeholder=\"Enter your name\" type=\"text\" >\n        <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Enter your email\" type=\"text\">\n        <ion-icon name=\"mail-outline\" class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Mobile Number</mat-label>\n        <input matInput placeholder=\"Enter your mobile number\">\n        <ion-icon name=\"call-outline\" class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Course Category</mat-label>\n        <mat-select>\n          <mat-option> category.name </mat-option>\n          <mat-option> category.name </mat-option>\n          <mat-option> category.name </mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Course</mat-label>\n        <mat-select>\n          <mat-option> course.name </mat-option>\n          <mat-option> course.name </mat-option>\n          <mat-option> course.name </mat-option>\n          <mat-option> course.name </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>College</mat-label>\n        <input matInput>\n      </mat-form-field>\n      \n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Entrance Exam</mat-label>\n        <mat-select>\n          <mat-option> exam.title  </mat-option>\n          <mat-option> exam.title  </mat-option>\n        </mat-select>\n      </mat-form-field>\n      \n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Expected/Secured Rank</mat-label>\n        <input matInput placeholder=\"Enter your rank\" type=\"number\">\n        <ion-icon class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n    \n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Expected/Secured Score</mat-label>\n        <input matInput placeholder=\"Enter your score\" type=\"number\">\n        <ion-icon class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n      \n      <button mat-raised-button class=\"btn ion-margin-bottom\" type=\"submit\">Submit</button>\n \n\n  </div>\n</ion-content>  \n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_applyform_applyform_module_ts.js.map