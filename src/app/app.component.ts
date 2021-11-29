import { LoadingScreenService } from './services/loading-screen.service';
import { Component,OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent A Car';
  constructor(private router:Router,private loadingService:LoadingScreenService){
    router.events.subscribe((event:RouterEvent)=>{
      this.navigationInterceptor(event);
    })
  }
  ngOnInit(){
  }

  navigationInterceptor(event:RouterEvent){
    if (event instanceof NavigationStart) {
      this.loadingService.startLoading();
    }
    if(event instanceof NavigationEnd){
        window.scroll(0,0);
        this.loadingService.stopLoading();
    }
  }
}
