import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieService } from './movie/movie-service';
import { AddMovieComponent } from './movie/add-movie.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './includes/header.component';
import { MainComponent } from './includes/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
