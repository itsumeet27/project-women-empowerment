import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { NgoComponent } from './pages/ngo.component';
import { TraineesComponent } from './pages/trainees.component';

@NgModule({
  declarations: [
    AdminComponent,
    NgoComponent,
    TraineesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'admin', component: AdminComponent },
      { path: 'admin/ngo', component: NgoComponent },
      { path: 'admin/trainees', component: TraineesComponent }
    ])
  ],
  exports: [
    AdminComponent
  ],
  providers: [HttpClient],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
