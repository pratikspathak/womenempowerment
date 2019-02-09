import {Component} from '@angular/core'


export class Ngo{

    constructor(

        // ? is set to define that the arguments marked are optional
                public name?:string,
                public address?:string,
                public organizationType?:string,
                public contactNo?:number,
                public projectInCharge?:string
        ){
        
    }
}