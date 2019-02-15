import { UserLogin } from './userlogin';
import { Component } from '@angular/core';
import { UserLoginService } from './userlogin-service';

@Component({
    selector: 'add-userlogin',
    templateUrl: './add-userlogin.component.html',
    styleUrls: ['add-userlogin.component.css']
})

export class UserLoginComponent {
    
    
    //username :string;
    password: string;
    id: number;


    userlogin: UserLogin = new UserLogin();
    response: string;
    constructor(public ms: UserLoginService) {

    }

    display() {

       
        this.ms.sendToServer(this.userlogin).subscribe(
            data => {
                this.response = data['status'];
            });
    }
}
