import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private auth: Auth) {}

    register({ ...request }): Observable<any> {
        console.log('authService', request);

        return from(
            createUserWithEmailAndPassword(
                this.auth,
                request.email,
                request.password,
            ),
        );
    }
}
