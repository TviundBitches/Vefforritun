/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SellersService } from "../../sellers.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";
import { ProductCard } from './productcard.component';
import {ToastrService} from "ngx-toastr";

describe('ProductCard', () => {

  const mockService = {
    success: true,
    updateProduct: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.success === true) {
            fnSuccess();
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
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCard ],
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
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a toastrmsg on success', () => {
    mockService.success = true;
    component.onEdit(1);
    expect(mockToastr.success).toHaveBeenCalled();
  });
});
