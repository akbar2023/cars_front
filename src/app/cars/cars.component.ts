import { Component, OnInit } from '@angular/core';
import { CarService } from '../core/service/car.service';
import { Observable } from 'rxjs';
import { Car } from '../core/models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  brands = ["Renault", "BMW", "Volkswagen"];

  constructor(private service: CarService) { }


  ngOnInit(): void {
    // .then(response => response.json())
    // .then(response => this.brands = response)
  }

  getCarsByBrand(brand: String) {
    this.service.findCarsByBrand(brand).subscribe((data: Car[]) => {
      console.log(data);
      this.cars = data;
    })
  }

  createCar(car: Car) {
    this.service.addCar(car).subscribe((data: Car) => {
      console.log(data);
    })
  }

}
