import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent {

  advertForm: FormGroup;
  authToken: string | null; 

  constructor(private http: HttpClient, private formBuilder: FormBuilder,    private router: Router    ) {
    this.advertForm = this.formBuilder.group({
      address: [''],
      description: [''],
      type: [''],
      nbPlaces: [0],
      photos: [''],
      price:['']
    });

    this.authToken = localStorage.getItem('access_token'); 
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
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`,
      'Content-Type': 'application/json'
    });
  
    this.http.post('http://localhost:8080/api/advert/create', formData, { headers })
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          this.router.navigate(['/adverts']);

        },
        (error) => {
          console.error('API Error:', error);
        }
      );
  }
  
}
