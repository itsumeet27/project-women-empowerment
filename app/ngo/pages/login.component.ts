import { Login } from '../../login';
import { Component } from '@angular/core';
import { LoginService } from './login-service';

@Component({
    selector: 'ngo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css','../../css/bootstrap.min.css','../../css/mdb.min.css']
})

export class LoginComponent {
    
    password: string;
    id: number;


    userlogin: Login = new Login();
    response: string;
    constructor(public ms: LoginService) {

    }

    display() {
       
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