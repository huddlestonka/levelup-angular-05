import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Foodie } from '@bba/api-interfaces';

import { FoodiesService } from './foodies.service';

import { mockFoodie } from '@bba/testing';

describe('FoodiesService', () => {
  const model = 'foodies';
  let httpTestingController: HttpTestingController;
  let service: FoodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FoodiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http.', () => {
    it('get() on service.all()', () => {
      service.all().subscribe((res) => {
        expect(res).toEqual(mockFoodie);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush([mockFoodie]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.find(mockFoodie.id).subscribe((res) => {
        expect(res).toEqual(mockFoodie);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockFoodie.id)
      );
      req.flush(mockFoodie);
      httpTestingController.verify();
    });

    it('post(url, model) on service.create(model)', () => {
      service.create(mockFoodie).subscribe((res) => {
        expect(res).toEqual(mockFoodie);
      });

      const req = httpTestingController.expectOne(service['getUrl']());
      req.flush(mockFoodie);
      httpTestingController.verify();
    });

    it('put(url(model.id), model) on service.create(model)', () => {
      service.update(mockFoodie).subscribe((res) => {
        expect(res).toEqual(mockFoodie);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockFoodie.id)
      );
      req.flush(mockFoodie);
      httpTestingController.verify();
    });

    it('delete(url(model.id)) on service.delete(model.id)', () => {
      service.delete(mockFoodie).subscribe((res) => {
        expect(res).toEqual(mockFoodie);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockFoodie.id)
      );
      req.flush(mockFoodie);
      httpTestingController.verify();
    });
  });
});
