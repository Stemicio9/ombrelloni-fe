import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-umbrella-modal',
  templateUrl: './umbrella-modal.component.html',
  styleUrls: ['./umbrella-modal.component.scss']
})
export class UmbrellaModalComponent implements OnInit {

  @ViewChild('closebutton') closebutton:any;

  inputs: number[] = [0,0];

  dpNumber: number[] = [1,2,3,4,5,6]

  chooseSdraio = 0;
  chooseLettini = 0;


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


  changeLettini(number:number){
    this.chooseLettini = number
  }

  changeSdraio(number:number){
    this.chooseSdraio = number
  }

}
