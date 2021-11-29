import { TeamMember } from './../models/teamMember';
import { GenericResponseModel } from './../models/genericResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {

  apiUrl:string=environment.apiUrl + "teammembers";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<GenericResponseModel<TeamMember[]>>{
    return this.httpClient.get<GenericResponseModel<TeamMember[]>>(this.apiUrl);
  }
}
