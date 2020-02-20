import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBillingChartComponent } from './my-billing-chart.component';

describe('MyBillingChartComponent', () => {
  let component: MyBillingChartComponent;
  let fixture: ComponentFixture<MyBillingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBillingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBillingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
