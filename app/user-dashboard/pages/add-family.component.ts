import { Component } from '@angular/core';
import { Family } from './family';
import { FamilyService } from './family-service';
@Component({
selector :'add-family',
templateUrl:'./add-family.component.html',
styleUrls: []
})

export class AddFamilyDetailsComponent{
    userfamilydetails:Family = new Family();
    response: string;
    constructor(private ms: FamilyService){

    }
    add(){
        this.ms.sendToServer(this.userfamilydetails).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}