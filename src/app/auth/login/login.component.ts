import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
  _message: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    const user = {
      email: this.myForm.value.email,
      password: this.myForm.value.password
    };
    this.authService.login(user).subscribe(
      data => {
        localStorage.setItem('fullname', data.user.firstName + ' ' + data.user.lastName);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("user", JSON.stringify(data.user));
        this.router.navigateByUrl('/home');
      },
      error => this._message = error.message
    );
    this.myForm.reset();

  }

  
  getErrorMessage() {
    return this.myForm.get('email').hasError('required') ? 'You must enter a value' :
      this.myForm.get('email').hasError('email')  ? 'Not a valid email' :
        this.myForm.get('password').hasError('required')  ? 'You must enter a value' :
        '';
  }
  
}
