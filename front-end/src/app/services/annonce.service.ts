import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonces} from '../interfaces/annonces';

@Injectable({providedIn: 'root'})
export class AnnonceService {
  private  apiUrl : String = 'http://localhost:8080/api/advert';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,) {
  }


  getAnnonces(): Observable <Annonces[]> {
    return this.http.get<any>(`${this.apiUrl}/all`)
  }

  searchAdvertsByLocation(location: string): Observable<Annonces[]> {
    const url = `${this.apiUrl}/search/location/${location}`;
    return this.http.get<Annonces[]>(url);
  }

  searchAdvertsByPrice(price: number): Observable<Annonces[]> {
    const url = `${this.apiUrl}/search/price/${price}`;
    return this.http.get<Annonces[]>(url);
  }

  searchAdvertsByType(type: string): Observable<Annonces[]> {
    const url = `${this.apiUrl}/search/type/${type}`;
    return this.http.get<Annonces[]>(url);
  }
}
/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';



  private processResponse(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: { latitude: +user.location.coordinates.latitude, longitude: +user.location.coordinates.longitude }
      }))
    };
  }
}
 */
