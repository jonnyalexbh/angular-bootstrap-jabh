import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAlbumsComponent } from './list-albums.component';
import { SampleAlbumService } from '../../../../services/sample-album.service';
import { SampleTestService } from 'src/app/services/sample-test.service';

fdescribe('ListAlbumsComponent', () => {
  let component: ListAlbumsComponent;
  let fixture: ComponentFixture<ListAlbumsComponent>;

  const MockAlbums = [
    {
      userId: 1,
      id: 1,
      title: 'album one factory'
    },
    {
      userId: 1,
      id: 2,
      title: 'album two factory'
    },
  ];

  beforeEach(async(() => {
    const sampleAlbumServiceStub = () => ({
      getAllAlbums: () => ({ subscribe: f => f(MockAlbums) })
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
