import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl='http://localhost:51111/api/';
  
  private currentUserSource=new ReplaySubject<User>(1);
  //act as buffer to store last 1 record
  currentUser$=this.currentUserSource.asObservable();
  //$ symbol because this a obserable varibale

  constructor(private http:HttpClient) { }
  login(model:any)
  {
    return this.http.post(this.baseUrl+'Account/login',model).pipe(
      map((response:User)=>{
        const user=response;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));
          //this.currentUserSource.next(user);
          this.setCurrentUser(user);
        }
      })
    );
  }
  setCurrentUser(user:User)
  {
    this.currentUserSource.next(user);
  }
  logout()
  {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}