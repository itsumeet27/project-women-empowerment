import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration-service';
import { Registration } from './registration';

@Component({
    selector: 'registration-page',
    templateUrl: './registration.component.html',
    styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css','./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    router: any;
    ngOnInit() {

    }

    array = { password: "" };

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    registration: Registration = new Registration();
    response: string;
    constructor(private ngs: RegistrationService) {

    }


    add() {

        let confirm = true;

        if (confirm) {

            this.ngs.sendToServer(this.registration).subscribe(
                data => {
                    //Take the response from server and storing in string variable
                    this.response = data['status'];
                    this.reloadPage();
                }
            );
        }
    }

    reloadPage() {
        window.location.href = './ngo/login';
    }
}