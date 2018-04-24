import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../patient.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Patient} from '../../models/patient';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  patients: Patient[];
  
  displayedColumns = ['firstName', 'lastName', 'email', 'detail'];

  dataSource = null;

  constructor(private router: Router, private patientService: PatientService)
  {
  }

  ngOnInit()
  {
    this.getAllPatients();
  }

  getAllPatients()
  {
    this.patientService
        .getAll()
        .subscribe(
          patients => {
            this.patients = patients;
            this.dataSource = patients;
            console.log(patients);
          },
          e => {
            console.log(e)
          }
        );
  }    

  detailClick(firstName: string)
  {
    this.router.navigateByUrl('/patient/detail/' + firstName);
  }

}



// const ELEMENT_DATA: Patient[] = [
//   { id: 1,  firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
//   { id: 2, firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
//   { id: 3, firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
//   { id: 4, firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
//   { id: 5, firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' }
// ];

