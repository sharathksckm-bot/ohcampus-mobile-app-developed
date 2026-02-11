(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_certificatetdetails_certificatetdetails_module_ts"],{

/***/ 30682:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/certificatetdetails/certificatetdetails-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificatetdetailsPageRoutingModule": () => (/* binding */ CertificatetdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _certificatetdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificatetdetails.page */ 52522);




const routes = [
    {
        path: '',
        component: _certificatetdetails_page__WEBPACK_IMPORTED_MODULE_0__.CertificatetdetailsPage
    }
];
let CertificatetdetailsPageRoutingModule = class CertificatetdetailsPageRoutingModule {
};
CertificatetdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CertificatetdetailsPageRoutingModule);



/***/ }),

/***/ 55064:
/*!*************************************************************************!*\
  !*** ./src/app/pages/certificatetdetails/certificatetdetails.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificatetdetailsPageModule": () => (/* binding */ CertificatetdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _certificatetdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./certificatetdetails-routing.module */ 30682);
/* harmony import */ var _certificatetdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificatetdetails.page */ 52522);







let CertificatetdetailsPageModule = class CertificatetdetailsPageModule {
};
CertificatetdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _certificatetdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.CertificatetdetailsPageRoutingModule
        ],
        declarations: [_certificatetdetails_page__WEBPACK_IMPORTED_MODULE_1__.CertificatetdetailsPage]
    })
], CertificatetdetailsPageModule);



/***/ }),

/***/ 52522:
/*!***********************************************************************!*\
  !*** ./src/app/pages/certificatetdetails/certificatetdetails.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificatetdetailsPage": () => (/* binding */ CertificatetdetailsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_certificatetdetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./certificatetdetails.page.html */ 9313);
/* harmony import */ var _certificatetdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificatetdetails.page.scss */ 51385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);









let CertificatetdetailsPage = class CertificatetdetailsPage {
  constructor(router, service, route, loadingController // Inject LoadingController
  ) {
    this.router = router;
    this.service = service;
    this.route = route;
    this.loadingController = loadingController;
    this.statename = JSON.parse(localStorage.getItem('state'));
  }

  ngOnInit() {
    this.certificateId = this.route.snapshot.paramMap.get('id');
    console.log(this.certificateId);
    this.certifdetail();
    this.getlatestArticle();
  }

  certifdetail() {
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

      _this.service.certificatedtls(_this.certificateId).subscribe(res => {
        console.log(res);
        _this.certidetailarry = res.certificateDetails; // Store certificate details

        _this.image = res.certificateDetails.image; // Get image

        _this.name = res.certificateDetails.name; // Get name

        _this.descritpion = res.certificateDetails.descritpion; // Corrected typo here

        console.log(_this.descritpion);
        loader.dismiss(); // Dismiss the loader when data is received
      }, err => {
        console.error(err);
        loader.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  getlatestArticle() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.searchCategory = '';
      _this2.value = '';

      _this2.service.article(_this2.searchCategory, _this2.value, _this2.statename).subscribe(res => {
        console.log(res);
        _this2.latestartiarry = res.response_data;
        _this2.blogId = res.response_data[0]?.id;
        console.log(_this2.blogId);
      }, err => {
        console.error(err);
      });
    })();
  }

  getarticledetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

};

CertificatetdetailsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

CertificatetdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-certificatetdetails',
  template: _raw_loader_certificatetdetails_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_certificatetdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], CertificatetdetailsPage);


/***/ }),

/***/ 51385:
/*!*************************************************************************!*\
  !*** ./src/app/pages/certificatetdetails/certificatetdetails.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv {\n  padding-left: 10px;\n  margin-right: 5px;\n}\n\n.shearesec {\n  padding-left: 10px;\n  background-color: white;\n  padding: 5px;\n  border-top: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n  margin-top: 17px;\n}\n\n.shearesec .labelset {\n  position: relative;\n  top: 14px;\n  font-size: 15px;\n}\n\n.shearesec .setimg {\n  width: 35px;\n  margin: 6px;\n}\n\n.shearesec .set {\n  height: 35px;\n  position: relative;\n  top: -1px;\n}\n\n.setimage {\n  width: 100%;\n  height: 200px;\n  object-fit: contain;\n  border: 2px dashed #88d834;\n  border-radius: 10px;\n}\n\n.titleset {\n  margin: 6px;\n  text-align: center;\n}\n\n.mainArticle {\n  background: #f6f6f6;\n  padding: 10px 0;\n}\n\n.mainArticle .setrow {\n  margin: 10px;\n  background: #fff;\n  border-radius: 8px;\n}\n\n.mainArticle .setrow img {\n  border-radius: 8px;\n  height: 65px;\n  width: 100%;\n  object-fit: contain;\n}\n\n.mainArticle .setrow p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnRpZmljYXRldGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0osU0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFSTtFQUNBLFdBQUE7RUFFQyxXQUFBO0FBREw7O0FBR0k7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBREo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBV0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUlI7O0FBU1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFQWjs7QUFVUTtFQUNJLFNBQUE7QUFSWiIsImZpbGUiOiJjZXJ0aWZpY2F0ZXRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4uc2hlYXJlc2Vje1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIC5sYWJlbHNldHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZXRpbWd7XHJcbiAgICB3aWR0aDozNXB4O1xyXG4gICAgXHJcbiAgICAgbWFyZ2luOjZweFxyXG4gICAgfVxyXG4gICAgLnNldHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4uc2V0aW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICM4OGQ4MzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnRpdGxlc2V0e1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAubWFpbkFydGljbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgIC5zZXRyb3d7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 9313:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/certificatetdetails/certificatetdetails.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\">\n<!-- section1 -->\n<div  >\n  <div>\n      <img class=\"setimage\" [src]=\"image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n  </div>\n  <h5 class=\"titleset\">{{name}}</h5>\n</div>\n\n<div class=\"shearesec\">\n  <ion-row>\n    <ion-col size=\"3\">\n   <ion-label class=\"labelset\" >Share this:</ion-label>\n    </ion-col>\n    <ion-col size=\"9\">\n  <img class=\"setimg\" src=\"../../../assets/icon/facebook.png\">\n  <img class=\"setimg\" src=\"../../../assets/icon/whatsapp.png\">\n  <img class=\"setimg\" src=\"../../../assets/icon/twitter.png\">\n  <img class=\"setimg\" src=\"../../../assets/icon/linkedin.png\">\n    </ion-col>\n  </ion-row>\n</div>\n\n<div>\n  <p [innerHTML]=\"descritpion\"> </p>\n</div>\n\n\n<!-- 3th section -->\n<div class=\"mainArticle\">\n  <h6>Latest Articles</h6>\n  <div *ngFor=\"let item of latestartiarry;\">\n    <ion-row class=\"setrow\" (click)=\"getarticledetails(item.id)\">\n      <ion-col size=\"3\" >\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" class=\"selfcenter\">\n        <p>{{item.title}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n\n\n</div>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_certificatetdetails_certificatetdetails_module_ts.js.map