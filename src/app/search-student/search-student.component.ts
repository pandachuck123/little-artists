import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss'],
})
export class SearchStudentComponent {
  public pro:any;
  public name:any;
  public ProductDetails: object = [];

  //filter product details on name and return productDetails object.
  public ProductHeader = [{ name: 'Hp' }, { name: 'Dell'}, { name: 'Lenovo' }];

  public Products = [
    { Name: 'Hp', title: 'HP OfficeJet Pro 6978 All-in-One Printer', price: '100', store: 'Target', model: 'T0F29A#B1H' },
    { Name: 'Dell', title: 'Dell - Inspiron 21.5" Touch-Screen All-In-One', price: '469.90', store: 'Target', model: 'I3265-A067BLK-PUS' },
    { Name: 'Lenovo', title: 'Lenovo - 520-24AST 23.8" Touch-Screen All-In-One', price: '679.99', store: 'Target', model: 'F0D3000EUS' },
  ];

  constructor() {

    this.getProducts();
  }
  getProducts() {
    this.pro = JSON.stringify(this.ProductHeader);
    return this.pro;


  }


  SearchProduct(name: string) {

    let obj = this.Products.filter(m => m.Name === name);
    this.ProductDetails = obj;
    return this.ProductDetails;
  }


}
