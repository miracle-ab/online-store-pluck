import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routers } from 'src/app/core/constants/routers-list';
import { ProductsListLayoutComponent } from './components/products-list-layout/products-list-layout.component';

const routes: Routes = [
  {
    path: routers.main,
    component: ProductsListLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsListRoutingModule {}
