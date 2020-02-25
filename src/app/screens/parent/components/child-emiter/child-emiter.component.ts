import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-emiter',
  templateUrl: './child-emiter.component.html',
  styleUrls: ['./child-emiter.component.scss']
})
export class ChildEmiterComponent implements OnInit {

  message1: string = 'message1 from child';
  message2: string = 'message2 from child';

  message3: any[] = [
    {
      id: 1,
      title: 'Camiseta',
      price: 5500
    },
    {
      id: 2,
      title: 'Hoodie',
      price: 8200,
    },
    {
      id: 3,
      title: 'Mug',
      price: 4000,
    },
  ];

  @Output() message1Child: EventEmitter<any> = new EventEmitter();
  @Output() message2Child = new EventEmitter<string>();
  @Output() message3Child = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.message1Child.emit(this.message1);
    this.message2Child.emit(this.message2);
    this.message3Child.emit(this.message3);
  }

}
