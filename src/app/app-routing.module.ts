import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import {
    CryptocurrencyDetailComponent
} from './shared/modules/cryptocurrency-detail/components/cryptocurrency-detail.component';
import {
    CryptocurrencyListComponent
} from './shared/modules/cryptocurrency-list/components/cryptocurrency-list.component';
import {
    CurrencyConverterComponent
} from './shared/modules/currency-converter/components/currency-converter/currency-converter.component';
import { NewsComponent } from './shared/modules/news/news/news.component';
import {
    ProfilePageComponent
} from './shared/modules/profile/components/profile-page/profile-page.component';
import {
    AboutCryptoComponent
} from './shared/pages/about-crypto/components/about-crypto/about-crypto.component';
import { HomePageComponent } from './shared/pages/home-page/components/home-page.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // {
    //     path: 'login',
    //     component: LoginComponent,
    //     ...canActivate(redirectToHome),
    // },
    // {
    //     path: 'register',
    //     component: RegisterComponent,
    //     ...canActivate(redirectToHome),
    // },
    {
        path: 'cryptocurrency-list',
        component: CryptocurrencyListComponent,
        ...canActivate(redirectToLogin),
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        ...canActivate(redirectToLogin),
    },
    {
        path: 'news',
        component: NewsComponent,
    },
    {
        path: 'what-is-cryptocurrency',
        component: AboutCryptoComponent,
    },
    {
        path: 'currency-convert',
        component: CurrencyConverterComponent,
    },

    { path: 'cryptocurrency-detail/:id', component: CryptocurrencyDetailComponent },

    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
