import { Component, OnInit } from '@angular/core';
import { NgoService } from 'src/app/admin/pages/ngo-service';
import { Ngo } from 'src/app/admin/pages/ngo';

@Component({
  selector: 'ngo-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css','./organizations.component.css']
})
export class OrganizationsComponent implements OnInit{
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