import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'main-home',
  templateUrl: './main.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/mdb.min.css','./main.component.css']
})
export class MainComponent implements OnInit{
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