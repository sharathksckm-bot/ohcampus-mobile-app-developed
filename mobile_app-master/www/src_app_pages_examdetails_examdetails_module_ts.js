(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_examdetails_examdetails_module_ts"],{

/***/ 16113:
/*!*****************************************************************!*\
  !*** ./src/app/pages/examdetails/examdetails-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamdetailsPageRoutingModule": () => (/* binding */ ExamdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _examdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examdetails.page */ 66307);




const routes = [
    {
        path: '',
        component: _examdetails_page__WEBPACK_IMPORTED_MODULE_0__.ExamdetailsPage
    }
];
let ExamdetailsPageRoutingModule = class ExamdetailsPageRoutingModule {
};
ExamdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamdetailsPageRoutingModule);



/***/ }),

/***/ 35072:
/*!*********************************************************!*\
  !*** ./src/app/pages/examdetails/examdetails.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamdetailsPageModule": () => (/* binding */ ExamdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _examdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examdetails-routing.module */ 16113);
/* harmony import */ var _examdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examdetails.page */ 66307);







let ExamdetailsPageModule = class ExamdetailsPageModule {
};
ExamdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _examdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamdetailsPageRoutingModule
        ],
        declarations: [_examdetails_page__WEBPACK_IMPORTED_MODULE_1__.ExamdetailsPage]
    })
], ExamdetailsPageModule);



/***/ }),

/***/ 66307:
/*!*******************************************************!*\
  !*** ./src/app/pages/examdetails/examdetails.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamdetailsPage": () => (/* binding */ ExamdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_examdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./examdetails.page.html */ 17645);
/* harmony import */ var _examdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examdetails.page.scss */ 62585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);







let ExamdetailsPage = class ExamdetailsPage {
    constructor(router, service, route) {
        this.router = router;
        this.service = service;
        this.route = route;
        // selectedSegment = 'Process';
        this.selectedSegment = 'Process'; // Default segment
        this.relatedExamsarry = [];
        this.relatedExamsSub = [];
    }
    ngOnInit() {
        // this.route.queryParams.subscribe(params => {
        //   console.log('Query params:', params); // Log query parameters for debugging
        //   const segment = params['segment']; // Get 'segment' query param
        //   if (segment) {
        //     this.selectedSegment = segment; // Set the selected segment based on query param
        //   }
        //   console.log('Selected segment:', this.selectedSegment); // Log selected segment for debugging
        // });
        this.route.queryParams.subscribe(params => {
            const segment = params['segment']; // Get 'segment' query param
            if (segment) {
                this.selectedSegment = segment; // Set the selected segment based on query param
            }
        });
        this.examId = this.route.snapshot.paramMap.get('examId');
        this.examdetail();
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    examdetail() {
        // this.details = '';
        this.service.examdetails(this.examId).subscribe(res => {
            console.log(res);
            this.exmdetailarry = res.examdetails;
            this.clglogo = res.examdetails[0].image;
            this.examname = res.examdetails[0].title;
            this.examcatname = res.examdetails[0].catname;
            this.examdescription = res.examdetails[0].description;
            this.criteria = res.examdetails[0].criteria;
            this.process = res.examdetails[0].process;
            this.pattern = res.examdetails[0].pattern;
            this.relatedExamsarry = res.relatedExams;
            console.log(this.relatedExamsarry);
            this.relatedExamsarry.forEach((element, index) => {
                console.log(element.relatedExamsSub);
                this.relatedExamsSub = element.relatedExamsSub;
            });
        });
    }
};
ExamdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ExamdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-examdetails',
        template: _raw_loader_examdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_examdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamdetailsPage);



/***/ }),

/***/ 62585:
/*!*********************************************************!*\
  !*** ./src/app/pages/examdetails/examdetails.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".examdetails p {\n  margin: 10px;\n}\n.examdetails h5 {\n  padding: 10px;\n  background: aliceblue;\n}\n.excategory p {\n  margin: 0px 10px;\n}\n.excategory h6 {\n  margin: 14px 10px 6px;\n}\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n  min-width: 145px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFlBQUE7QUFEUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFNSTtFQUNJLGdCQUFBO0FBSFI7QUFLSTtFQUNJLHFCQUFBO0FBSFI7QUFNQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6ImV4YW1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtZGV0YWlsc3tcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbi5leGNhdGVnb3J5e1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgaDZ7XHJcbiAgICAgICAgbWFyZ2luOiAxNHB4IDEwcHggNnB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgbWluLXdpZHRoOiAxNDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 17645:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examdetails/examdetails.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"excategory\">\n    <ion-card class=\"m0\">\n      <img [src]=\"clglogo\">\n    </ion-card>\n    <h6>Exam Name : {{examname}}</h6>\n    <p>Exam Category : {{examcatname}}</p>\n  </div>\n<div class=\"examdetails\">\n  <!-- section1 -->\n  \n  <!-- 2 section -->\n  <div>\n<h5>Exam Detail:</h5>\n<p [innerHTML]=\"examdescription\"></p>\n  </div>\n\n\n<!-- 3rd section -->\n<div>\n  <div class=\"populartxt\">\n    <h5> Other Details </h5>\n  </div>\n\n  <div class=\"mx10\">\n   \n\n    <ion-segment [scrollable]=\"true\" [(ngModel)]=\"selectedSegment\" class=\"segmentspace-y\">\n      <ion-segment-button value=\"Process\">\n        <ion-label>Process</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Pattern\">\n        <ion-label>Pattern</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Criteria\">\n        <ion-label>Criteria</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    \n    \n    <div *ngIf=\"selectedSegment === 'Process'\">\n      <p [innerHTML]=\"process\"></p>\n    </div>\n    \n   \n    <div *ngIf=\"selectedSegment === 'Pattern'\">\n      <p [innerHTML]=\"pattern\"></p>\n    </div>\n    \n  \n    <div *ngIf=\"selectedSegment === 'Criteria'\">\n      <p [innerHTML]=\"criteria\"></p>\n    </div>\n    \n\n  </div>\n</div>\n<!-- 4th section -->\n <div  *ngIf=\"relatedExamsarry && relatedExamsarry.length > 0\">\n  <h5>Related Exams</h5>\n  <ion-slides>\n    <ion-slide *ngFor=\"let item of relatedExamsarry\">\n<div  *ngFor=\"let exam of relatedExamsSub\">\n  <ion-card>\n    <img [src]=\"exam.image\">\n  </ion-card>\n  <p>{{exam.title}}</p>\n</div>\n    </ion-slide>\n  </ion-slides>\n </div>\n\n</div>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_examdetails_examdetails_module_ts.js.map