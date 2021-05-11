import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCarouselComponent } from './homepage-carousel.component';

describe('HomepageCarouselComponent', () => {
  let component: HomepageCarouselComponent;
  let fixture: ComponentFixture<HomepageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
