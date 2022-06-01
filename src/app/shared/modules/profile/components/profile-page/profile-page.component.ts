import { concatMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/authentication/auth.service';
import { ImageUploadService } from 'src/app/shared/services/profile/image-upload.service';

import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
    user$ = this.authService.currentUser$;

    profileForm = new FormGroup({
        uid: new FormControl(''),
        username: new FormControl(''),
        firstName: new FormControl(''),
        surname: new FormControl(''),
        birthDay: new FormControl(''),
        phone: new FormControl(''),
        country: new FormControl(''),
        city: new FormControl(''),
        address: new FormControl(''),
    });
    constructor(
        private authService: AuthService,
        private imageUploadService: ImageUploadService,
        private toast: HotToastService,
    ) {}

    ngOnInit(): void {}

    uploadImage(event: any, user: User) {
        this.imageUploadService
            .uploadImage(event.target.files[0], `images/profile/${user.uid}`)
            .pipe(
                this.toast.observe({
                    loading: 'Image is being uploaded...',
                    success: 'Image uploaded!',
                    error: 'There was an error in uploading',
                }),
                concatMap((photoURL) =>
                    this.authService.updatetProfileData({ photoURL }),
                ),
            )
            .subscribe();
    }

    saveProfile() {}
}
