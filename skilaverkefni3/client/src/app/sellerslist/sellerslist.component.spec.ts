import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerslistComponent } from './sellerslist.component';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import {} from 'jasmine';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

describe('SellerslistComponent', () => {

  let component: SellerslistComponent;
  let fixture: ComponentFixture<SellerslistComponent>;

  const mockService = {
    success: true,
    sellerList: [{
      id: 1,
      name: 'Hannyrðaþjónusta Hannesar',
      category: 'Fatnaður',
      imagePath: 'http://i.imgur.com/OYVpe2W.jpg?fb'
    }],
    seller: [{
      id: 1,
      name: 'johanna',
      category: 'fun',
      imagePath: ''
    }],
    getSellers: function() {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.success === true) {
            fnSuccess(mockService.sellerList);
          } else {
            fnError();
          }
        }
      }
    },
    addSeller: function(id) {
      return {
        subscribe: function(fnSuccess, fnError) {
          if (mockService.success === true) {
            fnSuccess(mockService.sellerList);
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



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SellerslistComponent
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: NgbModal,
        useValue: mockModal
      }, {
        provide: ToastrService,
        useValue: mockToastr
      }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a toastrmsg on success', () => {
    component.addSeller();
    expect(mockToastr.success).toHaveBeenCalled();
  });
});
