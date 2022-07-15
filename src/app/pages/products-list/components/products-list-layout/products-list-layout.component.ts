import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductDetailinterface } from 'src/app/core/interfaces/product-detail.interface';
import { ProductsApiService } from 'src/app/core/services/products-api.service';

@Component({
  selector: 'app-products-list-layout',
  templateUrl: './products-list-layout.component.html',
  styleUrls: ['./products-list-layout.component.scss'],
})
export class ProductsListLayoutComponent implements OnInit, OnDestroy {
  public productsList: ProductDetailinterface[];
  public productsListSub: Subscription;

  constructor(public productsListApi: ProductsApiService) {}

  ngOnDestroy(): void {
    this.productsListSub.unsubscribe();
  }

  ngOnInit(): void {
    this.subscribeToProductsList();
  }

  subscribeToProductsList(): void {
    this.productsListSub = this.productsListApi
      .getListOfProducts()
      .subscribe((data) => {
        this.productsList = data;
      });
  }
}
