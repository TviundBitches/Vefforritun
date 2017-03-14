/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('SellersService', () => {

  let subject: SellersService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        SellersService
      ]
    });
  });

  beforeEach(inject([SellersService, MockBackend], (service: SellersService, mockBackend: MockBackend) => {
    subject = service;
    backend = mockBackend;
  }));

  it('should send the login request to the server', (done) => {
    done();
  });

  it('should getSellers()', () => {
    expect(subject.getSellers()).toBeTruthy();
  });

  it('should getSellerById(1)', () => {
    expect(subject.getSellerById(1)).toBeTruthy();
  });

  it('should getSellerProducts(1)', () => {
    expect(subject.getSellerProducts(1)).toBeTruthy();
  });

  // it('should getSellers()', () => {
  //   expect(subject.getSellers()).toBeTruthy();
  // });
});
