import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClgdetailsPage } from './clgdetails.page';
import { CoursesfeesPage } from './coursesfees/coursesfees.page';
import { ReviewsPage } from './reviews/reviews.page';
import { AdmissionsPage } from './admissions/admissions.page';
import { PlacementsPage } from './placements/placements.page';
import { CutoffsPage } from './cutoffs/cutoffs.page';
import { InfrastructurePage } from './infrastructure/infrastructure.page';
import { ComparePage } from './compare/compare.page';
import { ScolarshipPage } from './scolarship/scolarship.page';
import { NewsPage } from './news/news.page';
import { QuestionansPage } from './questionans/questionans.page';
import { CoursinfoPage } from './coursinfo/coursinfo.page';




export const routes: Routes = [
  {
    path: '',
    component: ClgdetailsPage,

    children: [

      {
        path: '',
        component: ClgdetailsPage
      },

      {
        path: '',
        component: CoursesfeesPage
      },

      {
        path: '',
        component: ReviewsPage
    },
    {
      path: '',
      component: AdmissionsPage
    },

    {
      path: '',
      component: PlacementsPage
    },

    {
      path: '',
      component: CutoffsPage
    },
    {
      path: '',
      component: InfrastructurePage
    },


    {
      path: '',
      component: ComparePage
    },

    {
      path: '',
      component: ScolarshipPage
    },

    {
      path: '',
      component: NewsPage
    },

    {
      path: '',
      component: QuestionansPage
    },
    {
      path: 'CoursinfoPage/:courseid',
        component: CoursinfoPage
    },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class ClgdetailsPageRoutingModule {}









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
