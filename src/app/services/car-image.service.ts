import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl:string=environment.apiUrl+"carimages"
  constructor(private httpClient:HttpClient) { }
}
