import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/Models/User';
import { RegisterService } from 'src/app/Services/RegisterService/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  loading = false;

  userRegisterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.userRegisterForm.get('email')?.setValue(this.data.email);
  }

  public registerUser() {
    let user: User = this.userRegisterForm.value;
    this.loading = true;
    this.registerService.registerUser(user).subscribe(
      value => {
        this.loading = false;
        console.log(value);
        window.location.href = 'http://localhost:4200/main';
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    )
  }

  public getErrorMessage(field: string) {
    let control = this.userRegisterForm.get(field);
    if (control?.hasError('required')) {
      return 'Field is required';
    } else if (control?.hasError('email')) {
      return 'Wrong format of email';
    } return '';
  }

}
