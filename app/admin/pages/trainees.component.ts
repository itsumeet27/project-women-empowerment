import { Component, OnInit } from '@angular/core';
import { TraineesService } from './trainees-service';
import { Trainees } from './trainees';

@Component({
  selector: 'trainees-page',
  templateUrl: './trainees.component.html',
  styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css']
})
export class TraineesComponent implements OnInit {

  trainees: Trainees[];


  constructor(public ms: TraineesService) {

  }

  ngOnInit() {
    this.display();
  }

  display() {
    let url = "http://localhost:8051/user/fetch";
    this.ms.retriveFromServer(url).subscribe(data => {
      this.trainees = data;
      console.log(this.trainees);
    });
  }
}