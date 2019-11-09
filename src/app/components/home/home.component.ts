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
  pannelAccess: boolean;
  constructor(private authGuard: AuthGuardService, private authService: AuthenticationService) { 
    this.user = this.authService.user;
    this.canAccessPanel();
  }

  ngOnInit() {
    
  }
  isAutenthicated() : boolean{
    return this.authGuard.canActivate();
  }
  canAccessPanel() {
    this.pannelAccess = this.authGuard.canActivate() && this.user.admin;
  }
}
