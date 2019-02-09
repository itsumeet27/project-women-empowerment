import { User } from './user';
import { Component } from '@angular/core';
import { UserService } from './user-service';
@Component({
selector :'add-user',
templateUrl:'./add-user.component.html',
styleUrls: ['add-user.component.css']
})

export class AddUserComponent{
    user: User = new User();
    response: string;
    constructor(private ms: UserService){

    }
    add(mform){
        this.ms.sendToServer(this.user).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}