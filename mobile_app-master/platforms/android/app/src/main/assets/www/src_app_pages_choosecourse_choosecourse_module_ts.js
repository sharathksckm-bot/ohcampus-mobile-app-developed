(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_choosecourse_choosecourse_module_ts"],{

/***/ 88252:
/*!*******************************************************************!*\
  !*** ./src/app/pages/choosecourse/choosecourse-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosecoursePageRoutingModule": () => (/* binding */ ChoosecoursePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _choosecourse_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choosecourse.page */ 33433);




const routes = [
    {
        path: '',
        component: _choosecourse_page__WEBPACK_IMPORTED_MODULE_0__.ChoosecoursePage
    }
];
let ChoosecoursePageRoutingModule = class ChoosecoursePageRoutingModule {
};
ChoosecoursePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChoosecoursePageRoutingModule);



/***/ }),

/***/ 19527:
/*!***********************************************************!*\
  !*** ./src/app/pages/choosecourse/choosecourse.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosecoursePageModule": () => (/* binding */ ChoosecoursePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _choosecourse_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choosecourse-routing.module */ 88252);
/* harmony import */ var _choosecourse_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choosecourse.page */ 33433);







let ChoosecoursePageModule = class ChoosecoursePageModule {
};
ChoosecoursePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _choosecourse_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChoosecoursePageRoutingModule
        ],
        declarations: [_choosecourse_page__WEBPACK_IMPORTED_MODULE_1__.ChoosecoursePage]
    })
], ChoosecoursePageModule);



/***/ }),

/***/ 33433:
/*!*********************************************************!*\
  !*** ./src/app/pages/choosecourse/choosecourse.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoosecoursePage": () => (/* binding */ ChoosecoursePage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_choosecourse_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./choosecourse.page.html */ 41133);
/* harmony import */ var _choosecourse_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choosecourse.page.scss */ 45110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);








let ChoosecoursePage = class ChoosecoursePage {
  constructor(activatedRoute, service, router, loadingController) {
    this.activatedRoute = activatedRoute;
    this.service = service;
    this.router = router;
    this.loadingController = loadingController;
    this.clist = [];
    this.selectedOptions = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.catID = params.id;
      this.listid = params.Lid;
      localStorage.setItem('catID', JSON.stringify(this.catID));
      this.getsubclist();
    });
  }

  getsubclist() {
    this.service.getsubclist(this.catID, this.listid).subscribe(res => {
      this.clist = res.data;
      console.log(this.clist);
    });
  } // toggleSelection(event, value) {
  //   if (event.detail.checked) {
  //     this.selectedOptions.push(value);
  //     console.log( this.selectedOptions.push(value))
  //   } else {
  //     const index = this.selectedOptions.indexOf(value);
  //     if (index !== -1) {
  //       this.selectedOptions.splice(index, 1);
  //     }
  //   }
  // }


  toggleSelection(event, value) {
    if (event.detail.checked) {
      if (!this.selectedOptions.includes(value)) {
        this.selectedOptions.push(value);
      }
    } else {
      this.selectedOptions = this.selectedOptions.filter(item => item !== value);
    }

    console.log('Selected options:', this.selectedOptions);
  }

  getCollegelist() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      localStorage.setItem('courses', JSON.stringify(_this.selectedOptions));

      _this.router.navigate(['/statelist']).then(() => {// window.location.reload();
      }); // this.router.navigate(['/tabs/tabs/tab1']).then(()=>{
      // window.location.reload();
      // });

    })();
  }

  handleButtonClick() {
    this.getCollegelist();
  }

};

ChoosecoursePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

ChoosecoursePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-choosecourse',
  template: _raw_loader_choosecourse_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_choosecourse_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ChoosecoursePage);


/***/ }),

/***/ 45110:
/*!***********************************************************!*\
  !*** ./src/app/pages/choosecourse/choosecourse.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".set_btn {\n  position: fixed;\n  bottom: 5px;\n  right: 10px;\n}\n\nion-radio {\n  width: 30px;\n  height: 30px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #0081dc;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\n.footerFix {\n  background: #fff;\n  width: 100%;\n  position: fixed;\n  z-index: 1111;\n  bottom: 0px;\n  text-align: center;\n  height: 55px;\n  padding: 5px;\n}\n\n.custom-spinner .spinner {\n  width: 100px !important;\n  height: 100px !important;\n  background-image: url('loader.gif') !important;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.custom-spinner .spinner-crescent {\n  display: none !important;\n}\n\n.custom-loader .loading-wrapper {\n  background: white;\n  color: black;\n  /* Adjust text color if necessary */\n}\n\n.custom-loader .spinner-crescent {\n  stroke: black;\n  /* Change the spinner color if you are using a spinner */\n}\n\n.choosecourse {\n  padding: 0;\n  margin: 10px;\n  --background: aliceblue;\n  background: aliceblue;\n}\n\n.choosecourse ion-item {\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n\n.custom-loading {\n  --background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZWNvdXJzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FBRko7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRkY7O0FBbUJBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0FBaEJGOztBQW1CQTtFQUNFLHdCQUFBO0FBaEJGOztBQW9CRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUFjLG1DQUFBO0FBaEJsQjs7QUFtQkU7RUFDRSxhQUFBO0VBQWUsd0RBQUE7QUFoQm5COztBQW9CQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQWpCSjs7QUFtQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBakJKOztBQXFCQTtFQUNFLGtCQUFBO0FBbEJGIiwiZmlsZSI6ImNob29zZWNvdXJzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0X2J0bntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tcmFkaW8ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yYWRpbzo6cGFydChjb250YWluZXIpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yYWRpbzo6cGFydChtYXJrKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gICAgYmFja2dyb3VuZDojMDA4MWRjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQobWFyaykge1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICBcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICBcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcblxyXG4uZm9vdGVyRml4e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDExMTE7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vLyAuY3VzdG9tLXNwaW5uZXIgLnNwaW5uZXIge1xyXG4vLyAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29uL2xvYWRlci5naWYnKSAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmN1c3RvbS1zcGlubmVyIC5zcGlubmVyLWNyZXNjZW50IHtcclxuLy8gICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5jdXN0b20tc3Bpbm5lciAuc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb24vbG9hZGVyLmdpZicpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXNwaW5uZXIgLnNwaW5uZXItY3Jlc2NlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1sb2FkZXIge1xyXG4gIC5sb2FkaW5nLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7IC8qIEFkanVzdCB0ZXh0IGNvbG9yIGlmIG5lY2Vzc2FyeSAqL1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXItY3Jlc2NlbnQge1xyXG4gICAgc3Ryb2tlOiBibGFjazsgLyogQ2hhbmdlIHRoZSBzcGlubmVyIGNvbG9yIGlmIHlvdSBhcmUgdXNpbmcgYSBzcGlubmVyICovXHJcbiAgfVxyXG59XHJcblxyXG4uY2hvb3NlY291cnNle1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgXHJcbiAgaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbS1sb2FkaW5nIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7IFxyXG59Il19 */");

/***/ }),

/***/ 41133:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choosecourse/choosecourse.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  \n   \n \n  \n  <ion-header [translucent]=\"true\" >\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"2\">\n                    <ion-icon name=\"arrow-back\" routerLink=\"/preferedcourses\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"8\" class=\"selfcenter text-center\">\n                    <h6 class=\"m0\"> Courses List</h6>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:aliceblue ;\" [translucent]=\"true\">\n    <div class=\"ion-margin\">\n        <p>Choose your preferred course/courses</p>\n    </div>\n    <ion-list class=\"choosecourse\">\n        <ion-item *ngFor=\"let item of clist\" lines=\"none\">\n            <ion-label>{{item.name}}</ion-label>\n            <ion-checkbox [value]=\"item.value\" (ionChange)=\"toggleSelection($event, item)\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n    <!-- <div class=\"footerFix\">\n      <ion-button (click)=\"handleButtonClick()\" [disabled]=\"selectedOptions.length === 0\">\n        Done\n    </ion-button>\n    </div> -->\n    \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\"\n      (click)=\"handleButtonClick()\"\n      [disabled]=\"selectedOptions.length === 0\">\n      Done\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_choosecourse_choosecourse_module_ts.js.map