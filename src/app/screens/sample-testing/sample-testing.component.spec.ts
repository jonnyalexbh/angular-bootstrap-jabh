import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestingComponent } from './sample-testing.component';

describe('SampleTestingComponent', () => {
  let component: SampleTestingComponent;
  let fixture: ComponentFixture<SampleTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTestingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
