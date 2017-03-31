/**
 * picker.module
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DateTimePickerDirective } from './picker.directive';
import { PickerService } from './picker.service';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        DateTimePickerDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        DateTimePickerDirective,
    ],
    providers: [],
})
export class DateTimePickerModule {
}
