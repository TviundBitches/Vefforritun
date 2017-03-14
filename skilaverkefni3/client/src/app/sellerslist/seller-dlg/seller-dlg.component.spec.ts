/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SellersService } from "../../sellers.service";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { SellerDlgComponent } from './seller-dlg.component';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';

describe('SellerDlgComponent', () => {

  const mockService = {
    open: jasmine.createSpy('open')
  };

  const mockActiveModal = {
    dismiss: jasmine.createSpy('dismiss')
  };

  const mockBuilder = {
    route: jasmine.createSpy('route')
  };

  const mockToastr = {
    error: jasmine.createSpy('error'),
    success: jasmine.createSpy('success')
  };
  let component: SellerDlgComponent;
  let fixture: ComponentFixture<SellerDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDlgComponent ],
      providers: [{
        provide: SellersService,
        useValue: mockService
      }, {
        provide: NgbActiveModal,
        useValue: mockActiveModal
      }, {
        provide: FormBuilder,
        useValue: mockBuilder
      }, {
        provide: ToastrService,
        useValue: mockToastr
      }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
