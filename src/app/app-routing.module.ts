import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:'' , pathMatch:"full" , component: CarComponent},
  {path:'brands',pathMatch:"full" ,  component:BrandComponent},
  {path:'colors',pathMatch:"full" , component:ColorComponent},
  {path:'customers',pathMatch:"full" , component:CustomerComponent},
  {path:'rentals',pathMatch:'full',component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
