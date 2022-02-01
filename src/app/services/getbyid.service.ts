import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetbyidService {

  constructor(private http: HttpClient) { }


  getById(id: any) {
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
