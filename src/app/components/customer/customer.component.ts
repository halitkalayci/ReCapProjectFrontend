import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  apiUrl:string = "https://localhost:44304/api/customers/getdetails";
  customers:Customer[] =[];
  customerResponseModel:CustomerResponseModel={
    message:"",
    success:false,
    data:this.customers
  };
  dataLoaded = false;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<CustomerResponseModel>(this.apiUrl).subscribe((c)=> {
      this.customers = c.data;
      this.dataLoaded = true;
    });
  }
}
