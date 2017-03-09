 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import {SellerProduct, SellersService} from '../../sellers.service';
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

  constructor(private modalService: NgbModal, private service: SellersService) {}

  ngOnInit() {
  }

  onEdit(id) {
    const modalInstance = this.modalService.open(ProductDlgComponent);
    modalInstance.componentInstance.product = this.product;

    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK');
      console.log(obj);
          const params = {
            id: 1,
            name: obj.name,
            price: obj.price,
            quantityInStock: obj.quantityInStock,
            path: obj.imagePath
          };
      this.service.updateProduct(params).subscribe(result => {
        console.log(result)
      });
    }).catch(err => {
      console.log('Dialog was closed using cancel');
      console.log(err);
    });

    // Code which displays a dialog, and if the user
    // presses the OK button we notify about it:

    this.productUpdated.emit(this.product);
  }
  //
  // onAddProduct() {
  //   const modalInstance = this.modalService.open(ProductDlgComponent);
  //   modalInstance.componentInstance.product = {
  //   };
  //   modalInstance.result.then(obj => {
  //     console.log('Dialog was closed using OK');
  //     console.log(obj);
  //     const params = {
  //       id: this.seller.id,
  //       name: obj.name,
  //       price: obj.price,
  //       quantityInStock: obj.quantityInStock,
  //       path: obj.imagePath
  //     }
  //     this.service.addProduct(params).subscribe(result => {
  //       console.log(result)
  //     });
  //   }).catch(err => {
  //     console.log('Dialog was closed using cancel');
  //     console.log(err);
  //   });
  // }

}
