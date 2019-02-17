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
import { AboutComponent } from './pages/about.component';
import { FaqComponent } from './pages/faq.component';
import { StepModule } from './step/step.module';
import { NgoModule } from './ngo/ngo.module';
import { AdminModule } from './admin/admin.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { NgoDashboardModule } from './ngo-dashboard/ngo-dashboard.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    LegislationComponent,
    FaqComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    StepModule,
    UserDashboardModule,
    NgoDashboardModule, 
    NgoModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent },
      { path: 'legislation', component: LegislationComponent },
      { path: 'faq', component: FaqComponent },
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
