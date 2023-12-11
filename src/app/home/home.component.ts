import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {authService} from "../services/auth.service";
import{AnnonceService} from "../services/annonce.service";
import {Annonces} from "../interfaces/annonces";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userConnected: boolean;
  response: Annonces[] = [];

  onCreateAdvertClick() {
    if (this.authService.isLoggedIn) {
      // Navigate to create advert page
      this.router.navigate(['/create-advert']);
      console.log("******")
      console.log(this.userConnected)
    } else {
      // Redirect to login page
      this.router.navigate(['/auth']);
    }
  }
  constructor( private route: ActivatedRoute,
    private router: Router, private annonceService: AnnonceService,
  private authService: authService){
      this.userConnected = this.checkUserConnected()

    }
  ngOnInit() {

      this.loadAnnonces();

  }
private checkUserConnected(): boolean {
  const token = this.authService.getToken();
  return !!token; // Vérifie si le token existe
}

  loadAnnonces() {
    this.annonceService.getAnnonces().subscribe((results: Annonces[]) => {

      console.log(results);
      this.response = results
    })
  }

}
