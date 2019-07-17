import { TestBed } from '@angular/core/testing';

import { InterviewRecruitmentService } from './interview-recruitment.service';

describe('InterviewRecruitmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewRecruitmentService = TestBed.get(InterviewRecruitmentService);
    expect(service).toBeTruthy();
  });
});
