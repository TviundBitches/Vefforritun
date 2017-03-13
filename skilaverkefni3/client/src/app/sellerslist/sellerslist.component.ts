import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SellersService, Seller } from '../sellers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SellerDlgComponent } from './seller-dlg/seller-dlg.component';

@Component({
  selector: 'app-sellerslist',
  templateUrl: './sellerslist.component.html',
  styleUrls: ['./sellerslist.component.css']
})
export class SellerslistComponent implements OnInit {

  private sellers: Seller[];
  private seller: Seller;

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

  addSeller() {
    const modalInstance = this.modalService.open(SellerDlgComponent);
    modalInstance.componentInstance.seller = {};
    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK');
      console.log(obj);
      const params = {
        id: this.sellers.length + 1,
        name: obj.name,
        category: obj.category,
        imagePath: obj.imagePath
      }
      this.service.addSeller(params).subscribe(result => {
        console.log(result);
      })
    }).catch(err => {
      console.log('Dialog was cancelled');
      console.log(err);
    })
  }

  onUpdateSeller(s: Seller) {

  }

}
