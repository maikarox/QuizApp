import { Question } from '../../../shared/models/question.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './admin-quiz.component.html',
  styleUrls: ['./admin-quiz.component.scss']
})
export class AdminQuizComponent implements OnInit {
  @Input('questions') questions: Question[]
  constructor() { }

  ngOnInit() {
  }

}
