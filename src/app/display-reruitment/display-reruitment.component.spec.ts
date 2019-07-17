import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReruitmentComponent } from './display-reruitment.component';

describe('DisplayReruitmentComponent', () => {
  let component: DisplayReruitmentComponent;
  let fixture: ComponentFixture<DisplayReruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
