(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_tab4_tab4_module_ts"],{

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

/***/ 35355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 32486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 35355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 28203);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ 35300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/shortlist.service */ 17098);

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ServiceService } from 'src/app/service.service';
// import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
// import { PopuplogsignPage } from '../pages/popuplogsign/popuplogsign.page';
// import { FormBuilder } from '@angular/forms';
// import { PredictadmissionPage } from '../pages/predictadmission/predictadmission.page';


 // @Component({
//   selector: 'app-tab4',
//   templateUrl: './tab4.page.html',
//   styleUrls: ['./tab4.page.scss'],
// })
// export class Tab4Page implements OnInit {
//   userId: any;
//   clglistarray: any[] = [];
//   loginuserId: any;
//   responseData: any;
//   collegeId: string;
//   userData: any;
//   email: any;
//   username: any;
//   active: string;
//   event: string;
//   phone: any;
//   token: any;
//   constructor(
//     public router: Router,
//     public service: ServiceService,
//     public activatedRoute: ActivatedRoute,
//     private toastController: ToastController,
//     private modalController: ModalController,
//     public formBuilder: FormBuilder,
//     public loadingController: LoadingController,
//     private alertController: AlertController,
//   ) { }
//   async ngOnInit() {
//      this.checkUserData();
//      this.shortlistclg();
//   }
//   clgdetails(collegeid: string) {
//     this.router.navigate(['/clgdetails', collegeid]);
//   }
//   ionViewWillEnter() {
//     // Recheck user data when page is about to be entered
//      this.checkUserData();
//   }
//   async checkUserData() {
//     // First, check if 'user' data exists in localStorage
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.id) {
//       this.loginuserId = user.id;
//       this.username = user.name;
//       this.email = user.email;
//       this.phone = user.phone;
//     }
//     // If 'user' data does not exist, check for 'response_data'
//     else {
//       const storedResponseData = localStorage.getItem('response_data');
//       if (storedResponseData) {
//         const responseData = JSON.parse(storedResponseData);
//         if (responseData && responseData.length > 0) {
//           this.loginuserId = responseData[0].id;
//           this.username = responseData[0].f_name;
//           this.email = responseData[0].email;
//           this.phone = responseData[0].phone;
//           this.token = responseData[0].token;
//         }
//         // If no valid data is found, prompt the user to log in
//         else {
//           await this.checkuser();
//         }
//       }
//       // If neither 'user' nor 'response_data' exists, open the login modal
//       else {
//         await this.checkuser();
//       }
//     }
//   }
//   async checkuser() {
//     const modal = await this.modalController.create({
//       component: PopuplogsignPage,
//       componentProps: { fromTab: 'tab4' }
//     });
//     return await modal.present();
//   }
//   // async shortlistclg() {
//   //   const loading = await this.loadingController.create({
//   //     message: `
//   //       <div class="custom-spinner-container">
//   //         <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
//   //         <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
//   //       </div>
//   //        <span style="margin-top: 10px;"> </span>`,
//   //     spinner: null, // Disable the default spinner
//   //     translucent: true,
//   //     cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
//   //   });
//   //   await loading.present();
//   //   this.userId = this.loginuserId;
//   //   this.service.getusrshortlistclg(this.userId).subscribe(res => {
//   //     console.log(res);
//   //     this.clglistarray = res.response_data;
//   //     console.log(this.clglistarray);
//   //   });
//   // }
//   async shortlistclg() {
//     const loading = await this.loadingController.create({
//       message: `
//         <div class="custom-spinner-container">
//           <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
//           <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
//         </div>
//          <span style="margin-top: 10px;"> </span>`,
//       spinner: null, // Disable the default spinner
//       translucent: true,
//       cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
//     });
//     await loading.present(); // Show loading spinner
//     this.userId = this.loginuserId;
//     // Fetch user shortlist data
//     this.service.getusrshortlistclg(this.userId).subscribe(
//       res => {
//         console.log(res);
//         this.clglistarray = res.response_data;
//         console.log(this.clglistarray);
//         loading.dismiss(); // Dismiss loading once data is fetched
//       },
//       err => {
//         console.error('Error fetching shortlist data:', err);
//         loading.dismiss(); // Dismiss loading in case of error
//       }
//     );
//   }
//   async removeclgshortlist(collegeId: string) {
//     try {
//       this.collegeId = collegeId;
//       this.userId = this.loginuserId;
//       this.active = '0';
//       this.event = 'update';
//       const res = await this.service.addclgshortlist(this.userId, this.collegeId, this.active, this.event).toPromise();
//       if (res.response_code === '200') {
//         // this.shortlistedColleges.add(collegeId);  // Add college to shortlisted set
//         // this.isBookmarked = true; // Ensure bookmark is set to true for UI update
//         await this.showAlert('Success', 'Shortlisted college removed successfully', true);
//         // location.reload();
//       } else if (res.response_code === '100') {
//         await this.showAlert('', 'College already added to shortlist');
//       } else {
//         await this.showAlert('Error', 'An unexpected error occurred');
//       }
//     } catch (error) {
//       await this.showAlert('', 'An unexpected error occurred');
//     }
//   }
//   async showAlert(header: string, message: string, reload: boolean = false) {
//     const alert = await this.alertController.create({
//       header,
//       message,
//       buttons: [{
//         text: 'OK',
//         handler: () => {
//           // Reload the page if the reload parameter is set to true
//           if (reload) {
//             location.reload();
//           }
//         }
//       }]
//     });
//   await alert.present();
//   }
//   notification() {
//     this.router.navigateByUrl('/notification');
//   }
//   async predictadmission(id: string, CatId: string, subCatName: string) {
//     const modal = await this.modalController.create({
//       component: PredictadmissionPage,
//       componentProps: { id, CatId, subCatName }
//     });
//     return await modal.present();
//   }
//   async presentSignInModal() {
//     const modal = await this.modalController.create({
//       component: PopuplogsignPage,
//     });
//     return await modal.present();
//   }
//   async brochure(collegeId: string) {
//     try {
//       this.collegeId = collegeId;
//       this.userId = this.loginuserId;
//       const res = await this.service.getbrochure(this.collegeId, this.userId).toPromise();
//       console.log(this.collegeId);
//       console.log(this.userId);
//       if (res.response_code === '200') {
//         await this.showAlert('Success', 'Brochure sent successfully by mail');
//       } else if (res.response_code === '500') {
//         await this.showAlert('Error', 'Brochure not available');
//       } else {
//         await this.showAlert('Error', 'An unexpected error occurred');
//       }
//     } catch (error) {
//       await this.showAlert('Error', 'An unexpected error occurred');
//     }
//   }
//   async clgpredict(id: string, CatId: string, subCatName: string) {
//     if (!this.loginuserId) {
//       await this.checkuser();
//       return;
//     }
//     await this.predictadmission(id, CatId, subCatName);
//   }
// }









let Tab4Page = class Tab4Page {
  constructor(shortlistService, router, service, activatedRoute, toastController, modalController, formBuilder, loadingController, alertController) {
    this.shortlistService = shortlistService;
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.toastController = toastController;
    this.modalController = modalController;
    this.formBuilder = formBuilder;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.clglistarray = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.checkUserData();

      _this.fetchShortlist();
    })();
  }

  clgdetails(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  ionViewWillEnter() {
    // Recheck user data when page is about to be entered
    this.checkUserData();
    this.shortlistclg();
  }

  checkUserData() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // First, check if 'user' data exists in localStorage
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.id) {
        _this2.loginuserId = user.id;
        _this2.username = user.name;
        _this2.email = user.email;
        _this2.phone = user.phone;
      } // If 'user' data does not exist, check for 'response_data'
      else {
        const storedResponseData = localStorage.getItem('response_data');

        if (storedResponseData) {
          const responseData = JSON.parse(storedResponseData);

          if (responseData && responseData.length > 0) {
            _this2.loginuserId = responseData[0].id;
            _this2.username = responseData[0].f_name;
            _this2.email = responseData[0].email;
            _this2.phone = responseData[0].phone;
            _this2.token = responseData[0].token;
          } // If no valid data is found, prompt the user to log in
          else {
            yield _this2.checkuser();
          }
        } // If neither 'user' nor 'response_data' exists, open the login modal
        else {
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
          fromTab: 'tab4'
        }
      });
      return yield modal.present();
    })();
  }

  fetchShortlist() {
    this.service.getusrshortlistclg(this.loginuserId).subscribe(res => {
      if (res.response_code === '200') {
        const collegeIds = res.response_data.map(college => college.collegeid);
        this.shortlistService.setInitialShortlist(collegeIds); // Initialize shared state
      }
    });
  }

  shortlistclg() {
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
      yield loading.present(); // Show loading spinner

      _this4.userId = _this4.loginuserId; // Fetch user shortlist data

      _this4.service.getusrshortlistclg(_this4.userId).subscribe(res => {
        console.log(res);
        _this4.clglistarray = res.response_data;
        console.log(_this4.clglistarray);
        loading.dismiss(); // Dismiss loading once data is fetched
      }, err => {
        console.error('Error fetching shortlist data:', err);
        loading.dismiss(); // Dismiss loading in case of error
      });
    })();
  } // Show alert with customizable header and message


  showAlert(header, message) {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this5.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  removeclgshortlist(collegeId) {
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
        _this6.collegeId = collegeId;
        _this6.userId = _this6.loginuserId;
        _this6.active = '0';
        _this6.event = 'update';
        const res = yield _this6.service.addclgshortlist(_this6.userId, _this6.collegeId, _this6.active, _this6.event).toPromise();

        if (res.response_code === '200' && res.response_data === true) {
          _this6.clglistarray = _this6.clglistarray.filter(item => item.collegeid !== collegeId);

          _this6.shortlistService.removeFromShortlist(collegeId); // Update shared state


          yield _this6.showAlert('Success', 'Shortlisted college removed successfully');
        } else {
          yield _this6.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this6.showAlert('Error', 'An unexpected error occurred');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  notification() {
    this.router.navigateByUrl('/notification');
  }

  predictadmission(id, CatId, subCatName) {
    var _this7 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this7.modalController.create({
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

  presentSignInModal() {
    var _this8 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this8.modalController.create({
        component: _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  brochure(collegeId) {
    var _this9 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

  clgpredict(id, CatId, subCatName) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this10.loginuserId) {
        yield _this10.checkuser();
        return;
      }

      yield _this10.predictadmission(id, CatId, subCatName);
    })();
  }

};

Tab4Page.ctorParameters = () => [{
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__.ShortlistService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tab4',
  template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], Tab4Page);


/***/ }),

/***/ 35300:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".size_set {\n  min-height: 200px;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 14px;\n  margin-top: 3rem;\n  box-shadow: rgba(205, 211, 214, 0.8) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\nspan.spnn {\n  margin-left: 4px;\n  padding-top: 3px;\n}\n\n.navin ion-button {\n  --padding-end: 10px !important;\n  --padding-start: 10px!important;\n  height: 28px !important;\n  --box-shadow: none!important;\n  font-size: 11px !important;\n}\n\n.topfix {\n  position: absolute !important;\n  top: -25px;\n}\n\n.delete {\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  color: red;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBRkY7O0FBS0E7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFGQTs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQURGIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zaXplX3NldHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgY29udGFpbjogdW5zZXQ7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC44KSAwcHggOHB4IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIFxyXG59XHJcblxyXG5zcGFuLnNwbm4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLm5hdmlue1xyXG5pb24tYnV0dG9ue1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEwcHggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjhweCFpbXBvcnRhbnQ7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xyXG59XHJcbn1cclxuLnRvcGZpeHtcclxucG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxudG9wOiAtMjVweDtcclxufVxyXG4uZGVsZXRle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0b3A6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 28203:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n\n\n\n<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\" (click)=\"notification()\">\n            <ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div>\n          \n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n \n<div class=\"m10\">\n  <div>\n    <h5>Your Shortlisted Colleges list</h5>\n  </div>\n  <div *ngFor=\"let item of clglistarray\">\n    <ion-card class=\"size_set navin \"  style=\"margin-bottom: 12px !important;\">\n      <img class=\"img_align topfix\" [src]=\"item.logo\">\n\n      <div class=\"delete\"> \n        <ion-icon name=\"close-circle-outline\" (click)=\"removeclgshortlist(item.collegeid)\"></ion-icon>\n       </div>\n\n    \n\n      <div class=\"imgHead\">\n        <div style=\"width: 91%;margin-top: 14px;\">\n        <p class=\"tit_set\" (click)=\"clgdetails(item.collegeid)\">{{item.collegename}}</p>\n        <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n          </p>\n        </div>\n      </div>\n\n      <p>Courses Offered</p>\n      <p> <span class=\"spn\">12 courses</span>\n        <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span class=\"spnn\">{{ item.Rating?.totalRateCount || 0 }}</span>\n      </p>\n      <ion-row class=\"footerpart\">\n          <ion-button shape=\"round\" class=\" \" (click)=\"brochure(item.collegeid)\">\n             Brochure\n          </ion-button>\n          <ion-button shape=\"round\"  (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n            Predict Admission\n          </ion-button>\n      </ion-row>\n    </ion-card>\n  </div>\n</div>\n</ion-content>\n\n\n\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map