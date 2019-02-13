import { Component } from '@angular/core'


export class Ngo {

    constructor(
        public id?: number,
        public name?: string,
        public username?: string,
        public password?: string,
        public confirmPassword?: string,
        public address?: string,
        public organizationType?: string,
        public contactNo?: number,
        public projectInCharge?: number,
    ) {

    }
}