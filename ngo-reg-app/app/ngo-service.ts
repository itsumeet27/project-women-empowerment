import { Ngo } from './ngo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AddNgoComponent } from './add-ngo.component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class NgoService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(ngo: Ngo){
        //Send data to server in JSON form
        let url = "http://localhost:8051/ngo/add";
        return this.http.post(url, ngo);
	}

}