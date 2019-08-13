import { Component, ɵConsole } from '@angular/core';
import { Login } from 'src/app/login';
import { LoginService } from './login-service';
import { Router } from '@angular/router';


@Component({
    selector: 'user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../../css/bootstrap.min.css', '../../css/mdb.min.css']
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
                    window.location.href='/user-dashboard';
                }
                else {
                    this.router.navigate(['/step/login']);
                    this.response = "Please enter valid username and password";
                }
            }
        )
    }
}