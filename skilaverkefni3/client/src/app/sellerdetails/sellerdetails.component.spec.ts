/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SellersService } from "../sellers.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SellerDetails } from './sellerdetails.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('SellerDetails', () => {
  const mockService = {
    successGetProducts: true,
    successAddProduct: true,
    successGetSellerById: true,
    productList: [{
      id: 7,
      name: 'ullarsokkar'
    }],
    seller: [{
      id: 8,
      name: 'johanna'
    }],
    getSellerProducts: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.successGetProducts === true) {
            fnSuccess(mockService.productList);
          } else {
            fnError();
          }
        }
      }
    },
    getSellers: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.successGetProducts === true) {
            fnSuccess(mockService.productList);
          } else {
            fnError();
          }
        }
      }
    },
    getSellerById: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.successGetSellerById === true) {
            fnSuccess(mockService.seller);
          } else {
            fnError();
          }
        }
      }
    },
    getTopSellerProducts: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.successGetSellerById === true) {
            fnSuccess(mockService.productList);
          } else {
            fnError();
          }
        }
      }
    },
    addProduct: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.successAddProduct === true) {
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

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockRoute = {
    snapshot: {
      params: {
          id: 1
      }
    }
  };

  const mockToastr = {
    error: jasmine.createSpy('error'),
    success: jasmine.createSpy('success')
  };
  let component: SellerDetails;
  let fixture: ComponentFixture<SellerDetails>;
  // private service: SellersService, private modalService: NgbModal,
  //   private router: Router, private route: ActivatedRoute, private toastrService: ToastrService) { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDetails ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: NgbModal,
        useValue: mockModal
      }, {
        provide: Router,
        useValue: mockRouter
      }, {
        provide: ActivatedRoute,
        useValue: mockRoute
      }, {
        provide: ToastrService,
        useValue: mockToastr
      }],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('when sellers service returns empty list of products', () => {
  //   mockService.successGetProducts = true;
  //   mockService.productList = [];
  //   it('should display a message indicating that no products are to be displayed', () => {
  //
  //   });
  // });

  // describe('when sellers service returns empty list of products', () => {
  //   mockService.successGetProducts = true;
  //   mockService.productList = [];
  //   it('should display a message indicating that no products are to be displayed', () => {
  //
  //   });
  // });
});
