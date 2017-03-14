/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProductDlgComponent } from './product-dlg.component';
import { SellersService } from '../../sellers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('ProductDlgComponent', () => {

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

  const mockModal = {
    close: jasmine.createSpy('close')
  };

  const mockToastr = {
    error: jasmine.createSpy('error'),
    success: jasmine.createSpy('success')
  };

  let component: ProductDlgComponent;
  let fixture: ComponentFixture<ProductDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDlgComponent ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: ToastrService,
        useValue: mockToastr
      }, {
        provide: NgbActiveModal,
        useValue: mockModal
      }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
