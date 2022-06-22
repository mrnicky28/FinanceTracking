import { AppRoutingModule } from 'src/app/app-routing.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';

import {
    CurrencyConverterComponent
} from './components/currency-converter/currency-converter.component';

@NgModule({
    declarations: [CurrencyConverterComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatSelectModule,
        HttpClientModule,
    ],
    exports: [CurrencyConverterComponent],
})
export class CurrencyConverterModule {}
