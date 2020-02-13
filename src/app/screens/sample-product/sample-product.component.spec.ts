import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProductComponent } from './sample-product.component';

describe('SampleProductComponent', () => {
  let component: SampleProductComponent;
  let fixture: ComponentFixture<SampleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
