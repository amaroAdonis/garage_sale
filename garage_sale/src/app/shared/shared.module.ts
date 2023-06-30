import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderTemplateComponent } from "./header-template/header-template.component";
import { RouterModule } from "@angular/router";
import { AdminHeaderTemplateComponent } from "./admin-header-template/admin.header-template.component";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HeaderTemplateComponent, AdminHeaderTemplateComponent],
    exports: [HeaderTemplateComponent, AdminHeaderTemplateComponent]
})
export class SharedModule {}