import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SampleTestingComponent } from './sample-testing.component';

describe('SampleTestingComponent', () => {
  let component: SampleTestingComponent;
  let fixture: ComponentFixture<SampleTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTestingComponent],
      imports: [
        RouterTestingModule
      ],
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

  it(`should have as title 'sample test works!'`, () => {
    expect(component.title).toEqual('sample testing works!');
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('sample testing works!');
  }));
});
