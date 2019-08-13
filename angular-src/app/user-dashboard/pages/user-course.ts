import {Component} from '@angular/core'


export class UserCourse{

    constructor(

        // ? is set to define that the arguments marked are optional
                public mobileNumber?:number,
                public name?:string,
                public ngoName?:string,
                public course?:string,

        ){
        
    }
}