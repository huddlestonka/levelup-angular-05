import { TestBed } from '@angular/core/testing';

import { FoodiesService } from './foodies.service';

describe('FoodiesService', () => {
  let service: FoodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
