import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ngoLoginComponent } from './ngologin/add-ngologin.component';
import { ngoLoginService } from './ngologin/ngologin-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,ngoLoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [ngoLoginService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
