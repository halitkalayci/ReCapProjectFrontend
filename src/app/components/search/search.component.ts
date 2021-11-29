import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  selectedBrandId:number=0;
  selectedColorId:number=0;
  minPrice:number;
  maxPrice:number;
  query:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  changeBrand(brandId:number){
   this.selectedBrandId = brandId;
  }

  changeColor(colorId:number){
    this.selectedColorId=colorId;
  }
  search(){
    this.router.navigate(["/search"],{ queryParams:{ brandId:this.selectedBrandId, colorId:this.selectedColorId,minPrice:this.minPrice ?? 0,maxPrice:this.maxPrice ?? 0,query:this.query??"" }});
  }
}
