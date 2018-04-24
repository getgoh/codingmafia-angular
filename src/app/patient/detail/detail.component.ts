import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PatientService} from '../patient.service';
import {VitalSign} from '../../models/vitalsign';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  vitaSigns: VitalSign[];
  // id: number;
  private sub: any;

  currPatient: string;

  displayedColumns = ['temperature', 'heartRate', 'bloodPressure', 'respiratoryRate'];
  dataSource = null;

  constructor(private router: Router, private actrouter: ActivatedRoute, private patientService: PatientService) {}   

  onBack()
  {
    this.router.navigateByUrl('/patient/list');
  }

  ngOnInit() {
    this.sub = this.actrouter.params.subscribe(params => {
      //  this.id = params['id']; 

      this.currPatient = params['id'];
       this.getVitaSignsByName(params['id']);
      
       
    });
  }

  getVitaSignsByName(name: string)
  {
    this.patientService.getVitaSignsByName(name).subscribe(
      vs => 
      {
        this.vitaSigns = vs;
        this.dataSource = vs;
        console.log(vs);
      },
      e =>
      {
        console.log(e);
      }
    );
  }

  


  
  
}

// export interface VitalSignal {
//   temperature: number;
//   heartRate: number;
//   bloodPressure: number;
//   respiratoryRate: number;
// }

// const ELEMENT_DATA: VitalSignal[] = [
//   { temperature: 38.3, heartRate: 70, bloodPressure: 12, respiratoryRate: 60 },
//   { temperature: 38.5, heartRate: 70, bloodPressure: 15, respiratoryRate: 60 },
//   { temperature: 36.0, heartRate: 70, bloodPressure: 14, respiratoryRate: 60 },
//   { temperature: 36.3, heartRate: 70, bloodPressure: 10, respiratoryRate: 60 },
//   { temperature: 39.9, heartRate: 70, bloodPressure: 12, respiratoryRate: 60 },
// ];
