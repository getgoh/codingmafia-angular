import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(private router: Router) { }

  alerts() {
    this.router.navigateByUrl('/patient/alerts');
  }

  motivations() {
    this.router.navigateByUrl('/patient/motivations');
  }

  dailyinfo()  {
    this.router.navigateByUrl('/patient/dailyinfo');
  }
  

  ngOnInit() {
  }

}
