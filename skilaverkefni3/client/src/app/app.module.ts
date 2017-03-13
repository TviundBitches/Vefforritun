import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { RouterModule } from '@angular/router';
import { SellerDetails } from './sellerdetails/sellerdetails.component'
import { SellerslistComponent } from './sellerslist/sellerslist.component';
import { ProductDlgComponent } from './sellerdetails/product-dlg/product-dlg.component';
import { ProductCard } from './sellerdetails/productcard/productcard.component';
import { SellerComponent } from './sellerslist/seller/seller.component';
import { SellerDlgComponent } from './sellerslist/seller-dlg/seller-dlg.component';

/* Added */
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SellerDetails,
    SellerslistComponent,
    ProductCard,
    ProductDlgComponent,
    SellerComponent,
    SellerDlgComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellerslist',
      pathMatch: 'full'
    }, {
      path: 'sellerslist',
      component: SellerslistComponent
    }, {
      path: 'sellerdetails/:id',
      component: SellerDetails}]),
    NgbModule.forRoot(),
    CommonModule,           /* Added */
    ToastrModule.forRoot(), /* ToastrModule added */
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDlgComponent, SellerDlgComponent]
})
export class AppModule { }
