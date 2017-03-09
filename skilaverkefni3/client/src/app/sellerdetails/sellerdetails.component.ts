import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { isUndefined } from 'util';
import { SellersService, Seller, SellerProduct } from '../sellers.service';

@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.component.html',
  styleUrls: ['./sellerdetails.component.css']
})

export class SellerDetails implements OnInit {
  private seller: Seller;
  products: SellerProduct[];

  constructor(private service: SellersService) {  }
  ngOnInit() {
    this.service.getSellerProducts(1).subscribe(result => {
      this.products = result;
    });
  }
}
