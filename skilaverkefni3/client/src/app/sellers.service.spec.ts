/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { Http } from '@angular/http';


describe('SellersService', () => {

  const mockHttp = {
    open: jasmine.createSpy('open')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellersService, {
        provide: Http,
        useValue: mockHttp
      }]
    });
  });

  it('should ...', inject([SellersService], (service: SellersService) => {
    expect(service).toBeTruthy();
  }));
});
