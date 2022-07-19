import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { routers } from 'src/app/core/constants/routers-list';
import { ProductDetailInterface } from 'src/app/core/interfaces/product-detail.interface';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import { DiscountPricePipe } from 'src/app/modules/core/pipes/discount-price.pipe';
import {
  getProductsListAction,
  selectProductsList,
} from 'src/app/store/reducers/products.actions';
import { addProductToCartAction } from 'src/app/store/reducers/shopping-cart.actions';

@Component({
  selector: 'app-products-list-layout',
  templateUrl: './products-list-layout.component.html',
  styleUrls: ['./products-list-layout.component.scss'],
})
export class ProductsListLayoutComponent implements OnInit {
  public productsList: ProductDetailInterface[];
  public productsListSub: Subscription;
  public productsList$: Observable<ProductDetailInterface[]>;

  constructor(
    public productsListApi: ProductsApiService,
    private router: Router,
    private store: Store,
    private discountPipe: DiscountPricePipe
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsListAction());
    this.productsList$ = this.store.select(selectProductsList);
    this.productsListApi.loadBanner.next(true);
  }

  showDetail(id: string): void {
    this.router.navigate([routers.products, id]);
  }

  addProductToCart(product: ProductDetailInterface) {
    let productItem = {
      ...product,
      price: this.discountPipe.transform(product) ?? product.price,
    };
    this.store.dispatch(addProductToCartAction({ product: productItem }));
  }
}
