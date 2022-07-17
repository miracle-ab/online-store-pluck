import { ActionReducerMap } from '@ngrx/store';
import {
  ProductDetailPageInterface,
  productDetailReducer,
} from './product-detail.action';
import { ProductsListInterface, productsListReducer } from './products.actions';

export interface State {
  productsList: ProductsListInterface;
  productDetail: ProductDetailPageInterface;
}

export const reducers: ActionReducerMap<State> = {
  productsList: productsListReducer,
  productDetail: productDetailReducer,
};
