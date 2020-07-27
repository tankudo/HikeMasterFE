import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {SignupComponent} from './components/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TourListComponent} from './components/tour-list/tour-list.component';
import {FrontpageComponent} from './components/frontpage/frontpage.component';
import {FooterComponent} from './components/footer/footer.component';
import {ModifyComponent} from './components/modify/modify.component';
import {DeleteComponent} from './components/delete/delete.component';
import {TourViewComponent} from './components/tour-view/tour-view.component';
import {AdminUsersComponent} from './components/admin-users/admin-users.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {HttpClientModule} from "@angular/common/http";
import { TourFormComponent } from './components/tour-form/tour-form.component';


//import { HttpClientModule } from '@angular/common/http';
import { AdminImageComponent } from './components/admin-image/admin-image.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyMapComponent } from './components/my-map/my-map.component';
import { AgmCoreModule } from '@agm/core';
import { CommentComponent } from './components/comment/comment.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NewTourComponent } from './components/new-tour/new-tour.component';
import { NewTourFormComponent } from './components/new-tour-form/new-tour-form.component';
import {environment} from "../environments/environment.prod";
import { ContactComponent } from './components/contact/contact.component';
import { NewTourKmlFormComponent } from './components/new-tour-kml-form/new-tour-kml-form.component';



@NgModule({
  declarations: [
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
    AdminUsersComponent,
    ConfirmationComponent,
    TourFormComponent,
    AdminImageComponent,
    UserPageComponent,
    ProfileComponent,
    MyMapComponent,
    AppComponent,
    NewTourComponent,
    NewTourFormComponent,

    AppComponent,
    CommentComponent,
    ContactComponent,
    NewTourKmlFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
      libraries: ['places']
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
