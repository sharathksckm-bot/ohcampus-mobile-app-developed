import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClgdetailsPageRoutingModule, routes } from './clgdetails-routing.module';

import { ClgdetailsPage } from './clgdetails.page';
import { CoursesfeesPage } from './coursesfees/coursesfees.page';
import { ReviewsPage } from './reviews/reviews.page';
import { AdmissionsPage } from './admissions/admissions.page';
import { PlacementsPage } from './placements/placements.page';
import { CutoffsPage } from './cutoffs/cutoffs.page';
import { InfrastructurePage } from './infrastructure/infrastructure.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ComparePage } from './compare/compare.page';
import { ScolarshipPage } from './scolarship/scolarship.page';
import { NewsPage } from './news/news.page';
import { QuestionansPage } from './questionans/questionans.page';
import { CoursinfoPage } from './coursinfo/coursinfo.page';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';




@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClgdetailsPageRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    OverlayModule,
    MatAutocompleteModule
  ],

  providers: [
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER
  ],

  declarations: [ClgdetailsPage, CoursesfeesPage, ReviewsPage, AdmissionsPage, PlacementsPage, CoursinfoPage,
    CutoffsPage, InfrastructurePage, ComparePage, ScolarshipPage, NewsPage, QuestionansPage]
})
export class ClgdetailsPageModule { }









// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { ClgdetailsPageRoutingModule } from './clgdetails-routing.module'; // Import only the Routing Module
// import { ClgdetailsPage } from './clgdetails.page';
// import { CoursesfeesPage } from './coursesfees/coursesfees.page';
// import { ReviewsPage } from './reviews/reviews.page';
// import { AdmissionsPage } from './admissions/admissions.page';
// import { PlacementsPage } from './placements/placements.page';
// import { CutoffsPage } from './cutoffs/cutoffs.page';
// import { InfrastructurePage } from './infrastructure/infrastructure.page';
// import { FacultyPage } from './faculty/faculty.page';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { ComparePage } from './compare/compare.page';
// import { ScolarshipPage } from './scolarship/scolarship.page';
// import { NewsPage } from './news/news.page';
// import { QuestionansPage } from './questionans/questionans.page';
// import { CoursinfoPage } from './coursinfo/coursinfo.page';
// import { RouterModule } from '@angular/router';
// import { OverlayModule } from '@angular/cdk/overlay';
// import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule,
//     IonicModule,
//     ClgdetailsPageRoutingModule, // Use only the Routing Module here
//     MatFormFieldModule,
//     MatIconModule,
//     MatInputModule,
//     MatButtonModule,
//     MatSelectModule,
//     MatProgressBarModule,
//     OverlayModule,
//   ],
//   providers: [
//     MAT_SELECT_SCROLL_STRATEGY_PROVIDER
//   ],
//   declarations: [
//     ClgdetailsPage,
//     CoursesfeesPage,
//     ReviewsPage,
//     AdmissionsPage,
//     PlacementsPage,
//     CutoffsPage,
//     InfrastructurePage,
//     FacultyPage,
//     ComparePage,
//     ScolarshipPage,
//     NewsPage,
//     QuestionansPage,
//     CoursinfoPage
//   ]
// })
// export class ClgdetailsPageModule {}
