(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["src_app_pages_articalbycat_articalbycat_module_ts"],{

/***/ 60293:
/*!*******************************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticalbycatPageRoutingModule": () => (/* binding */ ArticalbycatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _articalbycat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articalbycat.page */ 9918);




const routes = [
    {
        path: '',
        component: _articalbycat_page__WEBPACK_IMPORTED_MODULE_0__.ArticalbycatPage
    }
];
let ArticalbycatPageRoutingModule = class ArticalbycatPageRoutingModule {
};
ArticalbycatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticalbycatPageRoutingModule);



/***/ }),

/***/ 43763:
/*!***********************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticalbycatPageModule": () => (/* binding */ ArticalbycatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _articalbycat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articalbycat-routing.module */ 60293);
/* harmony import */ var _articalbycat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articalbycat.page */ 9918);







let ArticalbycatPageModule = class ArticalbycatPageModule {
};
ArticalbycatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _articalbycat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticalbycatPageRoutingModule
        ],
        declarations: [_articalbycat_page__WEBPACK_IMPORTED_MODULE_1__.ArticalbycatPage]
    })
], ArticalbycatPageModule);



/***/ }),

/***/ 9918:
/*!*********************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticalbycatPage": () => (/* binding */ ArticalbycatPage)
/* harmony export */ });
/* harmony import */ var C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_articalbycat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./articalbycat.page.html */ 46259);
/* harmony import */ var _articalbycat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articalbycat.page.scss */ 7648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);










let ArticalbycatPage = class ArticalbycatPage {
  constructor(socialSharing, router, service, route, loadingController) {
    this.socialSharing = socialSharing;
    this.router = router;
    this.service = service;
    this.route = route;
    this.loadingController = loadingController;
    this.statename = JSON.parse(localStorage.getItem('state'));
  }

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('blogId');
    this.articledetail();
    this.getlatestArticle();
    this.asyncrelatedArt();
  }

  asyncrelatedArt() {
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

      _this.service.relatedArt(_this.blogId).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          console.log(res); // this.articldetailarry = res.blogdetails;

          _this.relateddetails = res.relatedblog;
          yield loader.dismiss(); // Dismiss the loader when data is received
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error(err);
          yield loader.dismiss(); // Dismiss the loader even if there is an error
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

  articledetail() {
    var _this2 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loader = yield _this2.loadingController.create({
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

      _this2.service.articledetail(_this2.blogId, 1).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          console.log(res);
          _this2.articldetailarry = res.blogdetails; // this.relateddetails = res.relatedblog;

          yield loader.dismiss(); // Dismiss the loader when data is received
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (err) {
          console.error(err);
          yield loader.dismiss(); // Dismiss the loader even if there is an error
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }

  shareBlog(item) {
    let id = item.blog_id;
    let selectpara = {
      "id": id,
      "type": "article"
    };
    this.service.generateLink_req(selectpara).subscribe(res => {
      this.sharelink = res.data.share_link;
      this.socialSharing.share(this.sharelink).then(() => {
        console.log("Shared successfully");
      });
    });
  } //   shareBlog(blog: any) {
  //   const title = blog.title;
  //   const subtitle = blog.subtitle || '';
  //   const description = this.removeHtml(blog.short_desc);
  //   const truncatedDesc = description.length > 10 ? description.substring(0, 10) + "..." : description;
  //   const blogUrl = `https://ohcampus.com/articledetails/${blog.blog_id}`;
  //   const imageUrl = blog.image;
  //   const message =
  //     `${title}\n\n${subtitle}\n\n${truncatedDesc}\n\nRead more: ${blogUrl}\n\n${imageUrl}`;
  //   const options = {
  //     message: message,   
  //     subject: title,
  //   };
  //   this.socialSharing.shareWithOptions(options)
  //     .then(() => console.log("Shared successfully"))
  //     .catch(err => console.error("Share error:", err));
  // }
  // Remove HTML tags
  //


  getlatestArticle() {
    var _this3 = this;

    return (0,C_IONIC_ohhcampus_ohhcampus_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.searchCategory = _this3.blogId;
      _this3.value = '';

      _this3.service.article(_this3.searchCategory, _this3.value, _this3.statename).subscribe(res => {
        console.log(res);
        _this3.latestartiarry = res.response_data;
      }, err => {
        console.error(err);
      });
    })();
  }

  articlesdetails(id) {
    this.router.navigate(['/articledetails', id]);
  }

};

ArticalbycatPage.ctorParameters = () => [{
  type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

ArticalbycatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-articalbycat',
  template: _raw_loader_articalbycat_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_articalbycat_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ArticalbycatPage);


/***/ }),

/***/ 7648:
/*!***********************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".maindiv ion-card {\n  margin: 0;\n  --box-shadow:none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.maindiv ion-card img {\n  width: 100%;\n  display: block;\n}\n.maindiv h5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n.maindiv .articlelist img {\n  border: 1px solid lightgray;\n  height: 70px;\n  width: 100%;\n  border-radius: 8px;\n}\n.maindiv p {\n  margin: 0;\n  font-size: 14px;\n}\n.maindiv ion-row {\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 12px;\n  margin: 10px;\n}\n.description {\n  text-align: justify;\n}\n.description h4 {\n  font-size: 14px !important;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  color: #3880ff;\n  /* Ionic primary color */\n  font-size: 14px;\n  cursor: pointer;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  color: #3880ff;\n  /* Ionic primary color */\n  font-size: 14px;\n  cursor: pointer;\n}\n.share-btn ion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljYWxieWNhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQVo7QUFJSTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtJO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSFI7QUFNSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FBSlI7QUFNSTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSlI7QUFRQTtFQUNJLG1CQUFBO0FBTEo7QUFNSTtFQUNJLDBCQUFBO0FBSlI7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUFnQix3QkFBQTtFQUNoQixlQUFBO0VBQ0EsZUFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFBZ0Isd0JBQUE7RUFDaEIsZUFBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6ImFydGljYWxieWNhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg1e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIH1cclxuICAgIC5hcnRpY2xlbGlzdHtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBpb24tcm93e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNoYXJlLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzM4ODBmZjsgLyogSW9uaWMgcHJpbWFyeSBjb2xvciAqL1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaGFyZS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMzODgwZmY7IC8qIElvbmljIHByaW1hcnkgY29sb3IgKi9cclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2hhcmUtYnRuIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 46259:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/articalbycat/articalbycat.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n   \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <!-- <ion-buttons> -->\n            <!-- <ion-menu-button></ion-menu-button> -->\n          <!-- </ion-buttons> -->\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\">\n \n<!-- section1 -->\n<div  *ngFor=\"let item of articldetailarry;\">\n  <h5>{{item.category_name}}</h5>\n  <div class=\"m10\">\n  <ion-card>\n    <img [src]=\"item.image\">\n  </ion-card>\n  <h6>{{item.title}}  \n    <button class=\"share-btn\" (click)=\"shareBlog(item)\">\n  <ion-icon name=\"share-social-outline\"></ion-icon>\n  <span>Share</span>\n</button>\n\n    </h6>\n\n</div>\n</div>\n<!-- 2 section -->\n<div *ngFor=\"let item of articldetailarry;\">\n  <div class=\"m10\"> <p class=\"description\"  [innerHTML]=\"item.description\"></p></div>\n</div>\n<!-- 3rd section -->\n<div>\n  <h5>Related Articles</h5>\n  <div *ngFor=\"let item of relateddetails;\" class=\"articlelist\">\n    <ion-row (click)=\"articlesdetails(item.id)\">\n      <ion-col size=\"3\">\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" >\n        <p>{{item.title}}</p>\n        \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n\n<!-- 4th section -->\n<div>\n  <h5>Latest Articles</h5>\n  <div *ngFor=\"let item of latestartiarry;\" class=\"articlelist\">\n    <ion-row (click)=\"articlesdetails(item.id)\">\n      <ion-col size=\"3\">\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" >\n        <p>{{item.title}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n</div>\n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_articalbycat_articalbycat_module_ts.js.map