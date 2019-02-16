import { Login } from '../../login';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable() 
export class LoginService{

    constructor(private http:HttpClient)
    {
            
    }
	
    sendToServer(login:Login){
     let url = "http://localhost:8051/userlogin/verifyuser";
     return this.http.post(url,login);
     
      }    
}