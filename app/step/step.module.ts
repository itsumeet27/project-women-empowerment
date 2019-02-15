import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration.component';
import { RegistrationService } from './pages/registration-service';
import { FormsModule } from '@angular/forms';
import { TrainingComponent } from './pages/training.component';
import { GuidelinesComponent } from './pages/guidelines.component';
import { NgoComponent } from './pages/ngo.component';
import { SuccessComponent } from './pages/success.component';
import { FetchCoursesService } from './pages/fetch-courses-service';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { LoginComponent } from './pages/login.component';
import { LoginService } from './pages/login-service';



@NgModule({
  declarations: [
    StepComponent,
    RegistrationComponent,
    TrainingComponent,
    GuidelinesComponent,
    NgoComponent,
    LoginComponent,
    SuccessComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'step', component: StepComponent },
      { path: 'step/guidelines', component: GuidelinesComponent },
      { path: 'step/training', component: TrainingComponent },
      { path: 'step/ngo', component: NgoComponent },
      { path: 'step/registration', component: RegistrationComponent },
      { path: 'step/login', component: LoginComponent },
      { path: 'step/success', component: SuccessComponent }
    ])
  ],
  exports: [
    StepComponent
  ],
  providers: [HttpClient, RegistrationService, FetchCoursesService, LoginService],
  bootstrap: [StepComponent]
})
export class StepModule { }
