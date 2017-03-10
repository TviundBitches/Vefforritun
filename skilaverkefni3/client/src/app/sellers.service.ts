import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface SellerProduct {
    id: number;
    name: string;
    price: number;
    quantitySold: number;
    quantityInStock: number;
    imagePath: string;
}


@Injectable()
export class SellersService {

  constructor(private http: Http) { }

  getSellers(): Observable<Seller[]> {
  return this.http.get('http://localhost:5000/api/sellers')
    .map(response => {
      return <Seller[]> response.json();
    });
  }

  getSellerById(id: number): Observable<Seller> {
    return this.http.get('http://localhost:5000/api/sellers/' + id)
    .map(response => {
      return <Seller> response.json();
    });
  }

  getSellerProducts(id: number): Observable<SellerProduct[]> {
    return this.http.get('http://localhost:5000/api/sellers/' + id + '/products')
    .map(response => {
      console.log(response.json());
      return <SellerProduct[]> response.json();
    });
  }

  updateProduct(obj: any, sellerid, productid): Observable<any> {
    console.log(sellerid)
    console.log(productid)
    return this.http.put('http://localhost:5000/api/sellers/'+sellerid+'/products/'+productid, obj);
  }
  getTopSellerProducts(id: number): Observable<SellerProduct[]> {
    return this.http.get('http://localhost:5000/api/sellers/' + id + '/products')
    .map(response => {
      let result = (response.json().sort(function(a,b) {return (a.quantitySold > b.quantitySold) ? 1 : ((b.quantitySold > a.quantitySold) ? -1 : 0);} )).slice(0, 10);;
      return <SellerProduct[]> result;
    });
  }

  addProduct(obj: any): Observable<any> {
    console.log(obj.id)
    return this.http.post('http://localhost:5000/api/sellers/'+obj.id+'/products', obj);
  }

  addSeller(obj: any): Observable<any> {
    console.log(obj);
    return this.http.post('http://localhost:5000/api/sellers', obj);
  }
}
