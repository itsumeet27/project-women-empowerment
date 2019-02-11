import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './includes/header.component';
import { FooterComponent } from './includes/footer.component';
import { MainComponent } from './includes/main.component';
import { LegislationComponent } from './pages/legislations.component';
import { StepComponent } from './pages/step.component';
import { AboutComponent } from './pages/about.component';
import { NgoComponent } from './pages/ngo.component';
import { FaqComponent } from './pages/faq.component';
import { AdminModule } from './admin/admin.module';
import { StepModule } from './step/step.module';
import { NgoModule } from './ngo/ngo.module';
import { LoginComponent } from './user/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    LegislationComponent,
    StepComponent,
    NgoComponent,
    FaqComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    StepModule,
    NgoModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'legislation', component: LegislationComponent },
      { path: 'step', component: StepComponent },
      { path: 'ngo', component: NgoComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
