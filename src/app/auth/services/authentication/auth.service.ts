import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser$ = authState(this.auth);

    constructor(private auth: Auth) {}

    register({ ...request }): Observable<any> {
        console.log(request);

        return from(
            createUserWithEmailAndPassword(this.auth, request.email, request.password),
        ).pipe(
            switchMap(({ user }) =>
                updateProfile(user, { displayName: request.username }),
            ),
        );
    }

    login({ ...request }): Observable<any> {
        return from(
            signInWithEmailAndPassword(this.auth, request.email, request.password),
        );
    }

    logout() {
        return from(this.auth.signOut());
    }

    private setToken(response: any): void {
        if (response) {
            const expDate = new Date(new Date().getTime());
        }
    }
}
