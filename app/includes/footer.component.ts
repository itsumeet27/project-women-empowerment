import { Component, OnInit } from '@angular/core';
import { Login } from '../login';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../css/bootstrap.min.css', '../css/mdb.min.css']
})
export class FooterComponent implements OnInit {
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