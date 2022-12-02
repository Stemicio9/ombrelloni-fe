import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { MenuErrorComponent } from './components/menu-error/menu-error.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { UmbrellaCheckComponent } from './components/umbrella-check/umbrella-check.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'umbrellacheck', component: UmbrellaCheckComponent },
  { path: 'menuerror', component: MenuErrorComponent },
  { path: 'menulist', component: MenuListComponent, data: {title: 'Prenota il tuo menù'} },
  { path: 'cart', component: CartComponent, data: {title: 'Rivedi il tuo ordine'} },
  { path: 'checkout', component: CheckoutComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
