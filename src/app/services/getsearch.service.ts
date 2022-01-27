import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetsearchService {

  constructor(private http: HttpClient) { }

  getResponse(input: String) {
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
  }
}
