import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Response } from './../models/response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiEndpoint = environment.apiEndpoint;
  private httpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.httpHeaders.set('Access-Control-Allow-Origin', '*');
    this.httpHeaders.set('Access-Control-Allow-Methods', '*');
    this.httpHeaders.set('Access-Control-Max-Age', '*');
    this.httpHeaders.set('Content-Type', 'application/json');
  }

  signup(username: String, email: String,  password: String) : Observable<any> {
    return this.http.post<any>(`${this.apiEndpoint}/users/register`, { name: username, email: email, password: password }, 
      {
        headers:  this.httpHeaders
      }
    ).pipe(
      map((res: Response) => {
      // login successful if there's a jwt token in the response
      if (res && res.success) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loggedUser', JSON.stringify('theusertoken'));
      }
      return res;
    }));
  }
  
  login(username: String, password: String) {
    return this.http.post(`${this.apiEndpoint}/users/login`, { email: username, password: password }).pipe(
      map((res: Response) => {
      // login successful if there's a jwt token in the response
      if (res && res.success) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loggedUser', JSON.stringify('theusertoken'));
      }
      return res;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loggedUser');
  }
}
