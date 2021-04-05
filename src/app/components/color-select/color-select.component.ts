import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {

  @Output() OnChange = new EventEmitter();
  colors:Color[];
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(c=>{
      this.colors = c.data;
    });
  }

  onChange(val:string){
     this.OnChange.emit(val);
  }

}
