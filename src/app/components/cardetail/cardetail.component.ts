import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddRentalModel } from 'src/app/models/addRentalModel';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit{

  car:Car;
  carImages:CarImage[];
  dataLoaded:boolean = false;
  minDate:Date = new Date();
  rentTime:number;
  rentDate:Date;
  returnDate:Date;
  maxDate:Date = new Date();
  minSelected:boolean;
  constructor(private carService:CarService, 
    private rentService:RentalService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private router:Router) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(c=>{
        if(c["carId"]){
          this.getCarDetails(c["carId"]);
          this.getCarImages(c["carId"]);
        }
    });
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(c=>{
        this.car = c.data;
    });
  }

  getCarImages(carId:number){
    this.carService.getCarImagesById(carId).subscribe(c=>{
      this.carImages = c.data;
      this.dataLoaded=true;
    });
  }

  rentCar(car:Car){
    this.rentService.addRental({CarId:car.id,RentDate:new Date(),CustomerId:1}).subscribe(data=>{
      this.toastrService.success(data.message)
    },err=>{
      this.toastrService.error(err.error.message);
    });
  }
  selectMin(){
    this.minSelected = true;
    var date = new Date(this.rentDate);
    date.setDate(date.getDate() + 1);
    this.maxDate = date;
    this.minDate = this.rentDate;
  }

  goToPayment(){
    if(this.returnDate == undefined || this.rentDate == undefined){
      this.toastrService.error("Eksik bilgi girdiniz. Lütfen alanları kontrol ediniz.");
      return; 
    }
    let rentalTemp :AddRentalModel = {
      CarId:this.car.id,
      RentDate:this.rentDate,
      CustomerId:1,
      ReturnDate:this.returnDate
    }
    this.router.navigate(["payment/" + JSON.stringify(rentalTemp)]);
    this.toastrService.success("Araba durumu uygun.. Ödemeye yönlendiriliyorsunuz.");
  }


  

}
