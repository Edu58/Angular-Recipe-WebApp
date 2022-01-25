import { TestBed } from '@angular/core/testing';

import { GetrecipesService } from './getrecipes.service';

describe('GetrecipesService', () => {
  let service: GetrecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetrecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
