import { from, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
    UserInfo
} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser$ = authState(this.auth);

    constructor(private auth: Auth) {}


    register({ ...request }): Observable<any> {
        return from(
            createUserWithEmailAndPassword(this.auth, request.email, request.password),
        );
    }

    login({ ...request }): Observable<any> {
        return from(
            signInWithEmailAndPassword(this.auth, request.email, request.password),
        );
    }

    updatetProfileData(profileData: Partial<UserInfo>): Observable<any> {
        const user = this.auth.currentUser;
        return of(user).pipe(
            concatMap((user) => {
                if (!user) throw new Error('Not Authenticated');

                return updateProfile(user, profileData);
            }),
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
