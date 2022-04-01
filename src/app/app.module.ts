import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CurrencyTickerModule } from './shared/modules/currency-ticker/currency-ticker.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { PromoCarouselModule } from './shared/modules/promo-carousel/promo-carousel.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        MaterialModule,
        MatDialogModule,
        AuthModule,
        AppRoutingModule,
        BrowserModule,
        TopBarModule,
        PromoCarouselModule,
        NgbModule,
        CurrencyTickerModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
