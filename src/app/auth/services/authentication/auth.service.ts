import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}

    register({ ...request }): Observable<any> {
        return from(
            createUserWithEmailAndPassword(this.auth, request.email, request.password),
        );
    }

    login({...request}): Observable<any> {
        return from(signInWithEmailAndPassword(this.auth, request.email, request.password));
    }

    private setToken(response: any): void {
        if (response) {
            const expDate = new Date(new Date().getTime());
        }
    }
}
