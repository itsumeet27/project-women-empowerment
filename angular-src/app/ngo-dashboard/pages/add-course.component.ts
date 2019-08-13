import { Component } from '@angular/core';
import { Courses } from 'src/app/step/pages/courses';
import { AddCourseService } from './add-course-service';

@Component({
    selector: 'add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['../../css/bootstrap.min.css','../../css/mdb.min.css','./add-course.component.css']
})

export class AddCourseComponent {
    //course:TrainingCourse[];
    course: Courses = new Courses();
    response: string;
    

    constructor(public ms: AddCourseService) {

    }

    add(mform){
        this.ms.sendToServer(this.course).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
                this.reloadPage();
            }
        );
    }

    reloadPage() {
        window.location.href = './ngo/success';
    }
}