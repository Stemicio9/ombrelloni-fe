import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totale=23.00;

  @Input('pageTitle') pageTitle = '';
  @Input('showCart') showCart = false;

  constructor( private location: Location) { }

  ngOnInit(): void {
  }


  back(){
    this.location.back();
  }

  formatPrice(p: number){
    return p.toFixed(2).toString().replace('.',',') + '€'
  }
}
