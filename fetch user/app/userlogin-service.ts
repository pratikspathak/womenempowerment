

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
//import { AddngoLoginComponent } from './add-ngologin.component';


@Injectable() //Dependency Injection
export class UserLoginService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
   
    retriveFromServer(url:string):Observable<User[]>{
        //our code to be communicated with the server will be here
     return this.http.get<User[]>(url)
     
      }  
}