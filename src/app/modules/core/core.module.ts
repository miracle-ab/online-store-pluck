import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPricePipe } from './pipes/discount-price.pipe';

@NgModule({
  declarations: [DiscountPricePipe],
  imports: [CommonModule],
  exports: [DiscountPricePipe],
})
export class CoreModule {}
