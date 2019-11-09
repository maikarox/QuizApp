import { User } from './../../shared/models/user.model';
import { AuthGuardService } from './../../shared/providers/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/providers/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(private auth: AuthGuardService, private authService: AuthenticationService) { 
    this.user = this.authService.user;
  }

  ngOnInit() {
    
  }
  isAutenthicated() : boolean{
    return this.auth.canActivate();
  }
}
