import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input('showHeader') showHeader = false;
  @Input('pageTitle') pageTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
