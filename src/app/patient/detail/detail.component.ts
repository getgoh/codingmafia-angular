import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  displayedColumns = ['temperature', 'heartRate', 'bloodPressure', 'respiratoryRate'];
  dataSource = ELEMENT_DATA;
}

export interface VitalSignal {
  temperature: number;
  heartRate: number;
  bloodPressure: number;
  respiratoryRate: number;
}

const ELEMENT_DATA: VitalSignal[] = [
  { temperature: 38.3, heartRate: 70, bloodPressure: 12, respiratoryRate: 60 },
  { temperature: 38.5, heartRate: 70, bloodPressure: 15, respiratoryRate: 60 },
  { temperature: 36.0, heartRate: 70, bloodPressure: 14, respiratoryRate: 60 },
  { temperature: 36.3, heartRate: 70, bloodPressure: 10, respiratoryRate: 60 },
  { temperature: 39.9, heartRate: 70, bloodPressure: 12, respiratoryRate: 60 },
];
