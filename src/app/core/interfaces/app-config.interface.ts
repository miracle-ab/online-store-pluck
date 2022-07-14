import { BannerItemInterface } from './banner-item.interface';

export interface AppConfig {
  production: boolean;
  banners: BannerItemInterface[];
}
