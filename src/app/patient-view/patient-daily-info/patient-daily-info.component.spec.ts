import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDailyInfoComponent } from './patient-daily-info.component';

describe('PatientDailyInfoComponent', () => {
  let component: PatientDailyInfoComponent;
  let fixture: ComponentFixture<PatientDailyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDailyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDailyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
