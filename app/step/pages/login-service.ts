import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/login';
import { Observable } from 'rxjs';
import { Response } from 'src/app/response';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  login: Login[];
  
  constructor(private http: HttpClient) {
  }

  verifyMe(login: Login) : Observable<Response> {
    let url = 'http://localhost:8051/userVerify/verify';
    return this.http.post<Response>(url, login);

  }
}
