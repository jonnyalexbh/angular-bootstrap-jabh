import { TestBed } from '@angular/core/testing';

import { SampleTestService } from './sample-test.service';

describe('SampleTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleTestService = TestBed.get(SampleTestService);
    expect(service).toBeTruthy();
  });
});
