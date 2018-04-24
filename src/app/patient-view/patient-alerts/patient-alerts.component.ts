import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-alerts',
  templateUrl: './patient-alerts.component.html',
  styleUrls: ['./patient-alerts.component.css']
})
export class PatientAlertsComponent implements OnInit {

  constructor(private router: Router) { }

  onSend()
  {
    // call patientservice to send to api
  }

  onCancel()
  {
    this.router.navigateByUrl('/patient/home');
  }

  ngOnInit() {
  }

}
