import {Component} from '@angular/core'


export class User{

    constructor(

                
                public name?:string,
                public username?:string,
                public password?:string,
                public confirmPassword?:string,
                public mobileNumber?:number,
                public birthDate?:string,
                public designation?:string,
                public salary?:number,
        ){
        
    }
}