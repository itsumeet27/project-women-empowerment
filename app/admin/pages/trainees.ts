import {Component} from '@angular/core'


export class Trainees{

    constructor(
                public id?:number,
                public name?:string,
                public username?:string,
                public password?:string,
                public mobileNumber?:number,
                public birthDate?:string,
                public designation?:string,
                public salary?:number,
        ){
        
    }
}