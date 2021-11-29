import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-select',
  templateUrl: './brand-select.component.html',
  styleUrls: ['./brand-select.component.scss']
})
export class BrandSelectComponent implements OnInit {

  @Output() onSelect = new EventEmitter<number>();
  brands:Brand[];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  onChange(event:any){
    this.onSelect.emit(event.target.value);
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(s=>{
      this.brands=s.data;
    });
  }

}
