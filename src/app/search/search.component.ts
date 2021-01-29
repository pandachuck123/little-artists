import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  // public pro:any;
  // // public name:any;
  // public obj:any;
  // public ProductDetails: object = [];
  //
  // //filter product details on name and return productDetails object.
  // public ProductHeader = [{ name: 'Hp' }, { name: 'Dell'}, { name: 'Lenovo' }];
  //
  // public Products = [
  //   { Name: 'Hp', title: 'HP OfficeJet Pro 6978 All-in-One Printer', price: '100', store: 'Target', model: 'T0F29A#B1H' },
  //   { Name: 'Dell', title: 'Del l - Inspiron 21.5" Touch-Screen All-In-One', price: '469.90', store: 'Target', model: 'I3265-A067BLK-PUS' },
  //   { Name: 'Lenovo', title: 'Lenovo - 520-24AST 23.8" Touch-Screen All-In-One', price: '679.99', store: 'Target', model: 'F0D3000EUS' },
  // ];
  // // tableData: object[] = [
  // //   { first: 'Mark', last: 'Otto', username: '@mdo', email: 'markotto@gmail.com', country: 'USA', city: 'San Francisco' },
  // //   { first: 'Jacob', last: 'Thornton', username: '@fat', email: 'jacobt@gmail.com', country: 'France', city: 'Paris' },
  // //   { first: 'Larry', last: 'the Bird', username: '@twitter', email: 'larrybird@gmail.com', country: 'Germany', city: 'Berlin' },
  // //   { first: 'Paul', last: 'Topolski', username: '@P_Topolski', email: 'ptopolski@gmail.com', country: 'Poland', city: 'Warsaw' },
  // //   { first: 'Anna', last: 'Doe', username: '@andy', email: 'annadoe@gmail.com', country: 'Spain', city: 'Madrid' }
  // // ];


  constructor() {

    // this.getProducts();
  }
  ngOnInit(): void {
  }
  // getProducts() {
  //   this.pro = JSON.stringify(this.ProductHeader);
  //   return this.pro;
  //
  //
  // }
  //
  //
  // SearchProduct(name: string) {
  //
  //   this.obj = this.Products.filter(m => m.Name == name);
  //   this.ProductDetails = this.obj;
  //   return this.ProductDetails;
  // }

}
