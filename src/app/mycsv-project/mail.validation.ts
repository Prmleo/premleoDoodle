import {AbstractControl}from '@angular/forms';
import{Component,Input}from '@angular/core';
import{MycsvProjectComponent}from './mycsv-project.component';
import{User}from '../Model/data.model';
import{UserService}from '../service/data.service';
@Component({
    selector: 'app-mail',
   template:"this is Premleo"
})
//@Input() cust:Customer;
export class MailValidation
{
    static noEmpty(control:AbstractControl)
    {
        var textboxName:string=control.value;

        if(textboxName=="premleojesus@gmail.com")
        return {noEmpty:true};

        return null;
    }
}
