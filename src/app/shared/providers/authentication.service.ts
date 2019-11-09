import { environment } from './../../../environments/environment';
import { Response } from './../models/response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_ENDPOINT = environment.apiEndpoint;
  private httpHeaders = new HttpHeaders();
  user: User;
  isAuthenticated: boolean;

  constructor(private http: HttpClient) {
    this.httpHeaders.set('Content-Type', 'application/json');
  }

  signup(username: String, email: String, password: String): Observable<any> {
    return this.http.post<any>(`${this.API_ENDPOINT}/users/register`, { name: username, email: email, password: password },
      {
        headers: this.httpHeaders
      }
    ).pipe(
      map((res: Response) => {
        // login successful if there's a jwt token in the response
        if (res && res.success) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('loggedUser', JSON.stringify('theusertoken'));
            localStorage.setItem('isAdmin', res.data.admin);
            localStorage.setItem('userId', res.data._id);
        }
        return res;
      }));
  }

  login(username: String, password: String) {
    return this.http.post(`${this.API_ENDPOINT}/users/login`, { email: username, password: password })
      .pipe(
        map((res: Response) => {
          // login successful if there's a jwt token in the response
          if (res && res.success) {
            this.user = new User(
               res.data._id, 
               res.data.name,
               res.data.email,
               '',
               res.data.admin,
               res.data.memberSince
            );
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('loggedUser', JSON.stringify('theusertoken'));
            localStorage.setItem('isAdmin', res.data.admin);
            localStorage.setItem('userId', res.data._id);
          }
          return res;
        }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loggedUser');
  }
}
