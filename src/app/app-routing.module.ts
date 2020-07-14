import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HikeMasterComponent} from './components/hike-master/hike-master.component';


const routes: Routes = [
  {path: 'hike-master', component: HikeMasterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'hike-master'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
