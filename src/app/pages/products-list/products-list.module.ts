import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListLayoutComponent } from './components/products-list-layout/products-list-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [ProductsListLayoutComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CoreModule,
  ],
})
export class ProductsListModule {}
