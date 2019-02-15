import { NgoLogin } from './ngologin';
import { Component } from '@angular/core';
import { NgoLoginService } from './ngologin-service';
import { User } from './user';
@Component({
    selector: 'add-ngologin',
    templateUrl: './add-ngologin.component.html',
    styleUrls: ['add-ngologin.component.css']
})

export class NgoLoginComponent {
    user: User;
    
    //username :string;
    password: string;
    id: number;


    ngologin: NgoLogin = new NgoLogin();
    response: string;
    constructor(public ms: NgoLoginService) {

    }

    display() {

       
        this.ms.sendToServer(this.ngologin).subscribe(
            data => {
                this.response = data['status'];
            });
    }
}
