import { Component, OnInit } from '@angular/core';
import { CarForListingModel } from 'src/app/models/carForListingModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  popularCars:CarForListingModel[];
  constructor(private carService:CarService) { }
  
  ngOnInit(): void {
    this.getPopularCars();
  }
  
  getPopularCars(){
    this.carService.getHomepageCars(6).subscribe(response=>{
      this.popularCars = response.data;
      console.log(this.popularCars);
    });
  }
}
