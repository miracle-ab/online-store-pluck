import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBannersComponent } from './components/carousel-banners.component';

@NgModule({
  declarations: [CarouselBannersComponent],
  imports: [CommonModule],
  exports: [CarouselBannersComponent],
})
export class CarouselBanersModule {}
