import { UsersService } from './users/users.service';
import { AdminQuizService } from './quiz/admin-quiz.service';
import { Question } from './../../shared/models/question.model';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { isUndefined } from 'util';
import { Response } from 'src/app/shared/models/response.model';

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

  ngOnInit() {
  }

}
