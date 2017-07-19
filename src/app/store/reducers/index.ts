import { compose } from '@ngrx/core/compose';
import { combineReducers, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import {storeLogger} from "ngrx-store-logger";
import { environment } from '../../../environments/environment';
import * as fromCart from './cart.reducer';


export interface State{
cart: fromCart.Istate;
}

const reducers = {cart : fromCart.reducer}

const developmentReducer: ActionReducer<State> = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}