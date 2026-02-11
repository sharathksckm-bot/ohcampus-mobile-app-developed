(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_preferedcourses_preferedcourses_module_ts"],{

/***/ 12468:
/*!*************************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferedcoursesPageRoutingModule": () => (/* binding */ PreferedcoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _preferedcourses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferedcourses.page */ 66587);




const routes = [
    {
        path: '',
        component: _preferedcourses_page__WEBPACK_IMPORTED_MODULE_0__.PreferedcoursesPage
    }
];
let PreferedcoursesPageRoutingModule = class PreferedcoursesPageRoutingModule {
};
PreferedcoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreferedcoursesPageRoutingModule);



/***/ }),

/***/ 70885:
/*!*****************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferedcoursesPageModule": () => (/* binding */ PreferedcoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _preferedcourses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferedcourses-routing.module */ 12468);
/* harmony import */ var _preferedcourses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferedcourses.page */ 66587);







let PreferedcoursesPageModule = class PreferedcoursesPageModule {
};
PreferedcoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _preferedcourses_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreferedcoursesPageRoutingModule
        ],
        declarations: [_preferedcourses_page__WEBPACK_IMPORTED_MODULE_1__.PreferedcoursesPage]
    })
], PreferedcoursesPageModule);



/***/ }),

/***/ 66587:
/*!***************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferedcoursesPage": () => (/* binding */ PreferedcoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_preferedcourses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./preferedcourses.page.html */ 84836);
/* harmony import */ var _preferedcourses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferedcourses.page.scss */ 72224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);



/* eslint-disable @typescript-eslint/naming-convention */




let PreferedcoursesPage = class PreferedcoursesPage {
    constructor(router, service, googlePlus) {
        this.router = router;
        this.service = service;
        this.googlePlus = googlePlus;
        this.totalCourses = [];
    }
    ngOnInit() {
        this.loadUserData();
        this.getCategory();
    }
    loadUserData() {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            this.userData = JSON.parse(storedUserData);
        }
    }
    // logout_gmail() {
    //   this.googlePlus.logout()
    //     .then(res => {
    //       console.log(res);
    //       localStorage.removeItem('userData');
    //       this.router.navigateByUrl('/welcomepage');
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    getCategory() {
        this.Category = '';
        // this.image ='';
        // console.log(this.Category);
        this.service.getCategory().subscribe(res => {
            this.Category = res.response_data;
            console.log(this.Category);
            // console.log(this.Category);
        });
    }
    getLevels(id) {
        this.router.navigate(['/chooselevel', +id]);
    }
};
PreferedcoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus }
];
PreferedcoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-preferedcourses',
        template: _raw_loader_preferedcourses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_preferedcourses_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PreferedcoursesPage);



/***/ }),

/***/ 72224:
/*!*****************************************************************!*\
  !*** ./src/app/pages/preferedcourses/preferedcourses.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".prefCourse ion-item {\n  --min-height: 48px;\n  /* reduce row height */\n}\n.prefCourse ion-item ion-avatar img {\n  width: 28px;\n  height: 28px;\n}\n.prefCourse ion-item ion-label h6 {\n  font-size: 18px;\n  /* category name smaller */\n  font-weight: 500;\n}\n.prefCourse ion-item ion-label p {\n  font-size: 9px;\n  /* total courses smaller */\n  color: gray;\n}\n.prefCourse ion-item ion-icon {\n  font-size: 14px;\n  /* right arrow smaller */\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlcmVkY291cnNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NFO0VBQ0Usa0JBQUE7RUFBc0Isc0JBQUE7QUE3QzFCO0FBK0NJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE3Q047QUFrRE07RUFDRSxlQUFBO0VBQXFCLDBCQUFBO0VBQ3JCLGdCQUFBO0FBL0NSO0FBa0RNO0VBQ0UsY0FBQTtFQUFxQiwwQkFBQTtFQUNyQixXQUFBO0FBL0NSO0FBbURJO0VBQ0UsZUFBQTtFQUFzQix3QkFBQTtFQUN0QixXQUFBO0FBaEROIiwiZmlsZSI6InByZWZlcmVkY291cnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIC5wcmVmQ291cnNle1xyXG4vLyAgICAgLy8gbWFyZ2luLXRvcDogMXJlbTtcclxuLy8gICAgIGlvbi1sYWJlbHtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogMjA7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICBzcGFue1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICAgICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5pbWdkaXZ7XHJcbi8vICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZGVlYmY2O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgIGlvbi1pdGVte1xyXG5cclxuLy8gICAgICAgICBoMiB7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMTJweDsgICAvLyBjYXRlZ29yeSBuYW1lIHNpemVcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwIHtcclxuLy8gICAgICAgZm9udC1zaXplOiAxMHB4OyAgIC8vIHRvdGFsIGNvdXJzZXMgc2l6ZVxyXG4vLyAgICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgIH1cclxuLy8gICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4vLyAgICAgICAgfVxyXG4vLyB9XHJcbi8vIC5ibHVle1xyXG4vLyAgICAgY29sb3I6Ymx1ZTtcclxuLy8gfVxyXG5cclxuLy8gLmN1c3RvbS1pY29uIHtcclxuLy8gICAgIHdpZHRoOiA3cHg7XHJcbi8vICAgICBoZWlnaHQ6IDVweDtcclxuLy8gICAgIG1hcmdpbjogLTFweCAycHg7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4vLyAgIH1cclxuXHJcbi5wcmVmQ291cnNlIHtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1taW4taGVpZ2h0OiA0OHB4OyAgIC8qIHJlZHVjZSByb3cgaGVpZ2h0ICovXHJcblxyXG4gICAgaW9uLWF2YXRhciBpbWcge1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcblxyXG4gICAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyAgICAgLyogY2F0ZWdvcnkgbmFtZSBzbWFsbGVyICovXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7ICAgICAgLyogdG90YWwgY291cnNlcyBzbWFsbGVyICovXHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgICAgICAvKiByaWdodCBhcnJvdyBzbWFsbGVyICovXHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 84836:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preferedcourses/preferedcourses.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n         \n        </ion-col>\n        <ion-col size=\"8\" class=\"selfcenter text-center\">\n          <h6 class=\"m0\">What is your preferred course?</h6>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen=\"true\" style=\"--background: aliceblue;\">\n<div class=\"prefCourse\" *ngFor=\"let item of Category; let i = index\">\n\n  <ion-item class=\"course-item\" (click)=\"getLevels(item.id)\">\n\n    <!-- Left Icon -->\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/images/{{item.catname?.trim()}}.png\">\n    </ion-avatar>\n\n    <!-- Middle Text -->\n    <ion-label>\n      <h6>{{ item.catname }}</h6>\n      <p>{{ item.Total_Courses }}</p>\n    </ion-label>\n\n    <!-- Right Arrow -->\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n\n  </ion-item>\n\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_preferedcourses_preferedcourses_module_ts.js.map