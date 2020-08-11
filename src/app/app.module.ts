import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { AssessmentComponent } from './assessment/assessment.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { MatMenuModule } from '@angular/material/menu'
import { AuthInterceptor } from './auth-interceptor.interceptor';
import { ReviewComponent } from './review/review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HeaderComponent,
    StarRatingComponent,
    LoginDialogComponent, 
    AssessmentComponent,
    EmpListComponent,
    ReviewComponent,
    DashboardComponent
  ], 
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    MatMenuModule

  ],
  providers: [ 
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  ], 
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})

export class AppModule { }
