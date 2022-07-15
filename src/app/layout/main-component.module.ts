import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main-layout/main-component.component';
import { MainComponentRoutersModule } from './main-component-routers.module';
import { MainWrapperModule } from '../modules/main-wrapper/main-wrapper.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainComponentRoutersModule, MainWrapperModule],
  exports: [MainComponent],
})
export class MainComponentModule {}
