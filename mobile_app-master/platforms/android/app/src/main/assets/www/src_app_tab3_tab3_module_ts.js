(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_tab3_tab3_module_ts"],{

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

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 67441);














let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/shortlist.service */ 17098);












let Tab3Page = class Tab3Page {
  constructor(router, service, activatedRoute, toastController, modalController, formBuilder, loadingController, alertController, shortlistService) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.toastController = toastController;
    this.modalController = modalController;
    this.formBuilder = formBuilder;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.formSubmitted = false;
    this.fewclgArr = [];
    this.coursesArray = [];
    this.isModalOpen = false;
    this.stateltsArry = [];
    this.cityltsArry = [];
    this.lastFiveYears = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.checkUserData();

      _this.admissionForm = _this.formBuilder.group({
        StudentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        passingstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        passingYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        interestedCourses: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]{10}$')]]
      });
      const coursedata = localStorage.getItem('courses');

      if (coursedata) {
        _this.coursesArray = JSON.parse(coursedata);
        _this.courseId = _this.coursesArray[0].id;
        _this.coursename = _this.coursesArray[0].name;
        _this.categoryId = _this.coursesArray[0].parent_category;

        _this.feuturedclg();

        _this.getformscitylist();

        _this.getformstatelist();

        _this.populateUserData();
      }

      const currentYear = new Date().getFullYear();

      for (let i = 0; i < 10; i++) {
        _this.lastFiveYears.push(currentYear - i);
      }
    })();
  }

  ionViewWillEnter() {
    // Check for user data when the view is about to enter
    this.checkUserData();
  }

  populateUserData() {
    this.checkUserData(); // Populate form fields if user data exists

    if (this.loginuserId) {
      this.admissionForm.patchValue({
        StudentName: this.username,
        email: this.email,
        mobileNumber: this.phone
      });
    }
  }

  checkUserData() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.id) {
        _this2.loginuserId = user.id;
        _this2.username = user.name;
        _this2.email = user.email;
        _this2.phone = user.phone;
      } else {
        const storedResponseData = localStorage.getItem('response_data');

        if (storedResponseData) {
          const responseData = JSON.parse(storedResponseData);

          if (responseData && responseData.length > 0) {
            _this2.loginuserId = responseData[0].id;
            _this2.username = responseData[0].f_name;
            _this2.email = responseData[0].email;
            _this2.phone = responseData[0].phone;
            _this2.token = responseData[0].token;
          } else {
            yield _this2.checkuser();
          }
        } else {
          yield _this2.checkuser();
        }
      }
    })();
  }

  checkuser() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
        component: _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__.PopuplogsignPage,
        componentProps: {
          fromTab: 'tab3'
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data && data.loggedIn) {
        _this3.setUserData(data.user);
      }
    })();
  }

  setUserData(user) {
    this.loginuserId = user.id;
    this.username = user.name;
    this.email = user.email;
    this.phone = user.phone;
    localStorage.setItem('user', JSON.stringify(user));
  }

  savconsellingform() {
    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      return;
    }

    if (this.admissionForm.valid) {
      this.service.ConsellingForm(this.admissionForm.controls.StudentName.value, this.admissionForm.controls.state.value, this.admissionForm.controls.city.value, this.admissionForm.controls.passingstatus.value, this.admissionForm.controls.passingYear.value, this.admissionForm.controls.interestedCourses.value, this.admissionForm.controls.mobileNumber.value).subscribe(response => {
        this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');
        this.admissionForm.reset();
        this.setOpen(false);
      }, error => {
        this.showAlert('failed!', 'Submission failed. Please try again.');
      });
    }
  }

  close() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss();
    })();
  }

  getformstatelist() {
    this.service.statelist().subscribe(res => {
      this.stateltsArry = res.res_data;
    });
  }

  getformscitylist() {
    this.service.citylist(this.stateId).subscribe(res => {
      this.cityltsArry = res.res_data;
    });
  }

  onStateChange(stateId) {
    this.service.citylist(stateId).subscribe(res => {
      this.cityltsArry = res.res_data;
    });
  }

  feuturedclg() {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loader = yield _this5.loadingController.create({
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

      _this5.service.getfeatureclg(_this5.categoryId).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          _this5.fewclgArr = res.data;
          yield loader.dismiss();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error('Error fetching featured colleges:', err);
          yield loader.dismiss();
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  toggleShortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        if (_this6.shortlistService.isShortlisted(collegeId)) {
          yield _this6.removeclgshortlist(collegeId);
        } else {
          yield _this6.addclgshortlist(collegeId);
        }
      } catch (error) {
        console.error('Error toggling shortlist:', error);
      }
    })();
  }

  addclgshortlist(collegeId) {
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
        const res = yield _this7.service.addclgshortlist(_this7.loginuserId, collegeId, '1', 'insert').toPromise();

        if (res.response_code === '200') {
          _this7.shortlistService.addToShortlist(collegeId);

          yield _this7.showAlert('Success', 'College added to shortlist successfully');
        } else {
          yield _this7.showAlert('Error', 'Failed to add college to shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this7.showAlert('Error', 'An error occurred while adding to shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  removeclgshortlist(collegeId) {
    var _this8 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this8.loadingController.create({
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
        const res = yield _this8.service.addclgshortlist(_this8.loginuserId, collegeId, '0', 'update').toPromise();

        if (res.response_code === '200') {
          _this8.shortlistService.removeFromShortlist(collegeId);

          yield _this8.showAlert('Success', 'College removed from shortlist successfully');
        } else {
          yield _this8.showAlert('Error', 'Failed to remove college from shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this8.showAlert('Error', 'An error occurred while removing from shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  isShortlisted(collegeId) {
    return this.shortlistService.isShortlisted(collegeId);
  }

  showAlert(header, message) {
    var _this9 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this9.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  checkValidInputData(event, field) {
    if (field === 'studentName') {
      const pattern = /^[a-zA-Z \'-]*$/;

      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
      }
    } else if (field === 'mobileNumber') {
      const pattern = /^[0-9]*$/;

      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }

      if (event.target.value.length > 10) {
        event.target.value = event.target.value.slice(0, 10);
      }
    }
  }

  brochure(collegeId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this10.userId = _this10.loginuserId;
        const res = yield _this10.service.getbrochure(collegeId, _this10.userId).toPromise();

        if (res.response_code === '200') {
          yield _this10.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this10.showAlert('Error', 'Brochure not available');
        } else {
          yield _this10.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        yield _this10.showAlert('Error', 'An error occurred while sending the brochure.');
      }
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this11.loginuserId) {
        yield _this11.checkuser();
        return;
      }

      yield _this11.predictadmission(id, CatId, subCatName);
    })();
  }

  predictadmission(id, CatId, subCatName) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this12.modalController.create({
        component: _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_5__.PredictadmissionPage,
        componentProps: {
          id,
          CatId,
          subCatName
        }
      });
      return yield modal.present();
    })();
  }

  clgdetails(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  notification() {
    this.router.navigateByUrl('/notification');
  }

};

Tab3Page.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__.ShortlistService
}];

Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tab3',
  template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], Tab3Page);


/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".img {\n  position: absolute;\n  top: 23%;\n}\n\n.px-12 {\n  padding: 0 12px !important;\n}\n\n.py-12 {\n  padding: 12px 0 !important;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.headtxt {\n  font-weight: 500 !important;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.border-y {\n  margin-bottom: 14px;\n  padding: 0px 12px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n.setspn {\n  color: blue;\n}\n\n.setnotification {\n  width: 360px;\n  height: 370px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.star-icon {\n  color: #FFC107;\n}\n\n.HeadTxt {\n  margin-left: 12px;\n}\n\n.purlegrad {\n  padding-bottom: 2rem;\n  background-image: radial-gradient(circle farthest-corner at -14.3% -17.5%, rgba(245, 168, 168, 0.5) 4%, rgba(164, 168, 248, 0.5) 100.2%) !important;\n  border-radius: 14px !important;\n}\n\n.purlegrad p {\n  margin: 6px 0px;\n  align-items: center;\n  display: flex;\n}\n\n.rctxt {\n  margin-bottom: 0 !important;\n  font-size: 15px;\n  justify-content: center;\n  font-weight: 500;\n}\n\n.rctxt ion-icon {\n  border: 1px solid lightgray;\n  background: #fff;\n  padding: 8px;\n  font-size: 18px;\n  margin-left: 8px;\n  border-radius: 50px;\n  color: #8f8f8f;\n}\n\n.sctwo {\n  padding: 12px 12px 25px;\n}\n\n.sctwo p {\n  margin: 6px 0px;\n  align-items: center;\n  display: flex;\n}\n\n.thirdsec {\n  border-radius: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  padding: 0.5rem 0.5rem 2rem;\n  margin-bottom: 2rem;\n}\n\n.thirdsec p {\n  margin: 6px 0px;\n  align-items: center;\n  display: flex;\n}\n\n.imgtxt {\n  display: flex;\n  align-items: center;\n}\n\n.imgtxt img {\n  width: 25px;\n  margin-right: 8px;\n}\n\n.my-10 {\n  margin: 10px 0px;\n}\n\n.blutxt {\n  color: #0083dc;\n}\n\nion-segment-button.ion-activated {\n  --background: #3880ff;\n  /* Active background color */\n  --color: #fff;\n  /* Active text color */\n}\n\nion-segment-button {\n  --background: #f4f5f8;\n  /* Default background color */\n  --color: #000;\n  /* Default text color */\n  --indicator-color: #3880ff;\n  /* Indicator color when active */\n}\n\nion-segment-button .star-icon {\n  color: inherit;\n  /* Ensure the icon color inherits from the text color */\n}\n\n.seg-btn.active {\n  background-color: #88d834;\n  /* Change to your desired active background color */\n  color: #fff;\n  /* Change to your desired active text color */\n}\n\n.conselling {\n  background: rgba(165, 88, 236, 0.22);\n  border-radius: 21px;\n  margin: 1.5rem 0;\n  padding: 10px;\n}\n\n.conselling .setbtn {\n  text-align: center;\n}\n\n.conselling .setbtn ion-button {\n  --background: #673AB7;\n  --border-radius: 50px;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.conselling img {\n  border-radius: 10px;\n}\n\n.conselling h3 {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.conselling ul {\n  padding-left: 20px;\n  margin: 10px 0px 16px;\n}\n\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n}\n\n.spna {\n  color: var(--ion-color-secondary);\n  border-right: 1px solid lightgrey;\n  font-size: 16px;\n  padding-right: 6px;\n  margin-right: 6px;\n}\n\n.size_set {\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.8) 0px 8px 25px;\n}\n\n.modal-content {\n  padding: 20px;\n}\n\nion-modal {\n  --width: 90%;\n  --height: 90%;\n  --border-radius: 8px;\n}\n\n.modelhead {\n  padding: 16px 16px 0;\n}\n\n.modelhead ion-icon {\n  font-size: 25px;\n  margin-left: auto;\n  display: block;\n  margin-bottom: 6px;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.centbtn {\n  margin: auto;\n  display: block;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\n\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n/*# sourceMappingURL=data:application/json;base64,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dGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMyU7XHJcbn1cclxuXHJcblxyXG4ucHgtMTJ7XHJcbiAgICBwYWRkaW5nOiAwIDEycHghaW1wb3J0YW50O1xyXG59XHJcbi5weS0xMntcclxuICAgIHBhZGRpbmc6IDEycHggMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnB0LTEye1xyXG4gICAgcGFkZGluZy10b3A6MTJweDtcclxufVxyXG4uaGVhZHR4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLnNidHh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLm92cmFsbHJhdGluZ3tcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAucCwgLnN0YXJyYXRleHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYmx1dHh0e1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gICAgLnN0YXJyYXRle1xyXG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJ0dmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnZlcnR4dHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxufVxyXG4ucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbi5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5saWtlRGlze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAubGlrZXtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgICAuZGlzbGlrZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcbi5tLTEye1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG59XHJcbi5oaWdobGlndGJveHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAuYWxpY2VibHVle1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICAgIC5waW5rbGlnaHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZWNlZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnJhdGVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG59XHJcbi5ib3JkZXIteXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zZXRzcG57XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4uc2V0bm90aWZpY2F0aW9ue1xyXG4gICAgd2lkdGg6MzYwcHg7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgLnNldHRpdGxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNhNGFmZmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjojMDA4M2RjO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3Rhci1pY29uIHtcclxuICAgIGNvbG9yOiAjRkZDMTA3OyBcclxuICB9XHJcbiAgXHJcbiAgLkhlYWRUeHR7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMnB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuLnB1cmxlZ3JhZHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgLTE0LjMlIC0xNy41JSwgcmdiYSgyNDUsIDE2OCwgMTY4LCAwLjUpIDQlLCByZ2JhKDE2NCwgMTY4LCAyNDgsIDAuNSkgMTAwLjIlKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IWltcG9ydGFudDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufVxyXG5cclxuLnJjdHh0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5pb24taWNvbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjOGY4ZjhmO1xyXG4gfVxyXG59XHJcbi5zY3R3b3tcclxuICAgIHBhZGRpbmc6IDEycHggMTJweCAyNXB4O1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDZweCAwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGhpcmRzZWN7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuLmltZ3R4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAvLyBmbGV4LXNocmluazogMDtcclxuICAgICAgLy8gIGhlaWdodDogMjVweDtcclxuICAgICAgICAvL21hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcbn1cclxuLm15LTEwe1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4uYmx1dHh0e1xyXG4gICAgY29sb3I6ICMwMDgzZGM7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uLmlvbi1hY3RpdmF0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmOyAvKiBBY3RpdmUgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgLS1jb2xvcjogI2ZmZjsgLyogQWN0aXZlIHRleHQgY29sb3IgKi9cclxuICB9XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjVmODsgLyogRGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgICAtLWNvbG9yOiAjMDAwOyAvKiBEZWZhdWx0IHRleHQgY29sb3IgKi9cclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjMzg4MGZmOyAvKiBJbmRpY2F0b3IgY29sb3Igd2hlbiBhY3RpdmUgKi9cclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIC5zdGFyLWljb24ge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIEVuc3VyZSB0aGUgaWNvbiBjb2xvciBpbmhlcml0cyBmcm9tIHRoZSB0ZXh0IGNvbG9yICovXHJcbiAgfSBcclxuICAuc2VnLWJ0bi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojODhkODM0OyAvKiBDaGFuZ2UgdG8geW91ciBkZXNpcmVkIGFjdGl2ZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgICBjb2xvcjogI2ZmZjsgLyogQ2hhbmdlIHRvIHlvdXIgZGVzaXJlZCBhY3RpdmUgdGV4dCBjb2xvciAqL1xyXG4gIH1cclxuXHJcblxyXG5cclxuLy8gICBjb25zZWxsaW5nIHNlY3Rpb25cclxuXHJcbi5jb25zZWxsaW5ne1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE2NSA4OCAyMzYgLyAyMiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLnNldGJ0bntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNjczQUI3O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib29tYXJre1xyXG4gICAgLS1jb2xvcjogZ3JheTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjY2ZjZmNmO1xyXG59XHJcbi5zcG5he1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcblxyXG4uc2l6ZV9zZXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGNvbnRhaW46IHVuc2V0O1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC44KSAwcHggOHB4IDI1cHg7XHJcbn1cclxuXHJcbi8vIC5zaG9ydGxpc3RlZCBpb24taWNvbiB7XHJcbi8vICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50OyAvKiBPcHRpb25hbCAtIHRvIGVuc3VyZSBpY29uIGlzIGJsdWUgKi9cclxuLy8gICB9XHJcblxyXG5cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbW9kYWwge1xyXG4gICAgLS13aWR0aDogOTAlO1xyXG4gICAgLS1oZWlnaHQ6IDkwJTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGVsaGVhZHtcclxuICAgIHBhZGRpbmc6MTZweCAxNnB4IDAgO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICBcclxuICAgIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcclxuICAgICAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC53LTEwMHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRidG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG5cclxuICAuaW1nX2FsaWdubi5zaG9ydGxpc3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzaG9ydGxpc3RlZCBpdGVtICovXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pY29uLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmx1ZTsgLyogQ29sb3IgZm9yIGFjdGl2ZSBib29rbWFyayAod2hlbiBzaG9ydGxpc3RlZCkgKi9cclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"9\">\r\n          <ion-buttons class=\"primaryhead\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\r\n\r\n\r\n\r\n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!-- section-1 -->\r\n  <div class=\"m10\">\r\n\r\n    <div *ngIf=\"fewclgArr && fewclgArr.length  > 0; else noDataTemplate\">\r\n\r\n\r\n\r\n      <h4> Featured Colleges</h4>\r\n      <div class=\"slide_set\" *ngFor=\"let item of fewclgArr\">\r\n\r\n        <ion-card class=\"size_set m0\" style=\"margin-bottom: 12px !important;\">\r\n          <div class=\"imgHead\">\r\n            <div>\r\n              <p class=\"tit_set\" (click)=\"clgdetails(item.id)\">{{ item.title }}</p>\r\n              <p class=\"set_botm\">\r\n                <ion-icon name=\"location-outline\"></ion-icon>{{ item.city }}\r\n              </p>\r\n            </div>\r\n            <img class=\"img_align\" [src]=\"item.image || '../../assets/clg_img/no_image2.jpg'\" alt=\"College logo\">\r\n          </div>\r\n          <p>Courses Offered</p>\r\n          <p><span class=\"spna\">{{ item.totalCourseCount }} courses</span>\r\n            <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon> {{ item.rating\r\n              }}</span>\r\n          </p>\r\n          <ion-row class=\"footerpart\">\r\n\r\n\r\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\"\r\n              (click)=\"toggleShortlist(item.id)\">\r\n              <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\r\n                [class.active]=\"isShortlisted(item.id)\">\r\n              </ion-icon>\r\n            </ion-button>\r\n\r\n\r\n            <ion-button shape=\"round\" (click)=\"brochure(item.id)\">\r\n              Brochure\r\n            </ion-button>\r\n            <ion-button shape=\"round\" (click)=\"clgpredict(item.id, item.CatId, item.subCatName)\">\r\n              Predict Admission\r\n            </ion-button>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #noDataTemplate>\r\n      <p>No colleges found.</p>\r\n    </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"conselling\">\r\n      <ion-row>\r\n        <ion-col size=\"8\" class=\"selfcenter\">\r\n          <h3>Confused about which college or exam to opt for?</h3>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <img src=\"../../assets/clg_icon/noimageanu.jpg\">\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ul>\r\n        <li>Chat with our counselor</li>\r\n        <li>Get your personalised list of colleges & exam matching your preferrences</li>\r\n      </ul>\r\n      <div class=\"setbtn\">\r\n        <ion-button (click)=\"openModal()\">Get Free Counselling</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <ion-modal [isOpen]=\"isModalOpen\">\r\n    <ng-template>\r\n\r\n      <ion-content>\r\n        <div class=\"matfield\">\r\n          <div class=\"modelhead\">\r\n            <ion-icon class=\"iconclose\" name=\"close-outline\" (click)=\"setOpen(false)\"></ion-icon>\r\n            <h2 style=\"text-align: center;\">Counselling Form</h2>\r\n\r\n          </div>\r\n\r\n          <div class=\"modal-content\" style=\"overflow: hidden;\">\r\n\r\n            <form [formGroup]=\"admissionForm\">\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>Student Name</mat-label>\r\n                <input matInput placeholder=\"Enter student name\" formControlName=\"StudentName\"\r\n                  (input)=\"checkValidInputData($event, 'studentName')\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>State</mat-label>\r\n                <mat-select formControlName=\"state\" (selectionChange)=\"onStateChange($event.value)\">\r\n                  <mat-option *ngFor=\"let state of stateltsArry\" [value]=\"state.id\">{{ state.statename }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>City</mat-label>\r\n                <mat-select formControlName=\"city\">\r\n                  <mat-option *ngFor=\"let city of cityltsArry\" [value]=\"city.id\">{{ city.city }}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              \r\n\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>Pursuing / Completed Course</mat-label>\r\n                \r\n                <input matInput placeholder=\"Enter Course Name\" formControlName=\"passingstatus\">\r\n\r\n              </mat-form-field>\r\n\r\n\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>Passing Year</mat-label>\r\n                <mat-select placeholder=\"Enter Passing year\" formControlName=\"passingYear\">\r\n                  <!-- <mat-option ngFor=\"let item of lastFiveYears\">{{item}}</mat-option> -->\r\n                  <mat-option *ngFor=\"let visaregions of lastFiveYears\" [value]=\"visaregions\">\r\n                    {{visaregions}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>Interested Courses</mat-label>\r\n                <input matInput placeholder=\"Enter Course name\" formControlName=\"interestedCourses\"\r\n                  (input)=\"checkValidInputData($event, 'studentName')\">\r\n              </mat-form-field>\r\n\r\n\r\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n                <mat-label>Contact Number</mat-label>\r\n                <input matInput placeholder=\"Enter contact number\" formControlName=\"mobileNumber\"\r\n                  (input)=\"checkValidInputData($event, 'mobileNumber')\">\r\n              </mat-form-field>\r\n\r\n              <button mat-raised-button color=\"primary\" class=\"px-12 centbtn mt-4 mb-10\" type=\"submit\"\r\n                (click)=\"savconsellingform()\">Submit</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map