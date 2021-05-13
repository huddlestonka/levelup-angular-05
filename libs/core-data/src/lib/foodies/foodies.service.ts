import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foodie } from '@bba/api-interfaces';
import { environment } from '@env/environment';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class FoodiesService {
  model = 'foodies';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Foodie[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Foodie>(this.getUrlWithId(id));
  }

  create(foodie: Foodie) {
    return this.http.post(this.getUrl(), foodie, { headers: headers });
  }

  update(foodie: Foodie) {
    return this.http.put(this.getUrlWithId(foodie.id), foodie, {
      headers: headers,
    });
  }

  delete(foodie: Foodie) {
    return this.http.delete(this.getUrlWithId(foodie.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
