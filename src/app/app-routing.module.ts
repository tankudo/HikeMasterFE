import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontpageComponent} from './components/frontpage/frontpage.component';
import {TourViewComponent} from "./components/tour-view/tour-view.component";
import {AdminComponent} from "./components/admin/admin.component";
import {TourListComponent} from "./components/tour-list/tour-list.component";



const routes: Routes = [
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'tour-list', component: TourListComponent},
  /*{path: '', pathMatch: 'full', redirectTo: 'tour-list'},*/
  {path: 'admin', component: AdminComponent},
  {path: '', pathMatch: 'full', redirectTo: 'frontpage'}];

 // {path: 'tour-view', component: TourViewComponent},
 // {path: '', pathMatch: 'full', redirectTo: 'tour-view'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
