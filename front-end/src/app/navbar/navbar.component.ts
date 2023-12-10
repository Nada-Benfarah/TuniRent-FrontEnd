import { Component } from '@angular/core';
import { authService } from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService:  authService,private router: Router) {}

  isLoggedIn(): boolean {
    console.log("aaa => ", this.authService.isLoggedIn)
    return this.authService.isLoggedIn;
  }

  onLogoutClick(): void {
    // Call your logout method from the AuthService
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
