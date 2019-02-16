//import { NgoLogin } from './ngologin';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisteredUserCourse } from './registered-user-course';


//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class RegisteredUserService {
    //This class will talk to server


    constructor(private http: HttpClient) {

    }


    retriveFromServer(url: string): Observable<RegisteredUserCourse[]> {
        //our code to be communicated with the server will be here
        return this.http.get<RegisteredUserCourse[]>(url)

    }
}