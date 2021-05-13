import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Meal } from '@bba/api-interfaces';

import { MealsService } from './meals.service';

import { mockMeal } from '@bba/testing';

describe('MealsService', () => {
  const model = 'meals';
  let httpTestingController: HttpTestingController;
  let service: MealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockMeal);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockMeal]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockMeal.id).subscribe((res) => {
        expect(res).toEqual(mockMeal);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockMeal.id)
      );
      req.flush(mockMeal);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockMeal).subscribe((res) => {
        expect(res).toEqual(mockMeal);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockMeal);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockMeal).subscribe((res) => {
        expect(res).toEqual(mockMeal);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockMeal.id)
      );
      req.flush(mockMeal);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockMeal).subscribe((res) => {
        expect(res).toEqual(mockMeal);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockMeal.id)
      );
      req.flush(mockMeal);
      httpTestingController.verify();
    });
  });
});
