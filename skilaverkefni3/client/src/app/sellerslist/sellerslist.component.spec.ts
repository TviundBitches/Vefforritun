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
import { ToastrService } from 'ngx-toastr';

describe('SellerslistComponent', () => {

  let component: SellerslistComponent;
  let fixture: ComponentFixture<SellerslistComponent>;
  let seller;
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
  });

  beforeEach(() => {
    seller = {
      onUpdateSeller: function(seller) {

      },
      modalInstance: function() {

      },
      addSeller: function() {
        const modalInstance = this.modalService.open(SellerDlgComponent);
        modalInstance.componentInstance.seller = {};
        modalInstance.result.then(obj => {
          console.log('Dialog was closed using OK');
          console.log(obj);
          const params = {
            id: this.sellers.length + 1,
            name: obj.name,
            category: obj.category,
            imagePath: obj.imagePath
          }
          this.service.addSeller(params).subscribe(result => {
            this.toastrService.success('Þú hefur bætt við notanda!');
            window.location.reload();
          })
        }).catch(err => {
          console.log('Dialog was cancelled');
          console.log(err);
        })
      }
    };
    spyOn(seller, 'addSeller');
    spyOn(seller, 'onUpdateSeller').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addSeller()', function() {
    expect(seller.addSeller.calls.any()).toEqual(false);
    seller.addSeller();
    expect(seller.addSeller.calls.any()).toEqual(true);
  });

  it('should call onUpdateSeller()', function() {
    expect(seller.onUpdateSeller).not.toHaveBeenCalled();
    seller.onUpdateSeller();
    expect(seller.onUpdateSeller).toHaveBeenCalled();
  });

  it('should display a list of sellers if the backend returns a list', function() {
    component.ngOnInit();
    expect(component.sellers).toEqual(jasmine.objectContaining(mockService.sellerList));
  });

  it('should display a message if the list of sellers is empty', function() {
    component.addSeller();
    expect(mockModal.open).toHaveBeenCalled();
  });

  it('should display an error message if the list cannot be retrieved', function() {

  });

  it('should display a modal dialog if the user tries to add a new seller', function() {
    // component.addSeller();
    // expect(mockToastr.success).toHaveBeenCalled();
    // expect(mockToastr.success).toHaveBeenCalledWith('Þú hefur bætt við notanda!');
  });

  it('should try to add a new seller if the modal dialog is closed using the OK button', function() {

  });

  it('should NOT try to add a new seller if the modal dialog is closed in any other way', function() {

  });

  it('should add the new seller to the list', function() {

  });

  it('should display an error message if the seller could not be added', function() {

  });

});
