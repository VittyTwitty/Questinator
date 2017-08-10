import { NgModule } from '@angular/core';

import { NameComponent } from './name.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({

    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [NameComponent],
    providers: [],
})
export class NameModule { }
