import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-select',
  templateUrl: './brand-select.component.html',
  styleUrls: ['./brand-select.component.css']
})
export class BrandSelectComponent implements OnInit {

  @Output() OnChange = new EventEmitter();
  brands:Brand[];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
 
  getBrands(){
    this.brandService.getBrands().subscribe(b=>{
      this.brands = b.data;
    })
  }
  onChange(val:string){
     this.OnChange.emit(val);
  }

}
