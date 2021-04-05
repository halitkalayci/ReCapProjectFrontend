import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddRentalModel } from 'src/app/models/addRentalModel';
import { Car } from 'src/app/models/car';
import { CreditCart } from 'src/app/models/creditCart';
import { Customer } from 'src/app/models/customer';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rental: AddRentalModel;
  car: Car;
  customer: Customer;
  totalPrice: number;
  days: number;

  creditCart:CreditCart;
  cartName:string;
  cartNumber:string;
  cartCvv:string;
  cartExpireMonth:number;
  cartExpireYear:number;
  constructor(private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private paymentService:PaymentService,
    private toastService:ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    this.getDetails();
  }




  getDetails() {
    this.activatedRoute.params.subscribe(c => {
      if (c["rental"]) {
        this.rental = JSON.parse(c["rental"]);
        let id = JSON.parse(c["rental"]).CarId;
        this.carService.getCarDetails(id).subscribe(c => {
          this.car = c.data;
          var rentDate = new Date(this.rental.RentDate);
          var returnDate = new Date(this.rental.ReturnDate);
          var difference = returnDate.getTime() - rentDate.getTime();
          this.days = Math.ceil(difference / (1000 * 3600 * 24));
          this.totalPrice = this.car.dailyPrice * this.days;
        });

      }
    });
  }

  commit(){
    this.creditCart = { 
      cardNumber:this.cartNumber,
      cvc:this.cartCvv,
      expireMonth: parseInt(this.cartExpireMonth.toString()),
      expireYear: parseInt(this.cartExpireYear.toString()),
      fullName:this.cartName
    };
    console.log(this.creditCart);
    this.paymentService.submitPayment(this.creditCart).subscribe(data=>{
      this.toastService.success(data.message);
      this.router.navigate(['/']);
    },err=>{
      console.log(err);
      this.toastService.error(err.error.message);
    });
    console.log("commited");
  }
}
