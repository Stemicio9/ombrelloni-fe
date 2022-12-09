import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { MenuErrorComponent } from './components/menu-error/menu-error.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { UmbrellaCheckComponent } from './components/umbrella-check/umbrella-check.component';
import { UmbrellaChooseComponent } from './components/umbrella-choose/umbrella-choose.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent, data: {title: 'Seleziona una data'} },
  { path: 'umbrellacheck', component: UmbrellaCheckComponent, data: {title: 'Seleziona il tuo ombrellone'} },
  { path: 'menuerror', component: MenuErrorComponent },
  { path: 'menulist', component: MenuListComponent, data: {title: 'Prenota il tuo menù'} },
  { path: 'cart', component: CartComponent, data: {title: 'Rivedi il tuo ordine'} },
  { path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout'} },
  { path: 'umbrellachoose', component: UmbrellaChooseComponent, data: {title: 'Scegli il tuo ombrellone'} },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
