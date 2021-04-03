import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  apiUrl:string = "https://localhost:44304/api/colors";
  colors:Color[] =[];
  colorResponseModel:ColorResponseModel={
    message:"",
    success:false,
    data:this.colors
  };
  dataLoaded = false;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<ColorResponseModel>(this.apiUrl).subscribe((c)=> {
      this.colors = c.data;
      this.dataLoaded = true;
    });
  }
}
