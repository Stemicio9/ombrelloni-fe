import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UmbrellaCheckComponent } from './components/umbrella-check/umbrella-check.component';
import { NgbAccordionModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuErrorComponent } from './components/menu-error/menu-error.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UmbrellaModalComponent } from './components/modal/umbrella-modal/umbrella-modal.component';
import { UmbrellaChooseComponent } from './components/umbrella-choose/umbrella-choose.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    UmbrellaCheckComponent,
    MenuErrorComponent,
    MenuListComponent,
    HeaderComponent,
    CartComponent,
    CheckoutComponent,
    UmbrellaChooseComponent,
    UmbrellaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbAccordionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
