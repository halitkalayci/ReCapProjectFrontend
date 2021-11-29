import { Component, Input, OnInit } from '@angular/core';
import { CarForListingModel } from 'src/app/models/carForListingModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  imgBasePath:string=environment.imagesUrl;
  @Input() car : CarForListingModel;
  constructor() { }

  ngOnInit(): void {
  }

}
