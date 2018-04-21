import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { patientRouting } from './patient.routing';
import { MatTableModule, MatHeaderCell, MatButtonModule } from '@angular/material';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    patientRouting,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [ListComponent, DetailComponent]
})
export class PatientModule { }
