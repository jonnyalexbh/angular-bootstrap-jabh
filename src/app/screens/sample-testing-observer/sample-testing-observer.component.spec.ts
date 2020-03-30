import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestingObserverComponent } from './sample-testing-observer.component';

describe('SampleTestingObserverComponent', () => {
  let component: SampleTestingObserverComponent;
  let fixture: ComponentFixture<SampleTestingObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTestingObserverComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTestingObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
