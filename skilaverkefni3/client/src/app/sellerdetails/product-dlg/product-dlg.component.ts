import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SellersService, Seller, SellerProduct } from '../../sellers.service';

/* Added */
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-dlg',
  templateUrl: 'product-dlg.component.html',
  styleUrls: ['product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  product: SellerProduct;

  constructor(public activeModal: NgbActiveModal, private toastrService: ToastrService, public fb: FormBuilder) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    if(typeof this.product.imagePath  === 'undefined' || !this.product.imagePath) {
      this.product.imagePath = "http://37.media.tumblr.com/2b4a169a1cf4c7b0e010b65d84f9c1d1/tumblr_mzkj7jySOu1s7k41zo1_400.jpg";
    }
    this.toastrService.success('Procedure was successful!');
    this.activeModal.close(this.product);
  }
}
