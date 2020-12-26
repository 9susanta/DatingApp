import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl='http://localhost:51111/api/';
  constructor(private http:HttpClient) { }
  login(model:any)
  {
    return this.http.post(this.baseUrl+'Account/login',model);
  }
}
