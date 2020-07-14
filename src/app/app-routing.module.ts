import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HideMasterComponent} from './components/hike-master/hide-master.component';


const routes: Routes = [
  {path: 'hide-master', component: HideMasterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'hide-master'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
