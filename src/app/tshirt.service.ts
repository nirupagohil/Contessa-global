import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TshirtService {

  private tshirtUrl = 'assets/tshirt.json';
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.tshirtUrl);
  }

  
  getById(id: number): Observable<any> {
    return this.http.get<any[]>(this.tshirtUrl).pipe(
        map((products: any[]) => products.find((product: any) => product.id === id))
    );
  }
}
