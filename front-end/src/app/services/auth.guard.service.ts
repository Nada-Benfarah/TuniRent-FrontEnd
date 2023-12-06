import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { authService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: authService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      return true; // User is allowed to access the route
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if not logged in
      return false;
    }
  }
}
