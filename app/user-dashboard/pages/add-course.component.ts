import { Component } from '@angular/core';
import { UserCourse } from './user-course';
import { AddCourseService } from './add-course-service';

@Component({
selector :'add-user-course',
templateUrl:'./add-course.component.html',
styleUrls: ['./add-course.component.css','../../css/bootstrap.min.css','../../css/mdb.min.css']
})

export class AddCourseComponent{
    usercourse: UserCourse = new UserCourse();
    response: string;
    constructor(private us: AddCourseService){

    }
    add(mform){
        this.us.sendToServer(this.usercourse).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

}