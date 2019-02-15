import { Component, OnInit } from '@angular/core';
import { FetchCoursesService } from './fetch-courses-service';
import { Courses } from './courses';

@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css']
})
export class TrainingComponent {
  courses: Courses[];

  constructor(public ms: FetchCoursesService) {

  }

  ngOnInit() {
    this.display();
  }

  display() {
    let url = "http://localhost:8051/course/fetch";
    this.ms.retriveFromServer(url).subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}