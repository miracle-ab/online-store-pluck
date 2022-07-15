import { Component, OnInit } from '@angular/core';
import { BannerItemInterface } from 'src/app/core/interfaces/banner-item.interface';
import { AppConfigService } from 'src/app/core/services/app-config.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent implements OnInit {
  public banners: BannerItemInterface[] | undefined;

  constructor(private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.banners = this.appConfigService.getBanners();
  }
}
