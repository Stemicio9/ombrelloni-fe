import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('pageTitle') pageTitle = '';
  @Input('showButton') showButton = false;

  constructor( private location: Location) { }

  ngOnInit(): void {
  }


  back(){
    this.location.back();
  }
}
