import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddCourseComponent } from './pages/add-course.component';
import { AddCourseService } from './pages/add-course-service';
import { AddDocumentComponent } from './pages/add-document.component';
import { DocumentService } from './pages/document-service';
import { AddFamilyDetailsComponent } from './pages/add-family.component';
import { FamilyService } from './pages/family-service';
import { AddContactDetailsComponent } from './pages/add-contact.component';
import { ContactService } from './pages/contact-service';

@NgModule({
  declarations: [
    UserDashboardComponent,
    AddCourseComponent,
    AddContactDetailsComponent,
    AddFamilyDetailsComponent,
    AddDocumentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'user-dashboard/apply-course', component: AddCourseComponent },
      { path: 'user-dashboard/document-details', component: AddDocumentComponent },
      { path: 'user-dashboard/family-details', component: AddFamilyDetailsComponent},
      { path: 'user-dashboard/contact-details', component: AddContactDetailsComponent}
    ])
  ],
  exports: [
    UserDashboardComponent
  ],
  providers: [HttpClient,AddCourseService,DocumentService, FamilyService, ContactService],
  bootstrap: [UserDashboardComponent]
})
export class UserDashboardModule { }
