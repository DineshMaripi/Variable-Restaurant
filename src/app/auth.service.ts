import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl=""
constructor(private http: HttpClient) { }

signup(user:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/login`,Credential)
}
login(Credential:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/login`,Credential)
}
logout():void{
  localStorage.removeItem('authToken');
}
}
