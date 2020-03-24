import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableRxjsComponent } from './observable-rxjs.component';

describe('ObservableRxjsComponent', () => {
  let component: ObservableRxjsComponent;
  let fixture: ComponentFixture<ObservableRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
