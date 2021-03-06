import { AdminQuizComponent } from './components/admin-panel/quiz/admin-quiz.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatCardModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    QuizComponent,
    QuizComponent,
    LoginComponent,
    UsersComponent,
    AdminQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
