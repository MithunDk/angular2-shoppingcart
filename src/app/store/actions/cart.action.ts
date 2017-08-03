import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
<<<<<<< HEAD
import { Http, Headers} from '@angular/http';
import { Product } from '../../models/Product';

const BASE_URL = 'http://localhost:4200';
=======

>>>>>>> origin/master
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
<<<<<<< HEAD
public carts=[];
public product =[];

  constructor(public store:Store<any>, public http:Http){}
=======

  constructor(public store:Store<any>){}
>>>>>>> origin/master

addToCart(product,quantity){
  console.log('add,',product);
  this.cart.push(product);
  console.log(this.cart);
<<<<<<< HEAD
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
=======
 // this.store.dispatch({
  //  type: ActionTypes.ADD_TO_CART,
   // payload: {product,quantity}
  //})
}


>>>>>>> origin/master
getMass(){
  return this.cart;
}

}