import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routers } from 'src/app/core/constants/routers-list';
import { ProductDetailLayoutComponent } from './components/product-detail-layout/product-detail-layout.component';

const routes: Routes = [
  {
    path: routers.main,
    component: ProductDetailLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailRoutingModule {}
