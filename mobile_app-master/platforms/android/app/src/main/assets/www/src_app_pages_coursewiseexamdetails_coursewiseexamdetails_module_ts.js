(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_coursewiseexamdetails_coursewiseexamdetails_module_ts"],{

/***/ 16846:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/coursewiseexamdetails/coursewiseexamdetails-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamdetailsPageRoutingModule": () => (/* binding */ CoursewiseexamdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _coursewiseexamdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseexamdetails.page */ 96961);




const routes = [
    {
        path: '',
        component: _coursewiseexamdetails_page__WEBPACK_IMPORTED_MODULE_0__.CoursewiseexamdetailsPage
    }
];
let CoursewiseexamdetailsPageRoutingModule = class CoursewiseexamdetailsPageRoutingModule {
};
CoursewiseexamdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursewiseexamdetailsPageRoutingModule);



/***/ }),

/***/ 64572:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/coursewiseexamdetails/coursewiseexamdetails.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamdetailsPageModule": () => (/* binding */ CoursewiseexamdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _coursewiseexamdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseexamdetails-routing.module */ 16846);
/* harmony import */ var _coursewiseexamdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseexamdetails.page */ 96961);







let CoursewiseexamdetailsPageModule = class CoursewiseexamdetailsPageModule {
};
CoursewiseexamdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coursewiseexamdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursewiseexamdetailsPageRoutingModule
        ],
        declarations: [_coursewiseexamdetails_page__WEBPACK_IMPORTED_MODULE_1__.CoursewiseexamdetailsPage]
    })
], CoursewiseexamdetailsPageModule);



/***/ }),

/***/ 96961:
/*!***************************************************************************!*\
  !*** ./src/app/pages/coursewiseexamdetails/coursewiseexamdetails.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamdetailsPage": () => (/* binding */ CoursewiseexamdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coursewiseexamdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coursewiseexamdetails.page.html */ 46420);
/* harmony import */ var _coursewiseexamdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseexamdetails.page.scss */ 33040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let CoursewiseexamdetailsPage = class CoursewiseexamdetailsPage {
    constructor(service, activatedRoute, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.selectedSegment = 'Criteria';
        this.showDetails = false;
    }
    ngOnInit() {
        this.examId = this.activatedRoute.snapshot.paramMap.get('id'); // Ensure 'id' matches the param name in the URL
        this.getexamdetails();
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    getexamdetails() {
        this.service.examdetailsbycorce(this.examId).subscribe(res => {
            console.log(res);
            this.coursesArray = res.examdetails;
            this.details = res.data[0].description;
            this.criteria = res.data[0].criteria;
            this.pattern = res.data[0].pattern;
            this.process = res.data[0].process;
        });
    }
};
CoursewiseexamdetailsPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CoursewiseexamdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-coursewiseexamdetails',
        template: _raw_loader_coursewiseexamdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coursewiseexamdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoursewiseexamdetailsPage);



/***/ }),

/***/ 33040:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/coursewiseexamdetails/coursewiseexamdetails.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".setrow {\n  border: 1px solid gray;\n  margin: 10px;\n  border-radius: 5px;\n}\n\n.seg-btnns {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 16px 5px;\n  border: 1px solid #f1f1f1;\n}\n\n.imageset {\n  margin: auto;\n  width: 100%;\n  display: block;\n}\n\n.f30 {\n  text-align: end;\n}\n\n.maindiv h5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n\n.maindiv p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.mx-10 {\n  margin: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXdpc2VleGFtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUtJO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUZOOztBQUlJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFGTjs7QUFLRTtFQUNFLHlCQUFBO0FBRkoiLCJmaWxlIjoiY291cnNld2lzZWV4YW1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2V0cm93e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNlZy1idG5uc3tcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDE2cHggNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIC8vIG1pbi13aWR0aDogMTc5cHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuaW1hZ2VzZXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuZjMwe1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuICBcclxuICAubWFpbmRpdntcclxuICAgIGg1e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teC0xMHtcclxuICAgIG1hcmdpbjogMCAxMHB4IWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ 46420:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coursewiseexamdetails/coursewiseexamdetails.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/coursewiseexam\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\" >\n    <div *ngFor=\" let item of coursesArray\">\n    \n    <div>\n      <!-- <img class=\"imageset\" src=\"../../../assets/clg_img/cinema.png\"> -->\n      <img class=\"imageset\" [src]=\"item.image\">\n    </div>\n    <div>\n      <h5>Exam Details:</h5>\n      <p [innerHTML]=\"item.description\" class=\"mx-10\"></p>\n    </div>\n \n  \n  <h5>Other Details:</h5>\n  <div class=\"mx-10\">\n  <ion-segment [scrollable]=\"true\" value=\"Criteria\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button class=\"seg-btnns\" value=\"Criteria\">\n\n      <ion-label>Criteria</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button class=\"seg-btnns\" value=\"Process\">\n      <ion-label>Process</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"seg-btnns\" value=\"Pattern\">\n      <ion-label>Pattern</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"selectedSegment === 'Criteria'\">\n    <p [innerHTML]=\"item.criteria\"></p>\n  </div>\n  <div *ngIf=\"selectedSegment === 'Process'\">\n    <p [innerHTML]=\"item.process\"></p>    </div>\n  <div *ngIf=\"selectedSegment === 'Pattern'\">\n    <p [innerHTML]=\"item.pattern\" style=\"overflow-x: scroll;\"></p>\n  </div>\n\n</div>\n\n</div>\n</div>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coursewiseexamdetails_coursewiseexamdetails_module_ts.js.map