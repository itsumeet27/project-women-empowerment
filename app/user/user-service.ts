import { User } from './user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AddUserComponent } from './add-user.component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class UserService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(user: User){
        //Send data to server in JSON form
        let url = "http://localhost:8050/user/add";
        return this.http.post(url, user);
	}

}