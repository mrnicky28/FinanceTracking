import { concatMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/authentication/auth.service';
import { ProfileUser } from 'src/app/shared/interfaces/user-profile.interface';
import { ImageUploadService } from 'src/app/shared/services/profile/image-upload.service';
import {
    UpdateProfileService
} from 'src/app/shared/services/profile/update-profile/update-profile.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
    user$ = this.updateProfileService.currentUserProfile$;

    profileForm = new FormGroup({
        uid: new FormControl(''),
        displayName: new FormControl(''),
        firstName: new FormControl(''),
        surname: new FormControl(''),
        birthDay: new FormControl(''),
        email: new FormControl('', Validators.email),
        phone: new FormControl('', [
            Validators.pattern(`^([0-9]{2})?(s+)?[0-9]{3}-[0-9]{2}-[0-9]{2}$`),
        ]),
        country: new FormControl(''),
        city: new FormControl(''),
        address: new FormControl(''),
    });
    constructor(
        private authService: AuthService,
        private updateProfileService: UpdateProfileService,
        private imageUploadService: ImageUploadService,
        private toast: HotToastService,
    ) {}

    ngOnInit(): void {
        this.updateProfileService.currentUserProfile$
            .pipe(untilDestroyed(this))
            .subscribe((user) => {
                this.profileForm.patchValue({ ...user });
            });
    }

    uploadImage(event: any, user: ProfileUser) {
        this.imageUploadService
            .uploadImage(event.target.files[0], `images/profile/${user.uid}`)
            .pipe(
                this.toast.observe({
                    loading: 'Image is being uploaded...',
                    success: 'Image uploaded!',
                    error: 'There was an error in uploading',
                }),
                concatMap((photoURL) =>
                    this.updateProfileService.updateUser({
                        uid: user.uid,
                        photoURL,
                    }),
                ),
            )
            .subscribe();
    }

    saveProfile() {
        const profileData = this.profileForm.value;
        this.updateProfileService
            .updateUser(profileData)
            .pipe(
                this.toast.observe({
                    loading: 'Updating data...',
                    success: 'Data has been updated',
                    error: 'There was an error in updating the data',
                }),
            )
            .subscribe();
    }
}
