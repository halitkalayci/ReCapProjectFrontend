import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTeamComponent } from './homepage-team.component';

describe('HomepageTeamComponent', () => {
  let component: HomepageTeamComponent;
  let fixture: ComponentFixture<HomepageTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
