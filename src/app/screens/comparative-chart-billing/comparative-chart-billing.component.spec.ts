import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeChartBillingComponent } from './comparative-chart-billing.component';

describe('ComparativeChartBillingComponent', () => {
  let component: ComparativeChartBillingComponent;
  let fixture: ComponentFixture<ComparativeChartBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComparativeChartBillingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeChartBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
