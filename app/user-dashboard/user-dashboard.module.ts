import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddCourseComponent } from './pages/add-course.component';
import { AddCourseService } from './pages/add-course-service';

@NgModule({
  declarations: [
    UserDashboardComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'user-dashboard/apply-course', component: AddCourseComponent }
    ])
  ],
  exports: [
    UserDashboardComponent
  ],
  providers: [HttpClient,AddCourseService],
  bootstrap: [UserDashboardComponent]
})
export class UserDashboardModule { }
