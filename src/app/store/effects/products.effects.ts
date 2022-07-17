import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import {
  getProductsListAction,
  setProductsListAction,
  setProductsListActionError,
} from '../reducers/products.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductDetailinterface } from 'src/app/core/interfaces/product-detail.interface';
import { Inject, Injectable } from '@angular/core';
import {
  getProductAction,
  setProducActionError,
  setProductAction,
} from '../reducers/product-detail.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private store: Store,
    @Inject(Actions) private actions$: Actions,
    private productsApiService: ProductsApiService
  ) {}

  getProductsList = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsListAction),
      mergeMap(() => {
        return this.productsApiService.getListOfProducts().pipe(
          map((result: ProductDetailinterface[]) => {
            return setProductsListAction({ products: result ? result : [] });
          }),
          catchError((err: string) => {
            return of(setProductsListActionError({ error: err }));
          })
        );
      })
    );
  });

  getProduct = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductAction),
      mergeMap((actionData) => {
        return this.productsApiService.getListOfProducts().pipe(
          map((result: ProductDetailinterface[]) => {
            const product = result.filter(
              (product) => product.id === actionData.id
            )[0];
            return setProductAction({ product: product ? product : null });
          }),
          catchError((err: string) => {
            return of(setProducActionError({ error: err }));
          })
        );
      })
    );
  });
}
