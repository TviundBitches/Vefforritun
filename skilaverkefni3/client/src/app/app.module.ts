import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellerDetails } from './sellerdetails/sellerdetails.component'
import { RouterModule } from '@angular/router';
import { SellersListComponent } from './sellerslist/sellerslist.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerDetails,
    SellersListComponent
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
    }]),
    NgbModule.forRoot()
  ],
  providers: [SellersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
