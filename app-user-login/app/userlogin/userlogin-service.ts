import { userLogin } from './userlogin';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserLoginComponent } from './add-userlogin.component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class userLoginService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(userlogin: userLogin){
        //Send data to server in JSON form
        let url = "http://localhost:8050/user/add";
        return this.http.post(url, userlogin);
	}

}