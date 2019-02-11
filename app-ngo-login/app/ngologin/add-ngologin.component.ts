import { ngoLogin } from './ngologin';
import { Component } from '@angular/core';
import { ngoLoginService } from './ngologin-service';
@Component({
selector :'add-ngologin',
templateUrl:'./add-ngologin.component.html',
styleUrls: ['add-ngologin.component.css']
})

export class ngoLoginComponent{
    ngologin: ngoLogin = new ngoLogin();
    response: string;
    constructor(private ms: ngoLoginService){

    }
    add(mform){
        this.ms.sendToServer(this.ngologin).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}