import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TrainingCourse} from './course';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class TrainingCourseService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
    sendToServer(course: TrainingCourse){
        //Send data to server in JSON form
        let url = "http://localhost:8051/course/add";
        return this.http.post(url, course);
	}
    
}