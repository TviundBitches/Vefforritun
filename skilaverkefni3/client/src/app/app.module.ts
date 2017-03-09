import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { RouterModule } from '@angular/router';
import { SellerDetails } from './sellerdetails/sellerdetails.component'
import { SellersListComponent } from './sellerslist/sellerslist.component';
import { ProductDlgComponent } from './sellerdetails/product-dlg/product-dlg.component';
import { ProductCard } from './sellerdetails/productcard/productcard.component';
import { SellerComponent } from './sellerslist/seller/seller.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerDetails,
    SellersListComponent,
    ProductCard,
    ProductDlgComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellerslist',
      pathMatch: 'full'
    }, {
      path: 'sellerslist',
      component: SellersListComponent
  }, {
      path: 'sellerdetails/:id',
      component: SellerDetails}]),
    NgbModule.forRoot()
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDlgComponent, SellerComponent]
})
export class AppModule { }
