import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  car:Car;
  carImages:CarImage[];
  dataLoaded:boolean = false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(c=>{
        if(c["carId"]){
          this.getCarDetails(c["carId"]);
          this.getCarImages(c["carId"]);
        }
    });
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(c=>{
        this.car = c.data;
    });
  }

  getCarImages(carId:number){
    this.carService.getCarImagesById(carId).subscribe(c=>{
      this.carImages = c.data;
      this.dataLoaded=true;
    });
  }

}
