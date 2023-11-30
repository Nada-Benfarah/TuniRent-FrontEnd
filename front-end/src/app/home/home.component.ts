import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {authService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userConnected: boolean;


  constructor( private route: ActivatedRoute,
    private router: Router,
    private authService: authService){
      this.userConnected = this.checkUserConnected()

    }

private checkUserConnected(): boolean {
  const token = this.authService.getToken();
  return !!token; // Vérifie si le token existe
}

}
