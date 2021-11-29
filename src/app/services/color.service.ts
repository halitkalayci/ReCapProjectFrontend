import { GenericResponseModel } from './../models/genericResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl:string=environment.apiUrl + "colors";
  constructor(private httpClient:HttpClient) { }

  getAllColors() : Observable<GenericResponseModel<Color[]>>{
    return this.httpClient.get<GenericResponseModel<Color[]>>(this.apiUrl);
  }
}
