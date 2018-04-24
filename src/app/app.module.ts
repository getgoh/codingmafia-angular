import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatSelectModule, MatCardModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { appRouting } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { PatientHomeComponent } from './patient-view/patient-home/patient-home.component';
import { PatientAlertsComponent } from './patient-view/patient-alerts/patient-alerts.component';
import { PatientMotivationsComponent } from './patient-view/patient-motivations/patient-motivations.component';
import { PatientDailyInfoComponent } from './patient-view/patient-daily-info/patient-daily-info.component';

import { PatientService } from './patient/patient.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientViewComponent,
    PatientHomeComponent,
    PatientAlertsComponent,
    PatientMotivationsComponent,
    PatientDailyInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouting,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    HttpModule,
    AuthModule,
    PatientModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
