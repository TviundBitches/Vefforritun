 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import { SellerProduct } from '../../sellers.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})

export class ProductCard implements OnInit {

  @Input() product: SellerProduct;
  @Output() productUpdated = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onEdit() {
    // Code which displays a dialog, and if the user
    // presses the OK button we notify about it:
    this.productUpdated.emit(this.product);
  }

}
