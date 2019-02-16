import { Component } from '@angular/core';
import { RegisteredUserService } from './fetch-course-service';
import { RegisteredUserCourse } from './registered-user-course';


@Component({
    selector: 'fetch-courses',
    templateUrl: './fetch-course.component.html',
    styleUrls: ['../../css/bootstrap.min.css','../../css/mdb.min.css', './fetch-course.component.css']

})

export class RegisteredUsersComponent {
    regusers: RegisteredUserCourse[];

    constructor(public ms: RegisteredUserService) {

    }

    ngOnInit() {
        this.display();
    }

    display() {
        let url = "http://localhost:8051/userCourse/fetch";
        this.ms.retriveFromServer(url).subscribe(data => {
            this.regusers = data;
            console.log(this.regusers);
        });
    }
}