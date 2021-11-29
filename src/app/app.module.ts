import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SearchComponent } from './components/search/search.component';
import { HeaderCarouselComponent } from './components/header-carousel/header-carousel.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OfferBannerComponent } from './components/offer-banner/offer-banner.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { HomepageTeamComponent } from './components/homepage-team/homepage-team.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CarsComponent } from './pages/cars/cars.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TwoWayBannerComponent } from './components/two-way-banner/two-way-banner.component';
import { BrandsCarouselComponent } from './components/brands-carousel/brands-carousel.component';
import { BrandSelectComponent } from './components/brand-select/brand-select.component';
import { ColorSelectComponent } from './components/color-select/color-select.component';
import { SearchPage } from './pages/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    VatAddedPipe,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HeaderCarouselComponent,
    AboutUsComponent,
    OurServicesComponent,
    OfferBannerComponent,
    CarListComponent,
    CarCardComponent,
    HomepageTeamComponent,
    TeamCardComponent,
    ContactUsComponent,
    CarsComponent,
    LoadingComponent,
    TwoWayBannerComponent,
    BrandsCarouselComponent,
    BrandSelectComponent,
    ColorSelectComponent,
    SearchPage
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
    HttpClientModule,
    CarouselModule,
    NgSelectModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
