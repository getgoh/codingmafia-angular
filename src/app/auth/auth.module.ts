import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material'

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    authRouting,
    FormsModule,
    MatButtonModule, MatSnackBarModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
  
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
