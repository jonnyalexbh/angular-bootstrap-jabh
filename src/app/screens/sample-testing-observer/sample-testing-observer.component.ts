import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-testing-observer',
  templateUrl: './sample-testing-observer.component.html',
  styleUrls: ['./sample-testing-observer.component.scss']
})
export class SampleTestingObserverComponent implements OnInit {

  periods: Array<string> = ['MES', 'TRIMESTRE', 'SEMESTRE', 'AÑO'];
  periodIndex: number;

  constructor() {
    this.periodIndex = 3;
  }

  ngOnInit() {
  }

  changePeriod(index) {
    this.periodIndex = index;
    console.log(this.periodIndex);
  }

}
