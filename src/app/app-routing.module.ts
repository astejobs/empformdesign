import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { ReviewComponent } from './review/review.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'candidate', pathMatch: 'full'}, 
  {path:'candidate',component:CandidateComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'assessment/:id',component:AssessmentComponent},
  {path:'review/:id',component:ReviewComponent},
  {path:'candidates',component:EmpListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
