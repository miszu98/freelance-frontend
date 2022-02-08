import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User';
import { UserExistResponse } from 'src/app/Models/UserExistResponse';

const API = "http://localhost:8080/api/users"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public checkIfUserExist(email: string) : Observable<UserExistResponse> {
    return this.http.get<UserExistResponse>(API + "/" + email);
  }

  public registerUser(user: User) {
    return this.http.post(API + "/", user);
  }

}
