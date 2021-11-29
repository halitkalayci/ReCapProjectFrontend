import { HomepageBanner } from './../models/homepageBanner';
import { GenericResponseModel } from './../models/genericResponseModel';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageBannerService {

  apiUrl:string=environment.apiUrl + 'homepagebanners';
  constructor(private httpClient:HttpClient) { }

  getAllActiveBanners() : Observable<GenericResponseModel<HomepageBanner[]>>{
    return this.httpClient.get<GenericResponseModel<HomepageBanner[]>>(this.apiUrl);
  }
}
