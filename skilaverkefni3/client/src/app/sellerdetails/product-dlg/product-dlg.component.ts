import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-dlg',
  templateUrl: 'product-dlg.component.html',
  styleUrls: ['product-dlg.component.css']
})
export class ProductDlgComponent implements OnInit {

  productName: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    this.activeModal.close(this.productName);
  }

}
