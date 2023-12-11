import { Component } from '@angular/core';
import { Annonces } from "../interfaces/annonces";
import { ActivatedRoute, Router } from "@angular/router";
import { AnnonceService } from "../services/annonce.service";

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent {
  response: Annonces[] = [];
  locationFilter: string = '';
  priceFilter: number | null = null;
  typeFilter: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private annonceService: AnnonceService,
  ) {}

  ngOnInit() {
    this.loadAnnonces();
  }

  loadAnnonces() {
    this.annonceService.getAnnonces().subscribe((results: Annonces[]) => {
      console.log(results);
      this.response = results;
      console.log(this.response[0].id)
    });
  }

  applyFilters() {
    if (this.locationFilter) {
      this.annonceService.searchAdvertsByLocation(this.locationFilter).subscribe((results: Annonces[]) => {
        this.response = results;
      });
    
    }
  }
  applyFilterPrice() {
      this.annonceService.searchAdvertsByPrice().subscribe((results: Annonces[]) => {
        this.response = results;
   
      })
  }
  applyFilterType() {
    if (this.typeFilter) {
      this.annonceService.searchAdvertsByType(this.typeFilter).subscribe((results: Annonces[]) => {
        this.response = results;
      });
    }
  }
}
