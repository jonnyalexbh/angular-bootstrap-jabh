import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  message: string;

  parentMessage = 'message from parent';
  message2Child: string;
  productsChild: any[];

  constructor() { }

  ngOnInit() {
  }

  receiveMessage1Child($event) {
    this.message = $event;
  }
}
