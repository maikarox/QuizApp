import { isUndefined } from 'util';
import { AdminQuizService } from './admin-quiz.service';
import { Question } from '../../../shared/models/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './admin-quiz.component.html',
  styleUrls: ['./admin-quiz.component.scss']
})
export class AdminQuizComponent implements OnInit {
  @Input('questions') questions: Question[]
  error: any;
  loading: boolean;
  constructor(private quizService: AdminQuizService) {

  }

  ngOnInit() {
  }

  updateQuestion(question: Question) {
    this.loading = true;
    this.quizService.updateQuiz(question).subscribe(data => {
      if (data.success) {
        if (!isUndefined(data.data)) {
          this.loading = false;
        }
      }
    },
      error => {
        this.error = error
        console.log(error);
        this.loading = false;
      });
  }
}
