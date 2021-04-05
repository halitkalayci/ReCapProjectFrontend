import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:'' , pathMatch:"full" , component: CarComponent},
  {path:'cars' , component: CarComponent},
  {path:'brands' ,  component:BrandComponent},
  {path:'colors', component:ColorComponent},
  {path:'customers' , component:CustomerComponent},
  {path:'rentals',component:RentalComponent},
  {path:'cars/brand/:brandId',component:CarComponent},
  {path:'cars/color/:colorId',component:CarComponent},
  {path:'cars/detail/:carId',component:CardetailComponent},
  {path:'payment/:rental',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
