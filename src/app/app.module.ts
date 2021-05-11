import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageCarouselComponent } from './components/homepage-carousel/homepage-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    VatAddedPipe,
    FilterPipePipe,
    FilterBrandPipe,
    FilterColorPipe,
    HomepageComponent,
    HeaderComponent,
    HomepageCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      preventDuplicates:true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
