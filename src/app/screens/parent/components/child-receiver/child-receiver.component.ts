import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-receiver',
  templateUrl: './child-receiver.component.html',
  styleUrls: ['./child-receiver.component.scss']
})
export class ChildReceiverComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
