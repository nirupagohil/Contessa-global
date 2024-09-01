import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoungeWearService {

  private loungewearUrl = 'assets/lounge-wear.json';
  private products: any[] = [];
  
  constructor(private http: HttpClient) {
    this.loadProducts();
   }

  private loadProducts(): void {
    this.http.get<any[]>(this.loungewearUrl).subscribe(data => {
      this.products = data;
    });
  }

  getProducts(): Observable<any[]> {
    return of(this.products);
  }
}
