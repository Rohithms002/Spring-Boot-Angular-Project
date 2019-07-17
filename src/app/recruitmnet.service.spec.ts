import { TestBed } from '@angular/core/testing';

import { RecruitmnetService } from './recruitmnet.service';

describe('RecruitmnetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruitmnetService = TestBed.get(RecruitmnetService);
    expect(service).toBeTruthy();
  });
});
