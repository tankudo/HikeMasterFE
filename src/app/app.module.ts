import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {SignupComponent} from './components/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TourListComponent} from './components/tour-list/tour-list.component';
import {FrontpageComponent} from './components/frontpage/frontpage.component';
import {FooterComponent} from './components/footer/footer.component';
import {ModifyComponent} from './components/modify/modify.component';
import {DeleteComponent} from './components/delete/delete.component';
import {TourViewComponent} from './components/tour-view/tour-view.component';
import {AdminComponent} from './components/admin/admin.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TourListComponent,
    FrontpageComponent,
    FooterComponent,
    SignupComponent,
    TourViewComponent,
    SignupComponent,
    ModifyComponent,
    DeleteComponent,
    AdminComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
