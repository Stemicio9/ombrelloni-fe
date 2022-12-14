import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/entities/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  dpNumber: number[] = [1,2,3,4,5,6]

  choose1 = 0;

  totale=23;

  orderList:Order[] = [
    new Order('assets/carbonara-image.png','Mezze maniche alla Carbonara',2,18,'assets/trash-icon.png'),
    new Order('assets/spaghetti-pomodoro.png','Spaghetti al pomodoro',1,5,'assets/trash-icon.png')
  ]


  constructor() { }

  ngOnInit(): void {
  }

  change(number:number, index: number){
    this.orderList[index].quantity = number
  }

  formatPrice(p: number){
    return p.toFixed(2).toString().replace('.',',') + '€'
  }



}
