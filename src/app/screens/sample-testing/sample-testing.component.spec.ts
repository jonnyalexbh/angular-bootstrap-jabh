import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SampleTestingComponent } from './sample-testing.component';
import { SampleAlbumService } from '../../services/sample-album.service';
import { MockAlbumsService } from 'src/test/mocks/services/albums';

describe('SampleTestingComponent', () => {
  let component: SampleTestingComponent;
  let fixture: ComponentFixture<SampleTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [SampleTestingComponent],
      providers: [
        { provide: SampleAlbumService, useClass: MockAlbumsService },
      ]
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
