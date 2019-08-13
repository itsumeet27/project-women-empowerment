import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Courses } from 'src/app/step/pages/courses';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class AddCourseService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
    sendToServer(course: Courses){
        //Send data to server in JSON form
        let url = "http://localhost:8051/course/add";
        return this.http.post(url, course);
	}
    
}