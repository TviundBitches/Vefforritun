import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seller } from '../../sellers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})

export class SellerComponent implements OnInit {

  @Input() seller: Seller;
  @Output() sellerUpdated = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    // Code which displays a dialog, and if the user
    // presses the OK button we notify about it:
    this.sellerUpdated.emit(this.seller);
  }
  onVisitSellerDetails(seller) {
    this.router.navigate(['/sellerdetails/' + seller.id])
  }

}
