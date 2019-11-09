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
  action: String = 'login';
  error: String = '';
  isSignUp: boolean = false;


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
  enter(){
    this.submitted = true;
    
    if(!this.isSignUp){
      if(this.user.email !== '' && this.user.password !== ''){
        this.login();
      }
    }else{

    }
  }

  signUp(){
    this.loading = true;
    this.authenticationService.signup(this.user.name, this.user.email, this.user.password)
        .subscribe(
            data => {
                if(data.success){
                  if(!isUndefined(data.data))
                  console.log(data.data);
                  this.router.navigate(['/home']);
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
                if(data.success){
                  if(!isUndefined(data.data)){
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
