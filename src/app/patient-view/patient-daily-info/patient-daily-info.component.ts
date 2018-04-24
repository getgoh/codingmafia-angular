import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-daily-info',
  templateUrl: './patient-daily-info.component.html',
  styleUrls: ['./patient-daily-info.component.css']
})
export class PatientDailyInfoComponent implements OnInit {

  constructor(private router: Router) { }

  onSubmit()
  {
    // call serviiiiice yeahhh
  }

  onCancel()
  {
    this.router.navigateByUrl('/patient/home');
  }

  ngOnInit() {
  }

}
