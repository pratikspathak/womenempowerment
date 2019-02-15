import { NgoLogin } from './ngologin';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { AddngoLoginComponent } from './add-ngologin.component';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable() //Dependency Injection
export class NgoLoginService{
    //This class will talk to server


    constructor(private http:HttpClient)
    {
            
    }
	
    sendToServer(ngologin:NgoLogin){
     let url = "http://localhost:8051/ngologin/verifyngo";
     return this.http.post(url,ngologin);
     
      }    
}