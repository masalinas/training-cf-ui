import { Component, OnInit } from '@angular/core';

import { Product, ProductControllerService } from '../shared/sdk';

import { AuthService, AuthService } from "../auth/api/auth.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[];
  displayProducts: Product[];

  sortName = null;
  sortValue = null;

  constructor(private productApi: ProductControllerService, private authService: AuthService) {}

  ngOnInit() {
    // Login mockup
    this.authService.login('admin', 'thingtrack').subscribe(
      credentials => {
        // set credential configuration
        this.authService.setConfiguration(credentials);

        // recover all products
        this.productApi.getAllProductsUsingGET().subscribe((result: Product[]) => {
          this.products = result;    
          this.displayProducts = [ ...this.products ];
        });

        console.log('HTTP response: ' + JSON.stringify(credentials))}, 
      err => {    
        console.log('HTTP Error: ' + err)},
      () => {
        console.log('HTTP request completed.')}
    );

    // recover all products
    /*this.productApi.getAllProductsUsingGET().subscribe((result: Product[]) => {
      this.products = result;    
      this.displayProducts = [ ...this.products ];
    });*/
  }

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;

    this.search();
  }

  search(): void {
    /** sort data **/
    if (this.sortName) {
      this.displayProducts = this.products.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayProducts = this.products;
    }
  }
}
