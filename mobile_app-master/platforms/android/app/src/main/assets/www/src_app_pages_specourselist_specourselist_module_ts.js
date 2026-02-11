(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_specourselist_specourselist_module_ts"],{

/***/ 85493:
/*!*********************************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecourselistPageRoutingModule": () => (/* binding */ SpecourselistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _specourselist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specourselist.page */ 51991);




const routes = [
    {
        path: '',
        component: _specourselist_page__WEBPACK_IMPORTED_MODULE_0__.SpecourselistPage
    }
];
let SpecourselistPageRoutingModule = class SpecourselistPageRoutingModule {
};
SpecourselistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecourselistPageRoutingModule);



/***/ }),

/***/ 57464:
/*!*************************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecourselistPageModule": () => (/* binding */ SpecourselistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _specourselist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specourselist-routing.module */ 85493);
/* harmony import */ var _specourselist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specourselist.page */ 51991);







let SpecourselistPageModule = class SpecourselistPageModule {
};
SpecourselistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _specourselist_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecourselistPageRoutingModule
        ],
        declarations: [_specourselist_page__WEBPACK_IMPORTED_MODULE_1__.SpecourselistPage]
    })
], SpecourselistPageModule);



/***/ }),

/***/ 51991:
/*!***********************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecourselistPage": () => (/* binding */ SpecourselistPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_specourselist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./specourselist.page.html */ 55483);
/* harmony import */ var _specourselist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specourselist.page.scss */ 69254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);

// import { Component, OnInit } from '@angular/core';
// import { ServiceService } from 'src/app/service.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { LoadingController } from '@ionic/angular';


 // @Component({
//   selector: 'app-specourselist',
//   templateUrl: './specourselist.page.html',
//   styleUrls: ['./specourselist.page.scss'],
// })
// export class SpecourselistPage implements OnInit {
//   keyword: string;courseltsArry: any[];value: any;
//   search: string;searchCourseForm: any;subcategory: any;
//   activeTabId: any;courseId: string;coursename: string;
//   constructor(
//     public service: ServiceService,
//     public activatedRoute: ActivatedRoute,
//     public router: Router,
//     public loadingController: LoadingController
//   ) { }
//   ngOnInit() {
//     const storedCourseId = localStorage.getItem('selectedCourseId');
//     const storedCourseName = localStorage.getItem('selectedCourseName');
//     if (storedCourseId && storedCourseName) {
//       this.courseId = storedCourseId;
//       this.coursename = storedCourseName;
//       console.log('Retrieved courseId:', this.courseId);
//       console.log('Retrieved courseName:', this.coursename);
//     }
//     this.value = localStorage.getItem('selectedKeyword');
//     console.log('Retrieved keyword from localStorage:', this.keyword);
//     this. getcourselts();
//   }
//  getcourselts() {
//     this.subcategory = this.courseId;
//     this.service.specicourselist(this.value, this.subcategory).subscribe(res => {
//       this.courseltsArry = res.data;
//     });
//   }
//   async clglts(id) {
//     this.router.navigate(['/specoursebyclglts', id]);
// }
// }





let SpecourselistPage = class SpecourselistPage {
  constructor(service, activatedRoute, router, loadingController) {
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loadingController = loadingController;
    this.courseltsArry = []; // Initialize with an empty array

    this.isLoading = false; // Controls the loading state
  }

  ngOnInit() {
    const storedCourseId = localStorage.getItem('selectedCourseId');
    const storedCourseName = localStorage.getItem('selectedCourseName');

    if (storedCourseId && storedCourseName) {
      this.courseId = storedCourseId;
      this.coursename = storedCourseName;
      console.log('Retrieved courseId:', this.courseId);
      console.log('Retrieved courseName:', this.coursename);
    }

    this.value = localStorage.getItem('selectedKeyword');
    console.log('Retrieved keyword from localStorage:', this.keyword);
    this.getcourselts();
  }

  getcourselts() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.isLoading = true; // Set loading state to true

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

      _this.subcategory = _this.courseId;

      _this.service.specicourselist(_this.value, _this.subcategory).subscribe(res => {
        _this.courseltsArry = res.data || []; // Handle null/undefined response safely

        _this.isLoading = false; // Stop loading

        loader.dismiss(); // Hide the loader
      }, error => {
        console.error('Error fetching courses:', error);
        _this.courseltsArry = []; // Set empty array on error

        _this.isLoading = false; // Stop loading

        loader.dismiss(); // Hide the loader
      });
    })();
  }

  clglts(id) {
    this.router.navigate(['/specoursebyclglts', id]);
  }

};

SpecourselistPage.ctorParameters = () => [{
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

SpecourselistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-specourselist',
  template: _raw_loader_specourselist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_specourselist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SpecourselistPage);


/***/ }),

/***/ 69254:
/*!*************************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  margin: 0px 10px 10px;\n  border: 1px solid #b6ddff;\n}\n\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending h4 {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNvdXJzZWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBSUU7RUFDRSxhQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGTjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQUtFO0VBQ0UsYUFBQTtBQUhKIiwiZmlsZSI6InNwZWNvdXJzZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLnRyZW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjlmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZkZGZmO1xyXG4gIFxyXG4gIC5zZXRsaXN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 55483:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/specourselist/specourselist.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/specialiclg\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <div class=\"trending\">\n  <h5 style=\"margin:10px\">Trending Specialization Courses List</h5>\n    <ng-container *ngIf=\"courseltsArry?.length > 0; else noData\">\n      <ion-item detail=\"true\" *ngFor=\"let item of courseltsArry\">\n        <ion-label>\n          <h3 (click)=\"clglts(item.id)\">{{item.name}}</h3>\n        </ion-label>\n      </ion-item>\n    </ng-container>\n    \n    <ng-template #noData>\n      <ion-item>\n        <ion-label>\n          <h3>No data found</h3>\n        </ion-label>\n      </ion-item>\n    </ng-template>\n  </div> -->\n\n\n  <div class=\"trending\">\n    <h5 style=\"margin: 10px\">Trending Specialization Courses List</h5>\n  \n    <ng-container *ngIf=\"!isLoading; else loadingTemplate\">\n      <ng-container *ngIf=\"courseltsArry?.length > 0; else noDataTemplate\">\n        <ion-item detail=\"true\" *ngFor=\"let item of courseltsArry\">\n          <ion-label>\n            <h3 (click)=\"clglts(item.id)\">{{ item.name }}</h3>\n          </ion-label>\n        </ion-item>\n      </ng-container>\n    </ng-container>\n  \n    <ng-template #loadingTemplate>\n      <ion-item>\n        <ion-label>\n          <!-- <h3>Loading...</h3> -->\n        </ion-label>\n      </ion-item>\n    </ng-template>\n  \n    <ng-template #noDataTemplate>\n      <ion-item>\n        <ion-label>\n          <h3>No data found</h3>\n        </ion-label>\n      </ion-item>\n    </ng-template>\n  </div>\n\n\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specourselist_specourselist_module_ts.js.map