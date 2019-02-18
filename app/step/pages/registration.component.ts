import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration-service';
import { Registration } from './registration';
import * as CryptoJS from 'crypto-js';

@Component({
    selector: 'user-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['../../css/bootstrap.min.css', '../../css/mdb.min.css', './registration.component.css']
})
export class RegistrationComponent implements OnInit {


    encryptMode: boolean;
    textToConvert: string;
    password: string;
    conversionOutput: string;
    router: any;
    ngOnInit() {

    }

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
        this.encryptMode = true;
    }

    changeMode() {
        this.encryptMode = this.encryptMode ? false : true;
        this.textToConvert = "";
    }

    convertText() {
        if (this.textToConvert.trim() === "" || this.password.trim() === "") {
            this.conversionOutput = "Please fill the textboxes."
            return;
        }
        else {
            if (this.encryptMode) {
                this.conversionOutput = CryptoJS.AES.encrypt(this.textToConvert.trim(), this.password.trim()).toString();
            }
            else {
                this.conversionOutput = CryptoJS.AES.decrypt(this.textToConvert.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);
            }
        }
    }

    add() {

        this.ngs.sendToServer(this.registration).subscribe(
            data => {

                this.response = data['status'];
                this.reloadPage();
            }
        );
    }

    reloadPage() {
        window.location.href = './step/success';
    }
}