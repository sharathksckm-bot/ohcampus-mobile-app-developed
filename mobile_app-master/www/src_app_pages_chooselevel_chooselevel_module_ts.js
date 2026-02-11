(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_chooselevel_chooselevel_module_ts"],{

/***/ 84674:
/*!*****************************************************************!*\
  !*** ./src/app/pages/chooselevel/chooselevel-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooselevelPageRoutingModule": () => (/* binding */ ChooselevelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chooselevel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooselevel.page */ 56943);




const routes = [
    {
        path: '',
        component: _chooselevel_page__WEBPACK_IMPORTED_MODULE_0__.ChooselevelPage
    }
];
let ChooselevelPageRoutingModule = class ChooselevelPageRoutingModule {
};
ChooselevelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChooselevelPageRoutingModule);



/***/ }),

/***/ 77812:
/*!*********************************************************!*\
  !*** ./src/app/pages/chooselevel/chooselevel.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooselevelPageModule": () => (/* binding */ ChooselevelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _chooselevel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooselevel-routing.module */ 84674);
/* harmony import */ var _chooselevel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooselevel.page */ 56943);







let ChooselevelPageModule = class ChooselevelPageModule {
};
ChooselevelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chooselevel_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChooselevelPageRoutingModule
        ],
        declarations: [_chooselevel_page__WEBPACK_IMPORTED_MODULE_1__.ChooselevelPage]
    })
], ChooselevelPageModule);



/***/ }),

/***/ 56943:
/*!*******************************************************!*\
  !*** ./src/app/pages/chooselevel/chooselevel.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooselevelPage": () => (/* binding */ ChooselevelPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chooselevel_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./chooselevel.page.html */ 92167);
/* harmony import */ var _chooselevel_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooselevel.page.scss */ 93837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);









let ChooselevelPage = class ChooselevelPage {
  constructor(router, service, activatedRoute, loadingController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
  }

  ngOnInit() {
    this.getlevel();
    const routeParam = this.activatedRoute.snapshot.params;
    this.catid = routeParam.id;
    console.log(routeParam);
  } // getlevel() {
  //   this.service.getlevel().subscribe(res => {
  //     this.clevel = res.response_data;
  //   });
  // }


  getlevel() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
         <span style="margin-top: 10px;"> </span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading' // Optional: custom CSS class for additional styling

      }); // Present the loading

      yield loading.present();

      _this.service.getlevel().subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          _this.clevel = res.response_data;
          yield loading.dismiss();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  selectLevel(level) {}

  getCourses(idd) {
    this.router.navigate(['/choosecourse', +this.catid, +idd]);
  }

};

ChooselevelPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

ChooselevelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-chooselevel',
  template: _raw_loader_chooselevel_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_chooselevel_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ChooselevelPage);


/***/ }),

/***/ 93837:
/*!*********************************************************!*\
  !*** ./src/app/pages/chooselevel/chooselevel.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btnset {\n  margin: 10px;\n}\n\n.level-button {\n  padding-left: -26px;\n  display: block;\n  width: 100%;\n  height: 50px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZWxldmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFISiIsImZpbGUiOiJjaG9vc2VsZXZlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5idG5zZXR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ubGV2ZWwtYnV0dG9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogLTI2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAvLyBtYXJnaW46IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7ICAgIFxyXG59XHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 92167:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chooselevel/chooselevel.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon name=\"arrow-back\" routerLink=\"/preferedcourses\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\" class=\"selfcenter text-center\">\n          <h6 class=\"m0\">Levels</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"btnset\" *ngIf=\"clevel\" > \n    <h2></h2>\n    <ion-row  >\n      <ion-col  size=\"6\" *ngFor=\"let level of clevel\" > \n        <button  (click)=\"selectLevel(level)\" class=\"level-button\"  (click)=\"getCourses(level.category_id)\" >\n          {{ level.name }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chooselevel_chooselevel_module_ts.js.map