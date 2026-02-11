(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_articlcatlist_articlcatlist_module_ts"],{

/***/ 99857:
/*!*********************************************************************!*\
  !*** ./src/app/pages/articlcatlist/articlcatlist-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlcatlistPageRoutingModule": () => (/* binding */ ArticlcatlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _articlcatlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlcatlist.page */ 91705);




const routes = [
    {
        path: '',
        component: _articlcatlist_page__WEBPACK_IMPORTED_MODULE_0__.ArticlcatlistPage
    }
];
let ArticlcatlistPageRoutingModule = class ArticlcatlistPageRoutingModule {
};
ArticlcatlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticlcatlistPageRoutingModule);



/***/ }),

/***/ 22012:
/*!*************************************************************!*\
  !*** ./src/app/pages/articlcatlist/articlcatlist.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlcatlistPageModule": () => (/* binding */ ArticlcatlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _articlcatlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlcatlist-routing.module */ 99857);
/* harmony import */ var _articlcatlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlcatlist.page */ 91705);







let ArticlcatlistPageModule = class ArticlcatlistPageModule {
};
ArticlcatlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _articlcatlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticlcatlistPageRoutingModule
        ],
        declarations: [_articlcatlist_page__WEBPACK_IMPORTED_MODULE_1__.ArticlcatlistPage]
    })
], ArticlcatlistPageModule);



/***/ }),

/***/ 91705:
/*!***********************************************************!*\
  !*** ./src/app/pages/articlcatlist/articlcatlist.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlcatlistPage": () => (/* binding */ ArticlcatlistPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_articlcatlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./articlcatlist.page.html */ 58764);
/* harmony import */ var _articlcatlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articlcatlist.page.scss */ 90066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);









let ArticlcatlistPage = class ArticlcatlistPage {
  constructor(service, activatedRoute, router, loadingController) {
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loadingController = loadingController;
    this.statename = JSON.parse(localStorage.getItem('state'));
    this.Artciledata = JSON.parse(localStorage.getItem('catID'));
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.CategoryId = params.get('id');
      console.log(this.CategoryId);
    });
    this.getarticle();
  }

  getarticle() {
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
      yield loader.present();
      _this.searchCategory = -2;
      _this.value = '';

      _this.service.article(_this.searchCategory, _this.value, _this.statename).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          _this.allArticles = res.response_data;
          yield loader.dismiss(); // this.isViewMoreButtonVisible = this.allArticles.length > this.initialArticlesToShow;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  articlesdetails(id) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.router.navigate(['/articledetails', id]);
    })();
  }

};

ArticlcatlistPage.ctorParameters = () => [{
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

ArticlcatlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-articlcatlist',
  template: _raw_loader_articlcatlist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_articlcatlist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ArticlcatlistPage);


/***/ }),

/***/ 90066:
/*!*************************************************************!*\
  !*** ./src/app/pages/articlcatlist/articlcatlist.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv {\n  margin: 10px;\n}\n\n.setrw {\n  border-bottom: 1px solid #e5e5e5;\n  margin: 12px 0;\n  padding-bottom: 8px;\n}\n\n.setrw img {\n  border-radius: 10px;\n  width: 100%;\n  border: 1px solid lightgray;\n  height: 85px;\n}\n\n.setrw p.p1 {\n  margin: 0;\n}\n\n.p2 {\n  font-size: 14px;\n  margin: 6px 0px;\n  color: gray;\n}\n\n.p3 {\n  font-size: 14px;\n  margin: 6px 0px;\n  color: gray;\n}\n\n.f30 {\n  font-size: 20px;\n  margin-left: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGNhdGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKOztBQVNBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFPSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtBQU5SOztBQVFJO0VBQ0ksU0FBQTtBQU5SOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFOSjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVBKIiwiZmlsZSI6ImFydGljbGNhdGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubWFpbmRpdntcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5zZXRydyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICAgIHAucDEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbi5wMntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4ucDN7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDZweCAwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuXHJcbi5mMzB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcclxufSJdfQ== */");

/***/ }),

/***/ 58764:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/articlcatlist/articlcatlist.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-icon name=\"chevron-back-outline\" class=\"f30\" routerLink=\"/coursewisearticles\"></ion-icon> -->\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <!-- <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/coursewisearticles\"></ion-icon>   -->\n        </ion-col>\n        <ion-col size=\"8\">\n          <!-- <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons> -->\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"maindiv\">\n  <h5 style=\"margin:10px 0\">Articles list</h5>\n\n      <div *ngFor=\"let item of allArticles\">\n        <ion-row class=\"setrw\">\n          <ion-col size=\"8\" (click)=\"articlesdetails(item.id)\">\n            <p class=\"p1\">{{item.title}}: </p>\n            <!-- <p class=\"p2\"> {{item.post_rate_date}}</p> -->\n            <!-- <p class=\"p3\">Views : {{item.views}} </p> -->\n          </ion-col>\n          <ion-col size=\"4\">\n            <img [src]=\"item.image\">\n          </ion-col>\n        </ion-row>\n      </div>\n  \n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_articlcatlist_articlcatlist_module_ts.js.map