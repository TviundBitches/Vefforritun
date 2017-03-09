import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sellerslist',
  templateUrl: './sellerslist.component.html',
  styleUrls: ['./sellerslist.component.css']
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
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
