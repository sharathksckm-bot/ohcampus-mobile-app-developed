(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_eventlist_eventlist_module_ts"],{

/***/ 73274:
/*!*************************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventlistPageRoutingModule": () => (/* binding */ EventlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlist.page */ 22813);




const routes = [
    {
        path: '',
        component: _eventlist_page__WEBPACK_IMPORTED_MODULE_0__.EventlistPage
    }
];
let EventlistPageRoutingModule = class EventlistPageRoutingModule {
};
EventlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventlistPageRoutingModule);



/***/ }),

/***/ 3642:
/*!*****************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventlistPageModule": () => (/* binding */ EventlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _eventlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventlist-routing.module */ 73274);
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventlist.page */ 22813);







let EventlistPageModule = class EventlistPageModule {
};
EventlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _eventlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventlistPageRoutingModule
        ],
        declarations: [_eventlist_page__WEBPACK_IMPORTED_MODULE_1__.EventlistPage]
    })
], EventlistPageModule);



/***/ }),

/***/ 22813:
/*!***************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventlistPage": () => (/* binding */ EventlistPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_eventlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./eventlist.page.html */ 91725);
/* harmony import */ var _eventlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventlist.page.scss */ 19110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);









let EventlistPage = class EventlistPage {
  constructor(service, activatedRoute, router, loadingController) {
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loadingController = loadingController;
    this.eventlistarry = [];
  }

  ngOnInit() {
    this.eventlist();
  }

  eventlist() {
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

      _this.startlimit = '0';
      _this.endlimit = '100';

      _this.service.geteventss(_this.value, _this.startlimit, _this.endlimit).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          console.log(res);
          _this.eventlistarry = res.response_data;
          console.log(_this.eventlistarry);
          yield loader.dismiss(); // Dismiss the loader once data is received
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error('Error fetching article list:', err);
          yield loader.dismiss(); // Dismiss the loader in case of an error
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  eventdetails(event_id) {
    this.router.navigate(['/eventdetails', event_id]);
  }

};

EventlistPage.ctorParameters = () => [{
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

EventlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-eventlist',
  template: _raw_loader_eventlist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_eventlist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], EventlistPage);


/***/ }),

/***/ 19110:
/*!*****************************************************!*\
  !*** ./src/app/pages/eventlist/eventlist.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv {\n  margin: 10px;\n}\n\n.setrw {\n  border-bottom: 1px solid #e5e5e5;\n  margin: 12px 0;\n  padding-bottom: 8px;\n}\n\n.setrw img {\n  border-radius: 10px;\n  width: 100%;\n  border: 1px solid lightgray;\n  height: 85px;\n}\n\n.setrw p.p1 {\n  margin: 0;\n}\n\n.p2 {\n  font-size: 14px;\n  margin: 6px 0px;\n  color: gray;\n}\n\n.p3 {\n  font-size: 14px;\n  margin: 6px 0px;\n  color: gray;\n}\n\n.f30 {\n  font-size: 20px;\n  margin-left: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FBREo7O0FBU0E7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU5KOztBQU9JO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0FBTlI7O0FBUUk7RUFDSSxTQUFBO0FBTlI7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBUEoiLCJmaWxlIjoiZXZlbnRsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1haW5kaXZ7XHJcbiAgICBtYXJnaW46MTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uc2V0cncge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB9XHJcbiAgICBwLnAxIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4ucDJ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDZweCAwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnAze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcblxyXG4uZjMwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 91725:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/eventlist/eventlist.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-icon name=\"chevron-back-outline\" class=\"f30\" routerLink=\"/coursewisearticles\"></ion-icon> -->\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/coursewisearticles\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"maindiv\">\n  <h5 style=\"margin:10px 0\">Event list</h5>\n    \n      <div *ngFor=\"let item of eventlistarry\">\n        <ion-row class=\"setrw\">\n          <ion-col size=\"8\" (click)=\"eventdetails(item.event_id)\">\n            <p class=\"p1\">Event Name :- {{item.event_name}}: </p>\n            <p class=\"p2\">Start date :- {{item.event_start_date}}</p>\n            <p class=\"p2\">end date :- {{item.event_end_date}}</p>\n            \n          </ion-col>\n          <ion-col size=\"4\">\n            <img [src]=\"item.image\">\n          </ion-col>\n        </ion-row>\n      </div>\n  \n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_eventlist_eventlist_module_ts.js.map