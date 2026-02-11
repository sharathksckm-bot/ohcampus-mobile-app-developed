(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_editpreferences_editpreferences_module_ts"],{

/***/ 79666:
/*!*************************************************************************!*\
  !*** ./src/app/pages/editpreferences/editpreferences-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpreferencesPageRoutingModule": () => (/* binding */ EditpreferencesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _editpreferences_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpreferences.page */ 33240);




const routes = [
    {
        path: '',
        component: _editpreferences_page__WEBPACK_IMPORTED_MODULE_0__.EditpreferencesPage
    }
];
let EditpreferencesPageRoutingModule = class EditpreferencesPageRoutingModule {
};
EditpreferencesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditpreferencesPageRoutingModule);



/***/ }),

/***/ 97741:
/*!*****************************************************************!*\
  !*** ./src/app/pages/editpreferences/editpreferences.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpreferencesPageModule": () => (/* binding */ EditpreferencesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _editpreferences_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpreferences-routing.module */ 79666);
/* harmony import */ var _editpreferences_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editpreferences.page */ 33240);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);








let EditpreferencesPageModule = class EditpreferencesPageModule {
};
EditpreferencesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editpreferences_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditpreferencesPageRoutingModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule
        ],
        declarations: [_editpreferences_page__WEBPACK_IMPORTED_MODULE_1__.EditpreferencesPage]
    })
], EditpreferencesPageModule);



/***/ }),

/***/ 33240:
/*!***************************************************************!*\
  !*** ./src/app/pages/editpreferences/editpreferences.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpreferencesPage": () => (/* binding */ EditpreferencesPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_editpreferences_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./editpreferences.page.html */ 14027);
/* harmony import */ var _editpreferences_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editpreferences.page.scss */ 24578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);








let EditpreferencesPage = class EditpreferencesPage {
  constructor(router, service, activatedRoute, alertController, modalController, loadingController, toastController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.alertController = alertController;
    this.modalController = modalController;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.clist = []; // State variables to control visibility

    this.categorySelected = false;
    this.levelSelected = false;
    this.selectedItems = new Set(); // To keep track of selected items

    this.showMore = false; // Control visibility of "Show More" button

    this.initialDisplayCount = 3; // Number of items to display initially
  }

  ngOnInit() {
    this.getCategory(); // localStorage.setItem('catID', JSON.stringify(this.catID));
  }

  notification() {
    this.router.navigateByUrl('/notification');
  }

  getCategory() {
    this.service.getCategory().subscribe(res => {
      this.category = res.response_data;
      console.log(this.category);
    });
  }

  getLevel() {
    this.service.getlevel().subscribe(res => {
      this.clevel = res.response_data;
      console.log(this.clevel);
    });
  }

  selectCategory(category) {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.selectedCategory = category.id;
      _this.catname = category.catname;
      console.log(category);
      _this.catID = category.id;
      localStorage.setItem('catname', JSON.stringify(_this.catname));
      localStorage.setItem('catID', JSON.stringify(_this.catID));
      _this.categorySelected = true;
      const loading = yield _this.presentLoading();

      _this.getLevel();

      yield loading.dismiss();
    })();
  }

  selectLevel(level) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.selectedLevel = level.category_id;
      console.log(level);
      _this2.listid = level;
      _this2.levelSelected = true;
      const loading = yield _this2.presentLoading();

      _this2.updateSubcourses();

      yield loading.dismiss();
    })();
  }

  updateSubcourses() {
    if (this.catID && this.listid) {
      this.service.getsubclist(this.catID, this.listid).subscribe(res => {
        this.clist = res.data;
        console.log(this.clist);
      });
    }
  }

  toggleSelection(item) {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
    } else {
      this.selectedItems.add(item);
    }
  }

  isSelected(item) {
    return this.selectedItems.has(item);
  }

  submit() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const selectedItemsArray = Array.from(_this3.selectedItems);
      localStorage.setItem('courses', JSON.stringify(selectedItemsArray)); // localStorage.setItem('courses', JSON.stringify(this.selectedOptions));

      _this3.router.navigate(['/editstate']).then(() => {// window.location.reload();
      });
    })();
  }

  presentLoading() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this4.loadingController.create({
        message: `
      <div class="custom-spinner-container">
        <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
        <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      </div>
       <span style="margin-top: 10px;"> </span>`,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading' // Optional: custom CSS class for additional styling

      });
      yield loading.present();
      return loading;
    })();
  }

};

EditpreferencesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}];

EditpreferencesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-editpreferences',
  template: _raw_loader_editpreferences_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_editpreferences_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], EditpreferencesPage);


/***/ }),

/***/ 24578:
/*!*****************************************************************!*\
  !*** ./src/app/pages/editpreferences/editpreferences.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btnset {\n  margin: 10px;\n}\n\n.level-button {\n  display: block;\n  width: 100%;\n  height: 35px;\n  margin: 3px 0;\n  /* background-color: #3f51b5; */\n  /* color: #fff; */\n  border: 1px solid #152b4a;\n  border-radius: 25px;\n  cursor: pointer;\n  font-size: 12px;\n}\n\nh4 {\n  margin: 10px;\n}\n\n.level-button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: #fff;\n  border: none;\n  padding: 10px 10px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n  font-size: 14px;\n  color: #000;\n  min-height: 50px;\n  text-align: center;\n  line-height: 1.2;\n  justify-content: center;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.level-button.selected {\n  background-color: #88d834;\n  color: #fff;\n}\n\n.right-icon {\n  float: right;\n  font-size: 18px;\n  margin-left: 6px;\n}\n\n.sbbtn {\n  margin: 20px 10px;\n  height: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwcmVmZXJlbmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUtBO0VBV0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtBQVpKOztBQWVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBWko7O0FBY0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWEo7O0FBYUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFWSiIsImZpbGUiOiJlZGl0cHJlZmVyZW5jZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bnNldHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuXHJcbi5sZXZlbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyAqL1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUyYjRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmxldmVsLWJ1dHRvbiB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogRGVmYXVsdCB1bnNlbGVjdGVkIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxldmVsLWJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhkODM0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5yaWdodC1pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG4gIC5zYmJ0bntcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 14027:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editpreferences/editpreferences.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"> <ion-icon name=\"chevron-back-outline\" style=\"margin-top: 5px;\" routerLink=\"/tabs/tabs/tab1\"></ion-icon></ion-col>\n\n        <ion-col size=\"8\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n         \n          <!-- <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\" class=\"primary-color\"></ion-icon> \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:aliceblue\">\n\n  <div class=\"ion-padding-top\">\n    <!-- Category Section -->\n    <div *ngIf=\"!categorySelected\">\n      <h4>Select Preferred Course</h4>\n      <ion-row style=\"margin: 6px;\">\n        <ion-col size=\"6\" *ngFor=\"let item of category\">\n          <button class=\"level-button\" (click)=\"selectCategory(item)\">\n            {{ item.catname }}\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- Level Section -->\n    <div *ngIf=\"categorySelected && !levelSelected\">\n      <h4>Select Level</h4>\n      <ion-row style=\"margin: 6px;\">\n        <ion-col size=\"4\" *ngFor=\"let item of clevel\">\n          <button class=\"level-button\" (click)=\"selectLevel(item.category_id)\">\n            {{ item.name }}\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n<!-- Subcourse Section -->\n<div *ngIf=\"levelSelected && categorySelected\">\n  <h4>Select Subcourse</h4>\n  \n  <div>\n    <ion-row style=\"margin: 6px;\">\n      <!-- Display the first few items with \"Show More\" functionality -->\n      <div style=\"margin: 4px;\" *ngFor=\"let item of clist.slice(0, showMore ? clist.length : initialDisplayCount); let i = index\">\n        <button \n          class=\"level-button\" \n          [ngClass]=\"{'selected': isSelected(item)}\" \n          (click)=\"toggleSelection(item)\"\n          [style.background-color]=\"isSelected(item) ? '#88d834' : ''\">\n          {{ item.name }}\n          <ion-icon [name]=\"isSelected(item) ? 'checkmark-outline' : 'add-outline'\" class=\"right-icon\"></ion-icon>\n        </button>\n      </div>\n    </ion-row>\n\n    <!-- \"Show More\" button -->\n    <ion-row *ngIf=\"clist.length > initialDisplayCount && !showMore\" style=\"margin: 6px;\">\n      <ion-col size=\"12\" class=\"text-right\">\n        <ion-button fill=\"clear\" shape=\"round\" (click)=\"showMore = true\">\n          Show More\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-button expand=\"block\" shape=\"round\" class=\"sbbtn\" (click)=\"submit()\">Submit</ion-button>\n</div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" tab=\"tab2\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px\"></ion-icon>\n      <ion-label>Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px\"></ion-icon>\n      <ion-label>Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px\"></ion-icon>\n      <ion-label>Assistant</ion-label>\n    </ion-tab-button>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editpreferences_editpreferences_module_ts.js.map