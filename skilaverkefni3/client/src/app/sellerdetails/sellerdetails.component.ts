import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';
//import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { isUndefined } from 'util';
import { AppComponent } from '../app.component';
import { SellersListComponent } from '../sellerslist/sellerslist.component';
import { SellersService, Seller, SellerProduct } from '../sellers.service';
import { ProductCard } from './productcard/productcard.component'

@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.component.html',
  styleUrls: ['./sellerdetails.component.css']
})

export class SellerDetails implements OnInit {
  private seller: Seller;
  private name: string;
  private category: string;
  private imagePath: string;
  products: SellerProduct[];
  topTenProducts: SellerProduct[];

  constructor(private service: SellersService, private modalService: NgbModal,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getSellerById(this.route.snapshot.params['id']).subscribe(result => {
      this.seller = result;
      this.name = this.seller.name;
      this.category = this.seller.category;
      this.imagePath = this.seller.imagePath;
      this.service.getSellerProducts(this.seller.id).subscribe(result => {
        this.products = result;
      });
      this.service.getTopSellerProducts(this.seller.id).subscribe(result => {
        this.topTenProducts = result;
      });
    });
  }

  onAddProduct() {
    const modalInstance = this.modalService.open(ProductDlgComponent);
    modalInstance.componentInstance.product = {
    };
    modalInstance.result.then(obj => {
      console.log('Dialog was closed using OK');
      const params = {
        id: this.seller.id,
        name: obj.name,
        price: obj.price,
        quantityInStock: obj.quantityInStock,
        path: obj.imagePath
      }
      this.service.addProduct(params).subscribe(result => {
        console.log(result);
      });
    }).catch(err => {
      console.log('Dialog was closed using cancel');
      console.log(err);
    });
  }

  onCloseAlert() {
    document.getElementById("alert").style.visibility = "hidden";
  }

  onUpdateProduct(p: SellerProduct) {
      
  }

  onGoBack() {
    this.router.navigate(['/sellerslist']);
  }
}
