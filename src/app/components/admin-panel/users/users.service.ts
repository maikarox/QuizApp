import { environment } from './../../../../environments/environment';
import { AuthGuardService } from './../../../shared/providers/auth-guard.service';
import { User } from './../../../shared/models/user.model';
import { Response } from '../../../shared/models/response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_ENDPOINT = environment.apiEndpoint;
  userList: User[] = [];
  constructor(
    private authGuard: AuthGuardService, 
    private http: HttpClient) { }

  /**
   *  @name getUsers()
   *  Return all the published quiz
   */
  getUsers(){
    const uid = localStorage.getItem('userId');
    return this.http.post<any>(`${this.API_ENDPOINT}/users/`, { _id: uid },
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    ).pipe(
      map((res: Response) => {
        // Return all user registered in the platform
        if (res && res.success) {
          // store the array in memory
          this.userList = res.data;  
        }
        return res;
      }));
  }
}
