import { Component, OnInit } from '@angular/core';
import { Ngo } from './ngo';
import { NgoService } from './ngo-service';

@Component({
  selector: 'ngo-page',
  templateUrl: './ngo.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css']
})
export class NgoComponent implements OnInit{

    ngo: Ngo[];
    
    constructor(public ms: NgoService) {

    }

    ngOnInit() {
        this.display();
    }

    display() {
        let url = "http://localhost:8051/ngo/fetch";
        this.ms.retriveFromServer(url).subscribe(data => {
            this.ngo = data;
            console.log(this.ngo);
        });
    }
}