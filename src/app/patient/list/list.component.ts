import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  displayedColumns = ['firstName', 'lastName', 'email', 'detail'];
  dataSource = ELEMENT_DATA;
}

export interface Patient {
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Patient[] = [
  { firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
  { firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
  { firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
  { firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' },
  { firstName: 'Daniel', lastName: 'Magalhaes', email: 'daniel123@123.ca' }
];

