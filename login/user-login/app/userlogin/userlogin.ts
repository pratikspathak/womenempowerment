import {Component} from '@angular/core'


export class UserLogin{

    constructor(

        // ? is set to define that the arguments marked are optional
                
                public username?:string,
                public password?:string,
               
        ){
        
    }
}