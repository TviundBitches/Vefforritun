import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seller } from '../../sellers.service';
// import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/* Added */
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})

export class SellerDlgComponent implements OnInit {

  seller: Seller;
                                                          /* Added */
  constructor(public activeModal: NgbActiveModal, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    /* Added */
    this.toastrService.success('Successfully added a new seller!');
    this.activeModal.close(this.seller);
  }

}
