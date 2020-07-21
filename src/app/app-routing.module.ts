import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {FrontpageComponent} from './components/frontpage/frontpage.component';
import {TourViewComponent} from "./components/tour-view/tour-view.component";
import {AdminComponent} from "./components/admin/admin.component";

import {TourListComponent} from "./components/tour-list/tour-list.component";


import {UserPageComponent} from './components/user-page/user-page.component';



const routes: Routes = [
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'tour-view', component: TourViewComponent},
  {path: 'tour-list', component: TourListComponent},
  {path: 'user', component: UserPageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'frontpage'}];

  // {path: 'tour-view', component: TourViewComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'tour-view'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
