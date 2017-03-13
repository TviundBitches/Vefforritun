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
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import {ToastrService} from "ngx-toastr";

describe('SellerslistComponent', () => {

  let component: SellerslistComponent;
  let fixture: ComponentFixture<SellerslistComponent>;
  const mockService = {
    successGetSellers: true,
    sellerList: [{
      id: 1,
      name: 'Hannyrðaþjónusta Hannesar',
      category: 'Fatnaður',
      imagePath: 'http://i.imgur.com/OYVpe2W.jpg?fb'
    }],
    getSellers: function(id) {
      return {
        subscribe: function(fnSuccess) {
          if (mockService.successGetSellers === true) {
            fnSuccess(mockService.sellerList);
          }
        }
      }
    }
  };

  const mockModal = {
    open: jasmine.createSpy('open')
  };

  let mockComponent = {
    navigate: jasmine.createSpy('navigate')
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
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include id 1', async(() => {
    // expect(mockService.getSellers).toBe('Hannyrðaþjónusta Hannesar');
  }));
});
