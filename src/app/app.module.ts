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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TourListComponent,
    FrontpageComponent,
    FooterComponent,

    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
