import { ngoLogin } from './ngologin';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { AddngoLoginComponent } from './add-ngologin.component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class ngoLoginService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(ngologin: ngoLogin){
        //Send data to server in JSON form
        let url = "http://localhost:8050/user/add";
        return this.http.post(url, ngologin);
	}

}