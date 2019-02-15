import { UserLogin } from './userlogin';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { AddngoLoginComponent } from './add-ngologin.component';
import { Observable } from 'rxjs';


@Injectable() //Dependency Injection
export class UserLoginService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
    sendToServer(userlogin:UserLogin){
     let url = "http://localhost:8051/userlogin/verifyuser";
     return this.http.post(url,userlogin);
     
      }    
}