import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ArhsComponent } from './arhs/arhs.component';

const routes: Routes = [
  {
    path:'',
    component: CvComponent
  },{
    path:'arhs',
    component: ArhsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
