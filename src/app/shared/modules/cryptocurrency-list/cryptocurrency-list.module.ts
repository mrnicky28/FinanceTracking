import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../material/material.module';
import { CryptocurrencyListComponent } from './components/cryptocurrency-list.component';

@NgModule({
    declarations: [CryptocurrencyListComponent],
    imports: [AppRoutingModule, CommonModule, MaterialModule],
    exports: [RouterModule],
})
export class CryptocurrencyListModule {}
