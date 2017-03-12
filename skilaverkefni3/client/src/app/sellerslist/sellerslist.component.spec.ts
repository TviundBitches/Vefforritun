import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerslistComponent } from './sellerslist.component';
import { SellersService } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import {} from 'jasmine';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SellerslistComponent', () => {

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
        provide: Router,
        useValue: mockRouter
      }, {
        provide: ActivatedRoute,
        useValue: mockRoute
      }
      ],
    });
    TestBed.compileComponents();
  });
});
