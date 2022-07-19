import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { ShoppingCartDetailRoutingModule } from './shopping-cart-detail-routing.module';
import { ShoppingCartLayoutComponent } from './components/shopping-cart-layout/shopping-cart-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [ShoppingCartLayoutComponent],
  imports: [
    CommonModule,
    ShoppingCartDetailRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CoreModule,
  ],

  providers: [CurrencyPipe],
})
export class ShoppingCartDetailModule {}
