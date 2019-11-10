import { UsersService } from './users/users.service';
import { AdminQuizService } from './quiz/admin-quiz.service';
import { Question } from './../../shared/models/question.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { isUndefined } from 'util';
import { Response } from 'src/app/shared/models/response.model';
import { MatTabChangeEvent } from '@angular/material';
import { Answer } from 'src/app/shared/models/answer.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  userList: User[];
  questionList: Question[];
  loading: boolean;
  error: String;
  addNew: boolean;
  selectedTab = 1;
  newQuestion: Question;
  oneCorrect: boolean = true;
  submitted: boolean = false;

  constructor(
    private quizService: AdminQuizService, 
    private userService: UsersService 
  ) { 
    this.quizService.getQuiz().subscribe(data => {
      if (data.success) {
        if (!isUndefined(data.data)){
          this.questionList = data.data;
        }
      }
    },
    error => {
      this.error = error
      console.log(error);
      this.loading = false;
    });
  }
  addQuestion(){
    const thereIsCorrect = this.thereIsOneCorrectAnswer(this.newQuestion);
    this.submitted = true;
    this.oneCorrect = !isUndefined(thereIsCorrect) && thereIsCorrect.length > 0;
    if(this.newQuestion.questionBody !== '' && this.oneCorrect){
      this.loading = true;
      this.quizService.addQuiz(this.newQuestion).subscribe(data => {
        if (data.success) {
          if (!isUndefined(data.data)){
            this.loading = false;
            this.oneCorrect = true;
            this.submitted = false;
            this.questionList.unshift(data.data);
            this.initNewQuestionForm();
            alert('Created!');  
          }
        }
      },
      error => {
        this.loading = false;
        this.error = error
        console.log(error);
        
      });
    }
    
  } 

  thereIsOneCorrectAnswer(question: Question){
    return question.answers.filter((a) => {
      return a.isCorrect === true;
    });
  }
  ngOnInit() {
   
  }

  initNewQuestionForm(){
    const newAnswers = [
      new Answer('', '', true),
      new Answer('', '', false)
    ];
    this.newQuestion = new Question('', '', newAnswers, false);
  }
  showNewDialog(){
    this.initNewQuestionForm();
    this.addNew = true;
    this.selectedTab = 3;
  }
  closeNewDialog(){
    this.addNew = false;
    this.selectedTab = 2;
  }
  
}
