import { Component } from '@angular/core';

import { ContactService } from './contact-service';
import { Contact } from './contact';
@Component({
selector :'add-contactdetails',
templateUrl:'./add-contact.component.html',
styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css','./add-contact.component.css']
})

export class AddContactDetailsComponent{
    usercontactdetails: Contact = new Contact();
    response: string;
    constructor(private ms: ContactService){

    }

    add(mform){
        this.ms.sendToServer(this.usercontactdetails).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}