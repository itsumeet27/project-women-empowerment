import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Family } from './family';

@Injectable() //Dependency Injection
export class FamilyService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(family: Family){
        //Send data to server in JSON form
        let url = "http://localhost:8051/userFamily/add";
        return this.http.post(url, family);
	}

}