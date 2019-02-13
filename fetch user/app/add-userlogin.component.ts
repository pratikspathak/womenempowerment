
import { Component } from '@angular/core';
import { UserLoginService } from './userlogin-service';
import {User} from './user';

@Component({
    selector: 'add-userlogin',
    templateUrl: './add-userlogin.component.html',
    
})

export class UserLoginComponent {
    user:User[];
    

    constructor(public ms: UserLoginService) {

    }

    ngOnInit(){
        this.display();
    }

    display() {
        let url = "http://localhost:8051/user/fetch";
        this.ms.retriveFromServer(url).subscribe(data=>{
        this.user= data;
        console.log(this.user);
        });
            }
}

