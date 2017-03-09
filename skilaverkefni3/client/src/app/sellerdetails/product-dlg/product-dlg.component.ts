import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller, SellerProduct } from '../../sellers.service';


@Component({
  selector: 'app-product-dlg',
  templateUrl: 'product-dlg.component.html',
  styleUrls: ['product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  product: SellerProduct;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    this.activeModal.close(this.product);
  }

}
