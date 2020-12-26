import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.getUsers();
  }
  getUsers()
  {
    this.http.get("http://localhost:51111/api/Users").subscribe(response=>{
      this.users=response;
    },error=>{
      console.log(error);
    });
  }
}
