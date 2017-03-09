import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellerslist',
  templateUrl: './sellerslist.component.html',
  styleUrls: ['./sellerslist.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
  `]
})
export class SellersListComponent implements OnInit {
  private sellers: Seller[];
  private seller: Seller;
  closeResult: string;

  constructor(private service: SellersService, private appComponent: AppComponent,
      private modalService: NgbModal) {}

  ngOnInit() {
    this.service.getSellerById(1).subscribe(result => {
      this.seller = result;
      }, (err) => {
      // TODO display tostr!
      console.log('something failed');
    });

    this.service.getSellers().subscribe(result => {
     this.sellers = result;
     });
  }
  open(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }


}
