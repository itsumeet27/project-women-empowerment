import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration-service';
import { Registration } from './registration';

@Component({
  selector: 'user-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css', './registration.component.css']
})
export class RegistrationComponent implements OnInit{
    ngOnInit(){

    }

    registration: Registration = new Registration();
    response: string;
    constructor(private ngs: RegistrationService){

    }
    add(ngoform){
        this.ngs.sendToServer(this.registration).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }
}