import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './core/services/app-config.service';
import { CarouselBanersModule } from './modules/carousel-banners/carousel-banners.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponentModule } from './layout/main-component.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';
import { reducers } from './store/reducers';

export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselBanersModule,
    BrowserAnimationsModule,
    MainComponentModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
