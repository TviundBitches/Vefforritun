 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import { SellerProduct } from '../../sellers.service';
 import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 import { ProductDlgComponent } from '../product-dlg/product-dlg.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})

export class ProductCard implements OnInit {

  @Input() product: SellerProduct;
  @Output() productUpdated = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  onEdit(id) {
    const modalInstance = this.modalService.open(ProductDlgComponent);
    modalInstance.componentInstance.product = this.product;

    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK');
      console.log(obj);
      //this.service.updateProduct()
    }).catch(err => {
      console.log('Dialog was closed using cancel');
      console.log(err);
    });

    // Code which displays a dialog, and if the user
    // presses the OK button we notify about it:

    this.productUpdated.emit(this.product);
  }

}
