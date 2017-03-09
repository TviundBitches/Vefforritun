import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { isUndefined } from 'util';
import { AppComponent } from '../app.component';
import { SellersListComponent } from '../sellerslist/sellerslist.component';
import { SellersService, Seller, SellerProduct } from '../sellers.service';

@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.component.html',
  styleUrls: ['./sellerdetails.component.css']
})

export class SellerDetails implements OnInit {
  private seller: Seller;
  products: SellerProduct[];

  constructor(private service: SellersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.service.getSellerById(this.route.snapshot.params['id']).subscribe(result => {
      this.seller = result;
      this.service.getSellerProducts(this.seller.id).subscribe(result => {
        this.products = result;
      });
    });

  }
}
