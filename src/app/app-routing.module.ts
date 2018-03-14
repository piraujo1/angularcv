import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ArhsComponent } from './arhs/arhs.component';
import {SandboxComponent} from "./sandbox/sandbox.component";

const routes: Routes = [
  {
    path:'',
    component: CvComponent
  },{
    path:'arhs',
    component: ArhsComponent
  },{
    path:'sandbox',
    component: SandboxComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
