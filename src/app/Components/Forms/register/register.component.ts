import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    password2: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required])
  });

  
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  public registerUser() {
    let user: User = this.userRegisterForm.value;
    this.loading = true;
    this.registerService.registerUser(user).subscribe(
      value => {
        this.loading = false;
        console.log(value);
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
