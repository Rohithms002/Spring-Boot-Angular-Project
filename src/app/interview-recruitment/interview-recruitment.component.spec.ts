import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRecruitmentComponent } from './interview-recruitment.component';

describe('InterviewRecruitmentComponent', () => {
  let component: InterviewRecruitmentComponent;
  let fixture: ComponentFixture<InterviewRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
