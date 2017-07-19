import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import {CartAction } from '../../store/actions/cart.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router , public productService : ProductService, public cartStore: CartAction ) { }

username = 'mithun';
products: Product[];
quantity: number;

public cart = [];
public carts =[];
public count : number = 0;
productList =['sony','xperia','iphone'];

selectedProduct(product){
	this.cart.push(product);
  this.count = this.count+1;
  this.cartStore.addToCart(product, this.quantity || 1);
}
//@Output()
//customClick = new EventEmitter();
proceedCheck(){
  //console.log(this.cart);
  //this.customClick.emit('coming');
  this.router.navigate(['/checkout']);
 }
  
signOut(){
	this.router.navigate(['/signout']);
}
 
 getProductData(){
  this.productService.getProducts()
                      .then(products => this.products=products);
 }
  ngOnInit() {
  this.getProductData();

  }

}
