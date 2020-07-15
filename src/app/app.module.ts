import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModifyComponent } from './components/header/modify/modify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourListComponent,
    FrontpageComponent,
    FooterComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
