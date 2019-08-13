import { Component } from '@angular/core';
import { Family } from './family';
import { FamilyService } from './family-service';
@Component({
selector :'add-family',
templateUrl:'./add-family.component.html',
styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css','./add-family.component.css']
})

export class AddFamilyDetailsComponent{
    userfamilydetails:Family = new Family();
    response: string;
    constructor(private ms: FamilyService){

    }

    
    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
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