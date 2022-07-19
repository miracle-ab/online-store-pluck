import { ActionReducerMap } from '@ngrx/store';
import {
  ProductDetailPageInterface,
  productDetailReducer,
} from './product-detail.actions';
import { ProductsListInterface, productsListReducer } from './products.actions';
import {
  ShoppingCartInterface,
  shoppingCartReducer,
} from './shopping-cart.actions';

export interface State {
  productsList: ProductsListInterface;
  productDetail: ProductDetailPageInterface;
  shoppingCartProductsList: ShoppingCartInterface;
}

export const reducers: ActionReducerMap<State> = {
  productsList: productsListReducer,
  productDetail: productDetailReducer,
  shoppingCartProductsList: shoppingCartReducer,
};
