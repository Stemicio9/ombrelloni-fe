import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input()
  min: string | number | null | undefined ;

  inputs: number[] = [0,0,0];

  constructor() { }

  ngOnInit(): void {
  }


  add(index: number){
    if(this.inputs[index] < 9 ){
    this.inputs[index]=this.inputs[index]+1;
    }
  }


  remove(index: number){
    if(this.inputs[index] > 0 ){
      this.inputs[index]=this.inputs[index]-1;
    }


  }
}
