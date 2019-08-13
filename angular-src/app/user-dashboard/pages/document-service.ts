import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from './document';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class DocumentService {
    //This class will talk to server

    constructor(private http: HttpClient) {

    }
    sendToServer(document: Document) {
        //Send data to server in JSON form
        let url = "http://localhost:8051/document/add";
        return this.http.post(url, document);
    }

}