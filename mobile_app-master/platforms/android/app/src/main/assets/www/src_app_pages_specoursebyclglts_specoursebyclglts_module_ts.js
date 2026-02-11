(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_specoursebyclglts_specoursebyclglts_module_ts"],{

/***/ 73041:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecoursebyclgltsPageRoutingModule": () => (/* binding */ SpecoursebyclgltsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specoursebyclglts.page */ 3285);




const routes = [
    {
        path: '',
        component: _specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_0__.SpecoursebyclgltsPage
    }
];
let SpecoursebyclgltsPageRoutingModule = class SpecoursebyclgltsPageRoutingModule {
};
SpecoursebyclgltsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecoursebyclgltsPageRoutingModule);



/***/ }),

/***/ 36865:
/*!*********************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecoursebyclgltsPageModule": () => (/* binding */ SpecoursebyclgltsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _specoursebyclglts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specoursebyclglts-routing.module */ 73041);
/* harmony import */ var _specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specoursebyclglts.page */ 3285);







let SpecoursebyclgltsPageModule = class SpecoursebyclgltsPageModule {
};
SpecoursebyclgltsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _specoursebyclglts_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecoursebyclgltsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_1__.SpecoursebyclgltsPage]
    })
], SpecoursebyclgltsPageModule);



/***/ }),

/***/ 3285:
/*!*******************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecoursebyclgltsPage": () => (/* binding */ SpecoursebyclgltsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_specoursebyclglts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./specoursebyclglts.page.html */ 32020);
/* harmony import */ var _specoursebyclglts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specoursebyclglts.page.scss */ 8548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);












let SpecoursebyclgltsPage = class SpecoursebyclgltsPage {
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
    this.rank = [];
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

    this.courseid = this.activatedRoute.snapshot.paramMap.get('id');
    this.getclglts();
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
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);

      if (responseData && responseData.length > 0) {
        this.loginuserId = responseData[0].id;
        this.username = responseData[0].f_name;
        this.email = responseData[0].email;
        this.phone = responseData[0].phone;
        this.token = responseData[0].token;
      } else {
        console.log('No user data found in response_data.');
      }
    } else {
      console.log('No response_data found in local storage.');
    }
  }

  getclglts() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loader = yield _this.loadingController.create({
        message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
      `,
        spinner: null,
        translucent: true,
        cssClass: 'custom-loading'
      });
      _this.isLoading = true;
      yield loader.present();

      _this.service.specoursebyclglist(_this.courseid).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          // Store the response data
          _this.clgltsArry = res.data;
          _this.isLoading = false; // Set loading flag to false once data is fetched

          yield loader.dismiss();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error('Error fetching college list:', err);
          _this.isLoading = false; // Set loading flag to false in case of error

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
        _this9.userId = _this9.loginuserId;
        const res = yield _this9.service.getbrochure(_this9.collegeId, _this9.userId).toPromise();
        console.log(_this9.collegeId);
        console.log(_this9.userId);

        if (res.response_code === '200') {
          yield _this9.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this9.showAlert('Error', 'Brochure not available');
        } else {
          yield _this9.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
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
      if (!_this11.loginuserId) {
        _this11.presentSignInModal();

        return;
      } else {
        yield _this11.predictadmission(id, CatId, subCatName);
      }
    })();
  }

};

SpecoursebyclgltsPage.ctorParameters = () => [{
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

SpecoursebyclgltsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-specoursebyclglts',
  template: _raw_loader_specoursebyclglts_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_specoursebyclglts_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SpecoursebyclgltsPage);


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

/***/ 8548:
/*!*********************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.size_set {\n  border-radius: 20px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin: 0rem;\n  margin-top: 2.5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;\n  box-shadow: none;\n}\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n}\n.tit_set {\n  font-size: 0.9rem;\n  color: black;\n  font-weight: 500;\n  padding-top: 14px;\n  margin-top: 20px;\n}\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -14%;\n  border: 1px solid #c9c9c9;\n}\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid #746ac0;\n}\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n.img_alignn {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 20px;\n  top: 14px;\n  border: 1px solid #746ac0;\n  width: 26px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNvdXJzZWJ5Y2xnbHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUlBO0VBR0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsc0RBQUE7RUFFRSxnQkFBQTtBQUpKO0FBS0U7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVBGO0FBU0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVNBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFOQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBTko7QUFTQztFQUNLLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBTk47QUFTRTtFQUNFLHlCQUFBO0VBQTJCLDBDQUFBO0FBTC9CO0FBUUU7RUFDRSxXQUFBO0VBQWEsaURBQUE7QUFKakI7QUFRRTtFQUNFLFlBQUE7RUFDRCw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0csU0FBQTtFQUNILHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSCIsImZpbGUiOiJzcGVjb3Vyc2VieWNsZ2x0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9ue1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGlvbi1iYWRnZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC01JTtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNhcmQgYWxpZ25cclxuXHJcbi5zaXplX3NldHtcclxuICAvLyAgIGhlaWdodDogMjY3cHg7XHJcbiAgLy8gd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAtLW92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxuICBjb250YWluOiB1bnNldDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMTJweDtcclxuICBtYXJnaW46IDByZW07XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiBcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4IWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAvLyAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAvLyAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xyXG4gICAgLy8gLS1wYWRkaW5nLWVuZDogMS41ZW07XHJcbiAgfVxyXG59XHJcbiBcclxuLnRpdF9zZXR7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy10b3A6IDE0cHg7IFxyXG4gIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG4uc2V0X2JvdG17XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjNmM2YzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWVze1xyXG5mb250LXNpemU6IDE2cHg7XHJcbm1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi5pbWdfYWxpZ257XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB0b3A6IC0xNCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xyXG4gIH1cclxuXHJcbiAuYm9va01hcmt7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgdG9wOiA2JTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc0NmFjMDtcclxuICB9XHJcblxyXG4gIC5pbWdfYWxpZ25uLnNob3J0bGlzdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHNob3J0bGlzdGVkIGl0ZW0gKi9cclxuICB9XHJcbiAgXHJcbiAgaW9uLWljb24uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBibHVlOyAvKiBDb2xvciBmb3IgYWN0aXZlIGJvb2ttYXJrICh3aGVuIHNob3J0bGlzdGVkKSAqL1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaW1nX2FsaWdubntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICByaWdodDogMjBweDtcclxuICAgICAgdG9wOiAxNHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xyXG4gICB3aWR0aDogMjZweDtcclxuICAgaGVpZ2h0OiAyNnB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 32020:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/specoursebyclglts/specoursebyclglts.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/specourselist\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n\n<ion-content style=\"--background: aliceblue;\">\n  <div>\n    <h5 style=\"margin:10px\">Trending Specialization Colleges</h5>\n\n    \n    <div *ngIf=\"isLoading; else dataContent\">\n      <p style=\"text-align: center;\">Loading specialization colleges, please wait...</p>\n    </div>\n\n    <ng-template #dataContent>\n      \n      <div class=\"m10\" *ngIf=\"clgltsArry && clgltsArry.length > 0; else noData\">\n        <div *ngFor=\"let clg of clgltsArry\" lines=\"none\">\n          <ion-card class=\"size_set\">\n            <img class=\"img_align\" [src]=\"clg.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            \n            <p class=\"tit_set\" (click)=\"getclgid(clg.id)\">{{ clg.title }}</p>\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{ clg.city }}\n            </p>\n            <p class=\"courserate\">\n              <span>Total Course - {{ clg.courseCount }}</span>\n            </p>\n            <p class=\"fees\" *ngIf=\"clg.total_fees\">Annual Fees (INR): - {{ clg.total_fees }}</p>\n\n            <ion-row>\n             \n              <div class=\"img_alignn\" \n              [ngClass]=\"{'shortlisted': isShortlisted(clg.id)}\"\n              (click)=\"toggleShortlist(clg.id)\">\n           <ion-icon [name]=\"isShortlisted(clg.id) ? 'bookmark' : 'bookmark-outline'\"\n                     [class.active]=\"isShortlisted(clg.id)\">\n           </ion-icon>\n         </div>\n\n              <ion-button (click)=\"brochure(clg.id)\">Brochure</ion-button>\n              <ion-button (click)=\"clgpredict(clg.id, clg.CatId, clg.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </ion-row>\n          </ion-card>\n        </div>\n      </div>\n\n      <ng-template #noData>\n        <p style=\"text-align:center; margin:20px;\">Data not found</p>\n      </ng-template>\n    </ng-template>\n  </div>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specoursebyclglts_specoursebyclglts_module_ts.js.map