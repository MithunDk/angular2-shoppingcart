import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/cart.action';
import { Product } from '../../models/Product';

    export interface Istate{
        products : Array<Product>;
    }

    const initialState: Istate ={
        products :[]
    }

    export const reducer = (state = initialState, action: Action): Istate => {
        switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const addProduct = Object.assign({}, action.payload.product);
      addProduct.quantity = action.payload.quantity;
      addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity)).toFixed(2);
      return {
        ...state,
        products: [
            ...state.products,
            addProduct
        ]
      };
    };
    default:
      return state;
    }
    }