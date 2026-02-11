(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_coursewiseexam_coursewiseexam_module_ts"],{

/***/ 88210:
/*!***********************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamPageRoutingModule": () => (/* binding */ CoursewiseexamPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _coursewiseexam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseexam.page */ 69675);




const routes = [
    {
        path: '',
        component: _coursewiseexam_page__WEBPACK_IMPORTED_MODULE_0__.CoursewiseexamPage
    }
];
let CoursewiseexamPageRoutingModule = class CoursewiseexamPageRoutingModule {
};
CoursewiseexamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursewiseexamPageRoutingModule);



/***/ }),

/***/ 92727:
/*!***************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamPageModule": () => (/* binding */ CoursewiseexamPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _coursewiseexam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseexam-routing.module */ 88210);
/* harmony import */ var _coursewiseexam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseexam.page */ 69675);







let CoursewiseexamPageModule = class CoursewiseexamPageModule {
};
CoursewiseexamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coursewiseexam_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursewiseexamPageRoutingModule
        ],
        declarations: [_coursewiseexam_page__WEBPACK_IMPORTED_MODULE_1__.CoursewiseexamPage]
    })
], CoursewiseexamPageModule);



/***/ }),

/***/ 69675:
/*!*************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamPage": () => (/* binding */ CoursewiseexamPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coursewiseexam_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./coursewiseexam.page.html */ 19799);
/* harmony import */ var _coursewiseexam_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coursewiseexam.page.scss */ 18460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);









let CoursewiseexamPage = class CoursewiseexamPage {
  constructor(service, activatedRoute, router, loadingController) {
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loadingController = loadingController;
    this.selectedSegment = 'Criteria';
    this.itemsToShow = 10; // Initial number of items to display

    this.increment = 50; // Number of items to add when clicking "View More"

    this.showDetails = false;
    this.nodata = false;
    this.statename = JSON.parse(localStorage.getItem('state'));
  }

  ngOnInit() {
    const coursedata = localStorage.getItem('courses');
    this.coursesArray = JSON.parse(coursedata);
    this.coursename = this.coursesArray[0]?.name;
    this.courseId = this.coursesArray[0]?.id;
    this.courseCatId = JSON.parse(localStorage.getItem('catID'));
    this.academic_category = localStorage.getItem("academic_category");
    this.getexamlist();
  }

  viewMore() {
    this.itemsToShow += this.increment;
  }

  onViewDetails() {
    this.showDetails = true;
  }

  hideDetails() {
    this.showDetails = false;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  getexamlist() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loader = yield _this.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loader.present(); // Show the loader

      _this.service.getexams(_this.courseCatId, _this.statename, _this.academic_category).subscribe(
      /*#__PURE__*/
      // this.service.examlistbycategory(this.courseCatId, this.courseId,this.statename).subscribe(
      function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          if (res.response_code == 200) {
            _this.coursesArray = res.examslist;
            console.log(_this.coursesArray);
            _this.nodata = false;
            yield loader.dismiss();
          }

          if (res.response_code == 400) {
            _this.nodata = true;
            yield loader.dismiss();
          } // Dismiss the loader once data is received

        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error('Error fetching exam list:', err);
          yield loader.dismiss(); // Dismiss the loader in case of an error
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  exmdetail(id) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.router.navigate(['/coursewiseexamdetails', id]);
    })();
  }

};

CoursewiseexamPage.ctorParameters = () => [{
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

CoursewiseexamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-coursewiseexam',
  template: _raw_loader_coursewiseexam_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_coursewiseexam_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], CoursewiseexamPage);


/***/ }),

/***/ 18460:
/*!***************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".setrow {\n  border: 1px solid lightgray;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.seg-btnns {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 16px 5px;\n  border: 1px solid #f1f1f1;\n}\n\n.imageset {\n  height: 120px;\n  margin-left: 11px;\n}\n\n.f30 {\n  text-align: end;\n}\n\n.pset {\n  font-size: 15px;\n  width: 100px;\n  text-align: center;\n  background: #0081dc;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  margin: 0;\n}\n\n.imgset {\n  height: 96px;\n}\n\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n\n.vwdetails {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXdpc2VleGFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7QUFGSjs7QUFLRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFERiIsImZpbGUiOiJjb3Vyc2V3aXNlZXhhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNldHJvd3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zZWctYnRubnN7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAxNnB4IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAvLyBtaW4td2lkdGg6IDE3OXB4O1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmltYWdlc2V0e1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIH1cclxuICAuZjMwe1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnBzZXR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4MWRjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmltZ3NldHtcclxuICAgIGhlaWdodDogOTZweDtcclxuXHJcbiAgfVxyXG4gIC5ub3RpZmljYXRpb257XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW9uLWJhZGdle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTUlO1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDRweDtcclxuICAgIH1cclxufVxyXG4udndkZXRhaWxze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 19799:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coursewiseexam/coursewiseexam.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n <ion-content >\n  <div style=\"margin:10px;\">\n    <div *ngIf=\"!nodata\">\n      <h5 style=\"margin:10px 0\">{{coursename}} Exam List</h5>\n      <div *ngIf=\"!nodata\">\n      <div *ngFor=\"let item of coursesArray | slice:0:itemsToShow\">\n        <ion-row class=\"setrow\">\n          <ion-col size=\"5\">\n            <img class=\"imgset\" [src]=\"item.image\">\n          </ion-col>\n          <ion-col size=\"7\" class=\"vwdetails\">\n            <h5>{{item.title}}</h5>\n            <p class=\"pset\" (click)=\"exmdetail(item.id)\">view details</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf=\"!nodata\">\n    <div *ngIf=\"itemsToShow < coursesArray.length\" style=\"text-align:center; margin-top:20px;\">\n      <ion-button (click)=\"viewMore()\">View More</ion-button>\n    </div>\n  </div>\n  <div  *ngIf=\"nodata\">\n  <h6>No Data</h6>\n  </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coursewiseexam_coursewiseexam_module_ts.js.map