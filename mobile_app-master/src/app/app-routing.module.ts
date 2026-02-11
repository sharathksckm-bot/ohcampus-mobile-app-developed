import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
    // path: '',
    // loadChildren: () => import('./pages/welcomepage/welcomepage.module').then( m => m.WelcomepagePageModule)
  // },
{ path: '',
redirectTo: '/welcomepage',
 pathMatch: 'full' ,
},
  {
    path: 'welcomepage',
    loadChildren: () => import('./pages/welcomepage/welcomepage.module').then( m => m.WelcomepagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
 
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },

  {
    path: 'preferedcourses',
    loadChildren: () => import('./pages/preferedcourses/preferedcourses.module').then( m => m.PreferedcoursesPageModule)
  },
  {
    path: 'chooselevel/:id',
    loadChildren: () => import('./pages/chooselevel/chooselevel.module').then( m => m.ChooselevelPageModule)
  },
  {
    path: 'choosecourse/:id/:Lid',
    loadChildren: () => import('./pages/choosecourse/choosecourse.module').then( m => m.ChoosecoursePageModule)
  },
  {
    path: 'citylist',
    loadChildren: () => import('./pages/citylist/citylist.module').then( m => m.CitylistPageModule)
  },
  {
    path: 'uprofile',
    loadChildren: () => import('./pages/uprofile/uprofile.module').then( m => m.UprofilePageModule)
  },
  {
    path: 'clglist',
    loadChildren: () => import('./pages/clglist/clglist.module').then( m => m.ClglistPageModule)
  },
  {
    path: 'clglist/:locId/clgbyloc',
    loadChildren: () => import('./pages/clglist/clglist.module').then( m => m.ClglistPageModule)
  },
  {
    path: 'gmailform',
    loadChildren: () => import('./pages/gmailform/gmailform.module').then( m => m.GmailformPageModule)
  },
  {
    path: 'populerclg',
    loadChildren: () => import('./pages/populerclg/populerclg.module').then( m => m.PopulerclgPageModule)
  },
  {
    path: 'toprankclg',
    loadChildren: () => import('./pages/toprankclg/toprankclg.module').then( m => m.ToprankclgPageModule)
  },
 

  {
    path: 'enquiry',
    loadChildren: () => import('./pages/enquiry/enquiry.module').then( m => m.EnquiryPageModule)
  },
  {
    path: 'specialiclg',
    loadChildren: () => import('./pages/specialiclg/specialiclg.module').then( m => m.SpecialiclgPageModule)
  },
  
   
  {
    path: 'clgdetails/:collegeid',
    loadChildren: () => import('./pages/clgdetails/clgdetails.module').then( m => m.ClgdetailsPageModule)
  },

  {
    path: 'clgcompare/:collegeId',
    loadChildren: () => import('./pages/clgcompare/clgcompare.module').then( m => m.ClgcomparePageModule)
  },

  {
    path: 'clgcompare',
    loadChildren: () => import('./pages/clgcompare/clgcompare.module').then( m => m.ClgcomparePageModule)
  },


  {
    path: 'clgcompare/:collegeId/:collegeId2',
    loadChildren: () => import('./pages/clgcompare/clgcompare.module').then( m => m.ClgcomparePageModule)
  },


  {
    path: 'examdetails/:examId',
    loadChildren: () => import('./pages/examdetails/examdetails.module').then( m => m.ExamdetailsPageModule)
  },
  {
    path: 'articledetails/:blogId',
    loadChildren: () => import('./pages/articledetails/articledetails.module').then( m => m.ArticledetailsPageModule)
  },
  {
    path: 'eventdetails/:event_id',
    loadChildren: () => import('./pages/eventdetails/eventdetails.module').then( m => m.EventdetailsPageModule)
  },
  {
    path: 'certificatetdetails/:id',
    loadChildren: () => import('./pages/certificatetdetails/certificatetdetails.module').then( m => m.CertificatetdetailsPageModule)
  },
  {
    path: 'termsncondition',
    loadChildren: () => import('./pages/termsncondition/termsncondition.module').then( m => m.TermsnconditionPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'whoweare',
    loadChildren: () => import('./pages/whoweare/whoweare.module').then( m => m.WhowearePageModule)
  },
  {
    path: 'coursewiseqna',
    loadChildren: () => import('./pages/coursewiseqna/coursewiseqna.module').then( m => m.CoursewiseqnaPageModule)
  },
  {
    path: 'coursewisearticles',
    loadChildren: () => import('./pages/coursewisearticles/coursewisearticles.module').then( m => m.CoursewisearticlesPageModule)
  },
  {
    path: 'coursewiseexam',
    loadChildren: () => import('./pages/coursewiseexam/coursewiseexam.module').then( m => m.CoursewiseexamPageModule)
  },
  {
    path: 'articlcatlist',
    loadChildren: () => import('./pages/articlcatlist/articlcatlist.module').then( m => m.ArticlcatlistPageModule)
  },

  // {
  //   path: 'articlcatlist',
  //   loadChildren: () => import('./pages/articlcatlist/articlcatlist.module').then( m => m.ArticlcatlistPageModule)
  // },

  {
    path: 'coursewiseexamdetails/:id',
    loadChildren: () => import('./pages/coursewiseexamdetails/coursewiseexamdetails.module').then( m => m.CoursewiseexamdetailsPageModule)
  },
  {
    path: 'specourselist',
    loadChildren: () => import('./pages/specourselist/specourselist.module').then( m => m.SpecourselistPageModule)
  },
  {
    path: 'specourselist/:trendingspec',
    loadChildren: () => import('./pages/specourselist/specourselist.module').then( m => m.SpecourselistPageModule)
  },
  {
    path: 'specoursebyclglts/:id',
    loadChildren: () => import('./pages/specoursebyclglts/specoursebyclglts.module').then( m => m.SpecoursebyclgltsPageModule)
  },
  {
    path: 'popuplogsign',
    loadChildren: () => import('./pages/popuplogsign/popuplogsign.module').then( m => m.PopuplogsignPageModule)
  },
  {
    path: 'predictadmission',
    loadChildren: () => import('./pages/predictadmission/predictadmission.module').then( m => m.PredictadmissionPageModule)
  },
  {
    path: 'gloginform',
    loadChildren: () => import('./pages/gloginform/gloginform.module').then( m => m.GloginformPageModule)
  },
  {
    path: 'placemntdetails/:id',
    loadChildren: () => import('./pages/placemntdetails/placemntdetails.module').then( m => m.PlacemntdetailsPageModule)
  },
  {
    path: 'careerdetails/:id',
    loadChildren: () => import('./pages/careerdetails/careerdetails.module').then( m => m.CareerdetailsPageModule)
  },
  {
    path: 'trendcrsdetails/:id',
    loadChildren: () => import('./pages/trendcrsdetails/trendcrsdetails.module').then( m => m.TrendcrsdetailsPageModule)
  },
  {
    path: 'editpreferences',
    loadChildren: () => import('./pages/editpreferences/editpreferences.module').then( m => m.EditpreferencesPageModule)
  },
  {
    path: 'clgdetails',
    loadChildren: () => import('./pages/clgdetails/clgdetails-routing.module').then( m => m.ClgdetailsPageRoutingModule)
  },
  {
    path: 'eventlist',
    loadChildren: () => import('./pages/eventlist/eventlist.module').then( m => m.EventlistPageModule)
  },
  {
    path: 'statelist',
    loadChildren: () => import('./pages/statelist/statelist.module').then( m => m.StatelistPageModule)
  },
  {
    path: 'editstate',
    loadChildren: () => import('./pages/editstate/editstate.module').then( m => m.EditstatePageModule)
  },
  {
    path: 'questionpaper',
    loadChildren: () => import('./pages/questionpaper/questionpaper.module').then( m => m.QuestionpaperPageModule)
  },
  {
    path: 'applyform',
    loadChildren: () => import('./pages/applyform/applyform.module').then( m => m.ApplyformPageModule)
  },
  {
    path: 'articalbycat/:blogId',
    loadChildren: () => import('./pages/articalbycat/articalbycat.module').then( m => m.ArticalbycatPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
