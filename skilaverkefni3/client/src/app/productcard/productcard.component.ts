 import { Component, OnInit, Input } from '@angular/core';
 import { SellerProduct } from '../sellers.service';

 @Component({
   selector: 'app-product-card',
   templateUrl: './productcard.component.html',
   styleUrls: ['./productcard.component.css']
 })

 export class ProductCard implements OnInit {

    @Input() product: SellerProduct;
    //@Output() productUpdated = new EventEmitter();


   constructor() {  }
   ngOnInit() {

   }
 }
