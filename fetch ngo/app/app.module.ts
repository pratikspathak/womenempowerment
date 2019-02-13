import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoLoginComponent } from './add-ngologin.component';
import { NgoLogin } from './ngologin';
import { NgoLoginService } from './ngologin-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,NgoLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NgoLoginService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
