import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ArhsComponent } from './arhs/arhs.component';
import {ChartsModule} from "ng2-charts";
import {SkillsService} from "./cv/skills.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SandboxComponent } from './sandbox/sandbox.component';
import { BlockchainComponent } from './blockchain/blockchain.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ArhsComponent,
    SandboxComponent,
    BlockchainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SkillsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
