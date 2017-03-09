import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-sellerslist',
    templateUrl: './sellerslist.component.html',
    styleUrls: ['./sellerslist.component.css']
})
export class SellersListComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}

  ngOnInit(){
    
  }
}
