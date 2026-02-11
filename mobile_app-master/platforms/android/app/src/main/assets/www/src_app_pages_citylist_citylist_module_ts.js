(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_citylist_citylist_module_ts"],{

/***/ 22554:
/*!***********************************************************!*\
  !*** ./src/app/pages/citylist/citylist-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitylistPageRoutingModule": () => (/* binding */ CitylistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _citylist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citylist.page */ 25136);




const routes = [
    {
        path: '',
        component: _citylist_page__WEBPACK_IMPORTED_MODULE_0__.CitylistPage
    }
];
let CitylistPageRoutingModule = class CitylistPageRoutingModule {
};
CitylistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CitylistPageRoutingModule);



/***/ }),

/***/ 53178:
/*!***************************************************!*\
  !*** ./src/app/pages/citylist/citylist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitylistPageModule": () => (/* binding */ CitylistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _citylist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citylist-routing.module */ 22554);
/* harmony import */ var _citylist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citylist.page */ 25136);







let CitylistPageModule = class CitylistPageModule {
};
CitylistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _citylist_routing_module__WEBPACK_IMPORTED_MODULE_0__.CitylistPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_citylist_page__WEBPACK_IMPORTED_MODULE_1__.CitylistPage]
    })
], CitylistPageModule);



/***/ }),

/***/ 25136:
/*!*************************************************!*\
  !*** ./src/app/pages/citylist/citylist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitylistPage": () => (/* binding */ CitylistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_citylist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./citylist.page.html */ 91115);
/* harmony import */ var _citylist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citylist.page.scss */ 57535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);







let CitylistPage = class CitylistPage {
    constructor(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.locationArr = [];
        this.filteredLocations = [];
        this.selected_loc = [];
    }
    ngOnInit() {
        this.selected_loc = [];
        this.cityform = this.formBuilder.group({
            searchvalue: ['']
        });
        this.getLoc();
    }
    getLoc() {
        this.service.getLocation(this.cityform.value.searchvalue).subscribe(res => {
            this.locationArr = res.response_data;
            this.filteredLocations = this.locationArr;
        });
    }
    onSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredLocations = this.locationArr.filter(item => item.city.toLowerCase().includes(searchTerm));
    }
    clglistbyloc1(id) {
        this.router.navigate(['/clglist']);
    }
    clglistbyloc(event, id) {
        if (event.detail.checked) {
            if (this.selected_loc) {
                this.selected_loc += `${id},`;
            }
            else {
                this.selected_loc = `${id},`;
            }
        }
        else {
            const idsArray = this.selected_loc.split(',').filter(Boolean); // filter out empty strings
            const index = idsArray.indexOf(id.toString());
            if (index !== -1) {
                idsArray.splice(index, 1);
            }
            this.selected_loc = idsArray.join(',') + ','; // Add back the comma
        }
        this.selected_loc = this.selected_loc.replace(/ +$/, ''); // Remove any trailing commas
        localStorage.setItem('selectedLocationIds', this.selected_loc);
    }
};
CitylistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
CitylistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-citylist',
        template: _raw_loader_citylist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_citylist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CitylistPage);



/***/ }),

/***/ 57535:
/*!***************************************************!*\
  !*** ./src/app/pages/citylist/citylist.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".searchbar ion-searchbar {\n  --border-radius: 50px;\n  padding: 0px 16px 10px;\n}\n\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n\n.size_set {\n  border-radius: 20px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin: 0rem;\n  margin-top: 2.5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;\n  box-shadow: none;\n}\n\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n  --border-radius: 50px;\n  --padding-start: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.tit_set {\n  font-size: 0.9rem;\n  color: black;\n  font-weight: 500;\n  padding-top: 14px;\n  margin-top: 20px;\n}\n\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -14%;\n  border: 1px solid #c9c9c9;\n}\n\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid #746ac0;\n}\n\n.locationlist {\n  margin: 10px;\n  border-radius: 16px;\n  margin-bottom: 4rem;\n}\n\n.setbtn {\n  position: fixed;\n  bottom: 46px;\n  background: white;\n  width: 100%;\n  text-align: center;\n  padding: 6px;\n}\n\n.setbtn ion-button {\n  --border-radius: 50px;\n  border-radius: 50px;\n}\n\nion-searchbar {\n  --color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHlsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBcEJKOztBQXdCQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFwQlI7O0FBNkJBO0VBR0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsc0RBQUE7RUFFRSxnQkFBQTtBQTdCSjs7QUE4QkU7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBNUJKOztBQWdDQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTdCRjs7QUErQkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBK0JBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUE1QkE7O0FBK0JBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBNUJKOztBQStCQztFQUNLLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBNUJOOztBQStCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBNUJKOztBQStCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBNUJKOztBQTZCSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUEzQk47O0FBZ0NFO0VBQ0UseUJBQUE7QUE3QkoiLCJmaWxlIjoiY2l0eWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC5zZXRidG57XHJcblxyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgYm90dG9tOiA1NXB4O1xyXG4vLyAgICAgei1pbmRleDogMTExO1xyXG4vLyAgICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBoNXtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTFweDtcclxuLy8gfVxyXG5cclxuLy8gLmJ0bjF7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuLnNlYXJjaGJhcntcclxuXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNnB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ue1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlvbi1iYWRnZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC01JTtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNhcmQgYWxpZ25cclxuXHJcblxyXG4vLyBjYXJkIGFsaWduXHJcblxyXG4uc2l6ZV9zZXR7XHJcbiAgLy8gICBoZWlnaHQ6IDI2N3B4O1xyXG4gIC8vIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLS1vdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgY29udGFpbjogdW5zZXQ7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4IDEycHg7XHJcbiAgbWFyZ2luOiAwcmVtO1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gXHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIGlvbi1idXR0b257XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xyXG4gIH1cclxufVxyXG4gXHJcbi50aXRfc2V0e1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4OyBcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLnNldF9ib3Rte1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2YzZjNmMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmVlc3tcclxuZm9udC1zaXplOiAxNnB4O1xyXG5tYXJnaW46NXB4O1xyXG59XHJcblxyXG4uaW1nX2FsaWdue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgdG9wOiAtMTQlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcclxuICB9XHJcblxyXG4gLmJvb2tNYXJre1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDogNiU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NDZhYzA7XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb25saXN0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5cclxuICAuc2V0YnRue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA0NnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIC0tY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IFxyXG4gICBcclxuICB9Il19 */");

/***/ }),

/***/ 91115:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/citylist/citylist.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n \n\n\n<ion-content style=\"--background:aliceblue;\">\n  <form [formGroup]=\"cityform\">\n    <div>\n      <h5 class=\"m10\">Choose Locations</h5>\n      <div class=\"searchbar\">\n        <ion-searchbar (ionInput)=\"onSearch($event)\" formControlName=\"searchvalue\"></ion-searchbar>\n      </div>\n      <div>\n        <ion-list class=\"locationlist\">\n        <ion-item *ngFor=\"let item of filteredLocations\">\n          <ion-checkbox slot=\"end\" (ionChange)=\"clglistbyloc($event,item.id)\"></ion-checkbox>\n          <ion-label>{{item.city}}</ion-label>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"setbtn\" >\n        <ion-button class=\"btn1\" routerLink=\"/tabs/tabs/tab1\">Cancel</ion-button>\n        <ion-button (click)=\"clglistbyloc1(id)\">Done</ion-button>\n      </div>\n       \n      </div>\n    </div>\n  </form>\n</ion-content >\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_citylist_citylist_module_ts.js.map