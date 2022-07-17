import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { routers } from 'src/app/core/constants/routers-list';
import { ProductDetailinterface } from 'src/app/core/interfaces/product-detail.interface';
import { ProductsApiService } from 'src/app/core/services/products-api.service';
import {
  getProductAction,
  selectProduct,
} from 'src/app/store/reducers/product-detail.action';

@Component({
  selector: 'app-product-detail-layout',
  templateUrl: './product-detail-layout.component.html',
  styleUrls: ['./product-detail-layout.component.scss'],
})
export class ProductDetailLayoutComponent implements OnInit, OnDestroy {
  public productId: string;
  public routers: any;
  private activatedRouteSub: Subscription;
  public product$: Observable<ProductDetailinterface | null>;

  constructor(
    public productsListApi: ProductsApiService,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  ngOnDestroy(): void {
    this.activatedRouteSub.unsubscribe();
  }

  ngOnInit(): void {
    this.routers = routers;
    this.activatedRouteSub = this.activatedRoute.params.subscribe((res) => {
      this.productId = res[this.routers.productId];
      this.store.dispatch(getProductAction({ id: this.productId }));
      this.product$ = this.store.select(selectProduct);
      this.productsListApi.loadBanner.next(true);
    });
  }
}
