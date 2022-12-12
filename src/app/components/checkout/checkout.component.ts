import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/entities/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  totale=23.00;

  orderList:Order[] = [
    new Order('assets/carbonara-image.png','Mezze maniche alla Carbonara',2,18,'assets/trash-icon.png'),
    new Order('assets/spaghetti-pomodoro.png','Spaghetti al pomodoro',1,5,'assets/trash-icon.png')
  ]
  constructor() { }

  ngOnInit(): void {
  }
  formatPrice(p: number){
    return p.toFixed(2).toString().replace('.',',') + ' €'
  }

}
