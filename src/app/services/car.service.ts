import { CarForListingModel } from './../models/carForListingModel';
import { PageableResponseModel } from './../models/pageableResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetailsModel } from '../models/carDetailsModel';
import { CarImage } from '../models/carImage';
import { GenericResponseModel } from '../models/genericResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl+"cars";
  constructor(private httpClient: HttpClient) { }


  getHomepageCars(size:number):Observable<GenericResponseModel<CarForListingModel[]>>{
    return this.httpClient.get<GenericResponseModel<CarForListingModel[]>>(this.apiUrl+'/get-homepage-cars?size='+size);
  }
  getCarsForListings(size:number,page:number):Observable<PageableResponseModel<CarForListingModel[]>>{
    return this.httpClient.get<PageableResponseModel<CarForListingModel[]>>(this.apiUrl+'?size='+size+"&page="+page);
  }
  getCarsByFilters(size:number,page:number,brandId:number=0,colorId:number=0,minPrice:number=0,maxPrice:number=0,query:string=""){
    let urlQuery = `?size=${size}&page=${page}&colorId=${colorId}&brandId=${brandId}&minPrice=${minPrice}&maxPrice=${maxPrice}&query=${query}`;
    return this.httpClient.get<PageableResponseModel<CarForListingModel[]>>(this.apiUrl+'/get-by-filters'+urlQuery);
  }
}
