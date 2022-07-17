import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { routers } from 'src/app/core/constants/routers-list';
import { ProductDetailinterface } from 'src/app/core/interfaces/product-detail.interface';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import {
  getProductsListAction,
  selectProductsList,
} from 'src/app/store/reducers/products.actions';

@Component({
  selector: 'app-products-list-layout',
  templateUrl: './products-list-layout.component.html',
  styleUrls: ['./products-list-layout.component.scss'],
})
export class ProductsListLayoutComponent implements OnInit {
  public productsList: ProductDetailinterface[];
  public productsListSub: Subscription;
  public productsList$: Observable<ProductDetailinterface[]>;

  constructor(
    public productsListApi: ProductsApiService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsListAction());
    this.productsList$ = this.store.select(selectProductsList);
    this.productsListApi.loadBanner.next(true);
  }

  showDetail(id: string): void {
    this.router.navigate([routers.products, id]);
  }
}
