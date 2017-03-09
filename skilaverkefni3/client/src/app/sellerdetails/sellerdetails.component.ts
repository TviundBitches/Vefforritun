import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDlgComponent } from '../product-dlg/product-dlg.component'
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

  constructor(private service: SellersService, private modalService: NgbModal) {}

  ngOnInit() {
    this.service.getSellerProducts(1).subscribe(result => {
      this.products = result;
      console.log(result);
    });

  }
  onAddProduct() {
    const modalInstance = this.modalService.open(ProductDlgComponent);
    modalInstance.componentInstance.productName = 'Nammi';
    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK');
      console.log(obj);
    }).catch(err => {
      console.log('Dialog was closed using cancel');
      console.log(err);
    });
  }
}
