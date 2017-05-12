/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryDataServiceService } from './in-memory-data.service';

describe('InMemoryDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataServiceService]
    });
  });

  it('should ...', inject([InMemoryDataServiceService], (service: InMemoryDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
