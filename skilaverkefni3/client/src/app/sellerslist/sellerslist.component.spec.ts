import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { SellersService } from '../sellers.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {} from 'jasmine';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  const mockService = {
    successGetProducts: true,
    productList: [{
      id: 7,
      name: 'ullarsokkar'
    }],
    getSellerProduct: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.successGetProducts === true) {
            fnSuccess(mockService.productList);
          } else {
            fnError();
          }
        }
      }
    }
  };

  const mockModal = {
    open: jasmine.createSpy('open')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: NgbModal,
        useValue: mockModal
      }
      ],
    });
    TestBed.compileComponents();
  });

  describe('when sellers service returns empty list of products', () => {
    mockService.successGetProducts = true;
    mockService.productList = [];
    it('should display a message indicating that no products are to be displayed', () => {

    });
  });
});
