import { Component, OnInit } from '@angular/core';
import construct = Reflect.construct;
import { SellersService, Seller } from './sellers.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private sellers: Seller[];

  constructor(private service: SellersService) {}

  ngOnInit() {
    this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });
  }
}

