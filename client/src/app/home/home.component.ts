import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode=false;
  user:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  registerToggle()
  {
    this.registerMode=!this.registerMode;
  }
  getUsers()
  {
    this.http.get('http://localhost:51111/api/users').subscribe(users => this.user=users)
  }
  cancelRegisterMode(event:boolean){
    this.registerMode=event;
  }

}
