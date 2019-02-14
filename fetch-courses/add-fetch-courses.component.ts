//import { NgoLogin } from './ngologin';
import { Component } from '@angular/core';
import { FetchCoursesService } from './fetch-courses-service';
import {Courses} from './fetch-courses';

@Component({
    selector: 'add-fetch-courses',
    templateUrl: './add-fetch-courses.component.html',
    
})

export class FetchCoursesComponent {
    courses:Courses[];
   // ngologin: NgoLogin = new NgoLogin();

    constructor(public ms: FetchCoursesService) {

    }

    ngOnInit(){
        this.display();
    }

    display() {
        let url = "http://localhost:8051/course/fetch";
        this.ms.retriveFromServer(url).subscribe(data=>{
        this.courses= data;
        console.log(this.courses);
        });
            }
}