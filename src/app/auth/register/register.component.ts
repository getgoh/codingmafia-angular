import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validation';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm: FormGroup;

  firstName: String;
  lastName: String;
  showSpinner = true;

  register()
  {
    // call service..
  }

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.myForm = fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  openSnackBar() {
    if (this.myForm.hasError("MatchPassword")) {
      this.snackBar.openFromComponent(RegisterComponent, {
        duration: 500,
      });
    }
  }


}
