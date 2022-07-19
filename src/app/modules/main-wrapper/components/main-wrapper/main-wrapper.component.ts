import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BannerItemInterface } from 'src/app/core/interfaces/banner-item.interface';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import { ShoppingCartApiService } from 'src/app/core/services/shopping-cart-api.service';
import { selectProductsListLoader } from 'src/app/store/reducers/products.actions';
import {
  getProductsQuantityAction,
  selectProductsQuantity,
} from 'src/app/store/reducers/shopping-cart.actions';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent implements OnInit {
  public banners: BannerItemInterface[] | undefined;
  public loadBanner$: Observable<boolean>;
  public productsQuantity$: Observable<number>;
  quantity: number;

  constructor(
    private appConfigService: AppConfigService,
    private productListApi: ProductsApiService,
    private shoppingCartService: ShoppingCartApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.banners = this.appConfigService.getBanners();
    this.loadBanner$ = this.productListApi.loadBanner;

    this.store.dispatch(getProductsQuantityAction());
    this.productsQuantity$ = this.store.select(selectProductsQuantity);
  }
}
