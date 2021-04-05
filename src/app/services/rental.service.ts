import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddRentalModel } from '../models/addRentalModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl:string = "https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) {
  }

  getRentals():Observable<ListResponseModel<Rental>>{
    let path = this.apiUrl+ "rentals/getdetails";
    return this.httpClient.get<ListResponseModel<Rental>>(path);
  }

  getRentalById(id:number):Observable<SingleResponseModel<Rental>>{
    let path = this.apiUrl+ "rentals/getdetailsbyid?carId="+ id;
    return this.httpClient.get<SingleResponseModel<Rental>>(path);
  }
  addRental(model:AddRentalModel):Observable<ResponseModel>{
    let path = this.apiUrl + "rentals/add";
    return this.httpClient.post<ResponseModel>(path,model);
  }
}
