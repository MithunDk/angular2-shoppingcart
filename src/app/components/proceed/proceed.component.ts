import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../../models/Product';
import { CartAction } from '../../store/actions/cart.action';

import { Router } from '@angular/router';
@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {

products : Product[] =[];
public totalPrice: number;
public totalQuantity: number;
 cart  =[];
 public quantity: number;
  
constructor(public cartStore: CartAction, public router: Router) { }
  
//getValues():void{
 // this.cartStore.getMass()
 //                 .then(products => this.products=products);
//}
signOut(){
	this.router.navigate(['/signout']);
}

getTotalPrice(){
  
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

ngOnInit() {
     this.products = this.cartStore.getMass();
    // console.log(this.products); 
     this.getTotalPrice()
  }

}
