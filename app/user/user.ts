import {Component} from '@angular/core'


export class User{

    constructor(

        // ? is set to define that the arguments marked are optional
                public name?:string,
                public username?:string,
                public password?:string,
                public confirmPassword?:string,
                public mobileNumber?:number,
                public birthDate?:Date,
                public designation?:string,
                public salary?:number,
        ){
        
    }
}