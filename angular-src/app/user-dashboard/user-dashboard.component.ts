import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css', '../css/bootstrap.min.css', '../css/mdb.min.css']
})
export class UserDashboardComponent implements OnInit {

  login: Login = new Login();
  response: string;

  ngOnInit() {
    this.displayName();
  }

  displayName() {
    this.login = JSON.parse(localStorage.getItem('userDetails'))['token']
    this.response = this.login.username;
  }

  logout(){
    localStorage.removeItem('userDetails');
    window.location.href='/step';
  }

}