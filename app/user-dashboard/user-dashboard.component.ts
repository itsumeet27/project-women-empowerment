import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css', '../css/bootstrap.min.css', '../css/mdb.min.css']
})
export class UserDashboardComponent implements OnInit {

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