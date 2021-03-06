import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatDialogModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
    ],
})
export class MaterialModule {}
