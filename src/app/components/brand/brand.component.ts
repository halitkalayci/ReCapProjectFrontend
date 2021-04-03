import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  dataLoaded=false;
  apiUrl:string = "https://localhost:44304/api/brands";
  brands:Brand[]=[];
  brandResponseModel:BrandResponseModel={
    success:false,
    message:"",
    data:this.brands
  };
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
         this.httpClient.get<BrandResponseModel>(this.apiUrl).subscribe((c)=>{
                this.brands=c.data;
                this.dataLoaded=true;
         })
  }
}
