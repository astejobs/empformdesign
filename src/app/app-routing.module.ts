import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { EmpListComponent } from './emp-list/emp-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'}, 
  {path:'form',component:CandidateComponent},
  {path:'employeeList',component:EmpListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
