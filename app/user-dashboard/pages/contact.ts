import {Component} from '@angular/core'


export class Contact{

    constructor(

        // ? is set to define that the arguments marked are optional
                public emailId?:string,
                public address?:string,
                
        ){
        
    }
}