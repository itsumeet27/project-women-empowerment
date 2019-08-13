import { Login } from '../../login';
import { Component } from '@angular/core';
import { LoginService } from './login-service';
import { Router } from '@angular/router';

@Component({
    selector: 'ngo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css','../../css/bootstrap.min.css','../../css/mdb.min.css']
})

export class LoginComponent {
    
    login: Login = new Login();
    responses: ResponseType;
    response: string;

    constructor(private loginService: LoginService, private router: Router) {

    }

    verifyUser() {

        window.localStorage.setItem('userDetails', JSON.stringify({token: this.login, name: 'userDetails'}));
        
        this.loginService.verifyMe(this.login)
            .subscribe(data => {                

                if (data.responseType == "VERIFIED") {
                    window.location.href='/ngo-dashboard';
                }
                else {
                    this.router.navigate(['/ngo/login']);
                    this.response = "Please enter valid username and password";
                }
            }
        )
    }

}