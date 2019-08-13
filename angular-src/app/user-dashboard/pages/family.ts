import {Component} from '@angular/core'


export class Family{

    constructor(

        // ? is set to define that the arguments marked are optional
                public noOfMembers?:number,
                public noOfChildren?:number,
                public criteria?:string,
                public annualIncome?:number,
                
        ){
        
    }
}