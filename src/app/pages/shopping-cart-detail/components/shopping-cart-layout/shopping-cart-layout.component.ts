import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductDetailInterface } from 'src/app/core/interfaces/product-detail.interface';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import { CartDialogComponent } from 'src/app/modules/core/components/cart-dialog/cart-dialog.component';
import { DiscountPricePipe } from 'src/app/modules/core/pipes/discount-price.pipe';
import {
  addProductToCartAction,
  getShoppingCartProductsListAction,
  removeProductFromCartAction,
  selectShoppingCartProductsList,
} from 'src/app/store/reducers/shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart-layout',
  templateUrl: './shopping-cart-layout.component.html',
  styleUrls: ['./shopping-cart-layout.component.scss'],
})
export class ShoppingCartLayoutComponent implements OnInit {
  public items$: Observable<ProductDetailInterface[] | null>;
  items: ProductDetailInterface[];
  itemPrice: number;

  constructor(
    private productsListApi: ProductsApiService,
    private store: Store,
    private currencyPipe: CurrencyPipe,
    private discountPipe: DiscountPricePipe,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getShoppingCartProductsListAction());
    this.store.select(selectShoppingCartProductsList).subscribe((items) => {
      this.items = JSON.parse(JSON.stringify(items));
    });
    this.productsListApi.loadBanner.next(true);
  }

  get total() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        sumAllProducts: sum.sumAllProducts + x.quantity * x.price,
      }),
      { qtyTotal: 1, sumAllProducts: 0 }
    ).sumAllProducts;
  }

  get totalItems() {
    return this.items.reduce(
      (product, x) => ({
        qtyTotal: product.qtyTotal + x.quantity,
      }),
      { qtyTotal: 0 }
    ).qtyTotal;
  }

  addProductToCart(product: ProductDetailInterface, index: number) {
    if (product) {
      let productItem = {
        ...product,
      };
      this.store.dispatch(addProductToCartAction({ product: productItem }));
    }
  }

  removeItemFromCart(product: ProductDetailInterface, index: number) {
    if (product) {
      let productItem = {
        ...product,
      };
      this.store.dispatch(
        removeProductFromCartAction({ product: productItem })
      );
    }
  }

  openDialog() {
    this.dialog.open(CartDialogComponent, {
      width: '250px',
      height: '250px',
    });
  }
}
