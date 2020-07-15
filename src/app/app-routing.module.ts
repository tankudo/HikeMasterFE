import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontpageComponent} from './components/frontpage/frontpage.component';



const routes: Routes = [
  {path: 'app-frontpage', component: FrontpageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'app-frontpage'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
