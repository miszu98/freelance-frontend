import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from 'src/app/Services/RegisterService/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountExist = false;
  loading = false;
  declare errorMessage: string;

  registerForm = new FormGroup({
    email: new FormControl(null, Validators.email)
  })

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  public checkIfUserExist() {
    let control = this.registerForm.get('email');
    this.errorMessage = "";
    this.accountExist = false;
    if (!control?.invalid) {
      this.loading = true;
      this.registerService.checkIfUserExist(control?.value).subscribe(
        value => {
          setTimeout(() => {
            this.loading = false;
            this.accountExist = value.status;
            if (this.accountExist == true) {
              this.errorMessage = "User with email: " + control?.value + " already exist";
            }
          }, 3000)
        },
        error => {
          setTimeout(() => {
            this.loading = false;
          }, 3000)
        }
      )
    }
  }

  public clearErrorMessages() {
    this.errorMessage = "";
    this.accountExist = false;
  } 

  public getErrorMessage(field: string) {
    let control = this.registerForm.get(field);
    if (control?.hasError('required')) {
      return 'Email is required to create account';
    } else if (control?.hasError('email')) {
      return 'Wrong format of email';
    } return '';
  }
}
