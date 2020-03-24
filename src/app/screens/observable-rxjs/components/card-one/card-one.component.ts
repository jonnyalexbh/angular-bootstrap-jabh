import { Component, OnInit, OnDestroy } from '@angular/core';
import { SampleTestService } from 'src/app/services/sample-test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class CardOneComponent implements OnInit, OnDestroy {

  currentValue: number;
  subscriptions = new Subscription();

  constructor(private sampleTestService: SampleTestService) { }

  ngOnInit() {
    const currentTurn = this.sampleTestService.notify.subscribe(turn => this.currentValue = turn);
    this.subscriptions.add(currentTurn);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - CardOneComponent');
    this.subscriptions.unsubscribe();
  }

}
