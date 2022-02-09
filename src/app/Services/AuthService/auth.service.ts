import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/Models/Credentials';
import { JwtResponse } from 'src/app/Models/JwtResponse';

const API = "http://localhost:8080/api/users/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  public authenticate(credentials: Credentials) : Observable<JwtResponse> {
    return this.http.post<JwtResponse>(API, credentials);
  }

}
