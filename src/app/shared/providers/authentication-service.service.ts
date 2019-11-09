import { environment } from './../../../environments/environment';
import { Response } from './../models/response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiEndpoint = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  signup(username: String, email: String,  password: string){
    return this.http.post(`${this.apiEndpoint}/login`, { name: username, email: email, password: password }).subscribe((res: Response) => {
      // login successful if there's a jwt token in the response
      if (res && res.success) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loggedUser', JSON.stringify('theusertoken'));
      }
      return res;
    });
  }
  
  login(username: string, password: string) {
    return this.http.post(`${this.apiEndpoint}/register`, { name: username, password: password }).subscribe((res: Response) => {
      // login successful if there's a jwt token in the response
      if (res && res.success) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('loggedUser', JSON.stringify('theusertoken'));
      }
      return res;
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loggedUser');
  }
}
