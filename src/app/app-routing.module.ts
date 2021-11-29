import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchPage } from './pages/search/search.component';

const routes: Routes = [
  {path:'' , redirectTo:'homepage',pathMatch:'full'},
  {path:'homepage',pathMatch:'full',component:HomepageComponent},
  {path:'cars',pathMatch:'full',component:CarsComponent},
  {path:'search',pathMatch:'full',component:SearchPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
