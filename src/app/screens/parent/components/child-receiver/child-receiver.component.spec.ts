import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReceiverComponent } from './child-receiver.component';

describe('ChildReceiverComponent', () => {
  let component: ChildReceiverComponent;
  let fixture: ComponentFixture<ChildReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
