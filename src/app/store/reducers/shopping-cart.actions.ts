import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { ProductDetailInterface } from 'src/app/core/interfaces/product-detail.interface';

export interface ShoppingCartInterface {
  loadBanners: boolean;
  products: ProductDetailInterface[];
  productQuantity: number;
  productsQuantity: number;
}

export const productsListPageInitState: ShoppingCartInterface = {
  loadBanners: false,
  products: [],
  productQuantity: 0,
  productsQuantity: 0,
};

export const getShoppingCartProductsListAction = createAction(
  '[SHOPPING_CART_PAGE] getShoppingCartProductsListAction'
);
export const setShoppingCartProductsListAction = createAction(
  '[SHOPPING_CART_PAGE] setShoppingCartProductsListAction',
  props<{ products: ProductDetailInterface[] }>()
);
export const setShoppingCartProductsListActionError = createAction(
  '[SHOPPING_CART_PAGE] setShoppingCartProductsListActionError',
  props<{ error: string }>()
);

export const getProductByIdFromCartAction = createAction(
  '[SHOPPING_CART_PAGE] getProductByIdFromCartAction',
  props<{ id: string }>()
);
export const setProductByIdAction = createAction(
  '[SHOPPING_CART_PAGE] setProductByIdAction',
  props<{ productQuantity: number }>()
);

export const getProductsQuantityAction = createAction(
  '[SHOPPING_CART_PAGE] getProductsQuantityAction'
);
export const setProductsQuantityAction = createAction(
  '[SHOPPING_CART_PAGE] setProductsQuantityAction',
  props<{ productsQuantity: number }>()
);

export const addProductToCartAction = createAction(
  '[SHOPPING_CART_PAGE] addProductToCartAction',
  props<{ product: ProductDetailInterface }>()
);
export const addProductToCartSuccessAction = createAction(
  '[SHOPPING_CART_PAGE] addProductToCartSuccessAction',
  props<{ products: ProductDetailInterface[] }>()
);

export const removeProductFromCartAction = createAction(
  '[SHOPPING_CART_PAGE] removeProductFromCartAction',
  props<{ product: ProductDetailInterface }>()
);
export const removeProductFromCartSuccessAction = createAction(
  '[SHOPPING_CART_PAGE] removeProductFromCartSuccessAction',
  props<{ products: ProductDetailInterface[] }>()
);

export const deleteProductFromCartAction = createAction(
  '[SHOPPING_CART_PAGE] deleteProductFromCartAction',
  props<{ product: ProductDetailInterface }>()
);
export const deleteProductFromCartSuccessAction = createAction(
  '[SHOPPING_CART_PAGE] deleteProductFromCartSuccessAction',
  props<{ products: ProductDetailInterface[] }>()
);

export const setShoppingCartActionError = createAction(
  '[SHOPPING_CART_PAGE] setShoppingCartActionError',
  props<{ error: string }>()
);

export const resetShoppingCartProductsState = createAction(
  '[SHOPPING_CART_PAGE] resetShoppingCartProductsState'
);

export const shoppingCartReducer = createReducer(
  productsListPageInitState,
  on(
    setShoppingCartProductsListAction,
    (state, action): ShoppingCartInterface => ({
      ...state,
      loadBanners: true,
      products: [...action.products],
    })
  ),
  on(
    setProductByIdAction,
    (state, action): ShoppingCartInterface => ({
      ...state,
      loadBanners: true,
      productQuantity: action.productQuantity,
    })
  ),
  on(
    setProductsQuantityAction,
    (state, action): ShoppingCartInterface => ({
      ...state,
      loadBanners: true,
      productsQuantity: action.productsQuantity,
    })
  ),
  on(
    addProductToCartSuccessAction,
    (state, action): ShoppingCartInterface => ({
      ...state,
      loadBanners: true,
      products: [...action.products],
      productsQuantity: state.productsQuantity + 1,
    })
  ),
  on(
    removeProductFromCartSuccessAction,
    (state, action): ShoppingCartInterface => ({
      ...state,
      loadBanners: true,
      products: [...action.products],
      productsQuantity: state.productsQuantity - 1,
    })
  ),
  on(
    deleteProductFromCartSuccessAction,
    (state, action): ShoppingCartInterface => ({
      ...state,
      loadBanners: true,
      products: [...action.products],
    })
  ),
  on(
    resetShoppingCartProductsState,
    (): ShoppingCartInterface => ({
      ...productsListPageInitState,
    })
  )
);

export const selectFeature = createFeatureSelector<ShoppingCartInterface>(
  'shoppingCartProductsList'
);
export const selectShoppingCartProductsList = createSelector(
  selectFeature,
  (state) => state.products
);
export const selectShoppingCartProductsListLoader = createSelector(
  selectFeature,
  (state) => state.loadBanners
);
export const selectProductQuantity = createSelector(
  selectFeature,
  (state) => state.productQuantity
);
export const selectProductsQuantity = createSelector(
  selectFeature,
  (state) => state.productsQuantity
);
