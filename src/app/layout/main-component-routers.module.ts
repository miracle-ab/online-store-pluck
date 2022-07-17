import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routers } from 'src/app/core/constants/routers-list';
import { MainComponent } from './main-layout/main-component.component';

const router: Routes = [
  {
    path: routers.main,
    component: MainComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class MainComponentRoutersModule {}
