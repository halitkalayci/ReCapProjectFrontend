import { CarForListingModel } from './../../models/carForListingModel';
import { Component, NgModule, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {

  maxPages:number;
  page:number=1;
  additionalLoading:boolean=false;
  loading:boolean=false;
  cars:CarForListingModel[]=[];

  brandId:number;
  colorId:number;
  minPrice:number;
  maxPrice:number;
  query:string;

  constructor(private carService:CarService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.getQueries();
    this.router.events.subscribe(s=>{
      if(s instanceof NavigationStart)
           this.cars = [];
    })
  }
  getQueries(){
    this.route.queryParams.subscribe(params=>{
      this.brandId=params["brandId"];
      this.colorId=params["colorId"];
      this.minPrice=params["minPrice"];
      this.maxPrice=params["maxPrice"];
      this.query=params["query"];
      this.getCarsForListing(true);
    })
  }
  getCarsForListing(init:boolean){
    init ? this.loading = true : this.additionalLoading=true;
    this.carService.getCarsByFilters(3,this.page,this.brandId,this.colorId,this.minPrice,this.maxPrice,this.query).subscribe(s=>{
      this.cars = this.cars.concat(s.data.data);
      this.maxPages=s.data.maxPages;
      init ? this.loading = false : this.additionalLoading=false;
    });
  }
  loadMore(){
    this.page++;
    this.getCarsForListing(false);
  }
}
