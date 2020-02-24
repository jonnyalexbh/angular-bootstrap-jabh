import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmiterComponent } from './child-emiter.component';

describe('ChildEmiterComponent', () => {
  let component: ChildEmiterComponent;
  let fixture: ComponentFixture<ChildEmiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEmiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
