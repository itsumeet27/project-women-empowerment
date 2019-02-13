import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trainees} from './trainees';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class TraineesService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
   
    retriveFromServer(url:string):Observable<Trainees[]>{
        //our code to be communicated with the server will be here
     return this.http.get<Trainees[]>(url)
     
      }  
}