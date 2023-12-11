import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  advertForm: FormGroup;
  authToken: string | null;
  advertId!: string | null; 

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService:  authService
  ) {
    this.advertForm = this.formBuilder.group({
      address: [''],
      description: [''],
      type: [''],
      nbPlaces: [0],
      photos: [''],
      price:[0]
    });

    this.authToken = localStorage.getItem('access_token');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.advertId = params['id'];
      if (this.advertId) {
        this.fetchAdvertById(this.advertId);
      }
    });
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  fetchAdvertById(id: string): void {
    this.http.get<any>(`http://localhost:8080/api/advert/get/${id}`)
      .subscribe(
        (response) => {
          this.advertForm.patchValue({
            address: response.location,
            description: response.description,
            type: response.type,
            nbPlaces: response.numberOfPlaces,
            price:response.price
          });
        },
        (error) => {
          console.error('Error fetching advert:', error);
        }
      );
  }

  onSubmit(): void {
    const formData = {
      location: this.advertForm.get('address')?.value,
      description: this.advertForm.get('description')?.value,
      type: this.advertForm.get('type')?.value,
      numberOfPlaces: this.advertForm.get('nbPlaces')?.value,
      price: this.advertForm.get('price')?.value,

      images: this.advertForm.get('photos')?.value ? [this.advertForm.get('photos')?.value] : []
    };
    if (this.advertId) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.authToken}`,
        'Content-Type': 'application/json'
      });

      this.http.put(`http://localhost:8080/api/advert/update/${this.advertId}`, formData, { headers })
        .subscribe(
          (response) => {
            console.log('Advert updated:', response);
            this.router.navigate(['/adverts']);
          },
          (error) => {
            console.error('Error updating advert:', error);
          }
        );
    }
  }
  onDelete(): void {
    if (this.advertId) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.authToken}`
      });

      this.http.delete(`http://localhost:8080/api/advert/delete/${this.advertId}`, { headers })
        .subscribe(
          (response) => {
            console.log('Advert deleted:', response);
            this.router.navigate(['/adverts']);
          },
          (error) => {
            this.router.navigate(['/adverts']);

            console.error('Error deleting advert:', error);
          }
        );
    }
  }
}
