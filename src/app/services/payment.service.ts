import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCart } from '../models/creditCart';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiPath: string = "https://localhost:44304/api/";
  constructor(private httpClient: HttpClient) { }

  submitPayment(cart: CreditCart): Observable<ResponseModel> {
    let path = this.apiPath + "payments/makepayment";
    return this.httpClient.post<ResponseModel>(path, cart);
  }
}
