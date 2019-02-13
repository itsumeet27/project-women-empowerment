import { Ngo } from './ngo';
import { Component } from '@angular/core';
import { NgoService } from './ngo-service';

@Component({
selector :'add-ngo',
templateUrl:'./add-ngo.component.html',
styleUrls: ['./add-ngo.component.css']
})

export class AddNgoComponent{
    ngo: Ngo = new Ngo();
    response: string;
    password : string;
    
    constructor(private ngs: NgoService){

    }
    add(ngoform){
        this.ngs.sendToServer(this.ngo).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}