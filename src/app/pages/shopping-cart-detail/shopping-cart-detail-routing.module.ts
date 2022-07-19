import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routers } from 'src/app/core/constants/routers-list';
import { ShoppingCartLayoutComponent } from './components/shopping-cart-layout/shopping-cart-layout.component';

const routes: Routes = [
  {
    path: routers.main,
    component: ShoppingCartLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartDetailRoutingModule {}
