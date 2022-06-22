import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsComponent } from './news/news.component';

@NgModule({
    declarations: [NewsComponent],
    imports: [CommonModule],
    exports: [NewsComponent],
})
export class NewsModule {}
