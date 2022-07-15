import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/routers-list';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    redirectTo: ROUTES.SHOWCASE_PAGE_ROUTH,
    pathMatch: 'full',
  },
  {
    path: ROUTES.SHOWCASE_PAGE_ROUTH,
    loadChildren: () =>
      import('./layout/main-component.module').then(
        (m) => m.MainComponentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
