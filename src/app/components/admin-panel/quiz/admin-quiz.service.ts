import { environment } from '../../../../environments/environment';
import { AuthGuardService } from '../../../shared/providers/auth-guard.service';
import { Question } from '../../../shared/models/question.model';
import { Response } from '../../../shared/models/response.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminQuizService {
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
    return this.http.post<any>(`${this.API_ENDPOINT}/quiz/all`, { _id: uid },
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    ).pipe(
      map((res: Response) => {
        // Return all quiz in database
        if (res && res.success) {
          // store the array on memory
          this.quizList = res.data;  
        }
        return res;
      }));
  }
}
