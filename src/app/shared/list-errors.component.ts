import {Component, Input} from '@angular/core';
import {Errors} from './models';

export class ListErrorsComponent{
    formattedError: Array<string> = [];

    @Input()
    set errors (errorList: Errors){
        this.formattedError = [];

        if (errorList.errors) {
            for (let field in errorList.errors) {
                this.formattedError.push(`${field} ${errorList.errors[field]}`)
            }
        }
    };
    get errorList(){return this.formattedError}
}