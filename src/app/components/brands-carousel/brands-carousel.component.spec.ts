import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCarouselComponent } from './brands-carousel.component';

describe('BrandsCarouselComponent', () => {
  let component: BrandsCarouselComponent;
  let fixture: ComponentFixture<BrandsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
