import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackPantService {

  private trackPantUrl = 'assets/track-pant.json';
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.trackPantUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any[]>(this.trackPantUrl).pipe(
        map((products: any[]) => products.find((product: any) => product.id === id))
    );
  }
}
