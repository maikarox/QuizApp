import { Answer } from './../../../shared/models/answer.model';
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

  /**
   *  @name getQuiz()
   *  @param Question
   *  Add question
   */
  addQuiz(question: Question){
    const uid = localStorage.getItem('userId');
    return this.http.post<any>(`${this.API_ENDPOINT}/quiz/add`, 
      { 
        _id: uid, 
        questionBody: question.questionBody, 
        published: question.published,
        answers: JSON.stringify(question.answers)      
      },
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }
    ).pipe(
      map((res: Response) => {
        return res;
      }));
  }

  /**
   *  @name updateQuiz()
   *  @param Question
   *  Update question
   */
  updateQuiz(question: Question){
    const uid = localStorage.getItem('userId');
    return this.http.put<any>(`${this.API_ENDPOINT}/quiz/update/?id${question._id}`, 
    { 
      _id: uid, 
      id: question._id,
      questionBody: question.questionBody, 
      published: question.published,
      answers: JSON.stringify(question.answers)      
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
