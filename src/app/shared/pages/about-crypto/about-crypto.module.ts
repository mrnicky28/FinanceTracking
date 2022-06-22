import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutCryptoComponent } from './components/about-crypto/about-crypto.component';



@NgModule({
    declarations: [AboutCryptoComponent],
    imports: [CommonModule],
    exports: [AboutCryptoComponent],
})
export class AboutCryptoModule {}
