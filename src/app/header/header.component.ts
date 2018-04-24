import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginClick(){
    this.router.navigateByUrl('/auth/login')
  }

  registerClick() {
    this.router.navigateByUrl('/auth/register')
  }

  patientClick() {
    this.router.navigateByUrl('/patient')
  }  

  patientViewClick()
  {
    this.router.navigateByUrl('/patient/home')
  }

}
