import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable() //Dependency Injection
export class ContactService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(usercontact: Contact){
        //Send data to server in JSON form
        let url = "http://localhost:8051/userContact/add";
        return this.http.post(url, usercontact);
	}

}