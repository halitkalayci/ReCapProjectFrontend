import { TeamMemberService } from './../../services/team-member.service';
import { TeamMember } from './../../models/teamMember';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage-team',
  templateUrl: './homepage-team.component.html',
  styleUrls: ['./homepage-team.component.scss']
})
export class HomepageTeamComponent implements OnInit {
  teamMembers:TeamMember[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor(private teamMemberService:TeamMemberService) { }

  ngOnInit(): void {
    this.getTeamMembers();
  }

  getTeamMembers(){
    this.teamMemberService.getAll().subscribe(response=>{
      this.teamMembers=response.data;
    })
  }
}
