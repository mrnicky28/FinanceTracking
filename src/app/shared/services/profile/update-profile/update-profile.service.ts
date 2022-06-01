import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/authentication/auth.service';
import { ProfileUser } from 'src/app/shared/interfaces/user-profile.interface';

import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class UpdateProfileService {
    get currentUserProfile$(): Observable<ProfileUser | null> {
        return this.authService.currentUser$.pipe(
            switchMap((user) => {
                if (!user?.uid) {
                    return of(null);
                }
                const ref = doc(this.firestore, 'users', user?.uid);
                return docData(ref) as Observable<ProfileUser>;
            }),
        );
    }

    constructor(private firestore: Firestore, private authService: AuthService) {}

    addUser(user: any): Observable<any> {
        console.log('addUser', user);

        const ref = doc(this.firestore, 'user', user?.uid);
        return from(setDoc(ref, user));
    }

    updateUser(user: ProfileUser): Observable<any> {
        const ref = doc(this.firestore, 'user', user?.uid);
        return from(updateDoc(ref, { ...user }));
    }
}
