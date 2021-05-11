import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCarWithImageModel } from '../models/addCarWithImageModel';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getalldetails"
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getdetailsbybrandid/?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getbycolorid/?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarDetails(carId: number): Observable<SingleResponseModel<Car>> {
    let path = this.apiUrl + "cars/getbycarid/?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(path);
  }
  getCarImagesById(carId: number): Observable<ListResponseModel<CarImage>> {
    let path = this.apiUrl + "carimages/getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }
  getCarByFilters(brandId: string,colorId: string): Observable<ListResponseModel<Car>> {
    let path = this.apiUrl + "cars/getbyfilters?brandId=" + brandId + "&colorId=" + colorId;
    console.log(path);
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  addCarWithImage(model:AddCarWithImageModel,file:File):Observable<ResponseModel>{
      console.log(model);
      let path = this.apiUrl + "cars/addwithimage";
      let formData = new FormData();
      formData.append('Image',file);
      formData.append('BrandId',model.brandId.toString());
      formData.append('ColorId',model.colorId.toString());
      formData.append('ModelYear',model.modelYear.toString());
      formData.append('DailyPrice',model.dailyPrice.toString());
      formData.append('Name',model.carName);
      console.log(path);
      return this.httpClient.post<ResponseModel>(path,formData);
  }
}
