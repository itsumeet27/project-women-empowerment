import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.css','../css/bootstrap.min.css','../css/mdb.min.css']
})
export class NgoDashboardComponent implements OnInit{
  userlogin: Login = new Login();
  response: string;

  ngOnInit() {
    this.displayName();
  }

  displayName() {
    this.userlogin = JSON.parse(localStorage.getItem('userDetails'))['token'];
    this.response = this.userlogin.username;
  }

  logout(){
    localStorage.removeItem('userDetails');
    window.location.href='/ngo';
  }
}