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
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { FundingComponent } from './pages/funding-norms.component';
import { LoginComponent } from './pages/login.component';
import { LoginService } from './pages/login-service';

@NgModule({
  declarations: [
    NgoComponent,
    CriteriaComponent,
    RegistrationComponent,
    OrganizationsComponent,
    SuccessComponent,
    LoginComponent,
    FundingComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'ngo', component: NgoComponent },
      { path: 'ngo/criteria', component: CriteriaComponent },
      { path: 'ngo/organizations', component: OrganizationsComponent },
      { path: 'ngo/funding-norms', component: FundingComponent },
      { path: 'ngo/registration', component: RegistrationComponent },
      { path: 'ngo/login', component: LoginComponent },
      { path: 'ngo/success', component: SuccessComponent },
    ])
  ],
  exports: [
    NgoComponent
  ],
  providers: [HttpClient, RegistrationService, LoginService],
  bootstrap: [NgoComponent]
})
export class NgoModule { }
