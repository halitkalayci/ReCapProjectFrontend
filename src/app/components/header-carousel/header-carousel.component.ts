import { environment } from 'src/environments/environment';
import { HomepageBannerService } from './../../services/homepage-banner.service';
import { HomepageBanner } from './../../models/homepageBanner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss']
})
export class HeaderCarouselComponent implements OnInit {

  imageBasePath:string=environment.imagesUrl;
  homepageBanners:HomepageBanner[];
  constructor(private homepageBannerService:HomepageBannerService) { }

  ngOnInit(): void {
    this.getAllActiveBanners();
  }

  getAllActiveBanners(){
       this.homepageBannerService.getAllActiveBanners().subscribe(response=>{
         this.homepageBanners = response.data;
         console.log(this.homepageBanners);
       })
  }

}
