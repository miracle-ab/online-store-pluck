import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { ProductDetailInterface } from 'src/app/core/interfaces/product-detail.interface';

export interface ProductDetailPageInterface {
  loadBanners: boolean;
  product: ProductDetailInterface | null;
}

export const productPageInitState: ProductDetailPageInterface = {
  loadBanners: false,
  product: null,
};

export const getProductAction = createAction(
  '[PRODUCTS_DETAIL_PAGE] getProductAction',
  props<{ id: string }>()
);
export const setProductAction = createAction(
  '[PRODUCTS_DETAIL_PAGE] setProductAction',
  props<{ product: ProductDetailInterface | null }>()
);
export const setProducActionError = createAction(
  '[PRODUCTS_DETAIL_PAGE] setProducActionError',
  props<{ error: string }>()
);
export const resetProductState = createAction(
  '[PRODUCTS_DETAIL_PAGE] resetProductState'
);

export const productDetailReducer = createReducer(
  productPageInitState,
  on(
    setProductAction,
    (state, action): ProductDetailPageInterface => ({
      ...state,
      loadBanners: true,
      product: action.product,
    })
  ),
  on(
    resetProductState,
    (): ProductDetailPageInterface => ({
      ...productPageInitState,
    })
  )
);

export const selectFeature =
  createFeatureSelector<ProductDetailPageInterface>('productDetail');
export const selectProduct = createSelector(
  selectFeature,
  (state) => state.product
);
export const selectProductListLoader = createSelector(
  selectFeature,
  (state) => state.loadBanners
);
