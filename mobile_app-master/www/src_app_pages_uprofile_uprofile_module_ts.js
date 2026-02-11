(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_uprofile_uprofile_module_ts"],{

/***/ 59617:
/*!***********************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UprofilePageRoutingModule": () => (/* binding */ UprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _uprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uprofile.page */ 79987);




const routes = [
    {
        path: '',
        component: _uprofile_page__WEBPACK_IMPORTED_MODULE_0__.UprofilePage
    }
];
let UprofilePageRoutingModule = class UprofilePageRoutingModule {
};
UprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UprofilePageRoutingModule);



/***/ }),

/***/ 70283:
/*!***************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UprofilePageModule": () => (/* binding */ UprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _uprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uprofile-routing.module */ 59617);
/* harmony import */ var _uprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uprofile.page */ 79987);







let UprofilePageModule = class UprofilePageModule {
};
UprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _uprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UprofilePageRoutingModule
        ],
        declarations: [_uprofile_page__WEBPACK_IMPORTED_MODULE_1__.UprofilePage]
    })
], UprofilePageModule);



/***/ }),

/***/ 79987:
/*!*************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UprofilePage": () => (/* binding */ UprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_uprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./uprofile.page.html */ 66951);
/* harmony import */ var _uprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uprofile.page.scss */ 14953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let UprofilePage = class UprofilePage {
    constructor() { }
    ngOnInit() {
    }
    logout() {
    }
};
UprofilePage.ctorParameters = () => [];
UprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-uprofile',
        template: _raw_loader_uprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_uprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UprofilePage);



/***/ }),

/***/ 14953:
/*!***************************************************!*\
  !*** ./src/app/pages/uprofile/uprofile.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin: 16px;\n  border-radius: 8px;\n}\n\nion-avatar {\n  --size: 80px;\n}\n\nion-item {\n  --padding-start: 16px;\n  --inner-padding-end: 16px;\n}\n\nion-footer {\n  padding: 16px;\n  background-color: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoidXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICAtLXNpemU6IDgwcHg7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICB9Il19 */");

/***/ }),

/***/ 66951:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uprofile/uprofile.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>User Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- User Profile Section -->\n  <ion-card>\n    <ion-card-header>\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/avatar.png\" alt=\"User Avatar\">\n      </ion-avatar>\n      <ion-card-title>User Name</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n        <ion-label>user@example.com</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n        <ion-label>(123) 456-7890</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Logout Button -->\n  <ion-footer>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"logout()\">\n      <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n      Logout\n    </ion-button>\n  </ion-footer>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_uprofile_uprofile_module_ts.js.map