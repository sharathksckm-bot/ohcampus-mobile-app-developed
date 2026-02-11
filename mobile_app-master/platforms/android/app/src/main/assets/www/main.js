(self["webpackChunkRiNG"] = self["webpackChunkRiNG"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    // {
    // path: '',
    // loadChildren: () => import('./pages/welcomepage/welcomepage.module').then( m => m.WelcomepagePageModule)
    // },
    { path: '',
        redirectTo: '/welcomepage',
        pathMatch: 'full',
    },
    {
        path: 'welcomepage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcomepage_welcomepage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcomepage/welcomepage.module */ 6141)).then(m => m.WelcomepagePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_pages_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then(m => m.SignupPageModule)
    },
    {
        path: 'editprofile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("src_app_pages_editprofile_editprofile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/editprofile/editprofile.module */ 64686)).then(m => m.EditprofilePageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notification/notification.module */ 89770)).then(m => m.NotificationPageModule)
    },
    {
        path: 'forgot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("src_app_pages_forgot_forgot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot/forgot.module */ 93647)).then(m => m.ForgotPageModule)
    },
    {
        path: 'preferedcourses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_preferedcourses_preferedcourses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/preferedcourses/preferedcourses.module */ 70885)).then(m => m.PreferedcoursesPageModule)
    },
    {
        path: 'chooselevel/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_chooselevel_chooselevel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chooselevel/chooselevel.module */ 77812)).then(m => m.ChooselevelPageModule)
    },
    {
        path: 'choosecourse/:id/:Lid',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_choosecourse_choosecourse_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/choosecourse/choosecourse.module */ 19527)).then(m => m.ChoosecoursePageModule)
    },
    {
        path: 'citylist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_citylist_citylist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/citylist/citylist.module */ 53178)).then(m => m.CitylistPageModule)
    },
    {
        path: 'uprofile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_uprofile_uprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/uprofile/uprofile.module */ 70283)).then(m => m.UprofilePageModule)
    },
    {
        path: 'clglist',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("src_app_pages_clglist_clglist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clglist/clglist.module */ 86863)).then(m => m.ClglistPageModule)
    },
    {
        path: 'clglist/:locId/clgbyloc',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("src_app_pages_clglist_clglist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clglist/clglist.module */ 86863)).then(m => m.ClglistPageModule)
    },
    {
        path: 'gmailform',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_pages_gmailform_gmailform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/gmailform/gmailform.module */ 343)).then(m => m.GmailformPageModule)
    },
    {
        path: 'populerclg',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("src_app_pages_populerclg_populerclg_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/populerclg/populerclg.module */ 47867)).then(m => m.PopulerclgPageModule)
    },
    {
        path: 'toprankclg',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("src_app_pages_toprankclg_toprankclg_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/toprankclg/toprankclg.module */ 89777)).then(m => m.ToprankclgPageModule)
    },
    {
        path: 'enquiry',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_pages_enquiry_enquiry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/enquiry/enquiry.module */ 63664)).then(m => m.EnquiryPageModule)
    },
    {
        path: 'specialiclg',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_specialiclg_specialiclg_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/specialiclg/specialiclg.module */ 77785)).then(m => m.SpecialiclgPageModule)
    },
    {
        path: 'clgdetails/:collegeid',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("default-src_app_pages_clgdetails_clgdetails-routing_module_ts"), __webpack_require__.e("src_app_pages_clgdetails_clgdetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clgdetails/clgdetails.module */ 44949)).then(m => m.ClgdetailsPageModule)
    },
    {
        path: 'clgcompare/:collegeId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("src_app_pages_clgcompare_clgcompare_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clgcompare/clgcompare.module */ 79512)).then(m => m.ClgcomparePageModule)
    },
    {
        path: 'clgcompare',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("src_app_pages_clgcompare_clgcompare_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clgcompare/clgcompare.module */ 79512)).then(m => m.ClgcomparePageModule)
    },
    {
        path: 'clgcompare/:collegeId/:collegeId2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("src_app_pages_clgcompare_clgcompare_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clgcompare/clgcompare.module */ 79512)).then(m => m.ClgcomparePageModule)
    },
    {
        path: 'examdetails/:examId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_examdetails_examdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/examdetails/examdetails.module */ 35072)).then(m => m.ExamdetailsPageModule)
    },
    {
        path: 'articledetails/:blogId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_articledetails_articledetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/articledetails/articledetails.module */ 46637)).then(m => m.ArticledetailsPageModule)
    },
    {
        path: 'eventdetails/:event_id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_eventdetails_eventdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/eventdetails/eventdetails.module */ 69934)).then(m => m.EventdetailsPageModule)
    },
    {
        path: 'certificatetdetails/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_certificatetdetails_certificatetdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/certificatetdetails/certificatetdetails.module */ 55064)).then(m => m.CertificatetdetailsPageModule)
    },
    {
        path: 'termsncondition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_termsncondition_termsncondition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/termsncondition/termsncondition.module */ 93681)).then(m => m.TermsnconditionPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_tabs_js"), __webpack_require__.e("src_app_pages_contactus_contactus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contactus/contactus.module */ 21550)).then(m => m.ContactusPageModule)
    },
    {
        path: 'whoweare',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_whoweare_whoweare_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/whoweare/whoweare.module */ 51777)).then(m => m.WhowearePageModule)
    },
    {
        path: 'coursewiseqna',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_coursewiseqna_coursewiseqna_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coursewiseqna/coursewiseqna.module */ 27645)).then(m => m.CoursewiseqnaPageModule)
    },
    {
        path: 'coursewisearticles',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_coursewisearticles_coursewisearticles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coursewisearticles/coursewisearticles.module */ 74780)).then(m => m.CoursewisearticlesPageModule)
    },
    {
        path: 'coursewiseexam',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_coursewiseexam_coursewiseexam_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coursewiseexam/coursewiseexam.module */ 92727)).then(m => m.CoursewiseexamPageModule)
    },
    {
        path: 'articlcatlist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_articlcatlist_articlcatlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/articlcatlist/articlcatlist.module */ 22012)).then(m => m.ArticlcatlistPageModule)
    },
    // {
    //   path: 'articlcatlist',
    //   loadChildren: () => import('./pages/articlcatlist/articlcatlist.module').then( m => m.ArticlcatlistPageModule)
    // },
    {
        path: 'coursewiseexamdetails/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_coursewiseexamdetails_coursewiseexamdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/coursewiseexamdetails/coursewiseexamdetails.module */ 64572)).then(m => m.CoursewiseexamdetailsPageModule)
    },
    {
        path: 'specourselist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_specourselist_specourselist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/specourselist/specourselist.module */ 57464)).then(m => m.SpecourselistPageModule)
    },
    {
        path: 'specourselist/:trendingspec',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_specourselist_specourselist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/specourselist/specourselist.module */ 57464)).then(m => m.SpecourselistPageModule)
    },
    {
        path: 'specoursebyclglts/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("src_app_pages_specoursebyclglts_specoursebyclglts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/specoursebyclglts/specoursebyclglts.module */ 36865)).then(m => m.SpecoursebyclgltsPageModule)
    },
    {
        path: 'popuplogsign',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_pages_popuplogsign_popuplogsign_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/popuplogsign/popuplogsign.module */ 89865)).then(m => m.PopuplogsignPageModule)
    },
    {
        path: 'predictadmission',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_pages_predictadmission_predictadmission_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/predictadmission/predictadmission.module */ 81888)).then(m => m.PredictadmissionPageModule)
    },
    {
        path: 'gloginform',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_pages_gloginform_gloginform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/gloginform/gloginform.module */ 98021)).then(m => m.GloginformPageModule)
    },
    {
        path: 'placemntdetails/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_placemntdetails_placemntdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/placemntdetails/placemntdetails.module */ 37309)).then(m => m.PlacemntdetailsPageModule)
    },
    {
        path: 'careerdetails/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_careerdetails_careerdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/careerdetails/careerdetails.module */ 48555)).then(m => m.CareerdetailsPageModule)
    },
    {
        path: 'trendcrsdetails/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_trendcrsdetails_trendcrsdetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/trendcrsdetails/trendcrsdetails.module */ 26584)).then(m => m.TrendcrsdetailsPageModule)
    },
    {
        path: 'editpreferences',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_editpreferences_editpreferences_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/editpreferences/editpreferences.module */ 97741)).then(m => m.EditpreferencesPageModule)
    },
    {
        path: 'clgdetails',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_popuplogsign_popuplogsign_page_ts"), __webpack_require__.e("default-src_app_pages_predictadmission_predictadmission_page_ts"), __webpack_require__.e("default-src_app_pages_clgdetails_clgdetails-routing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/clgdetails/clgdetails-routing.module */ 90644)).then(m => m.ClgdetailsPageRoutingModule)
    },
    {
        path: 'eventlist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_eventlist_eventlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/eventlist/eventlist.module */ 3642)).then(m => m.EventlistPageModule)
    },
    {
        path: 'statelist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_statelist_statelist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/statelist/statelist.module */ 55178)).then(m => m.StatelistPageModule)
    },
    {
        path: 'editstate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_editstate_editstate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/editstate/editstate.module */ 71395)).then(m => m.EditstatePageModule)
    },
    {
        path: 'questionpaper',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_questionpaper_questionpaper_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/questionpaper/questionpaper.module */ 31228)).then(m => m.QuestionpaperPageModule)
    },
    {
        path: 'applyform',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_icon_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_button_js-node_modules_angular_ma-ba50c5"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_pages_applyform_applyform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/applyform/applyform.module */ 30337)).then(m => m.ApplyformPageModule)
    },
    {
        path: 'articalbycat/:blogId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_articalbycat_articalbycat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/articalbycat/articalbycat.module */ 43763)).then(m => m.ArticalbycatPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ 78225);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);










// import { NgZone } from '@angular/core';

let AppComponent = class AppComponent {
    constructor(fcm, device, alertController, platform, service, activatedRoute, router, menuController, toastController) {
        this.fcm = fcm;
        this.device = device;
        this.alertController = alertController;
        this.platform = platform;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuController = menuController;
        this.toastController = toastController;
        this.title = '';
        this.content = '';
        this.isAccordion = false;
        this.isContentVisible = {
            engineering: false,
        };
        this.menud = [];
        this.coursesArray = [];
        this.Usertype = false;
        this.shortlistedColleges = [];
        this.platform.ready().then(() => {
            console.log('Device UUID is: ' + this.device.uuid);
            localStorage.setItem('DeviceUUID', this.device.uuid);
            console.log('Device model is: ' + this.device.model);
            localStorage.setItem('DeviceModel', this.device.model);
            console.log('Device manufacturer is: ' + this.device.manufacturer);
            localStorage.setItem('Devicemanufacturer', this.device.manufacturer);
            this.getDeviceToken();
        })
            .catch(e => console.log('ErrorInitFCM', e));
        this.getUserData();
        this.getmenudata();
    }
    ngOnInit() {
        const coursedata = localStorage.getItem('courses');
        this.coursesArray = JSON.parse(coursedata);
        this.courseId = this.coursesArray[0].id;
        this.courseCatId = JSON.parse(localStorage.getItem('catID'));
        console.log(this.courseCatId);
        if (this.courseCatId != '' && this.courseCatId != undefined) {
            this.getmenudata();
        }
    }
    getDeviceToken() {
        this.fcm.getToken()
            .then(token => {
            localStorage.setItem("device_token", token);
            this.token = localStorage.getItem("device_token");
            console.log(token);
        })
            .catch(error => console.error('Error getting token', error));
        this.fcm.onNotification().subscribe(data => {
            console.log(data.notifictionType);
            this.notifictionType = data.notifictionType;
            if (data.wasTapped) {
                console.log("111Received in background");
                console.log(this.notifictionType);
                this.backgroundtype(this.notifictionType);
                // alert(1)
                this.router.navigate(['/notification']);
            }
            else {
                // alert(2)
                this.router.navigate(['/notification']);
                console.log("111Received in foreground");
            }
            ;
        });
        //  alert(3)
        // this.router.navigate(['/notification']);
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem("device_token", token);
            this.token = localStorage.getItem("device_token");
            console.log(this.token);
        });
    }
    getUserData() {
        const user = JSON.parse(localStorage.getItem('user'));
        const hasSkipped = localStorage.getItem('hasSkipped');
        if (user) {
            console.log('Regular User information:', user);
            this.loginuserId = user.id;
            this.username = user.name;
            this.email = user.email;
            this.phone = user.phone;
            this.token = user.token;
            this.router.navigateByUrl('/tabs/tabs/tab1');
            this.Usertype = true;
        }
        else if (hasSkipped) {
            console.log('User skipped login.');
            // this.router.navigateByUrl('/tabs/tabs/tab1');
        }
        else {
            this.Usertype = true;
            const storedResponseData = localStorage.getItem('response_data');
            if (storedResponseData) {
                const responseData = JSON.parse(storedResponseData);
                console.log('App page contantant set Google User information:', responseData);
                if (responseData && responseData.length == 0) {
                    console.log('App page Google User information:', responseData[0]);
                    this.loginuserId = responseData[0].id;
                    this.username = responseData[0].f_name;
                    this.email = responseData[0].email;
                    this.phone = responseData[0].phone;
                    this.token = responseData[0].token;
                    this.router.navigateByUrl('/tabs/tabs/tab1');
                    this.userlogindata();
                }
                else {
                    console.log('111No user data found in response_data.');
                    // this.router.navigateByUrl('/welcomepage');
                    this.router.navigateByUrl('/tabs/tabs/tab1');
                    this.userlogindata();
                }
            }
            else {
                this.Usertype = false;
                console.log('222No user information found in local storage.');
                this.router.navigateByUrl('/welcomepage');
                this.userlogindata();
                // this.router.navigateByUrl('/tabs/tabs/tab1');
            }
        }
    }
    userlogin() {
        if (this.loginuserId != '' && this.loginuserId != undefined) {
            this.router.navigateByUrl('/tabs/tabs/tab1');
        }
    }
    skipLogin() {
        localStorage.setItem('hasSkipped', 'true');
    }
    userlogindata() {
        if (this.Usertype == false) {
            this.router.navigateByUrl('/welcomepage');
        }
        else {
            this.router.navigateByUrl('/tabs/tabs/tab1');
        }
    }
    toggleVisibility(itemKey) {
        console.log(itemKey);
        if (this.isAccordion) {
            this.isContentVisible[itemKey] = !this.isContentVisible[itemKey];
        }
        else {
            this.isContentVisible[itemKey] = true;
        }
    }
    showNotification(title, msg) {
        this.alert.create({
            header: title,
            message: msg,
            buttons: [{
                    text: 'OK'
                }]
        }).then((ele) => {
            ele.present();
        });
    }
    closeMenu() {
        this.menuController.close();
    }
    getmenudata() {
        this.menu = '';
        // alert(this.courseId)
        this.service.getmenults(this.courseCatId, this.courseId).subscribe(res => {
            this.menu = res;
            console.log(this.menu);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_3__.FCM },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
AppComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isAccordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ 78225);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);

// import { NgModule } from '@angular/core';








// import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';








let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot({}), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            // AngularFireAuthModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.OverlayModule,
            //  AngularFireModule.initializeApp(environment.firebaseConfig),
        ],
        providers: [
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__.Device,
            // StatusBar,
            // SplashScreen,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser,
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus,
            cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_4__.FCM,
            // FirebaseX,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__.SocialSharing,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            // { provide: 'ENVIRONMENT', useValue: environment },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 59353:
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "ServiceService": () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 19122);





class User {
}
let ServiceService = class ServiceService {
    constructor(httpClient, alertCtrl, modalController) {
        //  this.baseUrl = 'https://win.k2key.in/ohcampus/apps/';
        this.httpClient = httpClient;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'content-Type': 'application/json' })
        };
        this.baseUrl = 'https://campusapi.ohcampus.com/apps/';
        // https://win.k2key.in/ohcampus/web/Authentication/validateUser,{"username":"ohcampusinfo@gmail.com","password":"Admin@123"},login api
        //  https://win.k2key.in/ohcampus/web/user/createUser, {"email":"testuser1@gmail.com","password":"123456","name":""} signup api
        // // https://win.k2key.in/ohcampus/apps/User/UpdateNewPass {"email":"ohcampusinfo@gmail.com","newPass":"admin","confirmPass":"admin"}
        // https://win.k2key.in/ohcampus/apps/category/getCategory
        // https://win.k2key.in/ohcampus/apps/category/getAcadamicCategory
        // https://win.k2key.in/ohcampus/apps/course/getCoursesByAcat_CCat {"CouCat":"91","AcaCat":"3"}
        // https://win.k2key.in/ohcampus/apps/User/verifyOTP {"email":"testuser3@gmail.com","Otp":"1234"}
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    // log
    saveSearchLog(data) {
        return this.httpClient.post(this.baseUrl + 'User/saveSearchLog', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // login api
    loginuser(data) {
        return this.httpClient.post(this.baseUrl + 'Authentication/validateUser', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // public loginuser(username: any,password: any): Observable<any> {
    //   return this.httpClient.post<any>(this.baseUrl + 'Authentication/validateUser', {username,password}, this.httpOptions)
    //     .pipe(retry(0), catchError(this.handleError)
    //     );
    // }
    // signup api
    signup(data) {
        return this.httpClient.post(this.baseUrl + 'User/createUser', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // state list 
    kcetcutoff(college_id) {
        return this.httpClient.post(this.baseUrl + 'Cutoff/getCutOffRoundWise', { college_id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    komedecutoff(college_id) {
        return this.httpClient.post(this.baseUrl + 'Cutoff/getCOMEDKCutOffRoundWise', { college_id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    comedkcutoff(college_id) {
        return this.httpClient.post(this.baseUrl + 'User/getCollegeByCity', { college_id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // public googleusercreat(type: string, Otp: string, agreements: string, confirmpassword: string,
    //   email: string, mobile_no: string, name: string, password: string): Observable<any> {
    // const payload = { type, Otp, agreements, confirmpassword, email, mobile_no, name, password };
    // return this.httpClient.post<any>(this.baseUrl + 'User/createUser', payload, this.httpOptions)
    // .pipe(retry(0), catchError(this.handleError));
    // }
    googleusercreat(data) {
        return this.httpClient.post(this.baseUrl + 'User/signUpwithGoogle', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //  api otp verify
    verifyotp(email, Otp) {
        return this.httpClient.post(this.baseUrl + '/User/verifyOTP ', { email, Otp }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    preferdclglist(cityId, subcategoryId) {
        return this.httpClient.post(this.baseUrl + 'User/getCollegeByCity', { cityId, subcategoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // corse&fees  tab api,
    statelist() {
        return this.httpClient.post(this.baseUrl + 'User/getState', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    citylist(stateId) {
        return this.httpClient.post(this.baseUrl + 'User/getCityByState', { stateId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    managementForm(StudentName, State, City, Category, CourseLevel, interestedcourses, PreferredLocation, PreferredCollege, mobileNumber) {
        return this.httpClient.post(this.baseUrl + 'User/saveManagementSeat', { StudentName, State, City, CourseLevel, Category, interestedcourses, PreferredLocation, PreferredCollege, mobileNumber }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    ConsellingForm(StudentName, State, City, passingstatus, Passingyear, CourseInterest, mobileNumber) {
        return this.httpClient.post(this.baseUrl + 'User/saveCounselingDetails', { StudentName, State, City, passingstatus, Passingyear, CourseInterest, mobileNumber }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    postqns(student_name, email, mobile_no, category, college, course, entrance_exam, rank, score) {
        return this.httpClient.post(this.baseUrl + 'Course/getCoursesInfo', { student_name, email, mobile_no, category, college, course, entrance_exam, rank, score }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcoursiformation(collegeId, subcategory, collegeTypeId, categoryId) {
        return this.httpClient.post(this.baseUrl + 'course/getCoursesBySubcategory', { collegeId, subcategory, collegeTypeId, categoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    popclgcmpre(categoryid) {
        return this.httpClient.post(this.baseUrl + 'college/getPopularCollegeListForCompare', { categoryid }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    userqnspost(collegeid, courselevel, course, user_id, questionInput) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/postQuestion', { collegeid, courselevel, course, user_id, questionInput }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // Course info tabs Api
    contactmail(name, email, contactno, subject, message) {
        return this.httpClient.post(this.baseUrl + 'Common/sendContactMail', { name, email, contactno, subject, message }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    cmpclgdetails(collegeId, subcategory, courselevels) {
        return this.httpClient.post(this.baseUrl + 'Compare_College/getCollegeDetailsByID', { collegeId, subcategory, courselevels }, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getexamlist(params) {
        return this.httpClient.post(this.baseUrl + 'Exam/getExamList', { params }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    saveapplication(student_name, email, mobile_no, category, college, course, entrance_exam, rank, score) {
        return this.httpClient.post(this.baseUrl + 'common/savCourseApplication', { student_name, email, mobile_no, category, college, course, entrance_exam, rank, score }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcourcatogorybyclg(categoryId, collegeId) {
        return this.httpClient.post(this.baseUrl + 'Course/getCourseByCategoryClg', { categoryId, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcoursesinfo(courseid, collegeId) {
        return this.httpClient.post(this.baseUrl + 'Course/getCoursesInfo', { courseid, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCoursesAdmissionProcess(courseid, collegeId) {
        return this.httpClient.post(this.baseUrl + 'Course/getCoursesAdmissionProcess', { courseid, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getQueAnsAboutCourse(courseid, collegeId) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/getQueAnsAboutCourses', { courseid, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getEntranceExamsForCourse(courseid, collegeId) {
        return this.httpClient.post(this.baseUrl + 'Course/getEntranceExamsForCourse', { courseid, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    clgofferingsamecity(courseid, cityid, collegeId) {
        return this.httpClient.post(this.baseUrl + 'College/collegesOffereingSameCourseAtSameCity', { courseid, cityid, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCoursesFeeStructure(courseid, collegeId) {
        return this.httpClient.post(this.baseUrl + 'Course/getCoursesFeeStructure', { courseid, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCoursescategory() {
        return this.httpClient.post(this.baseUrl + 'Course/getCourseCategory', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    forgotpass(data) {
        return this.httpClient.post(this.baseUrl + 'User/UpdateNewPass', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    resetpasslink(email) {
        return this.httpClient.post(this.baseUrl + 'User/ResetPass', { email }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCategory() {
        return this.httpClient.post(this.baseUrl + 'Category/getCategory', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getlevel() {
        return this.httpClient.post(this.baseUrl + 'Category/getAcadamicCategory', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getsubclist(CouCat, AcaCat) {
        return this.httpClient.post(this.baseUrl + 'course/getCoursesByAcat_CCat', { CouCat, AcaCat }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getmenults(courseCatId, courseId) {
        return this.httpClient.post(this.baseUrl + 'common/getNavList', { courseCatId, courseId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    popularclg(data) {
        return this.httpClient.post(this.baseUrl + 'college/getPopColleges', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    gettoprankclg(id) {
        return this.httpClient.post(this.baseUrl + 'campus_app/getCollegeListByRank', { id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getspecificclg(ccId, acId) {
        return this.httpClient.post(this.baseUrl + 'campus_app/getListBySpecification', { ccId, acId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcoursebyarticle(CategoryId) {
        return this.httpClient.post(this.baseUrl + 'Blogs/getArticles', { CategoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getqnans(course_categoryId) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/getQuestionAns', { course_categoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    articlesection() {
        return this.httpClient.post(this.baseUrl + 'Blogs/getBlogCategory', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    articlbycategory(CategoryId) {
        return this.httpClient.post(this.baseUrl + 'Blogs/getBlogsbyCategory', { CategoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    examlistbycategory(courseCatId, courseId, statename) {
        return this.httpClient.post(this.baseUrl + 'common/getCourseWiseExamList ', { courseCatId, courseId, statename }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    examdetailsbycorce(examId) {
        return this.httpClient.post(this.baseUrl + 'Exam/getExamDetails ', { examId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    specicourselist(value, subcategory) {
        return this.httpClient.post(this.baseUrl + 'course/getCourseList', { value, subcategory }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    specoursebyclglist(courseid) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeList', { courseid }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getclgtopclg(course, startLimit, endLimit) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeListByCourse', { course, startLimit, endLimit }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getctylist(subcategory, startlimit, endlimit, statename) {
        return this.httpClient.post(this.baseUrl + 'city/getCityByCourse', { subcategory, startlimit, endlimit, statename }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getctyclglt(startlimit, endlimit, locId, subcategory) {
        return this.httpClient.post(this.baseUrl + 'college/getClgListByLoc_Copy', { startlimit, endlimit, locId, subcategory }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getLocation(search_term) {
        return this.httpClient.post(this.baseUrl + 'city/getCity', { search_term }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getclgfees(min_fees, max_fees, courseId, statename) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        return this.httpClient.post(this.baseUrl + 'college/getClgListByFees', { min_fees, max_fees, courseId, statename }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getexams(courseCatId, statename, ac_id) {
        return this.httpClient.post(this.baseUrl + 'exam/getExamsByCategory', { courseCatId, statename, ac_id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getarticles(searchCategory) {
        return this.httpClient.post(this.baseUrl + 'common/getArticleList', { searchCategory }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getevents(value) {
        return this.httpClient.post(this.baseUrl + 'Event/getEventList', { value }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    geteventss(value, startlimit, endlimit) {
        return this.httpClient.post(this.baseUrl + 'Event/getEventList', { value, startlimit, endlimit }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    geteventsdetails(eventid) {
        return this.httpClient.post(this.baseUrl + 'Event/getEventDetails', { eventid }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    addclgshortlist(userId, collegeId, active, event) {
        return this.httpClient.post(this.baseUrl + 'college/addUpdateSpecificList', { userId, collegeId, active, event }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getusrshortlistclg(userId) {
        return this.httpClient.post(this.baseUrl + 'college/getListOfShortListedColleges', { userId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    predictaddmission(student_name, email, mobile_no, category, college, course, entrance_exam, rank, score) {
        return this.httpClient.post(this.baseUrl + 'common/savPredictAdmission', { student_name, email, mobile_no, category, college, course, entrance_exam, rank, score }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcareer(courseCatId) {
        return this.httpClient.post(this.baseUrl + 'exam/getCareerByCategory', { courseCatId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    careerdetails(careerId) {
        return this.httpClient.post(this.baseUrl + 'common/getCareerDetails', { careerId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    trendincorses(categoryId, academic_categories) {
        return this.httpClient.post(this.baseUrl + 'course/getTrendingCoursesList', { categoryId, academic_categories }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    trndcrsdetail(courseId) {
        return this.httpClient.post(this.baseUrl + 'course/getTrendingCoursesDetailsById', { courseId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    placementdetails(collegeId) {
        return this.httpClient.post(this.baseUrl + 'common/getPlacementDataOfClg', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    tableofcontent(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getTableOfConent', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // home page bottom tabs api
    getsearchbar(text) {
        return this.httpClient.post(this.baseUrl + 'common/getDataBySearch', { text }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // compare clg api
    getcomprbtechclg() {
        return this.httpClient.post(this.baseUrl + 'compare_College/getPopularCompOfBTech ', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcomprMbaclg() {
        return this.httpClient.post(this.baseUrl + 'compare_College/getPopularCompOfMBA ', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcomprclgsrch(searchTerm, limit, start) {
        return this.httpClient.post(`${this.baseUrl}compare_College/getCollegeList`, {
            searchTerm, limit, start
        }, this.httpOptions);
    }
    getCourselevel(Id) {
        return this.httpClient.post(this.baseUrl + 'Common/getLevelById', { Id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcourselts(Id, level, subcategory) {
        return this.httpClient.post(this.baseUrl + 'Compare_College/getCoursesById ', { Id, level, subcategory }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    clglistforcompr(categoryid) {
        return this.httpClient.post(this.baseUrl + 'college/getPopularCollegeListForCompare ', { categoryid }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //  college details pages api's
    // college info tab
    getclgdetails(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeDetailsByID ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getpopprogrammes(collegeId, subcategory, collegeTypeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeProgrammesByID', { collegeId, subcategory, collegeTypeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getotherprogrmes(collegeId, subcategory) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeOtherProgrammesByID ', { collegeId, subcategory }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    gethighlightqan(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeHighlightByID ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getAdmissionprosess(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeAdmissionProcess ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getplacement(searchYear, searchCategory, collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getPlacementDataOfClg ', { searchYear, searchCategory, collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getplacementdtil(collegeId, searchYear, searchCategory) {
        return this.httpClient.post(this.baseUrl + 'college/getPlacementDataOfClg ', { collegeId, searchYear, searchCategory, }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getplacecategory(collegeId) {
        return this.httpClient.post(this.baseUrl + 'category/getPlacementCategory ', { collegeId, }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getplacecategoryyear(collegeId, categoryId) {
        return this.httpClient.post(this.baseUrl + 'category/getYearByCategory ', { collegeId, categoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getlatestnpop() {
        return this.httpClient.post(this.baseUrl + 'common/getLatestBlogs', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getclgranking(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getRanktDataOfClg ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcoursfeesnfees(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCoursesAndFeesOfClg ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getscholarship(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getScholarShipOfClg  ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getFaqs(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getFAQsOfClg ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getclgreview(collegeId) {
        return this.httpClient.post(this.baseUrl + 'common/getReviewDetails', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getpopularclg(cityid) {
        return this.httpClient.post(this.baseUrl + 'college/getPopularClgByLocation', { cityid }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getsuitclg(collegeId, categories) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegesAccordingCategory ', { collegeId, categories }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //  courses&fees tab api
    getfeeswiseclg(collegeId) {
        return this.httpClient.post(this.baseUrl + 'course/getCoursesOfCollege ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcityotherclg(cityId, collegeId, subcat) {
        return this.httpClient.post(this.baseUrl + 'Course/getOtherCollegesOfferingSameCourseInSameCity', { cityId, collegeId, subcat }, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getnotification(collegeId) {
        return this.httpClient.post(this.baseUrl + 'exam/getExamNotificationForClg ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getsubcatlist(collegeId) {
        return this.httpClient.post(this.baseUrl + 'category/getSubCategoryList ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcourselevel(collegeId) {
        return this.httpClient.post(this.baseUrl + 'course/getCourseLevel ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getFeesDataOfCollege(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getFeesDataOfCollege ', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getExamAccepted(collegeId) {
        return this.httpClient.post(this.baseUrl + 'exam/getExamAccepted', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // tab-3 reviews section
    latestblog(collegeId) {
        return this.httpClient.post(this.baseUrl + 'common/getLatestBlogs', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    reviewDetails(collegeId) {
        return this.httpClient.post(this.baseUrl + 'common/getReviewDetails', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    reviewvote(user_id, reviewid, ishelpful) {
        return this.httpClient.post(this.baseUrl + 'Review/voteReview', { user_id, reviewid, ishelpful }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //  tab-4 admission section
    admissionprocess(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeAdmissionProcess', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    clgbylocation(cityid) {
        return this.httpClient.post(this.baseUrl + 'college/getPopularClgByLocation', { cityid }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    contactdetails(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegeContactDetails', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    addmissionqueans(collegeId) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/getQueAnsAboutAdmissions', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getreview(collegeId) {
        return this.httpClient.post(this.baseUrl + 'common/getReviewDetails', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // tab-5- placement api section
    placementdata(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getLastThreeYearsPlacementData', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    placementreview(collegeId) {
        return this.httpClient.post(this.baseUrl + 'Review/getPlacementRating', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // 6 Q&A Tabs Api
    qnsandans(collegeId, length, draw) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/getQAofCollege', { collegeId, length, draw }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    voteAnswere(action, answer_id, user_id) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/voteAnswere', { action, answer_id, user_id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    followQuestion(action, user_id, question_id) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/followQuestion ', { action, user_id, question_id }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    unanser(collegeId, length, draw) {
        return this.httpClient.post(this.baseUrl + 'QuestionsAns/getUnAnsweredQueofCollege', { collegeId, length, draw }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // searching tabs Api
    getexamsearch(searchexam) {
        return this.httpClient.post(this.baseUrl + 'exam/getExamSearch ', { searchexam }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcollegesrch(searchcollege) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegesearch', { searchcollege }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getarticlesrch(searcharticle) {
        return this.httpClient.post(this.baseUrl + 'exam/getArticleSearch', { searcharticle }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    examdetails(examId) {
        return this.httpClient.post(this.baseUrl + 'exam/getExamDetails', { examId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    articledetail(blogId, type = 0) {
        return this.httpClient.post(this.baseUrl + 'Blogs/getBlogsDetails', { blogId, type }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    relatedArt(blogId) {
        return this.httpClient.post(this.baseUrl + 'Blogs/getBlogsDetails', { blogId, type: 0 }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    // brochure Api
    getbrochure(collegeId, userId) {
        return this.httpClient.post(this.baseUrl + 'common/downloadBrochure', { collegeId, userId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //  article&events
    article(searchCategory, value, statename) {
        return this.httpClient.post(this.baseUrl + 'Blogs/getBlogs', { searchCategory, value, statename }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    //  recommanded tabs api
    getfeatureclg(categoryId) {
        return this.httpClient.post(this.baseUrl + 'College/getFeaturedColleges', { categoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    clgpopular(courseId) {
        return this.httpClient.post(this.baseUrl + 'college/getPopColleges', { courseId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    placementclg(categoryId) {
        return this.httpClient.post(this.baseUrl + 'college/getCollegePlacement', { categoryId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    clgbylocatio(loc, course) {
        return this.httpClient.post(this.baseUrl + 'college/getClgListByLoc', { loc, course }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    clgbyrating(courseId, maxRate, minRate) {
        return this.httpClient.post(this.baseUrl + 'college/getRatingColleges', { courseId, maxRate, minRate }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    feesbyclg(courseId, min_fees, max_fees) {
        return this.httpClient.post(this.baseUrl + 'college/getClgListByFees', { courseId, min_fees, max_fees }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getinfrarating(collegeId) {
        return this.httpClient.post(this.baseUrl + 'Review/getInfrastructureRating', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getscolershipinfo(collegeId) {
        return this.httpClient.post(this.baseUrl + 'college/getScholarShipOfClg', { collegeId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    generateLink_req(data) {
        return this.httpClient.post('https://campusapi.ohcampus.com/web/Common/generateLink_req', data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getfooterNotification() {
        return this.httpClient.post('https://campusapi.ohcampus.com/web/Common/getfooterNotification', this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getcertification(courseCatId) {
        return this.httpClient.post(this.baseUrl + 'Certification/getlistofCertificate', { courseCatId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    certificatedtls(certificateId) {
        return this.httpClient.post(this.baseUrl + 'Certification/getCertificationDatabyId', { certificateId }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    specilization() {
        return this.httpClient.post(this.baseUrl + 'common/getTrendingSpecilization', {}, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    addmisiondatepdf(collegeId, sub_category) {
        return this.httpClient.post(this.baseUrl + 'college/AdmissionProcessImportantDatesPDF', { collegeId, sub_category }, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getQue_PaperByExamId(data) {
        return this.httpClient.post(this.baseUrl + 'exam/getQue_PaperByExamId', data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getTrendingSpecilizationBySubCatId(data) {
        return this.httpClient.post(this.baseUrl + 'common/getTrendingSpecilizationBySubCatId', data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCollegeAdmissionProcess(data) {
        return this.httpClient.post(this.baseUrl + 'College/getCollegeAdmissionProcess', data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getCollegeFacilitiesByID(data) {
        return this.httpClient.post(this.baseUrl + 'College/getCollegeFacilitiesByID', data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    getNotificationData(data) {
        return this.httpClient.post(this.baseUrl + 'Common/getNotificationData', data, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// export const environment = {
//   production: false,
//   firebaseConfig: {
//     apiKey: 'AIzaSyBiAmt0fhizauTdhr6VV4nGfmf0uIWbaaI',
//     authDomain: 'localhost',
//     projectId: 'ohcampus-93e77',
//     storageBucket: 'ohcampus-93e77.appspot.com',
//     messagingSenderId: '774741377062',
//     appId: '1:774741377062:android:e1d9b6dffc2f34911fe6e7',
//     measurementId: 'YOUR_MEASUREMENT_ID'
//   },
// };
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		38359,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		44355,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		91135,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-7608c8",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-7608c8",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		1349,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		37915,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menulist ion-list {\n  padding: 0 !important;\n}\n.menulist ion-item {\n  font-weight: 500;\n  font-weight: 400;\n  font-size: 15px;\n  --min-height: 0;\n  margin-bottom: 12px;\n}\n.submenu p {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 15px;\n}\n.submenu ion-icon {\n  margin-right: 12px;\n  font-size: 16px;\n}\n.ion-margin-left {\n  margin-left: 1rem !important;\n}\n.footer {\n  background: #ecdef9;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n}\n.menus {\n  padding: 0px 14px 0px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.menus p {\n  margin: 0;\n}\n.menus span {\n  display: block;\n  max-height: 30px;\n}\n.menus ion-label {\n  margin: 0 !important;\n}\n.ch-menus ul {\n  margin: 0;\n  padding-left: 2em;\n}\n.ch-menus ul li::marker {\n  color: #0083dc;\n}\n.seteditspan {\n  color: blue;\n  font-size: 16px;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHFCQUFBO0FBREo7QUFJRTtFQUdFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSko7QUFTRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBTko7QUFVQTtFQUNFLDRCQUFBO0FBUEY7QUFXQTtFQUNFLG1CQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQVJKO0FBV0E7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FBUkY7QUFTRTtFQUFFLFNBQUE7QUFOSjtBQU9FO0VBQ0UsY0FBQTtFQUFjLGdCQUFBO0FBSmxCO0FBTUU7RUFDRSxvQkFBQTtBQUpKO0FBU0U7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQU9JO0VBQ0UsY0FBQTtBQUxOO0FBV0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxuLm1lbnVsaXN0e1xyXG4gIGlvbi1saXN0e1xyXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC8vIC0tYm9yZGVyLWNvbG9yOiAjYmRkM2YyO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC0tbWluLWhlaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VibWVudXtcclxuICBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLWxlZnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjM2LCAyMjIsIDI0OSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWVudXN7XHJcbiAgcGFkZGluZzogMHB4IDE0cHggMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHB7bWFyZ2luOiAwO31cclxuICBzcGFue1xyXG4gICAgZGlzcGxheTpibG9jazttYXgtaGVpZ2h0OjMwcHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIG1hcmdpbjowIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jaC1tZW51c3tcclxuICB1bHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgbGk6Om1hcmtlciB7XHJcbiAgICAgIGNvbG9yOiAjMDA4M2RjO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zZXRlZGl0c3BhbntcclxuICBjb2xvcjogYmx1ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-app>\n\t<ion-menu side=\"start\" content-id=\"main-content\">\n\t\t<ion-header class=\"iosborderno\">\n\t\t\t<ion-toolbar class=\"userinfo\" style=\"--background:#f4faff\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"12\" class=\"selfcenter logoset\">\n\t\t\t\t\t\t<div class=\"ion-padding\">\n\t\t\t\t\t\t\t<img src=\"../assets/icon/logo_15.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\n\t\t\t\t</ion-row>\n\t\t\t</ion-toolbar>\n\t\t</ion-header>\n\t\t<ion-content style=\"position: relative;\">\n\n\t\t\t\n\n\t\t\t<div class=\"menulist\">\n\t\t\t\t\n\t\t\t\t<ion-list *ngIf=\"menu\" style=\"margin-top: 1rem;\">\n\t\t\t\t\t<div class=\"menus\" *ngFor=\"let item of menu.Data let i=index;\">\n\t\t\t\t\t\t<div button (click)=\"toggleVisibility(item.fieldName)\">\n\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle=\"display:flex ;justify-content:space-between;width: 100%;align-items: center;margin:7px 0rem\">\n\t\t\t\t\t\t\t\t<p>{{item.fieldName}}</p>\n\t\t\t\t\t\t\t\t<ion-icon name=\"add-outline\" slot=\"end\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"!isContentVisible[item.fieldName] && isAccordion\"></ion-icon>\n\t\t\t\t\t\t\t\t<ion-icon name=\"remove-outline\" slot=\"end\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"isContentVisible[item.fieldName] && isAccordion\">\n\t\t\t\t\t\t\t\t</ion-icon>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngFor=\"let item1 of item.Child let j=index; \">\n\t\t\t\t\t\t\t\t<ion-item [routerLink]=\"item1.path\" lines=\"none\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"isContentVisible[item.fieldName] || !isAccordion\">\n\t\t\t\t\t\t\t\t\t<ion-list class=\"ch-menus\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li><ion-label (click)=\"closeMenu()\">{{item1.subFieldName}}</ion-label></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</ion-list>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ion-list>\n\t\t\t</div>\n\n\t\t\t\n\t\t</ion-content>\n\t</ion-menu>\n\t<ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map