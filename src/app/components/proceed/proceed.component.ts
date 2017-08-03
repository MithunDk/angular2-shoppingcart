import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CartAction } from '../../store/actions/cart.action';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
const BASE_URL = 'http://localhost:4200';
@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})


export class ProceedComponent implements OnInit {

products : Product[] =[];
selectedProduct : Product;
public totalPrice: number;
public totalQuantity: number;
public cart  =[];
public quantity: number;
public numbers: number;
public cartService: CartAction;

constructor(public cartStore: CartAction, public router: Router, public http: Http) { 
this.cartService = cartStore;
}
 obj:Product = new Product();

signOut(){
	this.router.navigate(['/signout']);
}

getTotalPrice(){
   this.cart = this.products;
   this.cart = this.cartStore.getMass();
  this.quantity = this.cart.length;
  console.log(this.cart);
  
  let totalCost: Array<number> = []
  let intPrice: number
  this.cart.forEach((item,i) => {
  intPrice = parseInt(item.price)
  totalCost.push(intPrice)

    })
this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
}

deleteProduct(product){
 
   this.cartStore.delete(product)
    this.products= this.cartService.cart;   
    this.cart = this.products;
    this.quantity = this.cart.length;
  let totalCost: Array<number> = []
  let intPrice: number
  
this.cart.forEach((item,i) => {
  intPrice = parseInt(item.price)
  totalCost.push(intPrice)
    })
    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
  //  console.log(products.id);
}
goBack(){
  this.router.navigate(['/products']);
    }


ngOnInit() {
     this.products = this.cartStore.getMass();
    // console.log(this.products); 
     this.getTotalPrice()
  }

}
