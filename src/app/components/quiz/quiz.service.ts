import { AuthGuardService } from './../../shared/providers/auth-guard.service';
import { Question } from './../../shared/models/question.model';

import { environment } from './../../../environments/environment';
import { Response } from '../../shared/models/response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private API_ENDPOINT = environment.apiEndpoint;
  quizList: Question[] = [];
  constructor(
    private authGuard: AuthGuardService, 
    private http: HttpClient) { }

  /**
   *  @name getQuiz()
   *  Return all the published quiz
   */
  getQuiz(){
    const uid = localStorage.getItem('userId');
    return this.http.post<any>(`${this.API_ENDPOINT}/quiz`, { _id: uid },
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    ).pipe(
      map((res: Response) => {
        // Return the published questions
        if (res && res.success) {
          // store the array on memory
          this.quizList = res.data;  
        }
        return res;
      }));
  }
}
