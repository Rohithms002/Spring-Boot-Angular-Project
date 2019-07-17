import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RohithComponent } from './rohith.component';

describe('RohithComponent', () => {
  let component: RohithComponent;
  let fixture: ComponentFixture<RohithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RohithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RohithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
