import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { AdminQuizComponent } from './admin-quiz.component';



@NgModule({
  declarations: [UsersComponent, AdminQuizComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents:[UsersComponent, AdminQuizComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminQuizModule { }