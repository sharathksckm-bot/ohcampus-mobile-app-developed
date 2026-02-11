(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_whoweare_whoweare_module_ts"],{

/***/ 68971:
/*!***********************************************************!*\
  !*** ./src/app/pages/whoweare/whoweare-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhowearePageRoutingModule": () => (/* binding */ WhowearePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _whoweare_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whoweare.page */ 6604);




const routes = [
    {
        path: '',
        component: _whoweare_page__WEBPACK_IMPORTED_MODULE_0__.WhowearePage
    }
];
let WhowearePageRoutingModule = class WhowearePageRoutingModule {
};
WhowearePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WhowearePageRoutingModule);



/***/ }),

/***/ 51777:
/*!***************************************************!*\
  !*** ./src/app/pages/whoweare/whoweare.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhowearePageModule": () => (/* binding */ WhowearePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _whoweare_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whoweare-routing.module */ 68971);
/* harmony import */ var _whoweare_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whoweare.page */ 6604);







let WhowearePageModule = class WhowearePageModule {
};
WhowearePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _whoweare_routing_module__WEBPACK_IMPORTED_MODULE_0__.WhowearePageRoutingModule
        ],
        declarations: [_whoweare_page__WEBPACK_IMPORTED_MODULE_1__.WhowearePage]
    })
], WhowearePageModule);



/***/ }),

/***/ 6604:
/*!*************************************************!*\
  !*** ./src/app/pages/whoweare/whoweare.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhowearePage": () => (/* binding */ WhowearePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_whoweare_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./whoweare.page.html */ 49250);
/* harmony import */ var _whoweare_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whoweare.page.scss */ 3057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let WhowearePage = class WhowearePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    notification() {
        this.router.navigateByUrl('/notification');
    }
};
WhowearePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WhowearePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-whoweare',
        template: _raw_loader_whoweare_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_whoweare_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WhowearePage);



/***/ }),

/***/ 3057:
/*!***************************************************!*\
  !*** ./src/app/pages/whoweare/whoweare.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card ion-card-header {\n  padding: 0;\n}\nion-card .cardtitset {\n  text-align: center;\n  background-color: #c4dafa !important;\n  padding: 10px;\n  margin-bottom: 10px;\n  color: black !important;\n}\n.tital {\n  color: black;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndob3dlYXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7QUFBUjtBQUtBO0VBQ0ksa0JBQUE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSE47QUFRQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBTEoiLCJmaWxlIjoid2hvd2VhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4uY2FyZHRpdHNldHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTYsIDIxOCwgMjUwLCAxKSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi50aXRhbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSJdfQ== */");

/***/ }),

/***/ 49250:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/whoweare/whoweare.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"> <ion-icon name=\"chevron-back-outline\" style=\"margin-top: 5px;\" routerLink=\"/tabs/tabs/tab1\"></ion-icon></ion-col>\n\n        <ion-col size=\"8\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <!-- <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          \n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\" class=\"primary-color\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"cardtitset\">Who We Are</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <h5 class=\"tital\"> <a href=\"https://www.ohcampus.com\" target=\"_blank\">OhCampus.com</a>: India's First Integrated Campus Media and Admission Portal</h5>\n      <br>\n      <p>\n        <a href=\"https://www.ohcampus.com\" target=\"_blank\">OhCampus.com</a> is a pioneering platform in India that serves as both a campus media outlet and an admission portal. We act as an information bridge between aspiring students and colleges, providing a unique, integrated approach that helps scholars manage their careers and achieve their goals.\n      </p>\n      <br>\n      <p>\n        Our platform offers comprehensive information on engineering, medical, management, pharmacy, arts, and science colleges. We also feature top courses such as animation and gaming, finance and accounting, law, vocational training, fashion, hospitality and tourism, and design—helping students explore their interests and make informed decisions.\n      </p>\n      <br>\n      <p>\n        In addition to course details, subjects, fees, and infrastructure, we provide valuable resources such as links to scholarships and loans. Our team of expert admission counselors is available to guide you through the admission process, offering personalized support to help you choose the right college and chart the next steps in your career.\n      </p>\n      <br>\n      <p>\n        If you’re unsure about your options, <a href=\"https://www.ohcampus.com\" target=\"_blank\">OhCampus.com</a> offers a comparison tool to evaluate colleges based on rankings, placements, facilities, and reviews. Our website also hosts a wide range of articles featuring the latest educational news, college festivals, and more.\n      </p>\n      <br>\n      <p>\n        Students can filter colleges and courses based on rankings from top educational sources. Currently, we focus on six states—Karnataka, Kerala, Tamil Nadu, Maharashtra, Telangana, and Andhra Pradesh—with additional expertise in PG admissions in the medical sector in Rajasthan.\n      </p>\n      <br>\n      <p>\n        <a href=\"https://www.ohcampus.com\" target=\"_blank\">OhCampus.com</a> simplifies the process of finding the right academic path, offering filters for top careers, exam sections, and a quick inquiry form that ensures prompt responses from our counselors.\n      </p>\n      <br>\n      <p>\n        For assistance, feel free to contact us at \n        <a href=\"tel:8884560456\" style=\"color: blue;\">8884560456</a> or \n        <a href=\"tel:9482243432\" style=\"color: blue;\">9482243432</a>. \n        Remember, your future shines bright when you take the right steps. Best of luck!\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_whoweare_whoweare_module_ts.js.map