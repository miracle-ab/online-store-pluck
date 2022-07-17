import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { NavMenuLayoutComponent } from './components/nav-menu-layout/nav-menu-layout.component';
import { FooterLayoutComponent } from './components/footer-layout/footer-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { CarouselBanersModule } from '../carousel-banners/carousel-banners.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainWrapperComponent,
    NavMenuLayoutComponent,
    FooterLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    CarouselBanersModule,
    RouterModule,
  ],
  exports: [
    MainWrapperComponent,
    NavMenuLayoutComponent,
    FooterLayoutComponent,
  ],
})
export class MainWrapperModule {}
