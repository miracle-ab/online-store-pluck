import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountPricePipe } from './pipes/discount-price.pipe';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DiscountPricePipe, CartDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [DiscountPricePipe],
  providers: [DiscountPricePipe],
})
export class CoreModule {}
