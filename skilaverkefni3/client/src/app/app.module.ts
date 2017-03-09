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
import { ProductCard } from './productcard/productcard.component';
import { ProductDlgComponent } from './product-dlg/product-dlg.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerDetails,
    SellersListComponent,
    ProductCard,
    ProductDlgComponent
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
      path: 'sellerdetails',
      component: SellerDetails}]),
    NgbModule.forRoot()
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDlgComponent]
})
export class AppModule { }
