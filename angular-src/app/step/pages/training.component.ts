import { Component, OnInit } from '@angular/core';
import { FetchCoursesService } from './fetch-courses-service';
import { Courses } from './courses';
import { Login } from 'src/app/login';

@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css', './training.component.css']
})
export class TrainingComponent {
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