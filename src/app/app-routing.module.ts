import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/routers-list';
import { MainComponentComponent } from './layout/main-layout/main-component.component';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: MainComponentComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
