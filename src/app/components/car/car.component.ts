import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] =[];
  currentBrand:Brand;
  dataLoaded = false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.fillPage();
  }

  fillPage() {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
      }
      else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"]);
      }
      else {
        this.getCars();
      }
    });
    console.log(this.cars);
  }

  getCars(){
    this.carService.getCars().subscribe(c=>{
      this.cars=c.data;
      this.dataLoaded=true;
    });
  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(c=>{
      this.cars=c.data;
      this.dataLoaded=true;
    })
  }
  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(c=>{
      this.cars=c.data;
      this.dataLoaded=true;
    })
  }
}
