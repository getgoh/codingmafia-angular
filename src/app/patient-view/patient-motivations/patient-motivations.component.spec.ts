import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMotivationsComponent } from './patient-motivations.component';

describe('PatientMotivationsComponent', () => {
  let component: PatientMotivationsComponent;
  let fixture: ComponentFixture<PatientMotivationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMotivationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMotivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
