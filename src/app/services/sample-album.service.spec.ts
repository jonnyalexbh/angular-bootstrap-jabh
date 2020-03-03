import { TestBed } from '@angular/core/testing';

import { SampleAlbumService } from './sample-album.service';

describe('SampleAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleAlbumService = TestBed.get(SampleAlbumService);
    expect(service).toBeTruthy();
  });
});
