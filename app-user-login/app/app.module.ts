import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './userlogin/add-userlogin.component';
import { userLoginService } from './userlogin/userlogin-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,UserLoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [userLoginService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
