import { Component, OnInit } from '@angular/core';
import { BannerItemInterface } from 'src/app/core/interfaces/banner-item.interface';
import { AppConfigService } from 'src/app/core/services/app-config.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  public banners: BannerItemInterface[] | undefined;

  constructor(private appConfigService: AppConfigService) {}

  ngOnInit(): void {
    this.banners = this.appConfigService.getBanners();
  }
}
