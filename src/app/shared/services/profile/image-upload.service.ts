import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
    providedIn: 'root',
})
export class ImageUploadService {
    constructor(private storage: Storage) {}

    uploadImage(image: File, path: string): Observable<string> {
        const storageRef = ref(this.storage, path);
        const uploadTask = from(uploadBytes(storageRef, image));
        return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
    }
}
