import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.scss']
})
export class ColorSelectComponent implements OnInit {

  @Output() onSelect = new EventEmitter<number>();
  colors:Color[];
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getAllColors();
  }

  onChange(event:any){
    this.onSelect.emit(event.target.value);
  }

  getAllColors(){
     this.colorService.getAllColors().subscribe(s=>{
        this.colors=s.data;
     })
  }

}
