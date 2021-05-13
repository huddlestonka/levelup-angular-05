import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '@bba/api-interfaces';
import { environment } from '@env/environment';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  model = 'meals';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Meal[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Meal>(this.getUrlWithId(id));
  }

  create(meal: Meal) {
    return this.http.post(this.getUrl(), meal, { headers: headers });
  }

  update(meal: Meal) {
    return this.http.put(this.getUrlWithId(meal.id), meal, {
      headers: headers,
    });
  }

  delete(meal: Meal) {
    return this.http.delete(this.getUrlWithId(meal.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
