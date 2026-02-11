(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["default-src_app_pages_clgdetails_clgdetails-routing_module_ts"],{

/***/ 50617:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/admissions/admissions.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmissionsPage": () => (/* binding */ AdmissionsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_admissions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./admissions.page.html */ 80765);
/* harmony import */ var _admissions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admissions.page.scss */ 17381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);













let AdmissionsPage = class AdmissionsPage {
  constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, formBuilder, shortlistService) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.formBuilder = formBuilder;
    this.shortlistService = shortlistService;
    this.slidepic = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.segmentStud = 'tabs1';
    this.selectedSegment = 'Latest';
    this.filtersegment = 'tabsA';
    this.clgdetailArry = [];
    this.tableOfContent = [];
    this.faqsarray = [];
    this.notificationarry = [];
    this.clghightlight = [];
    this.admiprocessarry = [];
    this.examedateArr = [];
    this.entranceExamsArr = [];
    this.admissionProcessFAQArr = [];
    this.ansquesArr = [];
    this.clgimgArry = [];
    this.slideOpts1 = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptsnew = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slideOptssuited = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.reviewsArr = [];
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked

    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.selectedCourseName = null;
  }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.loginuserId = user.id;
    } else {}

    this.studentForum = this.formBuilder.group({
      studentque: ['']
    });
    this.selectedCourseName = localStorage.getItem('selectedCourseName');

    if (this.selectedCourseName) {
      console.log('Selected Course Name exists:', this.selectedCourseName);
    } else {
      console.log('Selected Course Name is null or undefined.');
    }

    this.coursesArray = JSON.parse(localStorage.getItem('courses'));
    this.courseId = this.coursesArray[0].id;
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.faqs();
      this.notifications();
      this.admissionproces();
      this.getlatestnpop();
      this.ansques();
      this.review();
    });
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  postQuestion() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.loginuserId) {
        _this.presentSignInModal();

        return;
      }

      if (_this.studentForum.invalid) {
        _this.studentForum.markAllAsTouched();
      } else {
        _this.user_id = _this.loginuserId;

        _this.service.userqnspost(_this.collegeId, _this.courselevel, _this.course, _this.user_id, _this.studentForum.value.studentque).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
            yield _this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');

            _this.studentForum.reset();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }

  voteReview(reviewId, userId, ishelpful) {
    // console.log(this.value);
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {// console.log(res);
    });
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  toggleAccordion(item) {
    item.isOpen = !item.isOpen;
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  filterTabs(ev) {
    this.filtersegment = ev.detail.value;
  }

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = new Date().getFullYear();
      this.whatnew = res.college_detail[0].what_new;
      this.tableOfContent = res.table_of_content;
      this.clghightlight = res.college_detail[0].CollegeHighlight; //  console.log(this.clghightlight);

      this.cityid = res.college_detail[0].cityid;
      this.clgimgArry = res.college_images; // console.log(this.cityid)

      this.bylocpopclg();
      this.categories = res.college_detail[0].categoryid;
      console.log(this.categories);
      this.courseid = res.college_detail[0].coursesandfees[0].sub_category; //  console.log(this.categories);

      this.suitedclg();
    });
  }

  faqs() {
    this.service.getFaqs(this.collegeId).subscribe(res => {
      // console.log(res);
      this.faqsarray = res.FAQs; // console.log(this.faqsarray);
    });
  }

  addmissiondatepdf(sub_category) {
    this.service.addmisiondatepdf(this.collegeId, sub_category).subscribe(res => {
      this.viewPDF = res;
      window.open(this.viewPDF.PDF, '_blank');
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      this.notificationarry = res.response_data;
    });
  }

  admissionproces() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
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
      yield loading.present(); // Display the loader

      _this2.service.admissionprocess(_this2.collegeId).subscribe(res => {
        _this2.admiprocessarry = res.AdmissionProcess;
        _this2.entranceExamsArr = res.AdmissionProcess.entrance_exams;
        _this2.admissionProcessFAQArr = res.Commonaly_Asked_Questions;
        loading.dismiss(); // Dismiss the loader once data is fetched
      }, error => {
        console.error('Error fetching admission process:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  bylocpopclg() {
    this.service.clgpopular(this.courseid).subscribe(res => {
      this.popularclgarry = res.response_data;
    });
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  ansques() {
    this.service.addmissionqueans(this.collegeId).subscribe(res => {
      // console.log(res);
      this.ansquesArr = res.QueAnsAboutAdmissions;
    });
  }

  review() {
    this.service.getclgreview(this.collegeId).subscribe(res => {
      // console.log(res);
      this.reviewsArry = res.data; //  console.log(this.reviewsArry);

      this.reviewsArr = res.data.reviews;
      this.overallrating = res.data.reviews[0].totalRatingCount; // console.log(this.overallrating);

      this.totalRateCount = res.data.totalRateCount;
      this.totalPlacementRateCount = res.data.totalPlacementRateCount;
      this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
      this.totalFacultyRateCount = res.data.totalFacultyRateCount;
      this.totalHostelRateCount = res.data.totalHostelRateCount;
      this.totalCampusRateCount = res.data.totalCampusRateCount;
      this.totalMoneyRateCount = res.data.totalMoneyRateCount;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);
    });
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  predictadmission(id, CatId, subCatName) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
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
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    this.isBookmarked = !this.isBookmarked;
  }

  toggleShortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this6.loginuserId) {
        _this6.presentSignInModal();

        return;
      }

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

  Alert(header, message) {
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

  brochuresuit(collegeId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this10.loginuserId) {
        _this10.presentSignInModal();

        return;
      } // alert(collegeId)


      try {
        // this.collegeId = collegeId;
        _this10.userId = _this10.loginuserId;
        const res = yield _this10.service.getbrochure(collegeId, _this10.userId).toPromise();
        console.log(_this10.collegeId);
        console.log(_this10.userId);

        if (res.response_code === '200') {
          yield _this10.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this10.showAlert('Error', 'Brochure not available');
        } else {
          yield _this10.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this10.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  brochure(collegeId) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // Check if token exists in local storage
      // this.token = localStorage.getItem('token');
      if (!_this11.loginuserId) {
        // Token is not present, so present sign-in modal
        _this11.presentSignInModal();

        return; // Exit function if token is missing
      }

      try {
        _this11.collegeId = collegeId;
        _this11.userId = _this11.loginuserId; // Call your service method to get the brochure

        const res = yield _this11.service.getbrochure(_this11.collegeId, _this11.userId).toPromise();
        console.log(_this11.collegeId);
        console.log(_this11.userId); // Handle different response codes

        if (res.response_code === '200') {
          yield _this11.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this11.showAlert('Error', 'Brochure not available');
        } else {
          yield _this11.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        // Handle errors from API call or any unexpected errors
        yield _this11.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this12.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this13 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.token = localStorage.getItem('token');
      if (!_this13.loginuserId) {
        _this13.presentSignInModal();

        return;
      } else {
        yield _this13.predictadmission(id, CatId, subCatName);
      }
    })();
  }

};

AdmissionsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__.ShortlistService
}];

AdmissionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-admissions',
  template: _raw_loader_admissions_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_admissions_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], AdmissionsPage);


/***/ }),

/***/ 90644:
/*!***************************************************************!*\
  !*** ./src/app/pages/clgdetails/clgdetails-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ClgdetailsPageRoutingModule": () => (/* binding */ ClgdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clgdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clgdetails.page */ 79154);
/* harmony import */ var _coursesfees_coursesfees_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursesfees/coursesfees.page */ 54525);
/* harmony import */ var _reviews_reviews_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews/reviews.page */ 75934);
/* harmony import */ var _admissions_admissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admissions/admissions.page */ 50617);
/* harmony import */ var _placements_placements_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placements/placements.page */ 67229);
/* harmony import */ var _cutoffs_cutoffs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cutoffs/cutoffs.page */ 7019);
/* harmony import */ var _infrastructure_infrastructure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infrastructure/infrastructure.page */ 62737);
/* harmony import */ var _compare_compare_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare/compare.page */ 93808);
/* harmony import */ var _scolarship_scolarship_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scolarship/scolarship.page */ 62932);
/* harmony import */ var _news_news_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.page */ 4553);
/* harmony import */ var _questionans_questionans_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questionans/questionans.page */ 85607);
/* harmony import */ var _coursinfo_coursinfo_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coursinfo/coursinfo.page */ 65665);















const routes = [
    {
        path: '',
        component: _clgdetails_page__WEBPACK_IMPORTED_MODULE_0__.ClgdetailsPage,
        children: [
            {
                path: '',
                component: _clgdetails_page__WEBPACK_IMPORTED_MODULE_0__.ClgdetailsPage
            },
            {
                path: '',
                component: _coursesfees_coursesfees_page__WEBPACK_IMPORTED_MODULE_1__.CoursesfeesPage
            },
            {
                path: '',
                component: _reviews_reviews_page__WEBPACK_IMPORTED_MODULE_2__.ReviewsPage
            },
            {
                path: '',
                component: _admissions_admissions_page__WEBPACK_IMPORTED_MODULE_3__.AdmissionsPage
            },
            {
                path: '',
                component: _placements_placements_page__WEBPACK_IMPORTED_MODULE_4__.PlacementsPage
            },
            {
                path: '',
                component: _cutoffs_cutoffs_page__WEBPACK_IMPORTED_MODULE_5__.CutoffsPage
            },
            {
                path: '',
                component: _infrastructure_infrastructure_page__WEBPACK_IMPORTED_MODULE_6__.InfrastructurePage
            },
            {
                path: '',
                component: _compare_compare_page__WEBPACK_IMPORTED_MODULE_7__.ComparePage
            },
            {
                path: '',
                component: _scolarship_scolarship_page__WEBPACK_IMPORTED_MODULE_8__.ScolarshipPage
            },
            {
                path: '',
                component: _news_news_page__WEBPACK_IMPORTED_MODULE_9__.NewsPage
            },
            {
                path: '',
                component: _questionans_questionans_page__WEBPACK_IMPORTED_MODULE_10__.QuestionansPage
            },
            {
                path: 'CoursinfoPage/:courseid',
                component: _coursinfo_coursinfo_page__WEBPACK_IMPORTED_MODULE_11__.CoursinfoPage
            },
        ]
    }
];
let ClgdetailsPageRoutingModule = class ClgdetailsPageRoutingModule {
};
ClgdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    })
], ClgdetailsPageRoutingModule);

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { ClgdetailsPage } from './clgdetails.page';
// import { CoursesfeesPage } from './coursesfees/coursesfees.page';
// import { ReviewsPage } from './reviews/reviews.page';
// import { AdmissionsPage } from './admissions/admissions.page';
// import { PlacementsPage } from './placements/placements.page';
// import { CutoffsPage } from './cutoffs/cutoffs.page';
// import { InfrastructurePage } from './infrastructure/infrastructure.page';
// import { FacultyPage } from './faculty/faculty.page';
// import { ComparePage } from './compare/compare.page';
// import { ScolarshipPage } from './scolarship/scolarship.page';
// import { NewsPage } from './news/news.page';
// import { QuestionansPage } from './questionans/questionans.page';
// import { CoursinfoPage } from './coursinfo/coursinfo.page';
// const routes: Routes = [
//   {
//     path: '',
//     component: ClgdetailsPage,
//     children: [
//       { path: 'coursesfees', component: CoursesfeesPage },
//       { path: 'reviews', component: ReviewsPage },
//       { path: 'admissions', component: AdmissionsPage },
//       { path: 'placements', component: PlacementsPage },
//       { path: 'cutoffs', component: CutoffsPage },
//       { path: 'infrastructure', component: InfrastructurePage },
//       { path: 'faculty', component: FacultyPage },
//       { path: 'compare', component: ComparePage },
//       { path: 'scolarship', component: ScolarshipPage },
//       { path: 'news', component: NewsPage },
//       { path: 'questionans', component: QuestionansPage },
//       { path: 'coursinfo/:courseid', component: CoursinfoPage },
//       // { path: '', redirectTo: 'coursesfees', pathMatch: 'full' } // Default route
//     ]
//   }
// ];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ClgdetailsPageRoutingModule {}


/***/ }),

/***/ 79154:
/*!*****************************************************!*\
  !*** ./src/app/pages/clgdetails/clgdetails.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClgdetailsPage": () => (/* binding */ ClgdetailsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clgdetails_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./clgdetails.page.html */ 89688);
/* harmony import */ var _clgdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clgdetails.page.scss */ 2002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);




/* eslint-disable @typescript-eslint/naming-convention */














let ClgdetailsPage = class ClgdetailsPage {
  constructor(socialSharing, iab, router, service, activatedRoute, formBuilder, loadingController, platform, modalController, alertController, shortlistService, el, cdr) {
    this.socialSharing = socialSharing;
    this.iab = iab;
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.el = el;
    this.cdr = cdr;
    this.showMore = false;
    this.coureseinfotab = false;
    this.slidepic = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOpts1 = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptssuited = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.yearsArray = [];
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked

    this.rankingarray = null;
    this.segment = 'tabsA';
    this.segmentStud = 'tabs1';
    this.selectedSegment = 'Latest';
    this.clgdetailArry = [];
    this.clgimgArry = [];
    this.tableOfContent = [];
    this.clghightlight = [];
    this.popprogrmmArry = [];
    this.qunanswer = [];
    this.admissionQarray = [];
    this.prosesarray = [];
    this.placementarray = [];
    this.rankingQarray = [];
    this.coursefeesarray = [];
    this.coursfeeQarray = [];
    this.scholershiparray = [];
    this.scholershipQarray = [];
    this.faqsarray = [];
    this.notificationarry = [];
    this.detailsarry = [];
    this.reviewsArr = [];
    this.showShearDiv = false;
    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.TabselectedIndex = 0;
    this.segmentButtons = [{
      value: 'tabsA',
      label: 'College info'
    }, {
      value: 'tabsB',
      label: 'Courses & Fees'
    }, {
      value: 'tabsC',
      label: 'Reviews'
    }, {
      value: 'tabsD',
      label: 'Admissions'
    }, {
      value: 'tabsE',
      label: 'Placements'
    }, {
      value: 'tabsF',
      label: 'Cut-Offs'
    }, {
      value: 'tabsG',
      label: 'Infrastructure'
    }, {
      value: 'tabsI',
      label: 'Compare'
    }, {
      value: 'tabsJ',
      label: 'Q&A'
    }, {
      value: 'tabsK',
      label: 'Scholarships'
    }, {
      value: 'tabsL',
      label: 'Articles'
    }, {
      value: 'tabsM',
      label: 'Course Info'
    }];
    this.tblecontentArry = []; // selectedCourseIdB: any;

    this.selectedCourseName = null;
    this.popprogrmmArrydata = [];
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < 25; i++) {
      const startYear = currentYear - i;
      const endYear = startYear + 1;
      const yearLabel = `${startYear}-${String(endYear).slice(2)}`;
      this.yearsArray.push(yearLabel);
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  ngOnInit() {
    // this.selectedCourseIdB = localStorage.getItem('selectedCourseIdB');
    // console.log(this.selectedCourseIdB);
    // const selectedCourseName = localStorage.getItem('selectedCourseName');
    // console.log('Selected Course Name:', selectedCourseName);
    this.selectedCourseName = localStorage.getItem('selectedCourseName');

    if (this.selectedCourseName) {
      console.log('Selected Course Name exists:', this.selectedCourseName);
    } else {
      console.log('Selected Course Name is null or undefined.');
    }

    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.loginuserId = user.id;
    } else {}

    this.studentForum = this.formBuilder.group({
      studentque: ['']
    });
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.clgrankingdata();
      this.getclgdetail();
      this.hightlightqns();
      this.admissionproces();
      this.tbleofcontent();
      this.getlatestnpop();
      this.cousesnfees();
      this.scholership();
      this.FAqs();
      this.notifications();
      this.contactdetail();
      this.review();
    });
    this.placementForm = this.formBuilder.group({
      course_category: [''],
      year: ['']
    });
    this.placementcat();
    this.placement();
    this.getCollegeFacilitiesByID();
    this.getCollegeAdmissionProcess();
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

  compclg1(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  onCourseClicked(courseid, course_category, tabName) {
    this.segment = tabName;
    localStorage.setItem('course_category', course_category);
    localStorage.setItem('selectedCourseId', courseid);
    console.log('Selected Course ID:', courseid);
  }

  shareBlog(collegeId) {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.id = collegeId;
      let selectpara = {
        "id": _this.id,
        "type": "college"
      };
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

      _this.service.generateLink_req(selectpara).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          yield loader.dismiss();
          _this.sharelink = res.data.share_link;

          _this.socialSharing.share(_this.sharelink).then(() => {
            console.log("Shared successfully");
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  onCourseClicked1(event) {
    console.log(event);
    this.segment = 'tabsM';
    this.coureseinfotab = true;
    this.segment = 'tabsM';
    console.log(this.TabselectedIndex);
  }

  oncourseinfo(event) {
    console.log(event);
  }

  scrollTo(sectionName) {
    console.log(sectionName);
    const element = this.el.nativeElement.querySelector(`[name="${sectionName}"]`);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  onTabChange(event) {
    console.log(event);
  }

  toggleAccordion(item) {
    item.isOpen = !item.isOpen;
  }

  clgDetailTabs(ev) {
    this.segment = ev.detail.value;
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  toggleShearDiv() {
    this.showShearDiv = !this.showShearDiv;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  toggleDescription(item) {
    item.showMore = !item.showMore;
  }

  getMapUrl(location) {
    const encodedLocation = encodeURIComponent(location);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  }

  getclgdetail() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
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
      yield loading.present(); // Ensure the loader is presented

      _this2.service.getclgdetails(_this2.collegeId).subscribe(res => {
        console.log(res.response_code);

        if (res.response_code == 200) {
          _this2.clgdetailArry = res.college_detail;
          console.log(_this2.clgdetailArry);
          _this2.description = res.college_detail[0].description;
          _this2.catid = res.college_detail[0].categoryid;
          _this2.clglogo = res.college_detail[0].logo;
          _this2.collegename = res.college_detail[0].title;
          _this2.cityname = res.college_detail[0].city;
          _this2.state = res.college_detail[0].state;
          _this2.description = res.college_detail[0].description;
          _this2.clgcategory = res.college_detail[0].Collage_category;
          _this2.estd = res.college_detail[0].estd;
          _this2.image = res.college_detail[0].image;
          _this2.currentYear = new Date().getFullYear();
          _this2.whatnew = res.college_detail[0].what_new;
          _this2.tableOfContent = res.table_of_content;
          _this2.clgimgArry = res.college_images;
          _this2.cityidArry = res.college_detail[0].cityid;
          _this2.courseId = res.college_detail[0].coursesandfees[0].sub_category;
          console.log('Sub Category:', _this2.courseId);

          _this2.popularclg();

          _this2.categories = res.college_detail[0].categoryid;
          console.log(_this2.categories);

          _this2.suitedclg();

          _this2.popprogrammes();

          loading.dismiss();
        } else {
          loading.dismiss();
        }
      }, error => {
        console.error('Error fetching college details:', error);

        if (error.status === 400) {
          loading.dismiss();
        } else {}
      });
    })();
  }

  popularclg() {
    this.service.clgpopular(this.courseId).subscribe(res => {
      this.popularclgarry = res.response_data;
    });
  }

  popprogrammes() {
    this.subcategory = '';
    console.log(this.courseId);
    let collegeTypeId = this.clgcategory;
    this.service.getpopprogrammes(this.collegeId, this.subcategory, collegeTypeId).subscribe(res => {
      this.popprogrmmArrydata = res.popular_programmes;
      this.qunanswer = res.Commonaly_Asked_Questions;
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      this.suitclgarry = res.bestSuitedColleges;
    });
  }

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  tbleofcontent() {
    this.service.tableofcontent(this.collegeId).subscribe(res => {
      this.tblecontentArry = res.response_data;
    });
  }

  hightlightqns() {
    this.service.gethighlightqan(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clghightlight = res.CollegeHighlight;
      this.qunanswer = res.Commonaly_Asked_Questions;
    });
  }

  postQuestion() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3.loginuserId) {
        _this3.presentSignInModal();

        return;
      }

      if (_this3.studentForum.invalid) {
        _this3.studentForum.markAllAsTouched();
      } else {
        _this3.user_id = _this3.loginuserId;

        _this3.service.userqnspost(_this3.collegeId, _this3.courselevel, _this3.course, _this3.user_id, _this3.studentForum.value.studentque).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
            yield _this3.showAlert('Success', 'Question has been submitted. We will get back to you soon!');

            _this3.studentForum.reset();
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    })();
  }

  admissionproces() {
    this.service.getAdmissionprosess(this.collegeId).subscribe(res => {
      this.prosesarray = res.AdmissionProcess;
      this.admissionQarray = res.Commonaly_Asked_Questions;
      this.examinfoarray = res.Examnotification_or_ImportantDates;
    });
  }

  placementcat() {
    this.service.getplacecategory(this.collegeId).subscribe(res => {
      this.PlaceCategoryArr = res.response_data;
      console.log('Place Category Array:', this.PlaceCategoryArr);

      if (this.PlaceCategoryArr && this.PlaceCategoryArr.length > 0) {
        // Set the first item's ID to the course_category field
        const firstCategoryId = this.PlaceCategoryArr[0].id;
        this.placementForm.patchValue({
          course_category: firstCategoryId
        });
        console.log('First Category Name:', this.PlaceCategoryArr[0].name);
        console.log('First Category ID:', firstCategoryId); // Call the year function with the first category ID

        this.placemtyear(firstCategoryId);
      }
    });
  }

  placemtyear(selectedCategoryId) {
    this.service.getplacecategoryyear(this.collegeId, selectedCategoryId).subscribe(res => {
      console.log('Year Response:', res);

      if (res && res.year) {
        // Map the years and update the yearsArray
        this.yearsArray = res.year.map(item => item.year);
        console.log('Years Array:', this.yearsArray);

        if (this.yearsArray.length > 0) {
          // Set the first year into the form
          const firstYear = this.yearsArray[0];
          this.placementForm.get('year')?.setValue(firstYear); // Call the placement function with both category and year

          this.placement();
        }
      }
    });
  }

  placement() {
    const selectedYear = this.placementForm.value.year; // Get selected year

    const selectedCategory = this.placementForm.value.course_category; // Get selected course category

    console.log('Selected Year:', selectedYear);
    console.log('Selected Course Category:', selectedCategory);

    if (selectedYear && selectedCategory) {
      // Fetch placement data
      this.service.getplacement(selectedYear, selectedCategory, this.collegeId).subscribe(res => {
        this.placementarray = res.placementlist;
        console.log('Placement List:', this.placementarray);
        this.placementQarray = res.Commonaly_Asked_Questions;
        console.log('Questions:', this.placementQarray);
      });
    } else {
      console.warn('Please select both Year and Course Category.');
    }
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  clgrankingdata() {
    this.service.getclgranking(this.collegeId).subscribe(response => {
      if (response && response.length > 0) {
        this.rankingarray = response;
      } else {
        this.rankingarray = null;
      }
    });
  }

  cousesnfees() {
    this.service.getcoursfeesnfees(this.collegeId).subscribe(res => {
      this.coursefeesarray = res.courselist;
      console.log(this.coursefeesarray);
      this.coursfeeQarray = res.Commonaly_Asked_Questions;
    });
  }

  scholership() {
    this.service.getscholarship(this.collegeId).subscribe(res => {
      this.scholershiparray = res.scholarship_data;
      this.scholershipQarray = res.Commonaly_Asked_Questions;
    });
  }

  FAqs() {
    this.service.getFaqs(this.collegeId).subscribe(res => {
      this.faqsarray = res.FAQs;
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      this.notificationarry = res.response_data;
    });
  }

  contactdetail() {
    this.service.contactdetails(this.collegeId).subscribe(res => {
      this.detailsarry = res.ContactDetails;
    });
  }

  review() {
    this.service.getclgreview(this.collegeId).subscribe(res => {
      this.reviewsArry = res.data;
      console.log(this.reviewsArry);
      this.reviewsArr = res.data.reviews;
      this.overallrating = res.data.reviews.totalRateCount;
      this.totalRateCount = res.data.totalRateCount;
      this.totalPlacementRateCount = res.data.totalPlacementRateCount;
      this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
      this.totalFacultyRateCount = res.data.totalFacultyRateCount;
      this.totalHostelRateCount = res.data.totalHostelRateCount;
      this.totalCampusRateCount = res.data.totalCampusRateCount;
      this.totalMoneyRateCount = res.data.totalMoneyRateCount;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
    });
  }

  Articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  predictadmission(id, CatId, subCatName) {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this4.modalController.create({
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
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this5.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this6.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    this.isBookmarked = !this.isBookmarked;
  }

  toggleShortlist(collegeId) {
    var _this7 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this7.loginuserId) {
        _this7.presentSignInModal();

        return;
      }

      try {
        if (_this7.shortlistService.isShortlisted(collegeId)) {
          yield _this7.removeclgshortlist(collegeId);
        } else {
          yield _this7.addclgshortlist(collegeId);
        }
      } catch (error) {
        console.error('Error toggling shortlist:', error);
      }
    })();
  }

  addclgshortlist(collegeId) {
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
        const res = yield _this8.service.addclgshortlist(_this8.loginuserId, collegeId, '1', 'insert').toPromise();

        if (res.response_code === '200') {
          _this8.shortlistService.addToShortlist(collegeId);

          yield _this8.showAlert('Success', 'College added to shortlist successfully');
        } else {
          yield _this8.showAlert('Error', 'Failed to add college to shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this8.showAlert('Error', 'An error occurred while adding to shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  removeclgshortlist(collegeId) {
    var _this9 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this9.loadingController.create({
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
        const res = yield _this9.service.addclgshortlist(_this9.loginuserId, collegeId, '0', 'update').toPromise();

        if (res.response_code === '200') {
          _this9.shortlistService.removeFromShortlist(collegeId);

          yield _this9.showAlert('Success', 'College removed from shortlist successfully');
        } else {
          yield _this9.showAlert('Error', 'Failed to remove college from shortlist');
        }
      } catch (error) {
        console.error(error);
        yield _this9.showAlert('Error', 'An error occurred while removing from shortlist');
      } finally {
        yield loading.dismiss();
      }
    })();
  }

  isShortlisted(collegeId) {
    return this.shortlistService.isShortlisted(collegeId);
  }

  Alert(header, message) {
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

  brochure(collegeId) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this11.loginuserId) {
        _this11.presentSignInModal();

        return;
      } // alert(collegeId)


      try {
        _this11.collegeId = collegeId;
        _this11.userId = _this11.loginuserId;
        const res = yield _this11.service.getbrochure(_this11.collegeId, _this11.userId).toPromise();
        console.log(_this11.collegeId);
        console.log(_this11.userId);

        if (res.response_code === '200') {
          yield _this11.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this11.showAlert('Error', 'Brochure not available');
        } else {
          yield _this11.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this11.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  brochuresuit(collegeId) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this12.loginuserId) {
        _this12.presentSignInModal();

        return;
      } // alert(collegeId)


      try {
        // this.collegeId = collegeId;
        _this12.userId = _this12.loginuserId;
        const res = yield _this12.service.getbrochure(collegeId, _this12.userId).toPromise();
        console.log(_this12.collegeId);
        console.log(_this12.userId);

        if (res.response_code === '200') {
          yield _this12.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this12.showAlert('Error', 'Brochure not available');
        } else {
          yield _this12.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this12.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this13 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this13.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this14 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this14.loginuserId) {
        _this14.presentSignInModal();

        return;
      } else {
        yield _this14.predictadmission(id, CatId, subCatName);
      }
    })();
  }

  addmissiondatepdf(sub_category) {
    this.service.addmisiondatepdf(this.collegeId, sub_category).subscribe(res => {
      this.viewPDF = res;
      window.open(this.viewPDF.PDF, '_blank');
    });
  } // shareOnWhatsApp(collegeId): void {
  //   const shareText = `Check out this event: ${'https://ohcampus.com/'}${window.location.pathname}`;
  //   const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent
  //     ('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
  //   window.open(whatsappUrl, '_blank');
  // }


  shareOnWhatsApp(collegeId) {
    const shareLink = `http://api.ohcampus.com?id=${collegeId}&type=college`;
    this.iab.create(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`, '_system');
  }

  shareOnFacebook(collegeId) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    this.iab.create(url, '_blank');
  }

  shareOnTwitter(collegeId) {
    const shareText = `Check out this exam: ${'https://ohcampus.com/'}${window.location.pathname}`; // const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareText)}`;

    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    this.iab.create(url, '_blank');
  }

  shareOnLinkedin(collegeId) {
    const shareText = `Check out this exam: ${'https://ohcampus.com/'}${window.location.pathname}`;
    const url = `https://www.linkedin.com/send?text=$
    {encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    this.iab.create(url, '_blank');
  }

  getCollegeAdmissionProcess() {
    let selctpara = {
      "collegeId": this.collegeId
    };
    this.service.getCollegeAdmissionProcess(selctpara).subscribe(res => {});
  }

  getCollegeFacilitiesByID() {
    let selctpara = {
      "collegeId": this.collegeId
    };
    this.service.getCollegeFacilitiesByID(selctpara).subscribe(res => {
      this.facility_titles = res.CollegeFac.facility_titles;
      console.log(this.facility_titles);
    });
  }

};

ClgdetailsPage.ctorParameters = () => [{
  type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__.SocialSharing
}, {
  type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__.ShortlistService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
}];

ClgdetailsPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, {
      static: false
    }]
  }]
};
ClgdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-clgdetails',
  template: _raw_loader_clgdetails_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_clgdetails_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ClgdetailsPage);


/***/ }),

/***/ 93808:
/*!**********************************************************!*\
  !*** ./src/app/pages/clgdetails/compare/compare.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparePage": () => (/* binding */ ComparePage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_compare_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./compare.page.html */ 97963);
/* harmony import */ var _compare_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare.page.scss */ 1205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);









let ComparePage = class ComparePage {
  constructor(router, service, activatedRoute, formBuilder, loadingController, modalController, alertController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.loadingController = loadingController;
    this.modalController = modalController;
    this.alertController = alertController;
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.selectedSegment = 'Latest';
    this.coursesArray = [];
    this.selectedCourseName = null;
  }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    this.selectedCourseName = localStorage.getItem('selectedCourseName');

    if (this.selectedCourseName) {} else {} // Get collegeid from route parameters


    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.getlatestnpop();
      const coursedata = localStorage.getItem('courses');
      this.coursesArray = JSON.parse(coursedata);
      this.categoryid = this.coursesArray[0].parent_category;
      this.clglistforcompr();
    });
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      this.clgdetailArry = res.college_detail;
      this.clglogo = res.college_detail[0].logo;
      this.collegename = res.college_detail[0].title;
      this.cityname = res.college_detail[0].city;
      this.clgtotlrating = res.college_detail[0].Rating.totalRateCount;
      this.collegename = res.college_detail[0].title;
      this.currentYear = new Date().getFullYear();
      this.whatnew = res.college_detail[0].what_new;
      this.tableOfContent = res.table_of_content;
      this.clghightlight = res.college_detail[0].CollegeHighlight;
      this.clgimgArry = res.college_images;
      this.cityidArry = res.college_detail[0].cityid;
      this.categories = res.college_detail[0].categoryId;
    });
  }

  clglistforcompr() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
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
      yield loading.present(); // Display the loader

      _this.service.clglistforcompr(_this.categoryid).subscribe(res => {
        _this.clglistforcomp = res.CollegeListForCompare;
        _this.secclglogo = res.CollegeListForCompare[0].logo;
        _this.secclgname = res.CollegeListForCompare[0].title;
        _this.collegeId2 = res.CollegeListForCompare[0].id;
        loading.dismiss(); // Dismiss the loader once data is fetched
      }, error => {
        console.error('Error fetching college list for comparison:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  twoclgcompar(collegeId, collegeId2) {
    this.router.navigate(['/clgcompare', collegeId, collegeId2]);
  }

  popularclg() {
    this.service.getpopularclg(this.cityidArry).subscribe(res => {
      // console.log(res);
      this.popularclgarry = res.popularColleges; // console.log(this.popularclgarry);
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      // console.log(res);
      this.suitclgarry = res.bestSuitedColleges; // console.log(this.suitclgarry);
    });
  }

};

ComparePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

ComparePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-compare',
  template: _raw_loader_compare_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_compare_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ComparePage);


/***/ }),

/***/ 54525:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursesfees/coursesfees.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesfeesPage": () => (/* binding */ CoursesfeesPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coursesfees_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./coursesfees.page.html */ 14242);
/* harmony import */ var _coursesfees_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coursesfees.page.scss */ 37184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);

var CoursesfeesPage_1;










let CoursesfeesPage = CoursesfeesPage_1 = class CoursesfeesPage {
  constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.courseClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.slidepic = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.activeSegment = 'tabsA'; // Default active segment

    this.showCourseInfoTab = false; // eslint-disable-next-line @typescript-eslint/no-inferrable-types

    this.segmentStud = 'tabs1';
    this.selectedSegment = 'Latest';
    this.filtersegment = 'tabsA';
    this.slideOpts1 = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.3
    }; // programmeQarray: any[]=[];

    this.clgimgArry = [];
    this.notificationarry = [];
    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
  } // ngOnInit() {
  //   localStorage.setItem('selectedCourseIdB', '');
  //           this.course_categoryvalue=localStorage.getItem('course_category')
  //           alert('Course Category'+this.course_categoryvalue);
  //   this.crsubcategory = localStorage.getItem('selectedCourseId');
  //   console.log(this.crsubcategory);
  //   this.getResponseDataFromLocalStorage();
  //       this.categoryId=  this.categoryId = localStorage.getItem('catID')?.replace(/"/g, '');
  //   console.log('Selected Course ID:', this.crsubcategory);
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     console.log('User information:', user);
  //     this.loginuserId = user.id;
  //     console.log(this.loginuserId);
  //   } else {
  //     console.log('No user information found in local storage.');
  //   }
  //   this.activatedRoute.params.subscribe(params => {
  //     this.collegeId = params.collegeid;
  //     this.getclgdetail();
  //     this.notifications();
  //     this.getlatestnpop();
  //     this.subcatlts();
  //     this.courselevel();
  //     this.dataofclg();
  //     this.examAccepted();
  //     this.courseinfo();
  //   });
  // }


  ngOnInit() {
    localStorage.setItem('selectedCourseIdB', ''); // Get course_category first

    this.course_categoryvalue = localStorage.getItem('course_category');
    console.log('Course Category:', this.course_categoryvalue); // Get selected course

    this.crsubcategory = localStorage.getItem('selectedCourseId');
    console.log('Selected Course ID:', this.crsubcategory); // Get catID

    let catIdFromStorage = localStorage.getItem('catID');

    if (this.course_categoryvalue === null || this.course_categoryvalue === '') {
      this.categoryId = catIdFromStorage.replace(/"/g, '');
    } else {
      this.categoryId = this.course_categoryvalue;
    } // if (catIdFromStorage && catIdFromStorage !== '') {
    //   // If catID exists → use it
    //   this.categoryId = catIdFromStorage.replace(/"/g, '');
    // } else {
    //   // If catID NOT found → use course_category
    //   this.categoryId = this.course_categoryvalue;
    // }


    console.log('Final Category ID:', this.categoryId); // alert('Final Category ID: ' + this.categoryId);
    // User info

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.loginuserId = user.id;
      console.log('User ID:', this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    } // Route params


    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.notifications();
      this.getlatestnpop();
      this.subcatlts();
      this.courselevel();
      this.dataofclg();
      this.examAccepted();
      this.courseinfo();
    });
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  ngAfterViewInit() {}

  onCourseClicked(courseid, tabName) {
    // alert('course id'+courseid);
    this.segment = tabName;
    localStorage.setItem('selectedCourseIdB', courseid);
    this.segment = tabName;
    this.courseClicked.emit(tabName);
    this.TabselectedIndex = 11; // Set the selected index for the "Course Info" tab

    console.log('Selected Tab:', tabName, 'Selected Index:', this.selectedIndex);
  }

  courseinfo() {
    this.service.getotherprogrmes(this.collegeId, this.crsubcategory).subscribe(res => {
      // console.log(res);
      this.selectedclgArr = res.popular_programmes;
      console.log(this.selectedclgArr);
      ;
    });
  }

  clgdetls(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  filterTabs(ev) {
    this.filtersegment = ev.detail.value;
  }

  feesbaseclg() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // alert('college type id'+this.collegeTypeId);
      console.log(_this.collegeTypeId);
      const loading = yield _this.loadingController.create({
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

      _this.service.getcoursiformation(_this.collegeId, _this.crsubcategory, _this.collegeTypeId, _this.categoryId).subscribe(res => {
        _this.feesbclgarray = res.courses_list;
        loading.dismiss(); // Dismiss the loader after data is fetched
      }, error => {
        console.error('Error fetching fees-based colleges:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  otherclgincity() {
    this.cityId = this.cityId;
    this.service.getcityotherclg(this.cityId, this.collegeId, this.crsubcategory).subscribe(res => {
      console.log(res);
      this.cityotherclg = res.courses_list;
      console.log(this.cityotherclg);
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      // console.log(res);
      this.notificationarry = res.response_data; // console.log(this.notificationarry);
    });
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clgdetailArry = res.college_detail;
      console.log(this.clgdetailArry);
      this.collegename = res.college_detail[0].title;
      this.clgimgArry = res.college_images;
      this.cityId = res.college_detail[0].cityid;
      this.collegeTypeId = res.college_detail[0].Collage_category;
      this.feesbaseclg();
      console.log(this.collegeTypeId);
      this.otherclgincity();
      this.cityname = res.college_detail[0].city;
    });
  }

  subcatlts() {
    this.service.getsubcatlist(this.collegeId).subscribe(res => {
      // console.log(res);
      this.subcatltsArr = res.SubCategory;
    });
  }

  courselevel() {
    this.service.getcourselevel(this.collegeId).subscribe(res => {
      // console.log(res);
      this.courselevelArr = res.SubCategory;
    });
  }

  dataofclg() {
    this.service.getFeesDataOfCollege(this.collegeId).subscribe(res => {
      // console.log(res);
      this.dataofclgArr = res.fees_list;
    });
  }

  examAccepted() {
    this.service.getExamAccepted(this.collegeId).subscribe(res => {
      // console.log(res);
      this.examAcceptedArr = res.SubCategory;
    });
  }

  openModal(modalId) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let modal;

      switch (modalId) {
        case 'filter-modal':
          modal = yield _this2.modalController.create({
            component: CoursesfeesPage_1 // replace with your filter modal component
            // Add any necessary data to pass to the modal here

          });
          break;

        case 'course-modal':
          modal = yield _this2.modalController.create({
            component: CoursesfeesPage_1 // replace with your course modal component
            // Add any necessary data to pass to the modal here

          });
          break;
        // Add other cases for additional modals

        default:
          break;
      }

      return yield modal.present();
    })();
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  predictadmission(id, CatId, subCatName) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
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
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    // Toggle the state of the icon
    this.isBookmarked = !this.isBookmarked; // Your logic to handle the click event, such as calling addclgshortlist
    // this.addclgshortlist();
  }

  addclgshortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this6.loginuserId) {
        _this6.presentSignInModal();

        return;
      }

      try {
        _this6.collegeId = collegeId;
        _this6.userId = _this6.loginuserId;
        _this6.active = '1';
        _this6.event = 'insert';
        const res = yield _this6.service.addclgshortlist(_this6.userId, _this6.collegeId, _this6.active, _this6.event).toPromise();

        if (res.response_code === '200') {
          _this6.shortlistedColleges.add(collegeId);

          _this6.isBookmarked = true; // Mark as bookmarked

          yield _this6.Alert('Success', 'College added to shortlist successfully');
        } else if (res.response_code === '100') {
          yield _this6.Alert('', 'College already added to shortlist');
        } else {
          yield _this6.Alert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this6.Alert('', 'An unexpected error occurred');
      }
    })();
  }

  Alert(header, message) {
    var _this7 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this7.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  brochure(collegeId) {
    var _this8 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // Check if token exists in local storage
      // this.token = localStorage.getItem('token');
      if (!_this8.loginuserId) {
        // Token is not present, so present sign-in modal
        _this8.presentSignInModal();

        return; // Exit function if token is missing
      }

      try {
        _this8.collegeId = collegeId;
        _this8.userId = _this8.loginuserId; // Call your service method to get the brochure

        const res = yield _this8.service.getbrochure(_this8.collegeId, _this8.userId).toPromise();
        console.log(_this8.collegeId);
        console.log(_this8.userId); // Handle different response codes

        if (res.response_code === '200') {
          yield _this8.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this8.showAlert('Error', 'Brochure not available');
        } else {
          yield _this8.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        // Handle errors from API call or any unexpected errors
        yield _this8.showAlert('Error', 'An unexpected error occurred');
      }
    })();
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

  clgpredict(id, CatId, subCatName) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.token = localStorage.getItem('token');
      if (!_this10.loginuserId) {
        _this10.presentSignInModal();

        return;
      } else {
        yield _this10.predictadmission(id, CatId, subCatName);
      }
    })();
  }

  ionViewWillLeave() {
    localStorage.removeItem('course_category');
  }

};

CoursesfeesPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

CoursesfeesPage.propDecorators = {
  courseClicked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};
CoursesfeesPage = CoursesfeesPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-coursesfees',
  template: _raw_loader_coursesfees_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_coursesfees_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], CoursesfeesPage);


/***/ }),

/***/ 65665:
/*!**************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursinfo/coursinfo.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursinfoPage": () => (/* binding */ CoursinfoPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coursinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./coursinfo.page.html */ 43745);
/* harmony import */ var _coursinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coursinfo.page.scss */ 43665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);














let CoursinfoPage = class CoursinfoPage {
  constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, formBuilder) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.formBuilder = formBuilder;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slidepic = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.selectedSegment = 'Latest';
    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.courseinfoArr = [];
    this.courseexamArry = [];
    this.commanlyaskedqaeArr = [];
    this.qunanswer = [];
    this.popprogrmmArry = [];
    this.clgimgArry = [];
    this.CourseCategoryArr = [];
    this.examListArr = [];
    this.CoursesByCatArr = [];
    this.sameclgArry = [];
    this.entranceExamControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
  }

  ngOnInit() {
    this.aplicationForm = this.formBuilder.group({
      student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z \'-]+$')]],
      mobile_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]{10}$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      entrence_exam: [''],
      rank: [''],
      score: ['']
    });
    this.studentForum = this.formBuilder.group({
      studentque: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.coursesArray = JSON.parse(localStorage.getItem('courses'));
    this.courseId = this.coursesArray[0].id;
    this.crsubcategory = localStorage.getItem('selectedCourseIdB'); //  alert(this.crsubcategory);

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      console.log(this.collegeId);
      this.getcourseinfo();
      this.coursesAdmissionProcess();
      this.entranceExamsForCourse();
      this.coursesfeesstucture();
      this.getCollegeProgrammesByID();
      this.clgbylocation();
      this.getclgdetail();
      this.getlatestnpop();
      this.getcourscategory();
      this.setupAutocomplete();
      this.getexamlist();
      this.getCourseByCategoryClg();
      this.populateUserData();
    });
  }

  populateUserData() {
    this.simpleuserdata();
    this.getResponseDataFromLocalStorage(); // Populate form fields if user data exists

    if (this.loginuserId) {
      this.aplicationForm.patchValue({
        student_name: this.username,
        email: this.email,
        mobile_no: this.phone
      });
    }
  }

  simpleuserdata() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      this.email = user.email; // Correctly assign the email

      this.username = user.name; // Correctly assign the username

      this.phone = user.phone; // Assuming the phone is stored in user object
    } else {
      console.log('No user information found in local storage.');
    }
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  openModal(modalId) {
    const modal = document.getElementById(modalId);
  }

  savCourseApplication() {
    if (this.aplicationForm.invalid) {
      this.aplicationForm.markAllAsTouched();
      return;
    }

    if (this.aplicationForm.valid) {
      this.service.saveapplication(this.aplicationForm.controls.student_name.value, this.aplicationForm.controls.email.value, this.aplicationForm.controls.mobile_no.value, this.aplicationForm.controls.category.value, this.aplicationForm.controls.college.value, this.aplicationForm.controls.course.value, this.aplicationForm.controls.entrence_exam.value, this.aplicationForm.controls.rank.value, this.aplicationForm.controls.score.value).subscribe(res => {
        this.showAlert('Submitted !', 'Thanks for submitting the details.Our counsellor will contact you shortly to provide details.');
        this.aplicationForm.reset();
        this.close();
      });
    }
  }

  cancel() {
    this.modal.dismiss('/tabM');
    this.modalController.dismiss({
      dismissed: true
    }).then(() => {// this.resetSelections();
    });
  }

  numberOnly(event) {
    console.log(event.target.value);
    const charCode = event.which ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  }

  close() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.modalController.dismiss();
    })();
  }

  exmdetail(id) {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.router.navigate(['/coursewiseexamdetails', id]);
    })();
  }

  getcourscategory() {
    this.service.getCoursescategory().subscribe(res => {
      console.log(res);
      this.CourseCategoryArr = res.data;
    });
  } //   getexamlist(){
  //     this.service.getexamlist('').subscribe(res => {
  //       console.log(res);
  //       this.examListArr = res.response_data;
  //     });
  // }


  getexamlist() {
    this.service.getexamlist('').subscribe(res => {
      this.examListArr = res.response_data;
      console.log(this.examListArr);
    });
  }

  setupAutocomplete() {
    this.filteredExams = this.entranceExamControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(value => this.filterExams(value)));
    this.entranceExamControl.valueChanges.subscribe(value => {
      this.aplicationForm.patchValue({
        entrence_exam: value
      });
    });
  }

  filterExams(searchTerm) {
    if (!searchTerm) {
      return this.examListArr;
    }

    return this.examListArr.filter(exam => exam.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getCourseByCategoryClg() {
    this.service.getcourcatogorybyclg(this.aplicationForm.value.category, this.collegeId).subscribe(res => {
      this.courseLoader = false;
      this.CoursesByCatArr = res.data;
    });
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  postQuestion() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3.loginuserId) {
        _this3.presentSignInModal();

        return;
      }

      if (_this3.studentForum.controls['studentque'].invalid) {
        _this3.studentForum.markAllAsTouched();
      } else {
        _this3.user_id = _this3.loginuserId;

        _this3.service.userqnspost(_this3.collegeId, _this3.courselevel, _this3.course, _this3.user_id, _this3.studentForum.value.studentque).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
            yield _this3.showAlert('Success', 'Question has been submitted. We will get back to you soon!');

            _this3.studentForum.reset();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }

  clgbylocation() {
    //  this.cityid =this.cityId;
    this.service.clgbylocation(this.cityid).subscribe(res => {
      console.log(res);
      this.popularclgarry = res.popularColleges;
      console.log(this.popularclgarry);
    });
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      console.log(this.clgdetailArry);
      this.collegename = res.college_detail[0].title;
      this.clgimgArry = res.college_images;
      this.clgcategory = res.college_detail[0].Collage_category;
      this.cityid = res.college_detail[0].cityid; // Bind cityid here

      this.clgofferingsamesity();
      this.cityname = res.college_detail[0].city;
      this.categories = res.college_detail[0].categoryId;
      console.log(this.categories);
    });
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  clgdetls(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  getcourseinfo() {
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this4.loadingController.create({
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
      yield loading.present(); // Show the loader

      _this4.courseid = _this4.crsubcategory;

      _this4.service.getcoursesinfo(_this4.courseid, _this4.collegeId).subscribe(res => {
        if (res.response_code === "200") {
          loading.dismiss(); // Data is available

          _this4.courseinfoArr = res.courseinfo;
          _this4.coursename = res.courseinfo[0].name;
          _this4.corsesfessarr = res.coursefees;
          _this4.eligibilityArr = res.eligibility;
          console.log(_this4.eligibilityArr);
        } else if (res.response_code === "400") {
          console.error('Error: Data not found or invalid request');
        } else {
          console.error('Unexpected response code:', res.response_code);
        } // Dismiss the loader after processing

      }, error => {
        console.error('Error fetching course info:', error); // Dismiss the loader in case of an error

        loading.dismiss();
      });
    })();
  }

  coursesfeesstucture() {
    this.service.getCoursesFeeStructure(this.courseid, this.collegeId).subscribe(res => {
      console.log(res);
      this.crsfeesstuctreArry = res.coursefees;
    });
  }

  coursesAdmissionProcess() {
    this.service.getCoursesAdmissionProcess(this.courseid, this.collegeId).subscribe(res => {
      console.log(res);
      this.admisionprocesArry = res.coursefees;
      this.commanlyaskedqaeArr = res.Commonaly_Asked_Questions;
    });
  }

  entranceExamsForCourse() {
    this.courseid = this.crsubcategory;
    this.service.getEntranceExamsForCourse(this.courseid, this.collegeId).subscribe(res => {
      console.log(res);
      this.courseexamArry = res.EntranceExams;
    });
  }

  clgofferingsamesity() {
    this.courseid = this.crsubcategory;
    this.service.clgofferingsamecity(this.courseid, this.cityid, this.collegeId).subscribe(res => {
      console.log(res);
      this.sameclgArry = res.colleges_Offereing_SameCourse; //  console.log(this.sameclgArry);
    });
  }

  getCollegeProgrammesByID() {
    let collegeTypeId = this.clgcategory;
    this.service.getpopprogrammes(this.collegeId, this.subcategory, collegeTypeId).subscribe(res => {
      // console.log(res);
      this.popprogrmmArry = res.popular_programmes; // console.log(this.popprogrmmArry);

      this.qunanswer = res.Commonaly_Asked_Questions;
    });
  }

  toggleIconColor(collegeId) {
    // Toggle the state of the icon
    this.isBookmarked = !this.isBookmarked;
  }

  predictadmission(id, CatId, subCatName) {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
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
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this6.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this7 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this7.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  addclgshortlist(collegeId) {
    var _this8 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this8.loginuserId) {
        _this8.presentSignInModal();

        return;
      }

      try {
        _this8.collegeId = collegeId;
        _this8.userId = _this8.loginuserId;
        _this8.active = '1';
        _this8.event = 'insert';
        const res = yield _this8.service.addclgshortlist(_this8.userId, _this8.collegeId, _this8.active, _this8.event).toPromise();

        if (res.response_code === '200') {
          _this8.shortlistedColleges.add(collegeId);

          _this8.isBookmarked = true; // Mark as bookmarked

          yield _this8.Alert('Success', 'College added to shortlist successfully');
        } else if (res.response_code === '100') {
          yield _this8.Alert('', 'College already added to shortlist');
        } else {
          yield _this8.Alert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this8.Alert('', 'An unexpected error occurred');
      }
    })();
  }

  Alert(header, message) {
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

  brochure(collegeId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this10.loginuserId) {
        // Token is not present, so present sign-in modal
        _this10.presentSignInModal();

        return; // Exit function if token is missing
      }

      try {
        _this10.collegeId = collegeId;
        _this10.userId = _this10.loginuserId; // Call your service method to get the brochure

        const res = yield _this10.service.getbrochure(_this10.collegeId, _this10.userId).toPromise();
        console.log(_this10.collegeId);
        console.log(_this10.userId); // Handle different response codes

        if (res.response_code === '200') {
          yield _this10.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this10.showAlert('Error', 'Brochure not available');
        } else {
          yield _this10.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        // Handle errors from API call or any unexpected errors
        yield _this10.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this11.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.token = localStorage.getItem('token');
      if (!_this12.loginuserId) {
        _this12.presentSignInModal();

        return;
      } else {
        yield _this12.predictadmission(id, CatId, subCatName);
      }
    })();
  } // Additional input validation for other fields


  checkValidInputDat(event, field) {
    if (field === 'student_name') {
      const pattern = /^[a-zA-Z \'-]*$/;

      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
      }
    } else if (field === 'mobile_no') {
      const pattern = /^[0-9]*$/;

      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      } // Limit to 10 digits


      if (event.target.value.length > 10) {
        event.target.value = event.target.value.slice(0, 10);
      }
    }
  }

};

CoursinfoPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}];

CoursinfoPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
  }]
};
CoursinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-coursinfo',
  template: _raw_loader_coursinfo_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_coursinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], CoursinfoPage);


/***/ }),

/***/ 7019:
/*!**********************************************************!*\
  !*** ./src/app/pages/clgdetails/cutoffs/cutoffs.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CutoffsPage": () => (/* binding */ CutoffsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cutoffs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./cutoffs.page.html */ 50927);
/* harmony import */ var _cutoffs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cutoffs.page.scss */ 89221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);












let CutoffsPage = class CutoffsPage {
  constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, shortlistService) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.slideOpts1 = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slideOptsnew = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slideOptssuited = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.segmentStud = 'tabs1';
    this.selectedSegment = 'Latest';
    this.filtersegment = 'tabsA';
    this.totalRateCount = 0; // selectedSegment = 'Latest';
    // public segmentStud = 'tabs1';

    this.segmentStudClgLife = 'tabsseg1';
    this.blogsArry = [];
    this.notificationarry = []; // totalRateCount: any;

    this.reviewsArry = [];
    this.reviewsArr = [];
    this.tableOfContent = [];
    this.clghightlight = [];
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.reviewsssArr = [];
    this.kcetarry = [];
    this.komedearry = [];
    this.selectedCourseName = null;
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked
  }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }

    this.selectedCourseName = localStorage.getItem('selectedCourseName');

    if (this.selectedCourseName) {
      console.log('Selected Course Name exists:', this.selectedCourseName);
    } else {
      console.log('Selected Course Name is null or undefined.');
    }

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.notifications();
      this.blogs();
      this.reviews();
      this.getlatestnpop();
      this.kcetcutoff();
      this.komedecutoff();
      this.coursesArray = JSON.parse(localStorage.getItem('courses')); // console.log(this.coursesArray);

      this.courseId = this.coursesArray[0].id;
    });
  }

  brochuresuit(collegeId) {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.loginuserId) {
        _this.presentSignInModal();

        return;
      } // alert(collegeId)


      try {
        // this.collegeId = collegeId;
        _this.userId = _this.loginuserId;
        const res = yield _this.service.getbrochure(collegeId, _this.userId).toPromise();
        console.log(_this.collegeId);
        console.log(_this.userId);

        if (res.response_code === '200') {
          yield _this.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this.showAlert('Error', 'Brochure not available');
        } else {
          yield _this.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  kcetcutoff() {
    this.college_id = this.collegeId;
    this.service.kcetcutoff(this.college_id).subscribe(res => {
      this.kcetarry = res.CoutOffRoundWise;
      console.log(this.kcetarry); // Assigning the round data

      this.round1 = res.CoutOffRoundWise.round1;
      this.round2 = res.CoutOffRoundWise.round2;
      this.round3 = res.CoutOffRoundWise.round3;
      console.log('Round 1:', this.comedround1);
    });
  }

  hasRoundData() {
    return this.round1 && this.round1.length > 0 || this.round2 && this.round2.length > 0 || this.round3 && this.round3.length > 0;
  }

  komedecutoff() {
    this.college_id = this.collegeId;
    this.service.komedecutoff(this.college_id).subscribe(res => {
      this.komedearry = res.CoutOffRoundWise;
      console.log(this.kcetarry); // Assigning the round data

      this.comedround1 = res.CoutOffRoundWise.round1;
      this.comedround2 = res.CoutOffRoundWise.round2;
    });
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  voteReview(reviewId, userId, ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
      console.log(res);
    });
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  filterTabs(ev) {
    this.filtersegment = ev.detail.value;
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      // console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.collegename = res.college_detail[0].title;
      this.currentYear = new Date().getFullYear();
      this.description = res.college_detail[0].description;
      this.whatnew = res.college_detail[0].what_new;
      this.tableOfContent = res.table_of_content;
      this.clghightlight = res.college_detail[0].CollegeHighlight;
      this.clgimgArry = res.college_images; // console.log(this.clgimgArry);

      this.cityidArry = res.college_detail[0].cityid;
      this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
      this.popularclg();
      this.categories = res.college_detail[0].categoryid; // console.log(this.categories);

      this.suitedclg();
    });
  }

  popularclg() {
    this.service.clgpopular(this.courseid).subscribe(res => {
      this.popularclgarry = res.response_data;
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      // console.log(res);
      this.notificationarry = res.response_data; // console.log(this.notificationarry);
    });
  }

  blogs() {
    this.service.latestblog(this.collegeId).subscribe(res => {
      this.blogsArry = res.latest_blogs;
    });
  }

  reviews() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
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
      yield loading.present(); // Display the loader

      _this2.service.reviewDetails(_this2.collegeId).subscribe(res => {
        if (res && res.data) {
          _this2.reviewsArry = res.data;
          _this2.reviewsArr = res.data.reviews;
          _this2.placement = res.data.reviews[0]?.placement_desc || 'No description available';
          _this2.infra = res.data.reviews[0]?.infrastructure_desc || 'No description available';
          _this2.faculty = res.data.reviews[0]?.faculty_desc || 'No description available';
          _this2.totalRateCount = res.data.totalRateCount;
          _this2.totalPlacementRateCount = res.data.totalPlacementRateCount;
          _this2.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
          _this2.totalFacultyRateCount = res.data.totalFacultyRateCount;
          _this2.totalHostelRateCount = res.data.totalHostelRateCount;
          _this2.totalCampusRateCount = res.data.totalCampusRateCount;
          _this2.totalMoneyRateCount = res.data.totalMoneyRateCount;
          _this2.one2twoRate = res.data.one2twoRate;
          _this2.two2threeRate = res.data.two2threeRate;
          _this2.three2fourRate = res.data.three2fourRate;
          _this2.four2fiveRate = res.data.four2fiveRate;
          _this2.totalReview = res.data.totalReview;
          _this2.reviewsssArr = res.data.reviews;
        } else {}

        loading.dismiss(); // Dismiss the loader after data is fetched or if empty
      }, error => {
        console.error('Error fetching reviews:', error); // this.showErrorToast('Failed to load reviews. Please try again later.');

        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  getStarArray() {
    const filledStars = Math.floor(this.totalRateCount); // Number of filled stars

    const hasHalfStar = this.totalRateCount - filledStars >= 0.5; // Check for half star

    const starArray = []; // Fill array with appropriate star names

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        starArray.push('star');
      } else if (i === filledStars && hasHalfStar) {
        starArray.push('star-half');
      } else {
        starArray.push('star-outline');
      }
    }

    return starArray;
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  predictadmission(id, CatId, subCatName) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
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
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    this.isBookmarked = !this.isBookmarked;
  }

  toggleShortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this6.loginuserId) {
        _this6.presentSignInModal();

        return;
      }

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

  Alert(header, message) {
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

  brochure(collegeId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // Check if token exists in local storage
      // this.token = localStorage.getItem('token');
      if (!_this10.loginuserId) {
        // Token is not present, so present sign-in modal
        _this10.presentSignInModal();

        return; // Exit function if token is missing
      }

      try {
        _this10.collegeId = collegeId;
        _this10.userId = _this10.loginuserId; // Call your service method to get the brochure

        const res = yield _this10.service.getbrochure(_this10.collegeId, _this10.userId).toPromise();
        console.log(_this10.collegeId);
        console.log(_this10.userId); // Handle different response codes

        if (res.response_code === '200') {
          yield _this10.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this10.showAlert('Error', 'Brochure not available');
        } else {
          yield _this10.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        // Handle errors from API call or any unexpected errors
        yield _this10.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this11.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.token = localStorage.getItem('token');
      if (!_this12.loginuserId) {
        _this12.presentSignInModal();

        return;
      } else {
        yield _this12.predictadmission(id, CatId, subCatName);
      }
    })();
  }

};

CutoffsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
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

CutoffsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-cutoffs',
  template: _raw_loader_cutoffs_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_cutoffs_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], CutoffsPage);


/***/ }),

/***/ 62737:
/*!************************************************************************!*\
  !*** ./src/app/pages/clgdetails/infrastructure/infrastructure.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfrastructurePage": () => (/* binding */ InfrastructurePage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_infrastructure_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./infrastructure.page.html */ 72442);
/* harmony import */ var _infrastructure_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infrastructure.page.scss */ 78788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);









let InfrastructurePage = class InfrastructurePage {
  constructor(router, service, activatedRoute, loadingController, modalController, alertController, shortlistService) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.modalController = modalController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.slideOpts1 = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slideOptsnew = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.segmentStud = 'tabs1';
    this.selectedSegment = 'Latest';
    this.filtersegment = 'tabsA';
    this.segmentStudClgLife = 'tabsseg1';
    this.clgdetailArry = [];
    this.clgimgArry = [];
    this.tableOfContent = [];
    this.clghightlight = [];
    this.reviewsssArr = [];
    this.facilitiesarr = [];
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked
  }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.getlatestnpop();
      this.infrarating();
    });
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

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  voteReview(reviewId, userId, ishelpful) {
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {});
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  filterTabs(ev) {
    this.filtersegment = ev.detail.value;
  }

  clgLife(ev) {
    this.segmentStudClgLife = ev.detail.value;
  }

  getclgdetail() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
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
      yield loading.present(); // Display the loader

      _this.service.getclgdetails(_this.collegeId).subscribe(res => {
        _this.clgdetailArry = res.college_detail;
        _this.collegename = res.college_detail[0].title;
        _this.currentYear = new Date().getFullYear();
        _this.whatnew = res.college_detail[0].what_new;
        _this.tableOfContent = res.table_of_content;
        _this.clghightlight = res.college_detail[0].CollegeHighlight;
        _this.facilitiesarr = res.college_detail[0].facilities;
        _this.clgimgArry = res.college_images;
        _this.cityidArry = res.college_detail[0].cityid;
        _this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
        _this.categories = res.college_detail[0].categoryid;
        loading.dismiss(); // Dismiss the loader after data is fetched
      }, error => {
        console.error('Error fetching college details:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  infrarating() {
    this.service.getinfrarating(this.collegeId).subscribe(res => {
      // console.log(res);
      this.infrareviewarry = res.data;
      this.infratotalrate = res.data.totalInfrastructureRate;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
      this.reviewsArry = res.data.infraReviews;
      this.reviewsssArr = res.data.infraReviews;
      this.totalReview = res.data.totalReview;
      this.totalInfrastructureRate = res.data.totalInfrastructureRate;
    });
  }

  getStarArray() {
    const filledStars = Math.floor(this.totalInfrastructureRate); // Number of filled stars

    const hasHalfStar = this.totalInfrastructureRate - filledStars >= 0.5; // Check for half star

    const starArray = []; // Fill array with appropriate star names

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        starArray.push('star');
      } else if (i === filledStars && hasHalfStar) {
        starArray.push('star-half');
      } else {
        starArray.push('star-outline');
      }
    }

    return starArray;
  }

};

InfrastructurePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_4__.ShortlistService
}];

InfrastructurePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-infrastructure',
  template: _raw_loader_infrastructure_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_infrastructure_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], InfrastructurePage);


/***/ }),

/***/ 4553:
/*!****************************************************!*\
  !*** ./src/app/pages/clgdetails/news/news.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPage": () => (/* binding */ NewsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./news.page.html */ 23726);
/* harmony import */ var _news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.page.scss */ 6027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);








let NewsPage = class NewsPage {
  constructor(router, service, activatedRoute, loadingController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slidepic = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.selectedSegment = 'Latest';
    this.segmentStud = 'tabs1';
    this.segmentStudClgLife = 'tabsseg1';
    this.blogsArry = [];
    this.notificationarry = [];
    this.reviewsArry = [];
    this.reviewsArr = [];
    this.clgimgArry = [];
    this.selectedCourseName = null;
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked
  }

  ngOnInit() {
    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    this.getResponseDataFromLocalStorage();
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid; // console.log(this.collegeId);

      this.getclgdetail();
      this.notifications();
      this.blogs();
      this.reviews();
      this.getlatestnpop();
    });
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  clgLife(ev) {
    this.segmentStudClgLife = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  getclgdetail() {
    this.details = '';
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.collegename = res.college_detail[0].title;
      this.clgimgArry = res.college_images;
      this.categories = res.college_detail[0].categoryId;
      this.suitedclg();
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      this.notificationarry = res.response_data;
    });
  }

  blogs() {
    this.service.latestblog(this.collegeId).subscribe(res => {
      this.blogsArry = res.latest_blogs;
    });
  }

  reviews() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
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
      yield loading.present(); // Show the loader

      _this.service.reviewDetails(_this.collegeId).subscribe(res => {
        // Check if data is present
        if (res && res.data && res.data.reviews) {
          _this.reviewsArry = res.data;
          _this.reviewsArr = res.data.reviews;
          _this.placement = res.data.reviews[0]?.placement_desc || '';
          _this.infra = res.data.reviews[0]?.infrastructure_desc || '';
          _this.faculty = res.data.reviews[0]?.faculty_desc || '';
          _this.totalRateCount = res.data.totalRateCount || 0;
          _this.totalPlacementRateCount = res.data.totalPlacementRateCount || 0;
          _this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount || 0;
          _this.totalFacultyRateCount = res.data.totalFacultyRateCount || 0;
          _this.totalHostelRateCount = res.data.totalHostelRateCount || 0;
          _this.totalCampusRateCount = res.data.totalCampusRateCount || 0;
          _this.totalMoneyRateCount = res.data.totalMoneyRateCount || 0;
          _this.one2twoRate = res.data.one2twoRate || 0;
          _this.two2threeRate = res.data.two2threeRate || 0;
          _this.three2fourRate = res.data.three2fourRate || 0;
          _this.four2fiveRate = res.data.four2fiveRate || 0;
        } else {
          console.warn('No data found for reviews.');
        }

        loading.dismiss(); // Dismiss the loader after successfully processing the data
      }, error => {
        console.error('Error fetching reviews:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  getStarArray() {
    const filledStars = Math.floor(this.totalRateCount); // Number of filled stars

    const hasHalfStar = this.totalRateCount - filledStars >= 0.5; // Check for half star

    const starArray = []; // Fill array with appropriate star names

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        starArray.push('star');
      } else if (i === filledStars && hasHalfStar) {
        starArray.push('star-half');
      } else {
        starArray.push('star-outline');
      }
    }

    return starArray;
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  voteReview(reviewId, userId, ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {// console.log(res);
    });
  }

};

NewsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

NewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-news',
  template: _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], NewsPage);


/***/ }),

/***/ 67229:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/placements/placements.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacementsPage": () => (/* binding */ PlacementsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_placements_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./placements.page.html */ 27859);
/* harmony import */ var _placements_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placements.page.scss */ 67509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);













let PlacementsPage = class PlacementsPage {
  constructor(router, service, activatedRoute, formBuilder, loadingController, platform, modalController, alertController, shortlistService) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.segmentStud = 'tabs1';
    this.selectedSegment = 'Latest';
    this.filtersegment = 'tabsA';
    this.segmentStudClgLife = 'tabsseg1';
    this.slideOpts1 = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slidepic = {
      initialSlide: 0,
      slidesPerView: 1.3
    };
    this.slideOptsnew = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.slideOptssuited = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked

    this.clgdetailArry = [];
    this.clgimgArry = [];
    this.tableOfContent = [];
    this.clghightlight = [];
    this.notificationarry = [];
    this.placementdataarry = [];
    this.placereviewarry = [];
    this.placementqaarry = [];
    this.placementinfo = [];
    this.reviewsArr = [];
    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.selectedCourseName = null;
  }

  ngOnInit() {
    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      this.getclgdetail();
      this.getlatestnpop();
      this.notifications();
      this.placementdata();
      this.placereview();
    });
  }

  brochuresuit(collegeId) {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.loginuserId) {
        _this.presentSignInModal();

        return;
      } // alert(collegeId)


      try {
        // this.collegeId = collegeId;
        _this.userId = _this.loginuserId;
        const res = yield _this.service.getbrochure(collegeId, _this.userId).toPromise();
        console.log(_this.collegeId);
        console.log(_this.userId);

        if (res.response_code === '200') {
          yield _this.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this.showAlert('Error', 'Brochure not available');
        } else {
          yield _this.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData); // Ensure that responseData is not empty and has at least one entry

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

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  filterTabs(ev) {
    this.filtersegment = ev.detail.value;
  }

  clgLife(ev) {
    this.segmentStudClgLife = ev.detail.value;
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = new Date().getFullYear();
      this.whatnew = res.college_detail[0].what_new;
      this.tableOfContent = res.table_of_content;
      this.clghightlight = res.college_detail[0].CollegeHighlight;
      this.clgimgArry = res.college_images;
      this.cityidArry = res.college_detail[0].cityid;
      this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
      this.popularclg();
      this.categories = res.college_detail[0].categoryid;
      console.log(this.categories);
      this.suitedclg();
    });
  }

  popularclg() {
    this.service.clgpopular(this.courseid).subscribe(res => {
      this.popularclgarry = res.response_data;
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);
    });
  }

  getlatestnpop() {
    this.details = '';
    this.service.getlatestnpop().subscribe(res => {
      // console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  notifications() {
    this.details = '';
    this.service.getnotification(this.collegeId).subscribe(res => {
      // console.log(res);
      this.notificationarry = res.response_data; // console.log(this.notificationarry);
    });
  }

  placementdata() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
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
      yield loading.present(); // Display the loader

      _this2.service.placementdata(_this2.collegeId).subscribe(res => {
        _this2.placementdataarry = res.placementlist;
        _this2.placementqaarry = res.Commonaly_Asked_Question;
        loading.dismiss(); // Dismiss the loader once data is fetched
      }, error => {
        console.error('Error fetching placement data:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  placereview() {
    this.details = '';
    this.service.placementreview(this.collegeId).subscribe(res => {
      // console.log(res);
      this.placereviewarry = res.data;
      this.totalReview = res.data.totalReview;
      this.reviewsArr = res.data.reviews;
      this.placementinfo = res.data.reviews;
      console.log(this.placementinfo);
      this.totalPlacementRate = res.data.totalPlacementRate;
      this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
      this.totalFacultyRateCount = res.data.totalFacultyRateCount;
      this.totalHostelRateCount = res.data.totalHostelRateCount;
      this.totalCampusRateCount = res.data.totalCampusRateCount;
      this.totalMoneyRateCount = res.data.totalMoneyRateCount;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate; //  console.log(this.four2fiveRate);
    });
  }

  getStarArray() {
    const filledStars = Math.floor(this.totalPlacementRate); // Number of filled stars

    const hasHalfStar = this.totalPlacementRate - filledStars >= 0.5; // Check for half star

    const starArray = []; // Fill array with appropriate star names

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        starArray.push('star');
      } else if (i === filledStars && hasHalfStar) {
        starArray.push('star-half');
      } else {
        starArray.push('star-outline');
      }
    }

    return starArray;
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  voteReview(reviewId, userId, ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
      console.log(res);
    });
  }

  predictadmission(id, CatId, subCatName) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
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
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    this.isBookmarked = !this.isBookmarked;
  }

  toggleShortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this6.loginuserId) {
        _this6.presentSignInModal();

        return;
      }

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

  Alert(header, message) {
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

  brochure(collegeId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this10.loginuserId) {
        _this10.presentSignInModal();

        return; // Exit function if token is missing
      }

      try {
        _this10.collegeId = collegeId;
        _this10.userId = _this10.loginuserId;
        const res = yield _this10.service.getbrochure(_this10.collegeId, _this10.userId).toPromise();
        console.log(_this10.collegeId);
        console.log(_this10.userId); // Handle different response codes

        if (res.response_code === '200') {
          yield _this10.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this10.showAlert('Error', 'Brochure not available');
        } else {
          yield _this10.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        // Handle errors from API call or any unexpected errors
        yield _this10.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this11.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.token = localStorage.getItem('token');
      if (!_this12.loginuserId) {
        _this12.presentSignInModal();

        return;
      } else {
        yield _this12.predictadmission(id, CatId, subCatName);
      }
    })();
  }

};

PlacementsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__.ShortlistService
}];

PlacementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-placements',
  template: _raw_loader_placements_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_placements_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], PlacementsPage);


/***/ }),

/***/ 85607:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/questionans/questionans.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionansPage": () => (/* binding */ QuestionansPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_questionans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./questionans.page.html */ 57401);
/* harmony import */ var _questionans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionans.page.scss */ 79257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);










let QuestionansPage = class QuestionansPage {
  constructor(router, service, activatedRoute, formBuilder, alertController, modalController, loadingController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.modalController = modalController;
    this.loadingController = loadingController;
    this.courseClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.segmentStud = 'tabs1';
    this.isFollowing = false;
    this.selectedSegment = 'Questions';
    this.clgdetailArry = [];
    this.clgimgArry = [];
    this.ansArry = [];
    this.unansArry = [];
    this.CourseCategoryArr = [];
    this.filtersegment = 'tabsA';
    this.CoursesByCatArr = []; // QaCollegeArr: any = []; 

    this.isClicked = [];
    this.isClicked2 = [];
  }

  ngOnInit() {
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.loginuserId = user.id;
    } else {}

    this.aplicationForm = this.formBuilder.group({
      course_category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      coursename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.studentForum = this.formBuilder.group({
      studentque: ['']
    });
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params['collegeid'];
      this.getclgdetail();
      this.getans();
      this.getUnanswer();
      this.toggleFollow('item: any');
    });
  }

  getCourseByCategoryClg() {
    this.service.getcourcatogorybyclg(this.aplicationForm.value.course_category, this.collegeId).subscribe(res => {
      this.courseLoader = false;
      this.CoursesByCatArr = res.data;
    });
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

  responseData(responseData) {
    throw new Error('Method not implemented.');
  }

  onCourseClicked(tabName) {
    alert(1);
    this.courseClicked.emit(tabName);
    this.segment = tabName;
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  filterTabs(ev) {
    this.filtersegment = ev.detail.value;
  }

  getcourscategory() {
    this.service.getCoursescategory().subscribe(res => {
      console.log(res);
      this.CourseCategoryArr = res.data;
    });
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = new Date().getFullYear();
      this.clgimgArry = res.college_images;
    });
  }

  getans() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
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
      yield loading.present(); // Display the loader

      _this.length = '5';
      _this.draw = '1';

      _this.service.qnsandans(_this.collegeId, _this.length, _this.draw).subscribe(res => {
        _this.ansArry = res.response_data;
        loading.dismiss(); // Dismiss the loader once data is fetched
      }, error => {
        console.error('Error fetching Q&A:', error);
        loading.dismiss(); // Dismiss the loader in case of an error
      });
    })();
  }

  getUnanswer() {
    this.length = '5';
    this.draw = '1';
    this.service.unanser(this.collegeId, this.length, this.draw).subscribe(res => {
      this.unansArry = res.response_data;
    });
  }

  postQuestion() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this2.loginuserId) {
        _this2.presentSignInModal();

        return;
      }

      if (_this2.studentForum.invalid) {
        _this2.studentForum.markAllAsTouched();
      } else {
        _this2.user_id = _this2.loginuserId;

        _this2.service.userqnspost(_this2.collegeId, _this2.courselevel, _this2.course, _this2.user_id, _this2.studentForum.value.studentque).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
            yield _this2.showAlert('Success', 'Question has been submitted. We will get back to you soon!');

            _this2.studentForum.reset();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
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
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  cancel() {
    this.modal.dismiss('/tabM');
    this.modalController.dismiss({
      dismissed: true
    }).then(() => {});
  }

  toggleFollow(item) {
    const action = item.isFollowing ? 'unfollow' : 'follow';
    this.user_id = this.loginuserId;
    this.service.followQuestion(action, this.user_id, item.question_id).subscribe(res => {
      item.isFollowing = !item.isFollowing;
    }, error => {
      console.error('Error:', error);
    });
  }

  toggleLikeDislike(answer, action) {
    answer.likeCount = answer.like || 0;
    answer.dislikeCount = answer.dis_like || 0;

    if (!answer || !answer.answer_id) {
      console.error('Answer ID is missing or undefined');
      return;
    }

    const user_id = this.loginuserId;
    const answer_id = answer.answer_id;
    this.service.voteAnswere(action, answer_id, user_id).subscribe(res => {
      if (res.response_code === '200') {
        if (action === 'like') {
          // Toggle like state
          answer.isLiked = !answer.isLiked;

          if (answer.isLiked) {
            // Increment likeCount if the user liked
            answer.likeCount += 1; // Remove dislike if previously disliked

            if (answer.isDisliked) {
              answer.isDisliked = false;
              answer.dislikeCount -= 1;
            }
          } else {
            // Decrement likeCount if unliked
            answer.likeCount -= 1;
          }
        } else if (action === 'dislike') {
          // Toggle dislike state
          answer.isDisliked = !answer.isDisliked;

          if (answer.isDisliked) {
            // Increment dislikeCount if the user disliked
            answer.dislikeCount += 1; // Remove like if previously liked

            if (answer.isLiked) {
              answer.isLiked = false;
              answer.likeCount -= 1;
            }
          } else {
            // Decrement dislikeCount if undisliked
            answer.dislikeCount -= 1;
          }
        }
      }
    }, error => {
      console.error('Error in voting:', error);
    });
  }

};

QuestionansPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}];

QuestionansPage.propDecorators = {
  courseClicked: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};
QuestionansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-questionans',
  template: _raw_loader_questionans_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_questionans_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], QuestionansPage);


/***/ }),

/***/ 75934:
/*!**********************************************************!*\
  !*** ./src/app/pages/clgdetails/reviews/reviews.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPage": () => (/* binding */ ReviewsPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./reviews.page.html */ 22362);
/* harmony import */ var _reviews_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.page.scss */ 62787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);












let ReviewsPage = class ReviewsPage {
  constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, shortlistService) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.platform = platform;
    this.modalController = modalController;
    this.alertController = alertController;
    this.shortlistService = shortlistService;
    this.totalRateCount = 0;
    this.selectedSegment = 'Latest';
    this.segmentStud = 'tabs1';
    this.segmentStudClgLife = 'tabsseg1';
    this.blogsArry = [];
    this.notificationarry = [];
    this.reviewsArry = [];
    this.reviewsArr = [];
    this.loginuserId = null;
    this.isBookmarked = false;
    this.shortlistedColleges = new Set();
    this.slideOptsnew = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.isThumbsUpClicked = false;
    this.isThumbsDownClicked = false;
    this.slideOptssuited = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.reviewsssArr = [];
    this.selectedCourseName = null;
  }

  ngOnInit() {
    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    this.getResponseDataFromLocalStorage();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      console.log(this.loginuserId);
    } else {
      console.log('No user information found in local storage.');
    }

    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      console.log(this.collegeId);
      this.getclgdetail();
      this.notifications();
      this.blogs();
      this.reviews();
      this.getlatestnpop();
    });
  }

  brochuresuit(collegeId) {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.loginuserId) {
        _this.presentSignInModal();

        return;
      } // alert(collegeId)


      try {
        // this.collegeId = collegeId;
        _this.userId = _this.loginuserId;
        const res = yield _this.service.getbrochure(collegeId, _this.userId).toPromise();
        console.log(_this.collegeId);
        console.log(_this.userId);

        if (res.response_code === '200') {
          yield _this.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this.showAlert('Error', 'Brochure not available');
        } else {
          yield _this.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this.showAlert('Error', 'An unexpected error occurred');
      }
    })();
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

  getclgid(collegeid) {
    this.router.navigate(['/clgdetails', collegeid]);
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  studentSay(ev) {
    this.segmentStud = ev.detail.value;
  }

  clgLife(ev) {
    this.segmentStudClgLife = ev.detail.value;
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      console.log(this.clgdetailArry);
      this.collegename = res.college_detail[0].title;
      this.collegename = res.college_detail[0].title;
      this.cityId = res.college_detail[0].cityid;
      this.categories = res.college_detail[0].categoryid;
      console.log(this.categories);
      this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
      this.suitedclg();
      this.popularclg();
    });
  }

  suitedclg() {
    this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
      console.log(res);
      this.suitclgarry = res.bestSuitedColleges;
      console.log(this.suitclgarry);
    });
  }

  popularclg() {
    this.service.clgpopular(this.courseid).subscribe(res => {
      this.popularclgarry = res.response_data;
    });
  }

  notifications() {
    this.service.getnotification(this.collegeId).subscribe(res => {
      console.log(res);
      this.notificationarry = res.response_data;
      console.log(this.notificationarry);
    });
  }

  blogs() {
    this.service.latestblog(this.collegeId).subscribe(res => {
      console.log(res);
      this.blogsArry = res.latest_blogs;
    });
  }

  reviews() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
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
      const timeoutId = setTimeout(() => {
        if (loading) {
          loading.dismiss();
        }
      }, 5000);

      _this2.service.reviewDetails(_this2.collegeId).subscribe(res => {
        clearTimeout(timeoutId);

        if (res && res.data && res.data.reviews && res.data.reviews.length > 0) {
          _this2.reviewsArry = res.data;
          _this2.reviewsArr = res.data.reviews;
          console.log(_this2.reviewsArr);
          _this2.placement = res.data.reviews.placement_desc;
          _this2.infra = res.data.reviews[0].infrastructure_desc;
          _this2.faculty = res.data.reviews[0].faculty_desc;
          _this2.campus = res.data.reviews[0].campus_desc;
          _this2.money = res.data.reviews[0].money_desc;
          _this2.hostel = res.data.reviews[0].hostel_desc;
          _this2.totalRateCount = res.data.totalRateCount;
          _this2.totalPlacementRateCount = res.data.totalPlacementRateCount;
          _this2.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
          _this2.totalFacultyRateCount = res.data.totalFacultyRateCount;
          _this2.totalHostelRateCount = res.data.totalHostelRateCount;
          _this2.totalCampusRateCount = res.data.totalCampusRateCount;
          _this2.totalMoneyRateCount = res.data.totalMoneyRateCount;
          _this2.one2twoRate = res.data.one2twoRate;
          _this2.two2threeRate = res.data.two2threeRate;
          _this2.three2fourRate = res.data.three2fourRate;
          _this2.four2fiveRate = res.data.four2fiveRate;
          _this2.totalReview = res.data.totalReview;
        } else {
          console.warn('No reviews available.');
        }

        loading.dismiss();
      }, error => {
        clearTimeout(timeoutId);
        console.error('Error fetching reviews:', error);
        loading.dismiss();
      });
    })();
  }

  getStarArray(rating) {
    const starArray = [];
    const fullStars = Math.floor(rating); // Full stars

    const halfStar = rating % 1 !== 0; // Half star check

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Empty stars

    for (let i = 0; i < fullStars; i++) {
      starArray.push('star');
    }

    if (halfStar) {
      starArray.push('star-half'); // Half star
    }

    for (let i = 0; i < emptyStars; i++) {
      starArray.push('star-outline'); // Empty star
    }

    return starArray;
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  voteReview(reviewId, userId, ishelpful) {
    console.log(this.value);
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
      console.log(res);
    });
  }

  compclg(collegeId) {
    this.router.navigate(['/clgcompare', collegeId]);
  }

  predictadmission(id, CatId, subCatName) {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
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
    var _this4 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.modalController.dismiss();
    })();
  }

  presentSignInModal() {
    var _this5 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this5.modalController.create({
        component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_5__.PopuplogsignPage
      });
      return yield modal.present();
    })();
  }

  toggleIconColor(collegeId) {
    this.isBookmarked = !this.isBookmarked;
  }

  toggleShortlist(collegeId) {
    var _this6 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this6.loginuserId) {
        _this6.presentSignInModal();

        return;
      }

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

  Alert(header, message) {
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

  brochure(collegeId) {
    var _this10 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this10.loginuserId) {
        _this10.presentSignInModal();

        return;
      }

      try {
        _this10.collegeId = collegeId;
        _this10.userId = _this10.loginuserId;
        const res = yield _this10.service.getbrochure(_this10.collegeId, _this10.userId).toPromise();
        console.log(_this10.collegeId);
        console.log(_this10.userId);

        if (res.response_code === '200') {
          yield _this10.showAlert('Success', 'Brochure sent successfully by mail');
        } else if (res.response_code === '500') {
          yield _this10.showAlert('Error', 'Brochure not available');
        } else {
          yield _this10.showAlert('Error', 'An unexpected error occurred');
        }
      } catch (error) {
        yield _this10.showAlert('Error', 'An unexpected error occurred');
      }
    })();
  }

  showAlert(header, message) {
    var _this11 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this11.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  clgpredict(id, CatId, subCatName) {
    var _this12 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this12.loginuserId) {
        _this12.presentSignInModal();

        return;
      } else {
        yield _this12.predictadmission(id, CatId, subCatName);
      }
    })();
  }

};

ReviewsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
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

ReviewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-reviews',
  template: _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_reviews_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ReviewsPage);


/***/ }),

/***/ 62932:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/scolarship/scolarship.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScolarshipPage": () => (/* binding */ ScolarshipPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scolarship_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./scolarship.page.html */ 48485);
/* harmony import */ var _scolarship_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scolarship.page.scss */ 59688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);









let ScolarshipPage = class ScolarshipPage {
  constructor(router, service, activatedRoute, formBuilder, alertController, loadingController) {
    this.router = router;
    this.service = service;
    this.activatedRoute = activatedRoute;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.slideOptspage = {
      initialSlide: 0,
      slidesPerView: 1.1
    };
    this.selectedSegment = 'Latest';
    this.clgdetailArry = [];
    this.clgimgArry = [];
    this.reviewsArr = [];
    this.isThumbsUpClicked = false; // Initially not clicked

    this.isThumbsDownClicked = false; // Initially not clicked

    this.selectedCourseName = null;
  }

  ngOnInit() {
    this.selectedCourseName = localStorage.getItem('selectedCourseName');
    this.getResponseDataFromLocalStorage();
    this.activatedRoute.params.subscribe(params => {
      this.collegeId = params.collegeid;
      console.log(this.collegeId);
      this.getclgdetail();
      this.scolshipdata();
      this.review();
      this.scolshipdata();
      this.getlatestnpop();
      this.infrarating();
    });
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

  voteReview(reviewId, userId, ishelpful) {
    this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {});
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

  segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }

  getclgdetail() {
    this.service.getclgdetails(this.collegeId).subscribe(res => {
      console.log(res);
      this.clgdetailArry = res.college_detail;
      this.collegename = res.college_detail[0].title;
      this.currentYear = new Date().getFullYear();
      this.clgimgArry = res.college_images;
      console.log(this.clgimgArry);
      this.cityidArry = res.college_detail[0].cityid;
      console.log(this.cityidArry);
      this.courseId = res.college_detail[0].coursesandfees[0].sub_category;
      console.log('Sub Category:', this.courseId);
      this.categories = res.college_detail[0].categoryId;
      console.log(this.categories);
    });
  }

  review() {
    var _this = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
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

      _this.service.getclgreview(_this.collegeId).subscribe(res => {
        if (res && res.data) {
          _this.reviewsArry = res.data;
          _this.reviewsArr = res.data.reviews;
          _this.overallrating = res.data.reviews?.[0]?.totalRatingCount || 0;
          _this.totalRateCount = res.data.totalRateCount || 0;
          _this.totalPlacementRateCount = res.data.totalPlacementRateCount || 0;
          _this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount || 0;
          _this.totalFacultyRateCount = res.data.totalFacultyRateCount || 0;
          _this.totalHostelRateCount = res.data.totalHostelRateCount || 0;
          _this.totalCampusRateCount = res.data.totalCampusRateCount || 0;
          _this.totalMoneyRateCount = res.data.totalMoneyRateCount || 0;
          _this.one2twoRate = res.data.one2twoRate || 0;
          _this.two2threeRate = res.data.two2threeRate || 0;
          _this.three2fourRate = res.data.three2fourRate || 0;
          _this.four2fiveRate = res.data.four2fiveRate || 0;
          _this.totalReview = res.data.totalReview || 0;
        } else {
          console.warn('Data is empty or null');
        }

        loading.dismiss();
      }, error => {
        console.error('Error fetching reviews:', error);
        loading.dismiss();
      });
    })();
  }

  infrarating() {
    this.service.getinfrarating(this.collegeId).subscribe(res => {
      console.log(res);
      this.infrareviewarry = res.data;
      this.infratotalrate = res.data.totalInfrastructureRate;
      this.one2twoRate = res.data.one2twoRate;
      this.two2threeRate = res.data.two2threeRate;
      this.three2fourRate = res.data.three2fourRate;
      this.four2fiveRate = res.data.four2fiveRate;
      this.reviewsArry = res.data.infraReviews;
      console.log(this.reviewsArry);
    });
  }

  scolshipdata() {
    this.service.getscolershipinfo(this.collegeId).subscribe(res => {
      console.log(res);
      this.scolshipdataarry = res.scholarship_data;
      this.scholarshipdata = res.scholarship_data[0].scholarship;
    });
  }

  getlatestnpop() {
    this.service.getlatestnpop().subscribe(res => {
      console.log(res);
      this.latenpopArr = res.latest_blogs;
      this.popularArr = res.popular_blogs;
    });
  }

  getStarIcons() {
    const fullStars = Math.floor(this.totalRateCount);
    const halfStars = this.totalRateCount % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return {
      full: new Array(fullStars),
      half: new Array(halfStars),
      empty: new Array(emptyStars)
    };
  }

};

ScolarshipPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

ScolarshipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-scolarship',
  template: _raw_loader_scolarship_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_scolarship_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ScolarshipPage);


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

/***/ 17381:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/admissions/admissions.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.settitl {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0;\n}\n\n.setnotification {\n  width: 360px;\n  height: 370px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.setcrd {\n  width: 211px;\n  height: 197px;\n}\n\n.star-icon {\n  color: #e5b60c;\n}\n\n.dticon {\n  color: #11c918;\n}\n\n.thirdsection.mt {\n  margin-top: 1rem;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n  margin: 6px 6px 20px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.suitedclg {\n  padding-top: 39px;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec .firstrow p {\n  margin: 0;\n}\n\n.forumsec .firstrow h5 {\n  margin: 0;\n}\n\n.setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlzc2lvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdUOztBQURJO0VBQ0ksYUFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFJWjs7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBRFk7RUFDSSxnQkFBQTtBQUdoQjs7QUFEWTtFQUNJLGNBQUE7QUFHaEI7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHdGQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksZ0NBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdaOztBQURRO0VBQ0ksZ0JBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7QUFHWjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQUVIOztBQUFFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7QUFJSjs7QUFEQztFQUNHLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUhJO0VBQ0kscUNBQUE7QUFLUjs7QUFEQztFQUNHLG1CQUFBO0FBSUo7O0FBRkM7RUFDRyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtK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Wjs7QUFBUTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFWjs7QUFLSTtFQUVPLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUhYOztBQUlXO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGZjs7QUFJVztFQUVJLGFBQUE7RUFDQSx5QkFBQTtBQUhmOztBQU1PO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFHQSx5QkFBQTtBQUxYOztBQU9PO0VBQ0ksaUNBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxYOztBQU9PO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUpYOztBQU1PO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSFg7O0FBTU87RUFDQyxXQUFBO0FBSFI7O0FBUU07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUxSOztBQVFJO0VBQ0ksZUFBQTtFQUFpQixnQkFBQTtFQUNqQixZQUFBO0VBQWMsNEJBQUE7RUFDZCxVQUFBO0VBQVksWUFBQTtFQUNaLG9CQUFBO0VBQXNCLGlCQUFBO0VBQ3RCLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsMkJBQUE7RUFBNkIsc0JBQUE7QUFDckM7O0FBRU0sMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFFcEI7O0FBQ00sNkJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQVcsMEJBQUE7QUFHbkIiLCJmaWxlIjoiYWRtaXNzaW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5wdC0xMntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbn1cclxuLnRhYmJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHggMHB4O1xyXG4gICAgLmJnc21vY2tncmF5e1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZlO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZHtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaHRjYXJke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWNjb3JkaWFuc3tcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgMTA1LCAwLjE1KSAwcHggMnB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAxcHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICBpb24tYWNjb3JkaW9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVseyAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50Ymxjb250ZW50e1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgIH1cclxufVxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZmY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgcGFkZGluZzo2cHggOHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIH1cclxuICB0YWJsZSB0aHtcclxuICAgYmFja2dyb3VuZDphbGljZWJsdWU7XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5pY29uYnRue1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICB9XHJcbiAgLnNlZ21lbnRTdHVke1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweDtcclxuICB9XHJcbiBcclxuIC5zZXJjaGJhcntcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzowIWltcG9ydGFudDtcclxuICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gfSBcclxuIC5jYXNrcW5ze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuIH1cclxuIC5maWx0ZXItYnRue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIH1cclxuIH1cclxuIC5jYXJkY3VzdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuIH1cclxuIC5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gbGkge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJkZDI2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4udXNlclJldmlld3tcclxuICAgIC5maXJjdGNoYXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZGZlNDtcclxuICAgICAgICBjb2xvcjogI2E3MGMwYztcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIHAuc2J0eHR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjNGI0YjRiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5yYXRlYnl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJhdGluZ0J0bnN7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAudGh1bWJpY29ue1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOGI4YjhiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZXZudHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICB9XHJcbiAgICAuYmx1dHh0e1xyXG4gICAgICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG4uaWNvbmZpeHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG4uYmx1dHh0e1xyXG4gICAgY29sb3I6ICMwMDgxZGM7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG4gLnNldHRpdGx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gfVxyXG4gXHJcblxyXG4gLnNldG5vdGlmaWNhdGlvbntcclxuICAgIHdpZHRoOjM2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIC5zZXR0aXRsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTRhZmZlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IzAwODNkYztcclxuICAgIH1cclxufVxyXG5cclxuLnNldGNyZHtcclxuICAgIHdpZHRoOiAyMTFweDtcclxuICAgIGhlaWdodDogMTk3cHg7XHJcbn1cclxuLnN0YXItaWNvbiB7XHJcbiAgICBjb2xvcjogI2U1YjYwYztcclxuICB9XHJcbiAgXHJcbiAgLmR0aWNvbntcclxuICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gIH1cclxuICAudGhpcmRzZWN0aW9uLm10e1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcbiAgLncxMDB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAudGhpcmRzZWN0aW9uIC5IZWFkVHh0IGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uYm9vbWFya3tcclxuICAgIC0tY29sb3I6IGdyYXk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2NmY2ZjZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcbi5zZXRwaWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogNnB4IDZweCAyMHB4O1xyXG59XHJcblxyXG5cclxuLnJhdGVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnN1aXRlZGNsZ3tcclxuICAgIHBhZGRpbmctdG9wOiAzOXB4O1xyXG59XHJcblxyXG5cclxuLmZvcnVtc2Vje1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0NiAyNDUgMjMwKTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4IDIzNiAyMzkpO1xyXG4gICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdHJvd3tcclxuICAgIFxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZXRkaXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4OyAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc3BhbntcclxuICAgICAgICBjb2xvcjogIzAwODFkYztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2V0bGlrZWNvbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuXHJcblxyXG4gICAgLnRoaXJkc2VjdGlvbnBvcHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQ1LCAyNTUsIDAuMzgwMzkyMTU2OSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgLkhlYWRUeHQge1xyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9IFxyXG5cclxuICBcclxuICAgIC5zaXplX3NldHBvcCB7XHJcbiAgICAgICAgLy8gICBtaW4taGVpZ2h0OiAyNzBweDtcclxuICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgY29udGFpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xyXG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XHJcbiAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAuYm9vbWFya3tcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLS1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICAuaW1nX2FsaWducG9wIHtcclxuICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIC8vIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgLy8gdG9wOiAtMTIlO1xyXG4gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XHJcbiAgICAgICB9XHJcbiAgICAgICAuc3BucG9we1xyXG4gICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgLnRpdF9zZXRwb3B7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAuYnRuc2V0c3tcclxuICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBpb24taWNvbi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiBibHVlOyBcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAuc3BhbntcclxuICAgICAgICBjb2xvcjogIzAwODFkYztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXHJcbiAgICAgICAgY29sb3I6IGJsYWNrOyAvKiBCbGFjayBvdXRsaW5lIGluaXRpYWxseSAqL1xyXG4gICAgICAgIGZpbGw6IG5vbmU7IC8qIE5vIGZpbGwgKi9cclxuICAgICAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXHJcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyOyAvKiBBZGp1c3QgYm9yZGVyIHRoaWNrbmVzcyAqL1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogVGh1bWJzLVVwIGljb24gY2xpY2tlZCAqL1xyXG4gICAgICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xyXG4gICAgICAgIGZpbGw6IGJsdWU7IC8qIEZpbGwgYmx1ZSB3aGVuIGNsaWNrZWQgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogVGh1bWJzLURvd24gaWNvbiBjbGlja2VkICovXHJcbiAgICAgIC50aHVtYnMtZG93bltzdHlsZSo9XCJyZWRcIl0ge1xyXG4gICAgICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXHJcbiAgICAgIH1cclxuICAgICJdfQ== */");

/***/ }),

/***/ 2002:
/*!*******************************************************!*\
  !*** ./src/app/pages/clgdetails/clgdetails.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  font-size: 14px;\n}\n\n.blue {\n  color: #0083dc;\n}\n\n.green {\n  color: #88d834;\n}\n\n.greenbtn {\n  --background:#88d834!important;\n}\n\n.gray {\n  color: gray;\n}\n\n.bgblue {\n  background: #0083dc;\n}\n\n.bggreen {\n  background: #88d834;\n}\n\n.starrate {\n  color: #e5b60c;\n}\n\n.px-10 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.smllbtn {\n  --box-shadow: none;\n}\n\n.segment1 {\n  margin-top: 10px;\n}\n\n.segment1 ion-segment-button {\n  border-radius: 22px;\n  text-transform: capitalize;\n  margin: 5px;\n}\n\n.segment1 ion-label {\n  color: black;\n}\n\n.segment2 {\n  margin-top: 16px;\n}\n\n.segment2 ion-segment-button {\n  text-transform: capitalize;\n}\n\n.clgcoverphoto {\n  height: 17vh;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 2rem;\n}\n\n.clgcoverphoto img.log {\n  width: 70px;\n  height: 65px;\n  position: absolute;\n  bottom: -30px;\n  left: 10px;\n  border: 1px solid #d5d5d5;\n  background: #fff;\n  z-index: 1;\n  border-radius: 5px;\n  padding: 2px;\n  object-fit: cover;\n}\n\n.clgcoverphoto .imgclg {\n  width: 100%;\n  height: 18vh;\n}\n\n.shortInfo h4 {\n  margin: 0;\n  font-size: 16px;\n}\n\n.shortInfo p {\n  display: flex;\n  flex-wrap: wrap;\n  color: #0083dc;\n  margin: 6px 0px;\n  font-size: 14px;\n}\n\n.shortInfo p .location, .shortInfo p .cment {\n  color: #0083dc;\n}\n\n.shortInfo p .starrate {\n  color: #e5b60c;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.mr-6 {\n  margin-right: 6px;\n}\n\n.bglightgry {\n  background: #f1f5f9;\n  margin-right: 7px;\n  padding: 4px 8px;\n  display: inline-block;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin-right: 4px;\n  border: 1px solid #f1f1f1;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.rates {\n  text-align: right;\n}\n\n.rates ion-icon {\n  margin-right: 4px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 16px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.populartxt {\n  margin: 16px 10px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.courseCard {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 5px 5px 5px 5px;\n  border-radius: 10px;\n}\n\n.courseCard .headpart {\n  padding: 8px 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.courseCard .headpart h3 {\n  font-weight: 500;\n  font-size: 16px !important;\n  color: #0083dc;\n  margin-bottom: 6px !important;\n}\n\n.courseCard .headpart .star {\n  color: #e5b60c;\n}\n\n.courseCard .midpart span {\n  color: #797979;\n}\n\n.courseCard .midpart p {\n  margin: 6px 0;\n}\n\n.courseCard .footerpart {\n  padding: 0px 10px 10px;\n}\n\n.courseCard .greenbtn {\n  --background:#88d834!important;\n}\n\n.courseCard .boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.courseCard ion-button {\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --box-shadow: none;\n}\n\n.textcenter {\n  text-align: center;\n}\n\nul {\n  padding: 0;\n  font-size: 14px;\n  list-style-type: none;\n}\n\n.icontxt {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n}\n\n.icontxt ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\n.mx-12 {\n  margin: 0 12px;\n}\n\n.thirdsection {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsection .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.imgHead {\n  display: flex;\n  justify-content: space-between;\n}\n\n.size_set {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_set ion-button {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.size_set .boomark {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_align {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spn {\n  color: var(--ion-color-secondary);\n  border-right: 1px solid gray;\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_set {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\n.setrw {\n  border-bottom: 1px solid #e5e5e5;\n  margin: 12px 0;\n  padding-bottom: 8px;\n}\n\n.setrw img {\n  border-radius: 10px;\n  width: 100%;\n  border: 1px solid lightgray;\n  height: 85px;\n}\n\n.setrw p.p1 {\n  margin: 0;\n}\n\n.p2 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.p3 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.angular-editor-textarea ol {\n  list-style: decimal !important;\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n  padding: 1rem !important;\n}\n\n.angular-editor-textarea ul {\n  list-style: unset !important;\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n  padding: 1rem !important;\n}\n\nh1 {\n  font-size: 14px !important;\n}\n\n.tabecontent1 table th:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabecontent1 table th {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabecontent1 table th,\n.tabecontent1 table td.strong {\n  background-color: #bddbfa;\n  color: #353535 !important;\n  font-weight: 600 !important;\n  text-align: left !important;\n}\n\n.tabecontent1 table tr td:not(:last-child) {\n  border-right: 1px dashed #dfdfdf;\n}\n\n.tabecontent1 table tr td {\n  color: #353535;\n  text-align: left;\n  background-color: white;\n  font-size: var(--text-regular);\n  padding: 0.5rem 1.15rem;\n  line-height: 1.375rem;\n}\n\n.tabecontent1 table tr {\n  border-bottom: 1px dashed #dfdfdf;\n}\n\n.tabecontent1 table th:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.tabecontent1 p {\n  text-align: justify;\n}\n\n.tabecontent1 ul {\n  list-style: unset !important;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.setmat {\n  width: 100%;\n}\n\n.setnotification li {\n  color: dodgerblue;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #0083dc;\n  color: #fff;\n  padding: 10px;\n}\n\n.setnotification .settitle h5 {\n  margin: 0;\n  font-weight: 400;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.contactsec {\n  padding-top: 10px;\n  border-radius: 10px;\n  margin: 10px;\n}\n\n.setloc {\n  color: blue;\n  display: flex;\n}\n\nspan {\n  display: flex;\n  align-items: center;\n}\n\n.firstrow p {\n  margin: 0;\n}\n\n.firstrow h5 {\n  margin: 0;\n}\n\n.secrow {\n  border-bottom: 1px solid #ddd;\n}\n\n.setp {\n  margin: 5px;\n}\n\n.setbttn {\n  width: 80%;\n  margin: auto;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.tablediv {\n  overflow-x: scroll;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n}\n\n.botmtabset {\n  font-size: 10px;\n}\n\n.shearesec {\n  margin: 10px 0px 2px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\n  border-radius: 6px;\n  padding: 2px;\n}\n\n.shearesec .labelset {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.shearesec .setimg {\n  width: 30px;\n  margin: 3px 6px;\n  border-radius: 4px;\n}\n\n.shearesec .set {\n  height: 30px;\n  position: relative;\n}\n\n.subact {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.subact .shareicon {\n  font-size: 20px;\n  color: #0081dc;\n}\n\n.caskqns {\n  margin-top: 1rem;\n}\n\n.setnoimage {\n  height: 150px;\n  width: 100%;\n}\n\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid #746ac0;\n}\n\n.clgdescription {\n  background: #3b82f624;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.datanfound {\n  border: 1px solid gray;\n  border-radius: 10px;\n  padding: 7px;\n  margin-bottom: 21px;\n}\n\n.staricon {\n  color: #FFC107;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\n\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* Base styles for the icons */\n\n/* Default icon appearance with no fill (just border/outline) */\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZ2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksOEJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUpDO0VBQ0csY0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxnQkFBQTtBQVdKOztBQVZJO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFZUjs7QUFWSTtFQUNJLFlBQUE7QUFZUjs7QUFUQTtFQUNJLGdCQUFBO0FBWUo7O0FBWEk7RUFDSSwwQkFBQTtBQWFSOztBQVZBO0VBRUksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBWEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYUo7O0FBWEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVRJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFZUjs7QUFWSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBWVI7O0FBWFE7RUFDSSxjQUFBO0FBYVo7O0FBWFE7RUFDSSxjQUFBO0FBYVo7O0FBVEE7RUFDSSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFD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QUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBcEJqQzs7QUF1QkUsMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFuQmhCOztBQXNCRSw2QkFBQTs7QUFDQTtFQUNFLFNBQUE7RUFBVywwQkFBQTtBQWxCZiIsImZpbGUiOiJjbGdkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgIFxyXG59XHJcbi5ibHVle1xyXG4gICAgY29sb3I6ICMwMDgzZGM7XHJcbiB9XHJcbi5ncmVlbntcclxuICAgIGNvbG9yOiAjODhkODM0O1xyXG59XHJcbi5ncmVlbmJ0bntcclxuICAgIC0tYmFja2dyb3VuZDojODhkODM0IWltcG9ydGFudDtcclxufVxyXG4uZ3JheXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbi5iZ2JsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4M2RjO1xyXG4gfVxyXG4uYmdncmVlbntcclxuICAgIGJhY2tncm91bmQ6ICM4OGQ4MzQ7XHJcbn1cclxuIC5zdGFycmF0ZXtcclxuICAgIGNvbG9yOiAjZTViNjBjO1xyXG59XHJcbi5weC0xMHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ucHQtMTJ7XHJcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xyXG59XHJcbi5zbWxsYnRue1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5zZWdtZW50MXtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDsgICBcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxufVxyXG4uc2VnbWVudDJ7IFxyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG4uY2xnY292ZXJwaG90b3tcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvY2xnX2ltZy9jbGdfaW1nLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBpbWcubG9ne1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICAuaW1nY2xne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4dmg7XHJcbiAgfVxyXG59XHJcbi5zaG9ydEluZm97XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLmxvY2F0aW9uLCAuY21lbnR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcnJhdGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTViNjBjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWwtNHtcclxuICAgIG1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG4ubXItNntcclxuICAgIG1hcmdpbi1yaWdodDo2cHg7XHJcbn1cclxuLmJnbGlnaHRncnl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLmNhcGl0YWxpemV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4udGFiYm9keXtcclxuICAgIHBhZGRpbmc6MTJweCAwcHg7XHJcbiAgICAuYmdzbW9ja2dyYXl7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZlO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWR7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2h0Y2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJhdGVzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbn1cclxuLnRibGNvbnRlbnR7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7IFxyXG4gICAgfVxyXG59XHJcbi5hY2NvcmRpYW5ze1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCAxMDUsIDAuMTUpIDBweCAycHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDFweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLnBhcmFncmFwaCBpb24tbGFiZWx7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuICAgIGlvbi1hY2NvcmRpb257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWx7ICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnBvcHVsYXJ0eHR7XHJcbiAgICBtYXJnaW46IDE2cHggMTBweDtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuLmNvdXJzZUNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuaGVhZHBhcnR7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGFye1xyXG4gICAgICAgICAgICBjb2xvcjogI2U1YjYwYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWlkcGFydHtcclxuICAgICAgICAvLyBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVycGFydHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmdyZWVuYnRue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDojODhkODM0IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ib29tYXJre1xyXG4gICAgICAgIC0tY29sb3I6IGdyYXk7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNjZmNmY2Y7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dGNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG51bHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmljb250eHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6NnB4IDhweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgdGFibGUgdGh7XHJcbiAgIGJhY2tncm91bmQ6YWxpY2VibHVlO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaWNvbmJ0bntcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5saWtlRGlze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAubGlrZXtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgICAuZGlzbGlrZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcbiAgLm14LTEye1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgfVxyXG5cclxuLy8gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNsaWRlciBjYXJkLS0tLS0tLS0tLS0tLVxyXG5cclxuLnRoaXJkc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjAzKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgLkhlYWRUeHQge1xyXG4gICAgaDV7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLmltZ0hlYWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiAgLnNpemVfc2V0IHtcclxuIC8vICAgbWluLWhlaWdodDogMjcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb250YWluOiB1bnNldDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgIH1cclxuICAgIC5ib29tYXJre1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcclxuICAgICAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB9XHJcbn1cclxuLmltZ19hbGlnbiB7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIC8vIGxlZnQ6IDIwcHg7XHJcbiAgICAvLyB0b3A6IC0xMiU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xyXG59XHJcbi5zcG57XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi50aXRfc2V0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxufVxyXG4uYnRuc2V0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gbmV3cyAmdXBkYXRlcyBzZWN0aW9uXHJcbi5zZXRydyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICAgIHAucDEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbi5wMntcclxuICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDZweCAwcHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucDN7XHJcbiAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA2cHggMHB4IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYSBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRoIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRoLFxyXG4gICAgLnRhYmVjb250ZW50MSB0YWJsZSB0ZC5zdHJvbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGRiZmE7XHJcbiAgICAgICAgY29sb3I6ICMzNTM1MzUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRyIHRkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjZGZkZmRmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRyIHRkIHtcclxuICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1yZWd1bGFyKTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS4xNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJlY29udGVudDEgdGFibGUgdHIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RmZGZkZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmVjb250ZW50MSB0YWJsZSB0aDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJlY29udGVudDEgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmVjb250ZW50MSB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XHJcbiAgICAgIFxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gICAgICAgICAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbiAgICAgIH1cclxuLnNldG1hdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLnNldG5vdGlmaWNhdGlvbntcclxuICAgIC8vIHdpZHRoOjM2MHB4O1xyXG4gICAgLy8gaGVpZ2h0OiAzNzBweDtcclxuICAgIGxpe1xyXG4gICAgICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuc2V0dGl0bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDgzZGM7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBoNXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiMwMDgzZGM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBjb2xsZWdlIGNvbnRhY3Qgc2VjdGlvblxyXG5cclxuLmNvbnRhY3RzZWN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgIFxyXG59XHJcbi5zZXRsb2N7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuZGlzcGxheTogZmxleDtcclxufVxyXG5zcGFue1xyXG4gICAgLy8gY29sb3I6IGJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZpcnN0cm93e1xyXG4gICAgXHJcbnB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuaDV7XHJcbiAgICBtYXJnaW46IDA7IFxyXG59XHJcbn1cclxuXHJcbi5zZWNyb3d7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkO1xyXG5cclxufVxyXG4uc2V0cHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uc2V0YnR0bntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4uZm9ydW1zZWN7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDI0NSAyMzApO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjggMjM2IDIzOSk7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcbiAgICAuc2V0ZGl2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMThweDsgICAgXHJcbiAgICB9XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gcmFua2luZyBzZWN0aW9uXHJcblxyXG4udGFibGVkaXZ7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5zZXRwaWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5ib3RtdGFic2V0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc2hlYXJlc2VjIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAwcHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAwcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG4uc2hlYXJlc2Vje1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBwYWRkaW5nOjVweDtcclxuICAgIC8vIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTdweDtcclxuICAgICAubGFiZWxzZXR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZXRpbWd7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5zZXR7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuLnN1YmFjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLnNoYXJlaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICB9XHJcbn1cclxuLmNhc2txbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5zZXRub2ltYWdle1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9va01hcmt7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA2JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NDZhYzA7XHJcbn1cclxuXHJcbi5jbGdkZXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQ6ICMzYjgyZjYyNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJhdGVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnNwYW57XHJcbiAgICBjb2xvcjogIzAwODFkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2V0bGlrZWNvbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbn1cclxuXHJcbi5kYXRhbmZvdW5ke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xyXG59XHJcbi8vIC5mb290ZXJwYXJ0e1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4vLyB9XHJcblxyXG4uc3Rhcmljb257XHJcbiAgICBjb2xvcjogI0ZGQzEwNzsgXHJcbiAgfSBcclxuXHJcbiAgLmltZ19hbGlnbm4uc2hvcnRsaXN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc2hvcnRsaXN0ZWQgaXRlbSAqL1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJsdWU7IC8qIENvbG9yIGZvciBhY3RpdmUgYm9va21hcmsgKHdoZW4gc2hvcnRsaXN0ZWQpICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGh0bWx7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcblxyXG4gIC8qIEJhc2Ugc3R5bGVzIGZvciB0aGUgaWNvbnMgKi9cclxuXHJcblxyXG4gLyogRGVmYXVsdCBpY29uIGFwcGVhcmFuY2Ugd2l0aCBubyBmaWxsIChqdXN0IGJvcmRlci9vdXRsaW5lKSAqL1xyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXHJcbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXHJcbiAgICBmaWxsOiBub25lOyAvKiBObyBmaWxsICovXHJcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXHJcbiAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRodW1icy1VcCBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xyXG4gICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLWRvd25bc3R5bGUqPVwicmVkXCJdIHtcclxuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ 1205:
/*!************************************************************!*\
  !*** ./src/app/pages/clgdetails/compare/compare.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.mt-24 {\n  margin-top: 1.5rem;\n}\n\n.mt-12 {\n  margin-top: 12px !important;\n}\n\n.shearesec {\n  padding-left: 10px;\n  background-color: white;\n  padding: 5px;\n  border-top: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n  margin-top: 17px;\n}\n\n.shearesec .labelset {\n  position: relative;\n  top: 14px;\n  font-size: 15px;\n}\n\n.shearesec .setimg {\n  width: 35px;\n  margin: 6px;\n}\n\n.shearesec .set {\n  height: 35px;\n  position: relative;\n  top: -1px;\n}\n\n.cardsections .setcrd {\n  text-align: left;\n  padding: 12px;\n  position: relative;\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.cardsections .setcrd .vs {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-radius: 50px;\n  position: absolute;\n  color: #fff;\n  padding: 6px;\n  left: 45%;\n  top: 15%;\n  z-index: 1;\n  font-style: italic;\n}\n\n.cardsections .setcrd .setimg {\n  width: 82px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.cardsections .setcrd .title {\n  color: #000;\n  font-weight: 500;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.cardsections .setcrd .setclgN {\n  font-size: 12px;\n}\n\n.cardsections .setcrd .setrating {\n  font-size: 8px;\n}\n\n.cardsections .setcrd .seticons {\n  color: #FFC107;\n}\n\n.cardsections .setcrd .setbtn {\n  text-align: center;\n}\n\n.vsimg {\n  border: 1px solid #cbcbcb;\n  text-align: center;\n  padding: 6px;\n  height: 87px;\n}\n\n.vsimg ion-icon {\n  font-size: 26px;\n}\n\n.secdiv {\n  position: relative;\n}\n\n.secdiv .bordr {\n  position: absolute;\n  border-left: 1px solid #a0a0a0;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.mt0 {\n  margin-top: 0 !important;\n}\n\n.divmainabout {\n  background: white;\n  padding-left: 10px;\n}\n\n.divmainabout .setp {\n  color: blue;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFISTtFQUNJLGtCQUFBO0VBQ0osU0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7RUFFQyxXQUFBO0FBR0w7O0FBREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBR0o7O0FBT0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUpSOztBQUtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSFo7O0FBTUE7RUFDSSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFMSjs7QUFPQTtFQUNJLGVBQUE7QUFMSjs7QUFPQTtFQUNJLGNBQUE7QUFMSjs7QUFPQTtFQUNJLGNBQUE7QUFMSjs7QUFPQTtFQUNJLGtCQUFBO0FBTEo7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFSSjs7QUFTSTtFQUNJLGVBQUE7QUFQUjs7QUFVQTtFQUNJLGtCQUFBO0FBUEo7O0FBUUk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQU5SOztBQVNBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVFBO0VBQ0ksd0JBQUE7QUFMSjs7QUFTQTtFQUNJLGlCQUFBO0VBRUEsa0JBQUE7QUFQSjs7QUFXSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBVFIiLCJmaWxlIjoiY29tcGFyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5wdC0xMntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbn1cclxuLm10LTI0e1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbi5tdC0xMntcclxuICAgIG1hcmdpbi10b3A6IDEycHghaW1wb3J0YW50O1xyXG59XHJcbi5zaGVhcmVzZWN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgLmxhYmVsc2V0e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbi5zZXRpbWd7XHJcbiAgICB3aWR0aDozNXB4O1xyXG5cclxuICAgICBtYXJnaW46NnB4XHJcbn1cclxuLnNldHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxufVxyXG59XHJcbi5jYXJkc2VjdGlvbnN7IFxyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIC5zZXRjcmR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLnZze1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA0NSU7XHJcbiAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbi5zZXRpbWd7XHJcbiAgICB3aWR0aDogODJweDtcclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5zZXRjbGdOe1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbn1cclxuLnNldHJhdGluZ3tcclxuICAgIGZvbnQtc2l6ZTo4cHg7XHJcbn1cclxuLnNldGljb25ze1xyXG4gICAgY29sb3I6ICNGRkMxMDc7XHJcbn1cclxuLnNldGJ0bntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbn1cclxuXHJcbn1cclxuXHJcbi52c2ltZ3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNiY2I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbn1cclxuLnNlY2RpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5ib3JkcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYTBhMGEwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4ubXQwe1xyXG4gICAgbWFyZ2luLXRvcDogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZGl2bWFpbmFib3V0e1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC50aXRsZXtcclxuICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcbiAgICAuc2V0cHtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 37184:
/*!********************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursesfees/coursesfees.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".setnotification {\n  width: 360px;\n  height: 370px;\n}\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n.setnotification p {\n  color: #0083dc;\n}\n.populartxt {\n  margin-top: 18px;\n}\n.populartxt h2 {\n  font-weight: 500;\n}\n.px-10 {\n  padding: 0 10px;\n}\n.px-12 {\n  padding: 0 12px;\n}\n.pt-12 {\n  padding-top: 12px;\n}\n.tabbody {\n  padding: 12px 0px;\n}\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n.tabbody .headcard {\n  display: flex;\n}\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n.segmentStud {\n  margin: 14px 0px;\n}\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n.caskqns {\n  margin-bottom: 14px;\n}\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n.populartxt {\n  margin-top: 18px;\n}\n.populartxt h2 {\n  font-weight: 500;\n}\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\nion-modal {\n  --height: 80%;\n  --width:95%;\n  --border-radius: 14px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal::part(backdrop) {\n  background: #d1d5db;\n  opacity: 1;\n}\n.popucontent ion-toolbar {\n  border-bottom: 1px solid #ddd;\n}\n.popucontent .filterpop {\n  height: 80%;\n  border-bottom: 1px solid #ddd;\n}\n.popucontent .filterSegment {\n  flex-direction: column;\n}\n.popucontent .filterSegment ion-segment-button {\n  --color-checked: #5aaf01;\n  --indicator-height: 0px;\n  font-size: 13px;\n  --background-checked: #f6ffec;\n  --border-radius: 6px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  border: 0;\n  font-weight: 100 !important;\n}\n.popucontent .brR {\n  border-right: 1px solid #ddd;\n}\n.popucontent ion-checkbox {\n  margin-right: 12px;\n}\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n.courseCard .midpart {\n  padding: 3px 10px;\n}\n.p2, .p3 {\n  font-size: 14px;\n  margin: 6px 0px;\n  color: gray;\n}\n.p1 {\n  margin: 0;\n}\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  border: 1px solid #b6ddff;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n.trending h4 {\n  margin-top: 0;\n}\n.footerpart {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXNmZWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0osbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBU0E7RUFDSSxlQUFBO0FBTko7QUFRQTtFQUNJLGlCQUFBO0FBTEo7QUFPQTtFQUNJLGlCQUFBO0FBSko7QUFLSTtFQUNLLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSFQ7QUFLSTtFQUNJLGFBQUE7QUFIUjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUZaO0FBSVE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFGWjtBQU1RO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFKWjtBQU1RO0VBQ0ksZ0JBQUE7QUFKWjtBQUtZO0VBQ0ksZ0JBQUE7QUFIaEI7QUFLWTtFQUNJLGNBQUE7QUFIaEI7QUFRQTtFQUNJLGdCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxtQkFBQTtBQUxKO0FBTUk7RUFDSSxnQkFBQTtBQUpSO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBTUk7RUFDSSxnQ0FBQTtBQUpSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFIWjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtBQUhaO0FBUUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUxSO0FBUUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0U7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0FBSkg7QUFNRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFISjtBQUtFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtDO0VBQ0csNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBRko7QUFHSTtFQUNJLHFDQUFBO0FBRFI7QUFLQztFQUNHLG1CQUFBO0FBRko7QUFJQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBREo7QUFHQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUM7RUFDRyxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFFSjtBQURJO0VBQ0ksZ0JBQUE7QUFHUjtBQUFBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUdKO0FBQUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdSO0FBREk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHUjtBQURJO0VBQ0ksZUFBQTtFQUNKLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdKO0FBQVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFWjtBQUFRO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUVaO0FBQ0k7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDSTtFQUNJLDBCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVaO0FBS0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0ZBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBRko7QUFNSTtFQUNJLDZCQUFBO0FBSFI7QUFLSTtFQUNHLFdBQUE7RUFDQSw2QkFBQTtBQUhQO0FBS0k7RUFDSSxzQkFBQTtBQUhSO0FBSVE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBRUEsU0FBQTtFQUNBLDJCQUFBO0FBSFo7QUFPSTtFQUNFLDRCQUFBO0FBTE47QUFPSTtFQUNJLGtCQUFBO0FBTFI7QUFTRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBTko7QUFRRTtFQUNFLGlCQUFBO0FBTEo7QUFPQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUpKO0FBTUE7RUFDSSxTQUFBO0FBSEo7QUFRQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUU7RUFDRSxhQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOTjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBUEo7QUFTRTtFQUNFLGFBQUE7QUFQSjtBQVlFO0VBQ0Usa0JBQUE7QUFUSiIsImZpbGUiOiJjb3Vyc2VzZmVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0bm90aWZpY2F0aW9ue1xyXG4gICAgd2lkdGg6MzYwcHg7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgLnNldHRpdGxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNhNGFmZmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjojMDA4M2RjO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHgtMTB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLy8gLnN0eWxle1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmY2ViZWI7XHJcbi8vIH1cclxuXHJcbi8vIC5jb3Vyc2VDYXJke1xyXG4vLyAgICAgcGFkZGluZy10b3A6MjBweDtcclxuLy8gfVxyXG5cclxuLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG59XHJcbi5wdC0xMntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbn1cclxuLnRhYmJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHggMHB4O1xyXG4gICAgLmJnc21vY2tncmF5e1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZlO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZHtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaHRjYXJke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWNjb3JkaWFuc3tcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgMTA1LCAwLjE1KSAwcHggMnB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAxcHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICBpb24tYWNjb3JkaW9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVseyAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50Ymxjb250ZW50e1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgIH1cclxufVxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZmY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgcGFkZGluZzo2cHggOHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIH1cclxuICB0YWJsZSB0aHtcclxuICAgYmFja2dyb3VuZDphbGljZWJsdWU7XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5pY29uYnRue1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICB9XHJcbiAgLnNlZ21lbnRTdHVke1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweDtcclxuICB9XHJcbiBcclxuIC5zZXJjaGJhcntcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzowIWltcG9ydGFudDtcclxuICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gfSBcclxuIC5jYXNrcW5ze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuIH1cclxuIC5maWx0ZXItYnRue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuIH1cclxuIC5jYXJkY3VzdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuIH1cclxuIC5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gbGkge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJkZDI2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4udXNlclJldmlld3tcclxuICAgIC5maXJjdGNoYXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZGZlNDtcclxuICAgICAgICBjb2xvcjogI2E3MGMwYztcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIHAuc2J0eHR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjNGI0YjRiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5yYXRlYnl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJhdGluZ0J0bnN7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAudGh1bWJpY29ue1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOGI4YjhiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1wb3B1cC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmlvbi1tb2RhbCB7XHJcbiAgICAtLWhlaWdodDogODAlO1xyXG4gICAgLS13aWR0aDo5NSU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1vZGFsOjpwYXJ0KGJhY2tkcm9wKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwgMjEzLCAyMTkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVjb250ZW50e1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVycG9we1xyXG4gICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuICAgIC5maWx0ZXJTZWdtZW50e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjNWFhZjAxO1xyXG4gICAgICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2Y2ZmZlYztcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnJSe1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyAgICBcclxuICAgIH1cclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcbiAgLmJvb21hcmt7XHJcbiAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNjZmNmY2Y7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICB9XHJcbiAgLmNvdXJzZUNhcmQgLm1pZHBhcnQge1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuLnAyICwucDN7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDZweCAwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4ucDF7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLnRyZW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjlmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2ZGRmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gIC5zZXRsaXN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuIFxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICB9XHJcblxyXG4gIC5mb290ZXJwYXJ0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 43665:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursinfo/coursinfo.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  font-size: 14px;\n}\n\n.blue {\n  color: #0083dc;\n}\n\n.green {\n  color: #88d834;\n}\n\n.greenbtn {\n  --background:#88d834!important;\n}\n\n.gray {\n  color: gray;\n}\n\n.bgblue {\n  background: #0083dc;\n}\n\n.bggreen {\n  background: #88d834;\n}\n\n.starrate {\n  color: #e5b60c;\n}\n\n.px-12 {\n  padding: 0 12px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.smllbtn {\n  --box-shadow: none;\n}\n\n.segment1 {\n  margin-top: 10px;\n}\n\n.segment1 ion-segment-button {\n  border-radius: 22px;\n  text-transform: capitalize;\n  margin: 5px;\n}\n\n.segment1 ion-label {\n  color: black;\n}\n\n.segment2 {\n  margin-top: 16px;\n}\n\n.segment2 ion-segment-button {\n  text-transform: capitalize;\n}\n\n.clgcoverphoto {\n  background: url('clg_img.jpg');\n  height: 17vh;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 2rem;\n}\n\n.clgcoverphoto img {\n  width: 70px;\n  position: absolute;\n  bottom: -30px;\n  left: 10px;\n  border: 1px solid #d5d5d5;\n  background: #fff;\n  z-index: 1;\n  border-radius: 5px;\n  padding: 2px;\n}\n\n.shortInfo h4 {\n  margin: 0;\n}\n\n.shortInfo p {\n  display: flex;\n  flex-wrap: wrap;\n  color: #0083dc;\n}\n\n.shortInfo p .location, .shortInfo p .cment {\n  color: #383838;\n}\n\n.shortInfo p .starrate {\n  color: #e5b60c;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.mr-6 {\n  margin-right: 6px;\n}\n\n.bglightgry {\n  background: #f1f5f9;\n  margin: 4px;\n  padding: 6px 8px;\n  display: inline-block;\n  border-radius: 4px;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n  font-size: 14px;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.courseCard {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.courseCard .headpart {\n  padding: 8px 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.courseCard .headpart h3 {\n  font-weight: 500;\n  font-size: 20px !important;\n  color: #0083dc;\n  margin-bottom: 6px !important;\n}\n\n.courseCard .headpart .star {\n  color: #e5b60c;\n}\n\n.courseCard .midpart {\n  padding: 8px 10px;\n}\n\n.courseCard .midpart span {\n  color: #797979;\n}\n\n.courseCard .midpart p {\n  margin: 6px 0;\n}\n\n.courseCard .footerpart {\n  padding-bottom: 8px;\n}\n\n.courseCard .greenbtn {\n  --background:#88d834!important;\n}\n\n.courseCard .boomark {\n  width: 36px;\n  height: 36px;\n  --padding: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\n.courseCard ion-button {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.textcenter {\n  text-align: center;\n}\n\n.caskqns {\n  padding-top: 20px;\n}\n\nul {\n  padding: 0 26px;\n  font-size: 14px;\n}\n\n.icontxt {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n}\n\n.icontxt ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\n.mx-12 {\n  margin: 0 12px;\n}\n\n.radius-0 {\n  border-radius: 0 !important;\n}\n\n.whcard {\n  margin: 0;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.whcard .bdycard {\n  padding: 16px 10px;\n}\n\n::ng-deep .fieldmat .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n::ng-deep .fieldmat {\n  width: 100% !important;\n}\n\n.table {\n  width: 100%;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -55px;\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.login {\n  margin-top: -30px;\n  text-align: center;\n  height: 40px;\n}\n\n.login {\n  margin-top: -30px;\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: 90%;\n  height: 50px;\n  background-color: #007fdc !important;\n  margin: 15px;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-left: 40%;\n  color: gray;\n  margin-top: -13px;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.matfield {\n  text-align: center;\n  margin: 16px;\n  border: 1px solid gray;\n  padding: 10px;\n  border-radius: 10px;\n  padding-top: 6px;\n  background: white;\n}\n\n.w-75 {\n  width: 93%;\n}\n\n.iconclose {\n  font-size: 20px;\n  color: red;\n}\n\nion-content {\n  --background: none !important;\n}\n\n.setrw {\n  border-bottom: 1px solid #e5e5e5;\n  margin: 12px 0;\n  padding-bottom: 8px;\n}\n\n.setrw img {\n  border-radius: 10px;\n  width: 100%;\n  border: 1px solid lightgray;\n  height: 85px;\n}\n\n.setrw p.p1 {\n  margin: 0;\n}\n\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  border: 1px solid #b6ddff;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending h4 {\n  margin-top: 0;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec ion-button {\n  margin-top: 18px;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.headtxt {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headtxt h4 {\n  font-size: 14px;\n  margin: 4px;\n}\n\n.courseCard {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  margin: 20px 0;\n}\n\n.course-header {\n  border-bottom: 1px solid #f0f0f0;\n  margin-bottom: 10px;\n}\n\n.course-name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n}\n\n.overview-title {\n  font-size: 16px;\n  color: #555;\n  margin-left: 10px;\n}\n\n.apply-btn {\n  background-color: #88d834;\n  color: #fff;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\n.course-description h1 {\n  font-size: 14px;\n  color: #444;\n  line-height: 1.5;\n}\n\n.wikiContents {\n  margin-top: 20px;\n}\n\n.course-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.course-table td {\n  padding: 10px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #333;\n  font-size: 14px;\n}\n\n.course-table td:first-child {\n  font-weight: bold;\n}\n\n.website-link {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.website-link:hover {\n  text-decoration: underline;\n}\n\n.no-data-container {\n  background-color: #f8d7da;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  margin: 20px 0;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.no-data-container h2 {\n  color: #721c24;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkM7RUFDRyxjQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGdCQUFBO0FBV0o7O0FBVkk7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQVlSOztBQVZJO0VBQ0ksWUFBQTtBQVlSOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFYSTtFQUNJLDBCQUFBO0FBYVI7O0FBVkE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVZJO0VBQ0ksU0FBQTtBQWFSOztBQVhJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBYVI7O0FBWlE7RUFDSSxjQUFBO0FBY1o7O0FBWlE7RUFDSSxjQUFBO0FBY1o7O0FBVkE7RUFDSSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksaUJBQUE7QUFjSjs7QUFaQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWVKOztBQWJBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWdCSjs7QUFkQTtFQUNJLDBCQUFBO0FBaUJKOztBQWZBO0VBQ0ksaUJBQUE7QUFrQko7O0FBakJJO0VBQ0sseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFtQlQ7O0FBakJJO0VBQ0ksYUFBQTtBQW1CUjs7QUFsQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBb0JaOztBQWxCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBb0JaOztBQWxCUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQW9CWjs7QUFoQlE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQWtCWjs7QUFoQlE7RUFDSSxnQkFBQTtBQWtCWjs7QUFqQlk7RUFDSSxnQkFBQTtBQW1CaEI7O0FBakJZO0VBQ0ksY0FBQTtBQW1CaEI7O0FBWkk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFlUjs7QUFaQTtFQUNJLGdCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxtQkFBQTtBQWVKOztBQWRJO0VBQ0ksZ0JBQUE7QUFnQlI7O0FBZEk7RUFDSSxtQkFBQTtBQWdCUjs7QUFkSTtFQUNJLGdDQUFBO0FBZ0JSOztBQWZRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBaUJaOztBQWZRO0VBQ0ksZ0JBQUE7QUFpQlo7O0FBZlE7RUFDSSxlQUFBO0FBaUJaOztBQWJBO0VBQ0ksZ0JBQUE7QUFnQko7O0FBZkk7RUFDSSxnQkFBQTtBQWlCUjs7QUFkQTtFQUNJLGdCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxtQkFBQTtBQWlCSjs7QUFoQkk7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FBa0JSOztBQWpCUTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFtQlo7O0FBakJRO0VBQ0ksY0FBQTtBQW1CWjs7QUFoQkk7RUFDSSxpQkFBQTtBQWtCUjs7QUFqQlE7RUFDSSxjQUFBO0FBbUJaOztBQWpCUTtFQUNJLGFBQUE7QUFtQlo7O0FBaEJJO0VBQ0ksbUJBQUE7QUFrQlI7O0FBaEJJO0VBQ0ksOEJBQUE7QUFrQlI7O0FBaEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWtCUjs7QUFoQkk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBa0JSOztBQWRBO0VBQ0ksa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxpQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQW1CSjs7QUFqQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFuQkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFxQlI7O0FBakJBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBbEJFO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQXFCSDs7QUFuQkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBc0JKOztBQXBCRTtFQUNFLGdCQUFBO0FBdUJKOztBQXJCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBd0JKOztBQXZCSTtFQUNJLFlBQUE7QUF5QlI7O0FBdkJJO0VBQ0ksVUFBQTtBQXlCUjs7QUF2Qkk7RUFDSSxjQUFBO0FBeUJSOztBQXZCSTtFQUNJLHNCQUFBO0FBeUJSOztBQXRCRTtFQUNFLGNBQUE7QUF5Qko7O0FBdkJBO0VBQVUsMkJBQUE7QUEyQlY7O0FBMUJBO0VBQ0ksU0FBQTtFQUNBLHdGQUFBO0VBQ0EsbUJBQUE7QUE2Qko7O0FBNUJJO0VBQ0ksa0JBQUE7QUE4QlI7O0FBMUJBO0VBQ0ksNEJBQUE7QUE2Qko7O0FBM0JBO0VBQ0Esc0JBQUE7QUE4QkE7O0FBM0JBO0VBQ0ksV0FBQTtBQThCSjs7QUEzQkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQThCSjs7QUE3Qkk7RUFDSSw2QkFBQTtBQStCUjs7QUE3Qkk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQStCUjs7QUE3Qkk7RUFDSSxrQkFBQTtBQStCUjs7QUE3Qkk7RUFDSSxlQUFBO0FBK0JSOztBQU1DO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUtBO0VBQ0ksbURBQUE7QUFGSjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFDRTs7RUFFRSxhQUFBO0FBRUo7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtBQUtGOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNFLG9CQUFBO0FBT0o7O0FBSkE7RUFDSSxzQ0FBQTtBQU9KOztBQUpFO0VBQTBDLFdBQUE7QUFRNUM7O0FBTkU7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0FBU047O0FBUEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFSRTtFQUNFLFVBQUE7QUFXSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBU0o7O0FBTkE7RUFDSSw2QkFBQTtBQVNKOztBQUhBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFMSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDJCQUFBO0VBQ0EsWUFBQTtBQU1SOztBQUpJO0VBQ0ksU0FBQTtBQU1SOztBQUZFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxhQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtBQUdKOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFDSTtFQUNJLDZCQUFBO0FBQ1I7O0FBR0k7RUFDSSxnQkFBQTtBQURSOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFEUjs7QUFHSTtFQUNJLGtCQUFBO0FBRFI7O0FBR0k7RUFDSSxlQUFBO0FBRFI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhKOztBQUlJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFGUjs7QUFxQkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWxCSjs7QUFxQkU7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0FBbEJKOztBQXFCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFsQko7O0FBcUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWxCSjs7QUFxQkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFxQkU7RUFDRSxnQkFBQTtBQWxCSjs7QUFxQkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFsQko7O0FBcUJFO0VBQ0UsaUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBbEJKOztBQXFCRTtFQUNFLDBCQUFBO0FBbEJKOztBQXFCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFsQko7O0FBcUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFsQkoiLCJmaWxlIjoiY291cnNpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgIFxyXG59XHJcbi5ibHVle1xyXG4gICAgY29sb3I6ICMwMDgzZGM7XHJcbiB9XHJcbi5ncmVlbntcclxuICAgIGNvbG9yOiAjODhkODM0O1xyXG59XHJcbi5ncmVlbmJ0bntcclxuICAgIC0tYmFja2dyb3VuZDojODhkODM0IWltcG9ydGFudDtcclxufVxyXG4uZ3JheXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbi5iZ2JsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4M2RjO1xyXG4gfVxyXG4uYmdncmVlbntcclxuICAgIGJhY2tncm91bmQ6ICM4OGQ4MzQ7XHJcbn1cclxuIC5zdGFycmF0ZXtcclxuICAgIGNvbG9yOiAjZTViNjBjO1xyXG59XHJcbi5weC0xMntcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxufVxyXG4ucHQtMTJ7XHJcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xyXG59XHJcbi5zbWxsYnRue1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5zZWdtZW50MXtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDsgICBcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxufVxyXG4uc2VnbWVudDJ7IFxyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxufVxyXG4uY2xnY292ZXJwaG90b3tcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvY2xnX2ltZy9jbGdfaW1nLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDE3dmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG4uc2hvcnRJbmZve1xyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgICAgIC5sb2NhdGlvbiwgLmNtZW50e1xyXG4gICAgICAgICAgICBjb2xvcjogIzM4MzgzODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJyYXRle1xyXG4gICAgICAgICAgICBjb2xvcjogI2U1YjYwYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1sLTR7XHJcbiAgICBtYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuLm1yLTZ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xyXG59XHJcbi5iZ2xpZ2h0Z3J5e1xyXG4gICAgYmFja2dyb3VuZDojZjFmNWY5O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4uY2FwaXRhbGl6ZXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi50YWJib2R5e1xyXG4gICAgcGFkZGluZzoxMnB4IDBweDtcclxuICAgIC5iZ3Ntb2NrZ3JheXtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRjYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWR7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2h0Y2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50Ymxjb250ZW50e1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuLmFjY29yZGlhbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHsgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbi5jb3Vyc2VDYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCAxMDUsIDAuMTUpIDBweCAycHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDFweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmhlYWRwYXJ0e1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcntcclxuICAgICAgICAgICAgY29sb3I6ICNlNWI2MGM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1pZHBhcnR7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlcnBhcnR7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIC5ncmVlbmJ0bntcclxuICAgICAgICAtLWJhY2tncm91bmQ6Izg4ZDgzNCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYm9vbWFya3tcclxuICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHRjZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uY2Fza3Fuc3tcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbn1cclxudWx7XHJcbiAgICBwYWRkaW5nOiAwIDI2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmljb250eHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6NnB4IDhweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgdGFibGUgdGh7XHJcbiAgIGJhY2tncm91bmQ6YWxpY2VibHVlO1xyXG4gICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuaWNvbmJ0bntcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5saWtlRGlze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAubGlrZXtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgICAuZGlzbGlrZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcbiAgLm14LTEye1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgfVxyXG4ucmFkaXVzLTB7Ym9yZGVyLXJhZGl1czogMCFpbXBvcnRhbnQ7fVxyXG4ud2hjYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuYmR5Y2FyZHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZmllbGRtYXQgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuZmllbGRtYXQge1xyXG53aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4udGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcnVtc2Vje1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0NiAyNDUgMjMwKTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4IDIzNiAyMzkpO1xyXG4gICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG4gICAgLnNldGRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGlvbiBtb2RhbCBmb3JtIGNzc1xyXG4vLyAudy0xMDB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuLy8gICAgIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XHJcbiAgXHJcbi8vICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4vLyAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4vLyAgICAgICB3aWR0aDogMTMzLjMzMzMzJTtcclxuLy8gICB9XHJcbi8vICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgfVxyXG4gIFxyXG4gIFxyXG4vLyAgIC5tYWluLWRpdiB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4gIFxyXG4vLyAgIC53LTc1e1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICB9XHJcbi8vIGlvbi1pbnB1dHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vIH1cclxuIC5lcnJvcntcclxuICBjb2xvcjpyZWQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgIFxyXG59IFxyXG4ubG9naW57XHJcbiAgbWFyZ2luLXRvcDogLTU1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4OyAgIFxyXG59XHJcbi5sb2dpbntcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4OyAgXHJcbn1cclxuLmxvZ2lue1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDsgICBcclxufVxyXG5cclxuXHJcblxyXG4ubWFpbi1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcclxufVxyXG4uc2V0aW1ne1xyXG4gIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkICsgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfSBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcclxufVxyXG4uYnRue1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdmZGMhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG4uc3BhbntcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4ucDF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweFxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcclxuICAgXHJcbiAgICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbiAgICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG4gIH1cclxuICAubWF0ZmllbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MTZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLnctNzV7XHJcbiAgICB3aWR0aDo5MyU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gXHJcbi5pY29uY2xvc2V7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiAgLy8gaW9uIG1vZGFsIGZvcm0gY3NzXHJcbiBcclxuICBcclxuICAvLyBuZXdzICZ1cGRhdGVzIHNlY3Rpb25cclxuLnNldHJ3IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgcC5wMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRyZW5kaW5ne1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjlmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2ZGRmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIFxyXG4gIC5zZXRsaXN0e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuIFxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICB9XHJcblxyXG5cclxuICAuZm9ydW1zZWN7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDI0NSAyMzApO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjggMjM2IDIzOSk7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLnNldGRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5oZWFkdHh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jb3Vyc2VDYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvdXJzZS1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY291cnNlLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJ2aWV3LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHBseS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDgzNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3Vyc2UtZGVzY3JpcHRpb24gaDEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICBcclxuICAud2lraUNvbnRlbnRzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3Vyc2UtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIH1cclxuICBcclxuICAuY291cnNlLXRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY291cnNlLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAud2Vic2l0ZS1saW5rIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAud2Vic2l0ZS1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAubm8tZGF0YS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAubm8tZGF0YS1jb250YWluZXIgaDIge1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 89221:
/*!************************************************************!*\
  !*** ./src/app/pages/clgdetails/cutoffs/cutoffs.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\nion-modal {\n  --height: 80%;\n  --width:95%;\n  --border-radius: 14px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: #d1d5db;\n  opacity: 1;\n}\n\n.popucontent ion-toolbar {\n  border-bottom: 1px solid #ddd;\n}\n\n.popucontent .filterpop {\n  height: 80%;\n  border-bottom: 1px solid #ddd;\n}\n\n.popucontent .filterSegment {\n  flex-direction: column;\n}\n\n.popucontent .filterSegment ion-segment-button {\n  --color-checked: #5aaf01;\n  --indicator-height: 0px;\n  font-size: 13px;\n  --background-checked: #f6ffec;\n  --border-radius: 6px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  border: 0;\n  font-weight: 100 !important;\n}\n\n.popucontent .brR {\n  border-right: 1px solid #ddd;\n}\n\n.popucontent ion-checkbox {\n  margin-right: 12px;\n}\n\n.clgdescription {\n  background: #3b82f624;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.slide_set {\n  width: 320.91px !important;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.accard {\n  border-radius: 8px;\n  background: white;\n  padding: 12px;\n  margin-top: 2rem;\n  box-shadow: rgba(205, 211, 214, 0.7) 0px 8px 20px;\n  border: 1px solid #f1f1f1;\n}\n\n.accard ion-item.item.md.item-fill-none.ion-focusable.hydrated.item-label.item-lines-full.ion-activatable {\n  --background: #88d834;\n  border-radius: 10px;\n}\n\n.accard h6 {\n  margin-top: 6px;\n  color: #000;\n}\n\n.accard .tbg {\n  background: #c4dafa;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  border: 1px solid #80b3fc;\n  color: #373737;\n}\n\n.accard table th, .accard table td {\n  color: #000 !important;\n  border: 1px solid #fff !important;\n}\n\n.accard .margin-top {\n  margin-top: 1rem;\n}\n\n.accard .divider {\n  border-bottom: 1px solid #3880ff;\n  padding: 16px;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.size_setsuited {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setsuited ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setsuited .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1dG9mZnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdUOztBQURJO0VBQ0ksYUFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFJWjs7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBRFk7RUFDSSxnQkFBQTtBQUdoQjs7QUFEWTtFQUNJLGNBQUE7QUFHaEI7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHdGQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksZ0NBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdaOztBQURRO0VBQ0ksZ0JBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7QUFHWjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQUVIOztBQUFFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7QUFJSjs7QUFEQztFQUNHLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUhJO0VBQ0kscUNBQUE7QUFLUjs7QUFEQztFQUNHLG1CQUFBO0FBSUo7O0FBRkM7RUFDRyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUpJO0VBQ0ksc0JBQUE7QUFNUjs7QUFIQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtBQU1KOztBQUpDO0VBQ0cscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUpFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMRTtFQUNFLGdCQUFBO0FBUUo7O0FBUEk7RUFDSSxnQkFBQTtBQVNSOztBQU5BO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVNKOztBQU5JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFTUjs7QUFQSTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVNSOztBQVBJO0VBQ0ksZUFBQTtFQUNKLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVNKOztBQU5RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUVo7O0FBTlE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUVo7O0FBTEk7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FBT1I7O0FBTEk7RUFDSSwwQkFBQTtBQU9SOztBQU5RO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUVo7O0FBREE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0ZBQUE7QUFJSjs7QUFERTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUFJO0VBQ0ksNkJBQUE7QUFHUjs7QUFESTtFQUNHLFdBQUE7RUFDQSw2QkFBQTtBQUdQOztBQURJO0VBQ0ksc0JBQUE7QUFHUjs7QUFGUTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFFQSxTQUFBO0VBQ0EsMkJBQUE7QUFHWjs7QUFFSTtFQUNFLDRCQUFBO0FBQU47O0FBRUk7RUFDSSxrQkFBQTtBQUFSOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFLQTtFQUNJLDBCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDRixzQkFBQTtBQUROOztBQVFBO0VBQ0ksaUJBQUE7QUFMSjs7QUFNSTtFQUNLLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSlQ7O0FBTUk7RUFDSSxhQUFBO0FBSlI7O0FBS1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSFo7O0FBS1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUhaOztBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBSFo7O0FBT1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUxaOztBQU9RO0VBQ0ksZ0JBQUE7QUFMWjs7QUFNWTtFQUNJLGdCQUFBO0FBSmhCOztBQU1ZO0VBQ0ksY0FBQTtBQUpoQjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxtQkFBQTtBQU5KOztBQU9JO0VBQ0ksZ0JBQUE7QUFMUjs7QUFPSTtFQUNJLG1CQUFBO0FBTFI7O0FBT0k7RUFDSSxnQ0FBQTtBQUxSOztBQU1RO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSlo7O0FBTVE7RUFDSSxnQkFBQTtBQUpaOztBQU1RO0VBQ0ksZUFBQTtBQUpaOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7QUFSSjs7QUFTSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFQTjs7QUFTRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBUEo7O0FBU0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFVRTtFQUNFLHNCQUFBO0VBQ0EsaUNBQUE7QUFSSjs7QUFVRTtFQUNFLGdCQUFBO0FBUko7O0FBV0U7RUFDRSxnQ0FBQTtFQUNBLGFBQUE7QUFUSjs7QUFnQkE7RUFDSSw2Q0FBQTtFQUNBLGdHQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZUk7RUFDSSxlQUFBO0FBYlI7O0FBZUk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBYlI7O0FBb0JBO0VBRU8sV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBbEJQOztBQW1CTztFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBakJYOztBQW1CTztFQUVJLGFBQUE7RUFDQSx5QkFBQTtBQWxCWDs7QUFxQkc7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUdBLHlCQUFBO0FBcEJQOztBQXNCRztFQUNJLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQlA7O0FBc0JHO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQW5CUDs7QUFxQkc7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFsQlA7O0FBcUJHO0VBQ0MsV0FBQTtBQWxCSjs7QUF3QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFyQko7O0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFwQlI7O0FBc0JJO0VBRUksYUFBQTtFQUNBLHlCQUFBO0FBckJSOztBQXlCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBdEJKOztBQXlCQTtFQUNJLGVBQUE7RUFBaUIsZ0JBQUE7RUFDakIsWUFBQTtFQUFjLDRCQUFBO0VBQ2QsVUFBQTtFQUFZLFlBQUE7RUFDWixvQkFBQTtFQUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBaEJqQzs7QUFtQkUsMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFmaEI7O0FBa0JFLDZCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUFXLDBCQUFBO0FBZGYiLCJmaWxlIjoiY3V0b2Zmcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5wdC0xMntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbn1cclxuLnRhYmJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHggMHB4O1xyXG4gICAgLmJnc21vY2tncmF5e1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZlO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZHtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaHRjYXJke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYWNjb3JkaWFuc3tcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgMTA1LCAwLjE1KSAwcHggMnB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAxcHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICBpb24tYWNjb3JkaW9ue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVseyAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50Ymxjb250ZW50e1xyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcclxuICAgIH1cclxufVxyXG50YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZmY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgcGFkZGluZzo2cHggOHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIH1cclxuICB0YWJsZSB0aHtcclxuICAgYmFja2dyb3VuZDphbGljZWJsdWU7XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5pY29uYnRue1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICB9XHJcbiAgLnNlZ21lbnRTdHVke1xyXG4gICAgbWFyZ2luOiAxNHB4IDBweDtcclxuICB9XHJcbiBcclxuIC5zZXJjaGJhcntcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzowIWltcG9ydGFudDtcclxuICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gfSBcclxuIC5jYXNrcW5ze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuIH1cclxuIC5maWx0ZXItYnRue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIH1cclxuIH1cclxuIC5jYXJkY3VzdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuIH1cclxuIC5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luYXRpb24gbGkge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJkZDI2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4udXNlclJldmlld3tcclxuICAgIC5maXJjdGNoYXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZGZlNDtcclxuICAgICAgICBjb2xvcjogI2E3MGMwYztcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIHAuc2J0eHR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjNGI0YjRiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5yYXRlYnl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJhdGluZ0J0bnN7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAudGh1bWJpY29ue1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOGI4YjhiO1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1wb3B1cC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmlvbi1tb2RhbCB7XHJcbiAgICAtLWhlaWdodDogODAlO1xyXG4gICAgLS13aWR0aDo5NSU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1vZGFsOjpwYXJ0KGJhY2tkcm9wKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwgMjEzLCAyMTkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVjb250ZW50e1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcbiAgICAuZmlsdGVycG9we1xyXG4gICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuICAgIC5maWx0ZXJTZWdtZW50e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjNWFhZjAxO1xyXG4gICAgICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2Y2ZmZlYztcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5iclJ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7ICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmNsZ2Rlc2NyaXB0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogIzNiODJmNjI0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zcGFue1xyXG4gICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNldGxpa2Vjb2x7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG59XHJcblxyXG4uc2xpZGVfc2V0e1xyXG4gICAgd2lkdGg6IDMyMC45MXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYXRlc3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLW5ldyBjc3MtLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi50YWJib2R5e1xyXG4gICAgcGFkZGluZzoxMnB4IDBweDtcclxuICAgIC5iZ3Ntb2NrZ3JheXtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRjYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWR7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2h0Y2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFjY29yZGlhbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHsgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uYWNjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC43KSAwcHggOHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgaW9uLWl0ZW0uaXRlbS5tZC5pdGVtLWZpbGwtbm9uZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkLml0ZW0tbGFiZWwuaXRlbS1saW5lcy1mdWxsLmlvbi1hY3RpdmF0YWJsZSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzg4ZDgzNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgaDZ7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLnRiZ3tcclxuICAgIGJhY2tncm91bmQ6ICNjNGRhZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODBiM2ZjO1xyXG4gICAgY29sb3I6ICMzNzM3Mzc7XHJcbiAgfVxyXG4gIHRhYmxlIHRoLCB0YWJsZSB0ZHtcclxuICAgIGNvbG9yOiAjMDAwIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmYhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWFyZ2luLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG4gXHJcbiAgLmRpdmlkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM4ODBmZjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS1cclxuXHJcblxyXG4udGhpcmRzZWN0aW9ucG9we1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0NSwgMjU1LCAwLjM4MDM5MjE1NjkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAuSGVhZFR4dCB7XHJcbiAgICBoNXtcclxuICAgICAgICBtYXJnaW46IDJweCAwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59IFxyXG5cclxuXHJcbi5zaXplX3NldHBvcCB7XHJcbiAgICAvLyAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxuICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgIC0tb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgY29udGFpbjogdW5zZXQ7XHJcbiAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XHJcbiAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAuYm9vbWFya3tcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIC0tY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgIH1cclxuICAgfVxyXG4gICAuaW1nX2FsaWducG9wIHtcclxuICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgIC8vIHRvcDogLTEyJTtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XHJcbiAgIH1cclxuICAgLnNwbnBvcHtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgXHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgIH1cclxuICAgLnRpdF9zZXRwb3B7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICB9XHJcbiAgIC5idG5zZXRze1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgfVxyXG5cclxuICAgaW9uLWljb24uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBibHVlOyBcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC5zaXplX3NldHN1aXRlZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGNvbnRhaW46IHVuc2V0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmJvb21hcmt7XHJcbiAgICAgICBcclxuICAgICAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGFue1xyXG4gICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBBZGp1c3Qgc2l6ZSAqL1xyXG4gICAgY29sb3I6IGJsYWNrOyAvKiBCbGFjayBvdXRsaW5lIGluaXRpYWxseSAqL1xyXG4gICAgZmlsbDogbm9uZTsgLyogTm8gZmlsbCAqL1xyXG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIEJvcmRlciBjb2xvciAqL1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyOyAvKiBBZGp1c3QgYm9yZGVyIHRoaWNrbmVzcyAqL1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaHVtYnMtVXAgaWNvbiBjbGlja2VkICovXHJcbiAgLnRodW1icy11cFtzdHlsZSo9XCJibHVlXCJdIHtcclxuICAgIGZpbGw6IGJsdWU7IC8qIEZpbGwgYmx1ZSB3aGVuIGNsaWNrZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGh1bWJzLURvd24gaWNvbiBjbGlja2VkICovXHJcbiAgLnRodW1icy1kb3duW3N0eWxlKj1cInJlZFwiXSB7XHJcbiAgICBmaWxsOiByZWQ7IC8qIEZpbGwgcmVkIHdoZW4gY2xpY2tlZCAqL1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 78788:
/*!**************************************************************************!*\
  !*** ./src/app/pages/clgdetails/infrastructure/infrastructure.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.colored {\n  color: red;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.infrafacility img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.infrafacility p {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 12px;\n}\n\n.infrafacility h6 {\n  font-size: 14px;\n}\n\n.infrafacility ion-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.infrafacility mat-icon {\n  color: #0081dc;\n  margin-right: 6px;\n}\n\n.infrafacility ion-item {\n  width: 50%;\n  font-size: 14px;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQURJO0VBQ0sseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFHVDs7QUFESTtFQUNJLGFBQUE7QUFHUjs7QUFGUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFJWjs7QUFGUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSVo7O0FBRlE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFJWjs7QUFBUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRVo7O0FBQVE7RUFDSSxnQkFBQTtBQUVaOztBQURZO0VBQ0ksZ0JBQUE7QUFHaEI7O0FBRFk7RUFDSSxjQUFBO0FBR2hCOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx3RkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQkFBQTtBQUVSOztBQUFJO0VBQ0ksbUJBQUE7QUFFUjs7QUFBSTtFQUNJLGdDQUFBO0FBRVI7O0FBRFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHWjs7QUFEUTtFQUNJLGdCQUFBO0FBR1o7O0FBRFE7RUFDSSxlQUFBO0FBR1o7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtBQUlKOztBQURDO0VBQ0csNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBSUo7O0FBSEk7RUFDSSxxQ0FBQTtBQUtSOztBQURDO0VBQ0csbUJBQUE7QUFJSjs7QUFGQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7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REk7RUFDSSxlQUFBO0FBR1I7O0FBREk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR1I7O0FBSUE7RUFFTyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGUDs7QUFHTztFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRFg7O0FBR087RUFFSSxhQUFBO0VBQ0EseUJBQUE7QUFGWDs7QUFLRztFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBR0EseUJBQUE7QUFKUDs7QUFNRztFQUNJLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKUDs7QUFNRztFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFIUDs7QUFLRztFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZQOztBQUtHO0VBQ0MsV0FBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFBaUIsZ0JBQUE7RUFDakIsWUFBQTtFQUFjLDRCQUFBO0VBQ2QsVUFBQTtFQUFZLFlBQUE7RUFDWixvQkFBQTtFQUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBSWpDOztBQURFLDJCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUFZLDJCQUFBO0FBS2hCOztBQUZFLDZCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUFXLDBCQUFBO0FBTWYiLCJmaWxlIjoiaW5mcmFzdHJ1Y3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5weC0xMntcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ucHQtMTJ7XHJcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xyXG59XHJcbi50YWJib2R5e1xyXG4gICAgcGFkZGluZzoxMnB4IDBweDtcclxuICAgIC5iZ3Ntb2NrZ3JheXtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRjYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWR7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2h0Y2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFjY29yZGlhbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHsgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGJsY29udGVudHtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICB9XHJcbn1cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6NnB4IDhweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgdGFibGUgdGguZGJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTgzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuaWNvbmJ0bntcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgfVxyXG4gXHJcbiAuc2VyY2hiYXJ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XHJcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDQ1cHghaW1wb3J0YW50OyAgIFxyXG4gICAgfVxyXG4gICBcclxuIH0gXHJcbiAuY2Fza3Fuc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiB9XHJcbiAuZmlsdGVyLWJ0bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiB9XHJcbiAuY2FyZGN1c3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiB9XHJcbiAucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDoxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZGQyNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLnBvcHVsYXJ0eHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogMHB4IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnVzZXJSZXZpZXd7XHJcbiAgICAuZmlyY3RjaGFye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGRmZTQ7XHJcbiAgICAgICAgY29sb3I6ICNhNzBjMGM7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBwLnNidHh0e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogIzRiNGI0YjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAucmF0ZWJ5e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMWM5MTg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICAgIC5yYXRpbmdCdG5ze1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgICAgICAgICAgLS1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRodW1iaWNvbntcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRhdGV2bnR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgfVxyXG4gICAgLmJsdXR4dHtcclxuICAgICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuLmljb25maXh7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuLmJsdXR4dHtcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gfVxyXG4gIC5jb2xvcmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLm92cmFsbHJhdGluZ3tcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAucCwgLnN0YXJyYXRleHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYmx1dHh0e1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gICAgLnN0YXJyYXRle1xyXG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJ0dmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnZlcnR4dHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxufVxyXG4uaGlnaGxpZ3Rib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgLmFsaWNlYmx1ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucGlua2xpZ2h0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWVjZWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5yYXRlc3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIH1cclxufVxyXG4uaW5mcmFmYWNpbGl0eXtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgXHJcbiAgICAgICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4uc2J0eHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcbi50aGlyZHNlY3Rpb24gLkhlYWRUeHQgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uc3BhbntcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXRsaWtlY29se1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tXHJcblxyXG5cclxuLnRoaXJkc2VjdGlvbnBvcHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjAzKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgLkhlYWRUeHQge1xyXG4gICAgaDV7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICBcclxufSBcclxuXHJcblxyXG4uc2l6ZV9zZXRwb3Age1xyXG4gICAgLy8gICBtaW4taGVpZ2h0OiAyNzBweDtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgIGNvbnRhaW46IHVuc2V0O1xyXG4gICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xyXG4gICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xyXG4gICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgLmJvb21hcmt7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgLmltZ19hbGlnbnBvcCB7XHJcbiAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgIC8vIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAvLyB0b3A6IC0xMiU7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xyXG4gICB9XHJcbiAgIC5zcG5wb3B7XHJcbiAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIFxyXG4gICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICB9XHJcbiAgIC50aXRfc2V0cG9we1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgfVxyXG4gICAuYnRuc2V0c3tcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgIH1cclxuXHJcbiAgIGlvbi1pY29uLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmx1ZTsgXHJcbiAgfVxyXG5cclxuICAuc3BhbntcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDsgLyogQWRqdXN0IHNpemUgKi9cclxuICAgIGNvbG9yOiBibGFjazsgLyogQmxhY2sgb3V0bGluZSBpbml0aWFsbHkgKi9cclxuICAgIGZpbGw6IG5vbmU7IC8qIE5vIGZpbGwgKi9cclxuICAgIHN0cm9rZTogY3VycmVudENvbG9yOyAvKiBCb3JkZXIgY29sb3IgKi9cclxuICAgIHN0cm9rZS13aWR0aDogMjsgLyogQWRqdXN0IGJvcmRlciB0aGlja25lc3MgKi9cclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGh1bWJzLVVwIGljb24gY2xpY2tlZCAqL1xyXG4gIC50aHVtYnMtdXBbc3R5bGUqPVwiYmx1ZVwiXSB7XHJcbiAgICBmaWxsOiBibHVlOyAvKiBGaWxsIGJsdWUgd2hlbiBjbGlja2VkICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRodW1icy1Eb3duIGljb24gY2xpY2tlZCAqL1xyXG4gIC50aHVtYnMtZG93bltzdHlsZSo9XCJyZWRcIl0ge1xyXG4gICAgZmlsbDogcmVkOyAvKiBGaWxsIHJlZCB3aGVuIGNsaWNrZWQgKi9cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 6027:
/*!******************************************************!*\
  !*** ./src/app/pages/clgdetails/news/news.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px !important;\n}\n\n.py-12 {\n  padding: 12px 0 !important;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.headtxt {\n  font-weight: 500 !important;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.border-y {\n  margin-bottom: 14px;\n  padding: 0px 12px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.px-12 {\n  padding: 0 12px;\n}\n\n.mt0 {\n  margin-top: 0;\n}\n\n.firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\np.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n}\n\n.setnoimage {\n  height: 150px;\n  width: 100%;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUZJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FBS1I7O0FBSEk7RUFDSSxjQUFBO0FBS1I7O0FBSEk7RUFDQyxpQkFBQTtBQUtMOztBQUhJO0VBQ0ksa0JBQUE7QUFLUjs7QUFISTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtSOztBQUpRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTVo7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFKSTtFQUNJLGdCQUFBO0FBTVI7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFPSjs7QUFOSTtFQUNJLFlBQUE7QUFRUjs7QUFOSTtFQUNJLFVBQUE7QUFRUjs7QUFOSTtFQUNJLGNBQUE7QUFRUjs7QUFOSTtFQUNJLHNCQUFBO0FBUVI7O0FBTEU7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtBQVVKOztBQVRJO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBV1I7O0FBVEk7RUFDSSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVdSOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVRJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Ysc0JBQUE7QUFXTjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFSQTtFQUNJLGdCQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0FBYUo7O0FBWEE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFnQko7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQWVKOztBQVpBO0VBQ0ksYUFBQTtBQWVKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBZUo7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQWVKOztBQVpBO0VBQ0ksZUFBQTtFQUFpQixnQkFBQTtFQUNqQixZQUFBO0VBQWMsNEJBQUE7RUFDZCxVQUFBO0VBQVksWUFBQTtFQUNaLG9CQUFBO0VBQXNCLGlCQUFBO0VBQ3RCLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsMkJBQUE7RUFBNkIsc0JBQUE7QUFxQmpDOztBQWxCRSwyQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSwyQkFBQTtBQXNCaEI7O0FBbkJFLDZCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUFXLDBCQUFBO0FBdUJmIiwiZmlsZSI6Im5ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMHB4IWltcG9ydGFudDtcclxufVxyXG4ucHktMTJ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAhaW1wb3J0YW50O1xyXG59XHJcbi5wdC0xMntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbn1cclxuLmhlYWR0eHR7XHJcbiAgICBmb250LXdlaWdodDogNTAwIWltcG9ydGFudDtcclxufVxyXG4uc2J0eHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwIWltcG9ydGFudDtcclxufVxyXG4ub3ZyYWxscmF0aW5ne1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5wLCAuc3RhcnJhdGV4e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuICAgIC5ibHV0eHR7XHJcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICB9XHJcbiAgICAuc3RhcnJhdGV7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAucnR2YWx1ZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudmVydHh0e1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIG1hcmdpbjogMTJweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTA3O1xyXG59XHJcbi5wb3B1bGFydHh0e1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn1cclxuLnNlZ21lbnRTdHVke1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgLmxpa2VEaXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5saWtle1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIC5kaXNsaWtle1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogMHB4IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLm0tMTJ7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbn1cclxuLmhpZ2hsaWd0Ym94e1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIC5hbGljZWJsdWV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gICAgLnBpbmtsaWdodHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjllY2VlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ucmF0ZXN7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogIzExYzkxODtcclxuICAgICAgICBjb2xvcjogIzExYzkxODtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci15e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xyXG4gICAgLy9ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG59XHJcbi5tdC0xMHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG59XHJcbi5tdDB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5maXJjdGNoYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRkZmU0O1xyXG4gICAgY29sb3I6ICNhNzBjMGM7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxucC5zYnR4dHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNGI0YjRiO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi50aGlyZHNlY3Rpb24gLkhlYWRUeHQgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG5cclxuLnNwYW57XHJcbiAgICBjb2xvcjogIzAwODFkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2V0bGlrZWNvbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbn1cclxuXHJcbi5zZXRwaWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2V0bm9pbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwYW57XHJcbiAgICBjb2xvcjogIzAwODFkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXHJcbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXHJcbiAgICBmaWxsOiBub25lOyAvKiBObyBmaWxsICovXHJcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXHJcbiAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRodW1icy1VcCBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xyXG4gICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLWRvd25bc3R5bGUqPVwicmVkXCJdIHtcclxuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 67509:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/placements/placements.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.colored {\n  color: red;\n}\n\n.ovrallrating {\n  margin-top: 33px;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.tit_set {\n  word-break: break-all;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n  margin: 6px 6px 20px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.size_setsuited {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setsuited ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setsuited .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFFSyxtQkFBQTtFQUNBLGFBQUE7QUFFVDs7QUFBSTtFQUNJLGFBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR1o7O0FBRFE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFHWjs7QUFDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ1o7O0FBQ1E7RUFDSSxnQkFBQTtBQUNaOztBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7O0FBQVk7RUFDSSxjQUFBO0FBRWhCOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx3RkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxnQkFBQTtBQUNSOztBQUNJO0VBQ0ksbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGdDQUFBO0FBQ1I7O0FBQVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBQVE7RUFDSSxlQUFBO0FBRVo7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtBQUdKOztBQUFDO0VBQ0csNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBR0o7O0FBRkk7RUFDSSxxQ0FBQTtBQUlSOztBQUFDO0VBQ0csbUJBQUE7QUFHSjs7QUFEQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSUo7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Qzs7QUFKRSwyQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSwyQkFBQTtBQVFoQjs7QUFMRSw2QkFBQTs7QUFDQTtFQUNFLFNBQUE7RUFBVywwQkFBQTtBQVNmIiwiZmlsZSI6InBsYWNlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5weC0xMntcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ucHQtMTJ7XHJcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xyXG59XHJcbi50YWJib2R5e1xyXG4gICAgcGFkZGluZzoxMnB4IDBweDtcclxuICAgIC5iZ3Ntb2NrZ3JheXtcclxuICAgICAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRjYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWR7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2h0Y2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFjY29yZGlhbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHsgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGJsY29udGVudHtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICB9XHJcbn1cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6NnB4IDhweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgdGFibGUgdGguZGJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTgzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuaWNvbmJ0bntcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgfVxyXG4gXHJcbiAuc2VyY2hiYXJ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XHJcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDQ1cHghaW1wb3J0YW50OyAgIFxyXG4gICAgfVxyXG4gICBcclxuIH0gXHJcbiAuY2Fza3Fuc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiB9XHJcbiAuZmlsdGVyLWJ0bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiB9XHJcbiAuY2FyZGN1c3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiB9XHJcbiAucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDoxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZGQyNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLnBvcHVsYXJ0eHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogMHB4IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnVzZXJSZXZpZXd7XHJcbiAgICAuZmlyY3RjaGFye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGRmZTQ7XHJcbiAgICAgICAgY29sb3I6ICNhNzBjMGM7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBwLnNidHh0e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogIzRiNGI0YjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAucmF0ZWJ5e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMWM5MTg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICAgIC5yYXRpbmdCdG5ze1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgICAgICAgICAgLS1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRodW1iaWNvbntcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRhdGV2bnR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgfVxyXG4gICAgLmJsdXR4dHtcclxuICAgICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuLmljb25maXh7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuLmJsdXR4dHtcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gfVxyXG4gIC5jb2xvcmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLm92cmFsbHJhdGluZ3tcclxuICAgIG1hcmdpbi10b3A6MzNweDtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAucCwgLnN0YXJyYXRleHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYmx1dHh0e1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gICAgLnN0YXJyYXRle1xyXG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJ0dmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnZlcnR4dHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxufVxyXG4uaGlnaGxpZ3Rib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgLmFsaWNlYmx1ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucGlua2xpZ2h0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWVjZWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5yYXRlc3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIH1cclxufVxyXG4udGhpcmRzZWN0aW9uIC5IZWFkVHh0IGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uYm9vbWFya3tcclxuICAgIC0tY29sb3I6IGdyYXk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI2NmY2ZjZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcbi50aXRfc2V0e1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5zZXRwaWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogNnB4IDZweCAyMHB4O1xyXG59XHJcblxyXG4uc3BhbntcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNldGxpa2Vjb2x7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuLy8gLS0tLS1cclxuXHJcblxyXG4udGhpcmRzZWN0aW9ucG9we1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0NSwgMjU1LCAwLjM4MDM5MjE1NjkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAuSGVhZFR4dCB7XHJcbiAgICBoNXtcclxuICAgICAgICBtYXJnaW46IDJweCAwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59IFxyXG5cclxuXHJcbi5zaXplX3NldHBvcCB7XHJcbiAgICAvLyAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxuICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgIC0tb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgY29udGFpbjogdW5zZXQ7XHJcbiAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XHJcbiAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAuYm9vbWFya3tcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIC0tY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgICAgIH1cclxuICAgfVxyXG4gICAuaW1nX2FsaWducG9wIHtcclxuICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgLy8gbGVmdDogMjBweDtcclxuICAgICAgIC8vIHRvcDogLTEyJTtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XHJcbiAgIH1cclxuICAgLnNwbnBvcHtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgXHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgIH1cclxuICAgLnRpdF9zZXRwb3B7XHJcbiAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICB9XHJcbiAgIC5idG5zZXRze1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgfVxyXG5cclxuICAgaW9uLWljb24uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBibHVlOyBcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC5zaXplX3NldHN1aXRlZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGNvbnRhaW46IHVuc2V0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmJvb21hcmt7XHJcbiAgICAgICBcclxuICAgICAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGFue1xyXG4gICAgY29sb3I6ICMwMDgxZGM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBBZGp1c3Qgc2l6ZSAqL1xyXG4gICAgY29sb3I6IGJsYWNrOyAvKiBCbGFjayBvdXRsaW5lIGluaXRpYWxseSAqL1xyXG4gICAgZmlsbDogbm9uZTsgLyogTm8gZmlsbCAqL1xyXG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIEJvcmRlciBjb2xvciAqL1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyOyAvKiBBZGp1c3QgYm9yZGVyIHRoaWNrbmVzcyAqL1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaHVtYnMtVXAgaWNvbiBjbGlja2VkICovXHJcbiAgLnRodW1icy11cFtzdHlsZSo9XCJibHVlXCJdIHtcclxuICAgIGZpbGw6IGJsdWU7IC8qIEZpbGwgYmx1ZSB3aGVuIGNsaWNrZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGh1bWJzLURvd24gaWNvbiBjbGlja2VkICovXHJcbiAgLnRodW1icy1kb3duW3N0eWxlKj1cInJlZFwiXSB7XHJcbiAgICBmaWxsOiByZWQ7IC8qIEZpbGwgcmVkIHdoZW4gY2xpY2tlZCAqL1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 79257:
/*!********************************************************************!*\
  !*** ./src/app/pages/clgdetails/questionans/questionans.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".p-12 {\n  padding: 12px;\n}\n\n.px-12 {\n  padding: 0 12px;\n  padding-bottom: 7px;\n}\n\n.firctchar {\n  background: #f4fbea;\n  color: #4CAF50;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\np.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.timeline {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n}\n\n.timeline ion-icon {\n  margin-right: 4px;\n}\n\n.cbottom {\n  padding: 0 12px;\n}\n\n.cbottom p {\n  margin-top: 0px;\n  color: #47a5f1;\n}\n\n.cbottom .likes {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.cbottom .likes ion-icon {\n  margin: 0px 6px;\n  font-size: 16px;\n  color: #aaa;\n}\n\n.heading {\n  font-weight: 500;\n}\n\n.heading span {\n  color: #68da44;\n  font-size: 16px;\n  display: inline-block;\n  margin-top: 10px;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.discusion ion-card {\n  margin: 0;\n}\n\n.oinfo {\n  padding: 2px 30px;\n  color: #249bd1;\n  line-height: 1.8;\n  margin-top: 0;\n}\n\n.botomtxt {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n}\n\n.botomtxt ion-icon {\n  margin-left: 10px;\n  font-size: 16px;\n  color: #2196F3;\n}\n\n.mt-6 {\n  margin-top: 6px;\n  display: block;\n}\n\n.mx-10 ion-card {\n  margin: 10px 0 !important;\n}\n\n.clgList {\n  padding-left: 20px;\n  color: blue;\n}\n\n.clgList li {\n  padding: 5px 0px;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec ion-button {\n  margin-top: 18px;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.blue-icon {\n  color: blue;\n}\n\n.no-data-msg {\n  text-align: center;\n  color: #777;\n  font-size: 1.2rem;\n  margin-top: 20px;\n}\n\n.qcard ion-card-header, .qcard ion-card-title {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0ksaUJBQUE7QUFJUjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFISTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBS1I7O0FBSEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUtSOztBQUpRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTVo7O0FBRkE7RUFFSSxnQkFBQTtBQUlKOztBQUhJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBRkE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBRkk7RUFDSSxTQUFBO0FBS1I7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUo7O0FBSkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTVI7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhJO0VBQ0kseUJBQUE7QUFNUjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUxJO0VBQ0ksZ0JBQUE7QUFPUjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBTUo7O0FBTEk7RUFDSSw2QkFBQTtBQU9SOztBQUhJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBS1I7O0FBSEk7RUFDSSxrQkFBQTtBQUtSOztBQUhJO0VBQ0ksZUFBQTtBQUtSOztBQURBO0VBQ0ksV0FBQTtBQUlKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUNJO0VBQ0ksc0JBQUE7QUFFUiIsImZpbGUiOiJxdWVzdGlvbmFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnAtMTJ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcbi5weC0xMntcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5maXJjdGNoYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmYmVhO1xyXG4gICAgY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxucC5zYnR4dHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNGI0YjRiO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi50aW1lbGluZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbn1cclxuLmNib3R0b217XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBjb2xvcjogIzQ3YTVmMTtcclxuICAgIH1cclxuICAgIC5saWtlc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaGVhZGluZ3tcclxuICAgLy8gY29sb3I6ICM0YzlkZGQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogIzY4ZGE0NDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcbi5kaXNjdXNpb257XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuLm9pbmZve1xyXG4gICAgcGFkZGluZzogMnB4IDMwcHg7XHJcbiAgICBjb2xvcjogIzI0OWJkMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5ib3RvbXR4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIC8vcGFkZGluZy1sZWZ0OiA1N3B4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjE5NkYzO1xyXG4gICAgfVxyXG59XHJcbi5tdC02e1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm14LTEwe1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5jbGdMaXN0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBsaXtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ydW1zZWN7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDI0NSAyMzApO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjggMjM2IDIzOSk7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLnNldGRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJsdWUtaWNvbiB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5uby1kYXRhLW1zZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5xY2FyZHtcclxuICAgIGlvbi1jYXJkLWhlYWRlciwgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICB9Il19 */");

/***/ }),

/***/ 62787:
/*!************************************************************!*\
  !*** ./src/app/pages/clgdetails/reviews/reviews.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px !important;\n}\n\n.py-12 {\n  padding: 10px 0 !important;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.headtxt {\n  font-weight: 500 !important;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.border-y {\n  margin-bottom: 14px;\n  padding: 0px 12px;\n}\n\n.p1 {\n  margin: 0;\n}\n\n.p2 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.p3 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.setspn {\n  color: blue;\n}\n\n.setnotification {\n  width: 360px;\n  height: 370px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.thirdsection {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsection .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.font-semibold {\n  font-weight: bold;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.starrate {\n  color: #FFD700;\n  /* Gold color for stars */\n  font-size: 18px;\n  /* Adjust star size */\n  margin-right: 2px;\n  /* Space between stars */\n}\n\n.rtvalue {\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n.bookmark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.imgHeadpop {\n  display: flex;\n  justify-content: space-between;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  border-right: 1px solid gray;\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUZJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FBS1I7O0FBSEk7RUFDSSxjQUFBO0FBS1I7O0FBSEk7RUFDQyxpQkFBQTtBQUtMOztBQUhJO0VBQ0ksa0JBQUE7QUFLUjs7QUFISTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtSOztBQUpRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTVo7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFKSTtFQUNJLGdCQUFBO0FBTVI7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFPSjs7QUFOSTtFQUNJLFlBQUE7QUFRUjs7QUFOSTtFQUNJLFVBQUE7QUFRUjs7QUFOSTtFQUNJLGNBQUE7QUFRUjs7QUFOSTtFQUNJLHNCQUFBO0FBUVI7O0FBTEU7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtBQVVKOztBQVRJO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBV1I7O0FBVEk7RUFDSSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVdSOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVRJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Ysc0JBQUE7QUFXTjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFQQTtFQUNJLFNBQUE7QUFVSjs7QUFSQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQVdBOztBQVJBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FBV0E7O0FBUEE7RUFDSSxXQUFBO0FBVUo7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVVKOztBQVRJO0VBQ0ksa0JBQUE7RUFDSixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFXSjs7QUFUSTtFQUNJLGNBQUE7QUFXUjs7QUFQQTtFQUNJLDZDQUFBO0VBQ0EsZ0dBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSSTtFQUNJLGVBQUE7QUFVUjs7QUFSSTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFVUjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQUlBO0VBQ0ksY0FBQTtFQUFnQix5QkFBQTtFQUNoQixlQUFBO0VBQWlCLHFCQUFBO0VBQ2pCLGlCQUFBO0VBQW1CLHdCQUFBO0FBRXZCOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQU1BO0VBQ0ksNkNBQUE7RUFDQSxnR0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0ksZUFBQTtBQUhSOztBQUtJO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhSOztBQVNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBTko7O0FBUUU7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFPSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFI7O0FBT0k7RUFFSSxhQUFBO0VBQ0EseUJBQUE7QUFOUjs7QUFTQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBR0EseUJBQUE7QUFSSjs7QUFVQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBTEo7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUFpQixnQkFBQTtFQUNqQixZQUFBO0VBQWMsNEJBQUE7RUFDZCxVQUFBO0VBQVksWUFBQTtFQUNaLG9CQUFBO0VBQXNCLGlCQUFBO0VBQ3RCLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsMkJBQUE7RUFBNkIsc0JBQUE7QUFBakM7O0FBR0UsMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFDaEI7O0FBRUUsNkJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQVcsMEJBQUE7QUFFZiIsImZpbGUiOiJyZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5weC0xMntcclxuICAgIHBhZGRpbmc6IDAgMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnB5LTEye1xyXG4gICAgcGFkZGluZzogMTBweCAwIWltcG9ydGFudDtcclxufVxyXG4ucHQtMTJ7XHJcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xyXG59XHJcbi5oZWFkdHh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnNidHh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLm92cmFsbHJhdGluZ3tcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAucCwgLnN0YXJyYXRleHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYmx1dHh0e1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gICAgLnN0YXJyYXRle1xyXG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJ0dmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnZlcnR4dHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxufVxyXG4ucG9wdWxhcnR4dHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbi5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIC5saWtlRGlze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAubGlrZXtcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgICAuZGlzbGlrZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcclxuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDBweCAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcbi5tLTEye1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG59XHJcbi5oaWdobGlndGJveHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAuYWxpY2VibHVle1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICAgIC5waW5rbGlnaHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZWNlZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnJhdGVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgfVxyXG59XHJcbi5ib3JkZXIteXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgIC8vYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxufVxyXG5cclxuLnAxIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucDJ7XHJcbmZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbm1hcmdpbjogNnB4IDBweCFpbXBvcnRhbnQ7XHJcbmNvbG9yOiBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLnAze1xyXG5mb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG5tYXJnaW46IDZweCAwcHghaW1wb3J0YW50O1xyXG5jb2xvcjogZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uc2V0c3Bue1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuLnNldG5vdGlmaWNhdGlvbntcclxuICAgIHdpZHRoOjM2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIC5zZXR0aXRsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTRhZmZlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IzAwODNkYztcclxuICAgIH1cclxufVxyXG5cclxuLnRoaXJkc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjAzKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgLkhlYWRUeHQge1xyXG4gICAgaDV7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4uZm9udC1zZW1pYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4uc3BhbntcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXRsaWtlY29se1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnN0YXJyYXRlIHtcclxuICAgIGNvbG9yOiAjRkZENzAwOyAvKiBHb2xkIGNvbG9yIGZvciBzdGFycyAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBBZGp1c3Qgc3RhciBzaXplICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDsgLyogU3BhY2UgYmV0d2VlbiBzdGFycyAqL1xyXG4gIH1cclxuICBcclxuICAucnR2YWx1ZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvb2ttYXJre1xyXG4gICAgLS1jb2xvcjogZ3JheTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLmltZ19hbGlnbm4uc2hvcnRsaXN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pY29uLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmx1ZTsgXHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuLnRoaXJkc2VjdGlvbnBvcHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjAzKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgLkhlYWRUeHQge1xyXG4gICAgaDV7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLmltZ0hlYWRwb3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiAgLnNpemVfc2V0cG9wIHtcclxuIC8vICAgbWluLWhlaWdodDogMjcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb250YWluOiB1bnNldDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5ib29tYXJre1xyXG4gICAgICAgXHJcbiAgICAgICAgLS1jb2xvcjogZ3JheTtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgfVxyXG59XHJcbi5pbWdfYWxpZ25wb3Age1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBsZWZ0OiAyMHB4O1xyXG4gICAgLy8gdG9wOiAtMTIlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcclxufVxyXG4uc3BucG9we1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4udGl0X3NldHBvcHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuLmJ0bnNldHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuLnNwYW57XHJcbiAgICBjb2xvcjogIzAwODFkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXHJcbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXHJcbiAgICBmaWxsOiBub25lOyAvKiBObyBmaWxsICovXHJcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXHJcbiAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRodW1icy1VcCBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xyXG4gICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLWRvd25bc3R5bGUqPVwicmVkXCJdIHtcclxuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ 59688:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/scolarship/scolarship.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 205px;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.colored {\n  color: red;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.infrafacility img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.infrafacility p {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 12px;\n}\n\n.infrafacility h6 {\n  font-size: 14px;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\ntable.infotbl, th, td {\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n  padding: 4px 6px;\n}\n\ntable.infotbl th {\n  background: #004983;\n  color: #fff;\n  font-weight: 500;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb2xhcnNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdUOztBQURJO0VBQ0ksYUFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFJWjs7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBRFk7RUFDSSxnQkFBQTtBQUdoQjs7QUFEWTtFQUNJLGNBQUE7QUFHaEI7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHdGQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksZ0NBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdaOztBQURRO0VBQ0ksZ0JBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7QUFHWjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0FBSUo7O0FBREM7RUFDRyw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFISTtFQUNJLHFDQUFBO0FBS1I7O0FBREM7RUFDRyxtQkFBQTtBQUlKOztBQUZDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNB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QTtFQUFjLDRCQUFBO0VBQ2QsVUFBQTtFQUFZLFlBQUE7RUFDWixvQkFBQTtFQUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBZ0JqQzs7QUFiRSwyQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSwyQkFBQTtBQWlCaEI7O0FBZEUsNkJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQVcsMEJBQUE7QUFrQmYiLCJmaWxlIjoic2NvbGFyc2hpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnB4LTEye1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5wdC0xMntcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbn1cclxuLnRhYmJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHggMHB4O1xyXG4gICAgLmJnc21vY2tncmF5e1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZlO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICBwYWRkaW5nOjEycHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZHtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2h0Y2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmFjY29yZGlhbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgaW9uLWFjY29yZGlvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbHsgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGJsY29udGVudHtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICBjb2xvcjogIzAwODNkYzsgXHJcbiAgICB9XHJcbn1cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6NnB4IDhweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICB9XHJcbiAgdGFibGUgdGguZGJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTgzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuaWNvbmJ0bntcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50U3R1ZHtcclxuICAgIG1hcmdpbjogMTRweCAwcHg7XHJcbiAgfVxyXG4gXHJcbiAuc2VyY2hiYXJ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XHJcbiAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDQ1cHghaW1wb3J0YW50OyAgIFxyXG4gICAgfVxyXG4gICBcclxuIH0gXHJcbiAuY2Fza3Fuc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiB9XHJcbiAuZmlsdGVyLWJ0bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiB9XHJcbiAuY2FyZGN1c3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiB9XHJcbiAucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDoxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmF0aW9uIGxpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZGQyNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLnBvcHVsYXJ0eHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjogMHB4IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuLnVzZXJSZXZpZXd7XHJcbiAgICAuZmlyY3RjaGFye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZGRmZTQ7XHJcbiAgICAgICAgY29sb3I6ICNhNzBjMGM7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBwLnNidHh0e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogIzRiNGI0YjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAucmF0ZWJ5e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMWM5MTg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICAgIC5yYXRpbmdCdG5ze1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgICAgICAgICAgLS1jb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnRodW1iaWNvbntcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRhdGV2bnR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgfVxyXG4gICAgLmJsdXR4dHtcclxuICAgICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuLmljb25maXh7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuLmJsdXR4dHtcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gfVxyXG4gIC5jb2xvcmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLm92cmFsbHJhdGluZ3tcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAucCwgLnN0YXJyYXRleHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYmx1dHh0e1xyXG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gICAgLnN0YXJyYXRle1xyXG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnJ0dmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnZlcnR4dHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcclxufVxyXG4uaGlnaGxpZ3Rib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgLmFsaWNlYmx1ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucGlua2xpZ2h0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWVjZWU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5yYXRlc3tcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIH1cclxufVxyXG4uaW5mcmFmYWNpbGl0eXtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG4uc2J0eHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZS5pbmZvdGJsLCB0aCwgdGQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICBwYWRkaW5nOjRweCA2cHg7XHJcbn1cclxudGFibGUuaW5mb3RibCB0aHtcclxuICAgYmFja2dyb3VuZDogIzAwNDk4MztcclxuICAgY29sb3I6ICNmZmY7XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0gXHJcbi50aGlyZHNlY3Rpb24gLkhlYWRUeHQgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uc3BhbntcclxuICAgIGNvbG9yOiAjMDA4MWRjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXRsaWtlY29se1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxufVxyXG5cclxuLnNwYW57XHJcbiAgICBjb2xvcjogIzAwODFkYztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXHJcbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXHJcbiAgICBmaWxsOiBub25lOyAvKiBObyBmaWxsICovXHJcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXHJcbiAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRodW1icy1VcCBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xyXG4gICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cclxuICAudGh1bWJzLWRvd25bc3R5bGUqPVwicmVkXCJdIHtcclxuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 80765:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/admissions/admissions.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tabbody \">\n\n  <!-- section-1 -->\n  <div class=\"m10\">\n\n\n    <div *ngIf=\"whatnew && whatnew.trim()\" class=\"bgsmockgray\">\n      <div class=\"headcard\">\n        <div>\n          <h2>{{collegename}}</h2>\n        </div>\n      </div>\n      <div class=\"angular-editor-textarea\" [innerHTML]=\"whatnew\"></div>\n    </div>\n\n    <!-- section -2 -->\n\n\n\n\n    <ion-accordion-group *ngIf=\"admiprocessarry && admiprocessarry.length > 0\" class=\"tblcontent accordians\">\n      <ion-accordion value=\"first\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label>\n            <h6 class=\"my-10 ion-padding-top\">{{collegename}} {{currentYear}}</h6>\n            <h2>Admission Process</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"ion-padding\" slot=\"content\">\n          <ng-container>\n            <table style=\"width:100%\">\n              <tr>\n                <th>Popular Courses</th>\n                <th>Accepted Exams</th>\n                <th>Eligibility/Cut-Off </th>\n              </tr>\n\n\n\n              <tr *ngFor=\"let item of admiprocessarry\">\n                <td>{{ item.subCatName || 'N/A' }}</td>\n                <td>{{ item.Accepting_Exams || 'N/A' }}</td>\n                <td>\n                  <p>Qualification - </p>\n                  <div *ngIf=\"item.eligibility?.qualification?.length > 0; else noQualification\">\n                    <div *ngFor=\"let qualification of item.eligibility.qualification\">\n                      {{ qualification }}<br>\n                    </div>\n                  </div>\n                  <ng-template #noQualification>\n                    N/A\n                  </ng-template>\n\n                  <p>Cut_off - </p>\n                  <div *ngIf=\"item.eligibility?.cut_off?.length > 0; else noCutOff\">\n                    <div *ngFor=\"let cut_off of item.eligibility.cut_off\">\n                      {{ cut_off }}<br>\n                    </div>\n                  </div>\n                  <ng-template #noCutOff>\n                    N/A\n                  </ng-template>\n\n                  <div>\n                    <p>Other Eligibility - </p>\n                    <div *ngIf=\"item.eligibility?.other_eligibility; else noOtherEligibility\">\n                      {{ item.eligibility.other_eligibility }}\n                    </div>\n                    <ng-template #noOtherEligibility>\n                      N/A\n                    </ng-template>\n                  </div>\n                </td>\n              </tr>\n\n\n\n            </table>\n          </ng-container>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n\n\n\n\n\n\n    <!-- section -3 -->\n\n\n\n\n    <ng-container *ngFor=\"let item of admiprocessarry\">\n      <div class=\"courseCard\" style=\"padding: 2px 12px;\" *ngIf=\"item.Examnotification_or_ImportantDates\">\n        <h6 class=\"my-10\">{{collegename}} {{item.subCatName}} Admissions {{currentYear}}</h6>\n        <p>{{item.courseCount}} Courses | {{item.duration}} Years</p>\n\n\n\n\n        <div *ngIf=\"item.eligibility?.qualification?.length > 0 || \n          item.eligibility?.cut_off?.length > 0 || \n          item.eligibility?.other_eligibility\" style=\"border: 1px solid lightgray;\">\n          <p class=\"dticon\"> <ion-icon name=\"checkmark-circle-outline\"></ion-icon> Eligibility:</p>\n\n          <ion-row>\n            <ion-col>Qualification -</ion-col>\n            <ion-col *ngFor=\"let qualification of item.eligibility.qualification\">{{ qualification }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>Cut_off -</ion-col>\n            <ion-col *ngFor=\"let cut_off of item.eligibility.cut_off\">{{ cut_off }}</ion-col>\n            <ion-col *ngIf=\"item.eligibility.other_eligibility\">{{ item.eligibility.other_eligibility }}</ion-col>\n          </ion-row>\n        </div>\n\n\n\n\n\n        <ion-row class=\"datevnt\">\n          <ion-col class=\"dticon\">\n            <ion-icon name=\"calendar-outline\"></ion-icon> Dates & Events\n          </ion-col>\n          <ion-col class=\"blutxt\" (click)=\"addmissiondatepdf(item.sub_category)\">\n            Download Dates <ion-icon name=\"arrow-down-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"tabecontent mt-3\" [innerHTML]=\"item.Examnotification_or_ImportantDates\"></div>\n      </div>\n    </ng-container>\n\n\n    <!--  -->\n\n    <!-- section- 4 -->\n  </div>\n\n\n\n  <div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5>Explore popular similar colleges</h5>\n    </div>\n\n    <div>\n      <ion-slides [options]=\"slideOptsnew\">\n\n        <ion-slide *ngFor=\"let item of popularclgarry\">\n          <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important; margin-bottom:0 !important\">\n            <div class=\"imgHeadpop\">\n\n\n              <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n                {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n              </p>\n              <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n            </p>\n            <p style=\"display: flex;\"> <span class=\"spnpop\"></span>\n              <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                {{item.ratings}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n\n\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\" (click)=\"toggleShortlist(item.collegeid)\">\n                <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(item.collegeid)\">\n                </ion-icon>\n              </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                (click)=\"brochure(item.collegeid)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n  <!--  -->\n\n\n\n\n  <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n    <div class=\"px-10 cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\" class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n\n          <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n            {{ item.user_name.charAt(0) }}\n          </h1>\n          <ng-template #showDefaultIcon class=\"firstchar\">\n            <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n          </ng-template>\n\n        </ion-col>\n        <ion-col size=\"7\">\n          <h2>{{item.user_name}}</h2>\n          <p class=\"sbtxt\">{{item.coursename}}</p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <div class=\"rates\">\n            <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n          </div>\n        </ion-col>\n      </ion-row>\n      <div class=\"ratingBtns\">\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n        </ion-button>\n      </div>\n      <p><span>Placements: </span> {{item.placement_desc}} </p>\n      <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n      <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n      <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n      <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n      <ion-row class=\"thumbicon\">\n        <ion-col class=\"setlikecol\">\n          <div>Was this review helpful </div>\n\n          <div style=\"display: flex;\">\n            <!-- Thumbs Up Icon -->\n            <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n              <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\" [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n              </ion-icon>\n            </span>\n\n            <!-- Separator -->\n            <span class=\"span\">|</span>\n\n            <!-- Thumbs Down Icon -->\n            <span class=\"span\" (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n              <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n              </ion-icon>\n            </span>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n</div>\n<!--close-   Anonymous-->\n\n\n<!-- section- 6  best suited colleges -->\n<div class=\"m10\">\n\n  <div class=\"suitedclg\">\n\n\n\n\n    <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n      <div class=\"thirdsection\">\n        <div class=\"HeadTxt\">\n          <h5> Best suited colleges for you</h5>\n          <p>Because you showed interest in {{ selectedCourseName }}</p>\n        </div>\n        <div>\n          <ion-slides [options]=\"slideOptssuited\">\n\n            <ion-slide *ngFor=\"let item of suitclgarry\">\n              <ion-card class=\"size_setpop\">\n                <div class=\"imgHead\">\n\n                  <p class=\"tit_set\">\n                    {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                  </p>\n                  <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </div>\n\n                <p class=\"set_botm\">\n                  <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n                </p>\n                <p style=\"display: flex;\"> <span class=\"spnpop\"></span>\n                  <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                    {{item.ratings}}</span>\n                </p>\n\n                <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n                  <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                    [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                    <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                      [class.active]=\"isShortlisted(item.id)\">\n                    </ion-icon>\n                  </ion-button>\n\n                  <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochuresuit(item.id)\">\n                    <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                  </ion-button>\n                  <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                    (click)=\"clgpredict(item.id,item.CatId,item.subCatName)\">\n                    Predict Admission\n                  </ion-button>\n                </div>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n    </div>\n\n\n    <!--  -->\n\n\n\n    <!-- section- 7 photo  & videos -->\n    <div *ngIf=\"collegename && clgimgArry?.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <p style=\"margin: 0;\">{{collegename}}</p>\n        </ion-col>\n      </ion-row>\n\n      <h5>Take a look at Campus</h5>\n\n      <ion-slides [options]=\"slidepic\">\n        <ion-slide *ngFor=\"let item of clgimgArry\">\n          <ion-card class=\"setpic\">\n            <img [src]=\"item.image\">\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n\n\n    <!--  -->\n\n\n\n\n\n\n\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <div class=\"populartxt\">\n        <h2> Latest & Popular Articles</h2>\n      </div>\n\n\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\" class=\"mt10\">\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw mb5 mt6 pb0\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw mb5 mt6 pb0\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <!--  -->\n  </div>\n  <!-- student Forum section -->\n\n  <div class=\"forumsec\">\n    <ion-row class=\"firstrow\">\n      <ion-col size=\"12\">\n        <h4>{{collegename}}</h4>\n        <h5>Student Forum</h5>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"studentForum\">\n      <div class=\"setdiv\">\n        <ion-row class=\"firstrow\">\n          <ion-col size=\"12\">\n            <h5>Anything you would want to ask experts?</h5>\n          </ion-col>\n        </ion-row>\n        <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n        </ion-input>\n        <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n      </div>\n    </form>\n  </div>\n\n  <!--  -->\n\n\n\n\n\n\n\n</div>");

/***/ }),

/***/ 89688:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/clgdetails.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"> <ion-icon name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon></ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n\n          <!-- <div class=\"notification\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n\n  <div class=\"clgcoverphoto\">\n    <img class=\"imgclg\" [src]=\"image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n    <img class=\"log\" [src]=\"clglogo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n\n  </div>\n\n  <div>\n    <div class=\"px-10 pt-12\">\n      <div class=\"shortInfo\">\n        <h4>{{collegename}}</h4>\n        <p><span><ion-icon name=\"location-outline\" class=\"location\"></ion-icon>{{cityname}}.{{state}}</span>\n\n        </p>\n      </div>\n\n      <div class=\"subact\">\n        <div>\n          <span class=\"bglightgry\">{{clgcategory}} </span> <span class=\"bglightgry\">Estd. {{estd}}</span>\n        </div>\n        <ion-icon class=\"shareicon\" name=\"share-social\" (click)=\"shareBlog(collegeId)\"> Share</ion-icon>\n      </div>\n     \n\n      <ion-row>\n        <ion-col size=\"6\" class=\"pl0\"><ion-button fill=\"outline\" shape=\"round\" expand=\"block\" class=\"capitalize\"\n            (click)=\"compclg(collegeId)\"><ion-icon name=\"documents\" class=\"mr-6\"></ion-icon>\n            Compare</ion-button></ion-col>\n        <ion-col size=\"6\"><ion-button (click)=\"brochure(collegeId)\" shape=\"round\" expand=\"block\"\n            class=\"capitalize\"><ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n            Brochure</ion-button></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"><ion-button    (click)=\"clgpredict(collegeId)\" shape=\"round\" expand=\"block\"\n          class=\"capitalize\"><ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n          Predict Admission </ion-button></ion-col>\n      </ion-row>\n    </div>\n\n\n\n\n\n\n    <!-- Segment content -2 -->\n\n    <div class=\"segment2\">\n      <ion-segment [scrollable]=\"true\" class=\"segment px-10\" [(value)]=\"segment\" (ionChange)=\"clgDetailTabs($event)\"\n        #segmentElement>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsA\">\n          <ion-label>College info</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsB\">\n          <ion-label>Courses & Fees</ion-label>\n        </ion-segment-button>\n\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsC\">\n          <ion-label>Reviews</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsD\">\n          <ion-label>Admissions</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsE\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsF\">\n          <ion-label>Cut-Offs</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsG\">\n          <ion-label>Infrastructure</ion-label>\n        </ion-segment-button>\n\n\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsI\">\n          <ion-label>Compare</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsJ\">\n          <ion-label>Q&A</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsK\">\n          <ion-label>Scholarships</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsL\">\n          <ion-label>Articles</ion-label>\n        </ion-segment-button>\n\n\n        <!-- <ion-segment-button class=\"seg-btn\" value=\"tabsM\" *ngIf=\"segment=='tabsM'&&  selectedCourseIdB != ''\" *ngIf == \" TabselectedIndex =11;\"> -->\n\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsM\" *ngIf=\"segment=='tabsM' ||  selectedCourseIdB != ''\">\n          <ion-label>Course Info</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n\n\n      <!-- segment container tabs-college info -->\n\n      <div *ngIf=\"segment === 'tabsA'\">\n        <div class=\"tabbody\">\n          <div class=\"px-10 pt-12\">\n            <div *ngIf=\"description\" class=\"clgdescription\" [innerHTML]=\"description\"></div>\n\n            <div *ngIf=\"whatnew\" class=\"bgsmockgray\">\n              <p [innerHTML]=\"whatnew\"></p>\n            </div>\n            <!-- table of content -->\n            <ion-accordion-group class=\"tblcontent accordians\" *ngIf=\"tblecontentArry && tblecontentArry.length > 0\">\n              <ion-accordion value=\"first\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}}</p>\n                    <h2>Table of content</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding paragraph tabecontent1\" slot=\"content\">\n                  <ul *ngFor=\"let item of tblecontentArry\">\n                    <!-- <p>{{collegename}} {{item.title}} </p> -->\n                    <a (click)=\"scrollTo(item.title)\"> {{collegename}} {{item.title}}</a>\n\n                  </ul>\n                </div>\n\n              </ion-accordion>\n            </ion-accordion-group>\n\n\n            <!-- iit  highlight section-->\n\n            <ion-accordion-group class=\"accordians\" *ngIf=\"clghightlight && clghightlight.length > 0\">\n              <ion-accordion value=\"first\" name=\"Highlights\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}} </p>\n                    <h2>Highlights</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ng-container>\n                    <ul *ngFor=\"let item of clghightlight\">\n                      <p [innerHTML]=\"item.text\"> </p>\n                    </ul>\n                  </ng-container>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group>\n\n\n            <!-- <ion-accordion-group class=\"accordians\" *ngIf=\"clghightlight && clghightlight.length > 0\">\n              <ion-accordion value=\"first\" name=\"Highlights\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}} </p>\n                    <h2>Popular Programmes 2025</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ng-container>\n                    <ul *ngFor=\"let item of clghightlight\">\n                      <p [innerHTML]=\"item.text\"> </p>\n                    </ul>\n                  </ng-container>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group> -->\n\n\n            <ion-accordion-group class=\"accordians\" *ngIf=\"clghightlight && clghightlight.length > 0\">\n              <ion-accordion value=\"first\" name=\"Highlights\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}} </p>\n                    <h2>Facilities 2025</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ng-container>\n                    <ul *ngFor=\"let title of facility_titles.split(',')\">\n                      <p >. {{title}} </p>\n                    </ul>\n                  </ng-container>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group>\n            <!--Commonly asked questions on  highlight-->\n\n            <div class=\"caskqns\" *ngIf=\"qunanswer && qunanswer.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions\n                      <p style=\"margin: 0;\">on highlights</p>\n                    </h5>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of qunanswer\" (click)=\"toggleAccordion(item)\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\">\n\n                  </div>\n                </ion-accordion>\n\n              </ion-accordion-group>\n            </div>\n\n            <div class=\"populartxt\" *ngIf=\"prosesarray && prosesarray.length > 0\"\n              >\n              <h2 name=\"Admission Process And Important Dates\">  {{collegename}} Admission Process and Important Dates {{currentYear}} </h2>\n\n              <ion-accordion-group class=\"accordians\">\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of prosesarray\">\n                  <ion-item detail=\"true\" slot=\"header\">\n                    <ion-label>\n                      <h2>{{item.subCatName}} Admission {{currentYear}}</h2>\n                      <ion-label style=\"display: flex;\">{{item.courseCount}} courses . {{item.duration}}\n                        years</ion-label>\n                    </ion-label>\n                  </ion-item>\n\n\n                  <div class=\"ion-padding paragraph\" slot=\"content\"\n                    *ngIf=\"item?.eligibility?.qualification?.length || item?.eligibility?.cut_off?.length || item?.eligibility?.other_eligibility || item?.Examnotification_or_ImportantDates\">\n\n\n                    <div class=\"icontxt\"\n                      *ngIf=\"item?.eligibility && (item.eligibility.qualification?.length || item.eligibility.cut_off?.length || item.eligibility.other_eligibility)\">\n                      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                      <span>Eligibility</span>\n\n                      <td>\n                        <p>Qualification - </p>\n                        <div *ngFor=\"let qualification of item.eligibility.qualification\">\n                          {{ qualification }}<br>\n                        </div>\n                        <p>Cut_off - </p>\n                        <div *ngFor=\"let cut_off of item.eligibility.cut_off\">\n                          {{ cut_off }}<br>\n                        </div>\n                        <div *ngIf=\"item.eligibility.other_eligibility\">\n                          {{ item.eligibility.other_eligibility }}\n                        </div>\n                      </td>\n                    </div>\n\n                    <ion-row>\n                      <ion-col size=\"6\" class=\"textcenter gray\">\n                        <ion-icon name=\"calendar-outline\"></ion-icon> Important Dates\n                      </ion-col>\n                      <ion-col size=\"6\" class=\"textcenter blue\" (click)=\"addmissiondatepdf(item.sub_category)\">\n                        Download Dates <ion-icon name=\"cloud-download-outline\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <div [innerHTML]=\"item.Examnotification_or_ImportantDates\">\n                    </div>\n                  </div>\n\n\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n            <!--iit popular programmes  section-->\n            <div name=\"Popular Programs\" class=\"populartxt\" *ngIf=\"popprogrmmArrydata && popprogrmmArrydata.length > 0\">\n              <h2>{{collegename}} Popular Programmes {{currentYear}} </h2>\n\n            \n              <div class=\"courseCard\" *ngFor=\"let item of popprogrmmArrydata\">\n                <ion-row class=\"headpart\">\n                  <ion-col size=\"10\">\n                    <h3 (click)=\"onCourseClicked(item.sub_category,item.course_category, 'tabsB')\">{{item.sub_category_name}}( {{item.course_category_name}})</h3>\n\n                    <ion-label style=\"display: flex;\" *ngIf=\"item.total_courses\">{{item.total_courses}} courses | <span\n                        style=\"padding-left: 7px;\" *ngIf=\"item.duration\"> {{item.duration}} years</span> </ion-label>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"midpart\">\n                  <ion-col size=\"8\" *ngIf=\"item.entrance_exam_names\">\n                    <span>Exams Accepted</span>\n                    <p>{{item.entrance_exam_names}}</p>\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row class=\"footerpart\">\n\n                  <ion-button fill=\"outline\" shape=\"round\" class=\"capitalize mr-6\" (click)=\"compclg(collegeId)\">\n                    <ion-icon name=\"documents\" class=\"mr-6\"></ion-icon> Compare</ion-button>\n\n                  <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochure(collegeId)\">\n                    <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure</ion-button>\n                    <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                        (click)=\"clgpredict(collegeId,item.CatId,item.subCatName)\">\n                        Predict Admission\n                      </ion-button>\n                    \n                \n                  </ion-row>\n                  <span class=\"capitalize\" style=\"    padding-bottom: 10px; padding-left: 19px;\">   Annual Fees (INR):    {{ item.total_fees ? item.total_fees : 'NA' }}</span>\n              </div>\n\n            </div>\n\n\n            <!-- commonly ask questions on Popular Programs-->\n            <div *ngIf=\"qunanswer && qunanswer.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Popular Programes</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of qunanswer\" (click)=\"toggleAccordion(item)\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n            <!--Addmission Process section  -->\n\n           \n\n\n\n            <!--asked questions on Admission -->\n            <div class=\"caskqns\" *ngIf=\"admissionQarray && admissionQarray.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Admission</p>\n                  </ion-col>\n                </ion-row>\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of admissionQarray\"\n                  (click)=\"toggleAccordion(item)\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n\n\n\n            <!-- placement section -->\n\n            <div  >\n              <div name=\"Placement\"  class=\"populartxt\" *ngIf=\"PlaceCategoryArr?.length > 0 && yearsArray?.length > 0\">\n                <h2>{{collegename}} Placements {{currentYear}} </h2>\n             \n              <div style=\"margin-top:1.2rem\">\n                <form [formGroup]=\"placementForm\">\n              \n                  <!-- Course Category Dropdown -->\n                  <mat-form-field appearance=\"outline\" class=\"setmat\">\n                    <mat-label>Select Course Category</mat-label>\n                    <mat-select formControlName=\"course_category\" (ngModelChange)=\"placemtyear($event)\">\n                      <mat-option *ngFor=\"let cat of PlaceCategoryArr\" [value]=\"cat.id\">\n                        {{ cat.name }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n              \n                  <!-- Year Dropdown -->\n                  <mat-form-field appearance=\"outline\" class=\"setmat\">\n                    <mat-label>Select Year</mat-label>\n                    <mat-select formControlName=\"year\" (ngModelChange)=\"placement()\">\n                      <mat-option *ngFor=\"let year of yearsArray\" [value]=\"year\">\n                        {{ year }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n              \n                </form>\n              </div>\n            </div>\n\n\n              <!-- Display data when available -->\n              <div *ngIf=\"placementarray && placementarray.length > 0\">\n                <div *ngFor=\"let item of placementarray | slice: 0: 2\">\n                  <table style=\"width:100%; margin-bottom: 18px\">\n                    <tr>\n                      <th>\n                        <p>Particulars {{ item.categoryName }}</p>\n                      </th>\n                      <th>\n                        <p>Statistics ({{ item.year }})</p>\n                      </th>\n                    </tr>\n                    <tr>\n                      <td>\n                        <p>Academic year</p>\n                      </td>\n                      <td>\n                        <p>{{ item.year }}</p>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>No. of companies visited</td>\n\n                      <td> {{item.no_of_companies_visited && item.no_of_companies_visited !== \"0\" ?\n                        item.no_of_companies_visited : 'NA' }}</td>\n\n                    </tr>\n                    <tr>\n                      <td>\n                        <p>Median salary of placed graduates (Amount in Rs.) </p>\n\n                      </td>\n                      <td>\n\n                        <p>{{ item.median_salary && item.median_salary !== \"0\" ? (item.median_salary | number:'1.2-2') :\n                          'NA' }}</p>\n\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>No. of student selected for higher education </td>\n\n                      <!-- <td>{{ item.no_of_student_selected }}</td> -->\n                      <td>{{ item.no_of_student_selected && item.no_of_student_selected !== \"0\" ?\n                        item.no_of_student_selected : 'NA' }}</td>\n                    </tr>\n                    <tr>\n                      <td>No. of student placed</td>\n                      <!-- <td>{{ item.no_of_students_placed }}</td> -->\n                      <td>{{ item.no_of_students_placed && item.no_of_students_placed !== \"0\" ?\n                        item.no_of_students_placed\n                        : 'NA' }}</td>\n\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n\n\n            <!--asked questions on Placement -->\n            <div class=\"caskqns m0\" *ngIf=\"placementQarray && placementQarray.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Placement</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of placementQarray\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}} </ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n\n            <!--  -->\n\n\n            <!-- Ranking section -->\n\n            <div name=\"Ranking\" class=\"populartxt\" *ngIf=\"rankingarray && rankingarray.length > 0\">\n              <h2>{{collegename}} Rankings {{currentYear}}</h2>\n              <div class=\"tablediv\">\n                <table style=\"width:100%\">\n                  <tr>\n                    <th>Ranking Body</th>\n                    <th>Year</th>\n                    <th>Rank</th>\n                    <th>Description</th>\n                  </tr>\n                  <tr *ngFor=\"let item of rankingarray\">\n                    <td><img [src]=\"item.image\"></td>\n                    <td>{{item.year}}</td>\n                    <td>{{item.rank}}</td>\n                    <td>\n                      <div *ngIf=\"!item.showMore && item.description.length > 30\">{{item.description.slice(0, 30)}}...\n                        <a (click)=\"toggleDescription(item)\">Show More</a>\n                      </div>\n                      <div *ngIf=\"item.showMore || item.description.length <= 30\">{{item.description}}\n                        <a *ngIf=\"item.showMore\" (click)=\"toggleDescription(item)\">Show Less</a>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n\n\n\n\n            <!--asked questions on Ranking -->\n            <div class=\"caskqns\" *ngIf=\"rankingQarray && rankingQarray.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Ranking</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of rankingQarray\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}} </ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n\n              </ion-accordion-group>\n            </div>\n\n          </div>\n\n\n          <!-- popular similar colleges section -->\n\n\n          <div class=\"thirdsection\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n            <div class=\"HeadTxt\">\n              <h5>Explore popular similar colleges</h5>\n\n            </div>\n\n            <div>\n              <ion-slides [options]=\"slideOptssuited\">\n\n                <ion-slide class=\"slide_set\" *ngFor=\"let item of popularclgarry\">\n                  <ion-card class=\"size_set\" style=\"margin-left: 0;width: 97%!important;\">\n                    <div class=\"imgHead\">\n\n\n                      <p class=\"tit_set\" (click)=\"getclgid(item.collegeid)\">\n                        {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n                      </p>\n                      <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                    </div>\n\n                    <p class=\"set_botm\">\n                      <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n                    </p>\n                    <p style=\"display: flex;\"> <span class=\"spn\"></span>\n                      <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                        {{item.ratings}}</span>\n                    </p>\n\n                    <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n                      <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                        [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\"\n                        (click)=\"toggleShortlist(item.collegeid)\">\n                        <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                          [class.active]=\"isShortlisted(item.collegeid)\">\n                        </ion-icon>\n                      </ion-button>\n\n                      <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                        (click)=\"brochure(item.collegeid)\">\n                        <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                        Brochure\n                      </ion-button>\n                      <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                        (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                        Predict Admission\n                      </ion-button>\n                      \n                    </div>\n\n                  </ion-card>\n                </ion-slide>\n              </ion-slides>\n\n            </div>\n          </div>\n\n\n\n\n          <div class=\"px-10\">\n\n\n\n            <!-- Review section -->\n\n\n\n            <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n              <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n                      {{ item.user_name.charAt(0) }}\n                    </h1>\n                    <ng-template #showDefaultIcon class=\"firstchar\">\n                      <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n                    </ng-template>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <h2>{{item.user_name}}</h2>\n                    <p class=\"sbtxt\">{{item.coursename}}</p>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                    <div class=\"rates\">\n                      <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <div class=\"ratingBtns\">\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n                  </ion-button>\n                </div>\n                <p><span>Placements: </span> {{item.placement_desc}} </p>\n                <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n                <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n                <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n                <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n                <ion-row class=\"thumbicon\">\n                  <ion-col class=\"setlikecol\">\n                    <div>Was this review helpful </div>\n\n                    <div style=\"display: flex;\">\n                      <!-- Thumbs Up Icon -->\n                      <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                        <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                          [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                        </ion-icon>\n                      </span>\n\n                      <!-- Separator -->\n                      <span class=\"span\">|</span>\n\n                      <!-- Thumbs Down Icon -->\n                      <span class=\"span\"\n                        (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                        <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                          [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                        </ion-icon>\n                      </span>\n                    </div>\n\n\n\n\n                  </ion-col>\n                </ion-row>\n              </div>\n\n            </div>\n\n\n            <!-- courses & fees section -->\n\n            <div class=\"populartxt m0\" *ngIf=\"coursefeesarray && coursefeesarray.length > 0\">\n              <h2 name=\"Courses And Fees\" style=\"margin-bottom:10px;\">{{collegename}} Courses & Fees {{currentYear}}\n              </h2>\n              <div style=\"overflow: auto;\">\n                <table style=\"width:50%\">\n                  <tr>\n                    <th>Category</th>\n                    <th>Course</th>\n                    <th>Annual Fees (INR)</th>\n                    <th>Eligibility</th>\n                  </tr>\n                  <tr *ngFor=\"let item of coursefeesarray; let i = index\">\n                    <td>{{item.subCategoryName}}</td>\n                    <td>{{item.name}}</td>\n                    <td *ngIf=\"item.total_fees > 0\">{{item.total_fees}}</td>\n                       <td *ngIf=\"item.total_fees == 0\">{{item.counseling_fees}} </td>\n                    <td>\n                      {{item.entranceexams}}\n\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n\n\n            <!--asked questions on Courses & Fees -->\n\n            <div *ngIf=\"coursfeeQarray && coursfeeQarray.length > 0\" class=\"caskqns\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Courses & Fees</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of coursfeeQarray\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}} </ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n\n              </ion-accordion-group>\n            </div>\n          </div>\n\n\n\n\n\n          <div class=\"populartxt\" *ngIf=\"scholershipQarray && scholershipQarray.length > 0\">\n\n            <!-- scholarship section -->\n            <div>\n              <div name=\"Scholarships\">\n                <h2>{{collegename}} Scholarship {{currentYear}}</h2>\n                <div *ngFor=\"let item of scholershiparray\">\n                  <p [innerHTML]=\"item.scholarship\"></p>\n                </div>\n              </div>\n\n              <div class=\"caskqns\">\n                <ion-accordion-group>\n                  <ion-row>\n                    <ion-col size=\"2\">\n                      <img src=\"../../../assets/icon/QandA.png\">\n                    </ion-col>\n                    <ion-col size=\"10\">\n                      <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                      <p style=\"margin: 0;\">on Scholarship</p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-accordion [value]=\"item.value\" *ngFor=\"let item of scholershipQarray\">\n                    <ion-item slot=\"header\">\n                      <ion-label>Q: {{item.question}} </ion-label>\n                    </ion-item>\n                    <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                  </ion-accordion>\n                </ion-accordion-group>\n              </div>\n            </div>\n          </div>\n\n          <!-- FAQS section -->\n\n          <div name=\"FAQ\" *ngIf=\"faqsarray && faqsarray.length > 0\" class=\"caskqns\">\n            <ion-accordion-group>\n              <ion-row>\n                <ion-col size=\"2\">\n                  <img src=\"../../../assets/icon/QandA.png\">\n                </ion-col>\n                <ion-col size=\"10\">\n                  <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                  <p style=\"margin: 0;\">on FAQS</p>\n                </ion-col>\n              </ion-row>\n\n              <ion-accordion [value]=\"item.value\" *ngFor=\"let item of faqsarray\">\n                <ion-item slot=\"header\">\n                  <ion-label>Q: {{item.question}} </ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n              </ion-accordion>\n\n            </ion-accordion-group>\n          </div>\n\n\n\n          <!-- Notification section -->\n\n          <div *ngIf=\"notificationarry && notificationarry.length > 0\" class=\"setnotification\">\n            <ion-card>\n              <div class=\"settitle\">\n                <h5>{{collegename}} Notification {{currentYear}}</h5>\n              </div>\n              <ul *ngFor=\"let item of notificationarry\">\n                <li>{{item.notification}}</li>\n\n              </ul>\n            </ion-card>\n          </div>\n\n\n          <!-- best- suited colleges for u section -->\n\n          <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n            <div class=\"thirdsection\">\n              <div class=\"HeadTxt\">\n                <h5> Best suited colleges for you</h5>\n                <p>Because you showed interest in {{ selectedCourseName }} </p>\n              </div>\n\n              <div>\n                <ion-slides [options]=\"slideOptssuited\">\n                  <ion-slide class=\"slide_set\" *ngFor=\"let item of suitclgarry\">\n                    <ion-card class=\"size_set\" style=\"margin-left:0px;width:97%!important;\">\n                      <div class=\"imgHead\">\n                        <p class=\"tit_set\" (click)=\"getclgid(item.collegeid)\">{{item.title}}</p>\n                        <img class=\"img_align\" [src]=\"item.logo\"\n                          onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                      </div>\n\n                      <p class=\"set_botm\">\n                        <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n                      </p>\n                      <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n                        <span class=\"spnn\" *ngIf=\"item.rating.totalRateCount && item.rating.totalRateCount > 0\">\n                          <ion-icon name=\"star\" class=\"staicon\"></ion-icon> {{item.rating.totalRateCount}}</span>\n                      </p>\n\n                      <div class=\"footerpart\" style=\"display: flex;\n                      align-items: center;\">\n\n\n\n                        <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                          [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                          <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                            [class.active]=\"isShortlisted(item.id)\">\n                          </ion-icon>\n                        </ion-button>\n\n                        <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                          (click)=\"brochuresuit(item.id)\">\n                          <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                          Brochure\n                        </ion-button>\n                        <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                          (click)=\"clgpredict(item.id,item.CatId,item.subCatName)\">\n                          Predict Admission\n                        </ion-button>\n                      </div>\n                    </ion-card>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n\n          <!-- clg photo & videos section -->\n          <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n            <ion-row>\n\n              <ion-col size=\"12\">\n                <p style=\"margin: 0;\">{{collegename}}</p>\n                <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n              </ion-col>\n            </ion-row>\n            <ion-slides [options]=\"slidepic\">\n              <ion-slide *ngFor=\"let item of clgimgArry\">\n                <ion-card class=\"setpic\">\n                  <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </ion-card>\n              </ion-slide>\n\n            </ion-slides>\n          </div>\n\n\n\n\n\n\n\n          <!-- latest & popular section-->\n          <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n            <div class=\"populartxt\">\n              <h2> Latest & Popular Articles </h2>\n            </div>\n\n            <div class=\"px-10\">\n              <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"Latest\">\n                  <ion-label>Latest</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"Popular\">\n                  <ion-label>Popular</ion-label>\n                </ion-segment-button>\n              </ion-segment>\n              <div *ngIf=\"selectedSegment === 'Latest'\">\n                <div *ngFor=\"let item of latenpopArr\">\n                  <ion-row class=\"setrw\">\n                    <ion-col size=\"8\" (click)=\"Articlesdetails(item.id)\">\n                      <p class=\"p1\">{{item.title}}: </p>\n                      <p class=\"p2\"> {{item.post_rate_date}}</p>\n                      <p class=\"p3\">Views : {{item.views}} </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <img [src]=\"item.image\">\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n\n              <div *ngIf=\"selectedSegment === 'Popular'\">\n                <div *ngFor=\"let item of popularArr\">\n                  <ion-row class=\"setrw\">\n                    <ion-col size=\"8\" (click)=\"Articlesdetails(item.id)\">\n                      <p class=\"p1\">{{item.title}}: </p>\n                      <p class=\"p2\">{{item.post_rate_date}}</p>\n                      <p class=\"p3\">Views : {{item.views}} </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <img [src]=\"item.image\">\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- college details contact section -->\n          <div *ngIf=\"detailsarry && detailsarry.length > 0\">\n            <div class=\"contactsec\" *ngFor=\"let detail of detailsarry\">\n\n              <ion-row class=\"firstrow\">\n                <ion-col size=\"2\">\n                  <img style=\"width:35px\" src=\"../../../assets/icon/email.png\">\n                </ion-col>\n                <ion-col size=\"10\">\n                  <p>{{collegename}}</p>\n                  <h5>Contact Information</h5>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"secrow\">\n                <ion-col size=\"4\">\n                  <p>Address</p>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <p>{{detail.address}}</p>\n                  <!-- <p class=\"setloc\"><ion-icon name=\"location-outline\"></ion-icon><span>View on Map<ion-icon\n                      name=\"arrow-forward-outline\"></ion-icon> </span></p> -->\n                  <p class=\"setloc\">\n                    <ion-icon name=\"location-outline\"></ion-icon>\n                    <a [href]=\"getMapUrl(detail.map_location)\" target=\"_blank\">\n                      <span>View on Map <ion-icon name=\"arrow-forward-outline\"></ion-icon></span>\n                    </a>\n                  </p>\n                </ion-col>\n              </ion-row>\n\n\n              <ion-col size=\"6\">\n                <ion-button fill=\"outline\" shape=\"round\" expand=\"block\" class=\"capitalize setbttn\" [href]=\"detail.web\"\n                  target=\"_blank\">\n                  Go to College Website\n                  <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n\n\n\n            </div>\n          </div>\n\n          <!--  -->\n\n\n\n          <!-- student Forum section -->\n\n          <div class=\"forumsec\">\n            <ion-row class=\"firstrow\">\n              <ion-col size=\"12\">\n                <h4>{{collegename}}</h4>\n                <h5>Student Forum</h5>\n              </ion-col>\n            </ion-row>\n            <form [formGroup]=\"studentForum\">\n              <div class=\"setdiv\">\n                <ion-row class=\"firstrow\">\n                  <ion-col size=\"12\">\n                    <h5>Anything you would want to ask experts?</h5>\n                  </ion-col>\n                </ion-row>\n                <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n                </ion-input>\n                <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n              </div>\n            </form>\n          </div>\n\n          <!--  -->\n\n        </div>\n      </div>\n\n\n\n\n      <!-- ----------------------------------------Tab B ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsB'\">\n        <div class=\"tabbody\">\n          <app-coursesfees (courseClicked)=\"onCourseClicked1($event)\"></app-coursesfees>\n        </div>\n      </div>\n\n\n      <!-- ----------------------------------------Tab c ------------------------------------------- -->\n      <div *ngIf=\"segment === 'tabsC'\">\n        <div class=\"tabbody\">\n          <app-reviews></app-reviews>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab D ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsD'\">\n        <div class=\"tabbody\">\n          <app-admissions></app-admissions>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab E ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsE'\">\n        <div class=\"tabbody\">\n          <app-placements></app-placements>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab F ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsF'\">\n        <div class=\"tabbody\">\n          <app-cutoffs></app-cutoffs>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab G ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsG'\">\n        <div class=\"tabbody\">\n          <app-infrastructure></app-infrastructure>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"segment === 'tabsI'\">\n        <div class=\"tabbody\">\n          <app-compare></app-compare>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab K ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsK'\">\n        <div class=\"tabbody\">\n          <app-scolarship></app-scolarship>\n        </div>\n      </div>\n\n\n      <!-- ----------------------------------------Tab L ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsL'\">\n        <div class=\"tabbody\">\n          <app-news></app-news>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab J ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsJ'\">\n        <div class=\"tabbody\">\n          <app-questionans></app-questionans>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab M ------------------------------------------- -->\n\n      <div *ngIf=\"segment =='tabsM' \">\n        <div class=\"tabbody\">\n          <app-coursinfo></app-coursinfo>\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" tab=\"tab2\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Search</ion-label>\n    </ion-tab-button>\n\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Assistant</ion-label>\n    </ion-tab-button>\n\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ 97963:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/compare/compare.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"px-12\">\n<div class=\"cardsections\" *ngIf=\"clgdetailArry && clgdetailArry.length > 0\">\n  <h5> {{collegename}}</h5>\n  <ion-card class=\"setcrd\">\n    <div class=\"vs\">VS</div>\n     <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of clgdetailArry\">\n      <div class=\"vsimg\"> <img class=\"setimg\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"></div>\n       <p class=\"title\">{{item.title}} </p>\n       <p class=\"setclgN\"> {{item.title}}</p>\n      \n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"vsimg\"> <p><ion-icon name=\"add-outline\"></ion-icon></p> Add College</div>\n       \n      </ion-col>\n     </ion-row>\n     <div class=\"setbtn\" >\n      <ion-button (click)=\"compclg(collegeId)\">Compare</ion-button>\n     </div> \n  </ion-card>\n</div>\n\n\n<div class=\"cardsections mt-24\" *ngIf=\"clglistforcomp && clglistforcomp.length > 0\">\n  <h5> {{collegename}} Popular comparisons</h5>\n  <ion-card class=\"setcrd\" *ngFor=\"let item of clglistforcomp\">\n    <div class=\"vs\">VS</div>\n     <ion-row>\n      <ion-col size=\"6\" >\n      <div class=\"vsimg\"> <img class=\"setimg\" [src]=\"clglogo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"></div>\n       <p class=\"title\">{{collegename}}</p>\n      \n      </ion-col>\n      <ion-col size=\"6\" >\n        <div class=\"vsimg\"><img class=\"setimg\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"> </div>\n        <p class=\"title\">{{item.title}}</p>\n       \n      </ion-col>\n     </ion-row>\n     <div class=\"setbtn\" >\n      <ion-button (click)=\"twoclgcompar(collegeId,collegeId2)\">Compare</ion-button>\n     </div> \n  </ion-card>\n\n</div>\n\n\n\n<!--  -->\n<div class=\"thirdsection\" style=\"padding-top:1.5rem;\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n \n  <div class=\"HeadTxt\">\n    <h5>Explore popular similar colleges</h5>\n    \n  </div>\n\n  <div>\n    <ion-slides [options]=\"slideOptspage\">\n\n      <ion-slide class=\"slide_set\" *ngFor=\"let item of popularclgarry\">\n        <ion-card class=\"size_set w100\">\n          <div class=\"imgHead\">\n            <p class=\"tit_set\">{{item.title}}</p>\n            <img class=\"img_align\" [src]=\"item.logo\"\n              onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </div>\n\n          <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n          </p>\n          <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n            <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n              class=\"spnn\">{{item.rating.totalRateCount}}</span>\n          </p>\n          \n\n          <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" style=\"height: 30px;width: 30px;\">\n              <ion-icon name=\"bookmark-outline\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brocher\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" >\n              Predict Admission\n            </ion-button>\n        </div>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>\n\n\n <!--  -->\n\n <div class=\"px-12\" *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n  <div class=\"HeadTxt mt0\">\n    <h5 > Photos & Videos</h5>\n  </div>\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let item of clgimgArry\">\n      <img class=\"\" [src]=\"item.image\">\n    </ion-col>\n    \n  </ion-row>\n  </div>\n <!--  -->\n\n\n <!--  -->\n <div class=\"thirdsection \" *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n   \n  <div class=\"HeadTxt\">\n    <h5>Best suited colleges for you</h5>\n    <p>Because you showed interest in {{ selectedCourseName }}</p>\n  </div>\n\n  <div>\n    <ion-slides [options]=\"slideOptspage\">\n\n      <ion-slide class=\"slide_set\" *ngFor=\"let item of suitclgarry\">\n        <ion-card class=\"size_set w100\">\n          <div class=\"imgHead\">\n            <p class=\"tit_set\">{{item.title}}</p>\n            <img class=\"img_align\" [src]=\"item.logo\"\n              onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </div>\n\n          <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n          </p>\n          <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n            <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n              class=\"spnn\">{{item.rating.totalRateCount}}</span>\n          </p>\n        \n\n          <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" style=\"height: 30px;width: 30px;\">\n              <ion-icon name=\"bookmark-outline\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brocher\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" >\n              Predict Admission\n            </ion-button>\n        </div>\n\n        </ion-card>\n      </ion-slide> \n    </ion-slides>\n  </div>\n</div>\n\n <!--  -->\n\n\n   <!--  -->\n   <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n    <div class=\"populartxt\">\n      <h2> </h2>\n    </div>\n\n\n          <h5>Latest & Popular Articles </h5>\n          <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"Latest\">\n              <ion-label>Latest</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Popular\">\n              <ion-label>Popular</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"selectedSegment === 'Latest'\">\n            <div *ngFor=\"let latest of latenpopArr\">\n              <ion-row  class=\"setrw\">\n                <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                  <p class=\"p1\">{{latest.title}}: </p>\n                  <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                  <p class=\"p3\">{{latest.views}} </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <img [src]=\"latest.image\">\n                </ion-col>\n              </ion-row>\n              </div>\n          </div>\n            <div *ngIf=\"selectedSegment === 'Popular'\">\n              <div *ngFor=\"let popular of popularArr\">\n                <ion-row class=\"setrw\">\n                  <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                    <p class=\"p1\">{{popular.title}}: </p>\n                    <p class=\"p2\">{{popular.post_rate_date}}</p>\n                    <p class=\"p3\">{{popular.views}} </p>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <img [src]=\"popular.image\">\n                  </ion-col>\n                </ion-row>\n                </div>\n              </div>\n          \n        </div>\n        \n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n ");

/***/ }),

/***/ 14242:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/coursesfees/coursesfees.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tabbody\">\n  \n  <div class=\"px-10\">\n\n    <!--  -->\n\n    <div style=\"padding-bottom: 31px;\">\n      <div class=\"courseCard\" *ngFor=\"let item of feesbclgarray\">\n        <ion-row class=\"headpart\">\n          <ion-col size=\"10\">\n            <h3 (click)=\"onCourseClicked(item.courseid,'tabsM')\" *ngIf=\"item.name\">{{item.name}}</h3>\n\n            <ion-label *ngIf=\"item.duration\">{{item.duration}} years </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"midpart style\">\n        \n          <ion-col size=\"6\" *ngIf=\"item.total_intake >0\">\n            <span>Seats Intake</span>\n            <p>{{ item.total_intake ? item.total_intake : 'NA' }}</p>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"item.examNames\">\n            <span>Exams Accepted</span>\n          <p>{{ item.examNames }}</p>\n\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"midpart\">\n          <ion-col size=\"6\" *ngIf=\"item.total_fees\">\n            <span>Annual Fees (INR)</span>\n            <p>{{item.total_fees}} </p>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"item.median_salary >0\">\n            <span>Median Salary </span>\n            <p>{{item.median_salary}} </p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"footerpart\">\n\n\n          <ion-button fill=\"outline\" shape=\"round\" class=\"capitalize mr-6\" (click)=\"compclg(collegeId)\">\n            <ion-icon name=\"documents\" class=\"mr-6\"></ion-icon> Compare</ion-button>\n\n          <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochure(collegeId)\">\n            <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure</ion-button>\n        </ion-row>\n      </div>\n    </div>\n\n    <!--  -->\n\n    <!-- first section -->\n\n    <div>\n      <div>\n        <h5 class=\"m0\">{{collegename}}</h5>\n      </div>\n\n      <div>\n        <h4>Others programs Offered</h4>\n        <div class=\"courseCard\" *ngFor=\"let item of selectedclgArr\">\n\n          <ion-row class=\"headpart\">\n            <ion-col size=\"10\">\n              <h3 (click)=\"onCourseClicked(item.courseid,'tabsM')\" *ngIf=\"item.name\">{{item.name}}</h3>\n\n              <ion-label *ngIf=\"item.duration\">{{item.duration}} years </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"midpart style\">\n            <ion-col size=\"6\" *ngIf=\"item.total_intake\">\n              <span>Seats Intake</span>\n              <p>{{item.total_intake}} </p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"item.examNames\">\n              <span>Exams Accepted</span>\n              <p>{{item.examNames}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"midpart\">\n            <ion-col size=\"6\" *ngIf=\"item.total_fees\">\n              <span>Annual Fees (INR)</span>\n              <p>{{item.total_fees}} </p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"item.median_salary\">\n              <span>Median Salary </span>\n              <p>{{item.median_salary}} </p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"footerpart\">\n         \n            <ion-button fill=\"outline\" shape=\"round\" class=\"capitalize mr-6\" (click)=\"compclg(collegeId)\">\n              <ion-icon name=\"documents\" class=\"mr-6\"></ion-icon> Compare</ion-button>\n\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochure(collegeId)\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure</ion-button>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!-- second section -->\n\n\n    <div class=\"trending\" *ngIf=\"cityotherclg && cityotherclg.length > 0\">\n      <div>\n        <h4>Other colleges offering Same  Courses in {{cityname}} City</h4>\n        <ion-item detail=\"true\" *ngFor=\"let item of cityotherclg\">\n          <ion-label class=\"ion-text-wrap\">\n            <h3 (click)=\"clgdetls(item.id)\">{{item.title}}</h3>\n          </ion-label>\n        </ion-item>\n      </div>\n    </div>\n\n\n\n\n    <!-- clg photo & videos section -->\n    <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n      <ion-row>\n\n        <ion-col size=\"12\">\n          <p style=\"margin: 0;\">{{collegename}}</p>\n          <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n        </ion-col>\n      </ion-row>\n      <ion-slides [options]=\"slidepic\">\n        <ion-slide *ngFor=\"let item of clgimgArry\">\n          <ion-card class=\"setpic\">\n            <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </ion-card>\n        </ion-slide>\n\n      </ion-slides>\n    </div>\n\n\n\n    <!-- latest&popular news section -->\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <div class=\"populartxt\">\n        <h2> Latest & Popular Articles </h2>\n      </div>\n\n      <div style=\"padding-top:16px;\">\n        <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"Latest\">\n            <ion-label>Latest</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Popular\">\n            <ion-label>Popular</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        <div *ngIf=\"selectedSegment === 'Latest'\">\n          <div *ngFor=\"let latest of latenpopArr\">\n\n            <ion-row class=\"setrw\">\n              <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                <p class=\"p1\">{{latest.title}}: </p>\n                <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                <p class=\"p3\">Views : {{latest.views}} </p>\n              </ion-col>\n              <ion-col size=\"4\">\n                <img [src]=\"latest.image\">\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <div *ngIf=\"selectedSegment === 'Popular'\">\n          <div *ngFor=\"let popular of popularArr\">\n            <ion-row class=\"setrw\">\n              <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                <p class=\"p1\">{{popular.title}}: </p>\n                <p class=\"p2\">{{popular.post_rate_date}}</p>\n                <p class=\"p3\">Views : {{popular.views}} </p>\n              </ion-col>\n              <ion-col size=\"4\">\n                <img [src]=\"popular.image\">\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>");

/***/ }),

/***/ 43745:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/coursinfo/coursinfo.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-12 pt-12\">\n\n    <!-- first section -->\n     <div class=\"courseCard\">\n        <div>\n            <ion-row style=\"padding:10px\">\n                <ion-col size=\"2\">\n                    <ion-icon style=\"font-size: 34px;color: #88d834;\" name=\"calendar-outline\"></ion-icon>\n\n                </ion-col>\n                <ion-col size=\"6\">\n                    <p style=\"margin: 0;\">{{coursename}}</p>\n\n                </ion-col>\n                <ion-col size=\"4\" (click)=\"openModal('open-modal')\">\n                    <ion-button id=\"open-modal\" style=\"font-size: 12px;\">Apply Now</ion-button>\n                </ion-col>\n            </ion-row>\n           \n        </div>\n\n        <div *ngFor=\"let item of courseinfoArr\">\n          \n            <div *ngIf=\"item.course_description\" style=\"margin-bottom: 16px; padding:10px\">\n                <h5 style=\"margin: 0; padding-left: 10px;\">Overview</h5>\n                <h1 [innerHTML]=\"item.course_description\"></h1>\n            </div>\n\n            <div class=\"wikiContents mt-3\" *ngIf=\"courseinfoArr && courseinfoArr.length > 0\">\n                <table class=\"table\">\n                   \n\n                    <tbody>\n                        <tr>\n                            <td>\n                                Duration\n                            </td>\n                            <td>\n                                {{ item.duration ? item.duration + ' years' : 'NA' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Course Level\n                            </td>\n                            <td>\n                                {{ item.level ? item.level : 'NA' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Annual Fees (INR)\n                            </td>\n                            <td>\n                                {{ item.total_fees ? item.total_fees : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Eligibility\n                            </td>\n                            <td>\n                                <p>\n                                    Qualification:- {{ item?.eligibility || 'NA' }}\n                                </p>\n                                <!-- <p *ngIf=\"item.eligibility?.cut_off?.length\">\n                                    Cut Off:- {{ item.eligibility.cut_off.join(', ') }}\n                                </p>\n                                <p *ngIf=\"item.eligibility?.other_eligibility\">\n                                    Other Eligibility:- {{ item.eligibility.other_eligibility }}\n                                </p> -->\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Scope\n                            </td>\n                            <td>\n                                {{ item.scope ? item.scope : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Official Website\n                            </td>\n                            <td>\n                                <a *ngIf=\"item.website; else noWebsite\" [href]=\"item.website\">Go to Website</a>\n                                <ng-template #noWebsite>NA</ng-template>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"item.total_intake>0\">\n                            <td>\n                                Total Intake\n                            </td>\n                            <td>\n                                {{ item.total_intake ? item.total_intake : 'NA' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                College Type\n                            </td>\n                            <td>\n                                {{ item.college_type ? item.college_type : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Job Profile\n                            </td>\n                            <td>\n                                {{ item.job_profile ? item.job_profile : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Certification\n                            </td>\n                            <td>\n                                {{ item.certification ? item.certification : 'NA' }}\n                            </td>\n                        </tr>\n                    </tbody>\n                    \n                </table>\n            </div>\n        </div>\n    </div> \n    \n    \n    \n \n\n  \n\n\n    <!-- second section -->\n    <div class=\"courseCard\" *ngIf=\"crsfeesstuctreArry && crsfeesstuctreArry.length > 0\">\n        <div>\n            <ion-row style=\"padding:10px\">\n                <ion-col size=\"2\">\n                    <svg style=\"font-size: 34px;color: #88d834;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"38\"\n                        height=\"38\" fill=\"currentColor\" class=\"secondary-color bi bi-currency-rupee\"\n                        viewBox=\"0 0 16 16\">\n                        <path\n                            d=\"M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z\" />\n                    </svg>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <p style=\"margin: 0;\">{{coursename}}</p>\n\n                </ion-col>\n\n            </ion-row>\n            <h5 style=\"margin: 0; padding-left: 10px;\">Fees</h5>\n        </div>\n\n\n\n        <div>\n            <table style=\"width:100%; margin-bottom : 18px\">\n                <tbody>\n                    <tr>\n                        <th>\n                            <p>Fee components</p>\n                        </th>\n                        <th width=\"200\">\n                            <p>Amount (4 years)</p>\n                        </th>\n                    </tr>\n                    <tr *ngFor=\"let item of crsfeesstuctreArry\">\n                        <td>\n                            <span class=\"font-medium\">{{item.feecomponent}}</span> <br>\n\n                        </td>\n                        <td>\n                            {{item.amount}}\n                        </td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <!-- second section closed-->\n\n\n   \n\n    <div class=\"courseCard\" *ngIf=\"courseexamArry && courseexamArry.length > 0\">\n        <div>\n          <ion-row style=\"padding:10px\">\n            <ion-col size=\"2\">\n              <ion-icon style=\"font-size: 34px; color: #88d834;\" name=\"book\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\">\n              <p style=\"margin: 0;\">{{coursename}}</p>\n            </ion-col>\n          </ion-row>\n          <h5 style=\"margin: 0; padding-left: 10px;\">Accepting Entrance Exams</h5>\n        </div>\n      \n        <div style=\"padding: 0 10px 4px;\" *ngFor=\"let item of courseexamArry\">\n          <h1 (click)=\"exmdetail(item.id)\">\n            {{item.exam_name}}\n          </h1>\n          <p [innerHTML]=\"item.description\"></p><br>\n          <p [innerHTML]=\"item.criteria\"></p>\n        </div>\n      </div>\n    <!-- third section closed-->\n\n    <!-- 4 section -->\n    <div class=\"caskqns\" *ngIf=\"commanlyaskedqaeArr && commanlyaskedqaeArr.length > 0\">\n        <ion-accordion-group>\n            <ion-row>\n                <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                </ion-col>\n                <ion-col size=\"10\">\n                    <h4 style=\"margin: 0;\">Frequently Asked Questions</h4>\n                    <!-- <p style=\"margin: 0;\">on Admission</p> -->\n                </ion-col>\n            </ion-row>\n\n            <ion-accordion [value]=\"item.value\" *ngFor=\"let item of commanlyaskedqaeArr\">\n                <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\">\n\n                </div>\n            </ion-accordion>\n\n        </ion-accordion-group>\n    </div>\n    <!-- 4 section closed-->\n\n\n    <!-- 5 section Admission process -->\n\n   \n\n    <div class=\"courseCard\" *ngIf=\"admisionprocesArry && admisionprocesArry.length > 0\">\n        <div>\n          <ion-row style=\"padding:10px\">\n            <ion-col size=\"2\">\n              <ion-icon style=\"font-size: 34px;color: #88d834;\" name=\"school\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\">\n              <p style=\"margin: 0;\">{{coursename}}</p>\n              <h5 style=\"margin: 0; padding-left: 10px;\">Admission Process</h5>\n            </ion-col>\n          </ion-row>\n        </div>\n      \n        <div style=\"padding: 0 10px 4px;\" *ngFor=\"let item of admisionprocesArry\">\n          <p style=\"color: #2196f3\">Eligibility</p>\n          <p>{{item.eligibility}}</p>\n          <div class=\"flex justify-between\">\n            <p style=\"color: #2196f3\">Important Dates</p>\n          </div>\n          <div class=\"tabecontent mt-3\" #ImportantDates [innerHTML]=\"item.Examnotification_or_ImportantDates\"></div>\n        </div>\n      </div>\n      \n    <!-- 5 section Admission process closed-->\n\n\n\n\n   \n\n    <!-- 7 section Popular colleges -->\n    <div>\n        <div class=\"thirdsection\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n\n            <div class=\"HeadTxt\">\n                <h5> Explore popular similar colleges</h5>\n               \n            </div>\n\n            <div>\n                <ion-slides [options]=\"slideOptspage\">\n\n                    <ion-slide class=\"slide_set\" *ngFor=\"let item of popularclgarry\">\n                        <ion-card class=\"size_set\">\n                            <div class=\"imgHead\">\n                                \n                                <p class=\"tit_set\">\n                                    {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                                </p>\n                                <img class=\"img_align\" [src]=\"item.logo\"\n                                    onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                            </div>\n\n                            <p class=\"set_botm\">\n                                <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n                            </p>\n                            <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n                                <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n                                    class=\"spnn\">{{item.rating.totalRateCount}}</span>\n                            </p>\n\n                            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n                                <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                                    style=\"height: 30px;width: 30px;\"\n                                    [ngClass]=\"{'shortlisted': shortlistedColleges.has(collegeId)}\"\n                                    (click)=\"addclgshortlist(collegeId)\">\n                                    <ion-icon [name]=\"isBookmarked ? 'bookmark' : 'bookmark-outline'\"\n                                        [class.active]=\"isBookmarked\"></ion-icon></ion-button>\n\n                                <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                                    style=\"margin-left:2px; margin-right:2px\" (click)=\"brochure(collegeId)\">\n                                    <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                                </ion-button>\n                                <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                                    (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                                    Predict Admission\n                                </ion-button>\n                            </div>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n        </div>\n\n\n    </div>\n    <!-- 7 section Popular colleges closed-->\n\n    <!-- 8 section  colleges Photo & videos -->\n    <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n        <ion-row>\n\n            <ion-col size=\"12\">\n                <p style=\"margin: 0;\">{{collegename}}</p>\n                <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n            </ion-col>\n        </ion-row>\n        <ion-slides [options]=\"slidepic\">\n            <ion-slide *ngFor=\"let item of clgimgArry\">\n                <ion-card class=\"setpic\">\n                    <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </ion-card>\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n\n    <!-- 8 section  colleges Photo & videos closed-->\n\n    <!-- 9 Article section -->\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n        <div>\n            <ion-row class=\"border-y\">\n\n                <ion-col size=\"12\" class=\"selfcenter\">\n                    <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class=\"mx10\">\n            <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"Latest\">\n                    <ion-label>Latest</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"Popular\">\n                    <ion-label>Popular</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n            <div *ngIf=\"selectedSegment === 'Latest'\" class=\"mt10\">\n                <div *ngFor=\"let latest of latenpopArr\">\n                    <ion-row class=\"setrw mb5 mt6 pb0\">\n                        <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                            <p class=\"atitle\">{{latest.title}}: </p>\n                            <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                            <p class=\"p3\">Views : {{latest.views}} </p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <img [src]=\"latest.image\">\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n            <div *ngIf=\"selectedSegment === 'Popular'\">\n                <div *ngFor=\"let popular of popularArr\">\n                    <ion-row class=\"setrw mb5 mt6 pb0\">\n                        <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                            <p class=\"atitle\">{{popular.title}}: </p>\n                            <p class=\"p2\">{{popular.post_rate_date}}</p>\n                            <p class=\"p3\">Views : {{popular.views}} </p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <img [src]=\"popular.image\">\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- 9 Article section closed-->\n\n\n<!--10 otherclgbycity -->\n<div class=\"trending\" *ngIf=\"sameclgArry && sameclgArry.length > 0\">\n    <div>\n      <h4>Other colleges offering {{coursename}} in {{cityname}}</h4>\n      <ion-item detail=\"true\" *ngFor=\"let item of sameclgArry\">\n        <ion-label class=\"ion-text-wrap\">\n          <h3 (click)=\"clgdetls(item.id)\">{{item.title}}</h3>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--10 otherclgbycity -->\n\n   \n\n    <!-- ion model 1 -->\n    <ion-modal trigger=\"open-modal\">\n        <ng-template>\n            <ion-content>\n               \n                <div class=\"matfield\">\n                    <ion-row style=\"border-bottom: 1px solid #cacaca;margin-bottom: 18px;\">\n                        <ion-col size=\"2\"></ion-col>\n                      <ion-col size=\"8\" class=\"headtxt\">\n                        <ion-icon style=\"color:#2196f3\" name=\"person\"></ion-icon>\n                        <h4 class=\"sethedding\">APPLY NOW</h4>\n                      </ion-col>\n                      <ion-col size=\"2\">\n                        <ion-icon class=\"iconclose\" name=\"close-outline\" (click)=\" close()\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                   \n                    <form [formGroup]=\"aplicationForm\">\n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Student Name</mat-label>\n                        <input matInput placeholder=\"Enter your name\" formControlName=\"student_name\" (input)=\"checkValidInputDat($event, 'student_name')\" type=\"text\">\n                        <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n                       \n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Mobile Number</mat-label>\n                        <input matInput placeholder=\"Enter your mobile number\"  formControlName=\"mobile_no\" (input)=\"checkValidInputDat($event, 'mobile_no')\" type=\"tel\">\n                        <ion-icon name=\"call-outline\" class=\"icon\" matSuffix></ion-icon>\n                        \n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Enter your name\"  formControlName=\"email\" >\n                        <ion-icon name=\"mail-outline\" class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Course Category</mat-label>\n                        <mat-select formControlName=\"category\" (ngModelChange)=\"getCourseByCategoryClg()\">\n                          <mat-option *ngFor=\"let course of CourseCategoryArr\" [value]=\"course.category_id\"> {{course.name}}</mat-option>\n                          \n                        </mat-select>\n                      </mat-form-field>\n                      \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Course</mat-label>\n                        <mat-select  formControlName=\"course\">\n                            <mat-option  *ngFor=\"let course of CoursesByCatArr\" [value]=\"course.name\">{{course.name}}</mat-option>\n                         \n                        </mat-select>\n                      </mat-form-field>\n                    \n                    \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>College</mat-label>\n                        <mat-select  formControlName=\"college\" >\n                            <mat-option  *ngFor=\"let item of clgdetailArry\" [value]=\"item.id\">{{item.title}}</mat-option>\n                         \n                        </mat-select>\n                        <ion-icon  class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                  \n                    \n                     \n\n\n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Entrance Exam</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Pick an exam\"\n                               aria-label=\"Entrance Exam\"\n                               matInput\n                               formControlName=\"entrence_exam\"\n                               [formControl]=\"entranceExamControl\"\n                               [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let exam of filteredExams | async\" [value]=\"exam.title\">\n                            {{ exam.title }}\n                          </mat-option>\n                        </mat-autocomplete>\n                      </mat-form-field>\n                      \n                      \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Expected/Secured Rank</mat-label>\n                        <input matInput placeholder=\"Enter your rank\"  formControlName=\"rank\">\n                        <ion-icon  class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Expected/Secured Score</mat-label>\n                        <input matInput placeholder=\"Enter your score\" formControlName=\"score\" >\n                        <ion-icon  class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                    </form>  \n                    <button mat-raised-button color=\"primary\" class=\"px-12 justify-center mt-4 mb-10\" (click)=\"savCourseApplication()\">Submit</button>\n                  </div>\n\n            </ion-content>\n        </ng-template>\n    </ion-modal>\n    <!-- ion model close -->\n\n</div>\n\n\n <!-- 11 student forum -->\n <div class=\"forumsec\">\n    <ion-row class=\"firstrow\">\n        <ion-col size=\"12\">\n            <h4>{{collegename}}</h4>\n            <h5>Student Forum</h5>\n        </ion-col>\n    </ion-row>\n    <form [formGroup]=\"studentForum\">\n        <div class=\"setdiv\">\n            <ion-row class=\"firstrow\">\n                <ion-col size=\"12\">\n                    <h5>Anything you would want to ask experts?</h5>\n                </ion-col>\n            </ion-row>\n            <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n            </ion-input>\n            <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n        </div>\n    </form>\n</div>\n<!-- 11 student forum -->\n");

/***/ }),

/***/ 50927:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/cutoffs/cutoffs.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<div class=\"tabbody\">\n \n\n    <div class=\"headcard\" *ngIf=\"collegename || description\">\n      <div class=\"clgdescription\">\n        <h2 *ngIf=\"collegename\">{{collegename}}</h2>\n        <p *ngIf=\"description\" [innerHTML]=\"description\"></p>\n      </div>\n    </div>\n    \n\n\n  <!-- cutoffs table data -->\n\n <div  *ngIf=\"round1 && round1.length > 0\">\n  <ion-card class=\"accard\">\n    <h6>{{collegename}} (AIT) KCET Cutoff</h6>\n    <ion-accordion-group class=\"accordiansnw\">\n      \n      <ion-accordion *ngIf=\"round1 && round1.length > 0\" value=\"first\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-1</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of round1\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{ data.label.charAt(0).toUpperCase() }}{{ data.label.slice(1) }}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{ data.value }}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n      <ion-accordion *ngIf=\"round2 && round2.length > 0\" value=\"second\" class=\"margin-top\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-2</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of round2\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{ data.label.charAt(0).toUpperCase() }}{{ data.label.slice(1) }}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{ data.value }}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n      <ion-accordion *ngIf=\"round3 && round3.length > 0\" value=\"third\" class=\"margin-top\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-3</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of round3\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{ data.label.charAt(0).toUpperCase() }}{{ data.label.slice(1) }}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{ data.value }}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n  </ion-card>\n</div> \n\n\n\n\n<div style=\"padding-bottom: 25px;\" *ngIf=\"comedround1 && comedround2.length > 0\">\n  <ion-card class=\"accard\">\n    <h6>{{collegename}} (AIT) COMEDK Cutoff </h6>\n    <ion-accordion-group class=\"accordiansnw\">\n\n      <ion-accordion value=\"second1\" class=\"margin-top\" *ngIf=\"comedround1 && comedround1.length > 0\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-1</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of comedround1\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{data.label.charAt(0).toUpperCase()}}{{data.label.slice(1)}}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{data.value}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n      <ion-accordion value=\"second2\" class=\"margin-top\" *ngIf=\"comedround2 && comedround2.length > 0\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-2</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of comedround2\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{data.label.charAt(0).toUpperCase()}}{{data.label.slice(1)}}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{data.value}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n    </ion-accordion-group>\n  </ion-card>\n</div>\n\n\n\n  <div class=\"px-12\" style=\"padding-top: 20px;\" *ngIf=\"tableOfContent && tableOfContent.length > 0\" >\n\n    <ion-accordion-group class=\"tblcontent accordians\" style=\"margin-top:-1px ;\">\n      <ion-accordion value=\"first\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label>\n            <h2>{{collegename}} {{currentYear}}</h2>\n            <h2>Table of content</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"ion-padding paragraph tabecontent1\" slot=\"content\">\n          <ul *ngFor=\"let item of tableOfContent\">\n            <p>{{collegename}} {{item.title}} </p>\n          </ul>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n  </div>\n\n\n\n\n<!-- popular clg sec -->\n\n<div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n  <div class=\"HeadTxt\">\n    <h5>Explore popular similar colleges</h5>\n   \n  </div>\n\n  <div>\n    <ion-slides [options]=\"slideOptsnew\">\n\n      <ion-slide *ngFor=\"let item of popularclgarry\">\n        <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important;\">\n          <div class=\"imgHeadpop\">\n\n\n            <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n              {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n            </p>\n            <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </div>\n\n          <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n          </p>\n          <p style=\"display: flex; height: 17px;\"> <span class=\"spnpop\"></span>\n            <span class=\"spnn\" *ngIf=\"item.ratings> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n              {{item.ratings}}</span>\n          </p>\n\n          <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n\n\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n              [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\" (click)=\"toggleShortlist(item.collegeid)\">\n              <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                [class.active]=\"isShortlisted(item.collegeid)\">\n              </ion-icon>\n            </ion-button>\n\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n              (click)=\"brochure(item.collegeid)\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n              Brochure\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n              (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n              Predict Admission\n            </ion-button>\n          </div>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</div>\n\n\n\n\n\n  <!--  -->\n\n\n\n  <div class=\"ovrallrating mx10\" style= \"padding-top: 20px;\">\n\n    <div *ngIf=\"totalRateCount && totalRateCount.length> 0\">\n    <h5 class=\"headtxt\" style=\"margin-top:-10px ;\">\n      Average rating Of this institude\n    </h5>\n    <div>\n      <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n    </div>\n\n    <ion-row class=\"py-12\">\n      <ion-col size=\"2\">\n        <h1>{{totalRateCount}}</h1>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n\n        <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 3-4 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{three2fourRate}}%</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 4-5 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{four2fiveRate}}%</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 2-3 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{two2threeRate}}%</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 1-2 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{one2twoRate}}%</span>\n      </ion-col>\n    </ion-row>\n    </div>\n\n    <div class=\"populartxt\" *ngIf=\"reviewsssArr && reviewsssArr.length > 0\">\n      <h2>What Students say about {{collegename}} </h2>\n\n\n      <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n          <ion-label>Infrastructure </ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n          <ion-label>Faculty </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs4\">\n          <ion-label>Hostel </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs5\">\n          <ion-label>Campus </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs6\">\n          <ion-label>Money </ion-label>\n        </ion-segment-button>\n\n      </ion-segment>\n      <div *ngIf=\"segmentStud === 'tabs1'\">\n        <div class=\"tabbody\">\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.placement_desc}}</li>\n          </ul>\n\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs2'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.infrastructure_desc}}</li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs3'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.faculty_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs4'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.hostel_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs5'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.campus_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs6'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.money_desc}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- anonymous -->\n    <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n      <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\" class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n            <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n              {{ item.user_name.charAt(0) }}\n            </h1>\n            <ng-template #showDefaultIcon class=\"firstchar\">\n              <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n            </ng-template>  \n\n          \n          </ion-col>\n          <ion-col size=\"7\">\n            <h2>{{item.user_name}}</h2>\n            <p class=\"sbtxt\">{{item.coursename}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"rates\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ratingBtns\">\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n          </ion-button>\n        </div>\n        <p><span>Placements: </span> {{item.placement_desc}} </p>\n        <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n        <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n        <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n        <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n        <ion-row class=\"thumbicon\">\n          <ion-col class=\"setlikecol\">\n            <div>Was this review helpful </div>\n            \n\n            <div style=\"display: flex;\">\n              <!-- Thumbs Up Icon -->\n              <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                  [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                </ion-icon>\n              </span>\n\n              <!-- Separator -->\n              <span class=\"span\">|</span>\n\n              <!-- Thumbs Down Icon -->\n              <span class=\"span\"\n                (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                  [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                </ion-icon>\n              </span>\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n\n    <!-- anonymous -->\n\n\n\n<!-- suited  clg section -->\n\n<div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n  <div class=\"thirdsection\">\n    <div class=\"HeadTxt\">\n      <h5> Best suited colleges for you</h5>\n      <p>Because you showed interest in {{ selectedCourseName }}\n      </p>\n    </div>\n    <div>\n      <ion-slides [options]=\"slideOptssuited\">\n\n        <ion-slide *ngFor=\"let item of suitclgarry\">\n          <ion-card  class=\"size_setsuited\">\n            <div class=\"imgHead\">\n\n              <p class=\"tit_set\">\n                {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n              </p>\n              <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n            </p>\n            <p style=\"display: flex; height: 17px; \"> <span class=\"spnpop\" *ngIf=\"item.courseCount> 0\">Courses - {{item.courseCount}} |</span>\n              <span class=\"spnn\" *ngIf=\"item.rating.totalRateCount> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                {{item.rating.totalRateCount}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(item.id)\">\n                </ion-icon>\n              </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" \n                (click)=\"brochuresuit(item.id)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class= \"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</div>\n<!-- suiuted clg section closed-->\n\n\n\n\n\n\n    \n<div *ngIf=\"latenpopArr && popularArr.length > 0\">\n  <div class=\"populartxt\">\n    <h2> Latest & Popular Articles </h2>\n  </div>\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\">\n\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 72442:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/infrastructure/infrastructure.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div>\n\n  <div class=\"px-12\">\n    \n\n    <div class=\"HeadTxt\">\n      <h5> Infrastructure/Facilities</h5>\n    </div>\n    <div class=\"infrafacility\" >\n      <ion-list>\n        <ion-item lines=\"none\" *ngFor=\"let facility of facilitiesarr\">\n          <!-- Use Material Icons for Angular Material icons -->\n          <mat-icon *ngIf=\"!facility.icon.startsWith('fa')\">{{ facility.icon }}</mat-icon>\n          \n          <!-- Use Font Awesome for fa-* icons -->\n          <i *ngIf=\"facility.icon.startsWith('fa')\" class=\"fa {{ facility.icon }}\"></i>\n          \n          <span>{{ facility.name }}</span>\n        </ion-item>\n      </ion-list>\n    \n    </div>\n\n    <div>\n\n\n      <div *ngIf=\"infratotalrate\">\n      <h5 class=\"headtxt\">\n        Average rating Of this institude\n      </h5>\n    \n      <div class=\"ovrallrating\">\n      <div>\n        <h2 class=\"headtxt\">Overall Infrastructure Rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n      </div>\n    \n      <ion-row >\n        <ion-col size=\"2\">\n          <h1>{{infratotalrate}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n          <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{three2fourRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{four2fiveRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{two2threeRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{one2twoRate}}%</span>\n        </ion-col>\n      </ion-row>\n    </div>\n    </div>\n\n\n      <div class=\"populartxt\" *ngIf=\"reviewsssArr && reviewsssArr.length > 0\">\n        <h2>What Students say about {{collegename}} </h2>\n \n  \n      <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n  \n        <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n          <ion-label>Infrastructure </ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n          <ion-label>Faculty </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs4\">\n          <ion-label>Hostel </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs5\">\n          <ion-label>Campus </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs6\">\n          <ion-label>Money </ion-label>\n        </ion-segment-button>\n\n      </ion-segment>\n      <div *ngIf=\"segmentStud === 'tabs1'\">\n        <div class=\"tabbody\">\n        <ul>\n          <li *ngFor=\"let item of reviewsssArr\">{{item.placement_desc}}</li>\n        </ul>\n\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs2'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.infrastructure_desc}}</li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs3'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.faculty_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs4'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.hostel_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs5'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.campus_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs6'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.money_desc}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n<!--  -->\n\n<div *ngIf=\"reviewsArry && reviewsArry.length > 0\">\n              \n  <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArry\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\"  class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n     \n        <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n          {{ item.user_name.charAt(0) }}\n        </h1>\n        <ng-template #showDefaultIcon class=\"firstchar\">\n          <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n        </ng-template> \n      </ion-col>\n      <ion-col size=\"7\">\n        <h2>{{item.user_name}}</h2>\n        <p class=\"sbtxt\">{{item.coursename}}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"rates\">\n          <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ratingBtns\">\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n      </ion-button>\n    </div>\n    <p><span>Placements: </span> {{item.placement_desc}} </p>\n    <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n    <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n    <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n    <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n    <ion-row class=\"thumbicon\">\n      <ion-col class=\"setlikecol\">\n        <div>Was this review helpful </div>\n\n        <div style=\"display: flex;\">\n          <!-- Thumbs Up Icon -->\n          <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n            <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n              [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n            </ion-icon>\n          </span>\n\n          <!-- Separator -->\n          <span class=\"span\">|</span>\n\n          <!-- Thumbs Down Icon -->\n          <span class=\"span\"\n            (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n            <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n              [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n            </ion-icon>\n          </span>\n        </div>\n      \n      \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n<!--  -->\n\n\n\n\n      </div>\n\n     </div>\n  </div>\n\n\n\n\n\n\n\n  <!--  -->\n\n\n\n  \n  <div class=\"px-12\" >\n\n    <div  *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <ion-row >\n        <ion-col size=\"12\">\n          <span style=\" font-weight: 500;font-size: 16px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n    \n        <div class=\"mt10\">\n          <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"Latest\">\n              <ion-label>Latest</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Popular\">\n              <ion-label>Popular</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"selectedSegment === 'Latest'\">\n            <div *ngFor=\"let latest of latenpopArr\">\n              <ion-row  class=\"setrw\">\n                <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                  <p class=\"p1\">{{latest.title}}: </p>\n                  <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                  <p class=\"p3\">Views : {{latest.views}} </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <img [src]=\"latest.image\">\n                </ion-col>\n              </ion-row>\n              </div>\n              \n            </div>\n              <div *ngIf=\"selectedSegment === 'Popular'\">\n                <div *ngFor=\"let popular of popularArr\">\n                  <ion-row class=\"setrw\">\n                    <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                      <p class=\"p1\">{{popular.title}}: </p>\n                      <p class=\"p2\">{{popular.post_rate_date}}</p>\n                      <p class=\"p3\">Views : {{popular.views}} </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <img [src]=\"popular.image\">\n                    </ion-col>\n                  </ion-row>\n                  </div>\n</div>\n\n</div>\n</div>\n\n<!--  -->\n\n</div>\n\n\n");

/***/ }),

/***/ 23726:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/news/news.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n\n\n\n  <div class=\"tabbody px-12\">\n   \n\n    <div class=\"ovrallrating\" *ngIf=\"totalRateCount.length > 0\">\n\n      <h5 class=\"headtxt\">\n        Average rating of this institude\n      </h5>\n\n      <div>\n        <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out og 5)</span></h2>\n      </div>\n\n      <ion-row class=\"py-12\">\n        <ion-col size=\"2\">\n          <h1>{{totalRateCount}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n          <p class=\"p\"></p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{three2fourRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"20\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{four2fiveRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"10\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{two2threeRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxtx\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"0\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{one2twoRate}}%</span>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"py-12\">\n        <h2 class=\"headtxt\">Component rating <span class=\"sbtxt\">(Out og 5)</span></h2>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Placements</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalPlacementRateCount}}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Infrastructure</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalInfrastructureRateCount}}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Faculty & Course Curriculum</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalFacultyRateCount }}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Crowed & Campus Life</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalCampusRateCount }}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Value For Money</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalMoneyRateCount}}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n\n\n      <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n          <ion-label>Infrastructure </ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n          <ion-label>Faculty </ion-label>\n        </ion-segment-button>\n\n\n      </ion-segment>\n      <div *ngIf=\"segmentStud === 'tabs1'\">\n        <div class=\"tabbody\">\n          <p>{{placement}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs2'\">\n        <div class=\"tabbody\">\n          <p>{{infra}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs3'\">\n        <div class=\"tabbody\">\n          <p>{{faculty}}</p>\n        </div>\n        <div>\n          <ion-row class=\"vertxt\">\n            <ion-col size=\"6\">\n              <span> Was this helpful?</span>\n              <ion-icon name=\"thumbs-down\"></ion-icon>\n              <ion-icon name=\"thumbs-up\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"3\" class=\"textright\">\n              <span> <ion-icon name=\"share-social-outline\"></ion-icon> Share</span>\n            </ion-col>\n            <ion-col size=\"3\" class=\"textright\">\n              <span> <ion-icon name=\"alert-circle-outline\"></ion-icon> Report</span>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n    </div>\n\n\n\n    <!-- review section -->\n\n    <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n      <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\"  class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n\n            <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n              {{ item.user_name.charAt(0) }}\n            </h1>\n            <ng-template #showDefaultIcon class=\"firstchar\">\n              <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n            </ng-template>\n\n          </ion-col>\n          <ion-col size=\"7\">\n            <h2>{{item.user_name}}</h2>\n            <p class=\"sbtxt\">{{item.coursename}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"rates\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ratingBtns\">\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n          </ion-button>\n        </div>\n        <p><span>Placements: </span> {{item.placement_desc}} </p>\n        <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n        <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n        <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n        <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n        <ion-row class=\"thumbicon\">\n          <ion-col class=\"setlikecol\">\n            <div>Was this review helpful </div>\n\n            <div style=\"display: flex;\">\n              <!-- Thumbs Up Icon -->\n              <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\" [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                </ion-icon>\n              </span>\n\n              <!-- Separator -->\n              <span class=\"span\">|</span>\n\n              <!-- Thumbs Down Icon -->\n              <span class=\"span\" (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                  [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                </ion-icon>\n              </span>\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n\n    <!--review section closed  -->\n\n\n\n  </div>\n\n</div>\n\n\n\n<div>\n\n  <div class=\"thirdsection\" style=\"padding-top:1.5rem\" *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5> Best suited colleges for you</h5>\n      <p>Because you showed interest in {{ selectedCourseName }}</p>\n    </div>\n    <div>\n      <ion-slides [options]=\"slideOptspage\">\n        <ion-slide class=\"slide_set\" *ngFor=\"let item of suitclgarry\">\n          <ion-card class=\"size_set w100\">\n            <div class=\"imgHead\">\n              <p class=\"tit_set\">{{item.title}}</p>\n              <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n            </p>\n            <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n              <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span class=\"spnn\">{{item.rating.totalRateCount}}</span>\n            </p>\n\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" style=\"height: 30px;width: 30px;\">\n                <ion-icon name=\"bookmark-outline\"></ion-icon>\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brocher\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\">\n                Predict Admission\n              </ion-button>\n            </div>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n\n  </div>\n\n  <!-- photo&videos -->\n  <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n    <ion-row>\n\n      <ion-col size=\"12\">\n        <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n      </ion-col>\n    </ion-row>\n    <ion-slides [options]=\"slidepic\">\n      <ion-slide *ngFor=\"let item of clgimgArry\">\n        <ion-card class=\"setpic\">\n          <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n        </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n\n\n  <!-- Articles&events -->\n  <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n    <div>\n      <ion-row class=\"border-y mt-10\">\n\n        <ion-col size=\"12\" class=\"selfcenter\">\n          <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"px-12\">\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\">\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 27859:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/placements/placements.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n\n  <div class=\"px-12\">\n\n    <!-- section-1 -->\n   \n      <div class=\"headcard\">\n      \n\n      <div *ngIf=\"whatnew\" >\n        <p [innerHTML]=\"whatnew\"></p>\n      </div>\n    </div>\n\n\n    <!--closed table of content section -->\n\n\n    <!-- placement report section -->\n    <div>\n\n      <div *ngIf=\"placementdataarry && placementdataarry.length > 0\">\n        <h5>{{collegename}} Placement Report </h5>\n        <p>The Key highlights of {{collegename}} placements are presented below:</p>\n\n        <div style=\"overflow-x: scroll;\">\n          <table style=\"width:100%\">\n            <tr>\n              <th class=\"dblue\">Courses Category</th>\n              <th class=\"dblue\">year</th>\n              <th class=\"dblue\">Median Salary</th>\n              <th class=\"dblue\">No. of Companices Visied</th>\n              <th class=\"dblue\">No. of Student Selected</th>\n              <th class=\"dblue\">No. of Student Placed</th>\n            </tr>\n            <tr *ngFor=\"let item of placementdataarry\">\n              <td>{{item.course_category_name}}</td>\n              <td>{{item.year}}</td>\n              <td>{{item.median_salary}}</td>\n              <td>{{item.no_of_companies_visited}}</td>\n              <td>{{item.no_of_student_selected}}</td>\n              <td>{{item.no_of_students_placed}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <!--closed placement report section -->\n      <!-- placement Q&A -->\n\n\n\n\n      <!-- Q & Ans section  -->\n      <div class=\"caskqns mt1rem\" *ngIf=\"placementqaarry && placementqaarry.length > 0\">\n        <ion-accordion-group>\n          <ion-row>\n            <ion-col size=\"2\">\n              <img src=\"../../../assets/icon/QandA.png\">\n            </ion-col>\n            <ion-col size=\"10\">\n              <h4 style=\"margin: 0;\">Commonly asked questions</h4>\n              <p style=\"margin: 0;\">on Placement FAQS</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-accordion [value]=\"item.value\" *ngFor=\"let item of placementqaarry\">\n            <ion-item slot=\"header\">\n              <ion-label>Q: {{item.question}} </ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n          </ion-accordion>\n\n        </ion-accordion-group>\n      </div>\n\n    </div>\n    <!-- Q & Ans section  closed-->\n    \n\n  </div>\n\n\n  <!-- popular clg section -->\n\n\n  <div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5>Explore popular similar colleges</h5>\n     \n    </div>\n\n    <div>\n      <ion-slides [options]=\"slideOptsnew\">\n\n        <ion-slide *ngFor=\"let item of popularclgarry\">\n          <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important;\">\n            <div class=\"imgHeadpop\">\n\n\n              <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n                {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n              </p>\n              <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n            </p>\n            <p style=\"display: flex; height: 17px;\"> <span class=\"spnpop\"></span>\n              <span class=\"spnn\" *ngIf=\"item.ratings> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                {{item.ratings}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n\n\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\" (click)=\"toggleShortlist(item.collegeid)\">\n                <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(item.collegeid)\">\n                </ion-icon>\n              </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                (click)=\"brochure(item.collegeid)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n\n  \n  <!-- Best popular clg section closed-->\n\n\n  <!-- review section  -->\n  <div class=\"px-12\" *ngIf=\"totalPlacementRate\">\n    <div class=\"ovrallrating\">\n      <h5 class=\"headtxt\" style=\"margin-top:-20px;\">\n        Placement Reviews\n      </h5>\n      <div>\n        <h2 class=\"headtxt\">Overall Placement Rating <span class=\"sbtxt\">(Out Of 5)</span></h2>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"2\">\n          <h1>{{totalPlacementRate}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n\n          <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n        </ion-col>\n      </ion-row>\n     \n\n      <ion-row *ngIf=\"four2fiveRate !== null && four2fiveRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ four2fiveRate }}%</span>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row *ngIf=\"three2fourRate !== null && three2fourRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ three2fourRate }}%</span>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row *ngIf=\"two2threeRate !== null && two2threeRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ two2threeRate }}%</span>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row *ngIf=\"one2twoRate !== null && one2twoRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ one2twoRate }}%</span>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n<!-- review section closed -->\n\n\n\n\n  <div class=\"px-12 pt-12\">\n\n    <!--What Students say about  -->\n<div  *ngIf=\"placementinfo && placementinfo.length > 0\">\n    <div class=\"populartxt\">\n      <h2>What Students say about {{collegename}} </h2>\n    </div>\n\n    <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n      <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n        <ion-label>Placements</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n        <ion-label>Infrastructure </ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n        <ion-label>Faculty </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"segmentStud === 'tabs1'\">\n      <div class=\"tabbody\">\n        <ul>\n          <li *ngFor=\"let item of placementinfo\">\n            {{item.placement_desc}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div *ngIf=\"segmentStud === 'tabs2'\">\n      <div class=\"tabbody\">\n        <ul>\n          <li *ngFor=\"let item of placementinfo\">\n            {{item.infrastructure_desc}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div *ngIf=\"segmentStud === 'tabs3'\">\n      <div class=\"tabbody\">\n\n        <ul>\n          <li *ngFor=\"let item of placementinfo\">\n            {{item.faculty_desc}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n    <!-- closed What Students say about section -->\n\n\n    <!-- anonymous section -->\n    <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n              \n      <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\"  class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n            <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n              {{ item.user_name.charAt(0) }}\n            </h1>\n            <ng-template #showDefaultIcon class=\"firstchar\">\n              <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n            </ng-template>  \n\n        \n          </ion-col>\n          <ion-col size=\"7\">\n            <h2>{{item.user_name}}</h2>\n            <p class=\"sbtxt\">{{item.coursename}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"rates\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ratingBtns\">\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n          </ion-button>\n        </div>\n        <p><span>Placements: </span> {{item.placement_desc}} </p>\n        <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n        <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n        <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n        <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n        <ion-row class=\"thumbicon\">\n          <ion-col class=\"setlikecol\">\n            <div>Was this review helpful </div>\n\n            <div style=\"display: flex;\">\n              <!-- Thumbs Up Icon -->\n              <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                  [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                </ion-icon>\n              </span>\n\n              <!-- Separator -->\n              <span class=\"span\">|</span>\n\n              <!-- Thumbs Down Icon -->\n              <span class=\"span\"\n                (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                  [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                </ion-icon>\n              </span>\n            </div>\n          \n          </ion-col>\n        </ion-row>\n      </div>\n  \n  </div>\n\n    <!--closed anonymous  -->\n\n  </div>\n\n\n  <!-- suited  clg section -->\n\n  <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n    <div class=\"thirdsection\">\n      <div class=\"HeadTxt\">\n        <h5> Best suited colleges for you</h5>\n        <p>Because you showed interest in {{ selectedCourseName }}\n        </p>\n      </div>\n      <div>\n        <ion-slides [options]=\"slideOptssuited\">\n\n          <ion-slide *ngFor=\"let item of suitclgarry\">\n            <ion-card  class=\"size_setsuited\">\n              <div class=\"imgHead\">\n\n                <p class=\"tit_set\">\n                  {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                </p>\n                <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n              </div>\n\n              <p class=\"set_botm\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n              </p>\n              <p style=\"display: flex; height: 17px; \"> <span class=\"spnpop\" *ngIf=\"item.courseCount> 0\">Courses - {{item.courseCount}} |</span>\n                <span class=\"spnn\" *ngIf=\"item.rating.totalRateCount> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                  {{item.rating.totalRateCount}}</span>\n              </p>\n\n              <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n                <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                  [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                  <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                    [class.active]=\"isShortlisted(item.id)\">\n                  </ion-icon>\n                </ion-button>\n\n                <ion-button shape=\"round\" class=\"capitalize greenbtn\" \n                  (click)=\"brochuresuit(item.id)\">\n                  <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                </ion-button>\n                <ion-button shape=\"round\" class= \"capitalize greenbtn\"\n                  (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                  Predict Admission\n                </ion-button>\n              </div>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n  <!-- suiuted clg section closed-->\n\n\n \n  <div class=\"mx10\">\n\n\n <!-- clg photo & videos section -->\n    <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n      <h5>Take a look at Campus</h5>\n      <ion-slides [options]=\"slidepic\">\n        <ion-slide *ngFor=\"let item of clgimgArry\">\n          <ion-card class=\"setpic\">\n            <img [src]=\"item.image\">\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n\n\n\n\n    <!-- latest&popular section -->\n\n    <div  *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <ion-row class=\"border-y\">\n       \n        <ion-col size=\"12\" class=\"selfcenter\">\n          <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n    \n\n    <div style=\"margin-top:16px;\">\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\">\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 57401:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/questionans/questionans.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"HeadTxt px-12\">\n  <h5 class=\"heading\"> {{collegename}} <span> </span></h5>\n  \n</div>\n\n\n<div class=\"px-12\">\n  <ion-segment [scrollable]=\"true\" value=\"Questions\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"Questions\">\n      <ion-label>Questions</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"Unanswered\">\n      <ion-label>Unanswered</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n \n    <div *ngIf=\"selectedSegment === 'Questions'\" class=\"mx-10\">\n\n      <div *ngIf=\"!ansArry || ansArry.length === 0\" class=\"no-data-msg\">\n        No questions or answers found.\n      </div>\n      \n      <ion-card *ngFor=\"let item of ansArry;\"  class=\"qcard\">\n        <ion-card-header>\n          <ion-card-title>{{item.question}}</ion-card-title>\n          <span>{{item.QuestionFollowCount}} Follower -  {{item.views}} views</span>\n        </ion-card-header>\n        \n        <ion-row class=\"px-12\">\n          <ion-col size=\"2\">\n            <h1 class=\"firctchar\">{{ item.fullname?.charAt(0) || '' }}</h1>\n          </ion-col>\n          <ion-col size=\"6\">\n<h2>{{item.fullname}}</h2>\n           \n          </ion-col>\n          <ion-col size=\"4\">\n                        <div class=\"timeline\">\n              <ion-icon name=\"time-outline\"></ion-icon>{{item.question_asked}} </div>\n          </ion-col>\n        </ion-row>\n        <ion-card-content *ngFor=\"let answer of item.Answeres | slice:0:1\">\n          {{ answer.answer }}\n        \n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"cbottom\">\n                <div class=\"likes\">\n                  <!-- Like Icon -->\n                  <ion-icon \n                    name=\"thumbs-up\" \n                    [ngClass]=\"{'blue-icon': answer.isLiked}\" \n                    (click)=\"toggleLikeDislike(answer, 'like')\">\n                  </ion-icon>\n                  <!-- Ensure likeCount is displayed properly and defaults to 0 -->\n                  <span>{{ answer.like || 0 }}</span>\n        \n                  <!-- Dislike Icon -->\n                  <ion-icon \n                    name=\"thumbs-down\" \n                    [ngClass]=\"{'blue-icon': answer.isDisliked}\" \n                    (click)=\"toggleLikeDislike(answer, 'dislike')\">\n                  </ion-icon>\n                  <!-- Ensure dislikeCount is displayed properly and defaults to 0 -->\n                  <span>{{ answer.dis_like || 0 }}</span>\n                </div>\n              </div>\n            </ion-col>\n        \n            <ion-col size=\"6\">\n              <div *ngIf=\"!item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n                Follow <ion-icon name=\"share-social\"></ion-icon>\n              </div>\n              <div *ngIf=\"item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n                UnFollow <ion-icon name=\"share-social\"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n        \n      </ion-card>\n    </div>\n\n\n\n    \n    <div *ngIf=\"selectedSegment === 'Unanswered'\" class=\"mx-10\">\n      <ion-card *ngFor=\"let item of unansArry;\" class=\"qcard\">\n        <ion-card-header>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-card-title>{{item.question}}</ion-card-title>\n          <span class=\"mt-6\">{{item.QuestionFollowCount}} Follower - {{item.views}} Views</span>\n            </ion-col>\n            <ion-col size=\"4\">\n              \n          <div *ngIf=\"!item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n            Follow <ion-icon name=\"share-social\"></ion-icon>\n          </div>\n        \n          <!-- Unfollow Button -->\n          <div *ngIf=\"item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n            UnFollow <ion-icon name=\"share-social\"></ion-icon>\n          </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-card-header>\n      </ion-card>\n    </div>\n</div>\n\n\n\n\n\n<!-- 11 student forum -->\n<div class=\"forumsec\">\n  <ion-row class=\"firstrow\">\n      <ion-col size=\"12\">\n          <h4>{{collegename}}</h4>\n          <h5>Student Forum</h5>\n      </ion-col>\n  </ion-row>\n  <form [formGroup]=\"studentForum\">\n      <div class=\"setdiv\">\n          <ion-row class=\"firstrow\">\n              <ion-col size=\"12\">\n                  <h5>Anything you would want to ask experts?</h5>\n              </ion-col>\n          </ion-row>\n          <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n          </ion-input>\n          <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n      </div>\n  </form>\n</div>\n<!-- 11 student forum -->");

/***/ }),

/***/ 22362:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/reviews/reviews.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <div class=\"tabbody px-12\">\n\n\n\n    <div class=\"ovrallrating\">\n\n\n\n      <div *ngIf=\"totalRateCount !== null && totalRateCount !== undefined && \n             four2fiveRate !== null && four2fiveRate !== undefined &&\n             three2fourRate !== null && three2fourRate !== undefined &&\n             two2threeRate !== null && two2threeRate !== undefined &&\n             one2twoRate !== null && one2twoRate !== undefined\">\n        <h5 class=\"headtxt\">\n          Average rating of this institute\n        </h5>\n        <div>\n          <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n        </div>\n\n        <ion-row class=\"py-12\">\n          <ion-col size=\"2\">\n            <h1>{{ totalRateCount }}</h1>\n          </ion-col>\n          <ion-col size=\"10\">\n            <ion-icon *ngFor=\"let star of getStarArray(totalRateCount)\" [name]=\"star\" class=\"starrate\"></ion-icon>\n            <p class=\"p\">Based on {{ totalReview }} Verified Reviews</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"four2fiveRate !== null && four2fiveRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 4-5 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ four2fiveRate }}%</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"three2fourRate !== null && three2fourRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 3-4 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ three2fourRate }}%</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"two2threeRate !== null && two2threeRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 2-3 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ two2threeRate }}%</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"one2twoRate !== null && one2twoRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 1-2 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ one2twoRate }}%</span>\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n\n\n\n\n      <div class=\"py-12\">\n\n\n        <!-- Check if any rating count is null -->\n        <ng-container\n          *ngIf=\"!totalPlacementRateCount && !totalInfrastructureRateCount && !totalFacultyRateCount && !totalCampusRateCount && !totalMoneyRateCount; else ratingsContent\">\n          <p></p>\n        </ng-container>\n\n        <ng-template #ratingsContent>\n          <h2 class=\"headtxt\">Component rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Placements</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalPlacementRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalPlacementRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Infrastructure</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalInfrastructureRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalInfrastructureRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Faculty & Course Curriculum</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalFacultyRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalFacultyRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Crowd & Campus Life</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalCampusRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalCampusRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Value For Money</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalMoneyRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalMoneyRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n      </div>\n\n\n\n\n      <div *ngIf=\"reviewsssArr && reviewsssArr.length > 0\">\n        <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n            <ion-label>Placements</ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n            <ion-label>Infrastructure </ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n            <ion-label>Faculty </ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs4\">\n            <ion-label>Hostel </ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs5\">\n            <ion-label>Campus </ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs6\">\n            <ion-label>Money </ion-label>\n          </ion-segment-button>\n\n        </ion-segment>\n        <div *ngIf=\"segmentStud === 'tabs1'\">\n          <div class=\"tabbody\">\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.placement_desc}}</li>\n            </ul>\n\n          </div>\n        </div>\n        <div *ngIf=\"segmentStud === 'tabs2'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.infrastructure_desc}}</li>\n            </ul>\n          </div>\n        </div>\n        <div *ngIf=\"segmentStud === 'tabs3'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.faculty_desc}}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"segmentStud === 'tabs4'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.hostel_desc}}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"segmentStud === 'tabs5'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.campus_desc}}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"segmentStud === 'tabs6'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.money_desc}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- review section  -->\n      <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n        <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n          <ion-row>\n            <ion-col size=\"2\">\n              <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\" class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n           \n              <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n                {{ item.user_name.charAt(0) }}\n              </h1>\n              <ng-template #showDefaultIcon class=\"firstchar\">\n                <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n              </ng-template>  \n\n           \n            </ion-col>\n            <ion-col size=\"7\">\n              <h2>{{item.user_name}}</h2>\n              <p class=\"sbtxt\">{{item.coursename}}</p>\n            </ion-col>\n            <ion-col size=\"3\">\n              <div class=\"rates\">\n                <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ratingBtns\">\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n            </ion-button>\n          </div>\n          <p><span>Placements: </span> {{item.placement_desc}} </p>\n          <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n          <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n          <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n          <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n          <ion-row class=\"thumbicon\">\n            <ion-col class=\"setlikecol\">\n              <div>Was this review helpful </div>\n\n              <div style=\"display: flex;\">\n                <!-- Thumbs Up Icon -->\n                <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                  <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                    [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                  </ion-icon>\n                </span>\n\n                <!-- Separator -->\n                <span class=\"span\">|</span>\n\n                <!-- Thumbs Down Icon -->\n                <span class=\"span\"\n                  (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                  <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                    [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                  </ion-icon>\n                </span>\n              </div>\n\n\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n\n      <!-- end -->\n\n    </div>\n  </div>\n\n\n\n  <!--  -->\n\n\n  <div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5>Explore popular similar colleges</h5>\n     \n    </div>\n\n    <div>\n      <ion-slides [options]=\"slideOptsnew\">\n       \n        <ion-slide  *ngFor=\"let item of popularclgarry\">\n          <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important;\">\n            <div class=\"imgHeadpop\">\n            \n             \n                <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n                {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n              </p>\n              <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n            </p>\n            <p style=\"display: flex;\"> <span class=\"spnpop\"></span>\n              <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon> {{item.ratings}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n             \n             \n\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\"\n            (click)=\"toggleShortlist(item.collegeid)\">\n            <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n              [class.active]=\"isShortlisted(item.collegeid)\">\n            </ion-icon>\n          </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                (click)=\"brochure(item.collegeid)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n\n\n\n\n  <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n    <div class=\"thirdsection\">\n      <div class=\"HeadTxt\">\n        <h5> Best suited colleges for you</h5>\n        <p>Because you showed interest in {{ selectedCourseName }}\n        </p>\n      </div>\n      <div>\n        <ion-slides [options]=\"slideOptssuited\">\n\n          <ion-slide *ngFor=\"let item of suitclgarry\">\n            <ion-card  class=\"size_setpop\">\n              <div class=\"imgHead\">\n\n                <p class=\"tit_set\">\n                  {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                </p>\n                <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n              </div>\n\n              <p class=\"set_botm\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n              </p>\n              <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n                <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n                  class=\"spnn\">{{item.rating.totalRateCount}}</span>\n              </p>\n\n              <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n                <ion-button fill=\"outline\" shape=\"round\" class=\"bookmark\"\n                  [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                  <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                    [class.active]=\"isShortlisted(item.id)\">\n                  </ion-icon>\n                </ion-button>\n\n                <ion-button shape=\"round\" class=\"capitalize greenbtn\" \n                  (click)=\"brochuresuit(item.id)\">\n                  <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                </ion-button>\n                <ion-button shape=\"round\" class= \"capitalize greenbtn\"\n                  (click)=\"clgpredict(item.id,item.CatId,item.subCatName)\">\n                  Predict Admission\n                </ion-button>\n              </div>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n  <!-- news & update -->\n  <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n    <ion-row class=\"border-y\">\n\n      <ion-col size=\"12\" class=\"selfcenter\">\n        <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n      </ion-col>\n    </ion-row>\n  \n\n  <div class=\"mx10\">\n    <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"Latest\">\n        <ion-label>Latest</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Popular\">\n        <ion-label>Popular</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div *ngIf=\"selectedSegment === 'Latest'\" class=\"mt10\">\n      <div *ngFor=\"let latest of latenpopArr\">\n        <ion-row class=\"setrw mb5 mt6 pb0\">\n          <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n            <p class=\"p1\">{{latest.title}}: </p>\n            <p class=\"p2\"> {{latest.post_rate_date}}</p>\n            <p class=\"p3\">Views : {{latest.views}} </p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img [src]=\"latest.image\">\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf=\"selectedSegment === 'Popular'\">\n      <div *ngFor=\"let popular of popularArr\">\n        <ion-row class=\"setrw mb5 mt6 pb0\">\n          <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n            <p class=\"p1\">{{popular.title}}: </p>\n            <p class=\"p2\">{{popular.post_rate_date}}</p>\n            <p class=\"p3\">Views : {{popular.views}} </p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img [src]=\"popular.image\">\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n</div>");

/***/ }),

/***/ 48485:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clgdetails/scolarship/scolarship.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div>\n  <div class=\"px-12\">\n    <div>\n    <h5>{{collegename}}</h5>\n    <p [innerHTML]=\"scholarshipdata\"></p>\n    </div> \n\n     \n\n    <div>\n    \n      <div class=\"ovrallrating\" *ngIf=\"totalRateCount\">\n      <div>\n        <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n      </div>\n      <ion-row>\n        <ion-col size=\"2\">\n          <h1>{{totalRateCount}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarIcons().full\" name=\"star\" class=\"starrate\"></ion-icon>\n          <ion-icon *ngFor=\"let star of getStarIcons().half\" name=\"star-half\" class=\"starrate\"></ion-icon>\n          <ion-icon *ngFor=\"let star of getStarIcons().empty\" name=\"star-outline\" class=\"starrate\"></ion-icon>\n          <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{three2fourRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{four2fiveRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{two2threeRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{one2twoRate}}%</span>\n        </ion-col>\n      </ion-row>\n    \n      </div> \n\n    </div>\n\n  </div>\n\n\n\n\n <!-- review section -->\n\n <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n              \n  <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n    <ion-row>\n      <ion-col size=\"2\">\n       \n     \n        <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n          {{ item.user_name.charAt(0) }}\n        </h1>\n        <ng-template #showDefaultIcon class=\"firstchar\">\n          <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n        </ng-template>  \n\n     \n      </ion-col>\n      <ion-col size=\"7\">\n        <h2>{{item.user_name}}</h2>\n        <p class=\"sbtxt\">{{item.coursename}}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"rates\">\n          <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ratingBtns\">\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n      </ion-button>\n    </div>\n    <p><span>Placements: </span> {{item.placement_desc}} </p>\n    <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n    <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n    <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n    <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n    <ion-row class=\"thumbicon\">\n      <ion-col class=\"setlikecol\">\n      \n        <div>Was this review helpful </div>\n\n        <div style=\"display: flex;\">\n          <!-- Thumbs Up Icon -->\n          <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n            <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n              [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n            </ion-icon>\n          </span>\n\n          <!-- Separator -->\n          <span class=\"span\">|</span>\n\n          <!-- Thumbs Down Icon -->\n          <span class=\"span\"\n            (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n            <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n              [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n            </ion-icon>\n          </span>\n        </div>\n      \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n\n    <!--review section closed  -->\n\n\n  \n\n\n\n    <div class=\"px-12 pt-12\">\n\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <ion-row class=\"ion-margin\">\n      \n        <ion-col size=\"12\">\n          <!-- <span>{{collegename}}</span><br> -->\n          <span style=\" font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n  \n\n        <div style=\"padding-top: 0;\">\n          <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"Latest\">\n              <ion-label>Latest</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Popular\">\n              <ion-label>Popular</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"selectedSegment === 'Latest'\">\n            <div *ngFor=\"let latest of latenpopArr\">\n              <ion-row  class=\"setrw\">\n                <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                  <p class=\"p1\">{{latest.title}}: </p>\n                  <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                  <p class=\"p3\">Views : {{latest.views}} </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <img [src]=\"latest.image\">\n                </ion-col>\n              </ion-row>\n        \n             \n              </div>\n          </div>\n            <div *ngIf=\"selectedSegment === 'Popular'\">\n              <div *ngFor=\"let popular of popularArr\">\n                <ion-row class=\"setrw\">\n                  <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                    <p class=\"p1\">{{popular.title}}: </p>\n                    <p class=\"p2\">{{popular.post_rate_date}}</p>\n                    <p class=\"p3\">Views : {{popular.views}} </p>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <img [src]=\"popular.image\">\n                  </ion-col>\n                </ion-row>\n                </div>\n              </div>\n          \n        </div>\n      </div>\n\n\n  \n  </div>\n  \n</div>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_clgdetails_clgdetails-routing_module_ts.js.map