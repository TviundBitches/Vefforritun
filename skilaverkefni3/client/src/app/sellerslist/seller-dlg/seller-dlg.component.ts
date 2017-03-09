import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Seller } from '../../sellers.service';
// import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})

export class SellerDlgComponent implements OnInit {

  sellerName: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    this.activeModal.close(this.sellerName);
  }

}
