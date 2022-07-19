import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { routers } from 'src/app/core/constants/routers-list';
import { ProductDetailInterface } from 'src/app/core/interfaces/product-detail.interface';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import { DiscountPricePipe } from 'src/app/modules/core/pipes/discount-price.pipe';
import {
  getProductAction,
  selectProduct,
} from 'src/app/store/reducers/product-detail.actions';
import {
  addProductToCartAction,
  getProductByIdFromCartAction,
  removeProductFromCartAction,
  selectProductQuantity,
} from 'src/app/store/reducers/shopping-cart.actions';

@Component({
  selector: 'app-product-detail-layout',
  templateUrl: './product-detail-layout.component.html',
  styleUrls: ['./product-detail-layout.component.scss'],
})
export class ProductDetailLayoutComponent implements OnInit, OnDestroy {
  public routers: any;
  public productId: string;
  public product: ProductDetailInterface | null;
  public product$: Observable<ProductDetailInterface | null>;
  private activatedRouteSub: Subscription;
  public productCartQnt$: Observable<number>;
  public productCartQnt: number;

  constructor(
    private store: Store,
    public productsListApi: ProductsApiService,
    private activatedRoute: ActivatedRoute,
    private discountPipe: DiscountPricePipe
  ) {}

  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routers = routers;
    this.activatedRouteSub = this.activatedRoute.params.subscribe((res) => {
      this.productId = res[this.routers.productId];
      this.store.dispatch(getProductAction({ id: this.productId }));
      this.store.dispatch(getProductByIdFromCartAction({ id: this.productId }));
      this.store
        .select(selectProductQuantity)
        .subscribe((quantity) => (this.productCartQnt = quantity));
      this.store
        .select(selectProduct)
        .subscribe((product) => (this.product = product));
      this.productsListApi.loadBanner.next(true);
    });
  }

  addProductToCart() {
    if (this.product) {
      this.productCartQnt += 1;
      let productItem = {
        ...this.product,
        price: this.discountPipe.transform(this.product) ?? this.product.price,
      };
      this.store.dispatch(addProductToCartAction({ product: productItem }));
    }
  }

  removeItemFromCart() {
    if (this.product) {
      this.productCartQnt -= 1;
      let productItem = {
        ...this.product,
        price: this.discountPipe.transform(this.product) ?? this.product.price,
      };
      this.store.dispatch(
        removeProductFromCartAction({ product: productItem })
      );
    }
  }
}
