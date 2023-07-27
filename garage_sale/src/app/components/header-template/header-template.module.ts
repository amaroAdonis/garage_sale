import { NgModule } from "@angular/core";
import { HeaderTemplateComponent } from "./header-template.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderTemplateComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule
    ]

})
export class HeaderTemplateModule{}