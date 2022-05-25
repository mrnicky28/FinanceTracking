import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {
    AmazingFeaturesSectionModule
} from './shared/modules/amazing-features/amazing-features-section.module';
import {
    CryptocurrencyDetailModule
} from './shared/modules/cryptocurrency-detail/cryptocurrency-detail.module';
import {
    CryptocurrencyListModule
} from './shared/modules/cryptocurrency-list/cryptocurrency-list.module';
import { CurrencyTickerModule } from './shared/modules/currency-ticker/currency-ticker.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { PromoCarouselModule } from './shared/modules/promo-carousel/promo-carousel.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        MaterialModule,
        MatDialogModule,
        AuthModule,
        AppRoutingModule,
        BrowserModule,
        TopBarModule,
        PromoCarouselModule,
        NgbModule,
        CurrencyTickerModule,
        CryptocurrencyListModule,
        CryptocurrencyDetailModule,
        AmazingFeaturesSectionModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        BrowserAnimationsModule,
        StoreModule.forRoot({ router: routerReducer }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        EffectsModule.forRoot([]),
        HotToastModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
