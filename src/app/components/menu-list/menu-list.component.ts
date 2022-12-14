import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Order } from 'src/app/entities/order';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {



  totale=23.00;

  orderList:Order[] = [
    new Order('assets/carbonara-image.png','Mezze maniche alla Carbonara',0,9,'assets/trash-icon.png','Tuorli, guanciale, pecorino, pepe'),
    new Order('assets/spaghetti-pomodoro.png','Spaghetti al pomodoro',0,5,'assets/trash-icon.png','Pomodoro, aglio, basilico')
  ]
  constructor() { }

  ngOnInit(): void {
  }


  add(element: Order){
    if(element.quantity < 9 ){
     element.quantity ++;
    }
  }


  remove(element: Order){
    if(element.quantity > 0 ){
      element.quantity --;
     }
  }


  formatPrice(p: number){
    return p.toFixed(2).toString().replace('.',',') + '€'
  }
}
