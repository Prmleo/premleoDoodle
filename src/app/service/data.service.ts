import{Http}from '@angular/http';
import{Injectable} from '@angular/core';
import{User}from '../Model/data.model';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService
{
    users:User[];
    constructor(private http:Http)
    {
        this.users=[];
    }
    getItemdatabase()
    {
        return this.http.get("http://localhost:3005/api/data");
    }
    getItem()
    {
        
        this.getItemdatabase()
        .map((res:Response)=>res.json())
        .subscribe((data)=>{
            this.fillArray(data.data)
           });
        return this.users;
    }
    fillArray(datas)
    {
        var iCount:number=0;
        datas.forEach(element => {
            this.users[iCount]=new User(element.User_Data,element.User_Data);
            iCount++;
            });
    }
}
