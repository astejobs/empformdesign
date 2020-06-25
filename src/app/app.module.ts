import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    HeaderComponent
  ], 
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    StarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
