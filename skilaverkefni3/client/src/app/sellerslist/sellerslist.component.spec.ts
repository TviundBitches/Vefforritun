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

describe('SellerslistComponent', () => {

  let mockService = new SellersServiceMock();

  class SellersServiceMock {
    success = false;
    getSellers(): Observable<Seller[]>{
      return this.http.get('http://localhost:5000/api/sellers')
        .map(response => {
          return <Seller[]> response.json();
        });
    }

  }

  const mockModal = {
    open: jasmine.createSpy('open')
  };

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SellerslistComponent,
        SellersService,
        AppComponent,
        NgbModal
      ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: NgbModal,
        useValue: mockModal
      }, {
        provide: Router,
        useValue: mockRouter
      }],
      imports: [FormsModule]
    });
    TestBed.compileComponents();
  });

  it('should include all sellers', async(() => {

  }));
});
