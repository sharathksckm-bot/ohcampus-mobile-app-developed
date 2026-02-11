(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_specialiclg_specialiclg_module_ts"],{

/***/ 70490:
/*!*****************************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialiclgPageRoutingModule": () => (/* binding */ SpecialiclgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _specialiclg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specialiclg.page */ 23852);




const routes = [
    {
        path: '',
        component: _specialiclg_page__WEBPACK_IMPORTED_MODULE_0__.SpecialiclgPage
    }
];
let SpecialiclgPageRoutingModule = class SpecialiclgPageRoutingModule {
};
SpecialiclgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecialiclgPageRoutingModule);



/***/ }),

/***/ 77785:
/*!*********************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialiclgPageModule": () => (/* binding */ SpecialiclgPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _specialiclg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specialiclg-routing.module */ 70490);
/* harmony import */ var _specialiclg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialiclg.page */ 23852);







let SpecialiclgPageModule = class SpecialiclgPageModule {
};
SpecialiclgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _specialiclg_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecialiclgPageRoutingModule
        ],
        declarations: [_specialiclg_page__WEBPACK_IMPORTED_MODULE_1__.SpecialiclgPage]
    })
], SpecialiclgPageModule);



/***/ }),

/***/ 23852:
/*!*******************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialiclgPage": () => (/* binding */ SpecialiclgPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_specialiclg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./specialiclg.page.html */ 3900);
/* harmony import */ var _specialiclg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specialiclg.page.scss */ 14613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);








let SpecialiclgPage = class SpecialiclgPage {
  constructor(service, activatedRoute, router, loadingController) {
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loadingController = loadingController;
    this.trnkclgArry = [];
  }

  ngOnInit() {
    this.statename = JSON.parse(localStorage.getItem('state'));
    const storedCourseId = localStorage.getItem('selectedCourseId');
    const storedCourseName = localStorage.getItem('selectedCourseName');

    if (storedCourseId && storedCourseName) {
      this.courseId = storedCourseId;
      this.coursename = storedCourseName;
      console.log('Retrieved courseId:', this.courseId);
      console.log('Retrieved courseName:', this.coursename);
    }

    this.trespeciali();
  }

  trespeciali() {
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

      let selctpara = {
        "subcat_Id": _this.courseId,
        "statename": _this.statename
      };

      _this.service.getTrendingSpecilizationBySubCatId(selctpara).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          console.log(res);
          _this.trespecialiArry = res.data;
          yield loader.dismiss(); // Dismiss the loader once data is received
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error('Error fetching specializations:', err);
          yield loader.dismiss(); // Dismiss the loader in case of an error
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  specourselist(keyword) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      localStorage.setItem('selectedKeyword', keyword);
      const loader = yield _this2.loadingController.create({
        message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
      <span style="margin-top: 10px;">Loading course list...</span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      yield loader.present(); // Show the loader

      _this2.router.navigate(['/specourselist', keyword]).then( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loader.dismiss(); // Dismiss the loader after navigation
      })).catch( /*#__PURE__*/(0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield loader.dismiss(); // Dismiss the loader in case of an error
      }));

      console.log(keyword);
    })();
  }

};

SpecialiclgPage.ctorParameters = () => [{
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

SpecialiclgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-specialiclg',
  template: _raw_loader_specialiclg_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_specialiclg_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SpecialiclgPage);


/***/ }),

/***/ 14613:
/*!*********************************************************!*\
  !*** ./src/app/pages/specialiclg/specialiclg.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* Add your CSS styles for college list here */\n.college-list {\n  font-family: Arial, sans-serif;\n}\n.college-list h2 {\n  color: #333;\n}\n.college-list ul {\n  list-style-type: none;\n  padding: 0;\n}\n.college-list li {\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background-color: #f9f9f9;\n  border-radius: 5px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\n}\n.college-list li:hover {\n  background-color: #eaeaea;\n}\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  margin: 0px 10px 10px;\n  border: 1px solid #b6ddff;\n}\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n.trending h4 {\n  margin-top: 0;\n}\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.spllist {\n  margin-bottom: 12px;\n  border-bottom: 1px solid gray;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWxpY2xnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQUNBO0VBQ0ksOEJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUNKO0FBRUU7RUFDRSx5QkFBQTtBQUNKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFOO0FBYUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFYSjtBQWFFO0VBQ0UsYUFBQTtBQVhKO0FBZUU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBWko7QUFhSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBWFI7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBWEYiLCJmaWxlIjoic3BlY2lhbGljbGcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIHN0eWxlcyBmb3IgY29sbGVnZSBsaXN0IGhlcmUgKi9cclxuLmNvbGxlZ2UtbGlzdCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xsZWdlLWxpc3QgaDIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xsZWdlLWxpc3QgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbGxlZ2UtbGlzdCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbGxlZ2UtbGlzdCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLnRyZW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjlmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZkZGZmO1xyXG4gIFxyXG4gIC5zZXRsaXN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAvLyAubGlzdGNsYXNze1xyXG4gIC8vICAgcGFkZGluZzogMTNweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgLy8gICBjb2xvcjogIzQ4NDQ0MDtcclxuICAvLyAgIHdpZHRoOiAxNTFweDtcclxuICAvLyAgIGhlaWdodDogNDdweDtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gICBtYXJnaW46IDA7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAjMWQ2ZWZmO1xyXG4gIC8vIH1cclxuICBpb24taXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgfVxyXG4gIC5ub3RpZmljYXRpb257XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW9uLWJhZGdle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTUlO1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDRweDtcclxuICAgIH1cclxufVxyXG4uc3BsbGlzdHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59Il19 */");

/***/ }),

/***/ 3900:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/specialiclg/specialiclg.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  \n<div class=\"trending\">\n<div>\n  <h4>Courses Under {{coursename}}</h4>\n  <p> Select a course and know the colleges offering that course.</p>\n\n  <div class=\"spllist\" *ngFor=\"let item of trespecialiArry\">\n    <ion-label>\n      <h3 (click)=\"specourselist(item.name)\">{{item.name}}</h3>\n    </ion-label>\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n  </div>\n</div>\n</div>\n\n</ion-content>\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specialiclg_specialiclg_module_ts.js.map