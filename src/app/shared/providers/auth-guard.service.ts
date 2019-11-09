import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  uId: string;
  constructor(private router: Router, private auth: AuthenticationService) { }
  /**
   * 
   */
  canActivate() {
    if (localStorage.getItem('loggedUser')) {
      // logged in so return true
      return true;
    }

    // If it's not logged in redirect to login page
    this.router.navigate(['/','login']);
    return false;
  }
  /**
   * 
   */
  isAdmin() {
    if (localStorage.getItem('isAdmin')) {
      // If admin so return true
      return true;
    }

    // If it's not admin go back
    this.router.navigate(['/','home']);
    return false;
  }
  /**
   * 
   */
  userId() : String{
    this.uId = localStorage.get('userId');
    return this.uId;
  }
}
