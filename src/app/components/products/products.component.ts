import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Location } from '@angular/common';
=======
>>>>>>> origin/master

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import {CartAction } from '../../store/actions/cart.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
<<<<<<< HEAD
cartService: CartAction;
  constructor(public router: Router , 
              public productService : ProductService, 
              public cartStore: CartAction,public location:Location) {
              this.cartService = cartStore;
               }
url = '../../assets/phones/logo.png';
username = 'Mithun !';
products: Product[];
quantity: number;

public cart :Array<any> = new Array<any>() ;
public carts =[];
public count : number;
productList =['sony','xperia','iphone'];

isAbout = true;
goHide(){
this.isAbout= false;
}
goTrue(){
this.isAbout=true;
this.router.navigate(['/products']);
 }

selectedProduct(product){
  
	this.cart.push(product);
  this.count += 1;
=======

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
>>>>>>> origin/master
  this.cartStore.addToCart(product, this.quantity || 1);
}
//@Output()
//customClick = new EventEmitter();
<<<<<<< HEAD
 
proceedCheck(){
    this.router.navigate(['/checkout']);
 }

signOut(){
	this.router.navigate(['/signout']);
  window.location.reload();

}
getProductData(){
  this.productService.getProducts()
                      .then(
                        products => this.products=products);

}

ngOnInit() {
  this.getProductData();
  this.count = this.cartStore.getBoss();
=======
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

>>>>>>> origin/master
  }

}
