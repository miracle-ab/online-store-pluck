import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../interfaces/app-config.interface';
import { BannerItemInterface } from '../interfaces/banner-item.interface';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config: AppConfig | undefined;
  loaded = false;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http
      .get<AppConfig>('/assets/configs/runtime-environment.json')
      .toPromise()
      .then((data) => {
        this.config = data;
        this.loaded = true;
      });
  }

  getConfig(): AppConfig | undefined {
    return this.config;
  }

  getBanners(): BannerItemInterface[] | undefined {
    return this.config?.banners;
  }
}
