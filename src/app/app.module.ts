import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NgbActiveModal, NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/header/header.component';
import {SignupComponent} from './components/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TourListComponent} from './components/tour-list/tour-list.component';
import {FrontpageComponent} from './components/frontpage/frontpage.component';
import {FooterComponent} from './components/footer/footer.component';
import {ModifyComponent} from './components/modify/modify.component';
import {DeleteComponent} from './components/delete/delete.component';
import {TourViewComponent} from './components/tour-view/tour-view.component';
import {AdminToursComponent} from './components/admin-tours/admin-tours.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {HttpClientModule} from '@angular/common/http';
import { TourFormComponent } from './components/tour-form/tour-form.component';

import { AdminImageComponent } from './components/admin-image/admin-image.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyMapComponent } from './components/my-map/my-map.component';
import { AgmCoreModule } from '@agm/core';
import { CommentComponent } from './components/comment/comment.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NewTourComponent } from './components/new-tour/new-tour.component';
import { NewTourFormComponent } from './components/new-tour-form/new-tour-form.component';
import {environment} from '../environments/environment.prod';
import { ContactComponent } from './components/contact/contact.component';
import { NewTourKmlFormComponent } from './components/new-tour-kml-form/new-tour-kml-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NewTourImgFormComponent } from './components/new-tour-img-form/new-tour-img-form.component';
import { DeleteModalComponent } from './components/comment/delete-modal/delete-modal.component';
import { ModifyModalComponent } from './components/comment/modify-modal/modify-modal.component';
import { ContactModalComponent } from './components/contact/contact-modal/contact-modal.component';
import { TourListItemComponent } from './components/tour-list/tour-list-item/tour-list-item.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';



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
    AdminToursComponent,
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
    NewTourKmlFormComponent,
    ContactFormComponent,
    NewTourImgFormComponent,
    DeleteModalComponent,
    ModifyModalComponent,
    ContactModalComponent,
    TourListItemComponent,
    StarRatingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9qxjDL9R2DcWwgFOY65S5vhQrTDvaEIM',
      libraries: ['places']
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
