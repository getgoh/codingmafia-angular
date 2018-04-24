import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';

const PATIENT_ROUTES: Routes = [
    { path: 'patient', redirectTo: '/patient/list', pathMatch: 'full' },
    { path: 'patient/list', component: ListComponent },
    { path: 'patient/detail/:id', component: DetailComponent },
    
]

export const patientRouting = RouterModule.forRoot(PATIENT_ROUTES);  