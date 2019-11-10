import { AdminQuizComponent } from './quiz/admin-quiz.component';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MatCardModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [UsersComponent, AdminQuizComponent, AdminQuizComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ],
  entryComponents:[UsersComponent, AdminQuizComponent, AdminQuizComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPanelModule { }
