import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'user-dashboard', component: UserDashboardComponent }
    ])
  ],
  exports: [
    UserDashboardComponent
  ],
  providers: [],
  bootstrap: [UserDashboardComponent]
})
export class UserDashboardModule { }
