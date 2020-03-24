import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleTestService {
  private turn = new BehaviorSubject<number>(0);
  notify = this.turn.asObservable();

  constructor() { }

  increment(newValue) {
    this.turn.next(newValue);
  }
}
