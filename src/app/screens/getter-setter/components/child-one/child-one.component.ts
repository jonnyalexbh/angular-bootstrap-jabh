import { Component, OnInit, Input } from '@angular/core';

enum TimePeriods {
  Month = 0,
  Quarter = 1,
  Semestre = 2,
  Year = 3
}
@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  timePeriods = TimePeriods;
  @Input() age: number;

  localPeriodIndex: number;
  @Input() set periodIndexChild(value: number) {
    console.log('periodIndexChild', value);
    this.localPeriodIndex = value
    this.newValuePeriodIndex(value);
  }
  get getPeriodIndex() {
    return this.localPeriodIndex
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('*** ngOnChanges', this.age);
  }

  newValuePeriodIndex(index) {
    console.log('newValuePeriodIndex', index);
  }

}
