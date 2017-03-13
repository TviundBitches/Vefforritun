import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seller } from '../../sellers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/* Added */
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-seller-dlg',
  templateUrl: './seller-dlg.component.html',
  styleUrls: ['./seller-dlg.component.css']
})

export class SellerDlgComponent implements OnInit {

  seller: Seller;

  // public sellerForm = this.fb.group({
  //  name: ["", Validators.required],
  //  category: ["", Validators.required],
  //  imagePath: ["", Validators.required]
  // });

                                                          /* Added */
  constructor(public activeModal: NgbActiveModal, private toastrService: ToastrService, public fb: FormBuilder) { }
  ngOnInit() {
  }

  onCancel() {
    this.activeModal.dismiss();
  }

  onOk() {
    /* Added */
    if(typeof this.seller.imagePath  === 'undefined' || !this.seller.imagePath) {
      this.seller.imagePath = "http://37.media.tumblr.com/2b4a169a1cf4c7b0e010b65d84f9c1d1/tumblr_mzkj7jySOu1s7k41zo1_400.jpg";
    }
    this.toastrService.success('Procedure was successful!');
    this.activeModal.close(this.seller);
  }

}
