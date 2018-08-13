import { Component, OnInit } from '@angular/core';
import { Product, ProductControllerService } from '../shared/sdk';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // All the types you need already there
  products : Product[];
  displayProducts: Product[];

  sortName = null;
  sortValue = null;

  constructor(private productApi: ProductControllerService) {
  }

  ngOnInit() {
      // recover all products
      this.productApi.getAllProductsUsingGET().subscribe((result: Product[]) => {
        this.products = result;    
        this.displayProducts = [ ...this.products ]
      });
  }

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;

    this.search();
  }

  search(): void {
    /** filter data **/
    /*const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));*/

    /** sort data **/
    if (this.sortName) {
      this.displayProducts = this.products.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayProducts = this.products;
    }
  }
}
