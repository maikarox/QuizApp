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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
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

  /**
   *  @name updateUser()
   *  @param User
   *  Update user
   */
  updateUser(userToUpdate: User){
    const uid = localStorage.getItem('userId');
    return this.http.put<any>(`${this.API_ENDPOINT}/users/update?id=${userToUpdate._id}`, 
    { 
      _id: uid, 
      id: userToUpdate._id,
      name: userToUpdate.name, 
      email: userToUpdate.email,
      admin: userToUpdate.admin      
    },
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    ).pipe(
      map((res: Response) => {
        return res;
      }));
  }
}
