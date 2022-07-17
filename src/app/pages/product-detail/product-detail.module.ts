import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailLayoutComponent } from './components/product-detail-layout/product-detail-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [ProductDetailLayoutComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CoreModule,
  ],
})
export class ProductDetailModule {}
