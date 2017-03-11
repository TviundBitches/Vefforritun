/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SellersService } from "../../sellers.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";
import { SellerComponent } from './seller.component';

describe('SellerComponent', () => {

  const mockService = {
    open: jasmine.createSpy('open')
  };

  const mockModal = {
    open: jasmine.createSpy('open')
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockRoute = {
    route: jasmine.createSpy('route')
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
});
