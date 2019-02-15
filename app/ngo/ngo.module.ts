import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoComponent } from './ngo.component';
import { RouterModule } from '@angular/router';
import { CriteriaComponent } from './pages/criteria.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration.component';
import { RegistrationService } from './pages/registration-service';
import { FormsModule } from '@angular/forms';
import { OrganizationsComponent } from './pages/organizations.component';
import { SuccessComponent } from './pages/success.component';
import { AddCourseService } from './pages/add-course-service';
import { AddCourseComponent } from './pages/add-course.component';

@NgModule({
  declarations: [
    NgoComponent,
    CriteriaComponent,
    RegistrationComponent,
    OrganizationsComponent,
    AddCourseComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'ngo', component: NgoComponent },
      { path: 'ngo/criteria', component: CriteriaComponent },
      { path: 'ngo/organizations', component: OrganizationsComponent },
      { path: 'ngo/add-course', component: AddCourseComponent },
      { path: 'ngo/registration', component: RegistrationComponent },
      { path: 'ngo/success', component: SuccessComponent },
    ])
  ],
  exports: [
    NgoComponent
  ],
  providers: [HttpClient, RegistrationService, AddCourseService],
  bootstrap: [NgoComponent]
})
export class NgoModule { }
