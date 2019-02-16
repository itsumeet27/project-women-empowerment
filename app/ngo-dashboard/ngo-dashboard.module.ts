import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoDashboardComponent } from './ngo-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddCourseComponent } from './pages/add-course.component';
import { AddCourseService } from './pages/add-course-service';

@NgModule({
  declarations: [
    NgoDashboardComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'ngo-dashboard', component: NgoDashboardComponent },
      { path: 'ngo-dashboard/add-courses', component: AddCourseComponent }
    ])
  ],
  exports: [
    NgoDashboardComponent
  ],
  providers: [AddCourseService],
  bootstrap: [NgoDashboardComponent]
})
export class NgoDashboardModule { }
