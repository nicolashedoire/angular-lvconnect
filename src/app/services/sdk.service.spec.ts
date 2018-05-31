import { TestBed, inject } from '@angular/core/testing';

import { SdkService } from './sdk.service';

describe('SdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SdkService]
    });
  });

  it('should be created', inject([SdkService], (service: SdkService) => {
    expect(service).toBeTruthy();
  }));
});
