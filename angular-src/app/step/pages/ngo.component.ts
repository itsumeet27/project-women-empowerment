import { Component, OnInit } from '@angular/core';
import { FetchCoursesService } from './fetch-courses-service';
import { Courses } from './courses';

@Component({
  selector: 'ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css', './ngo.component.css']
})
export class NgoComponent implements OnInit {
  courses: Courses[];

  constructor(public ms: FetchCoursesService) {

  }

  ngOnInit() {
    this.display();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  display() {
    let url = "http://localhost:8051/course/fetch";
    this.ms.retriveFromServer(url).subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}