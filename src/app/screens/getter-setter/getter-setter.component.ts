import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getter-setter',
  templateUrl: './getter-setter.component.html',
  styleUrls: ['./getter-setter.component.scss']
})
export class GetterSetterComponent implements OnInit {

  periods: any[] = ['MES', 'TRIMESTRE', 'SEMESTRE', 'AÑO'];
  periodIndex: number;
  age: number = 26;

  constructor() {
    this.periodIndex = 3;
  }

  ngOnInit() {
  }

  changePeriod(index) {
    this.periodIndex = index;
  }

}
