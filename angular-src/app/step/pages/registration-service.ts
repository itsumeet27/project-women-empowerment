import { Registration } from './registration';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegistrationComponent } from './registration.component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class RegistrationService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(registration: Registration){
        //Send data to server in JSON form
        let url = "http://localhost:8051/user/add";
        return this.http.post(url, registration);
	}

}