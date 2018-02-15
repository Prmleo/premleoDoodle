import { Component, OnInit } from '@angular/core';
import{User}from '../Model/data.model';
import{UserService}from '../service/data.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import{MailValidation}from './mail.validation';


@Component({
  selector: 'app-mycsv-project',
  templateUrl: './mycsv-project.component.html',
  styleUrls: ['./mycsv-project.component.css']
})
export class MycsvProjectComponent {
  users:User[];
  myFormObject:FormGroup;
  mydata;
  constructor(private usrService:UserService) {
    this.users=this.usrService.getItem();
    this.myFormObject=new FormGroup({
      userMail:new FormControl('',[Validators.required,MailValidation.noEmpty]),
      userAddr:new FormControl('',[Validators.required,Validators.minLength(10)]),
      frstName:new FormControl('',Validators.required),
      lstName:new FormControl('',Validators.required),
      Hbby:new FormControl('',Validators.required)
    })
  }
  get userMail()
  {
    return this.myFormObject.get('userMail');
  }
get userAddr()
{
  return this.myFormObject.get('userAddr');
}
get frstName()
{
  return this.myFormObject.get('frstName');
}
get lstName()
{
  return this.myFormObject.get('lstName');
}
get Hbby()
{
  return this.myFormObject.get('Hbby');
}
   

   /*userinsert()
  {
    var MongoClient=require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/leoDoodle";
    console.log("in"+this.mydata);
    MongoClient.connect(url,function(dErr,ref){
      if(dErr)
      console.log("database error");
      else{
          var myDatabase=ref.db("leoDoodle");
      myDatabase.collection("userData").insertOne(this.mydata,function(rErr,rRef){
        if(rErr)
        console.log("Insert record error");
        else
        console.log("data  inserted");
        
          })
        }
        ref.close();
      })
  }*/
}
