import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieService } from './movie/movie-service';
import { AddMovieComponent } from './movie/add-movie.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './includes/header.component';
import { MainComponent } from './includes/main.component';
import { LegislationComponent } from './pages/legislations.component';
import { StepComponent } from './pages/step.component';
import { AboutComponent } from './pages/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    LegislationComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent },
      { path: 'legislation', component: LegislationComponent },
      { path: 'step', component: StepComponent }
    ])
  ],
  
  providers: [MovieService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
