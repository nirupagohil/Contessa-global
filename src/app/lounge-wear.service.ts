import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoungeWearService {

  private loungewearUrl = 'assets/lounge-wear.json';
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.loungewearUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any[]>(this.loungewearUrl).pipe(
        map((products: any[]) => products.find((product: any) => product.id === id))
    );
  }
}
