/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProductDlgComponent } from './product-dlg.component';
import { SellersService } from "../../sellers.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

describe('ProductDlgComponent', () => {
  const mockService = {
    successGetProducts: true,
    productList: [{
      id: 7,
      name: 'ullarsokkar'
    }],
    getSellerProduct: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
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

  let component: ProductDlgComponent;
  let fixture: ComponentFixture<ProductDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDlgComponent ],
      providers: [{
        provide: SellersService,
        useValue: mockService
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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
