import { Answer } from './../../shared/models/answer.model';
import { isUndefined } from 'util';
import { QuizService } from './quiz.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizList: Question[];
  error: any;
  loading: boolean;
  current: Question;
  currentIndex: number = 0;
  isSubmitted: boolean[] = [];
  selected: boolean[] = [];
  constructor(private quizService: QuizService) { 
    this.quizService.getQuiz().subscribe(data => {
      if (data.success) {
        if (!isUndefined(data.data)){
          this.quizList = data.data;
          if(this.quizList.length > 0){
            this.current = this.quizList[0];
          }
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
  next(){
    if(this.thereIsNext()){
      this.currentIndex++;
      this.current = this.quizList[this.currentIndex];
      this.isSubmitted[this.currentIndex] = false;
      this.selected[this.currentIndex] = false;
    }
  }
  previous() {
    if(this.currentIndex > 0){
      this.currentIndex--;
      this.current = this.quizList[this.currentIndex];
    }
  }
  thereIsNext(): boolean {
    return !isUndefined(this.quizList) && this.currentIndex < this.quizList.length - 1;
  }

  submitForm() {
    this.isSubmitted[this.currentIndex] = true;
  }
  changeSelected(ans){
    this.selected[this.currentIndex] = ans;
  }
}
