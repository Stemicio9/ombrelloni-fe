import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-umbrella-check',
  templateUrl: './umbrella-check.component.html',
  styleUrls: ['./umbrella-check.component.scss']

})
export class UmbrellaCheckComponent implements OnInit {

  public model: any;

	formatter = (result: string) => result.toUpperCase();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term === '' ? [] : this.umbrellaList.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

  umbrellaList = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10',
    'A11',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
