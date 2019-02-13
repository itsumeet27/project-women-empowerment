import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgoComponent } from './ngo.component';
import { RouterModule } from '@angular/router';
import { CriteriaComponent } from './pages/criteria.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration.component';
import { RegistrationService } from './pages/registration-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgoComponent,
    CriteriaComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'ngo', component: NgoComponent },
      { path: 'ngo/criteria', component: CriteriaComponent },
      { path: 'ngo/registration', component: RegistrationComponent }
    ])
  ],
  exports: [
    NgoComponent
  ],
  providers: [HttpClient, RegistrationService],
  bootstrap: [NgoComponent]
})
export class NgoModule { }
