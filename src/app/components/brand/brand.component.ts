import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  currentBrand: Brand;
  brands: Brand[] = [];
  dataLoaded = false;
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(c => {
      this.brands = c.data;
      this.dataLoaded = true;
    })
  }
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }
  getClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
  clearCurrentBrand(){
    this.currentBrand = null;
  }
  getAllClass() {
    if (!this.currentBrand) {
      return "list-group-item active";
    }
    else {
      return "list-group-item";
    }
  }
}
