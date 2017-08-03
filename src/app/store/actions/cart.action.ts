import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Http, Headers} from '@angular/http';
import { Product } from '../../models/Product';

const BASE_URL = 'http://localhost:4200';

function type(action) {
  return action;
}

export const ActionTypes= {
  SELECT :     type('[Cart] Select',),
  ADD_TO_CART :  type('[Cart] Add',)
};

@Injectable()
export class CartAction{
public cart =[];
public carts=[];
public product =[];

constructor(public store:Store<any>, public http:Http){}

addToCart(product,quantity){
  console.log('add,',product);
  this.cart.push(product);
  console.log(this.cart);
}

delete(product : Product) {
 console.log(product);
  this.cart = this.cart.filter(todo => todo.id !== product.id);
//  let index: number = this.cart.indexOf(product);
//  if( index != -1){
//        this.cart.splice(index,1);
// }

}

getMoss(){
  return this.carts;
}
getBoss(){
  return this.cart.length;
}
getMass(){
  return this.cart;
}

}