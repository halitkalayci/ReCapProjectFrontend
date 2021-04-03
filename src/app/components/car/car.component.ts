import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  apiUrl:string = "https://localhost:44304/api/cars/getalldetails";
  cars:Car[] =[];
  carResponseModel:CarResponseModel={
    message:"",
    success:false,
    data:this.cars
  };
  dataLoaded = false;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe((c)=> {
      this.cars = c.data;
      this.dataLoaded = true;
    });
  }

}
