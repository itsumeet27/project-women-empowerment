//import { NgoLogin } from './ngologin';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Courses} from './courses';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class FetchCoursesService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
   
    retriveFromServer(url:string):Observable<Courses[]>{
        //our code to be communicated with the server will be here
     return this.http.get<Courses[]>(url)
     
      }  
}