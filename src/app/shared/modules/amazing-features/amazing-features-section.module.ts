import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AmazingFeaturesSectionComponent } from './components/amazing-features-section.component';

@NgModule({
    declarations: [AmazingFeaturesSectionComponent],
    imports: [CommonModule],
    exports: [AmazingFeaturesSectionComponent],
})
export class AmazingFeaturesSectionModule {}
