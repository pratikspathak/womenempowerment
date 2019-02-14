import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { TrainingCourseComponent } from './add-coursereg.component';
import { TrainingCourseService } from './coursereg-service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,TrainingCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule
  ],
  providers: [TrainingCourseService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
