import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';

@Component({
    selector: 'success-page',
    templateUrl: './success.component.html',
    styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css']
})
export class SuccessComponent implements OnInit {
    userlogin: Login = new Login();
    response: string;

    ngOnInit() {
        this.displayName();
    }

    displayName() {
        this.userlogin = JSON.parse(localStorage.getItem('userDetails'))['token'];
        this.response = this.userlogin.username;
    }
}