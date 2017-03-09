import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerComponent } from '../seller/seller.component';

@Component({
  selector: 'app-sellerslist',
  templateUrl: './sellerslist.component.html',
  styleUrls: ['./sellerslist.component.css'],
})
export class SellersListComponent implements OnInit {
  private sellers: Seller[];
  private seller: Seller;

  constructor(private service: SellersService, private appComponent: AppComponent,
      private modalService: NgbModal) {}

  ngOnInit() {
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

  addSeller() {
    const modalInstance = this.modalService.open(SellerComponent);
    modalInstance.componentInstance.sellerName = 'Sigrun';
    modalInstance.result.then(obj => {
      console.log('Dialog was closed');
      console.log(obj);
    }).catch(err => {
      console.log('Dialog was cancelled');
      console.log(err);
    })
  }

}
