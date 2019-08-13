import { Component } from '@angular/core'


export class Registration {


    constructor(

        // ? is set to define that the arguments marked are optional
        public name?: string,
        public username?: string,
        public password?: string,
        public confirmPassword?: string,
        public mobileNumber?: number,
        public birthDate?: string,
        public designation?: string,
        public salary?: number,
    ) {

    }

}