import { of } from 'rxjs';
import { ListAlbumsComponent } from './list-albums.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleTestService } from 'src/app/services/sample-test.service';
import { SampleAlbumService } from '../../../../services/sample-album.service';
import { MockAlbumsFactory } from '../../../../../test/mocks/services/common';

describe('ListAlbumsComponent useValue', () => {
  let component: ListAlbumsComponent;
  let fixture: ComponentFixture<ListAlbumsComponent>;
  let mockServiceAlbums;

  beforeEach(async(() => {
    const sampleTestServiceStub = () => ({
      currentOnBoarding: { subscribe: f => f({}) },
      changeOnBoarding: arg => ({})
    });

    mockServiceAlbums = jasmine.createSpyObj(['getAllAlbums']);
    mockServiceAlbums.getAllAlbums.and.returnValue(of(MockAlbumsFactory));

    TestBed.configureTestingModule({
      declarations: [ListAlbumsComponent],
      providers: [
        { provide: SampleAlbumService, useValue: mockServiceAlbums },
        { provide: SampleTestService, useFactory: sampleTestServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
