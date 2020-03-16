import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly url = 'http://localhost:8086/cars/'

  constructor(private http: HttpClient) { }


  findCarsByBrand(brand: String): Observable<Car[]> {
    return this.http.get<Car[]>(this.url + '/brand/' + brand);
  }

  addCar(car: Car) :Observable<Car>{
    return this.http.post<Car>(this.url, car);
  }

  // public findCarsByBrand(brand: string): Promise<Response> {
  //   return fetch(`${this.url}brand/${brand}`)
  // }

}
