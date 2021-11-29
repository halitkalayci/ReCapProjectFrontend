import { CarForListingModel } from 'src/app/models/carForListingModel';
import { LoadingScreenService } from './../../services/loading-screen.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @ViewChild('scroll')
  containerDiv: ElementRef;
  cars:CarForListingModel[]=[];
  maxPages:number;
  page:number=1;
  loading:boolean=false;
  additionalLoading:boolean=false;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsForListing(true);
  }

  getCarsForListing(init:boolean){
    init ? this.loading = true : this.additionalLoading=true;
     this.carService.getCarsForListings(3,this.page).subscribe(s=>{
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
