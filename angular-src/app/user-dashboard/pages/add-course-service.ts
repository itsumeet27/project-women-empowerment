import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserCourse } from './user-course';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class AddCourseService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(usercourse: UserCourse){
        //Send data to server in JSON form
        let url = "http://localhost:8051/userCourse/add";
        return this.http.post(url, usercourse);
	}
    
}