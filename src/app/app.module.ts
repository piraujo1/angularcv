import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ArhsComponent } from './arhs/arhs.component';
import {ChartsModule} from "ng2-charts";
import {SkillsService} from "./cv/skills.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpHandler} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ArhsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [SkillsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
