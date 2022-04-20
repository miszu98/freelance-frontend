import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Credentials } from 'src/app/Models/Credentials';
import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide = true; 
  authLoading = false;
  errors = [];

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public emptyFields() {
    if (this.loginForm.get('email')?.value == '' || this.loginForm.get('email')?.value == null) {
      return true;
    } else if (this.loginForm.get('password')?.value == '' ||  this.loginForm.get('password')?.value == null) {
      return true;
    } return false;
  }

  public auth() {
    let credentials: Credentials = this.loginForm.value;
    this.errors = [];
    this.authLoading = true;
    this.authService.authenticate(credentials).subscribe(
      value => {
        console.log(value);
        this.authLoading = false;
      },
      e => {
        console.log(e);
        this.errors = e.error.messages;
        this.authLoading = false;
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

  public loadRegisterForm() {
      this.dialog.closeAll();
      let dialogRef = this.dialog.open(LoginComponent, 
        {
          height: '700px',
          width: '450px'
        });
  }

}
