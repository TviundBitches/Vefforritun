import { Component, OnInit } from '@angular/core';
import construct = Reflect.construct;
import { SellersService, Seller } from './sellers.service';
//import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private sellers: Seller[];
  private seller: Seller;

  constructor(private service: SellersService, /*private modalService: NgbModal*/) {}

  ngOnInit() {
    /*var successHandler = (result) =>{
      this.seller = result;
    };
    var errorHandler = (err) => {
      // TODO display tostr!
      console.log('Something failed');
    };
    this.service.getSellerById(2).subscribe(successHandler, errorHandler);
    */
    this.service.getSellerById(1).subscribe(result => {
      this.seller = result;
      }, (err) => {
      // TODO display tostr!
      console.log('something failed');
    });

    this.service.getSellers().subscribe(result => {
     this.sellers = result;
     });
  }
}

