/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SellersService } from "../../sellers.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";
import { SellerComponent } from './seller.component';
import {ToastrService} from "ngx-toastr";

describe('SellerComponent', () => {

  const mockService = {
    success: true,
    sellerId: 8,
    seller: [{
      id: 8,
      name: 'johanna',
      category: 'fun',
      imagePath: ''
    }],
    sellerUpdated: [{
      id: 8,
      name: 'johann'
    }],
    updateSeller: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) { //ut af subscribe og observable
          if (mockService.success === true) {
            fnSuccess(mockService.seller);
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
          id: mockService.sellerId
      }
    }
  };

  const mockToastr = {
    error: jasmine.createSpy('error'),
    success: jasmine.createSpy('success')
  };
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerComponent ],
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
    fixture = TestBed.createComponent(SellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a toastrmsg on success', () => {
    mockService.success = true;
    component.onEdit();
    expect(mockToastr.success).toHaveBeenCalled();
  });

  it('should navigate to sellerdetails', () => {
    component.onVisitSellerDetails({id: 8, name: 'billy', category: 'lolly', imagePath: ''});
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/sellerdetails/' + mockService.sellerId]);
  });
});
