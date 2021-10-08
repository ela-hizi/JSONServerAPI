import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'JSONServerAPI';

  constructor(private rs : RestService){}
  
  totalLength:any;
  page:number = 1;

  columns = ["User Id", "employee_name", "employee_salary", "employee_age", "profile_image"];

  index = ["id", "employee_name", "employee_salary", "employee_age", "profile_image"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
        this.totalLength = result.length;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
