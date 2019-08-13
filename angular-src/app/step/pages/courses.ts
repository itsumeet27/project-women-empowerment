import {Component} from '@angular/core'


export class Courses{

    constructor(

                public id?:number,
                public courseName?:string,
                public duration?:string,
                public description?:string,
                public ngoName?:string,
                public location?:string,
                public startDate?:string,
                public endDate?:string
                
        ){
        
    }
}