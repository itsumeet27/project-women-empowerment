import { Movie } from './movie';
import { Component } from '@angular/core';
import { MovieService } from './movie-service';
@Component({
selector :'add-movie',
templateUrl:'./add-movie.component.html',
styleUrls: ['../css/mdb.min.css', '../css/bootstrap.min.css']
})

export class AddMovieComponent{
    movie: Movie = new Movie();
    response: string;
    constructor(private ms: MovieService){

    }
    add(mform){
        this.ms.sendToServer(this.movie).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}