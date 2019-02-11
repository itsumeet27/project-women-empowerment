import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration.component';
import { RegistrationService } from './pages/registration-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StepComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'step', component: StepComponent },
      { path: 'step/registration', component: RegistrationComponent }
    ])
  ],
  exports: [
    StepComponent
  ],
  providers: [HttpClient, RegistrationService],
  bootstrap: [StepComponent]
})
export class StepModule { }
