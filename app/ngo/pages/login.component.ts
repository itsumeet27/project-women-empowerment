import { Login } from '../../login';
import { Component } from '@angular/core';
import { LoginService } from './login-service';

@Component({
    selector: 'ngo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css','../../css/bootstrap.min.css','../../css/mdb.min.css']
})

export class LoginComponent {
    
    userDetails: any;
    password: string;
    id: number;

    userlogin: Login = new Login();
    response: string;
    constructor(public ms: LoginService) {

    }

    display() {
        window.localStorage.setItem('userDetails', JSON.stringify({token: this.userlogin, name: 'userDetails'}))
       
        this.ms.sendToServer(this.userlogin).subscribe(
            data => {
                this.response = data['status'];
                this.reloadPage();
            }
        );
    }

    reloadPage() {
        window.location.href = './ngo-dashboard';
    }

}