import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/Models/Credentials';
import { AuthService } from 'src/app/Services/AuthService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true; 

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public auth() {
    let credentials: Credentials = this.loginForm.value;
    this.authService.authenticate(credentials).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      }
    )
  }

  public getErrorMessage(field: string) {
    let control = this.loginForm.get(field);
    if (control?.hasError('required')) {
      return 'Field is required';
    } else if (control?.hasError('email')) {
      return 'Email wrong format';
    } return '';
  }

}
