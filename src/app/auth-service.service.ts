import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiurl='https://dummyjson.com/auth/login';

  constructor(private http:HttpClient) {}
 
  ProceedLogin(UserCred:any){
    return this.http.post(this.apiurl,UserCred);
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  GetToken(){
   return localStorage.getItem('token')||'';
  }
}
