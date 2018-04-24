import { Routes, RouterModule } from '@angular/router';
import { PatientHomeComponent } from './patient-view/patient-home/patient-home.component';
import { PatientAlertsComponent } from './patient-view/patient-alerts/patient-alerts.component';
import { PatientDailyInfoComponent } from './patient-view/patient-daily-info/patient-daily-info.component';
import { PatientMotivationsComponent } from './patient-view/patient-motivations/patient-motivations.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'patient/home', component: PatientHomeComponent },
    { path: 'patient/alerts', component: PatientAlertsComponent },
    { path: 'patient/dailyinfo', component: PatientDailyInfoComponent },
    { path: 'patient/motivations', component: PatientMotivationsComponent }
]

export const appRouting = RouterModule.forRoot(APP_ROUTES);  