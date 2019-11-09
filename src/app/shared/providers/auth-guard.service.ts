import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('loggedUser')) {
        // logged in so return true
        return true;
    }

    // If it's not logged in redirect to login page
    this.router.navigate(['/login']);
    return false;
}
}
