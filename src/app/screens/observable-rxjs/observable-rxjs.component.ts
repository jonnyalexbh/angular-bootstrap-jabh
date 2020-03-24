import { SampleTestService } from './../../services/sample-test.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-rxjs',
  templateUrl: './observable-rxjs.component.html',
  styleUrls: ['./observable-rxjs.component.scss']
})
export class ObservableRxjsComponent implements OnInit, OnDestroy {
  currentValue: number;
  subscriptions = new Subscription();

  constructor(
    private sampleTestService: SampleTestService
  ) { }

  ngOnInit() {
    const currentTurn = this.sampleTestService.notify.subscribe(turn => this.currentValue = turn);
    this.subscriptions.add(currentTurn);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - ObservableRxjsComponent');
    this.subscriptions.unsubscribe();
  }

  increment() {
    const newVal = ++this.currentValue;
    this.sampleTestService.increment(newVal);
  }

}
