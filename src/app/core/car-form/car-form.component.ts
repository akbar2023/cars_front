import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarService } from '../service/car.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  // car: Car = new Car(null, "", "");
  carForm: FormGroup;
  id: number;

  createForm(car?: Car) {
    this.carForm = this.fb.group({
      brand: [car ? car.brand : '', Validators.required],
      model: [car ? car.model : '', Validators.required],
    });
  }

  success: string;

  constructor(private carService: CarService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params.id);
      this.id = parseInt(params.id);

      if (this.id) {
        this.carService.getCarById(this.id).subscribe(car => { this.createForm(car) })
      }
      this.createForm();
    });

  }

  onSubmit() {
    if (this.id) {
      this.carForm.value.id = this.id;
      this.carService.updateCar(this.carForm.value).subscribe((car) => {
        this.success = "The update was incredible!";
        console.log(car);
      });
      
    }
    else {
      this.carService.addCar(this.carForm.value).subscribe(() => {
        this.success = "Created successfully!";
        console.log(this.success, this.carForm.value);
      })
    }
  }

}
