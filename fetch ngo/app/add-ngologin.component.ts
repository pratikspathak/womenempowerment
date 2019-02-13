import { NgoLogin } from './ngologin';
import { Component } from '@angular/core';
import { NgoLoginService } from './ngologin-service';
import {Ngo} from './ngo';

@Component({
    selector: 'add-ngologin',
    templateUrl: './add-ngologin.component.html',
    
})

export class NgoLoginComponent {
    ngo:Ngo[];
    ngologin: NgoLogin = new NgoLogin();

    constructor(public ms: NgoLoginService) {

    }

    ngOnInit(){
        this.display();
    }

    display() {
        let url = "http://localhost:8051/ngo/fetch";
        this.ms.retriveFromServer(url).subscribe(data=>{
        this.ngo= data;
        console.log(this.ngo);
        });
            }
}

