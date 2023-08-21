import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodItemService {
  private apiUrl = 'assets/Data/fooditem.json';
  constructor(private http: HttpClient) {}

  getFoodItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
