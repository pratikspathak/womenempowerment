import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NgoLoginComponent } from './ngologin/add-ngologin.component';
import { NgoLoginService } from './ngologin/ngologin-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WelcomeComponent } from './ngologin/welcome.component';


@NgModule({
  declarations: [
    AppComponent,NgoLoginComponent,WelcomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [NgoLoginService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
