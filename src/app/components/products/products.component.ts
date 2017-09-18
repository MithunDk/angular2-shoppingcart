import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import {CartAction } from '../../store/actions/cart.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

cartService: CartAction;
  constructor(public router: Router , 
              public productService : ProductService, 
              public cartStore: CartAction,public location:Location) {
              this.cartService = cartStore;
               }
url = '../../assets/phones/logo.png';
urls ='../../assets/phones/logos.png';
ur = '../../assets/phones/logoname.jpg';
username = 'Mithun !';
products: Product[];
quantity: number;
isIn = false;   // store state
   
public cart :Array<any> = new Array<any>() ;
public carts =[];
public count : number;
productList =['sony','xperia','iphone'];

isAbout = true;
 toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
goHide(){
this.isAbout= false;
}
goTrue(){
this.isAbout=true;
this.router.navigate(['/products']);
 }
selectedProduct(product){
	this.cart.push(product);
  this.count = this.count+1;

  this.cartStore.addToCart(product, this.quantity || 1);
}
//@Output()
//customClick = new EventEmitter();

 
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
}
}