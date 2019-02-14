import { Component } from '@angular/core';
import { TrainingCourseService } from './coursereg-service';
import {TrainingCourse} from './course';

@Component({
    selector: 'add-coursereg',
    templateUrl: './add-coursereg.component.html',
    
})

export class TrainingCourseComponent {
    //course:TrainingCourse[];
    course: TrainingCourse = new TrainingCourse();
    response: string;
    

    constructor(public ms: TrainingCourseService) {

    }

    add(mform){
        this.ms.sendToServer(this.course).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }

    // display() {
    //     let url = "http://localhost:8051/course/fetch";
    //     this.ms.retriveFromServer(url).subscribe(data=>{
    //     this.course= data;
    //     console.log(this.course);
    //     });
    //         }
}