import {Component} from '@angular/core'


export class TrainingCourse{

    constructor(

                
                public courseName?:string,
                public duration?:number,
                public description?:string,
                public ngoName?:string,
                public location?:string
               
        ){
        
    }
}