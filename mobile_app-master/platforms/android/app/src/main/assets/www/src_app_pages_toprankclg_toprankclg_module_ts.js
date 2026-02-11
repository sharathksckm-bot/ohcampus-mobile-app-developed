(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_toprankclg_toprankclg_module_ts"],{

/***/ 49885:
/*!***************************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToprankclgPageRoutingModule": () => (/* binding */ ToprankclgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _toprankclg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toprankclg.page */ 21775);




const routes = [
    {
        path: '',
        component: _toprankclg_page__WEBPACK_IMPORTED_MODULE_0__.ToprankclgPage
    }
];
let ToprankclgPageRoutingModule = class ToprankclgPageRoutingModule {
};
ToprankclgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToprankclgPageRoutingModule);



/***/ }),

/***/ 89777:
/*!*******************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToprankclgPageModule": () => (/* binding */ ToprankclgPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _toprankclg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toprankclg-routing.module */ 49885);
/* harmony import */ var _toprankclg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toprankclg.page */ 21775);







let ToprankclgPageModule = class ToprankclgPageModule {
};
ToprankclgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _toprankclg_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToprankclgPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_toprankclg_page__WEBPACK_IMPORTED_MODULE_1__.ToprankclgPage]
    })
], ToprankclgPageModule);



/***/ }),

/***/ 21775:
/*!*****************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToprankclgPage": () => (/* binding */ ToprankclgPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_toprankclg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./toprankclg.page.html */ 67211);
/* harmony import */ var _toprankclg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toprankclg.page.scss */ 84229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);












let ToprankclgPage = class ToprankclgPage {
  constructor(service, activatedRoute, router, loadingController, platform, modalController, alertController, shortlistService) {
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.isLoading = true;
    this.trnkclgArry = [];
  }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    const param = this.activatedRoute.snapshot.params;
    console.log(param);

    if (param) {
      const coursetenmp = param.id;
      this.crsename = param.name;
      localStorage.getItem('courses');
      this.coursesArray = JSON.parse(localStorage.getItem('courses'));
      console.log(this.coursesArray[0].id);
      this.courseId = this.coursesArray[0].id;
      console.log(this.courseId);
      this.catid = JSON.parse(localStorage.getItem('catID'));
    }

    this.gettoprnkclg();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }
  }

  getResponseDataFromLocalStorage() {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
      console.log(this.userData);
      this.email = this.userData.email;
      this.username = this.userData.displayName;
      this.loginuserId = this.userData.userId;
      console.log('google user id:', this.loginuserId);
    } else {
      console.log('No google user information found in local storage.');
    }
  }

  gettoprnkclg() {
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
        cssClass: 'custom-loading' // Custom class for additional styling

      });
      yield loader.present();
      _this.isLoading = true;
      _this.id = _this.courseId;

      _this.service.gettoprankclg(_this.id).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          console.log('Response received:', res);
          _this.trnkclgArry = res.collegelist || []; // Ensure it's an array even if null

          _this.isLoading = false; // Loading complete

          yield loader.dismiss();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error('Error fetching top-ranked colleges:', err);
          _this.trnkclgArry = []; // Reset array on error

          _this.isLoading = false; // Loading complete

          yield loader.dismiss();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  predictadmission(id, CatId, subCatName) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this2.modalController.create({
        component: _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__.PredictadmissionPage,
        componentProps: {
          id,
          CatId,
          subCatName
        }
      });
      return yield modal.present();
    })();
  }

  dismissModal() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this4.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    this.isBookmarked = !this.isBookmarked;
  }

  toggleShortlist(collegeId) {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this5.loginuserId) {
        _this5.presentSignInModal();

        return;
      }

      try {
        if (_this5.shortlistService.isShortlisted(collegeId)) {
          yield _this5.removeclgshortlist(collegeId);
        } else {
          yield _this5.addclgshortlist(collegeId);
        }
      } catch (error) {
        console.error('Error toggling shortlist:', error);
      }
    })();
  }

  addclgshortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this6.loadingController.create({
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
      yield loading.present();

      try {
        const res = yield _this6.service.addclgshortlist(_this6.loginuserId, collegeId, '1', 'insert').toPromise();

        if (res.response_code === '200') {
          _this6.shortlistService.addToShortlist(collegeId);

          yield _this6.showAlert('Success', 'College added to shortlist successfully');
        } else {
          yield _this6.showAlert('Error', 'Failed to add college to shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this6.showAlert('Error', 'An error occurred while adding to shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  removeclgshortlist(collegeId) {
    var _this7 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this7.loadingController.create({
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
      yield loading.present();

      try {
        const res = yield _this7.service.addclgshortlist(_this7.loginuserId, collegeId, '0', 'update').toPromise();

        if (res.response_code === '200') {
          _this7.shortlistService.removeFromShortlist(collegeId);

          yield _this7.showAlert('Success', 'College removed from shortlist successfully');
        } else {
          yield _this7.showAlert('Error', 'Failed to remove college from shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this7.showAlert('Error', 'An error occurred while removing from shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  isShortlisted(collegeId) {
    return this.shortlistService.isShortlisted(collegeId);
  }

  Alert(header, message) {
    var _this8 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this8.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  brochure(collegeId) {
    var _this9 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this9.loginuserId) {
        _this9.presentSignInModal();

        return;
      }

      try {
        _this9.collegeId = collegeId;
        _this9.userId = _this9.loginuserId; // Call your service method to get the brochure

        const res = yield _this9.service.getbrochure(_this9.collegeId, _this9.userId).toPromise();
        console.log(_this9.collegeId);
        console.log(_this9.userId); // Handle different response codes

        if (res.response_code === '200') {
          yield _this9.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this9.showAlert('Error', 'Brochure not available');
        } else {
          yield _this9.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        // Handle errors from API call or any unexpected errors
        yield _this9.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this10.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.token = localStorage.getItem('token');
      if (!_this11.loginuserId) {
        _this11.presentSignInModal();

        return;
      } else {
        yield _this11.predictadmission(id, CatId, subCatName);
      }
    })();
  }

};

ToprankclgPage.ctorParameters = () => [{
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__.ShortlistService
}];

ToprankclgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-toprankclg',
  template: _raw_loader_toprankclg_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_toprankclg_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ToprankclgPage);


/***/ }),

/***/ 17098:
/*!***********************************************!*\
  !*** ./src/app/services/shortlist.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortlistService": () => (/* binding */ ShortlistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ShortlistService {
//   private shortlistedColleges = new Set<string>(); // Maintain a set of shortlisted colleges
//   private shortlistSubject = new BehaviorSubject<Set<string>>(this.shortlistedColleges);
//   // Observable to track changes to the shortlist
//   shortlist$ = this.shortlistSubject.asObservable();
//   // Add college to shortlist
//   addToShortlist(collegeId: string): void {
//     this.shortlistedColleges.add(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
//   // Remove college from shortlist
//   removeFromShortlist(collegeId: string): void {
//     this.shortlistedColleges.delete(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
//   // Check if a college is shortlisted
//   isShortlisted(collegeId: string): boolean {
//     return this.shortlistedColleges.has(collegeId);
//   }
//   // Set initial shortlist (e.g., from API response)
//   setInitialShortlist(colleges: string[]): void {
//     this.shortlistedColleges = new Set(colleges);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
// }


let ShortlistService = class ShortlistService {
    constructor() {
        this.shortlistedColleges = new Set(); // Maintain a set of shortlisted colleges
        this.shortlistSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.shortlistedColleges);
        this.shortlist$ = this.shortlistSubject.asObservable();
        this.loadShortlistedColleges(); // Load shortlist from localStorage on initialization
    }
    addToShortlist(collegeId) {
        this.shortlistedColleges.add(collegeId);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    removeFromShortlist(collegeId) {
        this.shortlistedColleges.delete(collegeId);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    isShortlisted(collegeId) {
        return this.shortlistedColleges.has(collegeId);
    }
    setInitialShortlist(colleges) {
        this.shortlistedColleges = new Set(colleges);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    saveShortlistedColleges() {
        const collegeIds = Array.from(this.shortlistedColleges);
        localStorage.setItem('shortlistedColleges', JSON.stringify(collegeIds));
    }
    loadShortlistedColleges() {
        const storedColleges = localStorage.getItem('shortlistedColleges');
        if (storedColleges) {
            this.shortlistedColleges = new Set(JSON.parse(storedColleges));
            this.shortlistSubject.next(this.shortlistedColleges);
        }
    }
};
ShortlistService.ctorParameters = () => [];
ShortlistService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ShortlistService);



/***/ }),

/***/ 84229:
/*!*******************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.size_set {\n  border-radius: 20px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin: 0rem;\n  margin-top: 2.5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;\n  box-shadow: none;\n}\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n}\n.tit_set {\n  font-size: 0.9rem;\n  color: black;\n  font-weight: 500;\n  padding-top: 14px;\n  margin-top: 20px;\n}\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -14%;\n  border: 1px solid #c9c9c9;\n}\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n}\n.backicon {\n  margin-top: 5px;\n}\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n.img_alignn {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 20px;\n  top: 14px;\n  border: 1px solid #746ac0;\n  width: 26px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHJhbmtjbGcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFoR0Y7QUFpR0U7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQS9GTjtBQXFHQTtFQUdBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUVBLHNEQUFBO0VBRUUsZ0JBQUE7QUFyR0Y7QUFzR0E7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBcEdGO0FBMkdBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBeEdBO0FBMEdBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkdBO0FBMEdBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF2R0E7QUEwR0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUF2R0Y7QUE2R0E7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUExR0o7QUE4R0E7RUFDQSxlQUFBO0FBM0dBO0FBbUhBO0VBQ0UseUJBQUE7RUFBMkIsMENBQUE7QUEvRzdCO0FBa0hBO0VBQ0UsV0FBQTtFQUFhLGlEQUFBO0FBOUdmO0FBa0hBO0VBQ0UsWUFBQTtFQUNELDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDRyxTQUFBO0VBQ0gseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQS9HRCIsImZpbGUiOiJ0b3ByYW5rY2xnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAubm90aWZpY2F0aW9ue1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIGlvbi1iYWRnZXtcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgcmlnaHQ6IC01JTtcclxuLy8gICAgICAgICB0b3A6IC03cHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbi8vICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8vIGNhcmQgYWxpZ25cclxuXHJcblxyXG4vLyAvLyBjYXJkIGFsaWduXHJcblxyXG4vLyAuc2l6ZV9zZXR7XHJcbi8vICAgLy8gICBoZWlnaHQ6IDI2N3B4O1xyXG4vLyAgIC8vIHdpZHRoOiAzMDBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgLS1vdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbi8vICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbi8vICAgY29udGFpbjogdW5zZXQ7XHJcbi8vICAgcGFkZGluZzogMjBweCAyMHB4IDEycHg7XHJcbi8vICAgbWFyZ2luOiAwcmVtO1xyXG4vLyAgIG1hcmdpbi10b3A6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gXHJcbi8vICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCFpbXBvcnRhbnQ7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgIGlvbi1idXR0b257XHJcbi8vICAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgLy8gLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4vLyAgICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcclxuLy8gICAgIC8vIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4gXHJcbi8vIC50aXRfc2V0e1xyXG4vLyAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4vLyAgIGNvbG9yOiBibGFjaztcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIHBhZGRpbmctdG9wOiAxNHB4OyBcclxuLy8gICBtYXJnaW4tdG9wOjIwcHg7XHJcbi8vIH1cclxuLy8gLnNldF9ib3Rte1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2YzZjNmMztcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuZmVlc3tcclxuLy8gZm9udC1zaXplOiAxNnB4O1xyXG4vLyBtYXJnaW46NXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuaW1nX2FsaWdue1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBsZWZ0OiAyMHB4O1xyXG4vLyAgICAgdG9wOiAtMTQlO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcclxuLy8gICB9XHJcblxyXG4vLyAgLmJvb2tNYXJre1xyXG4vLyAgICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuLy8gICAgICAgcmlnaHQ6IDEwcHg7XHJcbi8vICAgICAgIHRvcDogNiU7XHJcbi8vICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NDZhYzA7XHJcbi8vICAgfVxyXG4vLyAgIC5iYWNraWNvbntcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICB9XHJcblxyXG5cclxuXHJcbi5ub3RpZmljYXRpb257XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW9uLWJhZGdle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtNSU7XHJcbiAgICAgIHRvcDogLTdweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHggNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gY2FyZCBhbGlnblxyXG5cclxuLnNpemVfc2V0e1xyXG4vLyAgIGhlaWdodDogMjY3cHg7XHJcbi8vIHdpZHRoOiAzMDBweDtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxud29yZC1zcGFjaW5nOiAycHg7XHJcbmJhY2tncm91bmQ6IHdoaXRlO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG4tLW92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxub3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbmNvbnRhaW46IHVuc2V0O1xyXG5wYWRkaW5nOiAyMHB4IDIwcHggMTJweDtcclxubWFyZ2luOiAwcmVtO1xyXG5tYXJnaW4tdG9wOiAyLjVyZW0gIWltcG9ydGFudDtcclxuXHJcbmJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHghaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG5pb24tYnV0dG9ue1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgLy8gLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIC8vIC0tcGFkZGluZy1zdGFydDogMS41ZW07XHJcbiAgLy8gLS1wYWRkaW5nLWVuZDogMS41ZW07XHJcbn1cclxufVxyXG5cclxuLnRpdF9zZXR7XHJcbmZvbnQtc2l6ZTogMC45cmVtO1xyXG5jb2xvcjogYmxhY2s7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbnBhZGRpbmctdG9wOiAxNHB4OyBcclxubWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5zZXRfYm90bXtcclxuYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjNmM2YzO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbnBhZGRpbmctYm90dG9tOiA2cHg7XHJcbm1hcmdpbjogMDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZlZXN7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubWFyZ2luOjVweDtcclxufVxyXG5cclxuLmltZ19hbGlnbntcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAtMTQlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5ib29rTWFya3tcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDYlO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzc0NmFjMDtcclxufVxyXG5cclxuLmJhY2tpY29ue1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi8vIGlvbi1pY29uLmFjdGl2ZSB7XHJcbi8vIGNvbG9yOiBibHVlOyAvKiBDaGFuZ2UgdGhpcyB0byB0aGUgZGVzaXJlZCBjb2xvciAqL1xyXG4vLyB9XHJcblxyXG5cclxuLmltZ19hbGlnbm4uc2hvcnRsaXN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHNob3J0bGlzdGVkIGl0ZW0gKi9cclxufVxyXG5cclxuaW9uLWljb24uYWN0aXZlIHtcclxuICBjb2xvcjogYmx1ZTsgLyogQ29sb3IgZm9yIGFjdGl2ZSBib29rbWFyayAod2hlbiBzaG9ydGxpc3RlZCkgKi9cclxufVxyXG5cclxuXHJcbi5pbWdfYWxpZ25ue1xyXG4gIHBhZGRpbmc6IDVweDtcclxuIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xyXG4gd2lkdGg6IDI2cHg7XHJcbiBoZWlnaHQ6IDI2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 67211:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/toprankclg/toprankclg.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n\n<ion-content style=\"--background: aliceblue;\">\n  <div>\n    <h5 style=\"margin:10px\">Top Ranking Colleges</h5>\n\n    <div *ngIf=\"!isLoading && trnkclgArry && trnkclgArry.length > 0; else noData\">\n      <div class=\"m10\">\n        <div *ngFor=\"let trnkclg of trnkclgArry\">\n          <ion-card class=\"size_set\">\n            <img class=\"img_align\" [src]=\"trnkclg.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            \n            <p class=\"tit_set\" (click)=\"getclgid(trnkclg.collegeid)\">{{ trnkclg.title }}</p>\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{ trnkclg.city }}. {{ trnkclg.accreditation }}\n            </p>\n            <p class=\"courserate\"> # {{ trnkclg.rank }} {{ trnkclg.rank_title }}</p>\n\n            <p class=\"courserate\" *ngIf=\"trnkclg.ratings > 0\">\n              <ion-icon name=\"star\" style=\"color: #e5b60c;\"></ion-icon>\n              <span> - {{ trnkclg.ratings }}</span>\n            </p>\n\n            <p class=\"fees\" *ngIf=\"trnkclg.total_fees\">Annual Fees (INR): - {{ trnkclg.total_fees }}</p>\n\n            <ion-row>\n              <div class=\"img_alignn\" \n                [ngClass]=\"{'shortlisted': isShortlisted(trnkclg.collegeid)}\"\n                (click)=\"toggleShortlist(trnkclg.collegeid)\">\n                <ion-icon [name]=\"isShortlisted(trnkclg.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                          [class.active]=\"isShortlisted(trnkclg.collegeid)\">\n                </ion-icon>\n              </div>\n\n              <ion-button (click)=\"brochure(trnkclg.collegeid)\">Brochure</ion-button>\n              <ion-button (click)=\"clgpredict(trnkclg.collegeid, trnkclg.CatId, trnkclg.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </ion-row>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    <!-- Show \"Data Not Found\" -->\n    <ng-template #noData>\n      <p style=\"text-align:center; margin:20px;\" *ngIf=\"!isLoading\">Data not found</p>\n    </ng-template>\n  </div>\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Home</ion-label>\n    </ion-tab-button> \n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Assistant</ion-label>\n    </ion-tab-button>\n  </ion-row>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_toprankclg_toprankclg_module_ts.js.map