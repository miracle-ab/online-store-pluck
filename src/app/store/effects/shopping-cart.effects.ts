import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductDetailInterface } from 'src/app/core/interfaces/product-detail.interface';
import { Inject, Injectable } from '@angular/core';
import { ShoppingCartApiService } from 'src/app/core/services/shopping-cart-api.service';
import {
  getShoppingCartProductsListAction,
  setShoppingCartProductsListAction,
  setShoppingCartProductsListActionError,
  addProductToCartAction,
  addProductToCartSuccessAction,
  removeProductFromCartAction,
  removeProductFromCartSuccessAction,
  setShoppingCartActionError,
  deleteProductFromCartAction,
  deleteProductFromCartSuccessAction,
  setProductByIdAction,
  getProductByIdFromCartAction,
  setProductsQuantityAction,
  getProductsQuantityAction,
} from '../reducers/shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
  constructor(
    private store: Store,
    @Inject(Actions) private actions$: Actions,
    private shoppingCartApiService: ShoppingCartApiService
  ) {}

  getProductsListForShoppingCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(getShoppingCartProductsListAction),
      mergeMap(() => {
        return this.shoppingCartApiService.getItems().pipe(
          map((result: ProductDetailInterface[]) => {
            return setShoppingCartProductsListAction({
              products: result ? result : [],
            });
          }),
          catchError((err: string) => {
            return of(setShoppingCartProductsListActionError({ error: err }));
          })
        );
      })
    );
  });

  getProductById = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductByIdFromCartAction),
      mergeMap((actionData) => {
        return this.shoppingCartApiService.getItemQuantity(actionData.id).pipe(
          map((result: number) => {
            return setProductByIdAction({
              productQuantity: result ? result : 0,
            });
          }),
          catchError((err: string) => {
            return of(setShoppingCartProductsListActionError({ error: err }));
          })
        );
      })
    );
  });

  getProductsQuantity = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsQuantityAction),
      mergeMap(() => {
        return this.shoppingCartApiService.getItemsQuantity().pipe(
          map((result: number) => {
            return setProductsQuantityAction({
              productsQuantity: result ? result : 0,
            });
          }),
          catchError((err: string) => {
            return of(setShoppingCartProductsListActionError({ error: err }));
          })
        );
      })
    );
  });

  addProductToCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProductToCartAction),
      mergeMap((actionData) => {
        this.shoppingCartApiService.addQuantityItemToCart(actionData.product);
        return this.shoppingCartApiService.getItems().pipe(
          map((result: ProductDetailInterface[]) => {
            return addProductToCartSuccessAction({
              products: result ? result : [],
            });
          }),
          catchError((err: string) => {
            return of(setShoppingCartActionError({ error: err }));
          })
        );
      })
    );
  });

  removeProductToCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeProductFromCartAction),
      mergeMap((actionData) => {
        this.shoppingCartApiService.removeQuantityItemFromCart(
          actionData.product
        );
        return this.shoppingCartApiService.getItems().pipe(
          map((result: ProductDetailInterface[]) => {
            return removeProductFromCartSuccessAction({
              products: result ? result : [],
            });
          }),
          catchError((err: string) => {
            return of(setShoppingCartActionError({ error: err }));
          })
        );
      })
    );
  });

  deleteItemFromCart = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteProductFromCartAction),
      mergeMap((actionData) => {
        this.shoppingCartApiService.deleteItemFromCart(actionData.product);
        return this.shoppingCartApiService.getItems().pipe(
          map((result: ProductDetailInterface[]) => {
            return deleteProductFromCartSuccessAction({
              products: result ? result : [],
            });
          }),
          catchError((err: string) => {
            return of(setShoppingCartActionError({ error: err }));
          })
        );
      })
    );
  });
}
