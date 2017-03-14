/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SellersService } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
      name: 'Unnur'
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

  class mockNgModal{
    open(): any {
      return {
        result: {
          then:  function (fnSuccess) {
            fnSuccess(true);
          }
        },
        componentInstance: {
          toastr: undefined,
          success: {
            subscribe: function (fnSuccess) {
              fnSuccess(true);
            }
          }
        }
      };
    }
  }

  const mockModal = new mockNgModal();

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

  describe("onAddProduct", () => {
    it("should display toastr on success", () => {
        // Arrange

        // Act
        component.onAddProduct();

        // Assert
        expect(mockToastr.success).toHaveBeenCalled();
        expect(mockToastr.success).toHaveBeenCalledWith('Þú hefur bætt við vöru!');

    });
  });

  describe("onGoBack", () => {
    it("should navigate to sellerslistList", () => {
        // Arrange

        // Act
        component.onGoBack();

        // Assert
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/sellerslist']);

    });
  });

});
