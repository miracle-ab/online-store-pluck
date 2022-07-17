import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BannerItemInterface } from 'src/app/core/interfaces/banner-item.interface';
import { AppConfigService } from 'src/app/core/services/app-config.service';
import { ProductsApiService } from 'src/app/core/services/products-api.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent implements OnInit {
  public banners: BannerItemInterface[] | undefined;
  loadBanner$: Observable<boolean>;

  constructor(
    private appConfigService: AppConfigService,
    private productListApi: ProductsApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.banners = this.appConfigService.getBanners();
    this.loadBanner$ = this.productListApi.loadBanner;
  }
}
