import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import {
    CryptocurrencyListComponent
} from './shared/modules/cryptocurrency-list/components/cryptocurrency-list.component';
import {
    ProfilePageComponent
} from './shared/modules/profile/components/profile-page/profile-page.component';
import { HomePageComponent } from './shared/pages/home-page/components/home-page.component';

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
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
