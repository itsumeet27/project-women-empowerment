import {Component} from '@angular/core'


export class Document{

    constructor(

        // ? is set to define that the arguments marked are optional
                public adhaarNo?:string,
                public panCardNo?:string,
                
        ){
        
    }
}