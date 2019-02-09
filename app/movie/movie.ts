import {Component} from '@angular/core'


export class Movie{

    constructor(

        // ? is set to define that the arguments marked are optional
                public name?:string,
                public year?:number
        ){
        
    }
}