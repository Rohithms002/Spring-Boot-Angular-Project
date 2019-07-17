import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentMainComponent } from './recruitment-main.component';

describe('RecruitmentMainComponent', () => {
  let component: RecruitmentMainComponent;
  let fixture: ComponentFixture<RecruitmentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
