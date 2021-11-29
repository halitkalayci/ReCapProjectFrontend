import { TestBed } from '@angular/core/testing';

import { HomepageBannerService } from './homepage-banner.service';

describe('HomepageBannerService', () => {
  let service: HomepageBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
