import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
/* import { StarRatingModule } from 'angular-star-rating'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HeaderComponent,
    StarRatingComponent
  ], 
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
