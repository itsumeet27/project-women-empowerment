import { userLogin } from './userlogin';
import { Component } from '@angular/core';
import { userLoginService } from './userlogin-service';
@Component({
selector :'add-userlogin',
templateUrl:'./add-userlogin.component.html',
styleUrls: ['add-userlogin.component.css']
})

export class UserLoginComponent{
    userlogin: userLogin = new userLogin();
    response: string;
    constructor(private ms: userLoginService){

    }
    add(mform){
        this.ms.sendToServer(this.userlogin).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}