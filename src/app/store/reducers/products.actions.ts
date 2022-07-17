import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { ProductDetailinterface } from 'src/app/core/interfaces/product-detail.interface';

export interface ProductsListInterface {
  loadBanners: boolean;
  products: ProductDetailinterface[];
  product: ProductDetailinterface | null;
}

export const productsListPageInitState: ProductsListInterface = {
  loadBanners: false,
  products: [],
  product: null,
};

export const getProductsListAction = createAction(
  '[PRODUCTS_PAGE] getProductsListAction'
);
export const setProductsListAction = createAction(
  '[PRODUCTS_PAGE] setProductsListAction',
  props<{ products: ProductDetailinterface[] }>()
);
export const setProductsListActionError = createAction(
  '[PRODUCTS_PAGE] setProductsListActionError',
  props<{ error: string }>()
);
export const resetProductsState = createAction(
  '[PRODUCTS_PAGE] resetProductsState'
);

export const productsListReducer = createReducer(
  productsListPageInitState,
  on(
    setProductsListAction,
    (state, action): ProductsListInterface => ({
      ...state,
      loadBanners: true,
      products: [...action.products],
    })
  ),
  on(
    resetProductsState,
    (): ProductsListInterface => ({
      ...productsListPageInitState,
    })
  )
);

export const selectFeature =
  createFeatureSelector<ProductsListInterface>('productsList');
export const selectProductsList = createSelector(
  selectFeature,
  (state) => state.products
);
export const selectProductsListLoader = createSelector(
  selectFeature,
  (state) => state.loadBanners
);
