import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

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

  constructor(public store:Store<any>){}

addToCart(product,quantity){
  console.log('add,',product);
  this.cart.push(product);
  console.log(this.cart);
 // this.store.dispatch({
  //  type: ActionTypes.ADD_TO_CART,
   // payload: {product,quantity}
  //})
}


getMass(){
  return this.cart;
}

}