import { AuthenticationService } from 'src/app/shared/providers/authentication.service';
import { Component } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuizApp';
  userName: String;
  constructor(){
  }
}
