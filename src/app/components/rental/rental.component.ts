import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  apiUrl:string = "https://localhost:44304/api/rentals/getdetails";
  rentals:Rental[] =[];
  rentalResponseModel:RentalResponseModel={
    message:"",
    success:false,
    data:this.rentals
  };
  dataLoaded = false;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<RentalResponseModel>(this.apiUrl).subscribe((c)=> {
      this.rentals = c.data;
      this.dataLoaded = true;
    });
  }

}
