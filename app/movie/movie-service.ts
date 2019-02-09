import { Movie } from './movie';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AddMovieComponent } from './add-movie.component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class MovieService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(movie: Movie){
        //Send data to server in JSON form
        let url = "http://localhost:8050/movie/add";
        return this.http.post(url, movie);
	}

}