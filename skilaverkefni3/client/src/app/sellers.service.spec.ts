/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellersService } from './sellers.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


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
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({id: 1, name: 'John', category: 'funning'})
      });
      connection.mockRespond(new Response(options));
    });
    let result;

    subject.getSellers().subscribe(sellers => {
      expect(sellers).toEqual({id: 1, name: 'John', category: 'funning'});
    });
  });

  it('should getSellerById(1)', () => {
    expect(subject.getSellerById(1)).toBeTruthy();
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({id: 1, name: 'John', category: 'funning'})
      });
      connection.mockRespond(new Response(options));
    });
    let result;

    subject.getSellerById(1).subscribe(seller => {
      expect(seller).toEqual({id: 1, name: 'John', category: 'funning'});
    });
  });

  it('should getSellerProducts(1)', () => {
    expect(subject.getSellerProducts(1)).toBeTruthy();
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({id: 1, name: 'vettlingar', price: 22})
      });
      connection.mockRespond(new Response(options));
    });
    let result;

    subject.getSellerProducts(1).subscribe(products => {
      expect(products).toEqual({id: 1, name: 'vettlingar', price: 22});
    });
  });

  it('should go into updateProduct()', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject.updateProduct({ id: 1, name: 'vettlingar', price: 22}, 1, 1).subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    })
  });

  it('should go into updateSeller()', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject.updateSeller({ id: 1, name: 'Joe', category: 'funning'}, 1).subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  });

  it('should go into addProduct()', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject.addProduct({ id: 1, name: 'vettlingar', price: 22}).subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  });

  it('should go into addSeller()', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject.addSeller({ id: 1, name: 'John', category: 'funning'}).subscribe((response) => {
      expect(response.json()).toEqual({ success: true });
    });
  });
});
