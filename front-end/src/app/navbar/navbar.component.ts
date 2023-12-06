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
    return this.authService.isLoggedIn;
  }

  // onLogoutClick(): void {
  //   // Call your logout method from the AuthService
  //   this.authService.logout().subscribe(
  //     (response) => {
  //       console.log(response); // Logged out successfully
  //       // Add additional logic as needed after successful logout
  //       this.router.navigate(['/auth']);
  //     },
  //     (error) => {
  //       console.error(error);
  //       // Handle logout error if needed
  //     }
  //   );
  // }
}
