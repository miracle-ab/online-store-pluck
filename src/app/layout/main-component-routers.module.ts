import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/routers-list';
import { MainComponent } from './main-layout/main-component.component';

const router: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: MainComponent,
    children: [
      {
        path: ROUTES.MAIN_ROUTH,
        pathMatch: 'full',
        redirectTo: ROUTES.PRODUCTS_LIST_ROUTH,
      },
      {
        path: ROUTES.PRODUCTS_LIST_ROUTH,
        loadChildren: () =>
          import('../pages/products-list/products-list.module').then(
            (m) => m.ProductsListModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class MainComponentRoutersModule {}
