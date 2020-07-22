import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontpageComponent} from './components/frontpage/frontpage.component';
import {TourListComponent} from './components/tour-list/tour-list.component';
import {AdminComponent} from './components/admin/admin.component';
import {TourViewComponent} from './components/tour-view/tour-view.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {AdminImageComponent} from './components/admin-image/admin-image.component';


import {ProfileComponent} from './components/profile/profile.component';
import {MyMapComponent} from './components/my-map/my-map.component';

const routes: Routes = [
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-image', component: AdminImageComponent},
  {path: 'tour-view', component: TourViewComponent},
  {path: 'tour-list', component: TourListComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'my-maps', component: MyMapComponent},
  {path: '', pathMatch: 'full', redirectTo: 'frontpage'}];

//  {path: 'tour-view', component: TourViewComponent},
//  {path: 'tour-list', component: TourListComponent},
//  {path: 'user', component: UserPageComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
