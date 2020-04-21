import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlbumComponent } from './album.component';
import { AlbumService } from '../../services/album.service';
import { MockAlbumsService } from 'src/test/mocks/services/albums';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: AlbumService, useClass: MockAlbumsService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
