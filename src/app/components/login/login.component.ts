import { AuthenticationService } from './../../shared/providers/authentication.service';
import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  loading: boolean;
  submitted: boolean = false;
  error: String = '';
  action: String = 'Login'
  other: String = 'Signup'
  isSignUp: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = new User(
      '',
      '',
      '',
      '',
      false,
      null,
    )
  }

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();
  }

  changeAction() {
    this.isSignUp = !this.isSignUp
    this.action = (this.isSignUp) ? 'Signup' : 'Login';
    this.other = (this.isSignUp) ? 'Login' : 'Signup';
  }

  enter() {
    this.submitted = true;
    if(this.user.email !== '' && this.user.email.match(this.emailPattern)){
      if (!this.isSignUp) {
        if (this.user.email !== '' && this.user.password !== '') {
          this.login();
        }
      } else {
        if (this.user.email !== '' && this.user.name !== '' && this.user.password !== '') {
          this.signUp();
        }
      }
    }else{
      alert('Not a valid email');
    }
  }

  signUp() {
    this.loading = true;
    this.authenticationService.signup(this.user.name, this.user.email, this.user.password)
      .subscribe(
        data => {
          if (data.success) {
            if (!isUndefined(data.data)){
              console.log(data.data);
              this.router.navigate(['/home']);
            }
              
          }
        },
        error => {
          this.error = error
          this.loading = false;
        });
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.user.email, this.user.password)
      .subscribe(
        data => {
          if (data.success) {
            if (!isUndefined(data.data)) {
              console.log(data.data);
              this.router.navigate(['/home']);
            }
          }
        },
        error => {
          this.error = error
          this.loading = false;
        });
  }
}
