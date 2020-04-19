import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAlbumsComponent } from './list-albums.component';
import { SampleAlbumService } from '../../../../services/sample-album.service';
import { SampleTestService } from 'src/app/services/sample-test.service';
import { MockAlbumsService } from 'src/test/mocks/services/albums';
import { MockTestService } from 'src/test/mocks/services/sample-test';

describe('ListAlbumsComponent', () => {
  let component: ListAlbumsComponent;
  let fixture: ComponentFixture<ListAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAlbumsComponent],
      providers: [
        { provide: SampleAlbumService, useClass: MockAlbumsService },
        { provide: SampleTestService, useClass: MockTestService }
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

  it('initialized ngOnInit to: true', () => {
    expect(component.initialized).toEqual(true);
  });

  it('ngOnInit makes expected calls', () => {
    spyOn(component, 'getAlbums').and.callThrough();
    component.ngOnInit();
    expect(component.getAlbums).toHaveBeenCalled();
  });

  it('ngOnChanges makes expected calls', () => {
    spyOn(component, 'getAlbums').and.callThrough();
    component.ngOnChanges();
    expect(component.getAlbums).toHaveBeenCalled();
  });

  it('getAlbums makes expected calls', () => {
    const sampleAlbumServiceStub: SampleAlbumService = fixture.debugElement.injector.get(SampleAlbumService);
    spyOn(sampleAlbumServiceStub, 'getAllAlbums').and.callThrough();
    component.getAlbums();
    expect(sampleAlbumServiceStub.getAllAlbums).toHaveBeenCalled();
  });

  it('closeOnBoarding makes expected calls', () => {
    const sampleTestServiceStub: SampleTestService = fixture.debugElement.injector.get(SampleTestService);
    spyOn(sampleTestServiceStub, 'changeOnBoarding').and.callThrough();
    component.closeOnBoarding();
    expect(sampleTestServiceStub.changeOnBoarding).toHaveBeenCalled();
  });
});
