import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ngo} from './ngo';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class NgoService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
   
    retriveFromServer(url:string):Observable<Ngo[]>{
        //our code to be communicated with the server will be here
     return this.http.get<Ngo[]>(url)
     
      }  
}