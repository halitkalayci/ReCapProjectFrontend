import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path:'' , pathMatch:"full" , component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
