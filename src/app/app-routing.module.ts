import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routers } from './core/constants/routers-list';
import { MainComponent } from './layout/main-layout/main-component.component';

const routes: Routes = [
  {
    path: routers.main,
    component: MainComponent,
    children: [
      {
        path: routers.main,
        pathMatch: 'full',
        redirectTo: routers.products,
      },
      {
        path: routers.products,
        loadChildren: () =>
          import('./pages/products-list/products-list.module').then(
            (m) => m.ProductsListModule
          ),
      },
      {
        path: `${routers.products}/:${routers.productId}`,
        loadChildren: () =>
          import('./pages/product-detail/product-detail.module').then(
            (m) => m.ProductDetailModule
          ),
      },
      {
        path: routers.shoppingCart,
        loadChildren: () =>
          import(
            './pages/shopping-cart-detail/shopping-cart-detail.module'
          ).then((m) => m.ShoppingCartDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
