import { Injectable } from '@angular/core';
import {LoginRequest} from "../model/LoginRequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {RegisterRequest} from "../model/RegisterRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class authService {

  endpoint: string = 'http://localhost:8080/api/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }
  getRoles() {
    const token = this.getToken();
    if (token) {
      try {
        const jwtData = token.split('.')[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);

        if (decodedJwtData && decodedJwtData.role) {
          return decodedJwtData.role;
        } else {
          console.error("Roles not found in decoded JWT data.");
          return null;
        }
      } catch (error) {
        console.error("Error decoding JWT:", error);
        return null;
      }
    } else {
      console.error("Token is null.");
      return null;
    }
  }

  register(user: RegisterRequest) {
    console.log(user);
    let api = `${this.endpoint}/signup`;
    console.log(user);
    return this.http.post<any>(api, user).subscribe({
      next:(res)=>{
        window.location.reload()
      },
      error:(err) => {
        console.log(err);
      }
    });
  }
  // Sign-in
  login(user: LoginRequest) {
    console.log(user)
    return this.http
      .post<any>(`${this.endpoint}/signin`, user)
      .subscribe({
        next: (res) => {
          if(res.token) {
            localStorage.setItem('access_token', res.token);
            localStorage.setItem('email', res.email);
            if(this.getRoles()=="ROLE_ADMIN") {
              this.router.navigateByUrl('/admin')
              return;
            }
            this.router.navigateByUrl('/home')
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
  logout(): Observable<string> {
    const url = `${this.endpoint}/logout`;
    return this.http.get<string>(url);
  }

}
