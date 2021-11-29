import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBannerComponent } from './two-way-banner.component';

describe('TwoWayBannerComponent', () => {
  let component: TwoWayBannerComponent;
  let fixture: ComponentFixture<TwoWayBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
