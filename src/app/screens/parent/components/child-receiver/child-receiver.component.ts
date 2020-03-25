import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child-receiver',
  templateUrl: './child-receiver.component.html',
  styleUrls: ['./child-receiver.component.scss']
})
export class ChildReceiverComponent implements OnInit, AfterViewInit {
  @ViewChild('txtProgress') textProgress: ElementRef;
  @ViewChild('greeting') greeting: ElementRef;
  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.greeting.nativeElement.innerHTML = 'hello world with view child';
    console.log('ngAfterViewInit', this.textProgress);
    this.textProgress.nativeElement.value = 890;
    this.textProgress.nativeElement.focus();
  }

}
