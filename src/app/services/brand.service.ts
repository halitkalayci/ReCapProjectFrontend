import { environment } from './../../environments/environment';
import { GenericResponseModel } from './../models/genericResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl:string=environment.apiUrl+"brands";
  constructor(private httpClient:HttpClient) { }



  getAllBrands():Observable<GenericResponseModel<Brand[]>>{
    return this.httpClient.get<GenericResponseModel<Brand[]>>(this.apiUrl);
  }

  getAllWithBrandName():Observable<GenericResponseModel<Brand[]>>{
    return this.httpClient.get<GenericResponseModel<Brand[]>>(this.apiUrl+"/get-all-with-picture");
  }
}
