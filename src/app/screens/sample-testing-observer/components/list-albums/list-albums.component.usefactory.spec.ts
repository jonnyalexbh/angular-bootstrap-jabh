import { ListAlbumsComponent } from './list-albums.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleTestService } from 'src/app/services/sample-test.service';
import { SampleAlbumService } from '../../../../services/sample-album.service';
import { MockAlbumsFactory } from '../../../../../test/mocks/services/common';

fdescribe('ListAlbumsComponent useFactory', () => {
  let component: ListAlbumsComponent;
  let fixture: ComponentFixture<ListAlbumsComponent>;

  beforeEach(async(() => {
    const sampleAlbumServiceStub = () => ({
      getAllAlbums: () => ({ subscribe: f => f(MockAlbumsFactory) }),
      // getAllAlbums: () => ({ pipe: () => ({ subscribe: f => f(MockAlbumsFactory) }) }),
    });

    const sampleTestServiceStub = () => ({
      currentOnBoarding: { subscribe: f => f({}) },
      changeOnBoarding: arg => ({})
    });

    TestBed.configureTestingModule({
      declarations: [ListAlbumsComponent],
      providers: [
        { provide: SampleAlbumService, useFactory: sampleAlbumServiceStub },
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
