import { TeamMember } from './../../models/teamMember';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  imgBasePath:string=environment.imagesUrl;
  @Input() teamMember:TeamMember;
  constructor() { }

  ngOnInit(): void {
  }



}
